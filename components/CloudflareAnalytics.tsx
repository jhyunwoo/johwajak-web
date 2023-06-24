"use client";

import Script from "next/script";

export default function CloudflareAnalytics() {
  return (
    <Script
      defer
      src="https://static.cloudflareinsights.com/beacon.min.js"
      data-cf-beacon='{"token": "1976a30ebe1d497cbb50e6d5d48dbe62"}'
    />
  );
}
