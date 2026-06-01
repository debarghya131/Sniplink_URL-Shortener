
import clientPromise from "@/lib/mongodb"

const slugPattern = /^[a-zA-Z0-9-]+$/

export async function POST(request) {

    try {
        const body = await request.json() 
        const url = body.url?.trim()
        const shorturl = body.shorturl?.trim().toLowerCase()

        if (!url || !shorturl) {
            return Response.json({success: false, error: true, message: 'URL and short URL are required' }, { status: 400 })
        }

        if (!slugPattern.test(shorturl)) {
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

        // Check if the short url exists
        const doc = await collection.findOne({shorturl})
        if(doc){
            return Response.json({success: false, error: true,  message: 'URL already exists! Try Another' }, { status: 409 })
        }

        await collection.insertOne({
            url,
            shorturl
        })

        return Response.json({success: true, error: false, shorturl, message: 'URL Generated Successfully' })
    } catch (error) {
        console.error(error)
        const message = process.env.NODE_ENV === "development"
            ? error.message
            : 'Server error while generating URL'

        return Response.json({success: false, error: true, message }, { status: 500 })
    }
  }
