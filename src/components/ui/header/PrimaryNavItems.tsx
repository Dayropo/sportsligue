"use client"

import moment from "moment"
import { ClockIcon } from "@heroicons/react/24/outline"
import { UserIcon } from "@heroicons/react/24/solid"
import Link from "next/link"
import { signOut, useSession } from "next-auth/react"

export default function PrimaryNavItems() {
  const { status, data: session } = useSession()
  return (
    <ul className="info-list right-align">
      <li>
        <ClockIcon
          style={{
            width: "16px",
            height: "16px",
            color: "white",
            marginRight: "4px",
          }}
        />
        {moment().format("dddd LL")}
      </li>
      {/* <li>
        {status === "authenticated" ? (
          <a>
            <UserIcon
              style={{
                width: "16px",
                height: "16px",
                color: "white",
                marginRight: "4px",
              }}
            />
            {session.user?.name}
          </a>
        ) : (
          <a data-toggle="modal" data-target="#loginModal">
            <UserIcon
              style={{
                width: "16px",
                height: "16px",
                color: "white",
                marginRight: "4px",
              }}
            />
            Log in
          </a>
        )}
      </li> */}
      {/* {status === "authenticated" ? (
        <li>
          <a role="button" onClick={() => signOut()}>Sign Out</a>
        </li>
      ) : (
        <li>
          <Link href="/register">Register</Link>
        </li>
      )} */}
    </ul>
  )
}
