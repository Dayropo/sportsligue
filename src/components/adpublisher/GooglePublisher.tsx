"use client"

import React from "react"
import Script from "next/script"

export default function GooglePublisher() {
  return (
    <>
      {/* <Script
        id="23072633878/300x250"
        src="https://securepubads.g.doubleclick.net/tag/js/gpt.js"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `
                    window.googletag = window.googletag || {cmd: []};
                    googletag.cmd.push(function() {
                        googletag.defineSlot('/23072633878/300x250', [300, 250], 'div-gpt-ad-1720450834557-0').addService(googletag.pubads());
                        googletag.pubads().enableSingleRequest();
                        googletag.enableServices();
                    });
                  `,
        }}
      />

      <Script
        id="23072633878/300x600"
        src="https://securepubads.g.doubleclick.net/tag/js/gpt.js"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `
                    window.googletag = window.googletag || {cmd: []};
                    googletag.cmd.push(function() {
                        googletag.defineSlot('/23072633878/300x600', [300, 600], 'div-gpt-ad-1720451125756-0').addService(googletag.pubads());
                        googletag.pubads().enableSingleRequest();
                        googletag.enableServices();
                    });
                  `,
        }}
      />

      <Script
        id="23072633878/320x100"
        src="https://securepubads.g.doubleclick.net/tag/js/gpt.js"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `
                    window.googletag = window.googletag || {cmd: []};
                    googletag.cmd.push(function() {
                        googletag.defineSlot('/23072633878/320x100', [[320, 50], [320, 100]], 'div-gpt-ad-1720451500054-0').addService(googletag.pubads());
                        googletag.pubads().enableSingleRequest();
                        googletag.enableServices();
                    });
                  `,
        }}
      />

      <Script
        id="23072633878/728x90"
        src="https://securepubads.g.doubleclick.net/tag/js/gpt.js"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `
                    window.googletag = window.googletag || {cmd: []};
                    googletag.cmd.push(function() {
                        googletag.defineSlot('/23072633878/728x90', [728, 90], 'div-gpt-ad-1720451550067-0').addService(googletag.pubads());
                        googletag.pubads().enableSingleRequest();
                        googletag.enableServices();
                    });
                  `,
        }}
      /> */}

      <Script
        async
        src="https://securepubads.g.doubleclick.net/tag/js/gpt.js"
        strategy="afterInteractive"
      />
      <Script
        id="gpt-head"
        dangerouslySetInnerHTML={{
          __html: `
            window.googletag = window.googletag || { cmd: [] };
            window.googletag.cmd.push(function() {
              window.googletag.pubads().disableInitialLoad();
              googletag.pubads().enableSingleRequest();
              googletag.enableServices();
            });
          `,
        }}
      />
    </>
  )
}
