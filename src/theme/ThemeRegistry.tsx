"use client"

import * as React from "react"
import CssBaseline from "@mui/material/CssBaseline"
import { createTheme, ThemeOptions, ThemeProvider } from "@mui/material/styles"
import { NextAppDirEmotionCacheProvider } from "./EmotionCache"
import { robotoCondensed } from "../fonts"

interface CustomisedThemeOptions extends ThemeOptions {
  breakpoints: {
    values: {
      xs: number
      sm: number
      md: number
      lg: number
      xl: number
      xxl: number
    }
  }
}
const themeOptions: CustomisedThemeOptions = {
  typography: {
    fontFamily: robotoCondensed.style.fontFamily,
  },
  components: {
    MuiInput: {
      styleOverrides: {
        root: {
          fontFamily: robotoCondensed.style.fontFamily,
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          fontFamily: robotoCondensed.style.fontFamily,
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          fontFamily: robotoCondensed.style.fontFamily,
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          fontFamily: robotoCondensed.style.fontFamily,
        },
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
    },
  },
}

const theme = createTheme(themeOptions)

export default function ThemeRegistry({ children }: { children: React.ReactNode }) {
  return (
    <NextAppDirEmotionCacheProvider options={{ key: "mui" }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </NextAppDirEmotionCacheProvider>
  )
}
