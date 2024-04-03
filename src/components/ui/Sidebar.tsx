"use client"

import Image from "next/image"
import Link from "next/link"
import { FaFacebookF, FaGooglePlusG, FaRss, FaTwitter } from "react-icons/fa"
import SliderWrapper from "../SliderWrapper"
import { Post } from "@/src/@types/typings"
import urlFor from "@/sanity/urlFor"
import AdSense300x250 from "../adsense/AdSense300x250"
import { client } from "@/sanity/sanity-client"
import { groq } from "next-sanity"
import { useQuery } from "@tanstack/react-query"
import Skeleton from "@mui/material/Skeleton"

export default function Sidebar({ tags }: { tags?: string[] }) {
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

  return (
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
              variant="text"
              sx={{ fontSize: "18px", width: "100px", marginBottom: "12px", paddingBottom: "15px" }}
            />

            <div className="lightbox-slide">
              <Skeleton
                variant="rectangular"
                sx={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
              />
            </div>

            <ul className="small-posts">
              {[...Array(3)].map((x, i) => (
                <li key={i}>
                  <Skeleton
                    variant="rectangular"
                    width={80}
                    height={80}
                    sx={{ marginRight: "20px", float: "left" }}
                  />

                  <div className="post-cont">
                    <Skeleton variant="text" sx={{ fontSize: "14px" }} />

                    <ul className="post-tags">
                      <Skeleton variant="text" sx={{ fontSize: "12px", width: "100px" }} />
                    </ul>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}

        {data && (
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

        {data && (
          <div className="advertisement">
            <AdSense300x250 />

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

        {/* <div className="advertisement">
          <a
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
          </a>
        </div> */}

        {isLoading && (
          <div className="widget tags-widget">
            <Skeleton variant="text" sx={{ fontSize: "18px", width: "60px" }} />

            <ul className="tags-list" style={{ display: "flex", alignItems: "center", gap: "4px" }}>
              <Skeleton variant="text" sx={{ fontSize: "24px", width: "100px" }} />
              <Skeleton variant="text" sx={{ fontSize: "24px", width: "100px" }} />
              <Skeleton variant="text" sx={{ fontSize: "24px", width: "100px" }} />
            </ul>
          </div>
        )}

        {data && tags && (
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
        )}
      </div>
    </div>
  )
}
