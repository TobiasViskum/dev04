const withPWA = require("next-pwa")({
  dest: "public",
  dynamicStartUrl: (req) => {
    const uid = req.query.uid;
    return `/?uid=${uid}`;
  },
});

/** @type {import('next').NextConfig} */

module.exports = withPWA({
  experimental: {
    serverActions: true,
  },
});
