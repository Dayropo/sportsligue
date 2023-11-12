"use client"

import React, { useEffect } from "react"

const AdSense300x250 = () => {
  useEffect(() => {
    try {
      ;(window.adsbygoogle = window.adsbygoogle || []).push({})
    } catch (error) {
      console.error(error)
    }
  }, [])

  return (
    <ins
      className="adsbygoogle"
      style={{ display: "block", position: "sticky", top: "0px" }}
      data-ad-client="ca-pub-1384009601184330"
      data-ad-slot="4773547666"
      data-ad-format="auto"
      data-full-width-responsive="true"
    />
  )
}

export default AdSense300x250
