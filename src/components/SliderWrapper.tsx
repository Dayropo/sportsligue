"use client"



import { Post } from "../@types/typings"
import urlFor from "@/sanity/urlFor"
import { Slide } from "react-slideshow-image"
import "react-slideshow-image/dist/styles.css"
import Image from "next/image"
import Link from "next/link"
import { FiBook, FiChevronLeft, FiChevronRight, FiUser } from "react-icons/fi"

type Props = {
  posts: Post[]
}

export default function SliderWrapper({ posts }: Props) {
  return (
    <div className="flexslider">
      <Slide
        autoplay
        prevArrow={
          <button className="slide-arrows prev-arrow">
            <FiChevronLeft size={16} />
          </button>
        }
        nextArrow={
          <button className="slide-arrows next-arrow">
            <FiChevronRight size={16} />
          </button>
        }
      >
        {posts.map((post: Post) => (
          <div className="lightbox-slide" key={post._id}>
            <Image
              fill
              alt={post.mainImage.caption}
              src={urlFor(post.mainImage).url()}
              loading="eager"
              draggable={false}
              style={{ objectFit: "cover" }}
              sizes="100vw"
            />
            <div className="slider-caption">
              <Link
                href={`/category/${post.category.slug.current}`}
                className="category"
              >
                {post.category.title}
              </Link>
              <h2>
                <Link href={`/${post.slug.current}`}>{post.title}</Link>
              </h2>
              <ul className="post-tags">
                <li>
                  <FiUser size={12} style={{ marginRight: "4px" }} />
                  by{" "}
                  <Link href={`/profile/${post.author.slug.current}`}>
                    {post.author.name}
                  </Link>
                </li>
                <li>
                  <a href="#">
                    <FiBook size={12} style={{ marginRight: "4px" }} />
                    <span>23 comments</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        ))}
      </Slide>
    </div>
  )
}
