"use client"

import axios from "@/src/libs/axios"
import { useQuery } from "@tanstack/react-query"
import Image from "next/image"
import React, { useState, useEffect } from "react"
import GroupedScoresByLeagueId from "./GroupedScoresByLeagueId"

export default function Scores() {
  const date = new Date().toISOString().split("T")[0]
  const pinnedLeagues = [39, 140, 135]

  const { data, isLoading, isError } = useQuery({
    queryKey: ["fixtures", date],
    queryFn: async () => {
      const response = await axios.get(`fixtures?date=2024-03-16`, {
        headers: {
          "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPIDAPI_KEY,
          "X-RapidAPI-Host": process.env.NEXT_PUBLIC_RAPIDAPI_HOST,
        },
      })

      return response.data
    },
  })

  const sort = (a: IMatch, b: IMatch) => {
    const order1 = ["Premier League", "La Liga", "Bundesliga"]
    const order2 = ["England", "Spain", "Germany"]

    return
  }

  console.log({ data })

  //  console.log(data.response.find((item: IMatch) => item.league.id === 39))

  return (
    <div>
      {/* premier league */}
      {/* <div>
        <span>Premier League</span>

        {data && data.length > 0 &&
          data.response
            .filter((item: IMatch) => item.league.id === 39)
            .map((item: IMatch, index: number) => (
              <div
                key={index}
                style={{
                  width: "100%",
                  padding: "16px 24px",
                  border: "1px solid #E5E5E5",
                  display: "flex",
                  // justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <span style={{ width: "40px" }}>{item.fixture.status.short}</span>

                <div
                  style={{
                    width: "300px",
                    display: "flex",
                    justifyContent: "flex-end",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <Image src={item.teams.home.logo} alt="logo" width={32} height={32} />
                  <p style={{ fontSize: "16px", lineHeight: "24px", margin: "0px" }}>
                    {item.teams.home.name}
                  </p>
                </div>

                <div
                  style={{
                    width: "60px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <p
                    style={{ fontSize: "16px", lineHeight: "24px", margin: "0px" }}
                  >{`${item.goals.home} - ${item.goals.away}`}</p>
                </div>

                <div style={{ width: "300px", display: "flex", alignItems: "center", gap: "8px" }}>
                  <p style={{ fontSize: "16px", lineHeight: "24px", margin: "0px" }}>
                    {item.teams.away.name}
                  </p>
                  <Image src={item.teams.away.logo} alt="logo" width={32} height={32} />
                </div>
              </div>
            ))}
      </div> */}

      {/* {data && data.length > 0 &&
        data.response.map((item: IMatch, index: number) => (
          <div>
            <span>{item.league.name}</span>
            <span>{item.league.id}</span>

            <div
              key={index}
              style={{
                width: "100%",
                padding: "16px 24px",
                border: "1px solid #E5E5E5",
                display: "flex",
                // justifyContent: "center",
                alignItems: "center",
              }}
            >
              <span style={{ width: "40px" }}>{item.fixture.status.short}</span>

              <div
                style={{
                  width: "300px",
                  display: "flex",
                  justifyContent: "flex-end",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <Image src={item.teams.home.logo} alt="logo" width={32} height={32} />
                <p style={{ fontSize: "16px", lineHeight: "24px", margin: "0px" }}>
                  {item.teams.home.name}
                </p>
              </div>

              <div
                style={{
                  width: "60px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <p
                  style={{ fontSize: "16px", lineHeight: "24px", margin: "0px" }}
                >{`${item.goals.home} - ${item.goals.away}`}</p>
              </div>

              <div style={{ width: "300px", display: "flex", alignItems: "center", gap: "8px" }}>
                <p style={{ fontSize: "16px", lineHeight: "24px", margin: "0px" }}>
                  {item.teams.away.name}
                </p>
                <Image src={item.teams.away.logo} alt="logo" width={32} height={32} />
              </div>
            </div>
          </div>
        ))} */}

      {data && data.length > 0 && (
        <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: "16px" }}>
          {pinnedLeagues.map((leagueId: number) => (
            <GroupedScoresByLeagueId data={data.response} id={leagueId} key={leagueId} />
          ))}
        </div>
      )}
    </div>
  )
}
