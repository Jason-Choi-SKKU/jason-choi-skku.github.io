const withMDX = require("@next/mdx")();

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions` to include MDX files
  reactStrictMode: true,
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  // Optionally, add any other Next.js config below
  // output: "export",

  i18n: {
    defaultLocale: "en",
    locales: ["en", "ko"],
  },

};

module.exports = withMDX(nextConfig);
