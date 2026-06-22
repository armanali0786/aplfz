import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { a as Particles, n as ManInRain, s as Rain } from "./visuals-Db-x7Qlk.mjs";
import { t as PageShell } from "./page-shell-Hdklc1tV.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CriqOE0F.js
var import_jsx_runtime = require_jsx_runtime();
function Page1() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageShell, {
		step: 1,
		kicker: "please read this",
		heading: "Before You Close This...",
		visual: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ManInRain, {}),
		background: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Rain, { density: 70 }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Particles, { count: 20 })] }),
		cta: {
			label: "Yes, I'll Listen ❤️",
			to: "/wrong"
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "I know you're hurt." }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "I know you're disappointed." }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "And maybe right now you don't even want to hear from me." }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "italic text-gold-soft",
				children: "But if our memories ever meant something to you, please give me a few moments."
			})
		]
	});
}
//#endregion
export { Page1 as component };
