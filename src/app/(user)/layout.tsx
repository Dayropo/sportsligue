import "bootstrap/dist/css/bootstrap.min.css"
//import "../../styles/styles.css"
import "../../styles/_general.scss"
import type { Metadata } from "next"
import { NextAuthProvider } from "@/src/components/auth/Providers"
import GoogleAnalytics from "@/src/components/analytics/GoogleAnalytics"
import { Roboto_Condensed } from "next/font/google"
import Script from "next/script"
import TanstackProvider from "../../providers/TanstackProvider"
import { InitializeGPT } from "@/src/components/adpublisher/GPT"

const robotoCondensed = Roboto_Condensed({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
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

        <Script async src="https://jsc.idealmedia.io/site/973605.js" strategy="lazyOnload" />
      </head>

      {process.env.NODE_ENV === "production" && (
        <GoogleAnalytics GA_MEASUREMENT_ID="G-0ZER7XKZDG" />
      )}

      {process.env.NODE_ENV === "production" && (
        <Script id="1xbet-ad" strategy="lazyOnload">{`
        (function(w,d,o,g,r,a,m){
        var cid='zone_1331476653';
        w[r]=w[r]||function(){(w[r+'l']=w[r+'l']||[]).push(arguments)};
        function e(b,w,r){if((w[r+'h']=b.pop())&&!w.ABN){
            var a=d.createElement(o),p=d.getElementsByTagName(o)[0];a.async=1;
            a.src='https://cdn.'+w[r+'h']+'/libs/e.js';a.onerror=function(){e(g,w,r)};
            p.parentNode.insertBefore(a,p)}}e(g,w,r);
        w[r](cid,{id:1331476653,domain:w[r+'h']});
        })(window,document,'script',['ftd.agency'],'ABNS');
      `}</Script>
      )}

      <Script id="1xbet_ad_2" strategy="lazyOnload">{` 
        (function(w,d,o,g,r,a,m){
        var cid='zone_1541984750';
        w[r]=w[r]||function(){(w[r+'l']=w[r+'l']||[]).push(arguments)};
        function e(b,w,r){if((w[r+'h']=b.pop())&&!w.ABN){
            var a=d.createElement(o),p=d.getElementsByTagName(o)[0];a.async=1;
            a.src='https://cdn.'+w[r+'h']+'/libs/e.js';a.onerror=function(){e(g,w,r)};
            p.parentNode.insertBefore(a,p)}}e(g,w,r);
        w[r](cid,{id:1541984750,domain:w[r+'h']});
        })(window,document,'script',['ftd.agency'],'ABNS');
    `}</Script>

      {/* <GooglePublisher /> */}

      <InitializeGPT />

      <body className={`${robotoCondensed.className}  boxed-style`}>
        <NextAuthProvider>
          <TanstackProvider>{children}</TanstackProvider>
        </NextAuthProvider>

        <div id="zone_1331476653"></div>
        <div id="zone_1541984750"></div>
      </body>
    </html>
  )
}
