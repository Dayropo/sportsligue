import { getAllPosts } from "@/sanity/sanity-utils"
import Image from "next/image"
import { Post } from "../@types/typings"
import Link from "next/link"
import urlFor from "@/sanity/urlFor"

const LatestNews = async () => {
  const posts = await getAllPosts()

  return (
    <div className="posts-block standard-box">
      <div className="title-section">
        <h1>Latest News</h1>
      </div>
      <div className="row">
        {posts.slice(0, 6).map((post: Post) => (
          <div className="col-sm-6" key={post._id}>
            <div className="news-post standart-post">
              <div className="post-image">
                <Link
                  href={`/${post.slug.current}`}
                >
                  <Image
                    src={urlFor(post.mainImage).url()}
                    fill
                    alt=""
                    style={{ objectFit: "cover" }}
                  />
                </Link>
                <Link
                  href={`/${post.category.slug.current}`}
                  className="category"
                >
                  {post.category.title}
                </Link>
              </div>
              <h2>
                <Link
                  href={`/${post.slug.current}`}
                >
                  {post.title}
                </Link>
              </h2>
              <ul className="post-tags">
                <li>
                  by{" "}
                  <Link href={`/${post.author.slug.current}`}>
                    {post.author.name}
                  </Link>
                </li>
                <li>
                  <a href="#">
                    <span>23 comments</span>
                  </a>
                </li>
              </ul>
              <p>
                Eight candidates are seeking to oust Zeman, whose inclination
                toward far-right groups and cosy relations with Russia and China
                have split public opinion.
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default LatestNews
