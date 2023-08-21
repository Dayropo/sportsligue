"use client"

import Image from "next/image"

const BasketballLatest = () => {
  return (
    <div className="col-md-6">
      <div className="title-section">
        <h1>Basketball</h1>
      </div>
      <div className="news-post standart-post">
        <div className="post-image">
          <a href="single-post">
            <Image src={require("../assets/upload/blog/s16.jpg")} alt="" />
          </a>
          <a href="#" className="category">
            Basketball
          </a>
        </div>
        <h2>
          <a href="single-post.html">
            NBA MVP this season goes to Lebron James
          </a>
        </h2>
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur.
        </p>
      </div>
      <ul className="small-posts">
        <li>
          <a href="single-post.html">
            <Image src={require("../assets/upload/blog/th4.jpg")} alt="" />
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
            <Image src={require("../assets/upload/blog/th5.jpg")} alt="" />
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
        <li>
          <a href="single-post.html">
            <Image src={require("../assets/upload/blog/th6.jpg")} alt="" />
          </a>
          <div className="post-cont">
            <h2>
              <a href="single-post.html">
                Philip Dunne, sacked after his NHS remarks, must now face his
                constituents
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
  )
}

export default BasketballLatest
