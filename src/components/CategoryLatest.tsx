import { getPostsByCategory } from "@/sanity/sanity-utils"
import urlFor from "@/sanity/urlFor"
import Image from "next/image"
import Link from "next/link"
import { Post } from "../@types/typings"
import { PortableText } from "@portabletext/react"
import { PortableTextComponents } from "./PortableTextComponents"

type Props = {
  category: string
}

const CategoryLatest = async ({ category }: Props) => {
  const posts = await getPostsByCategory(category)

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
              alt=""
              style={{ objectFit: "cover" }}
            />
          </Link>
          <Link
            href={`/category/${posts[0].category.slug.current}`}
            className="category"
          >
            {posts[0].category.title}
          </Link>
        </div>
        <h2>
          <Link href={`/${posts[0].slug.current}`}>{posts[0].title}</Link>
        </h2>
        <div className="description">
          <PortableText
            value={posts[0].body}
            components={PortableTextComponents}
          />
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
                alt=""
                style={{ objectFit: "cover" }}
              />
            </Link>
            <div className="post-cont">
              <h2>
                <Link href={`/${post.slug.current}`}>{post.title}</Link>
              </h2>
              <ul className="post-tags">
                <li>
                  by{" "}
                  <Link href={`/profile/${post.author.slug.current}`}>
                    {post.author.name}
                  </Link>
                </li>
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CategoryLatest
