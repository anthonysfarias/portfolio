import type { NextConfig } from "next";

/**
 * `script-src` is deliberately absent: the app is fully static, so Next.js has no
 * request to derive a per-response nonce from, and its hydration payload is inlined.
 * A `script-src` here would either break hydration or need `unsafe-inline`, which
 * would protect nothing. The directives below are the ones that hold without it.
 */
const contentSecurityPolicy = [
  "frame-ancestors 'none'",
  "base-uri 'self'",
  "object-src 'none'",
  "form-action 'self'",
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: contentSecurityPolicy },
  // Redundant with frame-ancestors, kept for browsers that predate it.
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
];

const nextConfig: NextConfig = {
  async redirects() {
    return [{ source: "/", destination: "/pt", permanent: false }];
  },
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
};

export default nextConfig;
