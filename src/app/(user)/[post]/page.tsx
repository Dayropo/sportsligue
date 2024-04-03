import { getPost } from "@/sanity/sanity-utils"
import urlFor from "@/sanity/urlFor"
import AuthorProfile from "@/src/components/AuthorProfile"
import { PortableTextComponents } from "@/src/components/PortableTextComponents"
import RelatedPosts from "@/src/components/RelatedPosts"
import Footer from "@/src/components/ui/Footer"
import Header from "@/src/components/ui/Header"
import Sidebar from "@/src/components/ui/Sidebar"
import { PortableText } from "@portabletext/react"
import { Metadata } from "next"
import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import { FaFacebookF, FaGooglePlusG, FaLinkedinIn, FaRss, FaTwitter } from "react-icons/fa"
import { FiBook, FiUser, FiEye } from "react-icons/fi"
import { Post } from "@/src/@types/typings"
import { notFound } from "next/navigation"
import SocialShareBox from "@/src/components/ui/SocialShareBox"
import { headers } from "next/headers"
import { client } from "@/sanity/sanity-client"
import { groq } from "next-sanity"
import AdSense728x90 from "@/src/components/adsense/Adsense728x90"
import PostBody from "@/src/components/post/PostBody"

// export const dynamic = "force-dynamic"
// export const revalidate = 0

type Props = {
  params: {
    post: string
  }
}

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
  const slug = params.post

  try {
    const post = await client.fetch<Post>(
      groq`*[_type == "post" && slug.current == $slug][0]{
        _id,
        _createdAt,
        title,
        slug,
        description,
        mainImage,
        author->,
        category->,
        subCategory->,
        featured,
        publishedAt,
        body,
        tags,
      }`,
      {
        slug,
        cache: "no-store",
      }
    )

    if (!post)
      return {
        title: "Not Found",
        description: "The page you are looking for does not exist.",
      }

    return {
      title: post.title,
      description: post.description ? post.description : "",
      alternates: {
        canonical: `/${post.slug.current}`,
      },
      keywords: post.tags,
      openGraph: {
        title: post.title,
        description: post.description ? post.description : "",
        url: `/${post.slug.current}`,
        siteName: "SportsLigue",
        type: "article",
        images: {
          url: urlFor(post.mainImage).url(),
          width: 1200,
          height: 720,
          alt: post.mainImage.caption,
        },
      },
      twitter: {
        card: "summary_large_image",
        title: post.title,
        description: post.description ? post.description : "",
        site: "@SportsLigue",
        siteId: "1703204312636178432",
        // creator: "@SportsLigue",
        // creatorId: "1703204312636178432",
        images: {
          url: urlFor(post.mainImage).url(),
          alt: post.mainImage.caption,
        },
      },
      robots: {
        index: true,
        follow: true,
        nocache: true,
        nositelinkssearchbox: true,
      },
    }
  } catch (error) {
    console.error(error)
    return {
      title: "Not Found",
      description: "The page you are looking for does not exist.",
    }
  }
}

export default function Page({ params }: Props) {
  const slug = params.post

  // const post = await client.fetch<Post>(
  //   groq`*[_type == "post" && slug.current == $slug][0]{
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
  //   }`,
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

  //   const { post, featuredPosts } = await client.fetch(
  //     `{
  //     "post": *[_type == "post" && slug.current == $slug][0]{
  //   _id,
  //   _createdAt,
  //   title,
  //   slug,
  //   description,
  //   mainImage,
  //   author->,
  //   category->,
  //   subCategory->,
  //   featured,
  //   publishedAt,
  //   body,
  //   tags,
  // },
  // "featuredPosts": *[_type == "post" && featured == true]{
  //   _id,
  //   _createdAt,
  //   title,
  //   slug,
  //   description,
  //   mainImage,
  //   author->,
  //   category->,
  //   subCategory->,
  //   featured,
  //   publishedAt,
  //   body,
  //   tags,
  // } | order(publishedAt desc)[0...6],
  // }`,
  //     {
  //       slug,
  //       cache: "no-store",
  //     }
  //   )

  // if (!post) {
  //   notFound()
  // }

  return (
    <div id="container">
      <Header />
      <PostBody slug={slug} />
      <Footer />
    </div>
  )
}
