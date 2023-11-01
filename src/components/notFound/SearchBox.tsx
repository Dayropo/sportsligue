"use client"

import { useRouter } from "next/navigation"
import React, { useState } from "react"
import { FaSearch } from "react-icons/fa"

export default function SearchBox() {
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
    <div className="search-box">
      <form role="search" className="search-form" onSubmit={handleOnSearch}>
        <input
          type="text"
          id="search"
          name="search"
          placeholder="Search here"
          value={value}
          onChange={handleOnChange}
        />
        <button type="submit" id="search-submit">
          <FaSearch />
        </button>
      </form>
    </div>
  )
}
