import { useEffect, useRef } from "react";
import { trackPageView, type DeviceDetails } from "../lib/track";

function getSessionId(): string {
  try {
    let id = localStorage.getItem("_apology_session");
    if (!id) {
      id = crypto.randomUUID();
      localStorage.setItem("_apology_session", id);
    }
    return id;
  } catch {
    return crypto.randomUUID();
  }
}

function parseBrowser(ua: string): string {
  if (/Edg\//i.test(ua)) return "Edge";
  if (/OPR\//i.test(ua) || /Opera/i.test(ua)) return "Opera";
  if (/Chrome\//i.test(ua) && !/Chromium/i.test(ua)) return "Chrome";
  if (/Chromium/i.test(ua)) return "Chromium";
  if (/Firefox\//i.test(ua)) return "Firefox";
  if (/Safari\//i.test(ua)) return "Safari";
  return "Unknown";
}

function parseOS(ua: string): string {
  if (/Windows NT 10/i.test(ua)) return "Windows 10/11";
  if (/Windows NT 6\.3/i.test(ua)) return "Windows 8.1";
  if (/Windows NT 6\.1/i.test(ua)) return "Windows 7";
  if (/Windows/i.test(ua)) return "Windows";
  if (/iPhone OS/i.test(ua)) return "iOS";
  if (/iPad/i.test(ua)) return "iPadOS";
  if (/Android/i.test(ua)) return "Android";
  if (/Mac OS X/i.test(ua)) return "macOS";
  if (/Linux/i.test(ua)) return "Linux";
  return "Unknown";
}

function getDeviceDetails(): DeviceDetails {
  const ua = navigator.userAgent;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const nav = navigator as any;
  const connection =
    nav.connection?.effectiveType ??
    nav.mozConnection?.effectiveType ??
    nav.webkitConnection?.effectiveType ??
    null;

  return {
    userAgent: ua,
    browser: parseBrowser(ua),
    os: parseOS(ua),
    screenWidth: window.screen.width,
    screenHeight: window.screen.height,
    viewportWidth: window.innerWidth,
    viewportHeight: window.innerHeight,
    language: navigator.language,
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    platform: navigator.platform,
    isMobile: /Mobi|Android|iPhone|iPad/i.test(ua),
    colorDepth: window.screen.colorDepth,
    pixelRatio: window.devicePixelRatio ?? 1,
    memory: nav.deviceMemory ?? null,
    cores: nav.hardwareConcurrency ?? null,
    connection,
    touchSupport: "ontouchstart" in window || navigator.maxTouchPoints > 0,
  };
}

export function useTracking(page: string, pageTitle: string, step: number) {
  const tracked = useRef(false);

  useEffect(() => {
    if (tracked.current) return;
    tracked.current = true;

    const sessionId = getSessionId();
    const device = getDeviceDetails();

    trackPageView({
      data: { sessionId, page, pageTitle, step, device },
    }).catch(console.error);
  }, [page, pageTitle, step]);
}
