import { getFeaturedPosts } from "@/sanity/sanity-utils"
import Image from "next/image"
import SliderWrapper from "./SliderWrapper"
import { Post } from "../@types/typings"
import Link from "next/link"
import urlFor from "@/sanity/urlFor"

export default async function FeaturedSidebarPosts() {
  const posts = await getFeaturedPosts()

  return (
    <div className="widget slider-widget">
      <h1>Featured Posts</h1>

      <SliderWrapper posts={posts.slice(0, 3)} />
    
      <ul className="small-posts">
        {posts.slice(3, 6).map((post: Post) => (
          <li key={post._id}>
            <Link href={`/${post.slug.current}`}>
              <Image
                src={urlFor(post.mainImage).url()}
                fill
                sizes="100vw"
                alt={post.mainImage.caption}
                style={{ objectFit: "cover" }}
              />
            </Link>
            <div className="post-cont">
              <h2>
                <Link href={`/${post.slug.current}`}>{post.title}</Link>
              </h2>
              <ul className="post-tags">
                <li>
                  by{" "}
                  <Link href={`/profile/${post.author.slug.current}`}>
                    {post.author.name}
                  </Link>
                </li>
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
