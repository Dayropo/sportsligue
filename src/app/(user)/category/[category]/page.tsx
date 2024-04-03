import { client } from "@/sanity/sanity-client"
import { Post } from "@/src/@types/typings"
import Posts from "@/src/components/categories/Posts"
import Footer from "@/src/components/ui/Footer"
import Header from "@/src/components/ui/Header"
import Sidebar from "@/src/components/ui/Sidebar"
import { Metadata } from "next"
import { groq } from "next-sanity"
import { notFound } from "next/navigation"
import Skeleton from "@mui/material/Skeleton"
import { getTitle } from "@/src/utils/helpers"

// export const dynamic = "force-dynamic"
// export const revalidate = 0

type Props = {
  params: {
    category: string
  }
}

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
  const slug = params.category

  return {
    title: getTitle(slug),
    description: `Get ${getTitle(
      slug
    )} News, Live Scores, Updates, Schedule, Player information, Predictions & Match Analysis across the world`,
    alternates: {
      canonical: `/category/${slug}`,
    },
    keywords: [getTitle(slug)?.toLowerCase()!],
  }
}

// export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
//   const slug = params.category

//   try {
//     const posts = await client.fetch<Post[]>(
//       groq`*[_type == "post" && category->slug.current == $slug]{
//         _id,
//         _createdAt,
//         title,
//         slug,
//         mainImage,
//         author->,
//         category->,
//         subCategory->,
//         featured,
//         publishedAt,
//         body,
//         tags,
//       } | order(publishedAt desc)`,
//       {
//         slug,
//         cache: "no-store",
//       }
//     )

//     if (posts.length < 1)
//       return {
//         title: "Not Found",
//         description: "The page you are looking for does not exist.",
//       }

//     return {
//       title: posts[0].category.title,
//       description: `Get ${posts[0].category.title} News, Live Scores, Updates, Schedule, Player information, Predictions & Match Analysis across the world`,
//       alternates: {
//         canonical: `/category/${posts[0].category.slug.current}`,
//       },
//       keywords: [posts[0].category.slug.current],
//     }
//   } catch (error) {
//     console.error(error)
//     return {
//       title: "Not Found",
//       description: "The page you are looking for does not exist.",
//     }
//   }
// }

export default function Category({ params }: Props) {
  const slug = params.category

  // const posts = await client.fetch<Post[]>(
  //   groq`*[_type == "post" && category->slug.current == $slug]{
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
  //     "posts": *[_type == "post" && category->slug.current == $slug]{
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
      <Posts slug={slug} />
      <Footer />
    </div>
  )
}
