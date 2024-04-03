import { client } from "@/sanity/sanity-client"
import { Post } from "@/src/@types/typings"
import Posts from "@/src/components/subCategories/Posts"
import Footer from "@/src/components/ui/Footer"
import Header from "@/src/components/ui/Header"
import Sidebar from "@/src/components/ui/Sidebar"
import { getTitle } from "@/src/utils/helpers"
import { Metadata } from "next"
import { groq } from "next-sanity"
import { notFound } from "next/navigation"

// export const dynamic = "force-dynamic"
// export const revalidate = 0

type Props = {
  params: {
    category: string
    subCategory: string
  }
}

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
  const slug = params.subCategory
  const category = params.category

  return {
    title: getTitle(slug),
    description: `Get ${getTitle(
      slug
    )} News, Live Scores, Updates, Schedule, Player information, Predictions & Match Analysis across the world`,
    alternates: {
      canonical: `/category/${category}/${slug}`,
    },
    keywords: [getTitle(category)?.toLowerCase()!, getTitle(slug)?.toLowerCase()!],
  }
}

export default function SubCategory({ params }: Props) {
  const slug = params.subCategory
  const category = params.category

  // const posts = await client.fetch<Post[]>(
  //   groq`*[_type == "post" && subCategory->slug.current == $slug]{
  //     _id,
  //     _createdAt,
  //     title,
  //     slug,
  //     mainImage,
  //     author->,
  //     category->,
  //     subCategory->,
  //     featured,
  //     publishedAt,
  //     body,
  //     tags,
  //   } | order(publishedAt desc)`,
  //   {
  //     slug,
  //     cache: "no-store",
  //   }
  // )

  // const featuredPosts = await client.fetch<Post[]>(
  //   groq`*[_type == "post" && featured == true]{
  //     _id,
  //     _createdAt,
  //     title,
  //     slug,
  //     description,
  //     mainImage,
  //     author->,
  //     category->,
  //     subCategory->,
  //     featured,
  //     publishedAt,
  //     body,
  //     tags,
  //   } | order(publishedAt desc)[0...6]`,
  //   {
  //     cache: "no-store",
  //   }
  // )

  //   const { posts, featuredPosts } = await client.fetch(
  //     `{
  //     "posts": *[_type == "post" && subCategory->slug.current == $slug]{
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
  // } | order(publishedAt desc),
  // "featuredPosts": *[_type == "post" && featured == true]{
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
  // } | order(publishedAt desc)[0...6]
  // }`,
  //     {
  //       slug,
  //       cache: "no-store",
  //     }
  //   )

  // if (posts.length < 1) {
  //   notFound()
  // }

  return (
    <div id="container">
      <Header />
      <Posts slug={slug} category={category} />
      <Footer />
    </div>
  )
}
