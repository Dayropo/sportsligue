import "bootstrap/dist/css/bootstrap.min.css"
import "../../styles/styles.css"
// import "../../styles/_general.scss"
import type { Metadata } from "next"
import Script from "next/script"
import { NextAuthProvider } from "@/src/components/auth/Providers"
import GoogleAnalytics from "@/src/components/analytics/GoogleAnalytics"

export const metadata: Metadata = {
  metadataBase: new URL("https://www.sportsligue.com"),
  title: {
    default: "SportsLigue",
    template: `%s | SportsLigue`,
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

      <link rel="preload" href="styles.css" as="style" />

      <body className="boxed-style">
        <NextAuthProvider>{children}</NextAuthProvider>

        <Script src="https://code.jquery.com/jquery-3.4.1.min.js" />
      </body>
    </html>
  )
}
