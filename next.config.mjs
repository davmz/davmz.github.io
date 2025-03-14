/** @type {import('next').NextConfig} */
// const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
    output: "export",
    images: {
        unoptimized: true,
    },
    trailingSlash: true,
    basePath: "/davmz.github.io"
    // assetPrefix: isProd ? "https://davmz.github.io" : "", // ✅ Serve assets from GitHub Pages, NOT GitHub Repo
    // basePath: isProd ? "/davmz.github.io" : "", // ✅ Ensures correct paths for pages
};

export default nextConfig;