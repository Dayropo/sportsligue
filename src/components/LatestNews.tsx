"use client"

import Image from "next/image"

const LatestNews = () => {
  return (
    <div className="posts-block standard-box">
      <div className="title-section">
        <h1>Latest News</h1>
      </div>
      <div className="row">
        <div className="col-sm-6">
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
              <a href="single-post.html">
                New alternatives are more productive
              </a>
            </h2>
            <ul className="post-tags">
              <li>
                by <a href="#">John Doe</a>
              </li>
              <li>
                <a href="#">
                  <span>23 comments</span>
                </a>
              </li>
            </ul>
            <p>
              Eight candidates are seeking to oust Zeman, whose inclination
              toward far-right groups and cosy relations with Russia and China
              have split public opinion.
            </p>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="news-post standart-post">
            <div className="post-image">
              <a href="single-post">
                <Image src={require("../assets/upload/blog/s8.jpg")} alt="" />
              </a>
              <a href="#" className="category">
                Baseball
              </a>
            </div>
            <h2>
              <a href="single-post.html">First Man walking in moon</a>
            </h2>
            <ul className="post-tags">
              <li>
                by <a href="#">John Doe</a>
              </li>
              <li>
                <a href="#">
                  <span>23 comments</span>
                </a>
              </li>
            </ul>
            <p>
              Our research demonstrates that &dash; despite a high level of
              activity &dash; many measures have limited impact unless they are
              truly embedded in a comprehensive strategy. Download the full
              study to learn more.
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6">
          <div className="news-post standart-post">
            <div className="post-image">
              <a href="single-post">
                <Image src={require("../assets/upload/blog/s13.jpg")} alt="" />
              </a>
              <a href="#" className="category">
                Extreme Sports
              </a>
            </div>
            <h2>
              <a href="single-post.html">Imigrants are unhappy with new law</a>
            </h2>
            <ul className="post-tags">
              <li>
                by <a href="#">John Doe</a>
              </li>
              <li>
                <a href="#">
                  <span>23 comments</span>
                </a>
              </li>
            </ul>
            <p>
              The Czech president, Miloš Zeman, led the first round of the Czech
              Republic&apos;s presidential election on Saturday by a wide margin
              but short of winning outright, partial results have showed.
            </p>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="news-post standart-post">
            <div className="post-image">
              <a href="single-post">
                <Image src={require("../assets/upload/blog/s14.jpg")} alt="" />
              </a>
              <a href="#" className="category">
                Basketball
              </a>
            </div>
            <h2>
              <a href="single-post.html">New president of United States</a>
            </h2>
            <ul className="post-tags">
              <li>
                by <a href="#">John Doe</a>
              </li>
              <li>
                <a href="#">
                  <span>23 comments</span>
                </a>
              </li>
            </ul>
            <p>
              With 30.6% of voting districts counted, Zeman led the race with
              42.9% of votes, while Jiří Drahoš, a 68-year-old pro-western
              academic, won 24.7%.
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6">
          <div className="news-post standart-post">
            <div className="post-image">
              <a href="single-post">
                <Image src={require("../assets/upload/blog/s18.jpg")} alt="" />
              </a>
              <a href="#" className="category">
                Rugby
              </a>
            </div>
            <h2>
              <a href="single-post.html">World economy in new crise</a>
            </h2>
            <ul className="post-tags">
              <li>
                by <a href="#">John Doe</a>
              </li>
              <li>
                <a href="#">
                  <span>23 comments</span>
                </a>
              </li>
            </ul>
            <p>
              The vote is seen as a referendum on Zeman, 73, who has been in
              office since 2013. He has criticised migration from
              Muslim-majority countries as well as Germany&apos;s decision to
              accept many migrants.
            </p>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="news-post standart-post">
            <div className="post-image">
              <a href="single-post">
                <Image src={require("../assets/upload/blog/s26.jpg")} alt="" />
              </a>
              <a href="#" className="category">
                Skiing
              </a>
            </div>
            <h2>
              <a href="single-post.html">
                Human rights organization is helping ...
              </a>
            </h2>
            <ul className="post-tags">
              <li>
                by <a href="#">John Doe</a>
              </li>
              <li>
                <a href="#">
                  <span>23 comments</span>
                </a>
              </li>
            </ul>
            <p>
              Zeman&apos;s lead does not mean an easy win in the second round.
              Many voters may switch from their losing candidates to support the
              runner-up against Zeman.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LatestNews
