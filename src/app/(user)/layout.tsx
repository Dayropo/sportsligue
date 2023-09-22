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
  title: "Sportsligue",
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
        <script>0</script>
        <NextAuthProvider>{children}</NextAuthProvider>

        <Script src="https://code.jquery.com/jquery-3.4.1.min.js" />
      </body>
    </html>
  )
}
