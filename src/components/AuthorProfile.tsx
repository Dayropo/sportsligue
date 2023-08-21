import { getAuthor } from "@/sanity/sanity-utils"
import { PortableText } from "@portabletext/react"
import Image from "next/image"

type Props = {
  slug: string
}

export default async function AuthorProfile({ slug }: Props) {
  const author = await getAuthor(slug)

  return (
    <div className="author-profile">
      <div className="author-box">
        <Image
          src={author.image}
          width={100}
          height={100}
          alt={author.name}
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
        <div className="author-content">
          <h4>
            {author.name} <a href="#">14 posts</a>
          </h4>
          <PortableText value={author.bio} />
          <ul className="author-social">
            <li>
              <a href="#" className="facebook">
                <i className="fa fa-facebook"></i>
              </a>
            </li>
            <li>
              <a href="#" className="google">
                <i className="fa fa-google-plus"></i>
              </a>
            </li>
            <li>
              <a href="#" className="twitter">
                <i className="fa fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="#" className="instagram">
                <i className="fa fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href="#" className="linkedin">
                <i className="fa fa-linkedin"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
