"use client"

import { client } from "@/sanity/sanity-client"
import urlFor from "@/sanity/urlFor"
import { Category, Post, SubCategory } from "@/src/@types/typings"
import useCategoriesStore from "@/src/stores/categories"
import { useQuery } from "@tanstack/react-query"
import { groq } from "next-sanity"
import Image from "next/image"
import Link from "next/link"
import { FaCaretDown } from "react-icons/fa"
import Skeleton from "@mui/material/Skeleton"

type Props = {
  title: string
}

export default function NavItem({ title }: Props) {
  //   const { posts, category } = await client.fetch(
  //     `{
  //     "posts": *[_type == "post" && category->title == $title] {
  //      _id,
  //   _createdAt,
  //   title,
  //   slug,
  //   mainImage,
  //   author->,
  //   category->,
  //   subCategory->,
  //   featured,
  //   publishedAt,
  //   body,
  //   tags,
  // } | order(publishedAt desc),
  //   "category":  *[_type == "category" && title == $title][0]{
  //     _id,
  //     _createdAt,
  //     title,
  //     slug,
  //     "subCategories": subCategories[]-> {
  //       _id,
  //       _createdAt,
  //       title,
  //       slug,
  //       }
  //     }
  //   }`,
  //     {
  //       title,
  //       cache: "force-cache",
  //       next: {
  //         revalidate: 0,
  //       },
  //     }
  //   )

  const { data, isLoading, isError, error } = useQuery({
    queryKey: [`navitem-${title}`],
    queryFn: async () => {
      const response = await client.fetch<Category>(
        groq`*[_type == "category" && title == $title][0]{
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
          }`,
        {
          title,
          cache: "no-store",
        }
      )

      return response
    },
  })

  isError && console.error(error)

  return (
    <>
      {isLoading && (
        <div className="nav-item">
          <div className="nav-link">
            <Skeleton variant="text" sx={{ fontSize: "19px", width: "80px" }} />
          </div>
        </div>
      )}

      {data && (
        <li className="nav-item">
          <Link className="nav-link" href={`/category/${data.slug.current}`}>
            {data.title}

            {data.subCategories && <FaCaretDown className="nav-icon" />}
          </Link>

          {data.subCategories && (
            <div className="mega-posts-menu">
              <div className="posts-line">
                {data.subCategories && (
                  <ul className="filter-list">
                    {data.subCategories.map((subCategory: SubCategory) => (
                      <li key={subCategory._id}>
                        <Link href={`/category/${data.slug.current}/${subCategory.slug.current}`}>
                          {subCategory.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}

                {/* <div className="row">
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
                 href={`/category/${post.category.slug.current}`}
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
                 <a href="#">{post.author.name}</a>
               </li>
               <li>
                 <a href="#">
                   <i className="lnr lnr-book"></i>
                   <span>23 comments</span>
                 </a>
               </li>
             </ul>
           </div>
         </div>
       ))}
     </div> */}
              </div>
            </div>
          )}
        </li>
      )}
    </>
  )
}
