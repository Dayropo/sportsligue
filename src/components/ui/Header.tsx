import Image from "next/image"
import Link from "next/link"
import { ClockIcon } from "@heroicons/react/24/outline"
import { UserIcon } from "@heroicons/react/24/solid"
import moment from "moment"
import useCategoriesStore from "@/src/stores/categories"
import NavItem from "./header/NavItem"
import { Category } from "@/src/@types/typings"
import usePostsStore from "@/src/stores/posts"
import { getCategoryByTitle, getPostsByCategory } from "@/sanity/sanity-utils"

const Header = async () => {
  const footballCategory = await getCategoryByTitle("Football")
  const tennisCategory = await getCategoryByTitle("Tennis")
  const basketballCategory = await getCategoryByTitle("Basketball")
  const boxingCategory = await getCategoryByTitle("Boxing")
  const formula1Category = await getCategoryByTitle("Formula 1")
  const amFootballCategory = await getCategoryByTitle("American Football")
  const athleticsCategory = await getCategoryByTitle("Athletics")

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
              <form className="form-inline">
                <input
                  className="form-control mr-sm-2"
                  type="search"
                  placeholder="Search for..."
                  aria-label="Search"
                />
                <button className="btn btn-primary my-2 my-sm-0" type="submit">
                  <i className="fa fa-search"></i>
                </button>
              </form>
              <ul className="info-list right-align">
                <li>
                  <ClockIcon
                    style={{
                      width: "16px",
                      height: "16px",
                      color: "white",
                      marginRight: "4px",
                    }}
                  />
                  {moment().format("dddd LL")}
                </li>
                <li>
                  <a href="#" data-toggle="modal" data-target="#loginModal">
                    <UserIcon
                      style={{
                        width: "16px",
                        height: "16px",
                        color: "white",
                        marginRight: "4px",
                      }}
                    />
                    Log in
                  </a>
                </li>
                <li>
                  <a href="register.html">Register</a>
                </li>
              </ul>
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
              <li className="nav-item active">
                <a className="nav-link" href="index.html">
                  Live Score
                </a>
              </li>

              <NavItem category={footballCategory} posts={footballPosts} />
              <NavItem category={tennisCategory} posts={tennisPosts} />
              <NavItem category={basketballCategory} posts={baskeballPosts} />
              <NavItem category={boxingCategory} posts={boxingPosts} />
              <NavItem category={formula1Category} posts={formula1Posts} />
              <NavItem category={amFootballCategory} posts={amFootballPosts} />
              <NavItem category={athleticsCategory} posts={athleticsPosts} />

              <li className="nav-item drop-link">
                <a className="nav-link food" href="#">
                  Pages<i className="fa fa-caret-down"></i>
                </a>
                <ul className="dropdown">
                  <li>
                    <a href="archive.html">Archive Page</a>
                  </li>
                  <li>
                    <a href="tag.html">Tags Page</a>
                  </li>
                  <li>
                    <a href="search.html">Search Page</a>
                  </li>
                  <li>
                    <a href="register.html">Register Page</a>
                  </li>
                  <li>
                    <a href="about.html">About Us</a>
                  </li>
                  <li>
                    <a href="contact.html">Contact Us</a>
                  </li>
                  <li>
                    <a href="404-error.html">404 Error</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
