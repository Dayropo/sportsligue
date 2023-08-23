import { getAllPosts } from "@/sanity/sanity-utils"
import Image from "next/image"
import { Post } from "../@types/typings"
import Link from "next/link"
import urlFor from "@/sanity/urlFor"

const HeadingNews = async () => {
  const posts = await getAllPosts()

  return (
    <div className="news-headline">
      <span className="title-notifier">Heading News</span>

      <div className="news-post image-post main-post">
        <Image
          src={urlFor(posts[0].mainImage).url()}
          fill
          alt=""
          style={{ objectFit: "cover" }}
        />
        <div className="hover-box">
          <Link href={`/${posts[0].category.slug.current}`} className="category">
            {posts[0].category.title}
          </Link>
          <h2>
            <Link href={`/${posts[0].category.slug.current}/${posts[0].slug.current}`}>
              {posts[0].title}
            </Link>
          </h2>
          <ul className="post-tags">
            <li>
              <i className="lnr lnr-user"></i>by{" "}
              <Link href={`/${posts[0].author.slug.current}`}>{posts[0].author.name}</Link>
            </li>
            <li>
              <a href="#">
                <i className="lnr lnr-book"></i>
                <span>23 comments</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      {posts.slice(1, 3).map((post: Post) => (
        <div className="news-post image-post" key={post._id}>
          <Image src={urlFor(post.mainImage).url()} fill alt="" style={{ objectFit: "cover" }} />
          <div className="hover-box">
            <Link href={`/${post.category.slug.current}`} className="category">
              {post.category.title}
            </Link>
            <h2>
              <Link href={`/${post.category.slug.current}/${post.slug.current}`}>{post.title}</Link>
            </h2>
            <ul className="post-tags">
              <li>
                <i className="lnr lnr-user"></i>by{" "}
                <Link href={`/${post.author.slug.current}`}>{post.author.name}</Link>
              </li>
              <li>
                <a href="#">
                  <i className="lnr lnr-book"></i>
                  <span>56 comments</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      ))}

      {/* <div className="news-post image-post">
        <Image src={require("../assets/upload/blog/h3.jpg")} alt="" />
        <div className="hover-box">
          <a href="#" className="category">
            Winter Sports
          </a>
          <h2>
            <a href="single-post.html">Ski Alpine championship in Norway</a>
          </h2>
          <ul className="post-tags">
            <li>
              <i className="lnr lnr-user"></i>by <a href="#">Helena Doe</a>
            </li>
            <li>
              <a href="#">
                <i className="lnr lnr-book"></i>
                <span>23 comments</span>
              </a>
            </li>
          </ul>
        </div>
      </div> */}
    </div>
  )
}

export default HeadingNews
