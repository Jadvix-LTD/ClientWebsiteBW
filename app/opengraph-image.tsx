import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = `Beaver and Weaver Engineering Services: ${site.headline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const logo = await readFile(join(process.cwd(), "public", "brand", "logo.png"));
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", background: "#FFFFFF", fontFamily: "sans-serif" }}>
        <div style={{ display: "flex", alignItems: "center", padding: "56px 72px 40px" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logoSrc} width={546} height={120} alt="" />
        </div>
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "0 72px",
            background: "#0A1F44",
            color: "#fff",
          }}
        >
          <div style={{ display: "flex", fontSize: 28, fontWeight: 600, color: "rgba(255,255,255,0.6)" }}>
            Engineering the Next Dimension
          </div>
          <div style={{ display: "flex", marginTop: 18, fontSize: 64, fontWeight: 500, lineHeight: 1.08 }}>BIM modelling and detailing for construction teams</div>
          <div style={{ display: "flex", marginTop: 22, fontSize: 26, opacity: 0.8 }}>
            BIM modelling · CAD drafting · Steel, precast &amp; rebar detailing · MEP coordination
          </div>
        </div>
      </div>
    ),
    size,
  );
}
