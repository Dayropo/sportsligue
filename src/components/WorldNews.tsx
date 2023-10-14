import { getWorldPosts } from "@/sanity/sanity-utils"
import Posts from "./worldNews/Posts"

export default async function WorldNews() {
  const worldNews = await getWorldPosts()

  return (
    <div className="posts-block">
      <div className="title-section">
        <h1>World News</h1>
      </div>

      <Posts posts={worldNews} />
    </div>
  )
}
