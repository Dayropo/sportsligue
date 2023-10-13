"use client"

import { Post } from "@/src/@types/typings"
import {
  FacebookIcon,
  FacebookShareButton,
  TwitterIcon,
  TwitterShareButton,
  LinkedinIcon,
  LinkedinShareButton,
} from "next-share"
import { usePathname } from "next/navigation"

const SocialShareBox = ({ post }: { post: Post }) => {
  const pathname = usePathname()
  const url = `https://www.sportsligue.com${pathname}`

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
      <FacebookShareButton url={url} quote={post.title}>
        <FacebookIcon size={32} round />
      </FacebookShareButton>

      <TwitterShareButton url={url} title={post.title}>
        <TwitterIcon size={32} round />
      </TwitterShareButton>
    </div>
  )
}

export default SocialShareBox
