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

// export const dynamic = "force-dynamic"
// export const revalidate = 0

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
              <LatestNews />
              {/* <!-- End Posts-block --> */}

              {/* <!-- Posts-block --> */}
              <FeaturedPosts />
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
              <WorldNews />
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
