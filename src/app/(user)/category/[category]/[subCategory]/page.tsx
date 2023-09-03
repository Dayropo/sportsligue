import { getPostsBySubCategorySlug } from "@/sanity/sanity-utils"
import urlFor from "@/sanity/urlFor"
import { Post } from "@/src/@types/typings"
import { PortableTextComponents } from "@/src/components/PortableTextComponents"
import Footer from "@/src/components/ui/Footer"
import Header from "@/src/components/ui/Header"
import Sidebar from "@/src/components/ui/Sidebar"
import { PortableText } from "@portabletext/react"
import Image from "next/image"
import Link from "next/link"
import { FiBook, FiUser } from "react-icons/fi"

type Props = {
  params: {
    subCategory: string
  }
}

export default async function SubCategory({ params }: Props) {
  const slug = params.subCategory
  const posts = await getPostsBySubCategorySlug(slug)

  return (
    <div id="container">
      <Header />

      <section id="content-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              {/* <!-- Posts-block --> */}
              <div className="posts-block">
                <div className="title-section">
                  <h1>{`${posts[0].category.title}  /  ${posts[0].subCategory.title}`}</h1>
                </div>

                <div className="articles-box-style">
                  {posts.slice(0, 5).map((post: Post) => (
                    <div className="news-post article-post" key={post._id}>
                      <div className="row">
                        <div className="col-sm-5">
                          <div className="post-image">
                            <Link href={`/${post.slug.current}`}>
                              <Image
                                src={urlFor(post.mainImage).url()}
                                fill
                                alt=""
                                style={{ objectFit: "cover" }}
                              />
                            </Link>
                            <Link
                              href={`/category/${post.category.slug.current}`}
                              className="category"
                            >
                              {post.category.title}
                            </Link>
                          </div>
                        </div>
                        <div className="col-sm-7">
                          <h2>
                            <Link href={`/${post.slug.current}`}>
                              {post.title}
                            </Link>
                          </h2>
                          <ul className="post-tags">
                            <li>
                              <FiUser
                                size={12}
                                style={{ marginRight: "4px" }}
                              />
                              by{" "}
                              <Link
                                href={`/profile/${post.author.slug.current}`}
                              >
                                {post.author.name}
                              </Link>
                            </li>
                            <li>
                              <a href="#">
                                <FiBook
                                  size={12}
                                  style={{ marginRight: "4px" }}
                                />
                                <span>23 comments</span>
                              </a>
                            </li>
                          </ul>
                          <div className="description">
                            <PortableText
                              value={post.body}
                              components={PortableTextComponents}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}

                  <ul className="pagination-list">
                    <li>
                      <a href="#">Prev</a>
                    </li>
                    <li>
                      <a href="#" className="active">
                        1
                      </a>
                    </li>
                    <li>
                      <a href="#">2</a>
                    </li>
                    <li>
                      <a href="#">3</a>
                    </li>
                    <li>
                      <a href="#">...</a>
                    </li>
                    <li>
                      <a href="#">6</a>
                    </li>
                    <li>
                      <a href="#">Next</a>
                    </li>
                  </ul>
                </div>
              </div>
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
