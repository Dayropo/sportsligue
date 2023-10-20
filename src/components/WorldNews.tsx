import { getWorldPosts } from "@/sanity/sanity-utils"
import Posts from "./worldNews/Posts"
import { client } from "@/sanity/sanity-client"
import { groq } from "next-sanity"
import { Post } from "../@types/typings"

export default async function WorldNews({ posts }: { posts: Post[] }) {
  return (
    <div className="posts-block">
      <div className="title-section">
        <h1>World News</h1>
      </div>

      <Posts posts={posts} />
    </div>
  )
}
