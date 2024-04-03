"use client"

import urlFor from "@/sanity/urlFor"
import { Post } from "@/src/@types/typings"
import { PortableText } from "@portabletext/react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { FiUser } from "react-icons/fi"
import { PortableTextComponents } from "../PortableTextComponents"
import Pagination from "../ui/Pagination"
import { client } from "@/sanity/sanity-client"
import { groq } from "next-sanity"
import { useQuery } from "@tanstack/react-query"
import Skeleton from "@mui/material/Skeleton"

const SearchResults = ({ query, queryConcat }: { query: string; queryConcat: string }) => {
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [postsPerPage] = useState<number>(5)

  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage

  const { data, isLoading, isError, error } = useQuery({
    queryKey: [`search-results-${query}`],
    queryFn: async () => {
      const response = await client.fetch<Post[]>(
        groq`*[_type == "post" && (title == $query || title match $query || title match $queryConcat)]{
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
          query,
          queryConcat,
          cache: "no-store",
        }
      )

      return response
    },
  })

  //  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)

  isError && console.error(error)

  return (
    <div className="posts-block">
      {isLoading && (
        <div className="articles-box-style">
          {[...Array(5)].map((x, i) => (
            <div className="news-post article-post" key={i}>
              <div className="row">
                <div className="col-sm-5">
                  <div className="post-image">
                    <Skeleton
                      animation="wave"
                      variant="rectangular"
                      sx={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                      }}
                    />
                  </div>
                </div>

                <div className="col-sm-7">
                  <Skeleton animation="wave" variant="text" sx={{ fontSize: "20px" }} />

                  <ul className="post-tags">
                    <Skeleton
                      animation="wave"
                      variant="text"
                      sx={{ fontSize: "12px", width: "100px" }}
                    />
                  </ul>

                  <div className="description">
                    <Skeleton animation="wave" variant="text" sx={{ fontSize: "14px" }} />
                    <Skeleton animation="wave" variant="text" sx={{ fontSize: "14px" }} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {data && (
        <div className="articles-box-style">
          {data.length > 0 ? (
            data.slice(indexOfFirstPost, indexOfLastPost).map((post: Post) => (
              <div className="news-post article-post" key={post._id}>
                <div className="row">
                  <div className="col-sm-5">
                    <div className="post-image">
                      <Link href={`/${post.slug.current}`}>
                        <Image
                          src={urlFor(post.mainImage).url()}
                          fill
                          sizes="100vw"
                          alt={post.title}
                          style={{ objectFit: "cover" }}
                          loading="lazy"
                        />
                      </Link>
                      <Link href={`/category/${post.category.slug.current}`} className="category">
                        {post.category.title}
                      </Link>
                    </div>
                  </div>
                  <div className="col-sm-7" style={{ overflow: "hidden" }}>
                    <h2>
                      <Link href={`/${post.slug.current}`}>{post.title}</Link>
                    </h2>
                    <ul className="post-tags">
                      <li>
                        <FiUser size={12} style={{ marginRight: "4px" }} />
                        by <a href="#">{post.author.name}</a>
                      </li>
                      {/* <li>
                     <a href="#">
                       <FiBook size={12} style={{ marginRight: "4px" }} />
                       <span>23 comments</span>
                     </a>
                   </li> */}
                    </ul>
                    <div className="description">
                      <PortableText value={post.body} components={PortableTextComponents} />
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="search-results-banner">
              <p>No posts were found using this query</p>
            </div>
          )}

          {data.length > 0 && (
            <Pagination
              itemsPerPage={postsPerPage}
              totalItems={data.length}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          )}
        </div>
      )}
    </div>
  )
}

export default SearchResults
