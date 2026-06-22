import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/visuals-Db-x7Qlk.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Rain({ density = 60 }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "pointer-events-none absolute inset-0 overflow-hidden",
		children: (0, import_react.useMemo)(() => Array.from({ length: density }, (_, i) => ({
			left: Math.random() * 100,
			delay: Math.random() * 3,
			duration: .8 + Math.random() * 1.2,
			opacity: .2 + Math.random() * .5
		})), [density]).map((d, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "absolute top-0 block w-px bg-gradient-to-b from-transparent via-gold-soft/40 to-transparent",
			style: {
				left: `${d.left}%`,
				height: `${40 + Math.random() * 60}px`,
				opacity: d.opacity,
				animation: `rain-fall ${d.duration}s linear ${d.delay}s infinite`
			}
		}, i))
	});
}
function Particles({ count = 30 }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "pointer-events-none absolute inset-0 overflow-hidden",
		children: (0, import_react.useMemo)(() => Array.from({ length: count }, () => ({
			left: Math.random() * 100,
			top: Math.random() * 100,
			size: 2 + Math.random() * 4,
			delay: Math.random() * 5,
			duration: 4 + Math.random() * 6
		})), [count]).map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "absolute rounded-full bg-gold/70 blur-[1px]",
			style: {
				left: `${p.left}%`,
				top: `${p.top}%`,
				width: p.size,
				height: p.size,
				boxShadow: "0 0 8px var(--gold)",
				animation: `particle-float ${p.duration}s ease-in-out ${p.delay}s infinite`
			}
		}, i))
	});
}
function Petals({ count = 24 }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "pointer-events-none absolute inset-0 overflow-hidden",
		children: (0, import_react.useMemo)(() => Array.from({ length: count }, () => ({
			left: Math.random() * 100,
			delay: Math.random() * 8,
			duration: 8 + Math.random() * 8,
			size: 10 + Math.random() * 14,
			hue: 350 + Math.random() * 20
		})), [count]).map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
			viewBox: "0 0 32 32",
			className: "absolute -top-10",
			style: {
				left: `${p.left}%`,
				width: p.size,
				height: p.size,
				animation: `petal-fall ${p.duration}s linear ${p.delay}s infinite`,
				filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.4))"
			},
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M16 2 C22 8 28 14 16 30 C4 14 10 8 16 2 Z",
				fill: `hsl(${p.hue}, 60%, 55%)`,
				opacity: "0.85"
			})
		}, i))
	});
}
function ManInRain() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 240 240",
		className: "h-44 w-44 sm:h-56 sm:w-56",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("defs", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("radialGradient", {
				id: "moon",
				cx: "50%",
				cy: "40%",
				r: "50%",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
					offset: "0%",
					stopColor: "oklch(0.85 0.06 80)",
					stopOpacity: "0.7"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
					offset: "100%",
					stopColor: "oklch(0.85 0.06 80)",
					stopOpacity: "0"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
				id: "ground",
				x1: "0",
				x2: "0",
				y1: "0",
				y2: "1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
					offset: "0%",
					stopColor: "oklch(0.20 0.07 265)",
					stopOpacity: "0"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
					offset: "100%",
					stopColor: "oklch(0.20 0.07 265)",
					stopOpacity: "0.7"
				})]
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "170",
				cy: "70",
				r: "60",
				fill: "url(#moon)"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
				cx: "120",
				cy: "200",
				rx: "110",
				ry: "18",
				fill: "url(#ground)"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
				cx: "190",
				cy: "178",
				rx: "6",
				ry: "14",
				fill: "oklch(0.36 0.14 18 / 0.5)"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: "70",
				y1: "120",
				x2: "70",
				y2: "180",
				stroke: "oklch(0.96 0.01 80 / 0.85)",
				strokeWidth: "2.5",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "70",
				cy: "108",
				r: "9",
				fill: "oklch(0.96 0.01 80 / 0.9)"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M40 105 Q70 80 100 105",
				stroke: "oklch(0.82 0.14 82)",
				strokeWidth: "2.5",
				fill: "none",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: "70",
				y1: "105",
				x2: "70",
				y2: "120",
				stroke: "oklch(0.82 0.14 82)",
				strokeWidth: "2"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: "70",
				y1: "180",
				x2: "62",
				y2: "200",
				stroke: "oklch(0.96 0.01 80 / 0.85)",
				strokeWidth: "2.5",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: "70",
				y1: "180",
				x2: "78",
				y2: "200",
				stroke: "oklch(0.96 0.01 80 / 0.85)",
				strokeWidth: "2.5",
				strokeLinecap: "round"
			})
		]
	});
}
function BrokenHeart() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 200 180",
		className: "h-40 w-40 animate-heartbeat sm:h-48 sm:w-48",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("defs", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
				id: "heartG",
				x1: "0",
				y1: "0",
				x2: "1",
				y2: "1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
					offset: "0%",
					stopColor: "oklch(0.45 0.16 18)"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
					offset: "100%",
					stopColor: "oklch(0.25 0.10 18)"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
				id: "goldCrack",
				x1: "0",
				y1: "0",
				x2: "0",
				y2: "1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
					offset: "0%",
					stopColor: "oklch(0.92 0.14 82)"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
					offset: "100%",
					stopColor: "oklch(0.62 0.13 60)"
				})]
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M100 160 C30 110 10 70 40 40 C60 20 90 30 100 55 C110 30 140 20 160 40 C190 70 170 110 100 160 Z",
				fill: "url(#heartG)",
				stroke: "oklch(0.82 0.14 82 / 0.4)",
				strokeWidth: "1"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M100 55 L92 80 L106 100 L94 120 L102 155",
				stroke: "url(#goldCrack)",
				strokeWidth: "3",
				fill: "none",
				strokeLinecap: "round",
				style: { filter: "drop-shadow(0 0 4px oklch(0.82 0.14 82))" }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M92 80 L80 88 M106 100 L120 96 M94 120 L82 130",
				stroke: "url(#goldCrack)",
				strokeWidth: "2",
				fill: "none",
				strokeLinecap: "round",
				style: { filter: "drop-shadow(0 0 4px oklch(0.82 0.14 82))" }
			})
		]
	});
}
function MemoryTimeline() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative flex items-center gap-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute left-4 right-4 top-1/2 h-px bg-gradient-to-r from-transparent via-gold to-transparent" }), [
			"☕",
			"🌙",
			"💌",
			"🌹",
			"✨"
		].map((m, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "relative grid h-12 w-12 place-items-center rounded-full border border-gold/40 bg-card/60 text-xl shadow-glow backdrop-blur",
			style: { animation: `particle-float ${3 + i * .4}s ease-in-out ${i * .3}s infinite` },
			children: m
		}, i))]
	});
}
function MoonMemories() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 240 200",
		className: "h-44 w-56 sm:h-52 sm:w-64",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("radialGradient", {
				id: "moon2",
				cx: "50%",
				cy: "50%",
				r: "50%",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
						offset: "0%",
						stopColor: "oklch(0.95 0.04 80)"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
						offset: "60%",
						stopColor: "oklch(0.78 0.13 78 / 0.4)"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
						offset: "100%",
						stopColor: "oklch(0.78 0.13 78 / 0)"
					})
				]
			}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "120",
				cy: "90",
				r: "80",
				fill: "url(#moon2)"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "120",
				cy: "90",
				r: "34",
				fill: "oklch(0.95 0.04 80 / 0.95)"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "110",
				cy: "82",
				r: "4",
				fill: "oklch(0.78 0.10 78 / 0.5)"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "128",
				cy: "96",
				r: "3",
				fill: "oklch(0.78 0.10 78 / 0.5)"
			}),
			[
				[40, 50],
				[200, 60],
				[60, 150],
				[190, 140],
				[30, 110],
				[210, 100]
			].map(([x, y], i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: x,
				cy: y,
				r: "2",
				fill: "oklch(0.82 0.14 82)",
				style: { filter: "drop-shadow(0 0 4px oklch(0.82 0.14 82))" }
			}, i))
		]
	});
}
function RepairingHeart() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 200 180",
		className: "h-44 w-44 animate-heartbeat sm:h-52 sm:w-52",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("defs", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
				id: "repair",
				x1: "0",
				y1: "0",
				x2: "0",
				y2: "1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
					offset: "0%",
					stopColor: "oklch(0.55 0.18 18)"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
					offset: "100%",
					stopColor: "oklch(0.32 0.12 18)"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("radialGradient", {
				id: "glow",
				cx: "50%",
				cy: "50%",
				r: "50%",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
					offset: "0%",
					stopColor: "oklch(0.92 0.14 82 / 0.8)"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
					offset: "100%",
					stopColor: "oklch(0.92 0.14 82 / 0)"
				})]
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "100",
				cy: "100",
				r: "90",
				fill: "url(#glow)"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M100 160 C30 110 10 70 40 40 C60 20 90 30 100 55 C110 30 140 20 160 40 C190 70 170 110 100 160 Z",
				fill: "url(#repair)"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M100 55 L100 155",
				stroke: "oklch(0.92 0.14 82)",
				strokeWidth: "4",
				strokeLinecap: "round",
				style: { filter: "drop-shadow(0 0 8px oklch(0.92 0.14 82))" }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M85 80 L115 80 M82 105 L118 105 M88 130 L112 130",
				stroke: "oklch(0.92 0.14 82)",
				strokeWidth: "2",
				strokeLinecap: "round",
				opacity: "0.8"
			})
		]
	});
}
function TwoSilhouettes() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 280 180",
		className: "h-44 w-64 sm:h-52 sm:w-72",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
				id: "path",
				x1: "0",
				y1: "0",
				x2: "1",
				y2: "0",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
						offset: "0%",
						stopColor: "oklch(0.92 0.14 82 / 0)"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
						offset: "50%",
						stopColor: "oklch(0.92 0.14 82)"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
						offset: "100%",
						stopColor: "oklch(0.92 0.14 82 / 0)"
					})
				]
			}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M60 120 Q140 60 220 120",
				stroke: "url(#path)",
				strokeWidth: "2",
				fill: "none",
				style: { filter: "drop-shadow(0 0 8px oklch(0.92 0.14 82))" }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "60",
				cy: "100",
				r: "10",
				fill: "oklch(0.96 0.01 80 / 0.85)"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M45 165 Q60 110 75 165 Z",
				fill: "oklch(0.96 0.01 80 / 0.85)"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "220",
				cy: "100",
				r: "10",
				fill: "oklch(0.92 0.14 82 / 0.9)"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M205 165 Q220 110 235 165 Z",
				fill: "oklch(0.92 0.14 82 / 0.9)"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "140",
				cy: "78",
				r: "6",
				fill: "oklch(0.95 0.14 82)",
				style: { filter: "drop-shadow(0 0 12px oklch(0.92 0.14 82))" }
			})
		]
	});
}
function Sunrise() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 320 180",
		className: "h-44 w-72 sm:h-52 sm:w-80",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("defs", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
				id: "sky",
				x1: "0",
				y1: "0",
				x2: "0",
				y2: "1",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
						offset: "0%",
						stopColor: "oklch(0.30 0.10 30)"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
						offset: "50%",
						stopColor: "oklch(0.60 0.16 50)"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
						offset: "100%",
						stopColor: "oklch(0.82 0.14 80)"
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("radialGradient", {
				id: "sun",
				cx: "50%",
				cy: "100%",
				r: "60%",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
						offset: "0%",
						stopColor: "oklch(0.98 0.10 80)"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
						offset: "50%",
						stopColor: "oklch(0.82 0.14 80 / 0.6)"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
						offset: "100%",
						stopColor: "oklch(0.82 0.14 80 / 0)"
					})
				]
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "0",
				y: "0",
				width: "320",
				height: "180",
				rx: "16",
				fill: "url(#sky)"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
				cx: "160",
				cy: "180",
				rx: "160",
				ry: "100",
				fill: "url(#sun)"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "160",
				cy: "160",
				r: "36",
				fill: "oklch(0.98 0.10 80)",
				opacity: "0.95"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M0 160 Q80 150 160 158 T320 160 L320 180 L0 180 Z",
				fill: "oklch(0.20 0.07 265 / 0.6)"
			})
		]
	});
}
//#endregion
export { Particles as a, RepairingHeart as c, MoonMemories as i, Sunrise as l, ManInRain as n, Petals as o, MemoryTimeline as r, Rain as s, BrokenHeart as t, TwoSilhouettes as u };
