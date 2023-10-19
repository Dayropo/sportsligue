import Image from "next/image"
import Link from "next/link"
import { FaFacebookF, FaGooglePlusG, FaRss, FaTwitter } from "react-icons/fa"
import FeaturedSidebarPosts from "../FeaturedSidebarPosts"

type Props = {
  tags?: string[]
}

export default async function Sidebar({ tags }: Props) {
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

        <FeaturedSidebarPosts />

        <div className="advertisement">
          <a href="#">
            <Image
              src="/images/adsense/300x250latest.gif"
              width={300}
              height={250}
              alt="300x250"
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
