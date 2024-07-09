import React from "react"
import Script from "next/script"

const Tag300x600 = () => {
  return (
    <div id="div-gpt-ad-1720451125756-0" style={{ minWidth: "300px", minHeight: "600px" }}>
      <Script id="ad-300x600">
        {`
           googletag.cmd.push(function() { googletag.display('div-gpt-ad-1720451125756-0'); });

        `}
      </Script>
    </div>
  )
}

export default Tag300x600
