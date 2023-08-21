"use client"

import dynamic from "next/dynamic"
import Image from "next/image"
import "owl.carousel/dist/assets/owl.carousel.css"
import "owl.carousel/dist/assets/owl.theme.default.css"

if (typeof window !== "undefined") {
  window.$ = window.jQuery = require("jquery")
}

const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
})

const FeaturedPosts = () => {
  return (
    <div className="posts-block">
      <div className="title-section">
        <h1>Featured</h1>
      </div>
      <div className="featured-box owl-wrapper">
        {/* <div className="owl-carousel" data-num="3"> */}
        <OwlCarousel
          className="owl-theme"
          loop
          autoplay
          dots={false}
          margin={10}
          nav
        >
          <div className="item">
            <div className="news-post standart-post">
              <div className="post-image">
                <a href="single-post">
                  <Image
                    src={require("../assets/upload/blog/s24.jpg")}
                    alt=""
                  />
                </a>
                <a href="#" className="category">
                  football
                </a>
              </div>
              <h2>
                <a href="single-post.html">Berlin olimpic stadium </a>
              </h2>
            </div>
          </div>

          <div className="item">
            <div className="news-post standart-post">
              <div className="post-image">
                <a href="single-post">
                  <Image
                    src={require("../assets/upload/blog/s25.jpg")}
                    alt=""
                  />
                </a>
                <a href="#" className="category">
                  football
                </a>
              </div>
              <h2>
                <a href="single-post.html">El classico in Nou Camp</a>
              </h2>
            </div>
          </div>

          <div className="item">
            <div className="news-post standart-post">
              <div className="post-image">
                <a href="single-post">
                  <Image
                    src={require("../assets/upload/blog/s26.jpg")}
                    alt=""
                  />
                </a>
                <a href="#" className="category">
                  winter sports
                </a>
              </div>
              <h2>
                <a href="single-post.html">ski jumping final in finland</a>
              </h2>
            </div>
          </div>

          <div className="item">
            <div className="news-post standart-post">
              <div className="post-image">
                <a href="single-post">
                  <Image
                    src={require("../assets/upload/blog/s20.jpg")}
                    alt=""
                  />
                </a>
                <a href="#" className="category">
                  winter sports
                </a>
              </div>
              <h2>
                <a href="single-post.html">ski alpine semi-final today</a>
              </h2>
            </div>
          </div>

          <div className="item">
            <div className="news-post standart-post">
              <div className="post-image">
                <a href="single-post">
                  <Image
                    src={require("../assets/upload/blog/s19.jpg")}
                    alt=""
                  />
                </a>
                <a href="#" className="category">
                  Basketball
                </a>
              </div>
              <h2>
                <a href="single-post.html">
                  Streetball in USA is making good players
                </a>
              </h2>
            </div>
          </div>
        </OwlCarousel>
        {/* </div> */}
      </div>
    </div>
  )
}

export default FeaturedPosts
