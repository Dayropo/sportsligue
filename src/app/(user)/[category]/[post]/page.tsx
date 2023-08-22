import { getAllPosts, getPost } from "@/sanity/sanity-utils"
import AuthorProfile from "@/src/components/AuthorProfile"
import { PortableTextComponents } from "@/src/components/PortableTextComponents"
import RelatedPosts from "@/src/components/RelatedPosts"
import Footer from "@/src/components/ui/Footer"
import Header from "@/src/components/ui/Header"
import { PortableText } from "@portabletext/react"
import Image from "next/image"

type Props = {
  params: {
    post: string
  }
}

export default async function Post({ params }: Props) {
  const slug = params.post
  const post = await getPost(slug)
  const posts = await getAllPosts()

  return (
    <div>
      {/* Container */}
      <div id="container">
        {/* Header */}

        <Header />
        {/* End Header */}

        {/* content-section  */}
        <section id="content-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                {/* single-post */}
                <div className="single-post">
                  <h1>{post.title}</h1>
                  <ul className="post-tags">
                    <li>
                      <i className="lnr lnr-user"></i>by{" "}
                      <a href="#">{post.author}</a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="lnr lnr-book"></i>
                        <span>20 comments</span>
                      </a>
                    </li>
                    <li>
                      <i className="lnr lnr-eye"></i>872 Views
                    </li>
                  </ul>
                  <div className="share-post-box">
                    <ul className="share-box">
                      <li>
                        <a className="facebook" href="#">
                          <i className="fa fa-facebook"></i>
                          <span>Share on Facebook</span>
                        </a>
                      </li>
                      <li>
                        <a className="twitter" href="#">
                          <i className="fa fa-twitter"></i>
                          <span>Share on Twitter</span>
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
                        <a className="rss" href="#">
                          <i className="fa fa-rss"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <Image src={post.image} width={720} height={450} alt="" />
                  <PortableText
                    value={post.body}
                    components={PortableTextComponents}
                  />
                </div>
                {/* End single-post  */}

                {/* Advertisement */}
                <div className="advertisement">
                  <a href="#">
                    <Image
                      src={require("../../../../assets/upload/addsense/620x80grey.jpg")}
                      alt=""
                    />
                  </a>
                </div>
                {/* End Advertisement */}

                {/* Posts-block */}
                <RelatedPosts posts={posts} />
                {/* <!-- End Posts-block --> */}

                {/* <!-- author-profile --> */}
                <AuthorProfile slug={post.authorSlug} />
                {/* <!-- End author-profile --> */}

                {/* <!-- comment area box --> */}
                <div className="comment-area-box">
                  <div className="title-section">
                    <h1>
                      <span>5 Comments</span>
                    </h1>
                  </div>
                  <ul className="comment-tree">
                    <li>
                      <div className="comment-box">
                        <Image
                          width={100}
                          height={100}
                          alt=""
                          src={require("../../../../assets/upload/users/avatar3.jpg")}
                        />
                        <div className="comment-content">
                          <h4>
                            Fiona Herrerez{" "}
                            <a href="#">
                              <i className="fa fa-comment-o"></i>Reply
                            </a>
                          </h4>
                          <span>
                            <i className="fa fa-clock-o"></i>27 Jann 2018 at
                            8:57 pm
                          </span>
                          <p>
                            Suspendisse mauris. Fusce accumsan mollis eros.
                            Pellentesque a diam sit amet mi ullamcorper
                            vehicula. Integer adipiscing risus a sem. Nullam.{" "}
                          </p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="comment-box">
                        <Image
                          width={100}
                          height={100}
                          alt=""
                          src={require("../../../../assets/upload/users/avatar1.jpg")}
                        />
                        <div className="comment-content">
                          <h4>
                            John Doe{" "}
                            <a href="#">
                              <i className="fa fa-comment-o"></i>Reply
                            </a>
                          </h4>
                          <span>
                            <i className="fa fa-clock-o"></i>27 Jann 2018 at
                            8:57 pm
                          </span>
                          <p>
                            Fusce accumsan mollis eros. Pellentesque a diam sit
                            amet mi ullamcorper vehicula. Integer adipiscing
                            risus a sem. Nullam quis massa sit amet nibh viverra
                            malesuada. Nunc sem lacus, accumsan quis, faucibus
                            non, congue vel, arcu. Ut scelerisque hendrerit
                            tellus. Integer sagittis.{" "}
                          </p>
                        </div>
                      </div>
                      <ul className="depth">
                        <li>
                          <div className="comment-box">
                            <Image
                              width={100}
                              height={100}
                              alt=""
                              src={require("../../../../assets/upload/users/avatar2.jpg")}
                            />
                            <div className="comment-content">
                              <h4>
                                John Doe{" "}
                                <a href="#">
                                  <i className="fa fa-comment-o"></i>Reply
                                </a>
                              </h4>
                              <span>
                                <i className="fa fa-clock-o"></i>27 Jann 2018 at
                                8:57 pm
                              </span>
                              <p>
                                CNullam quis massa sit amet nibh viverra
                                malesuada. Nunc sem lacus, accumsan quis,
                                faucibus non.{" "}
                              </p>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </li>

                    <li>
                      <div className="comment-box">
                        <Image
                          width={100}
                          height={100}
                          alt=""
                          src={require("../../../../assets/upload/users/avatar4.jpg")}
                        />
                        <div className="comment-content">
                          <h4>
                            John Doe{" "}
                            <a href="#">
                              <i className="fa fa-comment-o"></i>Reply
                            </a>
                          </h4>
                          <span>
                            <i className="fa fa-clock-o"></i>27 Jann 2018 at
                            8:57 pm
                          </span>
                          <p>
                            Fusce accumsan mollis eros. Pellentesque a diam sit
                            amet mi ullamcorper vehicula. Integer adipiscing
                            risus a sem. Nullam quis massa sit amet nibh viverra
                            malesuada. Nunc sem lacus, accumsan quis, faucibus
                            non, congue vel, arcu. Ut scelerisque hendrerit
                            tellus. Integer sagittis.{" "}
                          </p>
                        </div>
                      </div>
                    </li>

                    <li>
                      <div className="comment-box">
                        <Image
                          width={100}
                          height={100}
                          alt=""
                          src={require("../../../../assets/upload/users/avatar5.jpg")}
                        />
                        <div className="comment-content">
                          <h4>
                            Maria Lilly{" "}
                            <a href="#">
                              <i className="fa fa-comment-o"></i>Reply
                            </a>
                          </h4>
                          <span>
                            <i className="fa fa-clock-o"></i>27 Jann 2018 at
                            8:57 pm
                          </span>
                          <p>
                            Nullam quis massa sit amet nibh viverra malesuada.
                            Nunc sem lacus, accumsan quis, faucibus non, congue
                            vel.{" "}
                          </p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                {/* <!-- End comment area box --> */}

                {/* <!-- contact form box --> */}
                <div className="contact-form-box">
                  <div className="title-section">
                    <h1>
                      <span>Leave a Comment</span>{" "}
                      <span className="email-not-published">
                        Your email address will not be published.
                      </span>
                    </h1>
                  </div>
                  <form id="comment-form">
                    <div className="row">
                      <div className="col-md-6">
                        <label htmlFor="name">Name*</label>
                        <input id="name" name="name" type="text" />
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="mail">E-mail*</label>
                        <input id="mail" name="mail" type="text" />
                      </div>
                    </div>
                    <label htmlFor="website">Website</label>
                    <input id="website" name="website" type="text" />
                    <label htmlFor="comment">Comment*</label>
                    <textarea id="comment" name="comment"></textarea>
                    <button type="submit" id="submit-contact">
                      <i className="fa fa-comment"></i> Post Comment
                    </button>
                  </form>
                </div>
                {/* <!-- End contact form box --> */}
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
                            src={require("../../../../assets/upload/blog/s23.jpg")}
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
                            src={require("../../../../assets/upload/blog/s24.jpg")}
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
                            src={require("../../../../assets/upload/blog/s25.jpg")}
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
                            src={require("../../../../assets/upload/blog/th5.jpg")}
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
                            src={require("../../../../assets/upload/blog/th7.jpg")}
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
                            src={require("../../../../assets/upload/blog/th9.jpg")}
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
                        src={require("../../../../assets/upload/addsense/300x250.jpg")}
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
        <Footer />
        {/* <!-- End footer --> */}
      </div>
      {/* <!-- End Container --> */}
    </div>
  )
}
