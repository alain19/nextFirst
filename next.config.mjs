/** @type {import('next').NextConfig} */

const nextConfig = {
    reactStrictMode: true,
    poweredByHeader: false,
    images: {
        domains: ['avatars.githubusercontent.com'],
    },
    experimental: {
        ppr: 'incremental',
    },
};

export default nextConfig;
