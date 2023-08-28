import Image from "next/image"
import Header from "@/components/ui/Header"
import LatestNews from "@/components/LatestNews"
import HeadingNews from "@/components/HeadingNews"
import FeaturedPosts from "@/components/FeaturedPosts"
import Footer from "@/src/components/ui/Footer"
import CategoryLatest from "@/src/components/CategoryLatest"
import Sidebar from "@/src/components/ui/Sidebar"

export default async function Home() {
  return (
    <div id="container">
      <Header />

      <section id="content-section">
        <div className="container">
          {/* <!-- News-Headline --> */}
          <HeadingNews />
          {/* <!-- End News-Headline --> */}

          {/* <!-- Advertisement --> */}
          <div className="advertisement">
            <a href="#">
              <Image
                src={require("../../assets/upload/addsense/620x80grey.jpg")}
                alt=""
              />
            </a>
          </div>
          {/* <!-- End Advertisement --> */}

          <div className="row">
            <div className="col-lg-8">
              {/* <!-- Posts-block --> */}
              <LatestNews />
              {/* <!-- End Posts-block --> */}

              {/* <!-- Posts-block --> */}
              <FeaturedPosts />
              {/* <!-- End Posts-block --> */}

              {/* <!-- Advertisement --> */}
              <div className="advertisement">
                <a href="#">
                  <Image
                    src={require("../../assets/upload/addsense/620x80grey.jpg")}
                    alt=""
                  />
                </a>
              </div>
              {/* <!-- End Advertisement --> */}

              {/* <!-- Posts-block --> */}
              <div className="posts-block categories-box">
                <div className="row">
                  <CategoryLatest category="Football" />
                  <CategoryLatest category="Basketball" />
                </div>
              </div>
              {/* <!-- End Posts-block --> */}

              {/* <!-- Posts-block --> */}
              <div className="posts-block categories-box">
                <div className="row">
                  <CategoryLatest category="Tennis" />
                  <CategoryLatest category="Boxing" />
                </div>
              </div>
              {/* <!-- End Posts-block --> */}

              {/* <!-- Posts-block --> */}
              <div className="posts-block categories-box">
                <div className="row">
                  <CategoryLatest category="Formula 1" />
                  <CategoryLatest category="American Football" />
                </div>
              </div>
              {/* <!-- End Posts-block --> */}

              {/* <!-- Advertisement --> */}
              <div className="advertisement">
                <a href="#">
                  <Image
                    src={require("../../assets/upload/addsense/620x80grey.jpg")}
                    alt=""
                  />
                </a>
              </div>
              {/* <!-- End Advertisement --> */}

              {/* <!-- Posts-block --> */}
              <div className="posts-block">
                <div className="title-section">
                  <h1>World News</h1>
                </div>

                <div className="articles-box-style">
                  <div className="news-post article-post">
                    <div className="row">
                      <div className="col-sm-5">
                        <div className="post-image">
                          <a href="single-post">
                            <Image
                              src={require("../../assets/upload/blog/s3.jpg")}
                              alt=""
                            />
                          </a>
                          <a className="category" href="#">
                            Athletic
                          </a>
                        </div>
                      </div>
                      <div className="col-sm-7">
                        <h2>
                          <a href="single-post.html">
                            The Guardian view on Germany&apos;s coalition deal:
                            Merkel in the balance
                          </a>
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
                        <p>
                          Duis aute irure dolor in reprehenderit in voluptate
                          velit esse cillum dolore eu fugiat nulla pariatur.
                          Excepteur sint occaecat cupidatat non proident, sunt
                          in culpa qui officia deserunt mollit anim id est
                          laborum.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="news-post article-post">
                    <div className="row">
                      <div className="col-sm-5">
                        <div className="post-image">
                          <a href="single-post">
                            <Image
                              src={require("../../assets/upload/blog/s4.jpg")}
                              alt=""
                            />
                          </a>
                          <a className="category" href="#">
                            Basketball
                          </a>
                        </div>
                      </div>
                      <div className="col-sm-7">
                        <h2>
                          <a href="single-post.html">
                            Philip Dunne, sacked after his NHS remarks, must now
                            face his constituents
                          </a>
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
                        <p>
                          Duis aute irure dolor in reprehenderit in voluptate
                          velit esse cillum dolore eu fugiat nulla pariatur.
                          Excepteur sint occaecat cupidatat non proident, sunt
                          in culpa qui officia deserunt mollit anim id est
                          laborum.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="news-post article-post">
                    <div className="row">
                      <div className="col-sm-5">
                        <div className="post-image">
                          <a href="single-post">
                            <Image
                              src={require("../../assets/upload/blog/s5.jpg")}
                              alt=""
                            />
                          </a>
                          <a className="category" href="#">
                            Bicycle
                          </a>
                        </div>
                      </div>
                      <div className="col-sm-7">
                        <h2>
                          <a href="single-post.html">
                            Cameroon&apos;s heartbreaking struggles are a relic
                            of British colonialism
                          </a>
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
                        <p>
                          Duis aute irure dolor in reprehenderit in voluptate
                          velit esse cillum dolore eu fugiat nulla pariatur.
                          Excepteur sint occaecat cupidatat non proident, sunt
                          in culpa qui officia deserunt mollit anim id est
                          laborum.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="news-post article-post">
                    <div className="row">
                      <div className="col-sm-5">
                        <div className="post-image">
                          <a href="single-post">
                            <Image
                              src={require("../../assets/upload/blog/s6.jpg")}
                              alt=""
                            />
                          </a>
                          <a className="category" href="#">
                            Tennis
                          </a>
                        </div>
                      </div>
                      <div className="col-sm-7">
                        <h2>
                          <a href="single-post.html">
                            Ramaphosa vows to fight corruption in ruling ANC
                          </a>
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
                        <p>
                          Duis aute irure dolor in reprehenderit in voluptate
                          velit esse cillum dolore eu fugiat nulla pariatur.
                          Excepteur sint occaecat cupidatat non proident, sunt
                          in culpa qui officia deserunt mollit anim id est
                          laborum.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="news-post article-post">
                    <div className="row">
                      <div className="col-sm-5">
                        <div className="post-image">
                          <a href="single-post">
                            <Image
                              src={require("../../assets/upload/blog/s7.jpg")}
                              alt=""
                            />
                          </a>
                          <a className="category" href="#">
                            Winter Sports
                          </a>
                        </div>
                      </div>
                      <div className="col-sm-7">
                        <h2>
                          <a href="single-post.html">
                            The Guardian view on Germany&apos;s coalition deal:
                            Merkel in the balance
                          </a>
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
                        <p>
                          Duis aute irure dolor in reprehenderit in voluptate
                          velit esse cillum dolore eu fugiat nulla pariatur.
                          Excepteur sint occaecat cupidatat non proident, sunt
                          in culpa qui officia deserunt mollit anim id est
                          laborum.
                        </p>
                      </div>
                    </div>
                  </div>
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
              {/* <!-- End Posts-block --> */}
            </div>

            <Sidebar />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
