"use client"

import { client } from "@/sanity/sanity-client"
import { Post } from "@/src/@types/typings"
import SearchResults from "@/src/components/search/SearchResults"
import Footer from "@/src/components/ui/Footer"
import Header from "@/src/components/ui/Header"
import Sidebar from "@/src/components/ui/Sidebar"
import { useState } from "react"
import { FaSearch } from "react-icons/fa"

export default async function Search({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined }
}) {
  const featuredPosts = await client.fetch<Post[]>(
    `*[_type == "post" && featured == true]{
  _id,
  _createdAt,
  title,
  slug,
  mainImage,
  author->,
  category->,
  subCategory->,
  featured,
  publishedAt,
  body,
  tags,
} | order(publishedAt desc)`,
    {
      cache: "no-cache",
      next: {
        revalidate: 0,
      },
    }
  )

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
                    Search results for <span></span>
                  </h1>
                </div>
              </div>
              {/* <!-- End search-results box --> */}

              {/* <!-- Posts-block --> */}
              <SearchResults query="" />
              {/* <!-- End Posts-block --> */}
            </div>

            <Sidebar posts={featuredPosts} />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
