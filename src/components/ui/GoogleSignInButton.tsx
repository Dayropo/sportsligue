"use client"

import { FaGoogle } from "react-icons/fa"
import { signIn } from "next-auth/react"

export default function GoogleSignInButton() {
  return (
    <button
      className="google-signup"
      onClick={() => {
        console.log("signing in")
        signIn("google")
      }}
    >
      <FaGoogle style={{ marginRight: "2px" }} /> Sign Up with Google
    </button>
  )
}
