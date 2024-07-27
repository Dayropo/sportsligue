"use client"

import { getWorldPosts } from "@/sanity/sanity-utils"
import Posts from "./worldNews/Posts"
import { client } from "@/sanity/sanity-client"
import { groq } from "next-sanity"
import { Post } from "../@types/typings"
import { useQuery } from "@tanstack/react-query"
import Skeleton from "@mui/material/Skeleton"

export default function WorldNews() {
  //   const posts = await client.fetch<Post[]>(
  //     groq`*[_type == "post" && !(category->title in ["Football", "Tennis", "Basketball", "Boxing", "Formula 1", "American Football"])]{
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
  // } | order(publishedAt desc)[0...5]`,
  //     {
  //       cache: "no-store",
  //     }
  //   )

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["world"],
    queryFn: async () => {
      const response = await client.fetch<Post[]>(
        // groq`*[_type == "post" && !(category->title in ["Football", "Tennis", "Basketball", "Boxing", "Formula 1", "American Football"])]{
        groq`*[_type == "post" && !(category->title in ["Paris Olympics 2024","Football", "Tennis", "Basketball", "Boxing", "Formula 1",])]{
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
        } | order(publishedAt desc)[0...5]`,
        {
          cache: "no-store",
        }
      )

      return response
    },
  })

  isError && console.error(error)

  return (
    <div className="posts-block">
      {isLoading && (
        <>
          <div className="title-section">
            <Skeleton animation="wave" variant="text" sx={{ fontSize: "18px", width: "100px" }} />
          </div>

          <div className="articles-box-style">
            {[...Array(6)].map((x, i) => (
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
        </>
      )}

      {data && data.length > 0 && (
        <>
          <div className="title-section">
            <h1>World News</h1>
          </div>

          <Posts posts={data} />
        </>
      )}
    </div>
  )
}
