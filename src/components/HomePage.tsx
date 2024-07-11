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
import { Suspense } from "react"
import HeadlineSkeleton from "@/src/components/skeletons/HeadlineSkeleton"
import { client } from "@/sanity/sanity-client"
import { Post } from "@/src/@types/typings"
import { groq } from "next-sanity"
import AdSense728x90 from "@/src/components/adsense/Adsense728x90"
import { DefineAdSlot, RequestAds } from "@/src/components/adpublisher/GPT"

export default function HomePage() {
  RequestAds()

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
            <DefineAdSlot
              adUnit="/23072633878/728x90"
              size={[728, 90]}
              slotId="div-gpt-ad-1720451550067-0"
            />
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

            <Sidebar />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
