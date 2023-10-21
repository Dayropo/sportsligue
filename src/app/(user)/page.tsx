import Image from "next/image"
import { Metadata } from "next"
import Header from "@/components/ui/Header"
import LatestNews from "@/components/LatestNews"
import HeadingNews from "@/components/HeadingNews"
import FeaturedPosts from "@/components/FeaturedPosts"
import Footer from "@/src/components/ui/Footer"
import CategoryLatest from "@/src/components/CategoryLatest"
import Sidebar from "@/src/components/ui/Sidebar"
import WorldNews from "@/src/components/WorldNews"
import { Suspense } from "react"
import HeadlineSkeleton from "@/src/components/skeletons/HeadlineSkeleton"
import { client } from "@/sanity/sanity-client"
import { Post } from "@/src/@types/typings"
import { groq } from "next-sanity"

export const dynamic = "force-dynamic"
// export const revalidate = 0
//export const fetchCache = "force-no-store"

export const metadata: Metadata = {
  description:
    "Stay updated with the latest sports news, scores, and highlights on Sportsligue.com - your one-stop source for all things sports and more.",
  keywords: [
    "football",
    "soccer",
    "tennis",
    "basketball",
    "formula one",
    "formula 1",
    "athletics",
    "boxing",
    "baseball",
    "cricket",
    "golf",
    "rugby",
    "gymnastics",
    "hockey",
    "volleyball",
    "transfers",
    "english premier league",
    "serie a",
    "la liga",
    "ligue 1",
    "bundesliga",
    "uefa champions league",
    "uefa europa league",
    "uefa conference league",
    "womens football",
    "wsl",
    "world cup",
    "uefa nations league",
    "uefa",
    "caf",
    "african nations cup",
    "euro",
    "olympics",
    "australian open",
    "french open",
    "roland garros",
    "wimbledon",
    "us open",
    "atp",
    "wta",
    "nba",
    "saudi pro league",
    "mls",
    "wnba",
    "euroleague",
    "efl championship",
    "heavyweight",
    "middleweight",
    "lightweight",
    "nfl",
    "college football",
    "diamond league",
    "world athletics championships",
    "mlb",
  ],
}

export default async function Home() {
  const {
    headlines,
    latestNews,
    footballLatest,
    tennisLatest,
    basketballLatest,
    boxingLatest,
    formulaOneLatest,
    americanFootballLatest,
    worldLatest,
    featuredPosts,
  } = await client.fetch(
    `{
    "headlines": *[_type == "post" && headline == true]{
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
  "latestNews":  *[_type == "post"]{
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
  "footballLatest": *[_type == "post" && category->title == "Football"]{
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
  "basketballLatest": *[_type == "post" && category->title == "Basketball"]{
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
  "tennisLatest": *[_type == "post" && category->title == "Tennis"]{
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
  "boxingLatest": *[_type == "post" && category->title == "Boxing"]{
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
  "formulaOneLatest": *[_type == "post" && category->title == "Formula 1"]{
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
  "americanFootballLatest": *[_type == "post" && category->title == "American Football"]{
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
"worldLatest": *[_type == "post" && !(category->title in ["Football", "Tennis", "Basketball", "Boxing", "Formula 1", "American Football"])]{
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
} | order(publishedAt desc)
}`,
    {
      cache: "no-store",
      next: {
        revalidate: 0,
      },
    }
  )

  return (
    <div id="container">
      <Header />

      <section id="content-section">
        <div className="container">
          {/* <!-- News-Headline --> */}
          <Suspense fallback={<HeadlineSkeleton />}>
            <HeadingNews posts={headlines} />
          </Suspense>

          {/* <!-- End News-Headline --> */}

          {/* <!-- Advertisement --> */}
          <div className="advertisement">
            <a
              href="https://kn6m4zjsiy3.typeform.com/to/JNmi3cD2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/images/adsense/728x90.gif"
                width={620}
                height={80}
                alt="728x90"
              />
            </a>
          </div>
          {/* <!-- End Advertisement --> */}

          <div className="row">
            <div className="col-lg-8">
              {/* <!-- Posts-block --> */}
              <LatestNews posts={latestNews} />
              {/* <!-- End Posts-block --> */}

              {/* <!-- Advertisement --> */}
              <div className="advertisement">
                <a
                  href="https://kn6m4zjsiy3.typeform.com/to/JNmi3cD2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/images/adsense/728x90.gif"
                    width={620}
                    height={80}
                    alt="728x90"
                  />
                </a>
              </div>
              {/* <!-- End Advertisement --> */}

              {/* <!-- Posts-block --> */}
              <div className="posts-block categories-box">
                <div className="row">
                  <CategoryLatest category="Football" posts={footballLatest} />
                  <CategoryLatest category="Tennis" posts={tennisLatest} />
                </div>
              </div>
              {/* <!-- End Posts-block --> */}

              {/* <!-- Posts-block --> */}
              <div className="posts-block categories-box">
                <div className="row">
                  <CategoryLatest
                    category="Basketball"
                    posts={basketballLatest}
                  />
                  <CategoryLatest category="Boxing" posts={boxingLatest} />
                </div>
              </div>
              {/* <!-- End Posts-block --> */}

              {/* <!-- Posts-block --> */}
              <div className="posts-block categories-box">
                <div className="row">
                  <CategoryLatest
                    category="Formula 1"
                    posts={formulaOneLatest}
                  />
                  <CategoryLatest
                    category="American Football"
                    posts={americanFootballLatest}
                  />
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
                  <Image
                    src="/images/adsense/728x90.gif"
                    width={620}
                    height={80}
                    alt="728x90"
                  />
                </a>
              </div>
              {/* <!-- End Advertisement --> */}

              {/* <!-- Posts-block --> */}
              <WorldNews posts={worldLatest} />
              {/* <!-- End Posts-block --> */}
            </div>

            <Sidebar posts={featuredPosts} />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
