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
import { FaFacebookF, FaGooglePlusG, FaLinkedinIn, FaRss, FaTwitter } from "react-icons/fa"
import { FiBook, FiUser, FiEye } from "react-icons/fi"
import { Post } from "@/src/@types/typings"
import { notFound } from "next/navigation"
import SocialShareBox from "@/src/components/ui/SocialShareBox"
import { headers } from "next/headers"
import { client } from "@/sanity/sanity-client"
import { groq } from "next-sanity"

export const dynamic = "force-dynamic"
// export const revalidate = 0

type Props = {
  params: {
    post: string
  }
}

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
  const slug = params.post

  try {
    const post = await client.fetch<Post>(
      groq`*[_type == "post" && slug.current == $slug][0]{
  _id,
  _createdAt,
  title,
  slug,
  mainImage,
  author->,
  category->,
  subCategory->,
  featured,
  publishedAt,
  body,
  tags,
}`,
      {
        slug,
        cache: "no-store",
        next: {
          revalidate: 0,
        },
      }
    )

    if (!post)
      return {
        title: "Not Found",
        description: "The page you are looking for does not exist.",
      }

    return {
      title: post.title,
      alternates: {
        canonical: `/${post.slug.current}`,
      },
      keywords: post.tags,
      openGraph: {
        title: post.title,
        url: `/${post.slug.current}`,
        siteName: "SportsLigue",
        type: "article",
        images: {
          url: urlFor(post.mainImage).url(),
          width: 1200,
          height: 720,
          alt: post.mainImage.caption,
        },
      },
      twitter: {
        card: "summary_large_image",
        title: post.title,
        site: "@SportsLigue",
        siteId: "1703204312636178432",
        // creator: "@SportsLigue",
        // creatorId: "1703204312636178432",
        images: {
          url: urlFor(post.mainImage).url(),
          alt: post.mainImage.caption,
        },
      },
      robots: {
        index: true,
        follow: true,
        nocache: true,
        nositelinkssearchbox: true,
      },
    }
  } catch (error) {
    console.error(error)
    return {
      title: "Not Found",
      description: "The page you are looking for does not exist.",
    }
  }
}

export default async function Page({ params }: Props) {
  const slug = params.post

  const { post, featuredPosts } = await client.fetch(
    `{
    "post": *[_type == "post" && slug.current == $slug][0]{
  _id,
  _createdAt,
  title,
  slug,
  mainImage,
  author->,
  category->,
  subCategory->,
  featured,
  publishedAt,
  body,
  tags,
},
"featuredPosts": *[_type == "post" && featured == true]{
  _id,
  _createdAt,
  title,
  slug,
  mainImage,
  author->,
  category->,
  subCategory->,
  featured,
  publishedAt,
  body,
  tags,
} | order(publishedAt desc),
}`,
    {
      slug,
      cache: "no-store",
      next: {
        revalidate: 0,
      },
    }
  )

  if (!post) {
    notFound()
  }

  return (
    <div id="container">
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
                <div className="share-post-box">
                  <SocialShareBox post={post} />
                </div>

                <figure className="main-image">
                  <Image
                    src={urlFor(post.mainImage).url()}
                    fill
                    sizes="100vw"
                    style={{ objectFit: "cover", objectPosition: "center" }}
                    alt={post.title}
                    priority
                  />
                </figure>
                <h6 className="figcaption">{post.mainImage.caption}</h6>

                <PortableText value={post.body} components={PortableTextComponents} />
              </div>
              {/* End single-post  */}

              {/* Advertisement */}
              <div className="advertisement">
                <a
                  href="https://kn6m4zjsiy3.typeform.com/to/JNmi3cD2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image src="/images/adsense/728x90.gif" width={728} height={90} alt="728x90" />
                </a>
              </div>
              {/* End Advertisement */}

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

            <Sidebar posts={featuredPosts} tags={post.tags} />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
