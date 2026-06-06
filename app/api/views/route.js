import clientPromise from "@/lib/mongodb"

export const dynamic = "force-dynamic"

export async function POST(request) {
    try {
        const client = await clientPromise
        const db = client.db("sniplink")
        const collection = db.collection("metrics")
        const hasVisited = request.headers
            .get("cookie")
            ?.split(";")
            .some((cookie) => cookie.trim().startsWith("sniplink_visitor="))

        const metric = hasVisited
            ? await collection.findOne({ _id: "site-visitors" })
            : await collection.findOneAndUpdate(
                { _id: "site-visitors" },
                { $inc: { count: 1 } },
                {
                    upsert: true,
                    returnDocument: "after",
                }
            )

        const headers = { "Cache-Control": "no-store" }

        if (!hasVisited) {
            headers["Set-Cookie"] = [
                "sniplink_visitor=1",
                "Path=/",
                "Max-Age=31536000",
                "HttpOnly",
                "SameSite=Lax",
                process.env.NODE_ENV === "production" ? "Secure" : "",
            ].filter(Boolean).join("; ")
        }

        return Response.json(
            { success: true, views: metric?.count ?? 0 },
            { headers }
        )
    } catch (error) {
        console.error("Unable to update site views:", error)
        return Response.json(
            { success: false, message: "Unable to update site views" },
            { status: 500 }
        )
    }
}
