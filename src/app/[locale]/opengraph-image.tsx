import { ImageResponse } from "next/og";

import { profile } from "@/data/profile";
import { isLocale, locales, defaultLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

export const alt = `${profile.name} - portfolio`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function OpengraphImage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = getDictionary(isLocale(locale) ? locale : defaultLocale);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#050505",
          padding: "80px",
          fontFamily: "sans-serif",
          color: "#ffffff",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -220,
            left: 320,
            width: 700,
            height: 560,
            borderRadius: 9999,
            background: "rgba(255,255,255,0.10)",
            filter: "blur(120px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -180,
            left: -120,
            width: 520,
            height: 520,
            borderRadius: 9999,
            background: "rgba(99,102,241,0.16)",
            filter: "blur(130px)",
          }}
        />

        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 64,
              height: 64,
              borderRadius: 9999,
              border: "1px solid rgba(255,255,255,0.14)",
              background: "rgba(255,255,255,0.05)",
              fontSize: 22,
              letterSpacing: 2,
              color: "rgba(255,255,255,0.8)",
            }}
          >
            {profile.initials}
          </div>
          <div
            style={{
              fontSize: 20,
              letterSpacing: 6,
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.4)",
            }}
          >
            {profile.siteUrl.replace("https://", "")}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              fontSize: 92,
              fontWeight: 600,
              letterSpacing: -3,
              lineHeight: 1,
              color: "#fafafa",
            }}
          >
            {profile.name}
          </div>
          <div style={{ fontSize: 34, color: "rgba(255,255,255,0.55)" }}>{dict.meta.ogTagline}</div>
        </div>

        <div
          style={{
            display: "flex",
            gap: 12,
            fontSize: 22,
            color: "rgba(255,255,255,0.4)",
          }}
        >
          <span>React</span>
          <span>·</span>
          <span>TypeScript</span>
          <span>·</span>
          <span>FastAPI</span>
          <span>·</span>
          <span>PostgreSQL</span>
          <span>·</span>
          <span>Docker</span>
        </div>
      </div>
    ),
    size,
  );
}
