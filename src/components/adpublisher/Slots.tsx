"use client"

import { usePathname, useSearchParams } from "next/navigation"
import { useEffect } from "react"

export type GptSlot = {
  divId: string
  adUnitPath: string
  sizes: googletag.GeneralSize
}

type SlotsProps = { slots: GptSlot[] }

export const AdSlot = (props: SlotsProps) => {
  const gptSlots = props.slots
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    googletag.cmd.push(function () {
      const divIds = gptSlots.map(gptSlot => gptSlot.divId)
      const removeSlots = googletag
        .pubads()
        .getSlots()
        .filter(slot => {
          return divIds.includes(slot.getSlotElementId())
        })
      if (destroySlots.length > 0) {
        destroySlots(removeSlots)
      }

      gptSlots.map(gptSlot => {
        const slot = googletag
          .defineSlot(gptSlot.adUnitPath, gptSlot.sizes, gptSlot.divId)
          ?.addService(googletag.pubads())
        return slot
      })
    })
  }, [pathname, searchParams])

  return <></>
}

function destroySlots(slots: googletag.Slot[]) {
  googletag.cmd.push(function () {
    googletag.destroySlots(slots)
  })
}
