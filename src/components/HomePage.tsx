"use client"

import Image from "next/image"
import Header from "@/components/ui/Header"
import LatestNews from "@/components/LatestNews"
import HeadingNews from "@/components/HeadingNews"
import FeaturedPosts from "@/components/FeaturedPosts"
import Footer from "@/src/components/ui/Footer"
import CategoryLatest from "@/src/components/CategoryLatest"
import Sidebar from "@/src/components/ui/Sidebar"
import WorldNews from "@/src/components/WorldNews"
import { Suspense, useEffect, useState } from "react"
import HeadlineSkeleton from "@/src/components/skeletons/HeadlineSkeleton"
import { client } from "@/sanity/sanity-client"
import { Post } from "@/src/@types/typings"
import { groq } from "next-sanity"
import AdSense728x90 from "@/src/components/adsense/Adsense728x90"
import { DefineAdSlot, RequestAds } from "@/src/components/adpublisher/GPT"
import { useQuery } from "@tanstack/react-query"
import Skeleton from "@mui/material/Skeleton"
import SliderWrapper from "./SliderWrapper"
import Link from "next/link"
import urlFor from "@/sanity/urlFor"
import AdSense300x250 from "./adsense/AdSense300x250"
import { usePathname, useRouter, useSearchParams } from "next/navigation"

let adSlots: googletag.Slot[] = []

