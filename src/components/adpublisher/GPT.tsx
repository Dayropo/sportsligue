"use client"

/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from "react"
import Script from "next/script"

// import sharedStyles from '../styles/shared.module.css';

interface MyObject {
  [key: string]: any
}

// Official GPT sources.
const GPT_STANDARD_URL = "https://securepubads.g.doubleclick.net/tag/js/gpt.js"
const GPT_LIMITED_ADS_URL = "https://pagead2.googlesyndication.com/tag/js/gpt.js"

// Keep track of defined ad slots.
let adSlots: MyObject = {}
let adSlotCount = 0

if (typeof window !== "undefined") {
  // Ensure we can interact with the GPT command array.
  window.googletag = window.googletag || { cmd: [] }

  // Prepare GPT to display ads.
  googletag.cmd.push(() => {
    // Disable initial load, to precisely control when ads are requested.
    googletag.pubads().disableInitialLoad()

    // Enable SRA and services.
    googletag.pubads().enableSingleRequest()
    googletag.enableServices()
  })
}

export function InitializeGPT() {
  // Reset tracking variables.
  adSlots = {}
  adSlotCount = 0

  return (
    <Script
      async
      src="https://securepubads.g.doubleclick.net/tag/js/gpt.js"
      strategy="lazyOnload"
    />
  )
}

export function DefineAdSlot({
  adUnit,
  size,
  slotId,
}: {
  adUnit: string
  size: googletag.GeneralSize
  slotId: string
}) {
  useEffect(() => {
    // Register the slot with GPT when the component is loaded.
    googletag.cmd.push(() => {
      const slot = googletag.defineSlot(adUnit, size, slotId)
      if (slot) {
        slot.addService(googletag.pubads())
        googletag.display(slot)
        adSlots[slotId] = slot
      }
    })

    // Clean up the slot when the component is unloaded.
    return () => {
      googletag.cmd.push(() => {
        if (adSlots[slotId]) {
          googletag.destroySlots([adSlots[slotId]])
          delete adSlots[slotId]
        }
      })
    }
  }, [])

  // Create the ad slot container.
  return (
    <div
      //   className={`${sharedStyles.adSlot} ${sharedStyles.centered}`}
      style={getMinimumSlotSize(size)}
      id={slotId}
    ></div>
  )
}

export function RequestAds() {
  useEffect(() => {
    googletag.cmd.push(() => {
      // Request ads for all ad slots defined up to this point.
      //
      // In many real world scenarios, requesting ads for *all*
      // slots is not optimal. Instead, care should be taken to
      // only refresh newly added/updated slots.
      const slots = Object.values(adSlots)
      googletag.pubads().refresh(slots)
    })
  }, [])
}

/**
 * Determine minimum width and height values for an ad slot container
 * based on the configured slot sizes.
 *
 * This function is only provided for example purposes. See
 * [Minimize layout shift](https://developers.google.com/publisher-tag/guides/minimize-layout-shift)
 * to learn more about strategies for sizing ad slot containers.
 */
function getMinimumSlotSize(size: googletag.GeneralSize) {
  const maxValue = Number.MAX_VALUE

  let minW = Number.MAX_VALUE
  let minH = Number.MAX_VALUE

  if (Array.isArray(size)) {
    // Convert googletag.SingleSize to googletag.MultiSize for convenience.
    const sizes = size.length <= 2 && !Array.isArray(size[0]) ? [size] : size

    for (const size of sizes) {
      if (Array.isArray(size) && size[0] !== "fluid") {
        // if (Array.isArray(size)) {
        minW = Math.min(Number(size[0]), minW)
        minH = Math.min(Number(size[1]), minH)
      }
    }
  }

  return minW < maxValue && minH < maxValue
    ? // Static ad slot.
      { minWidth: `${minW}px`, minHeight: `${minH}px` }
    : // Fluid ad slot.
      { minWidth: "50%" }
}
