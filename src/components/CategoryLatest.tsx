"use client"

import urlFor from "@/sanity/urlFor"
import Image from "next/image"
import Link from "next/link"
import { Post } from "../@types/typings"
import { PortableText } from "@portabletext/react"
import { PortableTextComponents } from "./PortableTextComponents"
import { client } from "@/sanity/sanity-client"
import { groq } from "next-sanity"
import { useQuery } from "@tanstack/react-query"
import Skeleton from "@mui/material/Skeleton"

type Props = {
  category: string
}

export default function CategoryLatest({ category }: Props) {
  //   const posts = await client.fetch<Post[]>(
  //     groq`*[_type == "post" && category->title == $category]{
  //   _id,
  //   _createdAt,
  //   title,
  //   slug,
  //   description,
  //   mainImage,
  //   author->,
  //   category->,
  //   subCategory->,
  //   featured,
  //   publishedAt,
  //   body,
  //   tags,
  // } | order(publishedAt desc)[0...4]`,
  //     {
  //       category,
  //       cache: "no-store",
  //     }
  //   )

  const { data, isLoading, isError, error } = useQuery({
    queryKey: [category],
    queryFn: async () => {
      const response = await client.fetch<Post[]>(
        groq`*[_type == "post" && category->title == $category]{
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
        } | order(publishedAt desc)[0...4]`,
        {
          category,
          cache: "no-store",
        }
      )

      return response
    },
  })

  isError && console.error(error)

  return (
    <div className="col-md-6">
      {isLoading && (
        <>
          <div className="title-section">
            <Skeleton animation="wave" variant="text" sx={{ fontSize: "18px", width: "100px" }} />
          </div>

          <div className="news-post standart-post">
            <div className="post-image">
              <Skeleton
                animation="wave"
                variant="rectangular"
                sx={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
              />
            </div>

            <Skeleton animation="wave" variant="text" sx={{ fontSize: "16px" }} />

            <div className="description">
              <Skeleton animation="wave" variant="text" sx={{ fontSize: "14px" }} />
              <Skeleton animation="wave" variant="text" sx={{ fontSize: "14px" }} />
            </div>
          </div>

          <ul className="small-posts">
            {[...Array(3)].map((x, i) => (
              <li key={i}>
                <Skeleton
                  animation="wave"
                  variant="rectangular"
                  width={80}
                  height={80}
                  sx={{ marginRight: "20px", float: "left" }}
                />

                <div className="post-cont">
                  <Skeleton animation="wave" variant="text" sx={{ fontSize: "14px" }} />

                  <ul className="post-tags">
                    <Skeleton
                      animation="wave"
                      variant="text"
                      sx={{ fontSize: "12px", width: "100px" }}
                    />
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        </>
      )}

      {data && (
        <>
          <div className="title-section">
            <h1>{category}</h1>
          </div>

          {data && data.length > 0 && (
            <div className="news-post standart-post">
              <div className="post-image">
                <Link href={`/${data[0].slug.current}`}>
                  <Image
                    src={urlFor(data[0].mainImage).url()}
                    fill
                    sizes="100vw"
                    alt={data[0].title}
                    style={{ objectFit: "cover" }}
                    loading="lazy"
                  />
                </Link>
                <Link href={`/category/${data[0].category.slug.current}`} className="category">
                  {data[0].category.title}
                </Link>
              </div>

              <h2>
                <Link href={`/${data[0].slug.current}`}>{data[0].title}</Link>
              </h2>

              <div className="description">
                <PortableText value={data[0].body} components={PortableTextComponents} />
              </div>
            </div>
          )}

          {data && data.length > 0 && (
            <ul className="small-posts">
              {data.slice(1, 4).map((post: Post) => (
                <li key={post._id}>
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

                  <div className="post-cont">
                    <h2>
                      <Link href={`/${post.slug.current}`}>{post.title}</Link>
                    </h2>
                    <ul className="post-tags">
                      <li>
                        by <a href="#">{post.author.name}</a>
                      </li>
                    </ul>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </>
      )}
    </div>
  )
}
