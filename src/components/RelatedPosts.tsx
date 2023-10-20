import { getRelatedPosts } from "@/sanity/sanity-utils"
import OwlCarouselWrapper from "./OwlCarouselWrapper"
import { client } from "@/sanity/sanity-client"
import { Post } from "../@types/typings"
import { groq } from "next-sanity"

type Props = {
  category: string
  slug: string
}

export default async function RelatedPosts({ category, slug }: Props) {
  const relatedPosts = await client.fetch<Post[]>(
    groq`*[_type == "post" && category->title == $category && slug.current != $slug]{
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
} | order(publishedAt desc)`,
    {
      category,
      slug,
      cache: "no-store",
      next: {
        revalidate: 30,
      },
    }
  )

  return (
    <div className="posts-block featured-box">
      <div className="title-section">
        <h1>You Might also Like</h1>
      </div>

      <OwlCarouselWrapper posts={relatedPosts} noOfPosts={4} />
    </div>
  )
}
