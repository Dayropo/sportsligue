import Image from "next/image"
import Header from "@/components/ui/Header"
import LatestNews from "@/components/LatestNews"
import HeadingNews from "@/components/HeadingNews"
import FeaturedPosts from "@/components/FeaturedPosts"
import Footer from "@/src/components/ui/Footer"
import CategoryLatest from "@/src/components/CategoryLatest"
import Sidebar from "@/src/components/ui/Sidebar"
import WorldNews from "@/src/components/WorldNews"
import { getAllPosts, getHeadlines, getWorldPosts } from "@/sanity/sanity-utils"
import { Suspense } from "react"
import HeadlineSkeleton from "@/src/components/skeletons/HeadlineSkeleton"

// export const dynamic = "force-dynamic"
export const revalidate = 300

export default async function Home() {
  const posts = await getAllPosts()
  const worldNews = await getWorldPosts()

  return (
    <div id="container">
      <Header />

      <section id="content-section">
        <div className="container">
          {/* <!-- News-Headline --> */}
          <Suspense fallback={<HeadlineSkeleton />}>
            <HeadingNews />
          </Suspense>

          {/* <!-- End News-Headline --> */}

          {/* <!-- Advertisement --> */}
          <div className="advertisement">
            <a href="#">
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
              <LatestNews posts={posts} />
              {/* <!-- End Posts-block --> */}

              {/* <!-- Posts-block --> */}
              <FeaturedPosts />
              {/* <!-- End Posts-block --> */}

              {/* <!-- Advertisement --> */}
              <div className="advertisement">
                <a href="#">
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
                <a href="#">
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
              <WorldNews posts={worldNews} />
              {/* <!-- End Posts-block --> */}
            </div>

            <Sidebar />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
