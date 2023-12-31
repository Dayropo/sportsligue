import "bootstrap/dist/css/bootstrap.min.css"
import "../../styles/styles.css"
import type { Metadata } from "next"
import { Roboto_Condensed } from "next/font/google"
import Script from "next/script"

const robotoCondensed = Roboto_Condensed({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Sanity Studio - Sportsligue",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${robotoCondensed.className}  boxed-style`}>
        {children}
        <Script src="https://code.jquery.com/jquery-3.4.1.min.js" />
      </body>
    </html>
  )
}
