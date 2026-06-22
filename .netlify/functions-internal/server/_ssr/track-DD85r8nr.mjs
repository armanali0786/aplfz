import { c as createServerFn, i as TSS_SERVER_FUNCTION } from "./esm-B50dUWcE.mjs";
import { n as getRequestIP$1, t as getRequestHeader } from "./request-response-C5A0Toox.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/track-DD85r8nr.js
var createServerRpc = (serverFnMeta, splitImportFn) => {
	const url = "/_serverFn/" + serverFnMeta.id;
	return Object.assign(splitImportFn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var trackPageView_createServerFn_handler = createServerRpc({
	id: "f20952b97b798c786ca43a38cc5250a200980d29521f4e0697f3bf1f7df9f051",
	name: "trackPageView",
	filename: "src/lib/track.ts"
}, (opts) => trackPageView.__executeServer(opts));
var trackPageView = createServerFn({ method: "POST" }).validator((data) => data).handler(trackPageView_createServerFn_handler, async ({ data }) => {
	try {
		const { getDb } = await import("./db-BOTlyzTw.mjs");
		const forwarded = getRequestHeader("x-forwarded-for");
		const ip = (forwarded ? forwarded.split(",")[0].trim() : null) ?? getRequestHeader("x-real-ip") ?? getRequestHeader("cf-connecting-ip") ?? getRequestIP$1() ?? "unknown";
		const referer = getRequestHeader("referer") ?? null;
		const acceptLanguage = getRequestHeader("accept-language") ?? null;
		await (await getDb()).collection("page_views").insertOne({
			sessionId: data.sessionId,
			page: data.page,
			pageTitle: data.pageTitle,
			step: data.step,
			device: data.device,
			ip,
			referer,
			acceptLanguage,
			timestamp: /* @__PURE__ */ new Date()
		});
	} catch (err) {
		console.error("[tracking]", err);
	}
	return { ok: true };
});
//#endregion
export { trackPageView_createServerFn_handler };
