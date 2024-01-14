import { getPostsByCategory } from "@/sanity/sanity-utils"
import urlFor from "@/sanity/urlFor"
import Image from "next/image"
import Link from "next/link"
import { Post } from "../@types/typings"
import { PortableText } from "@portabletext/react"
import { PortableTextComponents } from "./PortableTextComponents"
import { client } from "@/sanity/sanity-client"
import { groq } from "next-sanity"

type Props = {
  category: string
}

export default async function CategoryLatest({ category }: Props) {
  const posts = await client.fetch<Post[]>(
    groq`*[_type == "post" && category->title == $category]{
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
} | order(publishedAt desc)[0...4]`,
    {
      category,
      cache: "no-store",
    }
  )

  return (
    <div className="col-md-6">
      <div className="title-section">
        <h1>{category}</h1>
      </div>
      <div className="news-post standart-post">
        <div className="post-image">
          <Link href={`/${posts[0].slug.current}`}>
            <Image
              src={urlFor(posts[0].mainImage).url()}
              fill
              sizes="100vw"
              alt={posts[0].title}
              style={{ objectFit: "cover" }}
              loading="lazy"
            />
          </Link>
          <Link href={`/category/${posts[0].category.slug.current}`} className="category">
            {posts[0].category.title}
          </Link>
        </div>
        <h2>
          <Link href={`/${posts[0].slug.current}`}>{posts[0].title}</Link>
        </h2>
        <div className="description">
          <PortableText value={posts[0].body} components={PortableTextComponents} />
        </div>
      </div>
      <ul className="small-posts">
        {posts.slice(1, 4).map((post: Post) => (
          <li key={post._id}>
            <Link href={`/${post.slug.current}`}>
              <Image
                src={urlFor(post.mainImage).url()}
                fill
                sizes="100vw"
                alt={post.title}
                style={{ objectFit: "cover" }}
                loading="lazy"
              />
            </Link>
            <div className="post-cont">
              <h2>
                <Link href={`/${post.slug.current}`}>{post.title}</Link>
              </h2>
              <ul className="post-tags">
                <li>
                  by <a href="#">{post.author.name}</a>
                </li>
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
