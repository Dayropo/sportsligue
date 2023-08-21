"use client"

import dynamic from "next/dynamic"
import Image from "next/image"
import "owl.carousel/dist/assets/owl.carousel.css"
import "owl.carousel/dist/assets/owl.theme.default.css"
import { Post } from "../@types/typings"
import Link from "next/link"

if (typeof window !== "undefined") {
  window.$ = window.jQuery = require("jquery")
}

const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
})

type Props = {
  posts: Post[]
}

export default function RelatedPosts({ posts }: Props) {
  return (
    <div className="posts-block featured-box">
      <div className="title-section">
        <h1>You Might also Like</h1>
      </div>

      <div className="owl-wrapper">
        <OwlCarousel
          className="owl-theme"
          loop
          autoplay
          dots={false}
          margin={10}
          nav
        >
          {/* <div className="owl-carousel" data-num="3"> */}
          {posts.slice(0, 4).map(post => (
            <div className="item" key={post._id}>
              <div className="news-post standart-post">
                <div className="post-image">
                  <Link href={`/${post.category}/${post.slug}`}>
                    <Image
                      src={post.image}
                      width={400}
                      height={260}
                      alt=""
                      style={{ objectFit: "cover", objectPosition: "center" }}
                    />
                  </Link>
                  <Link href={`/${post.category}`} className="category">
                    {post.category}
                  </Link>
                </div>
                <h2>
                  <Link href={`/${post.category}/${post.slug}`}>
                    {post.title}
                  </Link>
                </h2>
              </div>
            </div>
          ))}
        </OwlCarousel>
      </div>
    </div>
  )
}
