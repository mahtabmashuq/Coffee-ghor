// Hostile and broken data: a crafted progress code, corrupt saves, absurd numbers, timer drift, Back button.
// Run: node tests/security-check.js index.html   (needs Playwright, Chromium)
const { chromium, devices } = require(process.env.PW || "playwright");
const path = require("path"), file = "file://" + path.resolve(process.argv[2] || "index.html");
const results = []; const check = (name, ok, info = "") => { results.push([name, ok]); console.log(`${ok ? "pass" : "FAIL"}  ${name}${info ? "   " + info : ""}`); };
const XSS = '<img src=x onerror="window.__pwned=1">';
(async () => {
  const b = await chromium.launch();
  const open = async (seed, opts = {}) => {
    const ctx = await b.newContext({ ...devices["iPhone 13"] }); const p = await ctx.newPage(); const errs = [];
    p.on("pageerror", e => errs.push(e.message));
    await p.addInitScript(s => { if (!sessionStorage.getItem("seeded")){ sessionStorage.setItem("seeded", 1); localStorage.setItem("coffee-ghor-v1", s); } }, typeof seed === "string" ? seed : JSON.stringify(seed));
    await p.goto(file); await p.waitForTimeout(opts.wait || 400); return { p, errs, ctx };
  };
  // 1. A crafted progress code
  { const { p, errs, ctx } = await open({ setupDone:true, installSeen:true, seenLearn:true });
    const code = "CG1." + Buffer.from(JSON.stringify({ v:1,
      set:{ mokaWater:XSS, pitcher:XSS, people:"1e9", drink:XSS, roast:"__proto__", grinderType:"turbo", lang:XSS },
      log:[{ d:XSS, t:1, n:XSS, rating:XSS }, { d:"latte", t:1700000000000, n:3e6, rating:9, ratings:"no" }, { d:"latte", t:1700000000000, n:2, rating:0 }],
      learned:{ fake1:true, fake2:true, d1:true }, quiz:{ drinks:1e300, nope:5 }, inv:{ milk:"<b>", __proto__:{ evil:true } }, past:{ xp:-5, drinks:[XSS] }, badges:[XSS, "first"] })).toString("base64");
    await p.evaluate(c => { window.__restored = importCode(c); renderAll(); }, code);
    await p.tap("nav.tabs [data-tab=tips]"); await p.waitForTimeout(300); await p.tap("nav.tabs [data-tab=inv]"); await p.waitForTimeout(300);
    await p.reload(); await p.waitForTimeout(400); await p.tap("nav.tabs [data-tab=tips]"); await p.waitForTimeout(300);
    const st = await p.evaluate(() => ({ pwned: !!window.__pwned, json: localStorage.getItem("coffee-ghor-v1"), S: { people:S.people, mokaWater:S.mokaWater, pitcher:S.pitcher, drink:S.drink, roast:S.roast, grinderType:S.grinderType, lang:S.lang, log:S.log, learned:S.learned, quiz:S.quiz, milk:S.inv.milk, xp:stats().xp, past:S.past } }));
    check("crafted code runs no script", !st.pwned);
    check("no markup survives into storage", !/<img|onerror/.test(st.json));
    check("numbers clamped", st.S.people === 20 && st.S.mokaWater === 300 && st.S.pitcher === 350, `people ${st.S.people}, water ${st.S.mokaWater}, pitcher ${st.S.pitcher}`);
    check("enums whitelisted", st.S.drink === "cappuccino" && st.S.roast === "medium" && st.S.grinderType === "electric" && st.S.lang === "en");
    check("bad log entries dropped, good ones cleaned", st.S.log.length === 2 && st.S.log.every(x => x.d === "latte" && x.n <= 20 && x.rating <= 5) && st.S.log[0].t !== st.S.log[1].t, JSON.stringify(st.S.log.map(x => [x.d, x.n, x.rating, x.t])));
    check("only real lessons and quizzes count", Object.keys(st.S.learned).join() === "d1" && st.S.quiz.drinks === 3 && !("nope" in st.S.quiz), JSON.stringify(st.S.quiz));
    check("XP stays finite", Number.isFinite(st.S.xp) && st.S.xp < 1000, `xp ${st.S.xp}`);
    check("pantry values stay booleans", st.S.milk === true);
    check("no page errors", !errs.length, errs.join(" | "));
    await ctx.close(); }
  // 2. Corrupt saves still open the app
  for (const [name, seed] of [["log is null", { setupDone:true, installSeen:true, seenLearn:true, log:null }], ["unknown grinder type", { setupDone:true, installSeen:true, seenLearn:true, grinderType:"turbo" }],
      ["roast __proto__", { setupDone:true, installSeen:true, seenLearn:true, roast:"__proto__", view:"setup", drink:"latte" }], ["ratings not an array", { setupDone:true, installSeen:true, seenLearn:true, log:[{ d:"latte", t:5, n:2, rating:4, ratings:"x" }] }],
      ["3 million people", { setupDone:true, installSeen:true, seenLearn:true, people:3e6, log:[{ d:"latte", t:5, n:3e6, rating:0 }] }], ["not JSON at all", "{{{"]]){
    const { p, errs, ctx } = await open(seed); const t0 = Date.now();
    if (typeof seed === "string"){ // unreadable save: a clean first run, starting with equipment setup
      check(`corrupt save opens: ${name}`, !!(await p.$("#onb")) && !errs.length, errs.join(" | ")); await ctx.close(); continue; }
    const ok = await p.evaluate(() => document.querySelectorAll("#tab-make .drink, #tab-make .hero").length > 0 && document.querySelector("#tab-inv").innerHTML.length > 100);
    await p.tap("nav.tabs [data-tab=tips]"); await p.waitForTimeout(200); const learn = await p.evaluate(() => document.querySelector("#tab-tips").innerHTML.length > 200);
    check(`corrupt save opens: ${name}`, ok && learn && !errs.length && Date.now() - t0 < 3000, errs.join(" | "));
    await ctx.close(); }
  // 3. XP never goes backwards when the log is trimmed
  { const { p, ctx } = await open({ setupDone:true, installSeen:true, seenLearn:true });
    const r = await p.evaluate(() => { const ids = RECIPES.map(x => x.id);
      S.log = Array.from({ length:LOG_MAX }, (_, i) => ({ d:ids[i % ids.length], n:i === 0 ? 6 : 2, t:1e12 + i * 1000, rating:i % 3 ? 4 : 0, issues:[] })); S.badges = earned(stats());
      const before = stats().xp, bb = earned(stats()).length;
      for (let i = 0; i < 30; i++) reward(() => S.log.push({ d:"latte", n:1, t:2e12 + i, rating:0, issues:[] }), true);
      return { before, after:stats().xp, len:S.log.length, bb, ba:earned(stats()).length }; });
    check("XP never drops when old drinks are folded", r.after === r.before + 30 * 20 && r.len === 400, JSON.stringify(r));
    check("badges kept after their drinks are folded", r.ba >= r.bb, `${r.bb} -> ${r.ba}`);
    await ctx.close(); }
  // 4. Timer follows the clock, not the ticks
  { const { p, ctx } = await open({ setupDone:true, installSeen:true, seenLearn:true, view:"cook", drink:"latte", step:0 });
    const r = await p.evaluate(async () => { startTimer(300); const end = Date.now() + 5000; while (Date.now() < end){} await new Promise(r => setTimeout(r, 600)); const left = tLeft; stopTimer(); return left; });
    check("timer stays right when the page is blocked", r <= 295 && r >= 293, `${r} s left after ~5.6 s`);
    await ctx.close(); }
  // 5. Back steps back inside the app
  { const { p, ctx } = await open({ setupDone:true, installSeen:true, seenLearn:true });
    await p.tap("[data-drink=latte]"); await p.tap("[data-start]"); await p.tap("[data-nav='1']"); await p.waitForTimeout(200);
    await p.goBack(); await p.waitForTimeout(300); const v1 = await p.evaluate(() => [S.view, S.step]);
    await p.goBack(); await p.waitForTimeout(300); const v2 = await p.evaluate(() => S.view);
    check("Back: steps to setup, keeping the step", v1[0] === "setup" && v1[1] === 1, JSON.stringify(v1));
    check("Back: setup to the drink list", v2 === "pick", v2);
    await ctx.close(); }
  await b.close();
  const bad = results.filter(r => !r[1]).length;
  console.log(`\n${results.length - bad}/${results.length} security and robustness checks pass`);
  process.exit(bad ? 1 : 0);
})();
