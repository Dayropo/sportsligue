import { getPostsByCategorySlug } from "@/sanity/sanity-utils"
import Posts from "@/src/components/categories/Posts"
import Footer from "@/src/components/ui/Footer"
import Header from "@/src/components/ui/Header"
import Sidebar from "@/src/components/ui/Sidebar"
import { Metadata } from "next"

export const dynamic = "force-dynamic"

type Props = {
  params: {
    category: string
  }
}

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const slug = params.category
  const posts = await getPostsByCategorySlug(slug)
  return {
    title: `${posts[0].category.title} - Sportsligue`,
  }
}

export default async function Category({ params }: Props) {
  const slug = params.category
  const posts = await getPostsByCategorySlug(slug)

  return (
    <div id="container">
      <Header />

      <section id="content-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              {/* <!-- Posts-block --> */}
              {posts.length > 0 ? (
                <div className="posts-block">
                  <div className="title-section">
                    <h1>{posts[0].category.title}</h1>
                  </div>

                  <Posts posts={posts} />
                </div>
              ) : (
                <div className="posts-block">
                  <div className="title-section">
                    <h2>No articles found</h2>
                  </div>
                </div>
              )}

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
