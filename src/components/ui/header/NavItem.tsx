import { client } from "@/sanity/sanity-client"
import urlFor from "@/sanity/urlFor"
import { Category, Post, SubCategory } from "@/src/@types/typings"
import useCategoriesStore from "@/src/stores/categories"
import Image from "next/image"
import Link from "next/link"
import { FaCaretDown } from "react-icons/fa"

type Props = {
  title: string
}

export default async function NavItem({ title }: Props) {
  const { posts, category } = await client.fetch(
    `{
    "posts": *[_type == "post" && category->title == $title] {
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
  "category":  *[_type == "category" && title == $title][0]{
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
    }
  }`,
    {
      title,
      next: {
        revalidate: 0,
      },
    }
  )
  return (
    <li className="nav-item">
      <Link className="nav-link" href={`/category/${category.slug.current}`}>
        {category.title}

        {category.subCategories && <FaCaretDown className="nav-icon" />}
      </Link>
      <div className="mega-posts-menu">
        <div className="posts-line">
          {category.subCategories && (
            <ul className="filter-list">
              {category.subCategories.map((subCategory: SubCategory) => (
                <li key={subCategory._id}>
                  <Link
                    href={`/category/${category.slug.current}/${subCategory.slug.current}`}
                  >
                    {subCategory.title}
                  </Link>
                </li>
              ))}
            </ul>
          )}

          <div className="row">
            {posts.slice(0, 4).map((post: Post) => (
              <div className="col-lg-3 col-md-6" key={post._id}>
                <div className="news-post standart-post">
                  <div className="post-image">
                    <Link href={`/${post.slug.current}`}>
                      <Image
                        src={urlFor(post.mainImage).url()}
                        fill
                        sizes="100vw"
                        alt={post.title}
                        style={{ objectFit: "cover" }}
                        // blurDataURL="data:..."
                        // placeholder="blur"
                        loading="lazy"
                      />
                    </Link>
                    <Link
                      href={`/${post.category.slug.current}`}
                      className="category"
                    >
                      {post.category.title}
                    </Link>
                  </div>
                  <h2>
                    <Link href={`/${post.slug.current}`}>{post.title}</Link>
                  </h2>
                  <ul className="post-tags">
                    <li>
                      <i className="lnr lnr-user"></i>by{" "}
                      <Link href={`/${post.author.slug.current}`}>
                        {post.author.name}
                      </Link>
                    </li>
                    {/* <li>
                      <a href="#">
                        <i className="lnr lnr-book"></i>
                        <span>23 comments</span>
                      </a>
                    </li> */}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </li>
  )
}
