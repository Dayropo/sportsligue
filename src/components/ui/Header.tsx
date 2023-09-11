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
  const athleticsCategory = await getCategoryByTitle("Athletics")
  const others = await getOtherCategories()

  const footballPosts = await getPostsByCategory("Football")
  const tennisPosts = await getPostsByCategory("Tennis")
  const baskeballPosts = await getPostsByCategory("Basketball")
  const boxingPosts = await getPostsByCategory("Boxing")
  const formula1Posts = await getPostsByCategory("Formula 1")
  const amFootballPosts = await getPostsByCategory("American Football")
  const athleticsPosts = await getPostsByCategory("Athletics")

  return (
    <header className="clearfix">
      <div className="top-line">
        <div className="container">
          <div className="row">
            <div className="col-sm-5">
              <Link className="navbar-brand" href={`/`}>
                <Image
                  src={require("../../assets/images/white_logo.png")}
                  style={{ width: "100px", height: "auto" }}
                  alt="sportsligue"
                />
              </Link>
            </div>
            <div className="col-sm-7">
              {/* <form className="form-inline">
                <input
                  className="form-control mr-sm-2"
                  type="search"
                  placeholder="Search for..."
                  aria-label="Search"
                />
                <button className="btn btn-primary my-2 my-sm-0" type="submit">
                  <i className="fa fa-search"></i>
                </button>
              </form> */}

              <PrimaryNavItems />
            </div>
          </div>
        </div>
      </div>

      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
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
              <NavItem category={amFootballCategory} posts={amFootballPosts} />
              <NavItem category={athleticsCategory} posts={athleticsPosts} />

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
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
