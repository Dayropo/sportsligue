"use client"

import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import PrimaryNavItems from "./PrimaryNavItems"
import { useState } from "react"
import { FiMenu, FiX } from "react-icons/fi"
import { FaCaretDown, FaSearch } from "react-icons/fa"
import MobileSearch from "./MobileSearch"

export default function TopLine() {
  const [showMenu, setShowMenu] = useState<boolean>(false)
  const [value, setValue] = useState<string>("")
  const router = useRouter()

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()

    setValue(e.target.value.toLowerCase())
  }

  const handleOnSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (value) {
      router.push(`/search?q=${value}`)
      setValue("")
    }
  }

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
              src="/images/white_logo.png"
              width={100}
              height={40}
              alt="sportsligue"
              priority
            />
          </Link>
          {/* </div> */}
          <div className="primary-nav-items">
            <form className="inputCont" onSubmit={event => handleOnSearch(event)}>
              <input
                type="search"
                placeholder="Search for..."
                aria-label="Search"
                value={value}
                onChange={handleOnChange}
              />

              <FaSearch size={16} color="white" />
            </form>

            <PrimaryNavItems />
          </div>
          <div className="menu">
            {showMenu ? (
              <FiX size={24} color="#fff" onClick={() => setShowMenu(false)} />
            ) : (
              <FiMenu size={24} color="#fff" onClick={() => setShowMenu(true)} />
            )}
          </div>
        </div>
      </div>

      {showMenu && (
        <ul className="mobile-menu">
          <li>
            <MobileSearch />
          </li>
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
            <Link href="/category/baseball">Baseball</Link>
          </li>

          {/* <li>
            More <FaCaretDown className="nav-icon" />
          </li> */}
        </ul>
      )}
    </div>
  )
}
