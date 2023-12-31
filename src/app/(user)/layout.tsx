import "bootstrap/dist/css/bootstrap.min.css"
//import "../../styles/styles.css"
import "../../styles/_general.scss"
import type { Metadata } from "next"
import { NextAuthProvider } from "@/src/components/auth/Providers"
import GoogleAnalytics from "@/src/components/analytics/GoogleAnalytics"
import { Roboto_Condensed } from "next/font/google"
import Script from "next/script"

const robotoCondensed = Roboto_Condensed({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
})

export const metadata: Metadata = {
  metadataBase: new URL("https://www.sportsligue.com"),
  title: {
    default: "SportsLigue - Sports News, Live Scores, Gaming, and Predictions",
    template: `%s | SportsLigue - Sports News, Live Scores, Gaming, and Predictions`,
  },
  manifest: "https://www.sportsligue.com/manifest.json",
  verification: {
    google: "QKqFYQdbWpV08Qf1MSOAt4WLn-pU4xqDBsFfzfDLBKA",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://cdn-cookieyes.com/client_data/b75e7d6171b86b69586cd011/script.js"
          strategy="beforeInteractive"
        />
      </head>
      {process.env.NODE_ENV === "production" && (
        <GoogleAnalytics GA_MEASUREMENT_ID="G-0ZER7XKZDG" />
      )}

      <body className={`${robotoCondensed.className}  boxed-style`}>
        <NextAuthProvider>{children}</NextAuthProvider>
      </body>
    </html>
  )
}
