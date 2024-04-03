"use client"

import Image from "next/image"
import { Post } from "../@types/typings"
import Link from "next/link"
import urlFor from "@/sanity/urlFor"
import { FiBook, FiUser } from "react-icons/fi"
import Skeleton from "@mui/material/Skeleton"
import { client } from "@/sanity/sanity-client"
import { groq } from "next-sanity"
import { useQuery } from "@tanstack/react-query"

export default function HeadingNews() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["headlines"],
    queryFn: async () => {
      const response = await client.fetch<Post[]>(
        groq`*[_type == "post" && headline == true]{
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
          } | order(publishedAt desc)[0...3]`,
        {
          cache: "no-store",
        }
      )

      return response
    },
  })

  isError && console.error(error)

  return (
    <div className="news-headline">
      {isLoading && (
        <>
          <div className="news-post image-post main-post">
            <Skeleton animation="wave"
              variant="rectangular"
              sx={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
            />
          </div>

          <div className="news-post image-post">
            <Skeleton animation="wave"
              variant="rectangular"
              sx={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
            />
          </div>

          <div className="news-post image-post">
            <Skeleton animation="wave"
              variant="rectangular"
              sx={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
            />
          </div>
        </>
      )}

      {data && data.length > 0 && (
        <>
          <span className="title-notifier">Headlines</span>

          <div className="news-post image-post main-post">
            <Image
              src={urlFor(data[0].mainImage).url()}
              fill
              sizes="100vw"
              alt={data[0].title}
              style={{ objectFit: "cover" }}
              priority
            />
            <div className="hover-box">
              <Link href={`/category/${data[0].category.slug.current}`} className="category">
                {data[0].category.title}
              </Link>
              <h2>
                <Link href={`/${data[0].slug.current}`}>{data[0].title}</Link>
              </h2>
              <ul className="post-tags">
                <li>
                  <FiUser size={12} style={{ marginRight: "4px" }} />
                  by <a href="#">{data[0].author.name}</a>
                </li>
                {/* <li>
              <a href="#">
                <FiBook size={12} style={{ marginRight: "4px" }} />
                <span>23 comments</span>
              </a>
            </li> */}
              </ul>
            </div>
          </div>

          {data.slice(1, 3).map((post: Post) => (
            <div className="news-post image-post" key={post._id}>
              <Image
                src={urlFor(post.mainImage).url()}
                fill
                sizes="100vw"
                alt={post.title}
                style={{ objectFit: "cover" }}
                priority
              />
              <div className="hover-box">
                <Link href={`/category/${post.category.slug.current}`} className="category">
                  {post.category.title}
                </Link>
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
                  <span>56 comments</span>
                </a>
              </li> */}
                </ul>
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  )
}
