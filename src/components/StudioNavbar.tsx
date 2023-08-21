import Link from "next/link"
import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid"

function StudioNavbar(props: any) {
  return (
    <div>
      <div className="studio-navbar-container">
        <Link href="/" className="homepage-link">
          <ArrowUturnLeftIcon className="icon" />
          Go To Website
        </Link>
      </div>
      <>{props.renderDefault(props)}</>
    </div>
  )
}

export default StudioNavbar
