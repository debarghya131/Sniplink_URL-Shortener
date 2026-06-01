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
    const [copied, setCopied] = useState(false)

    const generate = async () => {
        if (loading) {
            return
        }

        setLoading(true)
        setMessage("")
        setMessageType("")
        setCopied(false)
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

    const copyGeneratedLink = async () => {
        if (!generated) {
            return
        }

        try {
            await navigator.clipboard.writeText(generated)
            setCopied(true)
            setTimeout(() => setCopied(false), 1800)
        } catch {
            setMessage("Copy failed. Please select and copy the link manually.")
            setMessageType("error")
        }
    }


    return (
        <main className='relative isolate min-h-[calc(100svh-4rem)] overflow-hidden bg-[linear-gradient(135deg,#fffceb_0%,#fff4a8_48%,#111111_100%)] px-4 py-10 sm:px-6 sm:py-16'>
            <div className='absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.75),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(250,204,21,0.32),transparent_40%)]' />
            <div className='mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-8 lg:grid-cols-[0.9fr_1.1fr]'>
                <div className='max-w-xl'>
                    <p className='mb-4 inline-flex rounded-full border border-black/15 bg-white/70 px-4 py-2 text-xs font-bold uppercase text-black/70 shadow-sm backdrop-blur'>
                        Link creation
                    </p>
                    <h1 className='text-3xl font-black leading-tight text-black min-[390px]:text-4xl sm:text-5xl'>
                        Create a polished short link in seconds.
                    </h1>
                    <p className='mt-5 text-base leading-7 text-black/70 sm:text-lg'>
                        Paste your destination, choose a memorable alias, and SnipLink gives you a clean URL ready to share.
                    </p>
                </div>

                <div className='w-full rounded-lg border border-black/15 bg-black p-2 shadow-[0_28px_80px_rgba(0,0,0,0.34),0_10px_24px_rgba(250,204,21,0.18)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_34px_90px_rgba(0,0,0,0.4),0_14px_30px_rgba(250,204,21,0.24)] sm:p-3'>
                    <div className='rounded-md bg-[#fff8c7] p-5 text-black sm:p-8'>
                        <div className='mb-6 border-b border-black/10 pb-5'>
                            <p className='text-xs font-bold uppercase text-black/45'>SnipLink Generator</p>
                            <h2 className='mt-1 text-2xl font-black sm:text-3xl'>Generate your short URLs</h2>
                        </div>

                        <div className='flex flex-col gap-3'>
                            <input type="url"
                                value={url}
                                className='min-h-12 w-full rounded-lg border border-black/10 bg-white px-4 py-3 text-black shadow-sm outline-none transition placeholder:text-black/35 focus:border-black focus:ring-4 focus:ring-yellow-300/50'
                                placeholder='Enter your URL with https://'
                                onChange={e => { seturl(e.target.value) }} />

                            <input type="text"
                                value={shorturl}
                                autoCapitalize="none"
                                className='min-h-12 w-full rounded-lg border border-black/10 bg-white px-4 py-3 text-black shadow-sm outline-none transition placeholder:text-black/35 focus:border-black focus:ring-4 focus:ring-yellow-300/50'
                                placeholder='Enter your preferred short URL text'
                                onChange={e => { setshorturl(e.target.value) }} />
                            <button disabled={loading} onClick={generate} className='mt-2 min-h-12 rounded-lg bg-black px-4 py-3 font-bold text-yellow-300 shadow-xl shadow-black/20 transition hover:-translate-y-0.5 hover:bg-neutral-900 disabled:translate-y-0 disabled:bg-black/45 disabled:text-yellow-100'>
                                {loading ? "Generating..." : "Generate"}
                            </button>
                        </div>

                        {message && (
                            <p className={`mt-4 rounded-lg px-4 py-3 text-sm font-bold ${messageType === "success" ? "bg-yellow-300 text-black" : "bg-red-100 text-red-700"}`}>
                                {message}
                            </p>
                        )}

                        {generated && (
                            <div className='mt-5 rounded-lg bg-black p-4 text-yellow-300 shadow-lg'>
                                <div className='flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between'>
                                    <div className='min-w-0'>
                                        <span className='font-bold text-lg'>Your Link</span>
                                        <code className='mt-2 block break-all text-sm'>
                                            <Link className='text-yellow-100 underline' target="_blank" href={generated}>{generated}</Link>
                                        </code>
                                    </div>
                                    <button
                                        type="button"
                                        onClick={copyGeneratedLink}
                                        className='min-h-11 shrink-0 rounded-lg bg-yellow-300 px-4 py-2 text-sm font-bold text-black shadow-lg transition hover:-translate-y-0.5 hover:bg-yellow-200'
                                    >
                                        {copied ? "Copied" : "Copy"}
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Shorten
