/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",  // <=== enables static exports
  reactStrictMode: true,
  basePath: "/2048-in-react",
  distDir: 'dist'
};

export default nextConfig;
