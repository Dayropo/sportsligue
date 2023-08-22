"use client"

import Image from "next/image"
import Header from "@/components/ui/Header"
import LatestNews from "@/components/LatestNews"
import HeadingNews from "@/components/HeadingNews"
import FootballLatest from "@/components/FootballLatest"
import BasketballLatest from "@/components/BasketballLatest"
import FeaturedPosts from "@/components/FeaturedPosts"
import Footer from "@/src/components/ui/Footer"

export default function Home() {
  return (
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
                <FootballLatest />

                <BasketballLatest />
              </div>
            </div>
            {/* <!-- End Posts-block --> */}

            {/* <!-- Posts-block --> */}
            <div className="posts-block categories-box">
              <div className="row">
                <div className="col-md-6">
                  <div className="title-section">
                    <h1>Tennis</h1>
                  </div>
                  <div className="news-post standart-post">
                    <div className="post-image">
                      <a href="single-post">
                        <Image
                          src={require("../../assets/upload/blog/s15.jpg")}
                          alt=""
                        />
                      </a>
                      <a href="#" className="category">
                        Tennis
                      </a>
                    </div>
                    <h2>
                      <a href="single-post.html">
                        New alternatives are more productive
                      </a>
                    </h2>
                    <p>
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur.
                    </p>
                  </div>
                  <ul className="small-posts">
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
                            Commentary: Spotify&apos;s Unusual IPO Came at the
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
                        <Image
                          src={require("../../assets/upload/blog/th8.jpg")}
                          alt=""
                        />
                      </a>
                      <div className="post-cont">
                        <h2>
                          <a href="single-post.html">
                            5 Key Things to Know About Haiti After Donald
                            Trump&apos;s Insult
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
                            These Are All the Sam&apos;s Club Locations That Are
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
                  <div className="title-section">
                    <h1>Winter Sports</h1>
                  </div>
                  <div className="news-post standart-post">
                    <div className="post-image">
                      <a href="single-post">
                        <Image
                          src={require("../../assets/upload/blog/s23.jpg")}
                          alt=""
                        />
                      </a>
                      <a href="#" className="category">
                        Winter sports
                      </a>
                    </div>
                    <h2>
                      <a href="single-post.html">
                        Travel Map Guide for Visitors
                      </a>
                    </h2>
                    <p>
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur.
                    </p>
                  </div>
                  <ul className="small-posts">
                    <li>
                      <a href="single-post.html">
                        <Image
                          src={require("../../assets/upload/blog/th10.jpg")}
                          alt=""
                        />
                      </a>
                      <div className="post-cont">
                        <h2>
                          <a href="single-post.html">
                            Commentary: Spotify&apos;s Unusual IPO Came at the
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
                        <Image
                          src={require("../../assets/upload/blog/th2.jpg")}
                          alt=""
                        />
                      </a>
                      <div className="post-cont">
                        <h2>
                          <a href="single-post.html">
                            5 Key Things to Know About Haiti After Donald
                            Trump&apos;s Insult
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
                          src={require("../../assets/upload/blog/th4.jpg")}
                          alt=""
                        />
                      </a>
                      <div className="post-cont">
                        <h2>
                          <a href="single-post.html">
                            These Are All the Sam&apos;s Club Locations That Are
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
            </div>
            {/* <!-- End Posts-block --> */}

            {/* <!-- Posts-block --> */}
            <div className="posts-block categories-box">
              <div className="row">
                <div className="col-md-6">
                  <div className="title-section">
                    <h1>Baseball</h1>
                  </div>
                  <div className="news-post standart-post">
                    <div className="post-image">
                      <a href="single-post">
                        <Image
                          src={require("../../assets/upload/blog/s12.jpg")}
                          alt=""
                        />
                      </a>
                      <a href="#" className="category">
                        Baseball
                      </a>
                    </div>
                    <h2>
                      <a href="single-post.html">
                        New alternatives are more productive
                      </a>
                    </h2>
                    <p>
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur.
                    </p>
                  </div>
                  <ul className="small-posts">
                    <li>
                      <a href="single-post.html">
                        <Image
                          src={require("../../assets/upload/blog/th1.jpg")}
                          alt=""
                        />
                      </a>
                      <div className="post-cont">
                        <h2>
                          <a href="single-post.html">
                            Commentary: Spotify&apos;s Unusual IPO Came at the
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
                        <Image
                          src={require("../../assets/upload/blog/th2.jpg")}
                          alt=""
                        />
                      </a>
                      <div className="post-cont">
                        <h2>
                          <a href="single-post.html">
                            5 Key Things to Know About Haiti After Donald
                            Trump&apos;s Insult
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
                          src={require("../../assets/upload/blog/th3.jpg")}
                          alt=""
                        />
                      </a>
                      <div className="post-cont">
                        <h2>
                          <a href="single-post.html">
                            These Are All the Sam&apos;s Club Locations That Are
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
                  <div className="title-section">
                    <h1>Extreme sports</h1>
                  </div>
                  <div className="news-post standart-post">
                    <div className="post-image">
                      <a href="single-post">
                        <Image
                          src={require("../../assets/upload/blog/s10.jpg")}
                          alt=""
                        />
                      </a>
                      <a href="#" className="category">
                        Extreme
                      </a>
                    </div>
                    <h2>
                      <a href="single-post.html">Traditional food</a>
                    </h2>
                    <p>
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur.
                    </p>
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
                            Commentary: Spotify&apos;s Unusual IPO Came at the
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
                        <Image
                          src={require("../../assets/upload/blog/th7.jpg")}
                          alt=""
                        />
                      </a>
                      <div className="post-cont">
                        <h2>
                          <a href="single-post.html">
                            5 Key Things to Know About Haiti After Donald
                            Trump&apos;s Insult
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
                            These Are All the Sam&apos;s Club Locations That Are
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
                        Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
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
                        Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
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
                          Cameroon&apos;s heartbreaking struggles are a relic of
                          British colonialism
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
                        Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
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
                        Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
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
                        Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
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

          <div className="col-lg-4 sidebar-sticky">
            {/* <!-- Sidebar --> */}
            <div className="sidebar theiaStickySidebar">
              <div className="widget social-widget">
                <h1>Stay Connected </h1>
                <p>
                  Do you want to be informed everytime with our latest news?
                </p>
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
                          <a href="single-post.html">
                            Ski Alpine final in Austria
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
                          Commentary: Spotify&apos;s Unusual IPO Came at the
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
                      <Image
                        src={require("../../assets/upload/blog/th7.jpg")}
                        alt=""
                      />
                    </a>
                    <div className="post-cont">
                      <h2>
                        <a href="single-post.html">
                          5 Key Things to Know About Haiti After Donald
                          Trump&apos;s Insult
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
                          These Are All the Sam&apos;s Club Locations That Are
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

              <div className="advertisement">
                <a href="#">
                  <Image
                    src={require("../../assets/upload/addsense/300x250.jpg")}
                    alt=""
                  />
                </a>
              </div>

              <div className="widget tags-widget">
                <h1>Tags</h1>
                <ul className="tags-list">
                  <li>
                    <a href="#">Football</a>
                  </li>
                  <li>
                    <a href="#">Basketball</a>
                  </li>
                  <li>
                    <a href="#">Tennis</a>
                  </li>
                  <li>
                    <a href="#">Athletic</a>
                  </li>
                  <li>
                    <a href="#">Winter Sports</a>
                  </li>
                  <li>
                    <a href="#">Handball</a>
                  </li>
                  <li>
                    <a href="#">Rugby</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
