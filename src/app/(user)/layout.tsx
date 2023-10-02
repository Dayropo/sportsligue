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
    default: "Sportsligue",
    template: `%s | Sportsligue`,
  },
  description:
    "Stay updated with the latest sports news, scores, and highlights on Sportsligue.com - your one-stop source for all things sports and more.",
  keywords: [
    "football",
    "soccer",
    "tennis",
    "basketball",
    "formula one",
    "formula 1",
    "athletics",
    "boxing",
    "baseball",
    "cricket",
    "golf",
    "rugby",
    "gymnastics",
    "hockey",
    "volleyball",
    "transfers",
    "english premier league",
    "serie a",
    "la liga",
    "ligue 1",
    "bundesliga",
    "uefa champions league",
    "uefa europa league",
    "uefa conference league",
    "womens football",
    "wsl",
    "world cup",
    "uefa nations league",
    "uefa",
    "caf",
    "african nations cup",
    "euro",
    "olympics",
    "australian open",
    "french open",
    "roland garros",
    "wimbledon",
    "us open",
    "atp",
    "wta",
    "nba",
    "saudi pro league",
    "mls",
    "wnba",
    "euroleague",
    "efl championship",
    "heavyweight",
    "middleweight",
    "lightweight",
    "nfl",
    "college football",
    "diamond league",
    "world athletics championships",
    "mlb",
  ],
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
