import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { a as Particles, c as RepairingHeart } from "./visuals-Db-x7Qlk.mjs";
import { t as PageShell } from "./page-shell-Hdklc1tV.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/promise-BuU8Fyd-.js
var import_jsx_runtime = require_jsx_runtime();
var SplitComponent = () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageShell, {
	step: 5,
	kicker: "my promise",
	heading: "I Promise To Be Better",
	visual: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RepairingHeart, {}),
	background: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Particles, { count: 32 }),
	cta: {
		label: "One Last Thing",
		to: "/heart"
	},
	children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "I cannot change yesterday." }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "italic text-gold-soft",
			children: "But I can change myself."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto mt-4 space-y-2 rounded-2xl border border-gold/20 bg-card/40 p-6 text-left text-base sm:text-lg backdrop-blur",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "✦ I promise to learn from this mistake." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "✦ I promise to listen more." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "✦ I promise to respect your feelings." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "✦ I promise to never take your love for granted again." })
			]
		})
	]
});
//#endregion
export { SplitComponent as component };
