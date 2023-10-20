import { useRouter, useSearchParams } from "next/navigation"
import React from "react"
import { FaSearch } from "react-icons/fa"

export default function SearchBar() {
  const searchParams = useSearchParams()
  const query = searchParams.get("q")!
  const router = useRouter()

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    // setSearchParams()
  }

  const handleOnSubmit = () => {
    router.push(`/search`)
  }
  return (
    <div className="search-box">
      <form className="search-form" onSubmit={handleOnSubmit}>
        <input
          type="text"
          id="search"
          name="search"
          placeholder="Search here"
          value={query}
          onChange={handleOnChange}
        />
        <button type="submit" id="search-submit">
          <FaSearch size={16} />
        </button>
      </form>
    </div>
  )
}
