"use client"

import { useState } from "react"
import Image from "next/image"
import { Post } from "../../@types/typings"
import Link from "next/link"
import urlFor from "@/sanity/urlFor"
import { FiBook, FiUser } from "react-icons/fi"
import { PortableText } from "@portabletext/react"
import { PortableTextComponents } from "../PortableTextComponents"
import Pagination from "../ui/Pagination"

const Posts = ({ posts }: { posts: Post[] }) => {
  const [currentPage] = useState<number>(1)
  const [postsPerPage] = useState<number>(5)

  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)

  return (
    <div className="articles-box-style">
      {currentPosts.map((post: Post) => (
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
                {post.description ? (
                  <p>{post.description}</p>
                ) : (
                  <PortableText value={post.body} components={PortableTextComponents} />
                )}
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* <Pagination
        itemsPerPage={postsPerPage}
        totalItems={posts.length}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      /> */}
    </div>
  )
}

export default Posts
