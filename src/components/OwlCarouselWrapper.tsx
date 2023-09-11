"use client"

import { Post } from "../@types/typings"
import dynamic from "next/dynamic"
import Image from "next/image"
import "owl.carousel/dist/assets/owl.carousel.css"
import "owl.carousel/dist/assets/owl.theme.default.css"
import Link from "next/link"
import urlFor from "@/sanity/urlFor"

type Props = {
  posts: Post[]
  noOfPosts: number
  className?: string
}

if (typeof window !== "undefined") {
  window.$ = window.jQuery = require("jquery")
}

const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
})

export default function OwlCarouselWrapper({
  posts,
  noOfPosts,
  className,
}: Props) {
  return (
    <div className={`owl-wrapper ${className}`}>
      <OwlCarousel
        className="owl-theme"
        loop
        autoplay
        dots={false}
        margin={10}
        nav
        responsive={{ "0": { items: 1 }, "768": { items: 3 } }}
      >
        {/* <div className="owl-carousel" data-num="3"> */}
        {posts.slice(0, noOfPosts).map(post => (
          <div className="item" key={post._id}>
            <div className="news-post standart-post">
              <div className="post-image">
                <Link href={`/${post.slug.current}`}>
                  <Image
                    src={urlFor(post.mainImage).url()}
                    fill
                    sizes="100vw"
                    alt=""
                    style={{ objectFit: "cover", objectPosition: "center" }}
                  />
                </Link>
                <Link
                  href={`/${post.category.slug.current}`}
                  className="category"
                >
                  {post.category.title}
                </Link>
              </div>
              <h2>
                <Link href={`/${post.slug.current}`}>{post.title}</Link>
              </h2>
            </div>
          </div>
        ))}
      </OwlCarousel>
    </div>
  )
}
