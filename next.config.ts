import type {NextConfig} from "next";

const nextConfig: NextConfig = {
    output: "export",
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
        ],
    },
};

export default nextConfig;