export default function HomePage() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [isMobile, setIsMobile] = useState(false)

  const { data, isLoading, isError, error } = useQuery({
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

  isError && console.error(error)

  RequestAds()

  // useEffect(() => {
  //   const handleResize = () => {
  //     setIsMobile(window.innerWidth <= 768) // Adjust the breakpoint as needed
  //   }

  //   handleResize() // Check the initial screen size

  //   window.addEventListener("resize", handleResize) // Listen for window resize events

  //   return () => {
  //     window.removeEventListener("resize", handleResize) // Clean up the event listener
  //   }
  // }, [])

  // useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     // Ensure we can interact with the GPT command array.
  //     window.googletag = window.googletag || { cmd: [] }

  //     // Prepare GPT to display ads.
  //     googletag.cmd.push(() => {
  //       // Disable initial load, to precisely control when ads are requested.
  //       googletag.pubads().disableInitialLoad()

  //       // Enable SRA and services.
  //       googletag.pubads().enableSingleRequest()
  //       googletag.enableServices()
  //     })
  //   }

  //   googletag.cmd.push(() => {
  //     const slot1 = googletag.defineSlot(
  //       "/23072633878/728x90",
  //       [728, 90],
  //       "div-gpt-ad-1720451550067-0"
  //     )
  //     if (slot1) {
  //       slot1.addService(googletag.pubads())
  //       adSlots.push(slot1)
  //     }

  //     const slot2 = googletag.defineSlot(
  //       "/23072633878/300x250",
  //       [300, 250],
  //       "div-gpt-ad-1720450834557-0"
  //     )
  //     if (slot2) {
  //       slot2.addService(googletag.pubads())
  //       adSlots.push(slot2)
  //     }

  //     const slot3 = googletag.defineSlot(
  //       "/23072633878/300x600",
  //       [300, 600],
  //       "div-gpt-ad-1720451125756-0"
  //     )
  //     if (slot3) {
  //       slot3.addService(googletag.pubads())
  //       adSlots.push(slot3)
  //     }
  //   })

  //   googletag.cmd.push(() => {
  //     googletag.display("div-gpt-ad-1720451550067-0")
  //     googletag.display("div-gpt-ad-1720450834557-0")
  //     googletag.display("div-gpt-ad-1720451125756-0")
  //   })

  //   // adSlots.push(
  //   //   googletag
  //   //     .defineSlot("/23072633878/728x90", [728, 90], "div-gpt-ad-1720451550067-0")
  //   //     ?.addService(googletag.pubads())
  //   // )
  //   // adSlots.push(
  //   //   googletag
  //   //     .defineSlot("/23072633878/300x250", [300, 250], "div-gpt-ad-1720450834557-0")
  //   //     ?.addService(googletag.pubads())
  //   // )
  //   // adSlots.push(
  //   //   googletag
  //   //     .defineSlot("/23072633878/300x600", [300, 600], "div-gpt-ad-1720451125756-0")
  //   //     ?.addService(googletag.pubads())
  //   // )

  //   // googletag.pubads().enableSingleRequest()
  //   // googletag.enableServices()

  //   return () => {
  //     googletag.cmd.push(() => {
  //       adSlots.forEach(slot => googletag.destroySlots([slot]))
  //       adSlots = []
  //     })
  //   }
  // }, [pathname, searchParams])

  return (
    <div id="container">
      <Header />

      <section id="content-section">
        <div className="container">
          <HeadingNews />

          {/* <!-- Advertisement --> */}
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
                // slotId="div-gpt-ad-1720451500054-0"
              />
            ) : (
              <DefineAdSlot
                adUnit="/23072633878/728x90"
                size={[728, 90]}
                // slotId="div-gpt-ad-1720451550067-0"
              />
            )} */}

            <DefineAdSlot
              adUnit="/23072633878/728x90"
              size={[728, 90]}
              slotId="div-gpt-ad-1720451550067-0"
            />

            {/* <div
              id="div-gpt-ad-1720451550067-0"
              style={{ minWidth: "728px", minHeight: "90px" }}
            ></div> */}
          </div>
          {/* <!-- End Advertisement --> */}

          <div className="row">
            <div className="col-lg-8">
              {/* <!-- Posts-block --> */}
              <LatestNews />
              {/* <!-- End Posts-block --> */}
              {/* <!-- Advertisement --> */}
              <div className="advertisement">
                {/* <a
                href="https://kn6m4zjsiy3.typeform.com/to/JNmi3cD2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src="/images/adsense/728x90.gif" width={728} height={90} alt="728x90" />
              </a> */}

                <AdSense728x90 />
              </div>
              {/* <!-- End Advertisement --> */}
              {/* <!-- Posts-block --> */}
              <div className="posts-block categories-box">
                <div className="row">
                  <CategoryLatest category="Football" />
                  <CategoryLatest category="Tennis" />
                </div>
              </div>
              {/* <!-- End Posts-block --> */}
              {/* <!-- Posts-block --> */}
              <div className="posts-block categories-box">
                <div className="row">
                  <CategoryLatest category="Basketball" />
                  <CategoryLatest category="Boxing" />
                </div>
              </div>
              {/* <!-- End Posts-block --> */}
              {/* <!-- Posts-block --> */}
              <div className="posts-block categories-box">
                <div className="row">
                  <CategoryLatest category="Formula 1" />
                  <CategoryLatest category="American Football" />
                </div>
              </div>
              {/* <!-- End Posts-block --> */}
              {/* <!-- Advertisement --> */}
              <div className="advertisement">
                <a
                  href="https://kn6m4zjsiy3.typeform.com/to/JNmi3cD2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image src="/images/adsense/728x90.gif" width={728} height={90} alt="728x90" />
                </a>
              </div>
              {/* <!-- End Advertisement --> */}
              {/* <!-- Posts-block --> */}
              <WorldNews />
              {/* <!-- End Posts-block --> */}
            </div>

            {/* <Sidebar /> */}
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

                {isLoading && (
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

                {data && data.length > 0 && (
                  <div className="widget slider-widget">
                    <h1>Featured Posts</h1>

                    <SliderWrapper posts={data.slice(0, 3)} />

                    <ul className="small-posts">
                      {data.slice(3, 6).map((post: Post) => (
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

                {data && data.length > 0 && (
                  <div className="advertisement">
                    <AdSense300x250 />

                    {/* <Tag300x250 /> */}
                    <DefineAdSlot
                      adUnit="/23072633878/300x250"
                      size={[300, 250]}
                      slotId="div-gpt-ad-1720450834557-0"
                    />
                    {/* <div
                      id="div-gpt-ad-1720450834557-0"
                      style={{ minWidth: "300px", minHeight: "250px" }}
                    ></div> */}

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
                  {/* <div
                    id="div-gpt-ad-1720451125756-0"
                    style={{ minWidth: "300px", minHeight: "600px" }}
                  ></div> */}

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

                {isLoading && (
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

                {/* {data && data.length > 0 && tags && (
          <div className="widget tags-widget">
            <h1>Tags</h1>
            <ul className="tags-list">
              {tags.map((tag: string) => {
                const encodedTag = tag.split(" ").join("_")

                return (
                  <li key={tag}>
                    <Link href={`/tags/${encodedTag}`}>{tag}</Link>
                  </li>
                )
              })}
            </ul>
          </div>
        )} */}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
