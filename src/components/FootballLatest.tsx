"use client"

import Image from "next/image"

const FootballLatest = () => {
  

  return (
    <div className="col-md-6">
      <div className="title-section">
        <h1>Football</h1>
      </div>
      <div className="news-post standart-post">
        <div className="post-image">
          <a href="single-post">
            <Image src={require("../assets/upload/blog/s2.jpg")} alt="" />
          </a>
          <a href="#" className="category">
            Football
          </a>
        </div>
        <h2>
          <a href="single-post.html">Premier League starts this week</a>
        </h2>
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur.
        </p>
      </div>
      <ul className="small-posts">
        <li>
          <a href="single-post.html">
            <Image src={require("../assets/upload/blog/th1.jpg")} alt="" />
          </a>
          <div className="post-cont">
            <h2>
              <a href="single-post.html">
                Commentary: Spotify&apos;s Unusual IPO Came at the Perfect Time
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
            <Image src={require("../assets/upload/blog/th2.jpg")} alt="" />
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
            <Image src={require("../assets/upload/blog/th3.jpg")} alt="" />
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
  )
}

export default FootballLatest
