import "bootstrap/dist/css/bootstrap.min.css"
import "../../styles/styles.css"
import type { Metadata } from "next"
import { Roboto_Condensed } from "next/font/google"
import Script from "next/script"
import { NextAuthProvider } from "@/src/components/auth/Providers"
import GoogleAnalytics from "@/src/components/analytics/GoogleAnalytics"

const robotoCondensed = Roboto_Condensed({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
})

export const metadata: Metadata = {
  metadataBase: new URL("https://www.sportsligue.com"),
  title: {
    default: "SportsLigue",
    template: `%s | SportsLigue`,
  },
  icons: {
    icon: "https://www.sportsligue.com/images/favicon.ico",
    apple: [
      {
        url: "https://www.sportsligue.com/images/apple-touch-icon-512.png",
        sizes: "512x512",
      },
      {
        url: "https://www.sportsligue.com/images/apple-touch-icon-360.png",
        sizes: "360x360",
      },
      {
        url: "https://www.sportsligue.com/images/apple-touch-icon-240.png",
        sizes: "240x240",
      },
      {
        url: "https://www.sportsligue.com/images/apple-touch-icon-120.png",
        sizes: "120x120",
      },
    ],
  },
  manifest: "https://www.sportsligue.com/manifest.json",
  verification: {
    google: "QKqFYQdbWpV08Qf1MSOAt4WLn-pU4xqDBsFfzfDLBKA",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {process.env.NODE_ENV === "production" && (
        <GoogleAnalytics GA_MEASUREMENT_ID="G-0ZER7XKZDG" />
      )}

      <body className={`${robotoCondensed.className}  boxed-style`}>
        <NextAuthProvider>{children}</NextAuthProvider>

        <Script src="https://code.jquery.com/jquery-3.4.1.min.js" />
      </body>
    </html>
  )
}
