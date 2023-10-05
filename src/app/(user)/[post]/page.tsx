import { getPost } from "@/sanity/sanity-utils"
import urlFor from "@/sanity/urlFor"
import AuthorProfile from "@/src/components/AuthorProfile"
import { PortableTextComponents } from "@/src/components/PortableTextComponents"
import RelatedPosts from "@/src/components/RelatedPosts"
import Footer from "@/src/components/ui/Footer"
import Header from "@/src/components/ui/Header"
import Sidebar from "@/src/components/ui/Sidebar"
import { PortableText } from "@portabletext/react"
import { Metadata } from "next"
import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import {
  FaFacebookF,
  FaGooglePlusG,
  FaLinkedinIn,
  FaRss,
  FaTwitter,
} from "react-icons/fa"
import { FiBook, FiUser, FiEye } from "react-icons/fi"

// export const dynamic = "force-dynamic"
export const revalidate = 0

type Props = {
  params: {
    post: string
  }
}

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const slug = params.post
  const post = await getPost(slug)
  return {
    title: post.title,
    alternates: {
      canonical: `/${post.slug.current}`,
    },
  }
}

export default async function Post({ params }: Props) {
  const slug = params.post
  const post = await getPost(slug)

  return (
    <div id="container">
      <Head>
        <title>{post.title}</title>
      </Head>
      <Header />

      <section id="content-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              {/* single-post */}
              <div className="single-post">
                <h1>{post.title}</h1>
                <ul className="post-tags">
                  <li>
                    <FiUser size={14} style={{ marginRight: "8px" }} />
                    by <a href="#">{post.author.name}</a>
                  </li>
                  {/* <li>
                    <a href="#">
                      <FiBook size={14} style={{ marginRight: "8px" }} />
                      <span>20 comments</span>
                    </a>
                  </li>
                  <li>
                    <FiEye size={14} style={{ marginRight: "8px" }} />
                    872 Views
                  </li> */}
                </ul>
                {/* <div className="share-post-box">
                  <ul className="share-box">
                    <li>
                      <a className="facebook" href="#">
                        <FaFacebookF size={18} />
                        <span>Share on Facebook</span>
                      </a>
                    </li>
                    <li>
                      <a className="twitter" href="#">
                        <FaTwitter size={18} />
                        <span>Share on Twitter</span>
                      </a>
                    </li>
                    <li>
                      <a className="linkedin" href="#">
                        <FaLinkedinIn size={18} />
                      </a>
                    </li>
                    <li>
                      <a className="rss" href="#">
                        <FaRss size={18} />
                      </a>
                    </li>
                  </ul>
                </div> */}

                <figure className="main-image">
                  <Image
                    src={urlFor(post.mainImage).url()}
                    fill
                    sizes="100vw"
                    style={{ objectFit: "cover", objectPosition: "center" }}
                    alt=""
                  />
                </figure>
                <h6 className="figcaption">{post.mainImage.caption}</h6>

                <PortableText
                  value={post.body}
                  components={PortableTextComponents}
                />
              </div>
              {/* End single-post  */}

              {/* Advertisement */}
              <div className="advertisement">
                <a href="#">
                  <Image src="/images/adsense/728x90.gif" alt="728x90" />
                </a>
              </div>
              {/* End Advertisement */}

              {/* Posts-block */}
              <RelatedPosts
                category={post.category.title}
                slug={post.slug.current}
              />
              {/* <!-- End Posts-block --> */}

              {/* <!-- author-profile --> */}
              {/* <AuthorProfile author={post.author} /> */}
              {/* <!-- End author-profile --> */}

              {/* <!-- comment area box --> */}
              {/* <div className="comment-area-box">
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
                        src={require("../../../assets/upload/users/avatar3.jpg")}
                      />
                      <div className="comment-content">
                        <h4>
                          Fiona Herrerez{" "}
                          <a href="#">
                            <i className="fa fa-comment-o"></i>Reply
                          </a>
                        </h4>
                        <span>
                          <i className="fa fa-clock-o"></i>27 Jann 2018 at 8:57
                          pm
                        </span>
                        <p>
                          Suspendisse mauris. Fusce accumsan mollis eros.
                          Pellentesque a diam sit amet mi ullamcorper vehicula.
                          Integer adipiscing risus a sem. Nullam.{" "}
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
                        src={require("../../../assets/upload/users/avatar1.jpg")}
                      />
                      <div className="comment-content">
                        <h4>
                          John Doe{" "}
                          <a href="#">
                            <i className="fa fa-comment-o"></i>Reply
                          </a>
                        </h4>
                        <span>
                          <i className="fa fa-clock-o"></i>27 Jann 2018 at 8:57
                          pm
                        </span>
                        <p>
                          Fusce accumsan mollis eros. Pellentesque a diam sit
                          amet mi ullamcorper vehicula. Integer adipiscing risus
                          a sem. Nullam quis massa sit amet nibh viverra
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
                            src={require("../../../assets/upload/users/avatar2.jpg")}
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
                              malesuada. Nunc sem lacus, accumsan quis, faucibus
                              non.{" "}
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
                        src={require("../../../assets/upload/users/avatar4.jpg")}
                      />
                      <div className="comment-content">
                        <h4>
                          John Doe{" "}
                          <a href="#">
                            <i className="fa fa-comment-o"></i>Reply
                          </a>
                        </h4>
                        <span>
                          <i className="fa fa-clock-o"></i>27 Jann 2018 at 8:57
                          pm
                        </span>
                        <p>
                          Fusce accumsan mollis eros. Pellentesque a diam sit
                          amet mi ullamcorper vehicula. Integer adipiscing risus
                          a sem. Nullam quis massa sit amet nibh viverra
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
                        src={require("../../../assets/upload/users/avatar5.jpg")}
                      />
                      <div className="comment-content">
                        <h4>
                          Maria Lilly{" "}
                          <a href="#">
                            <i className="fa fa-comment-o"></i>Reply
                          </a>
                        </h4>
                        <span>
                          <i className="fa fa-clock-o"></i>27 Jann 2018 at 8:57
                          pm
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
              </div> */}
              {/* <!-- End comment area box --> */}

              {/* <!-- contact form box --> */}
              {/* <div className="contact-form-box">
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
              </div> */}
              {/* <!-- End contact form box --> */}
            </div>

            <Sidebar tags={post.tags} />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
