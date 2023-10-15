import Image from "next/image"
import Link from "next/link"
import { ClockIcon } from "@heroicons/react/24/outline"
import { UserIcon } from "@heroicons/react/24/solid"
import moment from "moment"
import useCategoriesStore from "@/src/stores/categories"
import NavItem from "./header/NavItem"
import { Category } from "@/src/@types/typings"
import usePostsStore from "@/src/stores/posts"
import {
  getCategoryByTitle,
  getOtherCategories,
  getPostsByCategory,
} from "@/sanity/sanity-utils"
import { FaCaretDown } from "react-icons/fa"
import PrimaryNavItems from "./header/PrimaryNavItems"
import { Suspense } from "react"
import NavSkeleton from "../skeletons/NavSkeleton"
import TopLine from "./header/TopLine"
import { client } from "@/sanity/sanity-client"
import { groq } from "next-sanity"

const arrayChunk = (arr: Category[], n: number) => {
  const array = arr.slice()
  const chunks = []
  while (array.length) chunks.push(array.splice(0, n))
  return chunks
}

const Header = async () => {
  const others = await client.fetch<Category[]>(
    groq`
    *[_type == "category" && !(title in ["Football", "Tennis", "Basketball", "Boxing", "Formula 1", "American Football", "Baseball"])]{
    _id,
    _createdAt,
    title,
    slug,
    "subCategories": subCategories[]-> {
      _id,
      _createdAt,
      title,
      slug,
      }
    } | order(title asc)
  `,
    { next: { revalidate: 0 } }
  )

  return (
    <header className="clearfix">
      <TopLine />

      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <Suspense fallback={<NavSkeleton />}>
              <ul className="navbar-nav mr-auto">
                {/* <li className="nav-item active">
                <a className="nav-link" href="index.html">
                  Live Scores
                </a>
              </li> */}

                <NavItem title="Football" />
                <NavItem title="Tennis" />
                <NavItem title="Basketball" />
                <NavItem title="Boxing" />
                <NavItem title="Formula 1" />
                <NavItem title="American Football" />
                <NavItem title="Baseball" />

                <li className="nav-item">
                  <a className="nav-link food" style={{ cursor: "pointer" }}>
                    • • •
                  </a>
                  <div className="mega-posts-menu">
                    <div className="row">
                      {arrayChunk(others, 4).map((arr, index) => (
                        <ul className="col-2 other-categories" key={index}>
                          {arr.map(item => (
                            <li key={item._id}>
                              <Link href={`/category/${item.slug.current}`}>
                                {item.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      ))}
                    </div>
                  </div>
                </li>
              </ul>
            </Suspense>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
