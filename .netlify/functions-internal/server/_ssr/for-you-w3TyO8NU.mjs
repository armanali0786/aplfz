import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { a as Particles, l as Sunrise, o as Petals } from "./visuals-Db-x7Qlk.mjs";
import { t as motion } from "../_libs/framer-motion.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/for-you-w3TyO8NU.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function FinalPage() {
	const [response, setResponse] = (0, import_react.useState)(null);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "relative flex min-h-screen flex-col overflow-hidden bg-romance",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pointer-events-none absolute inset-x-0 bottom-0 h-2/3",
				style: { background: "radial-gradient(ellipse at 50% 100%, oklch(0.78 0.14 78 / 0.45) 0%, oklch(0.45 0.16 30 / 0.25) 40%, transparent 70%)" }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Particles, { count: 20 }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Petals, { count: 28 }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative z-10 flex flex-1 flex-col items-center justify-center px-6 py-16",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						y: 30
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: {
						duration: 1.4,
						ease: "easeOut"
					},
					className: "w-full max-w-2xl text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							initial: {
								opacity: 0,
								scale: .85
							},
							animate: {
								opacity: 1,
								scale: 1
							},
							transition: {
								duration: 1.6,
								delay: .3
							},
							className: "mb-8 flex justify-center",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sunrise, {})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mb-3 font-script text-xl text-gold-soft",
							children: "for you"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "font-display text-4xl font-medium italic text-gradient-gold sm:text-5xl md:text-6xl",
							children: "Thank You For Reading"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mx-auto mt-8 max-w-xl space-y-4 font-display text-lg leading-relaxed text-foreground/90 sm:text-xl",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "No matter what happens," }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "thank you for every beautiful memory." }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "If there is even a small place left in your heart for us," }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "italic text-gold-soft",
									children: "I will patiently wait."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Because some people are worth waiting for." }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-script text-3xl text-gold",
									children: "Always."
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
							initial: { opacity: 0 },
							animate: { opacity: 1 },
							transition: {
								delay: 1.2,
								duration: 1
							},
							className: "mt-10 font-script text-3xl text-gold drop-shadow-[0_0_12px_oklch(0.82_0.14_82_/_0.5)]",
							children: "— Faiz ❤️"
						}),
						!response ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							initial: {
								opacity: 0,
								y: 20
							},
							animate: {
								opacity: 1,
								y: 0
							},
							transition: {
								delay: 1.6,
								duration: .8
							},
							className: "mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => setResponse("talk"),
								className: "group relative w-full overflow-hidden rounded-full border border-gold bg-gradient-to-r from-gold/90 to-gold-soft/90 px-9 py-4 font-display text-lg italic text-background shadow-glow transition-all duration-500 hover:scale-105 sm:w-auto",
								children: "Talk To Me"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => setResponse("time"),
								className: "w-full rounded-full border border-gold/40 bg-card/40 px-9 py-4 font-display text-lg italic text-gold backdrop-blur transition-all duration-500 hover:scale-105 hover:border-gold sm:w-auto",
								children: "I Need Some Time"
							})]
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							initial: {
								opacity: 0,
								scale: .9
							},
							animate: {
								opacity: 1,
								scale: 1
							},
							transition: { duration: .8 },
							className: "mt-12 rounded-2xl border border-gold/30 bg-card/50 p-8 backdrop-blur",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-2xl italic text-gradient-gold",
								children: response === "talk" ? "Thank you. You just gave me everything." : "I understand. I'll be here, however long it takes."
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 font-script text-xl text-gold-soft",
								children: "— Faiz"
							})]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
				className: "relative z-10 pb-6 text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto flex w-full max-w-xs items-center justify-center gap-2",
					children: Array.from({ length: 7 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-[3px] flex-1 rounded-full bg-gold" }, i))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 font-display text-xs uppercase tracking-[0.3em] text-foreground/40",
					children: "7 / 7"
				})]
			})
		]
	});
}
//#endregion
export { FinalPage as component };
