"use client"

import Image from "next/image"
import { Post } from "../@types/typings"
import Link from "next/link"
import urlFor from "@/sanity/urlFor"
import { PortableText } from "@portabletext/react"
import { PortableTextComponents } from "./PortableTextComponents"
import Skeleton from "@mui/material/Skeleton"
import { client } from "@/sanity/sanity-client"
import { groq } from "next-sanity"
import { useQuery } from "@tanstack/react-query"

export default function LatestNews() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["latestPosts"],
    queryFn: async () => {
      const response = await client.fetch<Post[]>(
        groq`*[_type == "post"]{
          _id,
          _createdAt,
          title,
          slug,
          description,
          mainImage,
          author->,
          category->,
          subCategory->,
          featured,
          publishedAt,
          body,
          tags,
        } | order(publishedAt desc)[0...6]`,
        {
          cache: "no-store",
        }
      )

      return response
    },
  })

  isError && console.error(error)

  return (
    <div className="posts-block standard-box">
      {isLoading && (
        <>
          <div className="title-section">
            <Skeleton animation="wave" variant="text" sx={{ fontSize: "18px", width: "100px" }} />
          </div>

          <div className="row">
            {[...Array(6)].map((x, i) => (
              <div className="col-sm-6" key={i}>
                <div className="news-post standart-post">
                  <div className="post-image">
                    <Skeleton
                      animation="wave"
                      variant="rectangular"
                      sx={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
                    />
                  </div>

                  <Skeleton animation="wave" variant="text" sx={{ fontSize: "16px" }} />

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
            ))}
          </div>
        </>
      )}

      {data && data.length > 0 && (
        <>
          <div className="title-section">
            <h1>Latest News</h1>
          </div>

          <div className="row">
            {data.map((post: Post) => (
              <div className="col-sm-6" key={post._id}>
                <div className="news-post standart-post">
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

                  <h2>
                    <Link href={`/${post.slug.current}`}>{post.title}</Link>
                  </h2>

                  <ul className="post-tags">
                    <li>
                      by <a href="#">{post.author.name}</a>
                    </li>
                    {/* <li>
            <a href="#">
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
            ))}
          </div>
        </>
      )}
    </div>
  )
}
