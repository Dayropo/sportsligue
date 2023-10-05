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

const arrayChunk = (arr: Category[], n: number) => {
  const array = arr.slice()
  const chunks = []
  while (array.length) chunks.push(array.splice(0, n))
  return chunks
}

const Header = async () => {
  const footballCategory = await getCategoryByTitle("Football")
  const tennisCategory = await getCategoryByTitle("Tennis")
  const basketballCategory = await getCategoryByTitle("Basketball")
  const boxingCategory = await getCategoryByTitle("Boxing")
  const formula1Category = await getCategoryByTitle("Formula 1")
  const amFootballCategory = await getCategoryByTitle("American Football")
  // const athleticsCategory = await getCategoryByTitle("Athletics")
  const baseballCategory = await getCategoryByTitle("Baseball")
  const others = await getOtherCategories()

  const footballPosts = await getPostsByCategory("Football")
  const tennisPosts = await getPostsByCategory("Tennis")
  const baskeballPosts = await getPostsByCategory("Basketball")
  const boxingPosts = await getPostsByCategory("Boxing")
  const formula1Posts = await getPostsByCategory("Formula 1")
  const amFootballPosts = await getPostsByCategory("American Football")
  // const athleticsPosts = await getPostsByCategory("Athletics")
  const baseballPosts = await getPostsByCategory("Baseball")

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

                <NavItem category={footballCategory} posts={footballPosts} />
                <NavItem category={tennisCategory} posts={tennisPosts} />
                <NavItem category={basketballCategory} posts={baskeballPosts} />
                <NavItem category={boxingCategory} posts={boxingPosts} />
                <NavItem category={formula1Category} posts={formula1Posts} />
                <NavItem
                  category={amFootballCategory}
                  posts={amFootballPosts}
                />
                <NavItem category={baseballCategory} posts={baseballPosts} />

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
