"use client";

import Script from "next/script";

export default function ListScript() {
  return (
    <Script
      src="https://cdnjs.cloudflare.com/ajax/libs/list.js/2.3.1/list.min.js"
      strategy="afterInteractive"
      onLoad={() => {
        new (window as any).List("data", {
          valueNames: ["artist"],
        });
      }}
    />
  );
}
