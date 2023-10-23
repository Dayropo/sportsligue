import Image from "next/image"
import Link from "next/link"
import { FaFacebookF, FaGooglePlusG, FaRss, FaTwitter } from "react-icons/fa"
import SliderWrapper from "../SliderWrapper"
import { Post } from "@/src/@types/typings"
import urlFor from "@/sanity/urlFor"

type Props = {
  tags?: string[]
  posts?: Post[]
}

export default function Sidebar({ tags, posts }: Props) {
  return (
    <div className="col-lg-4 sidebar-sticky">
      {/* <!-- Sidebar --> */}
      <div className="sidebar theiaStickySidebar">
        {/* <div className="widget social-widget">
          <h1>Stay Connected </h1>
          <p>Do you want to be informed everytime with our latest news?</p>
          <ul className="social-share">
            <li>
              <a href="#" className="rss">
                <FaRss size={16} className="share-icons" />
                <span>345</span>
              </a>
            </li>
            <li>
              <a href="#" className="facebook">
                <FaFacebookF size={16} className="share-icons" />
                <span>3,460</span>
              </a>
            </li>
            <li>
              <a href="#" className="twitter">
                <FaTwitter size={16} className="share-icons" />
                <span>5,600</span>
              </a>
            </li>
            <li>
              <a href="#" className="google">
                <FaGooglePlusG size={16} className="share-icons" />
                <span>659</span>
              </a>
            </li>
          </ul>
        </div> */}

        {posts && posts.length > 0 && (
          <div className="widget slider-widget">
            <h1>Featured Posts</h1>

            <SliderWrapper posts={posts.slice(0, 3)} />

            <ul className="small-posts">
              {posts.slice(3, 6).map((post: Post) => (
                <li key={post._id}>
                  <Link href={`/${post.slug.current}`}>
                    <Image
                      src={urlFor(post.mainImage).url()}
                      fill
                      sizes="100vw"
                      alt={post.title}
                      style={{ objectFit: "cover" }}
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
        )}

        <div className="advertisement">
          <a
            href="https://kn6m4zjsiy3.typeform.com/to/JNmi3cD2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/images/adsense/300x250latest.gif"
              width={300}
              height={250}
              alt="300x250"
            />
          </a>
        </div>

        <div className="advertisement">
          <a
            href="https://refpa4948989.top/L?tag=d_2732079m_1573c_&site=2732079&ad=1573"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/images/adsense/Media9865__af300_600.gif"
              width={300}
              height={600}
              alt="300x600"
            />
          </a>
        </div>

        {tags && (
          <div className="widget tags-widget">
            <h1>Tags</h1>
            <ul className="tags-list">
              {tags.map((tag: string) => (
                <li key={tag}>
                  <Link href={`/tags/${tag}`}>{tag}</Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}
