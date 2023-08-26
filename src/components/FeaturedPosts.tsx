import { getFeaturedPosts } from "@/sanity/sanity-utils"
import OwlCarouselWrapper from "./OwlCarouselWrapper"

const FeaturedPosts = async () => {
  const posts = await getFeaturedPosts()

  return (
    <div className="posts-block">
      <div className="title-section">
        <h1>Featured</h1>
      </div>

      <OwlCarouselWrapper
        posts={posts}
        noOfPosts={5}
        className="featured-box"
      />
    </div>
  )
}

export default FeaturedPosts
