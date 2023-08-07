import Image from "next/image"
import styles from "./page.module.css"

export default function Home() {
  return (
    <div >
      {/* <!-- Container --> */}
      <div id="container">
        {/* <!-- Header
		    ================================================== --> */}
        <header className="clearfix">
          <div className="top-line">
            <div className="container">
              <div className="row">
                <div className="col-sm-5">
                  <a className="navbar-brand" href="index.html">
                    <Image
                      src={require("../assets/images/white_logo.png")}
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
                    <button
                      className="btn btn-primary my-2 my-sm-0"
                      type="submit"
                    >
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

              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
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
                                    src={require("../assets/upload/blog/s1.jpg")}
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
                                    src={require("../assets/upload/blog/s2.jpg")}
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
                                    src={require("../assets/upload/blog/s24.jpg")}
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
                                    src={require("../assets/upload/blog/s25.jpg")}
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
                                    src={require("../assets/upload/blog/s4.jpg")}
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
                                    src={require("../assets/upload/blog/s14.jpg")}
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
                                    src={require("../assets/upload/blog/s16.jpg")}
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
                                    src={require("../assets/upload/blog/s20.jpg")}
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
                                    src={require("../assets/upload/blog/s22.jpg")}
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
                                    src={require("../assets/upload/blog/s23.jpg")}
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
                                    src={require("../assets/upload/blog/s26.jpg")}
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
        {/* <!-- End Header --> */}

        {/* <!-- content-section 
			================================================== --> */}
        <section id="content-section">
          <div className="container">
            {/* <!-- News-Headline --> */}
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
                      Australian Open, Novak Djokovidz vs Rafael Nadal first
                      Semi-Final
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
              <div className="news-post image-post">
                <Image src={require("../assets/upload/blog/h2.jpg")} alt="" />
                <div className="hover-box">
                  <a href="#" className="category">
                    Football
                  </a>
                  <h2>
                    <a href="single-post.html">
                      France cup Final Lyon vs Monaco
                    </a>
                  </h2>
                  <ul className="post-tags">
                    <li>
                      <i className="lnr lnr-user"></i>by{" "}
                      <a href="#">Besim Dauti</a>
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
                    <a href="single-post.html">
                      Ski Alpine championship in Norway
                    </a>
                  </h2>
                  <ul className="post-tags">
                    <li>
                      <i className="lnr lnr-user"></i>by{" "}
                      <a href="#">Helena Doe</a>
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
            {/* <!-- End News-Headline --> */}

            {/* <!-- Advertisement --> */}
            <div className="advertisement">
              <a href="#">
                <Image
                  src={require("../assets/upload/addsense/620x80grey.jpg")}
                  alt=""
                />
              </a>
            </div>
            {/* <!-- End Advertisement --> */}

            <div className="row">
              <div className="col-lg-8">
                {/* <!-- Posts-block --> */}
                <div className="posts-block standard-box">
                  <div className="title-section">
                    <h1>Latest News</h1>
                  </div>
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="news-post standart-post">
                        <div className="post-image">
                          <a href="single-post">
                            <Image
                              src={require("../assets/upload/blog/s2.jpg")}
                              alt=""
                            />
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
                          Eight candidates are seeking to oust Zeman, whose
                          inclination toward far-right groups and cosy relations
                          with Russia and China have split public opinion.
                        </p>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="news-post standart-post">
                        <div className="post-image">
                          <a href="single-post">
                            <Image
                              src={require("../assets/upload/blog/s8.jpg")}
                              alt=""
                            />
                          </a>
                          <a href="#" className="category">
                            Baseball
                          </a>
                        </div>
                        <h2>
                          <a href="single-post.html">
                            First Man walking in moon
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
                          Our research demonstrates that &dash; despite a high level
                          of activity &dash; many measures have limited impact unless
                          they are truly embedded in a comprehensive strategy.
                          Download the full study to learn more.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="news-post standart-post">
                        <div className="post-image">
                          <a href="single-post">
                            <Image
                              src={require("../assets/upload/blog/s13.jpg")}
                              alt=""
                            />
                          </a>
                          <a href="#" className="category">
                            Extreme Sports
                          </a>
                        </div>
                        <h2>
                          <a href="single-post.html">
                            Imigrants are unhappy with new law
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
                          The Czech president, Miloš Zeman, led the first round
                          of the Czech Republic&apos;s presidential election on
                          Saturday by a wide margin but short of winning
                          outright, partial results have showed.
                        </p>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="news-post standart-post">
                        <div className="post-image">
                          <a href="single-post">
                            <Image
                              src={require("../assets/upload/blog/s14.jpg")}
                              alt=""
                            />
                          </a>
                          <a href="#" className="category">
                            Basketball
                          </a>
                        </div>
                        <h2>
                          <a href="single-post.html">
                            New president of United States
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
                          With 30.6% of voting districts counted, Zeman led the
                          race with 42.9% of votes, while Jiří Drahoš, a
                          68-year-old pro-western academic, won 24.7%.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="news-post standart-post">
                        <div className="post-image">
                          <a href="single-post">
                            <Image
                              src={require("../assets/upload/blog/s18.jpg")}
                              alt=""
                            />
                          </a>
                          <a href="#" className="category">
                            Rugby
                          </a>
                        </div>
                        <h2>
                          <a href="single-post.html">
                            World economy in new crise
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
                          The vote is seen as a referendum on Zeman, 73, who has
                          been in office since 2013. He has criticised migration
                          from Muslim-majority countries as well as Germany&apos;s
                          decision to accept many migrants.
                        </p>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="news-post standart-post">
                        <div className="post-image">
                          <a href="single-post">
                            <Image
                              src={require("../assets/upload/blog/s26.jpg")}
                              alt=""
                            />
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
                          Zeman&apos;s lead does not mean an easy win in the second
                          round. Many voters may switch from their losing
                          candidates to support the runner-up against Zeman.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- End Posts-block --> */}

                {/* <!-- Posts-block --> */}
                <div className="posts-block">
                  <div className="title-section">
                    <h1>Featured</h1>
                  </div>

                  <div className="featured-box owl-wrapper">
                    <div className="owl-carousel" data-num="3">
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
                            <a href="single-post.html">
                              Berlin olimpic stadium{" "}
                            </a>
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
                            <a href="single-post.html">
                              El classico in Nou Camp
                            </a>
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
                            <a href="single-post.html">
                              ski jumping final in finland
                            </a>
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
                            <a href="single-post.html">
                              ski alpine semi-final today
                            </a>
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
                    </div>
                  </div>
                </div>
                {/* <!-- End Posts-block --> */}

                {/* <!-- Advertisement --> */}
                <div className="advertisement">
                  <a href="#">
                    <Image
                      src={require("../assets/upload/addsense/620x80grey.jpg")}
                      alt=""
                    />
                  </a>
                </div>
                {/* <!-- End Advertisement --> */}

                {/* <!-- Posts-block --> */}
                <div className="posts-block categories-box">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="title-section">
                        <h1>Football</h1>
                      </div>
                      <div className="news-post standart-post">
                        <div className="post-image">
                          <a href="single-post">
                            <Image
                              src={require("../assets/upload/blog/s2.jpg")}
                              alt=""
                            />
                          </a>
                          <a href="#" className="category">
                            Football
                          </a>
                        </div>
                        <h2>
                          <a href="single-post.html">
                            Premier League starts this week
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
                            <Image
                              src={require("../assets/upload/blog/th1.jpg")}
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
                              src={require("../assets/upload/blog/th2.jpg")}
                              alt=""
                            />
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
                            <Image
                              src={require("../assets/upload/blog/th3.jpg")}
                              alt=""
                            />
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
                      <div className="title-section">
                        <h1>Basketball</h1>
                      </div>
                      <div className="news-post standart-post">
                        <div className="post-image">
                          <a href="single-post">
                            <Image
                              src={require("../assets/upload/blog/s16.jpg")}
                              alt=""
                            />
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
                          Duis aute irure dolor in reprehenderit in voluptate
                          velit esse cillum dolore eu fugiat nulla pariatur.
                        </p>
                      </div>
                      <ul className="small-posts">
                        <li>
                          <a href="single-post.html">
                            <Image
                              src={require("../assets/upload/blog/th4.jpg")}
                              alt=""
                            />
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
                            <Image
                              src={require("../assets/upload/blog/th5.jpg")}
                              alt=""
                            />
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
                        <li>
                          <a href="single-post.html">
                            <Image
                              src={require("../assets/upload/blog/th6.jpg")}
                              alt=""
                            />
                          </a>
                          <div className="post-cont">
                            <h2>
                              <a href="single-post.html">
                                Philip Dunne, sacked after his NHS remarks, must
                                now face his constituents
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
                        <h1>Tennis</h1>
                      </div>
                      <div className="news-post standart-post">
                        <div className="post-image">
                          <a href="single-post">
                            <Image
                              src={require("../assets/upload/blog/s15.jpg")}
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
                          Duis aute irure dolor in reprehenderit in voluptate
                          velit esse cillum dolore eu fugiat nulla pariatur.
                        </p>
                      </div>
                      <ul className="small-posts">
                        <li>
                          <a href="single-post.html">
                            <Image
                              src={require("../assets/upload/blog/th7.jpg")}
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
                              src={require("../assets/upload/blog/th8.jpg")}
                              alt=""
                            />
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
                            <Image
                              src={require("../assets/upload/blog/th9.jpg")}
                              alt=""
                            />
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
                      <div className="title-section">
                        <h1>Winter Sports</h1>
                      </div>
                      <div className="news-post standart-post">
                        <div className="post-image">
                          <a href="single-post">
                            <Image
                              src={require("../assets/upload/blog/s23.jpg")}
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
                          Duis aute irure dolor in reprehenderit in voluptate
                          velit esse cillum dolore eu fugiat nulla pariatur.
                        </p>
                      </div>
                      <ul className="small-posts">
                        <li>
                          <a href="single-post.html">
                            <Image
                              src={require("../assets/upload/blog/th10.jpg")}
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
                              src={require("../assets/upload/blog/th2.jpg")}
                              alt=""
                            />
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
                            <Image
                              src={require("../assets/upload/blog/th4.jpg")}
                              alt=""
                            />
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
                              src={require("../assets/upload/blog/s12.jpg")}
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
                          Duis aute irure dolor in reprehenderit in voluptate
                          velit esse cillum dolore eu fugiat nulla pariatur.
                        </p>
                      </div>
                      <ul className="small-posts">
                        <li>
                          <a href="single-post.html">
                            <Image
                              src={require("../assets/upload/blog/th1.jpg")}
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
                              src={require("../assets/upload/blog/th2.jpg")}
                              alt=""
                            />
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
                            <Image
                              src={require("../assets/upload/blog/th3.jpg")}
                              alt=""
                            />
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
                      <div className="title-section">
                        <h1>Extreme sports</h1>
                      </div>
                      <div className="news-post standart-post">
                        <div className="post-image">
                          <a href="single-post">
                            <Image
                              src={require("../assets/upload/blog/s10.jpg")}
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
                          Duis aute irure dolor in reprehenderit in voluptate
                          velit esse cillum dolore eu fugiat nulla pariatur.
                        </p>
                      </div>
                      <ul className="small-posts">
                        <li>
                          <a href="single-post.html">
                            <Image
                              src={require("../assets/upload/blog/th5.jpg")}
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
                              src={require("../assets/upload/blog/th7.jpg")}
                              alt=""
                            />
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
                            <Image
                              src={require("../assets/upload/blog/th9.jpg")}
                              alt=""
                            />
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
                </div>
                {/* <!-- End Posts-block --> */}

                {/* <!-- Advertisement --> */}
                <div className="advertisement">
                  <a href="#">
                    <Image
                      src={require("../assets/upload/addsense/620x80grey.jpg")}
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
                                src={require("../assets/upload/blog/s3.jpg")}
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
                                src={require("../assets/upload/blog/s4.jpg")}
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
                              Philip Dunne, sacked after his NHS remarks, must
                              now face his constituents
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
                                src={require("../assets/upload/blog/s5.jpg")}
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
                                src={require("../assets/upload/blog/s6.jpg")}
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
                                src={require("../assets/upload/blog/s7.jpg")}
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
                            src={require("../assets/upload/blog/s23.jpg")}
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
                            src={require("../assets/upload/blog/s24.jpg")}
                          />
                          <div className="slider-caption">
                            <a href="#" className="category">
                              Football
                            </a>
                            <h2>
                              <a href="single-post.html">
                                World Cup in Germany
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
                            src={require("../assets/upload/blog/s25.jpg")}
                          />
                          <div className="slider-caption">
                            <a href="#" className="category">
                              Football
                            </a>
                            <h2>
                              <a href="single-post.html">
                                El classico in Nou Camp
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
                      </ul>
                    </div>

                    <ul className="small-posts">
                      <li>
                        <a href="single-post.html">
                          <Image
                            src={require("../assets/upload/blog/th5.jpg")}
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
                            src={require("../assets/upload/blog/th7.jpg")}
                            alt=""
                          />
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
                          <Image
                            src={require("../assets/upload/blog/th9.jpg")}
                            alt=""
                          />
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

                  <div className="advertisement">
                    <a href="#">
                      <Image
                        src={require("../assets/upload/addsense/300x250.jpg")}
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
        {/* <!-- End content section --> */}

        {/* <!-- footer 
			================================================== --> */}
        <footer>
          <div className="container">
            <div className="up-footer">
              <div className="row">
                <div className="col-lg-3 col-md-6">
                  <div className="footer-widget text-widget">
                    <h1>
                      <a href="index.html">
                        <Image
                          src={require("../assets/images/white_logo.png")}
                          style={{ width: "144px", height: "auto" }}
                          alt=""
                        />
                      </a>
                    </h1>
                    <p>
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      occaecat cupidatat non proident, sunt in culpa qui officia
                      deserunt mollit anim id est laborum.
                    </p>
                    <ul className="social-icons">
                      <li>
                        <a className="facebook" href="#">
                          <i className="fa fa-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a className="twitter" href="#">
                          <i className="fa fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a className="google" href="#">
                          <i className="fa fa-google-plus"></i>
                        </a>
                      </li>
                      <li>
                        <a className="linkedin" href="#">
                          <i className="fa fa-linkedin"></i>
                        </a>
                      </li>
                      <li>
                        <a className="instagram" href="#">
                          <i className="fa fa-instagram"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="col-lg-3 col-md-6">
                  <div className="footer-widget popular-widget">
                    <h1>Popular News</h1>
                    <ul className="small-posts">
                      <li>
                        <a href="single-post.html">
                          <Image
                            src={require("../assets/upload/blog/th3.jpg")}
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
                            src={require("../assets/upload/blog/th4.jpg")}
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
                            src={require("../assets/upload/blog/th5.jpg")}
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
                </div>

                <div className="col-lg-3 col-md-6">
                  <div className="footer-widget featured-widget">
                    <h1>Featured Post</h1>
                    <div className="news-post standart-post">
                      <div className="post-image">
                        <a href="single-post">
                          <Image
                            src={require("../assets/upload/blog/s15.jpg")}
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
                </div>

                <div className="col-lg-3 col-md-6">
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
                </div>
              </div>
            </div>

            <div className="down-footer">
              <ul className="list-footer">
                <li>
                  <a href="index.html">Home</a>
                </li>
                <li>
                  <a href="about.html">About Us</a>
                </li>
                <li>
                  <a href="privacy-policy.html">Privacy policy</a>
                </li>
                <li>
                  <a href="contact.html">Contact</a>
                </li>
              </ul>
              <p>
                &copy; Copyright By Nunforest 2017
                <a href="#" className="go-top">
                  <i className="fa fa-caret-up" aria-hidden="true"></i>
                </a>
              </p>
            </div>
          </div>
        </footer>
        {/* <!-- End footer --> */}
      </div>
      {/* <!-- End Container --> */}

      {/* <!-- Login Modal --> */}
      <div
        className="modal fade"
        id="loginModal"
        tabIndex={-1}
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-body">
              <div className="title-section">
                <h1>Login</h1>
              </div>
              <form id="login-form">
                <p>Welcome! Login to your account.</p>
                <label htmlFor="username">Username or Email Address*</label>
                <input id="username" name="username" type="text" />
                <label htmlFor="password">Password*</label>
                <input id="password" name="password" type="password" />
                <button type="submit" id="submit-register">
                  <i className="fa fa-paper-plane"></i> Login
                </button>
              </form>
              <p>
                Don't have account? <a href="register.html">Register Here</a>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End Login Modal --> */}
    </div>
  )
}
