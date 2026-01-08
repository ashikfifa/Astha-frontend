import type {NextConfig} from "next";

const nextConfig: NextConfig = {
    images: {
        unoptimized: true,
        remotePatterns: [
            {
                protocol: "https",
                hostname: "www.figma.com",
                pathname: "/api/mcp/asset/**",
            },
            {
                protocol: "https",
                hostname: "img.youtube.com",
                pathname: "/**",
            },
            {
                protocol: "https",
                hostname: "admin.aasthabd.com",
                pathname: "/**",
            },
        ],
    },
};

export default nextConfig;
