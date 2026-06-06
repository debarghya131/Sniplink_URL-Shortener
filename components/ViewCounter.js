"use client"

import { useEffect, useState } from "react"

const numberFormatter = new Intl.NumberFormat("en-US")
let viewRequest

function recordView() {
  if (!viewRequest) {
    viewRequest = fetch("/api/views", { method: "POST" }).then((response) => {
      if (!response.ok) {
        throw new Error("Unable to update site views")
      }

      return response.json()
    })
  }

  return viewRequest
}

export default function ViewCounter() {
  const [views, setViews] = useState(null)

  useEffect(() => {
    let mounted = true

    recordView()
      .then((result) => {
        if (mounted) {
          setViews(result.views)
        }
      })
      .catch((error) => {
        console.error("Unable to load site views:", error)
      })

    return () => {
      mounted = false
    }
  }, [])

  return <>{views === null ? "..." : numberFormatter.format(views)}</>
}
