"use client"

import { useRouter, useSearchParams } from "next/navigation"
import React, { useEffect, useState } from "react"
import { FaSearch } from "react-icons/fa"

export default function SearchBar({ query }: { query: string }) {
  const [value, setValue] = useState<string>(query)
  const router = useRouter()

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()

    setValue(e.target.value.toLowerCase())
  }

  const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (value) {
      router.push(`/search?q=${value}`)
      setValue("")
    }
  }

  return (
    <div className="search-box">
      <form className="search-form" onSubmit={handleOnSubmit}>
        <input
          type="text"
          id="search"
          name="search"
          placeholder="Search here"
          value={value}
          onChange={handleOnChange}
        />
        <button type="submit" id="search-submit">
          <FaSearch size={16} />
        </button>
      </form>
    </div>
  )
}
