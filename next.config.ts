import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  distDir: "build",
  // async redirects() {
  //   return [
  //     {
  //       source: "/0",
  //       destination: "/",
  //       permanent: false,
  //     },
  //   ];
  // },
};

export default nextConfig;
