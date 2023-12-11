import { client } from "@/sanity/sanity-client"
import React from "react"
import Posts from "@/src/components/tags/Posts"
import Sidebar from "@/src/components/ui/Sidebar"
import Header from "@/src/components/ui/Header"
import Footer from "@/src/components/ui/Footer"
import { Metadata } from "next"

export const dynamic = "force-dynamic"

type Props = {
  params: {
    tag: string
  }
}

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const slug = params.tag
  const decodedSlug = slug.split("_").join(" ")

  return {
    title: decodedSlug,
    alternates: {
      canonical: `/tags/${slug}`,
    },
    keywords: [decodedSlug],
  }
}

export default async function Tag({ params }: Props) {
  const slug = params.tag
  const decodedSlug = slug.split("_").join(" ")

  const { posts, featuredPosts } = await client.fetch(
    `{
    "posts": *[_type == "post" && ($decodedSlug in tags)]{
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
} | order(publishedAt desc),
"featuredPosts": *[_type == "post" && featured == true]{
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
} | order(publishedAt desc)[0...6]
}`,
    {
      decodedSlug,
      cache: "no-store",
    }
  )

  return (
    <div id="container">
      <Header />

      <section id="content-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              {/* archive box */}
              <div className="archive-box">
                <h1>
                  Tag: <span>{decodedSlug}</span>
                </h1>
              </div>
              {/* End archive box */}

              {/* Posts block */}
              <Posts posts={posts} />
              {/* End Posts block */}
            </div>

            <Sidebar posts={featuredPosts} />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
