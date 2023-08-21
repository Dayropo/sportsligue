"use client"

import Image from "next/image"

const HeadingNews = () => {
  return (
    <div className="news-headline">
      <span className="title-notifier">Heading News</span>
      <div className="news-post image-post main-post">
        <Image src={require("../assets/upload/blog/h1.jpg")} alt="" />
        <div className="hover-box">
          <a href="#" className="category">
            Tennis
          </a>
          <h2>
            <a href="single-post.html">
              Australian Open, Novak Djokovidz vs Rafael Nadal first Semi-Final
            </a>
          </h2>
          <ul className="post-tags">
            <li>
              <i className="lnr lnr-user"></i>by <a href="#">John Doe</a>
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
      <div className="news-post image-post">
        <Image src={require("../assets/upload/blog/h2.jpg")} alt="" />
        <div className="hover-box">
          <a href="#" className="category">
            Football
          </a>
          <h2>
            <a href="single-post.html">France cup Final Lyon vs Monaco</a>
          </h2>
          <ul className="post-tags">
            <li>
              <i className="lnr lnr-user"></i>by <a href="#">Besim Dauti</a>
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
      <div className="news-post image-post">
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
      </div>
    </div>
  )
}

export default HeadingNews
