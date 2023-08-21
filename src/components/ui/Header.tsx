"use client"

import Image from "next/image"

const Header = () => {
  return (
    <header className="clearfix">
      <div className="top-line">
        <div className="container">
          <div className="row">
            <div className="col-sm-5">
              <a className="navbar-brand" href="index.html">
                <Image
                  src={require("../../assets/images/white_logo.png")}
                  style={{ width: "100px", height: "auto" }}
                  alt=""
                />
              </a>
            </div>
            <div className="col-sm-7">
              <form className="form-inline">
                <input
                  className="form-control mr-sm-2"
                  type="search"
                  placeholder="Search for..."
                  aria-label="Search"
                />
                <button className="btn btn-primary my-2 my-sm-0" type="submit">
                  <i className="fa fa-search"></i>
                </button>
              </form>
              <ul className="info-list right-align">
                <li>
                  <i className="fa fa-clock-o"></i>Monday 15.01.2018
                </li>
                <li>
                  <a href="#" data-toggle="modal" data-target="#loginModal">
                    <i className="fa fa-user"></i>Log in
                  </a>
                </li>
                <li>
                  <a href="register.html">Register</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="index.html">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="category1.html">
                  Football<i className="fa fa-caret-down"></i>
                </a>
                <div className="mega-posts-menu">
                  <div className="posts-line">
                    <ul className="filter-list">
                      <li>
                        <a href="#">All</a>
                      </li>
                      <li>
                        <a href="#">La liga</a>
                      </li>
                      <li>
                        <a href="#">Bundesliga</a>
                      </li>
                      <li>
                        <a href="#">Premier League</a>
                      </li>
                      <li>
                        <a href="#">Serie A</a>
                      </li>
                    </ul>
                    <div className="row">
                      <div className="col-lg-3 col-md-6">
                        <div className="news-post standart-post">
                          <div className="post-image">
                            <a href="single-post">
                              <Image
                                src={require("../../assets/upload/blog/s1.jpg")}
                                alt=""
                              />
                            </a>
                            <a href="#" className="category">
                              Football
                            </a>
                          </div>
                          <h2>
                            <a href="single-post.html">
                              New alternatives are more
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
                      </div>
                      <div className="col-lg-3 col-md-6">
                        <div className="news-post standart-post">
                          <div className="post-image">
                            <a href="single-post">
                              <Image
                                src={require("../../assets/upload/blog/s2.jpg")}
                                alt=""
                              />
                            </a>
                            <a href="#" className="category">
                              Football
                            </a>
                          </div>
                          <h2>
                            <a href="single-post.html">
                              New alternatives are more
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
                      </div>
                      <div className="col-lg-3 col-md-6">
                        <div className="news-post standart-post">
                          <div className="post-image">
                            <a href="single-post">
                              <Image
                                src={require("../../assets/upload/blog/s24.jpg")}
                                alt=""
                              />
                            </a>
                            <a href="#" className="category">
                              Football
                            </a>
                          </div>
                          <h2>
                            <a href="single-post.html">
                              New alternatives are more
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
                      </div>
                      <div className="col-lg-3 col-md-6">
                        <div className="news-post standart-post">
                          <div className="post-image">
                            <a href="single-post">
                              <Image
                                src={require("../../assets/upload/blog/s25.jpg")}
                                alt=""
                              />
                            </a>
                            <a href="#" className="category">
                              Football
                            </a>
                          </div>
                          <h2>
                            <a href="single-post.html">
                              New alternatives are more
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
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="category1.html">
                  Basketball<i className="fa fa-caret-down"></i>
                </a>
                <div className="mega-posts-menu">
                  <div className="posts-line">
                    <ul className="filter-list">
                      <li>
                        <a href="#">All</a>
                      </li>
                      <li>
                        <a href="#">NBA</a>
                      </li>
                      <li>
                        <a href="#">Europa League</a>
                      </li>
                      <li>
                        <a href="#">Street Ball</a>
                      </li>
                      <li>
                        <a href="#">Spain</a>
                      </li>
                    </ul>
                    <div className="row">
                      <div className="col-lg-3 col-md-6">
                        <div className="news-post standart-post">
                          <div className="post-image">
                            <a href="single-post">
                              <Image
                                src={require("../../assets/upload/blog/s4.jpg")}
                                alt=""
                              />
                            </a>
                            <a href="#" className="category">
                              Basketball
                            </a>
                          </div>
                          <h2>
                            <a href="single-post.html">
                              New alternatives are more
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
                      </div>
                      <div className="col-lg-3 col-md-6">
                        <div className="news-post standart-post">
                          <div className="post-image">
                            <a href="single-post">
                              <Image
                                src={require("../../assets/upload/blog/s14.jpg")}
                                alt=""
                              />
                            </a>
                            <a href="#" className="category">
                              Basketball
                            </a>
                          </div>
                          <h2>
                            <a href="single-post.html">
                              New alternatives are more
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
                      </div>
                      <div className="col-lg-3 col-md-6">
                        <div className="news-post standart-post">
                          <div className="post-image">
                            <a href="single-post">
                              <Image
                                src={require("../../assets/upload/blog/s16.jpg")}
                                alt=""
                              />
                            </a>
                            <a href="#" className="category">
                              Basketball
                            </a>
                          </div>
                          <h2>
                            <a href="single-post.html">
                              New alternatives are more
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
                      </div>
                      <div className="col-lg-3 col-md-6">
                        <div className="news-post standart-post">
                          <div className="post-image">
                            <a href="single-post">
                              <Image
                                src={require("../../assets/upload/blog/s19.jpg")}
                                alt=""
                              />
                            </a>
                            <a href="#" className="category">
                              Basketball
                            </a>
                          </div>
                          <h2>
                            <a href="single-post.html">
                              New alternatives are more
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
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="category1.html">
                  Winter Sports<i className="fa fa-caret-down"></i>
                </a>
                <div className="mega-posts-menu">
                  <div className="posts-line">
                    <ul className="filter-list">
                      <li>
                        <a href="#">All</a>
                      </li>
                      <li>
                        <a href="#">Ski Alpine</a>
                      </li>
                      <li>
                        <a href="#">Ski Jumping</a>
                      </li>
                      <li>
                        <a href="#">Biathlon</a>
                      </li>
                    </ul>
                    <div className="row">
                      <div className="col-lg-3 col-md-6">
                        <div className="news-post standart-post">
                          <div className="post-image">
                            <a href="single-post">
                              <Image
                                src={require("../../assets/upload/blog/s20.jpg")}
                                alt=""
                              />
                            </a>
                            <a href="#" className="category">
                              Winter Sports
                            </a>
                          </div>
                          <h2>
                            <a href="single-post.html">
                              New alternatives are more
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
                      </div>
                      <div className="col-lg-3 col-md-6">
                        <div className="news-post standart-post">
                          <div className="post-image">
                            <a href="single-post">
                              <Image
                                src={require("../../assets/upload/blog/s22.jpg")}
                                alt=""
                              />
                            </a>
                            <a href="#" className="category">
                              Winter Sports
                            </a>
                          </div>
                          <h2>
                            <a href="single-post.html">
                              New alternatives are more
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
                      </div>
                      <div className="col-lg-3 col-md-6">
                        <div className="news-post standart-post">
                          <div className="post-image">
                            <a href="single-post">
                              <Image
                                src={require("../../assets/upload/blog/s23.jpg")}
                                alt=""
                              />
                            </a>
                            <a href="#" className="category">
                              Winter Sports
                            </a>
                          </div>
                          <h2>
                            <a href="single-post.html">
                              New alternatives are more
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
                      </div>
                      <div className="col-lg-3 col-md-6">
                        <div className="news-post standart-post">
                          <div className="post-image">
                            <a href="single-post">
                              <Image
                                src={require("../../assets/upload/blog/s26.jpg")}
                                alt=""
                              />
                            </a>
                            <a href="#" className="category">
                              Winter Sports
                            </a>
                          </div>
                          <h2>
                            <a href="single-post.html">
                              New alternatives are more
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
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="category1.html">
                  Athletics
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="category1.html">
                  Teniss
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="category1.html">
                  Handball
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="category1.html">
                  Rugby
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="category1.html">
                  Teniss
                </a>
              </li>
              <li className="nav-item drop-link">
                <a className="nav-link food" href="#">
                  Pages<i className="fa fa-caret-down"></i>
                </a>
                <ul className="dropdown">
                  <li>
                    <a href="archive.html">Archive Page</a>
                  </li>
                  <li>
                    <a href="tag.html">Tags Page</a>
                  </li>
                  <li>
                    <a href="search.html">Search Page</a>
                  </li>
                  <li>
                    <a href="register.html">Register Page</a>
                  </li>
                  <li>
                    <a href="about.html">About Us</a>
                  </li>
                  <li>
                    <a href="contact.html">Contact Us</a>
                  </li>
                  <li>
                    <a href="404-error.html">404 Error</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
