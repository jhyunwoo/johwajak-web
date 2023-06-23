/** @type {import('next').NextConfig} */

const withPWA = require("@ducanh2912/next-pwa").default({
  dest: "public",
});

module.exports = withPWA({
  async rewrites() {
    return [
      {
        source: "/google-analytics",
        destination: "https://www.googletagmanager.com/gtag/js?id=G-57WFY0DXKP",
      },
    ];
  },
});
