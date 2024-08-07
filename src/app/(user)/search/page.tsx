import { client } from "@/sanity/sanity-client"
import { Post } from "@/src/@types/typings"
import SearchBar from "@/src/components/search/SearchBar"
import SearchResults from "@/src/components/search/SearchResults"
import Footer from "@/src/components/ui/Footer"
import Header from "@/src/components/ui/Header"
import Sidebar from "@/src/components/ui/Sidebar"
import { Metadata } from "next"
import { groq } from "next-sanity"

// export const dynamic = "force-dynamic"

export const metadata: Metadata = {
  title: "Search",
  alternates: {
    canonical: `/search`,
  },
}

export default function Search({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const query = searchParams.q as string
  const queryConcat = `${query}*`

  // const posts = await client.fetch<Post[]>(
  //   groq`*[_type == "post" && (title == $query || title match $query || title match $queryConcat)]{
  //     _id,
  //     _createdAt,
  //     title,
  //     slug,
  //     mainImage,
  //     author->,
  //     category->,
  //     subCategory->,
  //     featured,
  //     publishedAt,
  //     body,
  //     tags,
  //   } | order(publishedAt desc)`,
  //   {
  //     query,
  //     queryConcat,
  //     cache: "no-store",
  //   }
  // )

  // const featuredPosts = await client.fetch<Post[]>(
  //   groq`*[_type == "post" && featured == true]{
  //     _id,
  //     _createdAt,
  //     title,
  //     slug,
  //     description,
  //     mainImage,
  //     author->,
  //     category->,
  //     subCategory->,
  //     featured,
  //     publishedAt,
  //     body,
  //     tags,
  //   } | order(publishedAt desc)[0...6]`,
  //   {
  //     cache: "no-store",
  //   }
  // )

  //   const { posts, featuredPosts } = await client.fetch(
  //     `{
  //     "posts": *[_type == "post" && (title == $query || title match $query || title match $queryConcat)]{
  //   _id,
  //   _createdAt,
  //   title,
  //   slug,
  //   mainImage,
  //   author->,
  //   category->,
  //   subCategory->,
  //   featured,
  //   publishedAt,
  //   body,
  //   tags,
  // } | order(publishedAt desc),
  // "featuredPosts": *[_type == "post" && featured == true]{
  //   _id,
  //   _createdAt,
  //   title,
  //   slug,
  //   mainImage,
  //   author->,
  //   category->,
  //   subCategory->,
  //   featured,
  //   publishedAt,
  //   body,
  //   tags,
  // } | order(publishedAt desc)[0...6]
  // }`,
  //     {
  //       query,
  //       queryConcat,
  //       cache: "no-store",
  //     }
  //   )

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
                <SearchBar query={query} />
              </div>
              {/* <!-- End search-results box --> */}

              {/* <!-- Posts-block --> */}
              <SearchResults query={query} queryConcat={queryConcat} />
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
