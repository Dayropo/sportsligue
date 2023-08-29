import { getAuthor } from "@/sanity/sanity-utils"
import { PortableText } from "@portabletext/react"
import Image from "next/image"
import { Author } from "../@types/typings"
import urlFor from "@/sanity/urlFor"
import {
  FaFacebookF,
  FaGooglePlusG,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa"

type Props = {
  author: Author
}

export default async function AuthorProfile({ author }: Props) {
  // const author = await getAuthor(slug)

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
                <FaFacebookF size={16} />
              </a>
            </li>
            <li>
              <a href="#" className="google">
                <FaGooglePlusG size={16} />
              </a>
            </li>
            <li>
              <a href="#" className="twitter">
                <FaTwitter size={16} />
              </a>
            </li>
            <li>
              <a href="#" className="instagram">
                <FaInstagram size={16} />
              </a>
            </li>
            <li>
              <a href="#" className="linkedin">
                <FaLinkedinIn size={16} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
