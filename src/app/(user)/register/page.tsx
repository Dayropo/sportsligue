"use client"

import Footer from "@/src/components/ui/Footer"
import GoogleSignInButton from "@/src/components/ui/GoogleSignInButton"
import Header from "@/src/components/ui/Header"
import Sidebar from "@/src/components/ui/Sidebar"
import { useSession } from "next-auth/react"
import Router from "next/router"
import { useEffect } from "react"

export default function Register() {
  const { status } = useSession()

  useEffect(() => {
    if (status === "authenticated") Router.replace("/")
  }, [status])

  return (
    <div id="container">
      <Header />

      <section id="content-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              {/* <!-- register box --> */}
              <div className="register-box">
                <div className="title-section">
                  <h1>
                    <span>Sign Up to Sportsligue</span>
                  </h1>
                </div>
                <GoogleSignInButton />

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    margin: "12px 0px",
                  }}
                >
                  <div
                    style={{
                      height: "1px",
                      width: "47%",
                      backgroundColor: "#e0e0e0",
                    }}
                  ></div>
                  <p>or</p>
                  <div
                    style={{
                      height: "1px",
                      width: "47%",
                      backgroundColor: "#e0e0e0",
                    }}
                  ></div>
                </div>

                <form id="register-form">
                  {/* <p>
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p> */}
                  <div className="row">
                    <div className="col-md-6">
                      <label htmlFor="first-name">First Name*</label>
                      <input id="first-name" name="first-name" type="text" />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="last-name">Last Name*</label>
                      <input id="last-name" name="last-name" type="text" />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label htmlFor="email">E-mail*</label>
                      <input id="email" name="email" type="text" />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="username2">Username</label>
                      <input id="username2" name="username" type="text" />
                    </div>
                  </div>
                  <label htmlFor="password2">Password*</label>
                  <input id="password2" name="password" type="password" />
                  <label htmlFor="repeat-password">Repeat Password*</label>
                  <input
                    id="repeat-password"
                    name="repeat-password"
                    type="password"
                  />
                  {/* <div className="user-thumbnail">
                    <input type="file" name="user-thumb" id="user-thumb" />
                    <span>Upload your Image</span>
                    <div className="thumb-holder">
                      <span>100x100</span>
                    </div>
                  </div> */}
                  <button type="submit" id="submit-register2">
                    <i className="fa fa-paper-plane"></i> Sign Up
                  </button>
                </form>
              </div>
              {/* <!-- End register box --> */}
            </div>

            <Sidebar />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
