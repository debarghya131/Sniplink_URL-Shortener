"use client"
import Link from 'next/link'
import React, { useState } from 'react'

const Shorten = () => {
    const [url, seturl] = useState("")
    const [shorturl, setshorturl] = useState("")
    const [generated, setGenerated] = useState("")
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState("")
    const [messageType, setMessageType] = useState("")

    const generate = async () => {
        if (loading) {
            return
        }

        setLoading(true)
        setMessage("")
        setMessageType("")
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "url": url,
            "shorturl": shorturl
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        try {
            const response = await fetch("/api/generate", requestOptions)
            const result = await response.json()

            if (!response.ok) {
                setMessage(result.message || "Something went wrong")
                setMessageType("error")
                return
            }

            if (result.success) {
                const host = (process.env.NEXT_PUBLIC_HOST || window.location.origin).replace(/\/$/, "")
                setGenerated(`${host}/${result.shorturl}`)
                seturl("")   
                setshorturl("")
            }

            setMessage(result.message)
            setMessageType("success")
        } catch (error) {
            setMessage(error.message || "Something went wrong")
            setMessageType("error")
        } finally {
            setLoading(false)
        }
    }


    return (
        <main className='min-h-[calc(100vh-4rem)] bg-yellow-50 px-4 py-10 sm:py-16'>
            <div className='mx-auto w-full max-w-lg bg-black text-yellow-300 p-5 rounded-lg flex flex-col gap-4 shadow-lg sm:p-8'>
                <h1 className='font-bold text-xl sm:text-2xl'>Generate your short URLs</h1>
                <div className='flex flex-col gap-2'>
                    <input type="url"
                        value={url}
                        className='w-full px-4 py-2 text-black focus:outline-yellow-400 rounded-md'
                        placeholder='Enter your URL with https://'
                        onChange={e => { seturl(e.target.value) }} />

                    <input type="text"
                        value={shorturl}
                        autoCapitalize="none"
                        className='w-full px-4 py-2 text-black focus:outline-yellow-400 rounded-md'
                        placeholder='Enter your preferred short URL text'
                        onChange={e => { setshorturl(e.target.value) }} />
                    <button disabled={loading} onClick={generate} className='bg-yellow-400 disabled:bg-yellow-200 text-black rounded-lg shadow-lg px-4 py-2 my-3 font-bold hover:bg-yellow-300'>
                        {loading ? "Generating..." : "Generate"}
                    </button>
                </div>

                {message && (
                    <p className={`rounded-md px-3 py-2 text-sm font-bold ${messageType === "success" ? "bg-yellow-300 text-black" : "bg-red-100 text-red-700"}`}>
                        {message}
                    </p>
                )}

                {generated && <> <span className='font-bold text-lg'>Your Link </span><code className='break-all'><Link className='text-yellow-100 underline' target="_blank" href={generated}>{generated}</Link> 
                    </code></>}
            </div>
        </main>
    )
}

export default Shorten
