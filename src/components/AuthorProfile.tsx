import { getAuthor } from "@/sanity/sanity-utils"
import { PortableText } from "@portabletext/react"
import Image from "next/image"
import { Author } from "../@types/typings"
import urlFor from "@/sanity/urlFor"

type Props = {
  author: Author
}

export default async function AuthorProfile({ author }: Props) {
  // const author = await getAuthor(slug)
  console.log({ author })

  return (
    <div className="author-profile">
      <div className="author-box">
        <Image
          src={urlFor(author.image).url()}
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
