// Finds text crammed against (or spilling out of) the walls of its box, on every screen.
const { chromium, devices } = require(process.env.PW || "playwright");
const UA = "Mozilla/5.0 (iPhone; CPU iPhone OS 18_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.5 Mobile/15E148 Safari/604.1";
const SCAN = () => {
  const cv = document.createElement("canvas").getContext("2d");
  const solid = c => { cv.fillStyle = "#000"; cv.fillStyle = c; return c !== "rgba(0, 0, 0, 0)" && c !== "transparent"; };
  const bgOf = el => { for (let e = el.parentElement; e; e = e.parentElement){ const c = getComputedStyle(e).backgroundColor; if (solid(c)) return c; } return ""; };
  const isBox = el => { const cs = getComputedStyle(el);
    // a real container has a border on at least 3 sides; a bottom-only border is just a divider between rows
    const border = ["Top","Right","Bottom","Left"].filter(s => parseFloat(cs["border" + s + "Width"]) > 0 && cs["border" + s + "Style"] !== "none").length >= 3;
    const bg = solid(cs.backgroundColor) && cs.backgroundColor !== bgOf(el);
    return (border || bg) && !["HTML","BODY","MAIN","SECTION","NAV"].includes(el.tagName) && !el.classList.contains("statusbar"); };
  const visible = el => { const r = el.getBoundingClientRect(); const cs = getComputedStyle(el); return r.width > 0 && r.height > 0 && cs.visibility !== "hidden" && cs.opacity !== "0" && !el.closest(".hide"); };
  const out = []; const tw = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  for (let n; (n = tw.nextNode());){
    if (!n.textContent.trim()) continue; const el = n.parentElement; if (!el || !visible(el) || el.closest("svg,script,style")) continue;
    let box = el; while (box && !isBox(box)) box = box.parentElement; if (!box || box === document.body) continue;
    const bw = box.getBoundingClientRect(); if (bw.width <= 44 && bw.height <= 44) continue; // number badges in small circles are centered by design
    const b = box.getBoundingClientRect(), cs = getComputedStyle(box), rng = document.createRange(); rng.selectNodeContents(n);
    const bl = parseFloat(cs.borderLeftWidth), br = parseFloat(cs.borderRightWidth), bt = parseFloat(cs.borderTopWidth), bb = parseFloat(cs.borderBottomWidth);
    for (const r of rng.getClientRects()){ if (r.width < 1) continue;
      const g = { L: r.left - b.left - bl, R: b.right - br - r.right, T: r.top - b.top - bt, B: b.bottom - bb - r.bottom };
      const bad = Object.entries(g).filter(([k, v]) => v < 0 || ((k === "L" || k === "R") ? v < 8 : v < 3));
      if (bad.length){ const name = box.tagName.toLowerCase() + "." + [...box.classList].join(".");
        out.push(`${name} "${n.textContent.trim().slice(0, 28)}" ${bad.map(([k, v]) => k + Math.round(v)).join(" ")}`); }
    }
  }
  return [...new Set(out)];
};
(async () => {
  const b = await chromium.launch(); const found = {};
  for (const [w, h] of [[375, 667], [430, 932]]) for (const scheme of ["light", "dark"]){
    const tag = `${w}${scheme[0]}`;
    const fresh = async (seed) => { const ctx = await b.newContext({ viewport:{ width:w, height:h }, colorScheme:scheme, isMobile:true, hasTouch:true, userAgent:UA, permissions:["clipboard-read","clipboard-write"] });
      const p = await ctx.newPage(); await p.route(/fonts\./, r => r.abort());
      if (seed) await p.addInitScript(s => { if (!localStorage.getItem("__s")){ localStorage.setItem("__s","1"); localStorage.setItem("coffee-ghor-v1", s); } }, JSON.stringify(seed));
      await p.goto("file://" + require("path").resolve(process.argv[2] || "index.html")); await p.waitForTimeout(350); return p; };
    const scan = async (p, k) => { await p.waitForTimeout(420); for (const x of await p.evaluate(SCAN)) (found[x] ??= new Set()).add(`${k}@${tag}`); };
    // first run
    let p = await fresh(null);
    for (let i = 0; i < 4; i++){ await scan(p, "onb" + (i + 1)); if (i < 3) await p.tap("[data-onb=next]"); }
    await p.tap("[data-onb=done]"); await p.waitForTimeout(1500); if (await p.$(".sheet")) await scan(p, "install-sheet");
    await p.close();
    // a used app
    const now = Date.now(); const seed = { setupDone:true, installSeen:true, seenLearn:true, inv:{ beans:true, milk:true, sugar:true, cocoa:false },
      log:[{ d:"latte", n:3, t:now - 864e5, rating:0, issues:[] }, { d:"moka", n:1, t:now - 9e7, rating:4, issues:["bitter"] }, { d:"cappuccino", n:3, t:now - 2e5, rating:3.7, issues:["bitter","weak"], ratings:[{rating:4,issues:["bitter"]},{rating:5,issues:[]},{rating:2,issues:["bitter","weak"]}] }], learned:{ d1:true } };
    p = await fresh(seed);
    await scan(p, "pick");
    await p.tap("[data-drink=cappuccino]"); await scan(p, "setup-capp");
    await p.tap("[data-go=pick]"); await p.tap("[data-drink=mocha]"); await scan(p, "setup-mocha-missing");
    await p.tap("[data-go=pick]"); await p.tap("[data-drink=moka]"); await scan(p, "setup-espresso");
    await p.tap("[data-start]"); for (let i = 0; i < 10; i++){ if (await p.$("#tbox")) break; await p.tap("[data-nav='1']"); } await p.tap("#tbox button"); await scan(p, "cook-timer");
    await p.tap("[data-nav='1']"); await scan(p, "cook-float-timer");
    for (let i = 0; i < 20; i++){ if (!(await p.$("[data-nav='1']"))) break; await p.tap("[data-nav='1']"); } await p.waitForTimeout(2500); await scan(p, "done");
    await p.tap("[data-star='3']"); await p.tap("[data-issue=bitter]"); await scan(p, "done-rating"); await p.tap("[data-rate]"); await scan(p, "done-saved");
    await p.tap("[data-go=pick]"); await p.tap(".nudge"); await scan(p, "rate-sheet-p1"); await p.tap(".sheet [data-star='4']"); await p.tap(".sheet [data-rate]"); await scan(p, "rate-sheet-p2");
    await p.tap(".sheet [data-rate-finish]"); await scan(p, "rate-sheet-saved"); await p.tap(".sheet .sclose"); await p.waitForTimeout(450);
    await p.tap("nav.tabs [data-tab=inv]"); await scan(p, "pantry");
    await p.tap("[data-open-restore]"); await scan(p, "restore-sheet"); await p.tap(".sheet .sclose"); await p.waitForTimeout(450);
    await p.tap("[data-open-install]"); await scan(p, "install-sheet-manual"); await p.tap(".sheet .sclose"); await p.waitForTimeout(450);
    await p.tap("nav.tabs [data-tab=tips]"); await scan(p, "learn");
    await p.tap("[data-intro]"); await scan(p, "learn-intro"); await p.tap(".sheet [data-intro-close].btn"); await p.waitForTimeout(450);
    await p.tap("[data-cat=moka]"); await p.tap("[data-lesson=m1]"); await scan(p, "lesson");
    await p.tap("[data-quiz=start]"); await p.tap("[data-ans='0']"); await scan(p, "quiz-answered");
    for (let i = 0; i < 3; i++){ if (await p.$("[data-quiz=next]")){ await p.tap("[data-quiz=next]"); if (await p.$("[data-ans='1']")) await p.tap("[data-ans='1']"); } } await scan(p, "quiz-result");
    await p.close();
  }
  const rows = Object.entries(found).sort();
  for (const [k, v] of rows) console.log(k, " ::", [...v].slice(0, 5).join(" "), v.size > 5 ? `(+${v.size - 5})` : "");
  console.log(`\n${rows.length} distinct text-to-wall problems`); await b.close();
})();
