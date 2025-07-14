/** @type {import('next').NextConfig} */
const nextConfig = {
    distDir: ".next",
    typescript: {
        ignoreBuildErrors: true,
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
    reactStrictMode: false
};

export default nextConfig;
