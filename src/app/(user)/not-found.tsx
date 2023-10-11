import Footer from "@/src/components/ui/Footer"
import Header from "@/src/components/ui/Header"
import Sidebar from "@/src/components/ui/Sidebar"
import React from "react"

export default function NotFound() {
  return (
    <div id="container">
      <Header />

      <section id="content-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="error-box">
                <div className="error-banner">
                  <h1>
                    Error <span>404</span>
                  </h1>
                  <p>
                    Oops! It looks like nothing was found at this location.
                    Maybe try another link or a search?
                  </p>
                </div>
                <div className="search-box">
                  <form role="search" className="search-form">
                    <input
                      type="text"
                      id="search"
                      name="search"
                      placeholder="Search here"
                    />
                    <button type="submit" id="search-submit">
                      <i className="fa fa-search"></i>
                    </button>
                  </form>
                </div>
              </div>

              {/* <div className="posts-block categories-box">
                <div className="title-section">
                  <h1>Popular Posts</h1>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="news-post standart-post">
                      <div className="post-image">
                        <a href="single-post">
                          <img src="upload/blog/s2.jpg" alt="" />
                        </a>
                        <a href="#" className="category">
                          Football
                        </a>
                      </div>
                      <h2>
                        <a href="single-post.html">
                          New alternatives are more productive
                        </a>
                      </h2>
                      <p>
                        Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur.
                      </p>
                    </div>
                    <ul className="small-posts">
                      <li>
                        <a href="single-post.html">
                          <img src="upload/blog/th4.jpg" alt="" />
                        </a>
                        <div className="post-cont">
                          <h2>
                            <a href="single-post.html">
                              Commentary: Spotify’s Unusual IPO Came at the
                              Perfect Time
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
                          <img src="upload/blog/th2.jpg" alt="" />
                        </a>
                        <div className="post-cont">
                          <h2>
                            <a href="single-post.html">
                              5 Key Things to Know About Haiti After Donald
                              Trump's Insult
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
                          <img src="upload/blog/th3.jpg" alt="" />
                        </a>
                        <div className="post-cont">
                          <h2>
                            <a href="single-post.html">
                              These Are All the Sam's Club Locations That Are
                              Closing
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
                  <div className="col-md-6">
                    <div className="news-post standart-post">
                      <div className="post-image">
                        <a href="single-post">
                          <img src="upload/blog/s10.jpg" alt="" />
                        </a>
                        <a href="#" className="category">
                          Extreme
                        </a>
                      </div>
                      <h2>
                        <a href="single-post.html">Traditional food</a>
                      </h2>
                      <p>
                        Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur.
                      </p>
                    </div>
                    <ul className="small-posts">
                      <li>
                        <a href="single-post.html">
                          <img src="upload/blog/th5.jpg" alt="" />
                        </a>
                        <div className="post-cont">
                          <h2>
                            <a href="single-post.html">
                              Commentary: Spotify’s Unusual IPO Came at the
                              Perfect Time
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
                          <img src="upload/blog/th7.jpg" alt="" />
                        </a>
                        <div className="post-cont">
                          <h2>
                            <a href="single-post.html">
                              5 Key Things to Know About Haiti After Donald
                              Trump's Insult
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
                          <img src="upload/blog/th9.jpg" alt="" />
                        </a>
                        <div className="post-cont">
                          <h2>
                            <a href="single-post.html">
                              These Are All the Sam's Club Locations That Are
                              Closing
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
                </div>
              </div> */}
            </div>

            <Sidebar />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
