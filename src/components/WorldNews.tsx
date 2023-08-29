import { getWorldPosts } from "@/sanity/sanity-utils"
import Image from "next/image"
import { Post } from "../@types/typings"
import Link from "next/link"
import urlFor from "@/sanity/urlFor"
import { FiBook, FiUser } from "react-icons/fi"
import { PortableText } from "@portabletext/react"
import { PortableTextComponents } from "./PortableTextComponents"

export default async function WorldNews() {
  const posts = await getWorldPosts()

  return (
    <div className="posts-block">
      <div className="title-section">
        <h1>World News</h1>
      </div>

      <div className="articles-box-style">
        {posts.slice(0, 5).map((post: Post) => (
          <div className="news-post article-post">
            <div className="row">
              <div className="col-sm-5">
                <div className="post-image">
                  <Link href={`/${post.slug.current}`}>
                    <Image
                      src={urlFor(post.mainImage).url()}
                      fill
                      sizes="100vw"
                      alt={post.mainImage.caption}
                      style={{ objectFit: "cover" }}
                    />
                  </Link>
                  <Link
                    href={`/category/${post.category.slug.current}`}
                    className="category"
                  >
                    {post.category.title}
                  </Link>
                </div>
              </div>
              <div className="col-sm-7">
                <h2>
                  <Link href={`/${post.slug.current}`}>{post.title}</Link>
                </h2>
                <ul className="post-tags">
                  <li>
                    <FiUser size={12} style={{ marginRight: "4px" }} />
                    by{" "}
                    <Link href={`/profile/${post.author.slug.current}`}>
                      {post.author.name}
                    </Link>
                  </li>
                  <li>
                    <a href="#">
                      <FiBook size={12} style={{ marginRight: "4px" }} />
                      <span>23 comments</span>
                    </a>
                  </li>
                </ul>
                <div className="description">
                  <PortableText
                    value={post.body}
                    components={PortableTextComponents}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}

        <ul className="pagination-list">
          <li>
            <a href="#">Prev</a>
          </li>
          <li>
            <a href="#" className="active">
              1
            </a>
          </li>
          <li>
            <a href="#">2</a>
          </li>
          <li>
            <a href="#">3</a>
          </li>
          <li>
            <a href="#">...</a>
          </li>
          <li>
            <a href="#">6</a>
          </li>
          <li>
            <a href="#">Next</a>
          </li>
        </ul>
      </div>
    </div>
  )
}
