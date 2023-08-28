import Image from "next/image"
import Link from "next/link"

type Props = {
  tags?: string[]
}

export default function Sidebar({ tags }: Props) {
  return (
    <div className="col-lg-4 sidebar-sticky">
      {/* <!-- Sidebar --> */}
      <div className="sidebar theiaStickySidebar">
        <div className="widget social-widget">
          <h1>Stay Connected </h1>
          <p>Do you want to be informed everytime with our latest news?</p>
          <ul className="social-share">
            <li>
              <a href="#" className="rss">
                <i className="fa fa-rss"></i>
                <span>345</span>
              </a>
            </li>
            <li>
              <a href="#" className="facebook">
                <i className="fa fa-facebook"></i>
                <span>3,460</span>
              </a>
            </li>
            <li>
              <a href="#" className="twitter">
                <i className="fa fa-twitter"></i>
                <span>5,600</span>
              </a>
            </li>
            <li>
              <a href="#" className="google">
                <i className="fa fa-google-plus"></i>
                <span>659</span>
              </a>
            </li>
          </ul>
        </div>

        <div className="widget slider-widget">
          <h1>Featured Posts</h1>
          <div className="flexslider">
            <ul className="slides">
              <li>
                <Image
                  alt=""
                  src={require("../../assets/upload/blog/s23.jpg")}
                />
                <div className="slider-caption">
                  <a href="#" className="category">
                    Winter sports
                  </a>
                  <h2>
                    <a href="single-post.html">Ski Alpine final in Austria</a>
                  </h2>
                  <ul className="post-tags">
                    <li>
                      <i className="lnr lnr-user"></i>by{" "}
                      <a href="#">John Doe</a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="lnr lnr-book"></i>
                        <span>23 comments</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <Image
                  alt=""
                  src={require("../../assets/upload/blog/s24.jpg")}
                />
                <div className="slider-caption">
                  <a href="#" className="category">
                    Football
                  </a>
                  <h2>
                    <a href="single-post.html">World Cup in Germany</a>
                  </h2>
                  <ul className="post-tags">
                    <li>
                      <i className="lnr lnr-user"></i>by{" "}
                      <a href="#">John Doe</a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="lnr lnr-book"></i>
                        <span>23 comments</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <Image
                  alt=""
                  src={require("../../assets/upload/blog/s25.jpg")}
                />
                <div className="slider-caption">
                  <a href="#" className="category">
                    Football
                  </a>
                  <h2>
                    <a href="single-post.html">El classico in Nou Camp</a>
                  </h2>
                  <ul className="post-tags">
                    <li>
                      <i className="lnr lnr-user"></i>by{" "}
                      <a href="#">John Doe</a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="lnr lnr-book"></i>
                        <span>23 comments</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>

          <ul className="small-posts">
            <li>
              <a href="single-post.html">
                <Image
                  src={require("../../assets/upload/blog/th5.jpg")}
                  alt=""
                />
              </a>
              <div className="post-cont">
                <h2>
                  <a href="single-post.html">
                    Commentary: Spotify&apos;s Unusual IPO Came at the Perfect
                    Time
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
                <Image
                  src={require("../../assets/upload/blog/th7.jpg")}
                  alt=""
                />
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
                <Image
                  src={require("../../assets/upload/blog/th9.jpg")}
                  alt=""
                />
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
            </li>
          </ul>
        </div>

        <div className="advertisement">
          <a href="#">
            <Image
              src={require("../../assets/upload/addsense/300x250.jpg")}
              alt=""
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
