"use client"

import { useRouter, useSearchParams } from "next/navigation"
import SearchResults from "@/src/components/search/SearchResults"
import Footer from "@/src/components/ui/Footer"
import Header from "@/src/components/ui/Header"
import Sidebar from "@/src/components/ui/Sidebar"
import { useState } from "react"
import { FaSearch } from "react-icons/fa"

export default function Search() {
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
    <div id="container">
      <Header />

      <section id="content-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              {/* <!-- search-results box --> */}
              <div className="search-results-box">
                <div className="search-results-banner">
                  <h1>
                    Search results for <span>{query}</span>
                  </h1>
                </div>
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
              </div>
              {/* <!-- End search-results box --> */}

              {/* <!-- Posts-block --> */}
              <SearchResults query={query} />
              {/* <!-- End Posts-block --> */}
            </div>

            <Sidebar />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
