import { getRelatedPosts } from "@/sanity/sanity-utils"
import OwlCarouselWrapper from "./OwlCarouselWrapper"

type Props = {
  category: string
  slug: string
}

export default async function RelatedPosts({ category, slug }: Props) {
  const relatedPosts = await getRelatedPosts(category, slug)

  return (
    <div className="posts-block featured-box">
      <div className="title-section">
        <h1>You Might also Like</h1>
      </div>

      <OwlCarouselWrapper posts={relatedPosts} noOfPosts={4} />
    </div>
  )
}
