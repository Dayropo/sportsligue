"use client"

import Image from "next/image"
import Link from "next/link"
import PrimaryNavItems from "./PrimaryNavItems"
import { useState } from "react"
import { FiMenu, FiX } from "react-icons/fi"
import { FaCaretDown } from "react-icons/fa"

export default function TopLine() {
  const [showMenu, setShowMenu] = useState<boolean>(false)

  console.log({ showMenu })

  return (
    <div className="top-line">
      <div className="container">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* <div className="col-sm-5"> */}
          <Link className="navbar-brand" href={`/`}>
            <Image
              src={require("../../../assets/images/white_logo.png")}
              style={{ width: "100px", height: "auto" }}
              alt="sportsligue"
            />
          </Link>
          {/* </div> */}
          <div className="primary-nav-items">
            {/* <form className="form-inline">
                <input
                  className="form-control mr-sm-2"
                  type="search"
                  placeholder="Search for..."
                  aria-label="Search"
                />
                <button className="btn btn-primary my-2 my-sm-0" type="submit">
                  <i className="fa fa-search"></i>
                </button>
              </form> */}

            <PrimaryNavItems />
          </div>
          <div className="menu">
            {showMenu ? (
              <FiX size={24} color="#fff" onClick={() => setShowMenu(false)} />
            ) : (
              <FiMenu
                size={24}
                color="#fff"
                onClick={() => setShowMenu(true)}
              />
            )}
          </div>
        </div>
      </div>

      {showMenu && (
        <ul className="mobile-menu">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/category/football">Football</Link>
          </li>
          <li>
            <Link href="/category/tennis">Tennis</Link>
          </li>
          <li>
            <Link href="/category/basketball">Basketball</Link>
          </li>
          <li>
            <Link href="/category/boxing">Boxing</Link>
          </li>
          <li>
            <Link href="/category/formula-1">Formula 1</Link>
          </li>
          <li>
            <Link href="/category/american-football">American Football</Link>
          </li>
          <li>
            <Link href="/category/athletics">Athletics</Link>
          </li>

          {/* <li>
            More <FaCaretDown className="nav-icon" />
          </li> */}
        </ul>
      )}
    </div>
  )
}
