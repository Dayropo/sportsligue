"use client"

import { FcGoogle } from "react-icons/fc"
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
      <FcGoogle size={16} style={{ marginRight: "2px" }} /> Sign Up with Google
    </button>
  )
}
