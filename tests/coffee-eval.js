// Coffee-craft evaluation: every drink x people 1-8 x strength x roast x tool/pantry variants.
const { chromium } = require(process.env.PW || "playwright");
(async () => {
  const b = await chromium.launch(); const p = await b.newPage();
  await p.route(/fonts\./, r => r.abort());
  await p.addInitScript(() => { localStorage.setItem("coffee-ghor-v1", JSON.stringify({ setupDone:true, installSeen:true })); });
  await p.goto("file://" + require("path").resolve(process.argv[2] || "index.html")); await p.waitForTimeout(300);
  const res = await p.evaluate(() => {
    const RULES = {}; const fail = (rule, ctx, msg) => { (RULES[rule] ??= { n:0, fails:[] }).n++; RULES[rule].fails.push(ctx + ": " + (msg || "missing")); };
    const pass = rule => (RULES[rule] ??= { n:0, fails:[] }).n++;
    const check = (rule, ok, ctx, msg) => ok ? pass(rule) : fail(rule, ctx, msg);
    const RATIO = { cappuccino:[1.3,2.2], latte:[2.5,4], flatwhite:[1.3,2], doodh:[2.5,4], icedlatte:[2,3.5], icedmocha:[2,3.5], mocha:[2,3.5] };
    const idx = (steps, re) => steps.findIndex(x => re.test(x.t + " " + x.d));
    const nums = t => (t.match(/\d+(?:\.\d+)?/g) || []).sort().join(",");
    const base = JSON.parse(JSON.stringify(S));
    let cases = 0;
    for (const r of RECIPES) for (const people of [1,2,3,4,6,8]) for (const strength of ["halka","normal","kora"]) for (const roast of ["light","medium","dark"]) for (const kit of [{scale:false,kettle:true,thermo:false,flask:true},{scale:true,kettle:false,thermo:true,flask:false}]) for (const eq of [{moka:6,pitcher:350,g:"electric"},{moka:3,pitcher:350,g:"manual"},{moka:12,pitcher:600,g:"electric"},{moka:1,pitcher:1000,g:"manual"}]) for (const sweet of ["none","normal"]) {
      Object.assign(S, JSON.parse(JSON.stringify(base)), { drink:r.id, people, strength, roast, sweet, grinderType:eq.g, grinder:"ok", pitcher:eq.pitcher }); setMoka(eq.moka);
      Object.assign(S.inv, { beans:true, ground:false, instant:true, milk:true, sugar:true, cocoa:true, ice:true }, kit);
      const ctx = `${r.id} n=${people} ${strength}/${roast}/${sweet}${kit.scale?" +scale":""} ${eq.moka}cup/${eq.pitcher}ml/${eq.g}`;
      const pl = plan(r), en = buildSteps(r, pl, "en"), bn = buildSteps(r, pl, "bn"); cases++;
      const all = en.map(x => x.t + " " + x.d).join(" | ");
      const txt = all + bn.map(x => x.t + x.d).join(""); check("no broken text", !/undefined|NaN|null/.test(txt) && en.concat(bn).every(x => ((x.t + x.d).match(/\*\*/g) || []).length % 2 === 0), ctx, all.slice(0, 80));
      check("EN/BN same steps and numbers", en.length === bn.length && en.every((x, i) => nums(x.t + x.d) === nums(bn[i].t + bn[i].d)), ctx, en.map((x,i)=>nums(x.t+x.d)===nums(bn[i]?.t+bn[i]?.d)?"":`#${i+1}`).filter(Boolean).join(" "));
      check("serve/assemble is last", /serve|assemble|together|glass|cream on top|mix and serve/i.test(en[en.length-1].t), ctx, en[en.length-1].t);
      if (RATIO[r.id]){ const q = pl.milkPer / pl.coffeePer, [lo, hi] = RATIO[r.id]; check("milk:coffee ratio in café range", q >= lo - 1e-9 && q <= hi + 1e-9, ctx, `1:${q.toFixed(2)} (want 1:${lo}-${hi})`); }
      if (r.id === "americano"){ const q = pl.waterPer / pl.coffeePer; check("americano water:coffee 1.5-3", q >= 1.5 && q <= 3, ctx, `1:${q.toFixed(2)}`); }
      check("sugar ≤ 3 tsp per cup", (pl.sugarTsp / people) <= 3, ctx);
      if (r.instant){
        const liquid = pl.instantTbsp * 3 * 15 / Math.max(1, (en.find(x => /batch/i.test(x.t)) ? +((en[0].t.match(/(\d+) batch/)||[])[1] || 1) : 1));
        check("whip liquid ≤ 1/3 pitcher", liquid <= S.pitcher / 3 + 1, ctx, `${Math.round(liquid)} ml liquid in a ${S.pitcher} ml pitcher (foam triples)`);
        continue;
      }
      // workflow order
      const iK = idx(en, /kettle|in a pot/i), iG = idx(en, /^grind|measure .*ground/i), iMilk = idx(en, /heat all the milk/i), iBrew = idx(en, /watch the coffee/i), iFroth = idx(en, /froth the milk/i);
      check("kettle starts before grinding", iK >= 0 && iG >= 0 && iK < iG, ctx, `kettle #${iK+1}, grind #${iG+1}`);
      if (iMilk >= 0) check("milk heated after brewing (stays hot)", iMilk > iBrew, ctx, `milk #${iMilk+1}, brew #${iBrew+1}`);
      if (iFroth >= 0 && iMilk >= 0) check("froth right after heating", iFroth === iMilk + 1, ctx, `heat #${iMilk+1}, froth #${iFroth+1}`);
      // equipment limits
      if (coffeeSource() === "beans"){ const batches = +((all.match(/in (\d+) batches/) || [])[1] || 1); check("grinder ≤ 30 g per batch", pl.grams / batches <= 30, ctx, `${pl.grams} g in ${batches} batch`); }
      if (pl.frothBatches){ const mk = x => Math.round(x / 10) * 10, per = pl.milkTotal / pl.frothBatches, lim = r.froth === "thick" ? mk(S.pitcher * 0.43) : mk(S.pitcher * 0.71); check("froth batch within pitcher mark", per <= lim + 1, ctx, `${Math.round(per)} ml per batch, mark ${lim}`); }
      // heat, quality and safety cues
      if (pl.frothBatches) check("froth step names this pitcher's mark", new RegExp(`${pl.thickMark} ml`).test(all), ctx, `want ${pl.thickMark} ml`);
      if (S.grinderType === "manual" && coffeeSource() === "beans") check("manual grinder gets hand-grinding steps", /steady pace/.test(all) && !/pulse/i.test(all), ctx);
      if (r.milkMode !== "cold") check("warm the cups for hot drinks", /warm (the )?cups|cups? (with|in) hot water/i.test(all), ctx);
      if (r.milkMode === "hot") check("milk 60-65°C, not boiled", /65°C/.test(all) && /not boiling/i.test(all), ctx);
      check("safety: valve + cloth + no pressing", /valve/i.test(all) && /cloth/i.test(all) && /not press/i.test(all), ctx);
      check("safety: never leave the pot unattended", /unattended|don't walk away|stay with/i.test(all), ctx);
      check("brew step has a timer", en[iBrew] && en[iBrew].timer > 0, ctx);
      if (r.froth !== "none") check("froth step has a timer", iFroth >= 0 && en[iFroth].timer > 0, ctx);
      if (r.cocoa && sweet === "none") check("cocoa without sugar warns about bitterness", /unsweetened|bitter/i.test(all), ctx);
      if (pl.brews * pl.yieldPerBrew - pl.coffeeTotal > pl.yieldPerBrew * 0.5) check("leftover coffee gets a use", /leftover|extra coffee/i.test(all), ctx);
    }
    // option sense
    S.drink = "moka"; S.view = "setup"; renderSetup();
    const espStrength = /Strength/.test(document.querySelector("#tab-make").textContent);
    check("Espresso hides meaningless Strength", !espStrength, "setup moka", "Strength shown but the basket dose is fixed");
    Object.assign(S, base); return { cases, RULES };
  });
  const rows = Object.entries(res.RULES); let tot = 0, bad = 0;
  console.log(`${res.cases} drink/setting combinations\n`);
  for (const [k, v] of rows){ const f = v.fails.length; tot += v.n; bad += f;
    console.log(`${f ? "FAIL" : "pass"}  ${k.padEnd(42)} ${String(v.n - f).padStart(5)}/${v.n}${f ? "   e.g. " + [...new Set(v.fails)].slice(0, 2).join(" ;; ") : ""}`); }
  console.log(`\nSCORE ${((tot - bad) / tot * 100).toFixed(1)}%  (${tot - bad}/${tot} checks), ${rows.filter(([, v]) => v.fails.length).length} of ${rows.length} rules failing`);
  await b.close();
})();
