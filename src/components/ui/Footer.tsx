import Image from "next/image"
import Link from "next/link"
import {
  FaCaretUp,
  FaFacebookF,
  FaGooglePlusG,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa"

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="up-footer">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="footer-widget text-widget">
                <h1>
                  <a href="index.html">
                    <Image
                      src={require("../../assets/images/white_logo.png")}
                      style={{ width: "144px", height: "auto" }}
                      alt=""
                    />
                  </a>
                </h1>
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
                <ul className="social-icons">
                  <li>
                    <a className="facebook" href="#">
                      <FaFacebookF size={14} />
                    </a>
                  </li>
                  <li>
                    <a className="twitter" href="#">
                      <FaTwitter size={14} />
                    </a>
                  </li>
                  <li>
                    <a className="google" href="#">
                      <FaGooglePlusG size={14} />
                    </a>
                  </li>
                  <li>
                    <a className="linkedin" href="#">
                      <FaLinkedinIn size={14} />
                    </a>
                  </li>
                  <li>
                    <a className="instagram" href="#">
                      <FaInstagram size={14} />
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* <div className="col-lg-3 col-md-6">
              <div className="footer-widget popular-widget">
                <h1>Popular News</h1>
                <ul className="small-posts">
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
                          New alternatives are more productive
                        </a>
                      </h2>
                      <ul className="post-tags">
                        <li>
                          by <a href="#">Author</a>
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
                          Vue js new javascript Framework
                        </a>
                      </h2>
                      <ul className="post-tags">
                        <li>
                          by <a href="#">Besim Dauti</a>
                        </li>
                      </ul>
                    </div>
                  </li>
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
                          Eating traditional food is more healthy
                        </a>
                      </h2>
                      <ul className="post-tags">
                        <li>
                          by <a href="#">Admin Mag</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </div> */}

            {/* <div className="col-lg-3 col-md-6">
              <div className="footer-widget featured-widget">
                <h1>Featured Post</h1>
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
                      Visiting antic countries is John Doe hobby.
                    </a>
                  </h2>
                </div>
              </div>
            </div> */}

            {/* <div className="col-lg-3 col-md-6">
              <div className="footer-widget tags-widget">
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
            </div> */}
          </div>
        </div>

        <div className="down-footer">
          <ul className="list-footer">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About Us</Link>
            </li>
            <li>
              <Link href="/privacy-policy">Privacy policy</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
          <p>
            &copy; Copyright By Sportsligue 2023
            <a href="#" className="go-top">
              <FaCaretUp size={16} />
              
              {/* <i className="fa fa-caret-up" aria-hidden="true"></i> */}
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
