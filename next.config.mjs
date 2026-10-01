/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.themealdb.com",
      },
      {
        protocol: "https",
        hostname: "randomuser.me",
      },
    ],
  },
  redirects() {
    return [
      {
        source: "/food-details/:id",
        destination: "/foods/:id",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
