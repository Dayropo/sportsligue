"use client"

import React, { useEffect } from "react"

const AdSense728x90 = () => {
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
      style={{ display: "block" }}
      data-ad-client="ca-pub-1384009601184330"
      data-ad-slot="6028873297"
      data-ad-format="auto"
      data-full-width-responsive="true"
    />
  )
}

export default AdSense728x90
