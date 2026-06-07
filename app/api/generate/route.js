
import clientPromise from "@/lib/mongodb"

const slugPattern = /^[a-zA-Z0-9-]+$/
const maxAliasAttempts = 100

export async function POST(request) {

    try {
        const body = await request.json() 
        const url = body.url?.trim()
        const requestedShorturl = body.shorturl?.trim().toLowerCase()

        if (!url || !requestedShorturl) {
            return Response.json({success: false, error: true, message: 'URL and short URL are required' }, { status: 400 })
        }

        if (!slugPattern.test(requestedShorturl)) {
            return Response.json({success: false, error: true, message: 'Short URL can only contain letters, numbers, and hyphens' }, { status: 400 })
        }

        try {
            const parsedUrl = new URL(url)
            if (!["http:", "https:"].includes(parsedUrl.protocol)) {
                return Response.json({success: false, error: true, message: 'Only HTTP and HTTPS URLs are allowed' }, { status: 400 })
            }
        } catch {
            return Response.json({success: false, error: true, message: 'Please enter a valid URL with http:// or https://' }, { status: 400 })
        }

        const client = await clientPromise;
        const db = client.db("sniplink")
        const collection = db.collection("url")

        await collection.createIndex({ shorturl: 1 }, { unique: true })

        const existingLink = await collection.findOne({
            url,
            $or: [
                { requestedShorturl },
                { shorturl: new RegExp(`^${requestedShorturl}(?:-[0-9]+)?$`) }
            ]
        })

        if (existingLink) {
            return Response.json({
                success: true,
                error: false,
                shorturl: existingLink.shorturl,
                message: 'This short link already exists, so we reused it'
            })
        }

        for (let attempt = 0; attempt < maxAliasAttempts; attempt += 1) {
            const shorturl = attempt === 0
                ? requestedShorturl
                : `${requestedShorturl}-${attempt + 1}`

            try {
                await collection.insertOne({
                    url,
                    shorturl,
                    requestedShorturl
                })

                const usedAlternative = shorturl !== requestedShorturl
                return Response.json({
                    success: true,
                    error: false,
                    shorturl,
                    message: usedAlternative
                        ? `"${requestedShorturl}" was taken, so we created "${shorturl}" instead`
                        : 'URL Generated Successfully'
                })
            } catch (error) {
                if (error?.code !== 11000) {
                    throw error
                }
            }
        }

        return Response.json({
            success: false,
            error: true,
            message: 'Could not find an available short URL. Please choose another alias.'
        }, { status: 409 })
    } catch (error) {
        console.error(error)
        const message = process.env.NODE_ENV === "development"
            ? error.message
            : 'Server error while generating URL'

        return Response.json({success: false, error: true, message }, { status: 500 })
    }
  }
