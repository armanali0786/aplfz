import { createServerFn } from "@tanstack/react-start";
import {
  getRequestIP,
  getRequestHeader,
} from "@tanstack/react-start/server";

export interface DeviceDetails {
  userAgent: string;
  browser: string;
  os: string;
  screenWidth: number;
  screenHeight: number;
  viewportWidth: number;
  viewportHeight: number;
  language: string;
  timezone: string;
  platform: string;
  isMobile: boolean;
  colorDepth: number;
  pixelRatio: number;
  memory: number | null;
  cores: number | null;
  connection: string | null;
  touchSupport: boolean;
}

export interface TrackPayload {
  sessionId: string;
  page: string;
  pageTitle: string;
  step: number;
  device: DeviceDetails;
}

export const trackPageView = createServerFn({ method: "POST" })
  .validator((data: unknown) => data as TrackPayload)
  .handler(async ({ data }) => {
    try {
      const { getDb } = await import("./db");
      const forwarded = getRequestHeader("x-forwarded-for");
      const ip =
        (forwarded ? forwarded.split(",")[0].trim() : null) ??
        getRequestHeader("x-real-ip") ??
        getRequestHeader("cf-connecting-ip") ??
        getRequestIP() ??
        "unknown";

      const referer = getRequestHeader("referer") ?? null;
      const acceptLanguage = getRequestHeader("accept-language") ?? null;

      const db = await getDb();
      await db.collection("page_views").insertOne({
        sessionId: data.sessionId,
        page: data.page,
        pageTitle: data.pageTitle,
        step: data.step,
        device: data.device,
        ip,
        referer,
        acceptLanguage,
        timestamp: new Date(),
      });
    } catch (err) {
      console.error("[tracking]", err);
    }
    return { ok: true };
  });
