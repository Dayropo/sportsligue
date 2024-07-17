"use client"

import { client } from "@/sanity/sanity-client"
import { Post } from "@/src/@types/typings"
import { useQuery } from "@tanstack/react-query"
import { groq } from "next-sanity"
import { FiUser } from "react-icons/fi"
import Sidebar from "@/src/components/ui/Sidebar"
import SocialShareBox from "../ui/SocialShareBox"
import Image from "next/image"
import { PortableText } from "@portabletext/react"
import { PortableTextComponents } from "@/src/components/PortableTextComponents"
import urlFor from "@/sanity/urlFor"
import AdSense728x90 from "@/src/components/adsense/Adsense728x90"
import Skeleton from "@mui/material/Skeleton"
import { DefineAdSlot, RequestAds } from "../adpublisher/GPT"
import { useEffect, useState } from "react"
import SliderWrapper from "../SliderWrapper"
import Link from "next/link"
import AdSense300x250 from "../adsense/AdSense300x250"

export default function PostBody({ slug }: { slug: string }) {
  const [isMobile, setIsMobile] = useState(false)

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["post"],
    queryFn: async () => {
      const response = await client.fetch<Post>(
        groq`*[_type == "post" && slug.current == $slug][0]{
            _id,
            _createdAt,
            title,
            slug,
            description,
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
        }
      )

      return response
    },
  })

  isError && console.error(error)

  const {
    data: featured,
    isLoading: isFeaturedLoading,
    isError: isFeaturedError,
    error: featuredError,
  } = useQuery({
    queryKey: ["featured"],
    queryFn: async () => {
      const response = await client.fetch<Post[]>(
        groq`*[_type == "post" && featured == true]{
          _id,
          _createdAt,
          title,
          slug,
          description,
          mainImage,
          author->,
          category->,
          subCategory->,
          featured,
          publishedAt,
          body,
          tags,
        } | order(publishedAt desc)[0...6]`,
        {
          cache: "no-store",
        }
      )

      return response
    },
  })

  isFeaturedError && console.error(featuredError)

  RequestAds()

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768) // Adjust the breakpoint as needed
    }

    handleResize() // Check the initial screen size

    window.addEventListener("resize", handleResize) // Listen for window resize events

    return () => {
      window.removeEventListener("resize", handleResize) // Clean up the event listener
    }
  }, [])

  return (
    <section id="content-section">
      <div className="container">
        {isLoading && (
          <div className="row">
            <div className="col-lg-8">
              <div className="single-post">
                <Skeleton
                  animation="wave"
                  variant="text"
                  sx={{ fontSize: "36px", marginLeft: "12px" }}
                />

                <ul className="post-tags">
                  <Skeleton
                    animation="wave"
                    variant="text"
                    sx={{ fontSize: "16px", width: "100px" }}
                  />
                </ul>

                <div
                  className="share-post-box"
                  style={{ display: "flex", alignItems: "center", gap: "8px" }}
                >
                  <Skeleton animation="wave" variant="circular" width={32} height={32} />
                  <Skeleton animation="wave" variant="circular" width={32} height={32} />
                </div>

                <figure className="main-image">
                  <Skeleton
                    animation="wave"
                    variant="rectangular"
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                    }}
                  />
                </figure>

                <Skeleton animation="wave" variant="text" sx={{ fontSize: "20px" }} />
                <Skeleton animation="wave" variant="text" sx={{ fontSize: "20px" }} />
                <Skeleton animation="wave" variant="text" sx={{ fontSize: "20px" }} />
                <Skeleton animation="wave" variant="text" sx={{ fontSize: "20px" }} />
                <Skeleton animation="wave" variant="text" sx={{ fontSize: "20px" }} />
                <Skeleton animation="wave" variant="text" sx={{ fontSize: "20px" }} />
              </div>
            </div>

            <div className="col-lg-4 sidebar-sticky">
              <div className="sidebar theiaStickySidebar">
                <div className="widget slider-widget">
                  <Skeleton
                    animation="wave"
                    variant="text"
                    sx={{
                      fontSize: "18px",
                      width: "100px",
                      marginBottom: "12px",
                      paddingBottom: "15px",
                    }}
                  />

                  <div className="lightbox-slide">
                    <Skeleton
                      animation="wave"
                      variant="rectangular"
                      sx={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
                    />
                  </div>

                  <ul className="small-posts">
                    {[...Array(3)].map((x, i) => (
                      <li key={i}>
                        <Skeleton
                          animation="wave"
                          variant="rectangular"
                          width={80}
                          height={80}
                          sx={{ marginRight: "20px", float: "left" }}
                        />

                        <div className="post-cont">
                          <Skeleton animation="wave" variant="text" sx={{ fontSize: "14px" }} />

                          <ul className="post-tags">
                            <Skeleton
                              animation="wave"
                              variant="text"
                              sx={{ fontSize: "12px", width: "100px" }}
                            />
                          </ul>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="widget tags-widget">
                  <Skeleton
                    animation="wave"
                    variant="text"
                    sx={{ fontSize: "18px", width: "60px" }}
                  />

                  <ul
                    className="tags-list"
                    style={{ display: "flex", alignItems: "center", gap: "4px" }}
                  >
                    <Skeleton
                      animation="wave"
                      variant="text"
                      sx={{ fontSize: "24px", width: "100px" }}
                    />
                    <Skeleton
                      animation="wave"
                      variant="text"
                      sx={{ fontSize: "24px", width: "100px" }}
                    />
                    <Skeleton
                      animation="wave"
                      variant="text"
                      sx={{ fontSize: "24px", width: "100px" }}
                    />
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {data && (
          <div className="row">
            <div className="col-lg-8">
              {/* single-post */}
              <div className="single-post">
                <h1>{data.title}</h1>
                {/* {post && post.description && <h5>{post.description}</h5>} */}
                <ul className="post-tags">
                  <li>
                    <FiUser size={14} style={{ marginRight: "8px" }} />
                    by <a href="#">{data.author.name}</a>
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
                  <SocialShareBox post={data} />
                </div>

                <figure className="main-image">
                  <Image
                    src={urlFor(data.mainImage).url()}
                    fill
                    sizes="100vw"
                    style={{ objectFit: "cover", objectPosition: "center" }}
                    alt={data.title}
                    priority
                  />
                </figure>
                <h6 className="figcaption">{data.mainImage.caption}</h6>

                <PortableText value={data.body} components={PortableTextComponents} />
              </div>
              {/* End single-post  */}

              {/* Advertisement */}
              <div className="advertisement">
                {/* <a
                    href="https://kn6m4zjsiy3.typeform.com/to/JNmi3cD2"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image src="/images/adsense/728x90.gif" width={728} height={90} alt="728x90" />
                </a> */}

                {/* <AdSense728x90 /> */}
                {/* {isMobile ? (
                  <DefineAdSlot
                    adUnit="/23072633878/320x100"
                    size={[
                      [320, 50],
                      [320, 100],
                    ]}
                    slotId="div-gpt-ad-1720451500054-0"
                  />
                ) : (
                  <DefineAdSlot
                    adUnit="/23072633878/728x90"
                    size={[728, 90]}
                    slotId="div-gpt-ad-1720451550067-0"
                  />
                )} */}

                <DefineAdSlot
                  adUnit="/23072633878/728x90"
                  size={[728, 90]}
                  slotId="div-gpt-ad-1720451550067-0"
                />
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

            {/* <Sidebar tags={data.tags} /> */}
            <div className="col-lg-4 sidebar-sticky">
              {/* <!-- Sidebar --> */}
              <div className="sidebar theiaStickySidebar">
                {/* <div className="widget social-widget">
          <h1>Stay Connected </h1>
          <p>Do you want to be informed everytime with our latest news?</p>
          <ul className="social-share">
            <li>
              <a href="#" className="rss">
                <FaRss size={16} className="share-icons" />
                <span>345</span>
              </a>
            </li>
            <li>
              <a href="#" className="facebook">
                <FaFacebookF size={16} className="share-icons" />
                <span>3,460</span>
              </a>
            </li>
            <li>
              <a href="#" className="twitter">
                <FaTwitter size={16} className="share-icons" />
                <span>5,600</span>
              </a>
            </li>
            <li>
              <a href="#" className="google">
                <FaGooglePlusG size={16} className="share-icons" />
                <span>659</span>
              </a>
            </li>
          </ul>
        </div> */}

                {isFeaturedLoading && (
                  <div className="widget slider-widget">
                    <Skeleton
                      animation="wave"
                      variant="text"
                      sx={{
                        fontSize: "18px",
                        width: "100px",
                        marginBottom: "12px",
                        paddingBottom: "15px",
                      }}
                    />

                    <div className="lightbox-slide">
                      <Skeleton
                        animation="wave"
                        variant="rectangular"
                        sx={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          width: "100%",
                          height: "100%",
                        }}
                      />
                    </div>

                    <ul className="small-posts">
                      {[...Array(3)].map((x, i) => (
                        <li key={i}>
                          <Skeleton
                            animation="wave"
                            variant="rectangular"
                            width={80}
                            height={80}
                            sx={{ marginRight: "20px", float: "left" }}
                          />

                          <div className="post-cont">
                            <Skeleton animation="wave" variant="text" sx={{ fontSize: "14px" }} />

                            <ul className="post-tags">
                              <Skeleton
                                animation="wave"
                                variant="text"
                                sx={{ fontSize: "12px", width: "100px" }}
                              />
                            </ul>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {featured && featured.length > 0 && (
                  <div className="widget slider-widget">
                    <h1>Featured Posts</h1>

                    <SliderWrapper posts={featured.slice(0, 3)} />

                    <ul className="small-posts">
                      {featured.slice(3, 6).map((post: Post) => (
                        <li key={post._id}>
                          <Link href={`/${post.slug.current}`}>
                            <Image
                              src={urlFor(post.mainImage).url()}
                              fill
                              sizes="100vw"
                              alt={post.title}
                              style={{ objectFit: "cover" }}
                            />
                          </Link>
                          <div className="post-cont">
                            <h2>
                              <Link href={`/${post.slug.current}`}>{post.title}</Link>
                            </h2>
                            <ul className="post-tags">
                              <li>
                                by <a href="#">{post.author.name}</a>
                              </li>
                            </ul>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {featured && featured.length > 0 && (
                  <div className="advertisement">
                    <AdSense300x250 />

                    {/* <Tag300x250 /> */}
                    <DefineAdSlot
                      adUnit="/23072633878/300x250"
                      size={[300, 250]}
                      slotId="div-gpt-ad-1720450834557-0"
                    />

                    <a
                      href="https://kn6m4zjsiy3.typeform.com/to/JNmi3cD2"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src="/images/adsense/300x250latest.gif"
                        width={300}
                        height={250}
                        alt="300x250"
                      />
                    </a>
                  </div>
                )}

                <div className="advertisement">
                  {/* <Tag300x600 /> */}
                  <DefineAdSlot
                    adUnit="/23072633878/300x600"
                    size={[300, 600]}
                    slotId="div-gpt-ad-1720451125756-0"
                  />

                  {/* <a
            href="https://refpa4948989.top/L?tag=d_2732079m_1573c_&site=2732079&ad=1573"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/images/adsense/Media9865__af300_600.gif"
              width={300}
              height={600}
              alt="300x600"
            />
          </a> */}
                </div>

                {isFeaturedLoading && (
                  <div className="widget tags-widget">
                    <Skeleton
                      animation="wave"
                      variant="text"
                      sx={{ fontSize: "18px", width: "60px" }}
                    />

                    <ul
                      className="tags-list"
                      style={{ display: "flex", alignItems: "center", gap: "4px" }}
                    >
                      <Skeleton
                        animation="wave"
                        variant="text"
                        sx={{ fontSize: "24px", width: "100px" }}
                      />
                      <Skeleton
                        animation="wave"
                        variant="text"
                        sx={{ fontSize: "24px", width: "100px" }}
                      />
                      <Skeleton
                        animation="wave"
                        variant="text"
                        sx={{ fontSize: "24px", width: "100px" }}
                      />
                    </ul>
                  </div>
                )}

                {featured && featured.length > 0 && data.tags && (
                  <div className="widget tags-widget">
                    <h1>Tags</h1>
                    <ul className="tags-list">
                      {data.tags.map((tag: string) => {
                        const encodedTag = tag.split(" ").join("_")

                        return (
                          <li key={tag}>
                            <Link href={`/tags/${encodedTag}`}>{tag}</Link>
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
