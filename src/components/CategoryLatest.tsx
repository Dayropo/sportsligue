import { getPostsByCategory } from "@/sanity/sanity-utils"
import urlFor from "@/sanity/urlFor"
import Image from "next/image"
import Link from "next/link"
import { Post } from "../@types/typings"

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
          <Link
            href={`/${posts[0].category.slug.current}/${posts[0].slug.current}`}
          >
            <Image
              src={urlFor(posts[0].mainImage).url()}
              fill
              alt=""
              style={{ objectFit: "cover" }}
            />
          </Link>
          <Link
            href={`/${posts[0].category.slug.current}`}
            className="category"
          >
            {posts[0].category.title}
          </Link>
        </div>
        <h2>
          <Link
            href={`/${posts[0].category.slug.current}/${posts[0].slug.current}`}
          >
            {posts[0].title}
          </Link>
        </h2>
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur.
        </p>
      </div>
      <ul className="small-posts">
        {posts.slice(1, 4).map((post: Post) => (
          <li key={post._id}>
            <Link href={`/${post.category.slug.current}/${post.slug.current}`}>
              <Image
                src={urlFor(post.mainImage).url()}
                fill
                alt=""
                style={{ objectFit: "cover" }}
              />
            </Link>
            <div className="post-cont">
              <h2>
                <Link
                  href={`/${post.category.slug.current}/${post.slug.current}`}
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
              </ul>
            </div>
          </li>
        ))}

        {/* <li>
          <a href="single-post.html">
            <Image src={require("../assets/upload/blog/th2.jpg")} alt="" />
          </a>
          <div className="post-cont">
            <h2>
              <a href="single-post.html">
                5 Key Things to Know About Haiti After Donald Trump&apos;s
                Insult
              </a>
            </h2>
            <ul className="post-tags">
              <li>
                by <a href="#">John Doe</a>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <a href="single-post.html">
            <Image src={require("../assets/upload/blog/th3.jpg")} alt="" />
          </a>
          <div className="post-cont">
            <h2>
              <a href="single-post.html">
                These Are All the Sam&apos;s Club Locations That Are Closing
              </a>
            </h2>
            <ul className="post-tags">
              <li>
                by <a href="#">John Doe</a>
              </li>
            </ul>
          </div>
        </li> */}
      </ul>
    </div>
  )
}

export default CategoryLatest
