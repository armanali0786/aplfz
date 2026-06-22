import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { t as motion } from "../_libs/framer-motion.mjs";
import { t as getServerFnById } from "../__23tanstack-start-server-fn-resolver-BbTzIfvW.mjs";
import { g as Link, l as useLocation } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as createServerFn, i as TSS_SERVER_FUNCTION } from "./esm-B50dUWcE.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/page-shell-Hdklc1tV.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var createSsrRpc = (functionId) => {
	const url = "/_serverFn/" + functionId;
	const serverFnMeta = { id: functionId };
	const fn = async (...args) => {
		return (await getServerFnById(functionId, { origin: "server" }))(...args);
	};
	return Object.assign(fn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var trackPageView = createServerFn({ method: "POST" }).validator((data) => data).handler(createSsrRpc("f20952b97b798c786ca43a38cc5250a200980d29521f4e0697f3bf1f7df9f051"));
function getSessionId() {
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
function parseBrowser(ua) {
	if (/Edg\//i.test(ua)) return "Edge";
	if (/OPR\//i.test(ua) || /Opera/i.test(ua)) return "Opera";
	if (/Chrome\//i.test(ua) && !/Chromium/i.test(ua)) return "Chrome";
	if (/Chromium/i.test(ua)) return "Chromium";
	if (/Firefox\//i.test(ua)) return "Firefox";
	if (/Safari\//i.test(ua)) return "Safari";
	return "Unknown";
}
function parseOS(ua) {
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
function getDeviceDetails() {
	const ua = navigator.userAgent;
	const nav = navigator;
	const connection = nav.connection?.effectiveType ?? nav.mozConnection?.effectiveType ?? nav.webkitConnection?.effectiveType ?? null;
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
		touchSupport: "ontouchstart" in window || navigator.maxTouchPoints > 0
	};
}
function useTracking(page, pageTitle, step) {
	const tracked = (0, import_react.useRef)(false);
	(0, import_react.useEffect)(() => {
		if (tracked.current) return;
		tracked.current = true;
		trackPageView({ data: {
			sessionId: getSessionId(),
			page,
			pageTitle,
			step,
			device: getDeviceDetails()
		} }).catch(console.error);
	}, [
		page,
		pageTitle,
		step
	]);
}
function PageShell({ step, total = 7, kicker, heading, children, cta, background, visual }) {
	useTracking(useLocation().pathname, heading, step);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "relative flex min-h-screen flex-col overflow-hidden bg-romance",
		children: [
			background,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative z-10 flex flex-1 flex-col items-center justify-center px-6 py-16 sm:py-24",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						y: 20
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: {
						duration: .9,
						ease: "easeOut"
					},
					className: "w-full max-w-2xl text-center",
					children: [
						visual && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							initial: {
								opacity: 0,
								scale: .9
							},
							animate: {
								opacity: 1,
								scale: 1
							},
							transition: {
								duration: 1.2,
								delay: .2
							},
							className: "mb-8 flex justify-center",
							children: visual
						}),
						kicker && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mb-3 font-script text-lg text-gold-soft/90 tracking-wide",
							children: kicker
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "text-balance font-display text-4xl font-medium leading-[1.1] text-foreground sm:text-5xl md:text-6xl",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-gradient-gold italic",
								children: heading
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mx-auto mt-8 max-w-xl space-y-4 text-pretty font-display text-lg leading-relaxed text-foreground/85 sm:text-xl",
							children
						}),
						cta && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							initial: { opacity: 0 },
							animate: { opacity: 1 },
							transition: {
								delay: .8,
								duration: .8
							},
							className: "mt-12",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: cta.to,
								className: "group relative inline-flex items-center justify-center overflow-hidden rounded-full border border-gold/40 bg-gradient-to-r from-burgundy/60 via-navy/40 to-burgundy/60 px-9 py-4 font-display text-lg italic tracking-wide text-gold shadow-glow transition-all duration-500 hover:scale-105 hover:border-gold hover:text-gold",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-gold/20 to-transparent transition-transform duration-1000 group-hover:translate-x-full",
									"aria-hidden": true
								}), cta.label]
							})
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
				className: "relative z-10 pb-6 text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto flex w-full max-w-xs items-center justify-center gap-2",
					children: Array.from({ length: total }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `h-[3px] flex-1 rounded-full transition-all duration-700 ${i < step ? "bg-gold" : "bg-foreground/15"}` }, i))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-3 font-display text-xs uppercase tracking-[0.3em] text-foreground/40",
					children: [
						step,
						" / ",
						total
					]
				})]
			})
		]
	});
}
//#endregion
export { PageShell as t };
