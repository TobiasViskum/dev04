const withPWA = require("next-pwa")({
  dest: "public",
  dynamicStartUrl: (req) => {
    const uid = req.query.uid;
    return `/?uid=d5141240-33e2-4d7a-807e-e5df34b64d71`;
  },
});

/** @type {import('next').NextConfig} */

module.exports = withPWA({
  experimental: {
    serverActions: true,
  },
});
