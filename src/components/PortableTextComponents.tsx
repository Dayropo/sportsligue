import urlFor from "@/sanity/urlFor"
import Image from "next/image"

export const PortableTextComponents = {
  types: {
    image: ({ value }: any) => {
      return (
        <Image
          src={urlFor(value).url()}
          width={720}
          height={450}
          alt={value}
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
      )
    },
  },
}
