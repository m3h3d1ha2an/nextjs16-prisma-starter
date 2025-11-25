import type { NextConfig } from "next";
import { env } from "~/env";

const nextConfig: NextConfig = {
  reactCompiler: true,
  typedRoutes: true,
  allowedDevOrigins: ["*"],
  compiler: { removeConsole: env.NODE_ENV === "production" },
  experimental: { turbopackFileSystemCacheForDev: true },
};

export default nextConfig;
