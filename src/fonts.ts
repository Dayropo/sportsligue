import { Inter, Poppins, Roboto_Condensed } from "next/font/google"

export const inter = Inter({
  subsets: ["latin"],
  //display: "swap",
  //adjustFontFallback: false,
})

export const poppins = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
})

export const robotoCondensed = Roboto_Condensed({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
})
