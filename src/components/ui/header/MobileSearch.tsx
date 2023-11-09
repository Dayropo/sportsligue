"use client"

import { useRouter } from "next/navigation"
import React, { useState } from "react"

export default function MobileSearch() {
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
    <form className="mobile-search" onSubmit={event => handleOnSearch(event)}>
      <input
        type="search"
        placeholder="Search for..."
        aria-label="Search"
        value={value}
        onChange={handleOnChange}
      />
    </form>
  )
}
