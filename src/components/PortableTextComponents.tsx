import urlFor from "@/sanity/urlFor"
import Image from "next/image"
import { Tweet } from "react-tweet"

export const PortableTextComponents = {
  types: {
    image: ({ value }: any) => {
      return (
        <>
          <figure className="portable-text-image">
            <Image
              src={urlFor(value).url()}
              fill
              sizes="100vw"
              alt={value}
              style={{ objectFit: "cover", objectPosition: "center" }}
            />
          </figure>
          <h6 className="figcaption">{value.caption}</h6>
        </>
      )
    },
    twitter: ({ value }: any) => {
      return (
        <div data-theme="light" style={{ display: "flex", justifyContent: "center" }}>
          <Tweet id={value.id} />
        </div>
      )
    },
  },
}
