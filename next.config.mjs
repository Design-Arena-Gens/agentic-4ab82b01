/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    optimizePackageImports: ["prism-react-renderer"]
  }
};

export default nextConfig;
