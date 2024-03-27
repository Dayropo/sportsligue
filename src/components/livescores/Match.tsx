import Image from "next/image"
import React from "react"
import styles from "../../styles/livescores.module.scss"

export default function Match({ item }: { item: IMatch }) {
  return (
    <div className={styles.league_matches_item}>
      <span className={styles.league_matches_item_fixt}>
        {item.fixture.status.short === "PST" ? "Postp." : item.fixture.status.short}
      </span>

      <div className={styles.league_matches_item_home}>
        <p>{item.teams.home.name}</p>
        <Image src={item.teams.home.logo} alt="logo" width={32} height={32} />
      </div>

      <div className={styles.league_matches_item_score}>
        <p>{`${item.goals.home !== null ? item.goals.home : ""} - ${
          item.goals.away !== null ? item.goals.away : ""
        }`}</p>
      </div>

      <div className={styles.league_matches_item_away}>
        <Image src={item.teams.away.logo} alt="logo" width={32} height={32} />
        <p>{item.teams.away.name}</p>
      </div>
    </div>
  )
}
