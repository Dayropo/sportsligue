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

const SearchResults = ({ posts }: { posts: Post[] }) => {
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [postsPerPage] = useState<number>(5)

  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)

  return (
    <div className="posts-block">
      <div className="articles-box-style">
        {currentPosts && currentPosts.length > 0 ? (
          currentPosts.map((post: Post) => (
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
                    <Link
                      href={`/category/${post.category.slug.current}`}
                      className="category"
                    >
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
                    <PortableText
                      value={post.body}
                      components={PortableTextComponents}
                    />
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

        {currentPosts && currentPosts.length > 0 && (
          <Pagination
            itemsPerPage={postsPerPage}
            totalItems={posts.length}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        )}
      </div>
    </div>
  )
}

export default SearchResults
