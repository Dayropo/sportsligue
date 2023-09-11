"use client"

import Script from "next/script"
import { useEffect } from "react"
import { usePathname, useSearchParams } from "next/navigation"
import { pageview } from "@/src/libs/gtag"

export default function GoogleAnalytics({ ga_id }: { ga_id: string }) {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    const url = pathname + searchParams.toString()

    if (process.env.NODE_ENV === "production") {
      pageview(ga_id, url)
    }
  }, [pathname, searchParams])

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${ga_id}`}
      ></Script>

      <Script
        strategy="afterInteractive"
        id="google-analytics"
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', ${ga_id}, {
          page_path: window.location.pathname,
          });
        `,
        }}
      />
    </>
  )
}
