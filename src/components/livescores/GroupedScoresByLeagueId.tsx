import Image from "next/image"
import React from "react"
import Match from "./Match"
import styles from "../../styles/livescores.module.scss"

export default function GroupedScoresByLeagueId({ data, id }: { data: IMatch[]; id: number }) {
  const filteredData = data.filter(item => item.league.id === id)
  if (filteredData.length === 0) return null

  return (
    <div className={styles.league}>
      <div className={styles.league_header}>
        <Image
          src={filteredData[0].league.logo}
          width={24}
          height={24}
          alt={filteredData[0].league.name}
        />{" "}
        <span>
          {filteredData[0].league.country.toUpperCase()}: {filteredData[0].league.name}
        </span>
      </div>

      <div className={styles.league_matches}>
        {filteredData.map((item, index: number) => (
          <Match item={item} key={index} />
        ))}
      </div>
    </div>
  )
}
