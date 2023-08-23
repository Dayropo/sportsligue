import urlFor from "@/sanity/urlFor"
import Image from "next/image"

export const PortableTextComponents = {
  types: {
    image: ({ value }: any) => {
      return (
        <div className="portable-text-image">
          <Image
            src={urlFor(value).url()}
            fill
            alt={value}
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
        </div>
      )
    },
  },
}
