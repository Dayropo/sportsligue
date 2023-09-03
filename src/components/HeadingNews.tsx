import { getHeadlines } from "@/sanity/sanity-utils"
import Image from "next/image"
import { Post } from "../@types/typings"
import Link from "next/link"
import urlFor from "@/sanity/urlFor"
import { FiBook, FiUser } from "react-icons/fi"

const HeadingNews = async () => {
  const posts = await getHeadlines()

  return (
    <div className="news-headline">
      <span className="title-notifier">Headlines</span>

      <div className="news-post image-post main-post">
        <Image
          src={urlFor(posts[0].mainImage).url()}
          fill
          alt=""
          style={{ objectFit: "cover" }}
        />
        <div className="hover-box">
          <Link
            href={`/category/${posts[0].category.slug.current}`}
            className="category"
          >
            {posts[0].category.title}
          </Link>
          <h2>
            <Link href={`/${posts[0].slug.current}`}>{posts[0].title}</Link>
          </h2>
          <ul className="post-tags">
            <li>
              <FiUser size={12} style={{ marginRight: "4px" }} />
              by{" "}
              <Link href={`/profile/${posts[0].author.slug.current}`}>
                {posts[0].author.name}
              </Link>
            </li>
            <li>
              <a href="#">
                <FiBook size={12} style={{ marginRight: "4px" }} />
                <span>23 comments</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      {posts.slice(1, 3).map((post: Post) => (
        <div className="news-post image-post" key={post._id}>
          <Image
            src={urlFor(post.mainImage).url()}
            fill
            alt=""
            style={{ objectFit: "cover" }}
          />
          <div className="hover-box">
            <Link
              href={`/category/${post.category.slug.current}`}
              className="category"
            >
              {post.category.title}
            </Link>
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
                  <span>56 comments</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      ))}
    </div>
  )
}

export default HeadingNews
