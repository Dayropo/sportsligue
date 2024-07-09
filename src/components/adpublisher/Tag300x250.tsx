import Script from "next/script"
import React from "react"

const Tag300x250 = () => {
  return (
    <div id="div-gpt-ad-1720450834557-0" style={{ minWidth: "300px", minHeight: "250px" }}>
      <Script id="ad-300x250">
        {`
            googletag.cmd.push(function() { googletag.display('div-gpt-ad-1720450834557-0'); });

        `}
      </Script>
    </div>
  )
}

export default Tag300x250
