import { getAllCategories, getAllPosts } from "@/sanity/sanity-utils"

export default async function sitemap() {
  const baseUrl = "https://www.sportsligue.com"

  // posts
  const posts = await getAllPosts()
  const postUrls =
    posts?.map(post => {
      return {
        url: `${baseUrl}/${post.slug.current}`,
        lastModified: new Date(post.publishedAt),
      }
    }) ?? []

  //categories
  const categories = await getAllCategories()
  const categoryUrls =
    categories?.map(category => {
      return {
        url: `${baseUrl}/category/${category.slug.current}`,
        lastModified: new Date(),
      }
    }) ?? []

  // subcategories
  const subCategoryUrls =
    categories?.map(category => {
      return category?.subCategories?.map(subCat => {
        return {
          url: `${baseUrl}/category/${category.slug.current}/${subCat.slug.current}`,
          lastModified: new Date(),
        }
      })
    }) ?? []

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    ...postUrls,
    ...categoryUrls,
  ]
}
