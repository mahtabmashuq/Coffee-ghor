/* ---------- Icons: one stroke set, 24px grid ---------- */
const ICONS = {
  cup:'<path d="M4 9h12v5a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5z"/><path d="M16 11h1.5a2.5 2.5 0 0 1 0 5H16"/><path d="M8 3.5c-.7 1 .7 1.7 0 3M12 3.5c-.7 1 .7 1.7 0 3"/>',
  jar:'<path d="M7 3.5h10"/><path d="M8 3.5V6L6 8.5V19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8.5L16 6V3.5"/><path d="M6 12.5h12"/>',
  learn:'<path d="M2.5 9 12 4.5 21.5 9 12 13.5z"/><path d="M6.5 11v4.5c0 1.5 2.5 3 5.5 3s5.5-1.5 5.5-3V11"/><path d="M21.5 9v5"/>',
  back:'<path d="M15 5.5 8.5 12l6.5 6.5"/>',
  next:'<path d="M9 5.5 15.5 12 9 18.5"/>',
  x:'<path d="M6 6l12 12M18 6 6 18"/>',
  clock:'<circle cx="12" cy="13" r="8"/><path d="M12 9v4l2.5 2"/><path d="M9.5 2.5h5"/>',
  users:'<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0"/><path d="M16 4.6a3.5 3.5 0 0 1 0 6.8M21.5 20a6.5 6.5 0 0 0-4-6"/>',
  minus:'<path d="M5 12h14"/>', plus:'<path d="M12 5v14M5 12h14"/>',
  check:'<path d="M5 12.5 9.5 17 19 7"/>',
  star:'<path d="M12 3.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8-5.2-2.7-5.2 2.7 1-5.8-4.3-4.1 5.9-.9z"/>',
  flame:'<path d="M12 3c3 3.6 6 6.6 6 10.5a6 6 0 0 1-12 0c0-2.4 1.4-4 2.5-5 .3 2 1.3 3 2.5 3-1-3 0-6 1-8.5z"/>',
  bolt:'<path d="M13 2.5 5 13.5h6l-1 8 8-11h-6z"/>',
  sugar:'<rect x="5" y="5" width="14" height="14" rx="2"/><path d="M5 12h14M12 5v14"/>',
  bean:'<ellipse cx="12" cy="12" rx="6" ry="8.5" transform="rotate(35 12 12)"/><path d="M8.3 17.2c2.3-2.6 1.6-7.6 7.4-10.4"/>',
  milk:'<path d="M8.5 2.5h7"/><path d="M9 2.5V6L7 9v11a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V9l-2-3V2.5"/><path d="M7 13.5c1.7-.8 3.3.8 5 0s3.3-.8 5 0"/>',
  moka:'<path d="M7 21h10l-1.6-8.5H8.6z"/><path d="M8.6 12.5 9.5 9h5l.9 3.5"/><path d="M9.5 9l-.6-4.5h6.2L14.5 9"/><path d="M15.2 6.2l3.3-1.4v4.4"/><path d="M12 4.5V2.5"/>',
  shield:'<path d="M12 3l7 3v5.2c0 4.4-3 7.9-7 9.8-4-1.9-7-5.4-7-9.8V6z"/><path d="M9 12l2 2 4-4.2"/>',
  trophy:'<path d="M8 3.5h8v5.5a4 4 0 0 1-8 0z"/><path d="M8 5.5H5a3 3 0 0 0 3 4.3M16 5.5h3a3 3 0 0 1-3 4.3"/><path d="M12 13v4M8.5 20.5h7M10 17h4v3.5h-4z"/>',
  lock:'<rect x="5" y="11" width="14" height="9.5" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/>',
  refresh:'<path d="M20 11a8 8 0 0 0-14.3-4.6L4 8.5"/><path d="M4 4v4.5h4.5"/><path d="M4 13a8 8 0 0 0 14.3 4.6l1.7-2.1"/><path d="M20 20v-4.5h-4.5"/>',
  play:'<path d="M8 5.5v13l10-6.5z"/>',
  stop:'<rect x="6.5" y="6.5" width="11" height="11" rx="2"/>',
  kettle:'<path d="M5 20.5h14l-1.4-8.3a5.7 5.7 0 0 0-11.2 0z"/><path d="M9 5.5h6M12 3.5v2"/><path d="M17.8 11.5 21 8.5"/>',
  scale:'<rect x="3" y="8.5" width="18" height="12" rx="2"/><circle cx="12" cy="14.5" r="3"/><path d="M12 14.5l1.7-1.7M8 5h8"/>',
  thermo:'<path d="M10 14V5a2 2 0 0 1 4 0v9a4 4 0 1 1-4 0z"/><path d="M12 9v7.5"/>',
  grinder:'<path d="M7 10h10l-1.2 10.5H8.2z"/><path d="M9 10V6.5h6V10"/><path d="M12 6.5V3M9.5 3h5"/>',
  frother:'<path d="M12 2.5v11"/><path d="M10 2.5h4"/><ellipse cx="12" cy="16.5" rx="3" ry="3.5"/><path d="M9.5 15h5M9.3 18h5.4"/>',
  pitcher:'<path d="M6.5 5h11l-1.3 15.5H7.8z"/><path d="M17.5 8.5l3-2.5"/><path d="M6.5 5 5 3.5"/>',
  flask:'<path d="M8.5 2.5h7v3.5h-7z"/><path d="M7.5 6h9v13a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2z"/><path d="M7.5 11h9"/>',
  ice:'<path d="M5 4h14l-2 16.5H7z"/><rect x="8.5" y="8.5" width="3.5" height="3.5" rx=".6"/><rect x="12" y="13" width="3.5" height="3.5" rx=".6"/>',
  blender:'<path d="M7 3.5h10l-1.5 11h-7z"/><path d="M7.5 14.5h9l1 6h-11z"/><path d="M11 7.5h3M11 10.5h2.5"/><circle cx="12" cy="17.6" r=".6"/>',
  cookie:'<circle cx="12" cy="12" r="8.5"/><circle cx="9" cy="9.5" r=".9"/><circle cx="14.5" cy="8.5" r=".9"/><circle cx="15" cy="14" r=".9"/><circle cx="9.5" cy="15" r=".9"/><circle cx="12" cy="12" r=".6"/>',
  choc:'<rect x="5" y="3.5" width="14" height="17" rx="2"/><path d="M5 9.2h14M5 14.8h14M12 3.5v17"/>',
  leaf:'<path d="M5 19c0-8 5-13 14-14-1 9-6 14-14 14z"/><path d="M5 19 13 11"/>',
  drop:'<path d="M12 3c3.5 4.5 6 7.6 6 11a6 6 0 0 1-12 0c0-3.4 2.5-6.5 6-11z"/>',
  can:'<path d="M6 6.5h12v13a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 6 19.5z"/><ellipse cx="12" cy="6.5" rx="6" ry="2"/><path d="M6 12h12"/>',
  spark:'<path d="M12 3v4M12 17v4M3 12h4M17 12h4M6.3 6.3l2.6 2.6M15.1 15.1l2.6 2.6M17.7 6.3l-2.6 2.6M8.9 15.1l-2.6 2.6"/>',
  compass:'<circle cx="12" cy="12" r="9"/><path d="M15.5 8.5 13.5 13.5 8.5 15.5l2-5z"/>',
  medal:'<circle cx="12" cy="15" r="5.5"/><path d="M8.5 10.7 6 3h4l2 5M15.5 10.7 18 3h-4l-2 5"/><path d="M12 12.5l.8 1.6 1.7.2-1.2 1.2.3 1.7-1.6-.8-1.6.8.3-1.7-1.2-1.2 1.7-.2z"/>',
  crowd:'<circle cx="7" cy="8" r="2.5"/><circle cx="17" cy="8" r="2.5"/><circle cx="12" cy="6.5" r="3"/><path d="M2.5 19a4.5 4.5 0 0 1 7-3.8M21.5 19a4.5 4.5 0 0 0-7-3.8M7 20a5 5 0 0 1 10 0"/>',
  share:'<path d="M12 3.5v11"/><path d="M8 7.5l4-4 4 4"/><path d="M8.5 10.5H7a1.5 1.5 0 0 0-1.5 1.5v7A1.5 1.5 0 0 0 7 20.5h10a1.5 1.5 0 0 0 1.5-1.5v-7a1.5 1.5 0 0 0-1.5-1.5h-1.5"/>',
  plusSq:'<rect x="4" y="4" width="16" height="16" rx="3.5"/><path d="M12 8.5v7M8.5 12h7"/>',
  dotsV:'<circle cx="12" cy="5.5" r="1.4" fill="currentColor"/><circle cx="12" cy="12" r="1.4" fill="currentColor"/><circle cx="12" cy="18.5" r="1.4" fill="currentColor"/>',
  dotsH:'<circle cx="5.5" cy="12" r="1.4" fill="currentColor"/><circle cx="12" cy="12" r="1.4" fill="currentColor"/><circle cx="18.5" cy="12" r="1.4" fill="currentColor"/>',
  menu:'<path d="M4 7h16M4 12h16M4 17h16"/>',
  download:'<path d="M12 4v11"/><path d="M7.5 10.5 12 15l4.5-4.5"/><path d="M5 19.5h14"/>',
  copy:'<rect x="8.5" y="8.5" width="11" height="11" rx="2"/><path d="M15.5 8.5V6a1.5 1.5 0 0 0-1.5-1.5H6A1.5 1.5 0 0 0 4.5 6v8A1.5 1.5 0 0 0 6 15.5h2.5"/>',
  paste:'<rect x="5.5" y="4.5" width="13" height="16" rx="2"/><path d="M9.5 4.5v-1h5v1"/><path d="M9 10h6M9 14h6"/>',
  phone:'<rect x="7" y="2.5" width="10" height="19" rx="2.5"/><path d="M10.5 18.5h3"/>',
  crank:'<path d="M7 11h10l-1.2 9.5H8.2z"/><path d="M9 11V8h6v3"/><path d="M12 8V4.5h5"/><circle cx="18" cy="4.5" r="1.6"/>',
  book:'<path d="M4 4.5h6a2 2 0 0 1 2 2v14a2 2 0 0 0-2-2H4z"/><path d="M20 4.5h-6a2 2 0 0 0-2 2v14a2 2 0 0 1 2-2h6z"/>'
};
const ic = (n, cls="") => `<svg class="ic ${cls}" viewBox="0 0 24 24" aria-hidden="true">${ICONS[n]||""}</svg>`;

/* ---------- State ---------- */
// Keys (halka/kora, kom/beshi) are kept from v1 so saved settings on phones still load.
const DEFAULTS = {
  drink: "cappuccino", people: 2, strength: "normal", sweet: "normal", source: "auto", roast: "medium",
  grinder: "ok",                  // ok | check | broken
  mokaWater: 300,                 // ml, 6-cup pot, just below the valve
  mokaCoffee: 28,                 // g per brew, 6-cup basket filled level
  yieldPct: 88,                   // % of water that comes out as coffee
  pitcher: 350,
  mokaSize: 6,                    // cups printed on the pot: sets mokaWater + mokaCoffee
  grinderType: "electric",        // electric | manual | none
  setupDone: false,               // first-run equipment setup finished (or skipped)
  inv: { beans:true, ground:false, instant:false, milk:true, sugar:true, cocoa:false, ice:false, condensed:false, cinnamon:false, vanilla:false,
         butterscotch:false, cookies:false, cream:false,
         kettle:true, scale:false, thermo:false, flask:true, blender:false },
  view: "pick",                   // pick | setup | cook | done
  step: 0,
  lang: "en",                     // steps language only: en | bn
  seenLearn: false,               // first-visit intro on the Learn tab
  installSeen: false,             // Home Screen prompt shown and closed
  appWelcomed: false,             // first launch of the installed app handled
  log: [],                        // [{d, n, t, rating, issues}] one per finished drink
  learned: {},                    // lessonId: true
  quiz: {},                       // categoryId: best score
  past: { xp:0, cups:0, milk:0, specials:0, drinks:[] }, // what drinks folded out of the log had earned
  badges: [],                     // badges earned, kept for good
  seenBadges: null                // badges already shown in Learn, so new ones can glow
};
const APP_VERSION = "1.2.0"; // keep in step with README.md and CHANGELOG.md
const KEY = "coffee-ghor-v1";
// Standard stovetop moka pots: cups -> [water to just below the valve (ml), coffee in a level basket (g)]
const MOKA = { 1:[60,7], 2:[100,12], 3:[150,16], 4:[200,20], 6:[300,28], 9:[450,40], 12:[600,55] };
const PITCHERS = [350, 500, 600, 1000];
const GRINDERS = { electric:["grinder","Electric grinder","Blade grinder with a button"], manual:["crank","Manual grinder","Hand crank with a grind setting"], none:["can","No grinder","I buy ground coffee"] };
function setMoka(n){ S.mokaSize = n; [S.mokaWater, S.mokaCoffee] = MOKA[n]; }
function load(){
  try{ const s = JSON.parse(localStorage.getItem(KEY)); if (s) return normalize(s); }catch(e){}
  return structuredClone(DEFAULTS);
}
function save(){ try{ localStorage.setItem(KEY, JSON.stringify(S)); }catch(e){} }

/* ---------- Saved data is untrusted: one gate for storage and progress codes ---------- */
// Every key is rebuilt from known values and sane numbers, so a corrupt save can't crash the app
// and a hand-crafted progress code can't put markup (or script) into the page.
const LOG_MAX = 400; // older drinks are folded into S.past, so XP and badges never go backwards
const isObj = v => !!v && typeof v === "object" && !Array.isArray(v);
const oneOf = (v, ok, d) => ok.includes(v) ? v : d;
const num = (v, lo, hi, d, int = true) => {
  if (typeof v === "string" && v.trim() !== "") v = +v;
  if (typeof v !== "number" || !Number.isFinite(v)) return d;
  v = Math.min(hi, Math.max(lo, v)); return int ? Math.round(v) : v;
};
const drinkIds = () => RECIPES.map(r => r.id);
function cleanEntry(x){
  if (!isObj(x) || !drinkIds().includes(x.d)) return null;
  const t = num(x.t, 1, 4102444800000, 0); if (!t) return null;
  const iss = a => Array.isArray(a) ? [...new Set(a.filter(i => typeof i === "string" && Object.hasOwn(ISSUES, i)))] : [];
  const e = { d:x.d, n:num(x.n, 1, 20, 1), t, rating:0, issues:[] };
  const cups = Array.isArray(x.ratings) ? x.ratings.slice(0, 20).map(c => isObj(c) ? { rating:num(c.rating, 1, 5, 0), issues:iss(c.issues) } : null).filter(c => c && c.rating) : [];
  if (cups.length){ e.ratings = cups; e.rating = Math.round(cups.reduce((a, c) => a + c.rating, 0) / cups.length * 10) / 10; e.issues = iss(cups.flatMap(c => c.issues)); }
  else if (x.rating){ e.rating = num(x.rating, 0, 5, 0, false); if (e.rating) e.issues = iss(x.issues); }
  if (x.bonus === SPECIAL_XP) e.bonus = SPECIAL_XP;
  return e;
}
function normalize(s){
  const d = structuredClone(DEFAULTS); if (!isObj(s)) return d;
  const E = { strength:Object.keys(STRENGTH), sweet:Object.keys(SWEET), source:["auto","beans","ground"], roast:Object.keys(ROASTS),
              grinder:["ok","check","broken"], grinderType:Object.keys(GRINDERS), lang:["en","bn"], view:["pick","setup","cook","done"] };
  for (const k in E) d[k] = oneOf(s[k], E[k], d[k]);
  d.drink = oneOf(s.drink, drinkIds(), d.drink);
  d.people = num(s.people, 1, 20, d.people);
  // Older saves have no pot size: take the one closest to the saved water level
  const w = num(s.mokaWater, 50, 600, null);
  d.mokaSize = MOKA[s.mokaSize] ? +s.mokaSize : w ? +Object.keys(MOKA).reduce((a, b) => Math.abs(MOKA[b][0] - w) < Math.abs(MOKA[a][0] - w) ? b : a) : d.mokaSize;
  d.mokaWater = w ?? MOKA[d.mokaSize][0];
  d.mokaCoffee = num(s.mokaCoffee, 5, 60, MOKA[d.mokaSize][1]);
  d.yieldPct = num(s.yieldPct, 50, 100, d.yieldPct);
  d.pitcher = num(s.pitcher, 100, 2000, d.pitcher);
  d.step = num(s.step, 0, 60, 0);
  for (const k of ["seenLearn","installSeen","appWelcomed"]) d[k] = s[k] === true;
  d.setupDone = s.setupDone === undefined ? true : s.setupDone === true; // people from before equipment setup keep their settings
  for (const k in d.inv) if (isObj(s.inv) && typeof s.inv[k] === "boolean") d.inv[k] = s.inv[k];
  // Drinks: rebuilt field by field, oldest first, one per timestamp
  const seen = new Set();
  d.log = (Array.isArray(s.log) ? s.log : []).map(cleanEntry).filter(Boolean).sort((a, b) => a.t - b.t)
    .map(e => { while (seen.has(e.t)) e.t++; seen.add(e.t); return e; });
  const lessons = CATS.flatMap(c => c.lessons.map(l => l.id));
  if (isObj(s.learned)) for (const id of lessons) if (s.learned[id] === true) d.learned[id] = true;
  if (isObj(s.quiz)) for (const c of CATS) if (s.quiz[c.id] !== undefined) d.quiz[c.id] = num(s.quiz[c.id], 0, c.quiz.length, 0);
  const P = isObj(s.past) ? s.past : {};
  d.past = { xp:num(P.xp, 0, 1e7, 0), cups:num(P.cups, 0, 1e6, 0), milk:num(P.milk, 0, 1e6, 0), specials:num(P.specials, 0, 1e6, 0),
             drinks:Array.isArray(P.drinks) ? [...new Set(P.drinks.filter(id => drinkIds().includes(id)))] : [] };
  const ids = BADGES.map(b => b[0]);
  d.badges = Array.isArray(s.badges) ? [...new Set(s.badges.filter(b => ids.includes(b)))] : [];
  d.seenBadges = Array.isArray(s.seenBadges) ? [...new Set(s.seenBadges.filter(b => ids.includes(b)))] : null;
  foldLog(d);
  return d;
}
// Keeps the log a sensible size. What an old drink earned moves into `past`, so nothing is lost.
function foldLog(st){
  while (st.log.length > LOG_MAX){
    const x = st.log.shift(), r = RECIPES.find(y => y.id === x.d) || {};
    st.past.xp += entryXP(x); st.past.cups++; if (r.milk) st.past.milk++; if (x.bonus) st.past.specials++;
    if (!st.past.drinks.includes(x.d)) st.past.drinks.push(x.d);
  }
}

/* ---------- Recipes (per person) ---------- */
// coffee: moka coffee ml, water: hot water ml, milk: ml, milkMode: hot|cold|boil, froth: thick|light|none
const RECIPES = [
  { id:"moka", name:"Espresso", desc:"Strong and black, in a small cup. Made in the moka pot.", coffee:50, water:0, milk:0, froth:"none", fixed:true },
  { id:"italian", name:"Italian Moka", desc:"Moka coffee the Italian way: cold water, low heat, a sweet whipped cremina on top.", coffee:50, water:0, milk:0, froth:"none", fixed:true, italian:true },
  { id:"americano", name:"Americano", desc:"Espresso topped up with hot water. Lighter black coffee.", coffee:60, water:120, milk:0, ratio:[1.5,3], froth:"none" },
  { id:"cappuccino", name:"Cappuccino", desc:"Espresso, hot milk and a thick layer of foam.", coffee:60, water:0, milk:100, ratio:[1.3,2.2], milkMode:"hot", froth:"thick" },
  { id:"latte", name:"Latte", desc:"Lots of milk, a thin layer of foam. Mild and creamy.", coffee:60, water:0, milk:180, ratio:[2.5,4], milkMode:"hot", froth:"light" },
  { id:"flatwhite", name:"Flat White", desc:"More coffee, less milk, smooth silky foam.", coffee:70, water:0, milk:110, ratio:[1.3,2], milkMode:"hot", froth:"light" },
  { id:"mocha", name:"Mocha", desc:"A latte with chocolate. For a sweet tooth.", coffee:60, water:0, milk:150, ratio:[2,3.5], milkMode:"hot", froth:"light", cocoa:1 },
  { id:"doodh", name:"Café au Lait", desc:"Coffee stirred into boiled, sweetened milk. Home style.", coffee:45, water:0, milk:160, ratio:[2.5,4], milkMode:"boil", froth:"light", condensedOpt:true },
  { id:"icedlatte", name:"Iced Latte", desc:"Espresso, cold milk and ice. For hot days.", coffee:60, water:0, milk:150, ratio:[2,3.5], milkMode:"cold", froth:"none", ice:5 },
  { id:"icedmocha", name:"Iced Mocha", desc:"An iced latte with chocolate.", coffee:60, water:0, milk:150, ratio:[2,3.5], milkMode:"cold", froth:"none", ice:5, cocoa:1 },
  { id:"dalgona", name:"Whipped Coffee", desc:"Whipped instant coffee on cold milk. No moka pot needed.", coffee:0, instant:1, water:0, milk:200, milkMode:"cold", froth:"none", ice:4 },
  // Frappes: chilled moka coffee blended with milk and ice. Needs a blender.
  { id:"fbutterscotch", name:"Butterscotch Frappe", desc:"Iced coffee blended smooth with butterscotch sauce.", coffee:60, water:0, milk:120, ratio:[1.5,3], milkMode:"cold", froth:"none", ice:8, frappe:"butterscotch" },
  { id:"fdarkchoc", name:"Dark Chocolate Frappe", desc:"Blended iced coffee with rich dark chocolate.", coffee:60, water:0, milk:120, ratio:[1.5,3], milkMode:"cold", froth:"none", ice:8, cocoa:2, frappe:"darkchoc" },
  { id:"fcookies", name:"Cookies & Creme Frappe", desc:"Blended with chocolate cookies and vanilla. Creamy and sweet.", coffee:45, water:0, milk:140, ratio:[2,3.5], milkMode:"cold", froth:"none", ice:8, frappe:"cookies" }
];
const STRENGTH = { halka:0.75, normal:1, kora:1.3 };
const STRENGTH_LBL = { halka:"Mild", normal:"Normal", kora:"Strong" };
const SWEET = { none:0, kom:1, normal:2, beshi:3 };
const SWEET_LBL = { none:"No sugar", kom:"Less", normal:"Normal", beshi:"More" };
// Per roast: grind time, water temp, heat, when to take off. Step texts are [en, bn].
const ROASTS = {
  light:  { lbl:"Light",
            pulse:["about 15-18 seconds in total. Light beans are hard, so grind a little finer.", "mot 15-18 sec. Light beans shokto, tai ektu beshi mihi korte hobe."],
            water:["Bring it to a full boil. Light roasts need more heat to bring out the flavour.", "Puro fute uthle namao. Light roast e beshi gorom lage flavor ber korte."],
            heat:["medium","medium"],
            pull:["Let light roasts run a little longer, but take it off as soon as it starts gurgling.", "Light roast e dhara ektu beshi cholte dao, kintu gurgle shuru holei namao."],
            black:"Light roast is best black: fruity, slightly sour.", milk:"Light roast gets lost in milk. Pick \"Strong\", or try Espresso or Americano." },
  medium: { lbl:"Medium", pulse:["about 12-15 seconds in total.","mot 12-15 sec."], water:["Heat until just before it boils.","Fute uthar thik age porjonto."], heat:["medium-low","medium-low"], pull:["",""],
            black:"Medium roast: balanced, good black.", milk:"Medium roast: balanced, good with milk." },
  mdark:  { lbl:"Medium-Dark", pulse:["about 10-12 seconds in total.","mot 10-12 sec."], water:["Heat until just before it boils.","Fute uthar thik age porjonto."], heat:["medium-low","medium-low"],
            pull:["Take it off as soon as the stream starts turning pale.","Dhara halka rong hote shuru korlei namao."],
            black:"Medium-dark can taste a bit bitter black. Try \"Mild\" strength.", milk:"Medium-dark with milk is a perfect match. Chocolatey." },
  dark:   { lbl:"Dark",
            pulse:["about 8-10 seconds in total. Dark beans are soft and grind fast. Too long turns them to powder and makes it bitter.", "mot 8-10 sec. Dark beans naram, taratari guro hoy. Beshi chalale powder hoye tita hobe."],
            water:["Boil, then let it cool for 1 minute before pouring.","Fute uthle 1 min thanda hote dao, tarpor dhalo."], heat:["low","kom"],
            pull:["Take dark roasts off EARLY, as soon as the stream turns pale. Dark roasts go bitter fast.","Dark roast e AGE namao: dhara halka hote shuru korlei. Dark taratari tita hoy."],
            black:"Dark roast is very bitter black. Add more water to the Americano, or pick \"Mild\".", milk:"Dark roast is best with milk and chocolate. The milk hides the bitterness." },
  unknown:{ lbl:"Not sure", pulse:["about 12-15 seconds in total.","mot 12-15 sec."], water:["Heat until just before it boils.","Fute uthar thik age porjonto."], heat:["medium-low","medium-low"], pull:["",""],
            black:"Roast unknown, so the app assumes medium. See \"Beans & Grinding\" in Learn.", milk:"Roast unknown, so the app assumes medium. See \"Beans & Grinding\" in Learn." }
};
const BLACK = ["moka","italian","americano"];
const roast = () => ROASTS[S.roast] || ROASTS.medium;
const INGREDIENTS = {
  beans:["bean","Whole coffee beans","Need the grinder"],
  ground:["bean","Ground coffee","Works even if the grinder is broken"],
  instant:["can","Instant coffee","For Whipped Coffee"],
  milk:["milk","Milk","Full-cream milk makes the best foam"],
  sugar:["sugar","Sugar",""],
  cocoa:["choc","Cocoa powder or chocolate","For Mocha"],
  ice:["ice","Ice","For iced drinks"],
  condensed:["can","Condensed milk","Optional, for Café au Lait"],
  cinnamon:["leaf","Cinnamon","Optional topping for Cappuccino"],
  vanilla:["drop","Vanilla essence","Optional, for a vanilla Latte"],
  butterscotch:["drop","Butterscotch or caramel sauce","For Butterscotch Frappe"],
  cookies:["cookie","Chocolate sandwich cookies","Like Oreo, for Cookies & Creme Frappe"],
  cream:["milk","Whipped cream","Optional topping for Frappes"]
};
const TOOLS = {
  kettle:["kettle","Kettle","Without one, the app has you heat water in a pot"],
  scale:["scale","Kitchen scale","With one, amounts are shown in grams. Without, in spoons"],
  thermo:["thermo","Milk thermometer","Lets you hit the right milk temperature exactly"],
  flask:["flask","Flask or insulated jug","Keeps coffee hot between moka brews"],
  blender:["blender","Blender","Needed for Frappes"]
};
const plural = (n, one, many) => `${n} ${n === 1 ? one : many}`;

/* ---------- Step scenes: a small animated picture of what your hands are doing ---------- */
// 240 x 132 stage, counter top at y=120. Built from a few parts so every scene shares one look.
let scId = 0;
const BY = 120;
const steamP = (x, y, n = 3, gap = 8) => Array.from({ length:n }, (_, i) => `<path class="st a-steam d${i * 2}" d="M${x + (i - (n - 1) / 2) * gap} ${y}c-4-4 4-7 0-11c-4-4 4-7 0-11"/>`).join("");
const flames = (cx, small) => `<rect class="mt2" x="${cx - 28}" y="${BY - 4}" width="56" height="5" rx="2.5"/>` + [-12, 0, 12].map((d, i) => {
  const x = cx + d, h = small ? 8 : 13;
  return `<g class="a-flick d${i}"><path class="fl" d="M${x} ${BY - 4}c-${h * .34}-${h * .2}-${h * .34}-${h * .66} 0-${h}c${h * .34} ${h * .36} ${h * .34} ${h * .8} 0 ${h}z"/><path class="fl2" d="M${x} ${BY - 4}c-${h * .15}-${h * .1}-${h * .15}-${h * .35} 0-${h * .5}c${h * .15} ${h * .18} ${h * .15} ${h * .4} 0 ${h * .5}z"/></g>`;
}).join("");
const sparkle = (x, y, cls = "") => `<path class="ln thin a-twinkle ${cls}" style="stroke:var(--gold)" d="M${x} ${y - 5}v10M${x - 5} ${y}h10"/>`;
// Moka pot. o.by: bottom, o.cut: see-through top chamber, o.open: lid up, o.base: lower chamber only, o.fill: coffee rising inside
function mokaPot(cx, o = {}){
  const by = o.by ?? BY - 5, id = "mk" + (++scId);
  const top = `M${cx - 15} ${by - 30}L${cx + 15} ${by - 30}L${cx + 18} ${by - 60}L${cx - 18} ${by - 60}Z`;
  const lid = `<g transform="rotate(${o.open ? 38 : 0} ${cx + 19} ${by - 60})"><path class="mt" d="M${cx - 19} ${by - 60}L${cx + 19} ${by - 60}L${cx + 16} ${by - 66}L${cx - 16} ${by - 66}Z"/><circle class="mt2" cx="${cx}" cy="${by - 69}" r="3"/></g>`;
  const base = `<path class="${o.water ? "gl" : "mt"}" d="M${cx - 19} ${by}L${cx + 19} ${by}L${cx + 15} ${by - 26}L${cx - 15} ${by - 26}Z"/>`;
  if (o.base) return base;
  return `${base}<circle class="mt2" cx="${cx + 8}" cy="${by - 16}" r="2.4"/><rect class="mt2" x="${cx - 16}" y="${by - 30}" width="32" height="4" rx="1"/>
    <path class="hd" d="M${cx + 17} ${by - 56}h11l-2 21h-9"/><path class="mt" d="M${cx - 17} ${by - 57}L${cx - 28} ${by - 64}L${cx - 18} ${by - 61}Z"/>
    <path class="${o.cut ? "gl" : "mt"}" d="${top}"/>
    ${o.cut ? `<clipPath id="${id}"><path d="${top}"/></clipPath><g clip-path="url(#${id})"><rect class="cof a-fill" x="${cx - 20}" y="${by - 50}" width="40" height="22"/></g>
      <rect class="mt2" x="${cx - 2}" y="${by - 52}" width="4" height="23"/>${[0, 1, 2].map(i => `<circle class="cof a-rise d${i * 2}" cx="${cx + (i - 1) * 2}" cy="${by - 53}" r="2.4"/>`).join("")}` : ""}
    ${lid}`;
}
const glassP = (cx, w, h, by = BY - 1) => `M${cx - w / 2} ${by - h}L${cx + w / 2} ${by - h}L${cx + w / 2 - 4} ${by}L${cx - w / 2 + 4} ${by}Z`;
const mug = (cx, by = BY - 1) => `M${cx - 24} ${by - 50}h48l-4 44a6 6 0 0 1-6 6h-28a6 6 0 0 1-6-6z`;
const SCENES = {
  kettle: () => `<path class="br" d="M96 ${BY}L144 ${BY}L140 ${BY - 24}Q120 ${BY - 46} 100 ${BY - 24}Z"/>
    <path class="br" d="M100 ${BY - 14}L84 ${BY - 32}L88 ${BY - 35}L102 ${BY - 23}Z"/><path class="hd" d="M107 ${BY - 38}Q120 ${BY - 58} 133 ${BY - 38}"/>
    <circle class="mt2" cx="120" cy="${BY - 37}" r="3"/>${steamP(86, BY - 38, 3, 7)}${flames(120)}`,
  grind: () => `<g class="a-buzz"><rect class="br" x="103" y="${BY - 36}" width="34" height="36" rx="5"/><rect class="mt2" x="137" y="${BY - 25}" width="5" height="9" rx="1.5"/>
    <path class="gl" d="M103 ${BY - 36}Q103 ${BY - 64} 120 ${BY - 64}Q137 ${BY - 64} 137 ${BY - 36}Z"/>
    ${[[112, -44], [122, -48], [128, -41], [116, -52], [125, -55]].map(([x, y], i) => `<ellipse class="bn a-bob d${i}" cx="${x}" cy="${BY + y}" rx="3.4" ry="2.3"/>`).join("")}</g>
    ${[0, 1, 2].map(i => `<path class="ln thin a-twinkle d${i * 2}" d="M${92 - i * 3} ${BY - 50 + i * 12}h-8M${148 + i * 3} ${BY - 50 + i * 12}h8"/>`).join("")}`,
  crank: () => `<rect class="br" x="105" y="${BY - 34}" width="30" height="34" rx="3"/><circle class="mt2" cx="120" cy="${BY - 13}" r="2.4"/>
    <path class="mt" d="M107 ${BY - 34}L101 ${BY - 54}L139 ${BY - 54}L133 ${BY - 34}Z"/>${[[112, -47], [121, -50], [128, -46]].map(([x, y], i) => `<ellipse class="bn a-bob d${i}" cx="${x}" cy="${BY + y}" rx="3.2" ry="2.2"/>`).join("")}
    <rect class="mt2" x="117" y="${BY - 62}" width="6" height="8"/><g class="a-crank" style="transform-box:view-box;transform-origin:120px ${BY - 62}px"><path class="hd" style="stroke-width:3.5" d="M120 ${BY - 62}h24"/><circle class="br" cx="146" cy="${BY - 62}" r="4.5"/></g>`,
  measure: () => `<path class="br" d="M62 ${BY}h34v-38l-6-6h-22l-6 6z"/><rect class="mt2" x="66" y="${BY - 30}" width="26" height="12" rx="2"/>
    <path class="gl" d="M136 ${BY - 28}h44l-5 28h-34z"/><rect class="gr a-fill" x="140" y="${BY - 14}" width="36" height="13"/>
    <g class="a-tip" style="transform-origin:0% 50%"><ellipse class="mt" cx="148" cy="${BY - 50}" rx="9" ry="5"/><path class="hd" style="stroke-width:3.5" d="M139 ${BY - 51}h-26"/></g>
    ${[0, 1, 2, 3].map(i => `<circle class="gr a-fall d${i}" cx="${150 + (i % 2) * 6}" cy="${BY - 42}" r="1.8"/>`).join("")}`,
  water: o => `${o.cold ? `<path class="mt" d="M96 22h40v10h-14v8h-10v-8H96z"/><rect class="wt a-stream" style="transform-origin:50% 0" x="113" y="40" width="5" height="46"/>`
      : `<g transform="translate(70 34) rotate(25)"><path class="br" d="M-22 24L22 24L18 0Q0-20-18 0Z"/><path class="br" d="M18 12L34-4L30-7L16 2Z"/><path class="hd" d="M-12-6Q0-24 12-6"/></g>
         <path class="wt a-stream" style="transform-origin:50% 0" d="M102 44q9 12 11 42h5q-3-30-12-42z"/>`}
    ${(() => { const id = "w" + (++scId), p = `M96 ${BY - 1}L140 ${BY - 1}L136 ${BY - 35}L100 ${BY - 35}Z`;
      return `<path class="gl" d="${p}"/><clipPath id="${id}"><path d="${p}"/></clipPath><g clip-path="url(#${id})"><rect class="wt a-fill" x="92" y="${BY - 25}" width="52" height="25"/></g>
      <path class="dash" d="M88 ${BY - 25}h60"/><circle class="mt2" cx="128" cy="${BY - 21}" r="3"/>`; })()}`,
  basket: () => { const id = "b" + (++scId), p = `M98 ${BY - 46}L142 ${BY - 46}L136 ${BY - 26}L104 ${BY - 26}Z`;
    return `<path class="gl" d="${p}"/><rect class="gl" x="116" y="${BY - 26}" width="8" height="26"/><clipPath id="${id}"><path d="${p}"/></clipPath>
    <g clip-path="url(#${id})"><rect class="gr a-fill" x="96" y="${BY - 46}" width="48" height="20"/></g>
    ${[0, 1, 2, 3, 4].map(i => `<circle class="gr a-fall d${i}" cx="${108 + i * 6}" cy="${BY - 70}" r="1.8"/>`).join("")}
    <rect class="mt2 a-swipe" x="104" y="${BY - 50}" width="34" height="4" rx="2"/>
    <g transform="translate(186 ${BY - 62})"><path class="ln" d="M0 0v18M-5 13l5 5 5-5"/><path class="no" d="M-9 2l18 18M9 2l-18 18"/></g>`; },
  sugar: () => `${[0, 1, 2].map(i => `<rect class="sg a-drop d${i * 2}" x="${112 + (i - 1) * 9}" y="${BY - 40}" width="9" height="9" rx="1.6"/>`).join("")}
    <path class="mt" d="M94 ${BY - 34}h52l-5 28a6 6 0 0 1-6 6h-30a6 6 0 0 1-6-6z"/><path class="hd" d="M145 ${BY - 28}q12 0 10 10t-12 6"/>`,
  heat: o => `${flames(120, o.low)}${mokaPot(120, { open:true, by:BY - 15 })}`,
  brew: o => `${flames(120, o.low)}${mokaPot(120, { open:true, cut:true, by:BY - 15 })}${steamP(118, BY - 82, 2, 10)}`,
  cool: () => `<path class="mt" d="M70 18h52v10h-18v8h-12v-8H70z"/><rect class="wt a-stream" style="transform-origin:50% 0" x="94" y="36" width="8" height="${BY - 64}"/>
    <g class="a-cool">${mokaPot(98, { base:true, by:BY - 1 })}</g>
    ${[0, 1, 2, 3].map(i => `<circle class="wt a-gush d${i}" cx="${80 + i * 12}" cy="${BY - 30}" r="2.2"/>`).join("")}${steamP(140, BY - 22, 2, 8)}`,
  cremina: () => `<path class="mt" d="M94 ${BY - 40}h52l-5 32a6 6 0 0 1-6 6h-30a6 6 0 0 1-6-6z"/><ellipse class="cof a-tint" cx="120" cy="${BY - 38}" rx="24" ry="4.5"/>
    <g class="a-orbit"><path class="hd" style="stroke-width:3.5" d="M124 ${BY - 40}l12-34"/></g>${sparkle(84, BY - 56)}${sparkle(158, BY - 66, "d3")}`,
  again: () => `${mokaPot(104)}<g class="a-spin" style="animation-duration:2.4s"><path class="ln" style="stroke:var(--brand);stroke-width:3" d="M164 ${BY - 70}a18 18 0 1 1-17 12"/><path class="ln" style="stroke:var(--brand);stroke-width:3" d="M141 ${BY - 62}l6 4 3-7"/></g>`,
  milk: () => { const id = "p" + (++scId), p = `M88 ${BY - 34}h64v26a6 6 0 0 1-6 6H94a6 6 0 0 1-6-6z`;
    return `<path class="gl" d="${p}"/><clipPath id="${id}"><path d="${p}"/></clipPath><g clip-path="url(#${id})"><rect class="mk" x="86" y="${BY - 26}" width="68" height="26"/>
    ${[0, 1, 2, 3].map(i => `<circle class="fm a-rise d${i}" cx="${[93, 147, 97, 143][i]}" cy="${BY - 26}" r="2.4" style="stroke:var(--line)"/>`).join("")}</g>
    <path class="hd" d="M152 ${BY - 28}h34"/><g transform="rotate(18 112 ${BY - 50})"><rect class="sg" x="109" y="${BY - 66}" width="6" height="40" rx="3"/><circle class="fl" cx="112" cy="${BY - 27}" r="4"/></g>
    ${steamP(130, BY - 40, 3, 9)}${flames(120)}`; },
  froth: o => { const id = "f" + (++scId), p = `M100 ${BY - 62}h40l-4 61h-32z`;
    return `<path class="gl" d="${p}"/><path class="mt" d="M100 ${BY - 62}l-8-4 6-2z"/><path class="hd" d="M139 ${BY - 56}q14 2 10 20t-11 10"/>
    <clipPath id="${id}"><path d="${p}"/></clipPath><g clip-path="url(#${id})"><rect class="mk" x="98" y="${BY - 30}" width="44" height="30"/>
    <rect class="fm a-fill" style="stroke:var(--line)" x="98" y="${BY - (o.thick ? 52 : 40)}" width="44" height="${o.thick ? 22 : 10}"/>
    ${[0, 1, 2].map(i => `<circle class="fm a-rise d${i * 2}" cx="${110 + i * 10}" cy="${BY - 28}" r="2" style="stroke:var(--line)"/>`).join("")}</g>
    <rect class="br" x="116" y="${BY - 104}" width="8" height="30" rx="3"/><path class="ln" d="M120 ${BY - 74}v44"/><ellipse class="mt2 a-whisk" cx="120" cy="${BY - 28}" rx="6" ry="2.6"/>`; },
  chill: () => `<path class="gl" d="M68 ${BY - 34}h104q-4 34-52 34t-52-34z"/><path class="wt" style="opacity:.6" d="M72 ${BY - 26}h96q-6 24-48 24t-48-24z"/>
    <rect class="gl" x="106" y="${BY - 72}" width="28" height="56" rx="4"/><rect class="cof" x="109" y="${BY - 52}" width="22" height="33" rx="2"/>
    ${[[80, -30], [92, -22], [150, -30], [160, -24]].map(([x, y], i) => `<rect class="ic3 a-bob d${i}" x="${x}" y="${BY + y}" width="10" height="10" rx="2"/>`).join("")}
    ${sparkle(86, BY - 62)}${sparkle(156, BY - 74, "d2")}${sparkle(176, BY - 50, "d4")}`,
  blend: () => { const id = "bl" + (++scId), p = `M99 ${BY - 86}h42l-5 64h-32z`;
    return `<g class="a-buzz" style="animation-duration:.9s"><rect class="br" x="96" y="${BY - 22}" width="48" height="22" rx="4"/><circle class="mt2" cx="112" cy="${BY - 11}" r="3"/><circle class="mt2" cx="128" cy="${BY - 11}" r="3"/>
    <path class="gl" d="${p}"/><clipPath id="${id}"><path d="${p}"/></clipPath><g clip-path="url(#${id})"><rect class="cof2" x="96" y="${BY - 66}" width="50" height="46"/>
    <g class="a-spinf" style="transform-box:view-box;transform-origin:120px ${BY - 44}px">${[[0, -14], [12, 8], [-12, 8]].map(([x, y]) => `<rect class="ic3" x="${116 + x}" y="${BY - 48 + y}" width="8" height="8" rx="1.6"/>`).join("")}</g>
    <path class="ln thin a-spinf" style="stroke:var(--c-foam)" d="M108 ${BY - 44}q12-10 24 0q-12 10-24 0"/></g>
    <rect class="mt2" x="97" y="${BY - 92}" width="46" height="7" rx="2"/></g>`; },
  whip: () => `<path class="mt" d="M84 ${BY - 34}h72q-4 34-36 34t-36-34z"/><path class="wh a-fill" style="transform-origin:50% 100%" d="M90 ${BY - 34}q6-12 14-8q4-12 16-8q10-10 18 2q8-2 12 14z"/>
    <g class="a-orbit"><rect class="br" x="128" y="${BY - 96}" width="8" height="28" rx="3"/><path class="ln" d="M132 ${BY - 68}v26"/></g>${sparkle(80, BY - 60)}${sparkle(164, BY - 52, "d3")}`,
  spoons: () => `<path class="mt" d="M84 ${BY - 34}h72q-4 34-36 34t-36-34z"/>
    ${[0, 1, 2, 3].map(i => `<circle class="cof a-drop d${i}" cx="${104 + i * 3}" cy="${BY - 46}" r="2.2"/>`).join("")}
    <rect class="sg a-drop d3" x="116" y="${BY - 48}" width="9" height="9" rx="1.6"/><path class="wt a-drop d5" d="M136 ${BY - 50}c3 4 4 6 4 8a4 4 0 0 1-8 0c0-2 1-4 4-8z"/>`,
  glass: o => { const id = "g" + (++scId), p = glassP(120, 46, 82);
    return `<path class="gl" d="${p}"/><clipPath id="${id}"><path d="${p}"/></clipPath><g clip-path="url(#${id})">
    <rect class="mk a-fill" x="94" y="${BY - 56}" width="52" height="56"/>${o.coffee ? `<rect class="cof2 a-fill d2" x="94" y="${BY - 74}" width="52" height="20"/>` : ""}
    ${[0, 1, 2].map(i => `<rect class="ic3 a-drop d${i * 2}" x="${106 + i * 10}" y="${BY - 30 - i * 14}" width="12" height="12" rx="2.4"/>`).join("")}</g>
    ${o.coffee ? `<rect class="cof a-stream" style="transform-origin:50% 0" x="128" y="8" width="4" height="${BY - 84}"/>` : ""}`; },
  creamtop: () => { const id = "c" + (++scId), p = glassP(120, 46, 82);
    return `<path class="gl" d="${p}"/><clipPath id="${id}"><path d="${p}"/></clipPath><g clip-path="url(#${id})"><rect class="mk" x="94" y="${BY - 60}" width="52" height="60"/>
    ${[0, 1].map(i => `<rect class="ic3" x="${106 + i * 14}" y="${BY - 50 + i * 16}" width="12" height="12" rx="2.4"/>`).join("")}</g>
    <path class="wh a-drop" d="M104 ${BY - 82}q4-14 16-12q12-2 16 12z"/>`; }
};
// The finished drink, filled layer by layer to this recipe's real proportions.
function serveScene(r){
  const cold = r.milkMode === "cold", small = r.id === "moka" || r.id === "italian", L = [];
  if (r.coffee) L.push([r.water ? "cof2" : "cof", r.coffee + r.water]);
  if (r.milk){ const foam = r.froth === "thick" ? .4 : r.froth === "light" ? .15 : 0; L.push([cold && r.frappe ? "cof2" : "mk", r.milk * (1 - foam)]); if (foam) L.push(["fm", r.milk * foam]); }
  if (!L.length) L.push(["cof", 50]);
  const id = "s" + (++scId), shape = small ? `M100 ${BY - 40}h40l-4 30a6 6 0 0 1-6 6h-20a6 6 0 0 1-6-6z` : cold ? glassP(120, 46, 86) : mug(120);
  const top = small ? BY - 38 : cold ? BY - 82 : BY - 47, bot = small ? BY - 4 : BY - 1, total = L.reduce((a, [, v]) => a + v, 0), H = (bot - top) * (small ? .85 : Math.min(1, total / 260) * .85 + .1);
  let y = bot, rects = "";
  L.forEach(([c, v], i) => { const h = H * v / total; y -= h; rects += `<rect class="${c} a-fill1" style="animation-delay:${.2 + i * .7}s" x="90" y="${y.toFixed(1)}" width="60" height="${(h + .6).toFixed(1)}"/>`; });
  const extra = cold
    ? (r.frappe ? `<path class="fm a-pop" style="animation-delay:2.4s;stroke:var(--line)" d="M98 ${y + 2}q2-14 12-10q4-10 12-4q8-8 12 4q8 0 8 10z"/><path class="ln a-pop" style="animation-delay:2.9s;stroke:var(--c-whip);stroke-width:2.4" d="M102 ${y - 4}q8 6 16-2t16 2"/><path class="hd a-pop" style="animation-delay:3.2s;stroke:var(--bad);stroke-width:3.4" d="M130 ${y - 2}l10-24"/>`
             : [0, 1].map(i => `<rect class="ic3 a-drop1" style="animation-delay:${.3 + i * .4}s" x="${108 + i * 14}" y="${y + 6 + i * 8}" width="11" height="11" rx="2.2"/>`).join(""))
    : steamP(120, top - 6, 3, 10) + (r.italian ? `<ellipse class="wh a-pop" style="animation-delay:1.4s" cx="120" cy="${y}" rx="13" ry="4"/>` : "");
  return `<path class="gl" d="${shape}"/>${small ? `<ellipse class="mt2" cx="118" cy="${BY}" rx="34" ry="3"/>` : !cold ? `<path class="hd" d="M144 ${BY - 42}q16 0 14 14t-16 10"/>` : ""}
    <clipPath id="${id}"><path d="${shape}"/></clipPath><g clip-path="url(#${id})">${rects}</g>${extra}${sparkle(76, BY - 76, "d4")}${sparkle(166, BY - 60, "d6")}`;
}
function scene(a, o = {}, r){
  const f = a === "serve" ? () => serveScene(r) : SCENES[a];
  return f ? `<div class="stage" aria-hidden="true"><svg viewBox="0 0 240 132" preserveAspectRatio="xMidYMid meet"><path class="counter" d="M20 ${BY + 1}h200"/>${f(o)}</svg></div>` : "";
}

/* ---------- Cup illustration: layers drawn to the recipe's real proportions ---------- */
function cup(r, tag=""){
  const W = 40, H = 44, top = 4, bot = 40, inner = bot - top;
  const L = [];
  if (r.instant){ L.push(["--c-milk", r.milk], ["--c-whip", 60]); }
  else {
    if (r.coffee) L.push([r.water ? "--c-water" : "--c-coffee", r.coffee + r.water]);
    if (r.milk){
      const foam = r.froth === "thick" ? .4 : r.froth === "light" ? .15 : 0;
      L.push(["--c-milk", r.milk * (1 - foam)]);
      if (foam) L.push(["--c-foam", r.milk * foam]);
    }
    if (r.frappe) L.push(["--c-whip", 45]);
  }
  const total = L.reduce((a, [, v]) => a + v, 0), fill = Math.min(1, total / 260);
  let y = bot, rects = "";
  for (const [c, v] of L){
    const h = inner * fill * v / total; y -= h;
    rects += `<rect x="0" y="${y.toFixed(1)}" width="${W}" height="${h.toFixed(1)}" fill="var(${c})"/>`;
  }
  if (r.ice) rects += [[8, bot - 12], [20, bot - 20], [13, bot - 27]].map(([x, yy]) => `<rect x="${x}" y="${yy}" width="9" height="9" rx="2" fill="none" stroke="var(--card)" stroke-width="1.5" opacity=".8"/>`).join("");
  const path = `M6 ${top} L34 ${top} L31 ${bot} Q30.5 ${bot + 2} 28 ${bot + 2} L12 ${bot + 2} Q9.5 ${bot + 2} 9 ${bot} Z`;
  const id = `c-${r.id}${tag}`;
  return `<svg class="cupsvg" viewBox="0 0 ${W} ${H}" aria-hidden="true"><defs><clipPath id="${id}"><path d="${path}"/></clipPath></defs>
    <g clip-path="url(#${id})">${rects}</g><path d="${path}" fill="none" stroke="var(--muted)" stroke-width="1.5"/></svg>`;
}

/* ---------- Logic ---------- */
const grinderOk = () => S.grinderType !== "none" && S.grinder === "ok";
function coffeeSource(){
  const beansOk = S.inv.beans && grinderOk();
  if (S.source === "beans" && beansOk) return "beans";
  if (S.source === "ground" && S.inv.ground) return "ground";
  if (beansOk) return "beans";
  if (S.inv.ground) return "ground";
  return null;
}
function missing(r){
  const m = [];
  if (r.coffee > 0 && !coffeeSource()){
    if (S.inv.beans && !grinderOk()) m.push(S.grinderType === "none" ? "a grinder (or ground coffee)" : "a working grinder (or ground coffee)");
    else m.push("coffee (beans or ground)");
  }
  if (r.instant && !S.inv.instant) m.push("instant coffee");
  if (r.instant && !S.inv.sugar) m.push("sugar (needed for whipping)");
  if (r.milk > 0 && !S.inv.milk) m.push("milk");
  if (r.cocoa && !S.inv.cocoa) m.push("cocoa or chocolate");
  if (r.ice && !S.inv.ice) m.push("ice");
  if (r.frappe && !S.inv.blender) m.push("a blender");
  if (r.frappe === "butterscotch" && !S.inv.butterscotch) m.push("butterscotch or caramel sauce");
  if (r.frappe === "cookies" && !S.inv.cookies) m.push("chocolate sandwich cookies");
  return m;
}
function plan(r){
  const n = S.people, f = r.fixed ? 1 : STRENGTH[S.strength]; // Espresso and Italian Moka: the basket dose is fixed, so strength can't change it
  const p = { n };
  p.coffeePer = Math.round(r.coffee * f);
  // Strength moves within the drink's café ratio, so a Strong Americano or a Mild Cappuccino is still that drink.
  // ratio = [min, max] of milk (or water) per part coffee. Americano keeps its cup size: more coffee, less water.
  if (r.ratio){
    const cupOrMilk = r.water ? r.water + r.coffee : r.milk, k = r.water ? 1 : 0;
    const lo = Math.ceil(cupOrMilk / (r.ratio[1] + k)), hi = Math.floor(cupOrMilk / (r.ratio[0] + k));
    p.coffeePer = Math.min(Math.max(p.coffeePer, lo), hi);
  }
  p.waterPer = r.water ? Math.round(r.water + r.coffee - p.coffeePer) : 0;
  p.coffeeTotal = p.coffeePer * n;
  p.yieldPerBrew = Math.round(S.mokaWater * S.yieldPct / 100);
  p.brews = p.coffeeTotal > 0 ? Math.ceil(p.coffeeTotal / p.yieldPerBrew) : 0;
  p.grams = p.brews * S.mokaCoffee;
  p.tbsp = Math.round(p.grams / 5.5);
  p.grindBatches = Math.max(1, Math.ceil(p.grams / 30)); // blade grinder: 30 g at most per go
  p.leftover = p.brews * p.yieldPerBrew - p.coffeeTotal;
  p.warmWater = r.coffee && r.milkMode !== "cold" ? 100 * n : 0; // to warm the cups
  p.milkPer = r.milk; p.milkTotal = r.milk * n;
  const mark = x => Math.round(x / 10) * 10; // round to the pitcher's marks
  p.thickMark = mark(S.pitcher * 0.43); p.lightMark = mark(S.pitcher * 0.71); // 350 pitcher: 150 / 250 marks
  const cap = r.froth === "thick" ? p.thickMark : mark(S.pitcher * 0.57); // foam roughly doubles thick, +25% silky
  p.frothCap = cap;
  p.frothBatches = r.froth !== "none" && p.milkTotal ? Math.ceil(p.milkTotal / cap) : 0;
  // Butterscotch sauce and cookies are sweet already, so frappes with them take one notch less sugar.
  p.sugarTsp = r.instant ? 0 : Math.max(0, SWEET[S.sweet] - (r.frappe && r.frappe !== "darkchoc" ? 1 : 0)) * n;
  p.cocoaTbsp = (r.cocoa || 0) * n;
  p.ice = (r.ice || 0) * n;
  // Whipped coffee triples in volume: keep each batch's liquid (3 x 15 ml per spoon each) under a third of the pitcher
  const whipMax = Math.max(2, Math.floor(S.pitcher / 135));
  p.whipBatches = r.instant ? Math.ceil(Math.max(2, r.instant * n) / whipMax) : 0;
  p.whipPer = r.instant ? Math.ceil(Math.max(2, r.instant * n) / p.whipBatches) : 0;
  p.instantTbsp = p.whipBatches * p.whipPer;
  p.hotWaterTotal = p.waterPer * n;
  p.blendBatches = r.frappe ? Math.ceil(n / 3) : 0; // a 1.5 litre blender jug fits about 3 frappes with their ice
  p.sauceTbsp = r.frappe === "butterscotch" ? 2 * n : 0;
  p.cookies = r.frappe === "cookies" ? 4 * n : 0; // 3 blended + 1 crushed on top
  p.creminaTsp = r.italian && p.sugarTsp ? Math.max(1, Math.round(p.sugarTsp / 3)) : 0; // first coffee whipped into the sugar
  // Time: ~8 min per brew + 3 min cool/refill between brews, + 4 min prep
  p.minutes = r.instant ? 6 + Math.ceil(n/2) : p.brews * 8 + Math.max(0, p.brews - 1) * 3 + 4 + (p.frothBatches > 1 ? p.frothBatches - 1 : 0)
    + (S.grinderType === "manual" && coffeeSource() === "beans" ? Math.ceil(p.grams / 10) : 0) // hand grinding: ~1 min per 10 g
    + (r.frappe ? 10 + p.blendBatches * 2 : 0) + (r.italian ? 3 : 0); // chilling and blending; low heat is slower
  return p;
}

// Steps in the chosen language. Numbers and drink names are shared; only the instructions change.
function buildSteps(r, p, lang){
  const bn = lang === "bn", L = (en, b) => bn ? b : en, R = k => roast()[k][bn ? 1 : 0];
  const I = S.inv, s = [];
  const src = coffeeSource();
  // Frappe coffee gets chilled, so it goes in a metal or glass jug, never the flask that keeps it hot.
  const jug = r.frappe ? L("metal or glass jug","steel ba kacher jug") : I.flask ? L("flask","flask") : L("warm jug with a lid","dhakna-wala gorom jug");
  if (r.instant){
    const wb = p.whipBatches > 1;
    s.push({ a:"spoons", t:L(`Make the coffee cream${wb ? ` (${p.whipBatches} batches)` : ""}`,`Coffee cream banao${wb ? ` (${p.whipBatches} batch)` : ""}`),
      d:L(`${wb ? "For each batch, in" : "In"} the pitcher: **${p.whipPer} tbsp instant coffee**, **${p.whipPer} tbsp sugar** and **${p.whipPer} tbsp hot water**. Equal amounts of each. It grows to about 3 times the size, so don't add more to one batch.`,
          `${wb ? "Proti batch e, p" : "P"}itcher e **${p.whipPer} tbsp instant coffee** + **${p.whipPer} tbsp chini** + **${p.whipPer} tbsp gorom pani** nao. Shob shoman shoman. Foam 3 gun hoy, tai ek batch e beshi dio na.`) });
    s.push({ a:"whip", t:L("Whip it with the frother","Frother diye whip koro"), timer:180,
      d:L(`FAST speed, 2 to 4 minutes. It turns light brown and thick, and won't fall off an upside-down spoon. Take a short break if your hand gets tired.${wb ? " Scoop it into a bowl, then whip the next batch." : ""}`,
          `FAST speed, 2 to 4 min. Rong halka badami hobe, ghono hobe, chamuch ulte dhorle pore jabe na. Hath byatha korle majhe ektu break nao.${wb ? " Ekta bati te tule rakho, tarpor porer batch." : ""}`) });
    s.push({ a:"glass", t:L("Fill the glasses","Glass ready koro"),
      d:L(`**${r.ice} ice cubes** and **${p.milkPer} ml cold milk** in each glass. For extra sweetness, stir a little sugar into the milk first.`,
          `Proti glass e **${r.ice} ta borof**, **${p.milkPer} ml thanda dudh**. Mishti beshi chaile dudhe ektu chini aage gholao.`) });
    s.push({ a:"creamtop", t:L("Spoon the cream on top","Upore cream dao"),
      d:L("Spoon the whipped coffee over the milk. Stir it in before drinking.","Chamuch diye coffee cream dudher upor rakho. Serve korar shomoy mix kore khabe.") });
    return s;
  }
  const amt = I.scale ? `${p.grams} g` : L(`about ${p.tbsp} tbsp`, `~${p.tbsp} tbsp`);
  const amtNote = I.scale ? L(`About **${p.tbsp} tbsp**.`, `Mot **~${p.tbsp} tbsp**.`) : L(`That's about **${p.grams} g**.`, `Mot **~${p.grams} g**.`);
  const hot = r.milkMode !== "cold", it = r.italian, fr = r.frappe;
  // Italian Moka starts the pot with cold water, so the kettle only warms the cups.
  const hotWater = it ? p.warmWater : p.brews * S.mokaWater + p.hotWaterTotal + p.warmWater;
  // 1. Kettle first: grinding happens while it heats.
  if (it) s.push({ a:"kettle", t: I.kettle ? L(`Heat ${hotWater} ml water in the kettle to warm the cups`,`Cup gorom korte kettle e ${hotWater} ml pani gorom koro`) : L(`Heat ${hotWater} ml water in a pot to warm the cups`,`Cup gorom korte patil e ${hotWater} ml pani gorom koro`),
    d:L("Start this first, then grind while it heats. In the Italian tradition the moka base gets **fresh cold water**, not hot: this water is only to warm the cups. Small cups lose heat fast, and moka coffee is drunk in a few sips.",
        "Eta age shuru koro, gorom hote hote grind koro. Italian niyome moka bottom e **taza thanda pani** dey, gorom na: ei pani shudhu cup gorom korar jonno. Choto cup taratari thanda hoye jay, ar moka coffee koyek chumuk e khawa hoy.") });
  else s.push({ a:"kettle", t: I.kettle ? L(`Heat ${hotWater} ml water in the kettle`,`Kettle e ${hotWater} ml pani gorom koro`) : L(`Heat ${hotWater} ml water in a pot`,`Patil e ${hotWater} ml pani gorom koro`),
    d:L(`Start this first, then grind while it heats. ${R("water")} Starting the moka pot with hot water means it spends less time on the stove, so the coffee doesn't burn or turn bitter.${hot ? " This includes about **100 ml per cup** to warm the cups." : ""}`,
        `Eta age shuru koro, gorom hote hote grind koro. ${R("water")} Moka te gorom pani dile coffee pora/tita hoy na, karon pot chula te kom shomoy thake.${hot ? " Er moddhe **proti cup e ~100 ml** cup gorom korar jonno." : ""}`) });
  // 2. Grind (in batches the blade grinder can handle) or measure.
  const gb = p.grindBatches > 1;
  if (src === "beans" && S.grinderType === "manual"){
    const adj = { light:[" Light roast: 1-2 clicks finer."," Light roast: 1-2 click mihi."], dark:[" Dark roast: 1-2 clicks coarser."," Dark roast: 1-2 click mota."] }[S.roast];
    s.push({ a:"crank", t:L(`Grind ${amt} of beans`,`${amt} beans grind koro`),
      d:L(`${amtNote}${gb ? ` Grind it **in ${p.grindBatches} batches**: the hopper holds about 30 g.` : ""} Set the grinder a little finer than the middle: **like table salt**.${adj ? adj[0] : ""} Turn at a steady pace, about **1 minute per 10 g**. Powder-fine makes moka coffee bitter and can clog the filter.`,
          `${amtNote}${gb ? ` **${p.grindBatches} bhage** grind koro: hopper e ~30 g dhore.` : ""} Majhamajhir cheye ektu mihi set koro: **table salt er moto**.${adj ? adj[1] : ""} Shoman gotite ghurao, **10 g e ~1 min**. Powder er moto mihi hole moka te tita hobe ar chhakni bondho hoye jabe.`) });
  } else if (src === "beans"){
    s.push({ a:"grind", t:L(`Grind ${amt} of beans`,`${amt} beans grind koro`),
      d:L(`${amtNote}${gb ? ` Grind it **in ${p.grindBatches} batches**: the grinder takes 30 g at most.` : ""} ${roast().lbl} roast: short 3-4 second pulses, ${R("pulse")} Shake the grinder between pulses. Aim for the texture of **table salt**. Powder-fine makes moka coffee bitter and can clog the filter.`,
          `${amtNote}${gb ? ` **${p.grindBatches} bhage** grind koro: grinder e ekbare 30 g er beshi na.` : ""} ${roast().lbl} roast: 3-4 second er pulse, ${R("pulse")} Majhe majhe grinder jhakao. Target: **table salt er moto** mihi. Powder er moto mihi hole moka te tita hobe ar chhakni bondho hoye jabe.`) });
  } else {
    s.push({ a:"measure", t:L(`Measure ${amt} of ground coffee`,`${amt} guro coffee mepe nao`),
      d:L(`${amtNote} Pre-ground coffee loses flavour fast. Keep the packet sealed tight.`,
          `${amtNote} Pre-ground coffee taratari flavor haray. Packet bhalo kore bondho rakho.`) });
  }
  // 3. Brew.
  const multi = p.brews > 1 ? ` (1/${p.brews})` : "";
  if (it) s.push({ a:"water", o:{ cold:true }, t:L(`Pour cold water into the moka base${multi}`,`Moka bottom e thanda pani dhalo${multi}`),
    d:L(`Fresh, cold water, **just below the safety valve** (about ${S.mokaWater} ml). Never cover the valve. Starting cold on low heat is slower, but Italians swear it gives a rounder, sweeter cup. Pour a little hot water into the cups to warm them.`,
        `Taza thanda pani, **safety valve er thik niche** porjonto (~${S.mokaWater} ml). Valve dubbe na. Thanda pani ar kom anche shomoy beshi lage, kintu Italian ra bole coffee aro mishti ar narom hoy. Cup e ektu gorom pani dhele gorom kore nao.`) });
  else s.push({ a:"water", t:L(`Pour hot water into the moka base${multi}`,`Moka bottom e gorom pani dhalo${multi}`),
    d:L(`Fill to **just below the safety valve** (about ${S.mokaWater} ml). Never cover the valve. The base is hot: hold it with a cloth.${hot ? ` Pour a little hot water into the cups${p.brews > 1 || I.flask ? ` and the ${jug}` : ""} to warm them.` : ""}`,
        `**Safety valve er thik niche** porjonto (~${S.mokaWater} ml). Valve dubbe na. Bottom gorom, kapor diye dhoro.${hot ? ` Cup${p.brews > 1 || I.flask ? ` ar ${jug}` : ""} e ektu gorom pani dhele gorom kore nao.` : ""}`) });
  s.push({ a:"basket", t: I.scale ? L(`Put ${S.mokaCoffee} g coffee in the basket`,`Basket e ${S.mokaCoffee} g coffee dao`) : L("Fill the basket with coffee","Basket e coffee bhoro"),
    d:L("Fill it level. **Do NOT press it down.** Wipe any grounds off the rim, or it will leak.",
        "Bhore level koro, **chap dio NA** (tamp korbe na). Rim er guro mucche felo, na hole leak korbe.") });
  if (p.creminaTsp) s.push({ a:"sugar", t:L("Put the sugar in a small cup","Choto cup e chini nao"),
    d:L(`**${p.sugarTsp} tsp sugar** in a small cup or jug. This becomes the cremina: the first coffee whipped with sugar into a pale, sweet cream.`,
        `Choto cup ba jug e **${p.sugarTsp} tsp chini**. Etai cremina hobe: prothom coffee ar chini phetiye halka rong er mishti cream.`) });
  const heat = it ? L("low","kom") : R("heat");
  s.push({ a:"heat", o:{ low:it }, t:L(`Screw it together, put it on ${heat} heat`,`Pot jora lagao, ${heat} anche bosao`),
    d:L("Hold the base with a cloth and screw it on tight. Leave the lid open so you can watch.",
        "Kapor diye dhore shokto kore pyach dao. Dhakna khola rakho jate dekhte paro.") });
  const once = p.brews > 1 ? L(" (first brew only)"," (shudhu prothom brew e)") : "";
  if (p.creminaTsp) s.push({ a:"brew", o:{ low:true }, t:L("Watch the coffee come out","Coffee ber hote dekho"), timer:300,
    d:L(`**Stay with the pot: never leave it unattended.** On low heat the first coffee takes about 5 minutes. When the first dark drops appear, pour the first **${p.creminaTsp} tsp** into the sugar cup${once} and put the pot straight back on the heat. As soon as it turns pale or starts gurgling, **take it off the heat right away**.`,
        `**Pot er pashe thako, kokhono rekhe chole jabe na.** Kom anche prothom coffee ashte ~5 min lage. Prothom kalo fota gulo ashle, prothom **${p.creminaTsp} tsp** chinir cup e dhalo${once}, ar pot shathe shathe abar chula te bosao. Rong halka hole ba gurgle shuru holei **SHATHE SHATHE namao**.`) });
  else s.push({ a:"brew", o:{ low:it }, t:L("Watch the coffee come out","Coffee ber hote dekho"), timer:300,
    d:L(`**Stay with the pot: never leave it unattended.** It should flow slowly, like honey. As soon as it turns pale yellow or starts gurgling, **take it off the heat right away**. The last bit is bitter. ${R("pull")}`,
        `**Pot er pashe thako, kokhono rekhe chole jabe na.** Modhu er moto dhire dhara ashbe. Jokhon rong halka holud hoye jabe ba gurgle shobdo shuru hobe, **SHATHE SHATHE namao**. Shesh er pani ta tita. ${R("pull")}`) });
  s.push({ a:"cool", t:L("Cool the base under cold water","Bottom thanda panir niche 5 sec"), d: it && p.brews === 1
    ? L("**5 seconds.** This stops the brewing. Then stir the coffee in the top with a teaspoon: the first coffee out is strong and the last is light, so mix them.",
        "Extraction bondho hoye jay. Tarpor uporer kamrar coffee chamuch diye nara dao: prothom coffee kora, shesher ta halka, tai mishiye nao.")
    : L(`**5 seconds.** This stops the brewing so it doesn't turn bitter. Pour the coffee into a ${jug} and stir.`,
        `Extraction bondho hoye jay, tita bhab ashe na. Coffee ${jug} e dhele nara dao.`) });
  if (p.creminaTsp) s.push({ a:"cremina", t:L("Whip the cremina","Cremina phetao"), timer:60,
    d:L("Beat the sugar and coffee hard with a teaspoon for about 1 minute, until it turns pale, thick and creamy, like soft caramel. Too runny? Whip longer. Too stiff? Add a few more drops of coffee.",
        "Chamuch diye chini ar coffee jore jore ~1 min phetao, jotokkhon na halka rong, ghono ar creamy hoy (naram caramel er moto). Patla hole aro phetao. Beshi ghono hole aro koyek fota coffee dao.") });
  if (p.brews > 1){
    const k = p.brews - 1;
    s.push({ a:"again", t:L(`Brew ${plural(k, "more time", "more times")}`,`Aro ${k} bar brew koro`),
      d:L(`Cool the pot, throw out the old grounds and rinse it, then go back to "Pour ${it ? "cold" : "hot"} water into the moka base". Keep the earlier coffee covered in the ${jug}.`,
          `Pot thanda koro, puraton guro fele dhuye nao, abar "Moka bottom e ${it ? "thanda" : "gorom"} pani" step theke. Ager coffee ${jug} e dhaka diye rakho.`) });
  }
  // Frappes: sweeten while hot, chill, then blend. Hot coffee would melt the ice into a watery drink.
  if (fr){
    const su = p.sugarTsp ? L(`Stir **${p.sugarTsp} tsp sugar** into the hot coffee first: it won't dissolve once cold. `, `Gorom coffee te **${p.sugarTsp} tsp chini** AGE gholao: thanda hole mishe na. `) : "";
    const ch = fr === "darkchoc" ? L(`${su ? "Then stir in" : "Stir"} **${p.cocoaTbsp} tbsp cocoa**${su ? "" : " into the hot coffee"}, until smooth with no lumps.${su ? "" : " Using unsweetened cocoa? Add at least **1 tsp sugar** per drink now, while it's hot, or it tastes harsh."} Have a bar of dark chocolate? Melt **20 g per drink** into the hot coffee as well, for a deeper flavour. `,
                                    `${su ? "Tarpor " : "Gorom coffee te "}**${p.cocoaTbsp} tbsp cocoa** gholao, dola thakbe na.${su ? "" : " Unsweetened cocoa hole ekhoni, gorom thakte, proti drink e kom koreo **1 chamuch chini** dao, na hole kora lagbe."} Dark chocolate bar thakle **proti drink e 20 g** gorom coffee te gholiye nao, swad aro gobhir hobe. `) : "";
    s.push({ a:"chill", t:L("Sweeten and chill the coffee","Coffee mishti kore thanda koro"), timer:600,
      d:L(`${su}${ch}Stand the jug in a bowl of ice water, stirring now and then, **about 10 minutes**, until it's cold to the touch. Hot coffee melts the ice and makes the frappe watery. Short on time? Brew it earlier and keep it in the fridge.`,
          `${su}${ch}Jug ta borof-panir bowl e boshao, majhe majhe nara dao, **~10 min**, thanda na howa porjonto. Gorom coffee borof golie frappe patla kore dey. Shomoy kom? Age brew kore fridge e rakho.`) });
    const bb = p.blendBatches > 1 ? L(` (${p.blendBatches} batches, up to 3 drinks each)`, ` (${p.blendBatches} batch, proti batch e 3 drink porjonto)`) : "";
    const fl = fr === "butterscotch" ? L(", **2 tbsp butterscotch sauce**", ", **2 tbsp butterscotch sauce**")
             : fr === "cookies" ? L(`, **3 cookies** broken in half${I.vanilla ? " and **½ tsp vanilla**" : ""}`, `, **3 ta cookie** dui bhag kore${I.vanilla ? ", **½ tsp vanilla**" : ""}`) : "";
    s.push({ a:"blend", t:L(`Blend${bb}`,`Blend koro${bb}`), timer:45,
      d:L(`For each drink, into the blender: **${p.coffeePer} ml cold coffee**, **${p.milkPer} ml cold milk**${fl}, then **${r.ice} ice cubes** on top. Start on low for a few seconds, then high for **30-45 seconds**, until smooth with no crunchy ice. Don't over-blend: it melts. Too thin? Add 2-3 more ice cubes and blend for 10 seconds.`,
          `Proti drink er jonno blender e: **${p.coffeePer} ml thanda coffee**, **${p.milkPer} ml thanda dudh**${fl}, tarpor upore **${r.ice} ta borof**. Prothome low speed e koyek second, tarpor high e **30-45 sec**, jotokkhon na smooth hoy ar borof er tukro na thake. Beshi chalabe na: gole jabe. Patla hole aro 2-3 ta borof diye 10 sec chalao.`) });
  }
  // 4. Milk last, so it's hot when it meets the coffee. The coffee holds its heat in the jug.
  if ((r.milkMode === "hot" || r.milkMode === "boil") && p.milkTotal){
    const th = I.thermo && r.milkMode === "hot" ? L(" Use the thermometer and stop at **65°C**."," Thermometer diye **65°C** e thamao.") : "";
    s.push({ a:"milk", t:L(`Heat all the milk: ${p.milkTotal} ml`,`Ekshathe dudh gorom koro: ${p.milkTotal} ml`), d: r.milkMode === "boil"
      ? L("Now, while the coffee waits covered. Bring the milk to a boil once, then turn the heat down. You can add the sugar to the milk now.","Ekhon, coffee dhaka thakuk. Deshi style: dudh ekbar fotiye nao, tarpor anch komao. Chini ekhoni dudhe dite paro.")
      : L(`Now, while the coffee waits covered. Steaming, with small bubbles at the edge, but **NOT boiling** (about 65°C). Too hot and it won't foam, and it loses its sweetness.${th}`,
          `Ekhon, coffee dhaka thakuk. Dhoa uthbe, kinar e choto bubble, kintu **futbe NA** (~65°C). Beshi gorom hole foam hoy na ar dudher mishti bhab chole jay.${th}`) });
  }
  if (r.froth !== "none" && p.milkTotal){
    const bt = p.frothBatches > 1 ? L(` (${p.frothBatches} batches, max ${p.frothCap} ml each)`,` (${p.frothBatches} batch, proti batch e max ${p.frothCap} ml)`) : "";
    s.push(r.froth === "thick"
      ? { a:"froth", o:{ thick:true }, t:L(`Froth the milk${bt}`,`Dudh froth koro${bt}`), timer:30,
          d:L(`Hot milk in the pitcher, **up to the ${p.thickMark} ml mark** (no more). Frother on **FAST** (double-click the button to change speed). Hold it near the top of the milk for 15-20 seconds to pull in air, then lower it for 10 seconds. The foam will double. Tap the pitcher on the counter 2-3 times to pop big bubbles.`,
              `Pitcher e gorom dudh, **${p.thickMark} ml dag porjonto** (er beshi na). Frother **FAST** speed e (button double-click kore speed bodlao). Dudher uporer dike rekhe 15-20 sec chalao (bataash dhuke foam hobe), tarpor niche namiye 10 sec. Foam double hobe. Table e 2-3 bar thuk thuk kore boro bubble bhango.`) }
      : { a:"froth", t:L(`Froth the milk${bt}`,`Dudh froth koro${bt}`), timer:15,
          d:L(`Milk in the pitcher, **between the ${p.thickMark} ml and ${p.lightMark} ml marks**. Frother on **MEDIUM**, fully under the surface, 10-15 seconds. You want silky, tiny bubbles, not stiff foam. Swirl the pitcher to mix.`,
              `Pitcher e **${p.thickMark} ml ar ${p.lightMark} ml dag er majhamajhi** porjonto dudh. Frother **MEDIUM** speed, puro niche dubiye 10-15 sec. Amra silky, choto bubble er foam chai, ghono na. Pitcher ghuriye mix koro.`) });
  }
  const sw = SWEET[S.sweet];
  const sugarLine = sw ? L(` Stir **${plural(sw, "teaspoon", "teaspoons")} of sugar** into each cup while the coffee is hot.`,` Proti cup e **${sw} chamuch chini**, coffee gorom thaktei gholao.`) : "";
  const van = I.vanilla ? L(" For a vanilla flavour, stir **½ tsp vanilla** into the coffee first."," Vanilla chaile coffee te **½ tsp vanilla** aage mishao.") : "";
  switch (r.id){
    case "italian": s.push(p.creminaTsp
      ? { t:L("Serve with the cremina","Cremina diye serve koro"),
          d:L(`Pour **${p.coffeePer} ml** into each small cup, then add a spoon of cremina on top. It floats like a golden crema. Stir once and drink it in a few sips.`,
              `Proti choto cup e **${p.coffeePer} ml** dhalo, upore ek chamuch cremina. Shonali crema r moto bheshe thakbe. Ekbar nara diye koyek chumuk e kheye felo.`) }
      : { t:L("Serve","Serve koro"),
          d:L(`Pour **${p.coffeePer} ml** into each small cup. In Italy it's drunk black, in a few sips, often with a glass of water on the side.`,
              `Proti choto cup e **${p.coffeePer} ml** dhalo. Italy te kalo coffee koyek chumuk e khay, pashe ek glass pani.`) }); break;
    case "fbutterscotch": case "fdarkchoc": case "fcookies": {
      const top = { butterscotch:L(" Drizzle **1 tsp butterscotch sauce** over the top."," Upore **1 tsp butterscotch sauce** chhitao."),
                    cookies:L(" Crush the last cookie for each glass and sprinkle it on top."," Proti glass er baki cookie ta guro kore upore chhitao."),
                    darkchoc:L(" Dust with cocoa, or grate a little dark chocolate on top."," Upore cocoa chhitao, ba ektu dark chocolate kuchie dao.") }[fr];
      s.push({ t:L("Pour into glasses and top","Glass e dhele topping dao"),
        d:L(`Pour into tall glasses.${I.cream ? " Add a swirl of whipped cream." : ""}${top} Serve with a wide straw and drink it straight away.`,
            `Lomba glass e dhalo.${I.cream ? " Upore ektu whipped cream dao." : ""}${top} Mota straw diye, shathe shathe khao.`) }); break; }
    case "moka": s.push({ t:L(`Serve ${p.coffeePer} ml per cup`,`Proti cup e ${p.coffeePer} ml serve koro`), d:L(`Pour into small cups.${sugarLine}`,`Choto cup e dhalo.${sugarLine}`) }); break;
    case "americano": s.push({ t:L("Serve","Serve koro"),
      d:L(`Pour **${p.waterPer} ml hot water** into each cup first, then **${p.coffeePer} ml coffee**.${sugarLine}`,`Cup e age **${p.waterPer} ml gorom pani**, tarpor **${p.coffeePer} ml coffee**.${sugarLine}`) }); break;
    case "cappuccino": { const top = I.cinnamon ? L("Dust with cinnamon or cocoa.","Upore dalchini ba cocoa chhitao.") : L("Dust with cocoa if you like.","Upore cocoa chhitate paro.");
      s.push({ t:L("Put it together","Assemble koro"),
      d:L(`**${p.coffeePer} ml coffee** in each cup.${sugarLine} Hold back the foam with a spoon and pour the milk, then spoon the foam on top. ${top}`,
          `Cup e **${p.coffeePer} ml coffee**.${sugarLine} Chamuch diye foam atkiye dudh dhalo, sheshe foam upore tule dao. ${top}`) }); break; }
    case "latte":
    case "flatwhite": s.push({ t:L("Put it together","Assemble koro"),
      d:L(`**${p.coffeePer} ml coffee** in each cup.${sugarLine}${van} Then pour **${p.milkPer} ml frothed milk** slowly into the middle.`,
          `Cup e **${p.coffeePer} ml coffee**.${sugarLine}${van} Tarpor **${p.milkPer} ml froth kora dudh** dhire dhire, majhkhane theke dhalo.`) }); break;
    case "mocha": s.push({ t:L("Chocolate paste, then put it together","Chocolate paste + assemble"),
      d:L(`In each cup, mix **${r.cocoa} tbsp cocoa**, the sugar and 2 spoons of hot coffee into a smooth paste (no lumps). Then add the rest of the coffee, then **${p.milkPer} ml milk**.`,
          `Proti cup e **${r.cocoa} tbsp cocoa** + chini + 2 chamuch gorom coffee mishiye paste banao (dola thakbe na). Tarpor baki coffee, tarpor **${p.milkPer} ml dudh**.`) }); break;
    case "doodh": s.push({ t:L("Mix and serve","Mix kore serve koro"),
      d:L(`Pour the coffee into the hot milk: **${p.coffeePer} ml coffee** and **${p.milkPer} ml milk** per cup.${sugarLine}${I.condensed ? " A spoon of condensed milk makes it extra creamy." : ""} A little foam on top.`,
          `Gorom dudhe coffee dhalo: proti cup e **${p.coffeePer} ml coffee**, **${p.milkPer} ml dudh**.${sugarLine}${I.condensed ? " Condensed milk 1 chamuch dile aro creamy hobe." : ""} Upore halka foam.`) }); break;
    case "icedlatte":
    case "icedmocha": s.push({ t:L("Build it in the glass","Glass e assemble koro"),
      d:L(`${r.cocoa ? "Stir the cocoa and sugar into the hot coffee. " : (sw ? "Stir the sugar into the hot coffee FIRST, it won't dissolve in cold. " : "")}${van ? van.trim() + " " : ""}**${r.ice} ice cubes** in each glass, **${p.coffeePer} ml coffee**, then **${p.milkPer} ml cold milk**. Let the coffee cool a bit first so the ice melts less.`,
          `${r.cocoa ? "Gorom coffee te cocoa ar chini gholao. " : (sw ? "Chini gorom coffee te AGE gholao, thanda te mishe na. " : "")}${van ? van.trim() + " " : ""}Glass e **${r.ice} ta borof**, **${p.coffeePer} ml coffee**, tarpor **${p.milkPer} ml thanda dudh**. Coffee ektu thanda kore nile borof kom gole.`) }); break;
  }
  if (r.cocoa && !sw && !fr) s[s.length - 1].d += L(" Using unsweetened cocoa? Add at least **1 tsp sugar** per cup, or it tastes harsh.", " Unsweetened cocoa hole proti cup e kom koreo **1 chamuch chini** dao, na hole kora lagbe.");
  const fin = s[s.length - 1];
  fin.a = "serve"; // the last step always shows the finished drink
  if (r.milkMode !== "cold") fin.d = L("Tip the warming water out of the cups first. ", "Age cup er gorom pani fele dao. ") + fin.d;
  if (p.leftover > p.yieldPerBrew * 0.5) fin.d += L(` You'll have about **${p.leftover} ml** extra coffee: keep it in the fridge (up to 2 days) for an iced latte.`,
                                                  ` Prai **${p.leftover} ml** coffee beshi thakbe: fridge e rakho (2 din porjonto), iced latte banate parbe.`);
  s.forEach(x => { x.t = x.t.trim(); x.d = x.d.replace(/\s+$/, "").replace(/\s{2,}/g, " "); });
  return s;
}
const starRow = n => { const r = Math.round(n); return `<span class="srow" role="img" aria-label="${n} of 5 stars">${[1,2,3,4,5].map(k => ic("star", k <= r ? "f" : "")).join("")}</span>`; };
const md = t => t.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");

/* ---------- Progress: XP, levels, badges (all derived from the log, so nothing double-counts) ---------- */
const LEVELS = [[0,"Beginner"],[100,"Apprentice"],[250,"Home Barista"],[500,"Skilled Barista"],[900,"Coffee Master"]];
const dayKey = t => new Date(t).toLocaleDateString("en-CA");
const has5 = x => x.rating === 5 || (x.ratings || []).some(c => c.rating === 5);
// XP one logged drink earned: made it, rated it, extra raters, a 5-star cup, today's special
const entryXP = x => 20 + (x.rating ? 10 : 0) + 5 * Math.max(0, (x.ratings || []).length - 1) + (has5(x) ? 10 : 0) + (x.bonus === SPECIAL_XP ? SPECIAL_XP : 0);
function stats(){
  const log = S.log || [], P = S.past, drinks = new Set([...P.drinks, ...log.map(x => x.d)]);
  const rated = log.filter(x => x.rating);
  let xp = P.xp + drinks.size * 30 + Object.keys(S.learned).length * 5;
  for (const x of log) xp += entryXP(x);
  for (const c in S.quiz) xp += (S.quiz[c] || 0) * 15;
  const days = new Set(log.map(x => dayKey(x.t)));
  let streak = 0, d = new Date();
  if (!days.has(dayKey(d))) d.setDate(d.getDate() - 1);
  while (days.has(dayKey(d))){ streak++; d.setDate(d.getDate() - 1); }
  let li = 0; LEVELS.forEach(([min], i) => { if (xp >= min) li = i; });
  const next = LEVELS[li + 1];
  return { xp, cups: P.cups + log.length, drinks, streak, li, level: LEVELS[li][1], from: LEVELS[li][0], to: next ? next[0] : null, nextName: next ? next[1] : null,
           avg: rated.length ? (rated.reduce((a, x) => a + x.rating, 0) / rated.length) : 0, madeToday: days.has(dayKey(Date.now())),
           milkCups: P.milk + log.filter(x => (RECIPES.find(r => r.id === x.d) || {}).milk).length,
           specials: P.specials + log.filter(x => x.bonus === SPECIAL_XP).length };
}
const BADGES = [
  ["first","cup","First Cup","Finish your first drink", s => s.cups >= 1],
  ["regular","medal","Regular","Make 10 drinks", s => s.cups >= 10],
  ["explorer","compass","Explorer","Try 5 different drinks", s => s.drinks.size >= 5],
  ["menu","trophy","Full Menu",`Make all ${RECIPES.length} drinks`, s => s.drinks.size >= RECIPES.length],
  ["milk","milk","Milk Master","Make 5 milk drinks", s => s.milkCups >= 5],
  ["perfect","star","Perfect Cup","Rate a drink 5 stars", () => S.log.some(has5)],
  ["crowd","crowd","Crowd Pleaser","Make a round for 6 or more", () => S.log.some(x => x.n >= 6)],
  ["streak","flame","On a Roll","Make coffee 3 days in a row", s => s.streak >= 3],
  ["chef","spark","Chef's Pick","Make 3 of Today's Specials", s => s.specials >= 3],
  ["safety","shield","Safety First","Finish every Safety lesson", () => CATS.find(c => c.id === "safety").lessons.every(l => S.learned[l.id])],
  ["scholar","learn","Scholar","Ace every quiz", () => CATS.every(c => S.quiz[c.id] === c.quiz.length)]
];
// A badge, once earned, is kept: the streak can end and On a Roll stays.
const earned = s => BADGES.filter(b => S.badges.includes(b[0]) || b[4](s)).map(b => b[0]);
// Wraps any action that can earn XP. Returns what changed; unless quiet, it announces it.
function reward(fn, quiet){
  const a = stats(), ba = earned(a);
  fn();
  foldLog(S);
  const b = stats(), now = earned(b), bb = now.filter(x => !ba.includes(x));
  S.badges = now; save();
  const res = { a, b, gained: b.xp - a.xp, up: b.li > a.li, badges: bb.map(id => BADGES.find(x => x[0] === id)) };
  if (!quiet) announce(res);
  return res;
}
let toastT;
function toast(icon, text){
  const el = $("#toast"); el.innerHTML = ic(icon) + text; el.classList.remove("show"); void el.offsetWidth; el.classList.add("show");
  clearTimeout(toastT); toastT = setTimeout(() => el.classList.remove("show"), 2200);
  try{ navigator.vibrate && navigator.vibrate(20); }catch(e){}
}
/* ---------- Fun: confetti, reward moments, today's special ---------- */
const calm = () => matchMedia("(prefers-reduced-motion: reduce)").matches;
function confetti(x = innerWidth / 2, y = innerHeight / 3, n = 40){
  if (calm()) return;
  const el = document.createElement("div"), cols = ["var(--gold)","var(--brand)","var(--ok)","var(--c-whip)","var(--warn)","var(--c-milk)"];
  el.className = "confetti"; el.setAttribute("aria-hidden", "true");
  el.innerHTML = Array.from({ length:n }, (_, i) => {
    const a = Math.random() * Math.PI * 2, v = 50 + Math.random() * 130, x1 = Math.cos(a) * v, y1 = Math.sin(a) * v * .7 - 70;
    return `<i class="${i % 3 ? "" : "r"}" style="left:${x | 0}px;top:${y | 0}px;background:${cols[i % cols.length]};--x1:${x1 | 0}px;--y1:${y1 | 0}px;--x2:${x1 * 1.5 | 0}px;--y2:${y1 + 240 + Math.random() * 220 | 0}px;--r:${Math.random() * 720 - 360 | 0}deg;--d:${(1.5 + Math.random() * 1.1).toFixed(2)}s;--w:${(Math.random() * .15).toFixed(2)}s"></i>`;
  }).join("");
  document.body.appendChild(el); setTimeout(() => el.remove(), 3000);
}
const burstFrom = (el, n) => { if (!el) return; const b = el.getBoundingClientRect(); confetti(b.left + b.width / 2, b.top + b.height / 2, n); };
// A pop-up for the big moments: a new level or a new badge.
let winEl = null;
function winCard({ icon, kicker, title, text, more = [] }){
  closeWin(true);
  winEl = document.createElement("div");
  winEl.innerHTML = `<div class="winscrim" data-win-close></div><div class="wincard" role="dialog" aria-modal="true" aria-labelledby="win-h" tabindex="-1">
    <div class="medal">${ic(icon)}</div><small>${kicker}</small><h2 id="win-h">${title}</h2><p>${text}</p>
    ${more.length ? `<div class="more">${more.map(([i, t]) => `<span>${ic(i)}${t}</span>`).join("")}</div>` : ""}
    <button class="btn primary" data-win-close>${ic("check")}Nice!</button></div>`;
  guardFocus(); document.body.appendChild(winEl); syncBack();
  setTimeout(() => { if (winEl){ winEl.querySelector(".wincard").focus({ preventScroll:true }); burstFrom(winEl.querySelector(".medal"), 50); } }, 120);
  try{ navigator.vibrate && navigator.vibrate([20, 60, 40]); }catch(e){}
}
function closeWin(now){ if (!winEl) return; const el = winEl; winEl = null; if (now){ el.remove(); return; } el.querySelector(".wincard").classList.add("out"); setTimeout(() => el.remove(), 260); unshield(); }
function announce(res){
  const B = res.badges, b = res.b;
  if (res.gained > 0) toast("spark", `+${res.gained} XP`);
  if (!res.up && !B.length) return;
  setTimeout(() => res.up
    ? winCard({ icon:b.li >= 4 ? "trophy" : "medal", kicker:`Level ${b.li + 1} of ${LEVELS.length}`, title:`You're now a ${b.level}!`,
        text:b.to ? `${b.to - b.xp} XP to ${b.nextName}. Keep brewing.` : "That's the top level. Take a bow.", more:B.map(x => [x[1], x[2]]) })
    : winCard({ icon:B[0][1], kicker:"New badge", title:B[0][2], text:B[0][3] + ".", more:B.slice(1).map(x => [x[1], x[2]]) }), 700);
}
// Count a number up, for the XP on the finish screen.
function countUp(el, to, ms = 900){
  if (!el) return;
  if (calm()){ el.textContent = to; return; }
  const t0 = performance.now(); const tick = t => { const k = Math.min(1, (t - t0) / ms); el.textContent = Math.round(to * (1 - Math.pow(1 - k, 3))); if (k < 1) requestAnimationFrame(tick); };
  requestAnimationFrame(tick);
}
// Today's special: one drink a day you can make right now, worth a bonus. Same pick all day.
const SPECIAL_XP = 25;
const hashStr = s => [...s].reduce((h, c) => (h * 31 + c.charCodeAt(0)) >>> 0, 7);
function special(){
  const pool = RECIPES.filter(r => !missing(r).length); if (!pool.length) return null;
  const today = dayKey(Date.now());
  return { r: pool[hashStr(today) % pool.length], done: S.log.some(x => x.bonus && dayKey(x.t) === today) };
}

/* ---------- Rating feedback: what to change next time ---------- */
const ISSUES = {
  bitter:["Too bitter", r => !r.instant],
  sour:["Sour or thin", r => !r.instant],
  weak:["Too weak", () => true],
  burnt:["Burnt taste", r => !r.instant],
  foam:["Foam was poor", r => r.froth !== "none" || r.instant],
  sweet:["Too sweet", () => true],
  plain:["Not sweet enough", () => true],
  icy:["Watery or icy", r => !!r.frappe]
};
// Advice follows the EN | BN switch, like the steps. Drink names stay English.
function advice(issue, r){
  const bn = S.lang === "bn", L = (en, b) => bn ? b : en, ro = S.roast;
  // Grind fixes depend on the grinder: pulses for electric, clicks for manual, nothing for pre-ground
  const G = { electric:["try shorter grinder pulses","Grinder er pulse ektu choto koro"], manual:["set the grinder one click coarser","Grinder 1 click mota koro"], none:["",""] }[S.grinderType];
  const F = { electric:["Pulse the grinder a few seconds longer","Grinder koyek second beshi chalao"], manual:["Set the grinder one click finer","Grinder 1 click mihi koro"], none:["",""] }[S.grinderType];
  switch (issue){
    case "bitter": return { t:L("Take it off the heat earlier.","Aro age chula theke namao."),
      d:L(`Bitterness comes from the last part of the brew. Remove the pot the moment it starts gurgling, and cool the base straight away.${G[0] ? " Also " + G[0] + " for a slightly coarser grind." : ""}${ro === "dark" || ro === "mdark" ? " With a darker roast, \"Mild\" strength helps too." : ""}`,
          `Brew er shesh er ongsho theke tita ashe. Gurgle shuru hotei namao, ar shathe shathe bottom thanda koro.${G[1] ? " " + G[1] + ", guro ektu mota hobe." : ""}${ro === "dark" || ro === "mdark" ? " Dark roast hole \"Mild\" strength o kaje dibe." : ""}`),
      fix: S.strength === "kora" ? ["strength","normal",L("Switch to Normal strength","Normal strength e bodlao")] : null };
    case "sour": return { t:L("Grind a little finer and use hotter water.","Ektu mihi grind koro, pani aro gorom koro."),
      d:L(`Sour, thin coffee hasn't extracted enough. ${F[0] ? F[0] + " and make" : "Make"} sure the water is properly hot.${ro === "light" ? " Light roasts need a full boil." : ""}`,
          `Tok, patla coffee mane coffee theke flavor kom ber hoyeche. ${F[1] ? F[1] + ", ar p" : "P"}ani bhalo kore gorom koro.${ro === "light" ? " Light roast e puro futano pani lage." : ""}`) };
    case "weak": return r.instant
      ? { t:L("Use more instant coffee.","Instant coffee beshi dao."), d:L("Add an extra spoon of instant coffee to the cream, and whip it until it's really thick.","Cream e ar ek chamuch instant coffee dao, ar ekdom ghono na howa porjonto whip koro.") }
      : { t:L("Make it stronger.","Aro kora koro."), d:L("Fill the basket right to the top (level, not pressed). If it's still weak, choose Strong.","Basket ekdom upor porjonto bhoro (level, chap dio na). Tao halka hole Strong bachai koro."),
          fix: S.strength !== "kora" ? ["strength", S.strength === "halka" ? "normal" : "kora", S.strength === "halka" ? L("Switch to Normal strength","Normal strength e bodlao") : L("Switch to Strong strength","Strong strength e bodlao")] : null };
    case "burnt": return r.italian
      ? { t:L("Lower the heat.","Anch komao."), d:L("Keep the flame low, so it never reaches past the bottom of the pot, and leave the lid open so you can catch the first gurgle.","Anch kom rakho, jate agun pot er niche theke baire na ashe, ar dhakna khola rakho jate prothom gurgle dhorte paro.") }
      : { t:L("Lower the heat.","Anch komao."),
      d:L("A burnt taste means the pot sat on high heat too long. Start with hot water from the kettle, use low to medium-low heat, and leave the lid open so you can catch it early.",
          "Pora swad mane pot beshi khon beshi anche chhilo. Gorom pani diye shuru koro, low ba medium-low anch dao, ar dhakna khola rakho jate age dhorte paro.") };
    case "foam": return r.instant
      ? { t:L("Whip longer.","Aro beshi whip koro."), d:L("Keep whipping on FAST until it holds its shape on an upside-down spoon. Equal parts coffee, sugar and hot water matter.","FAST speed e whip koro, jotokkhon na chamuch ulte dhorleo pore na jay. Coffee, chini ar gorom pani shoman shoman howa dorkar.") }
      : { t:L("Better foam: right milk, right heat.","Bhalo foam: thik dudh, thik gorom."),
          d:L("Use full-cream milk, heat it to about 65°C (not boiling), and don't fill the pitcher past the mark. Hold the frother near the surface at first to pull in air.",
              "Full cream dudh nao, ~65°C porjonto gorom koro (futabe na), ar pitcher er dag er beshi bhorbe na. Prothome frother dudher uporer dike rakho jate bataash dhoke.") };
    case "sweet": return { t:L("Use less sugar next time.","Porer bar chini kom dao."), d:L("You can always add sugar at the table.","Lagle table e boshe chini mishano jay."),
      fix: SWEET[S.sweet] > 0 ? ["sweet", Object.keys(SWEET)[SWEET[S.sweet] - 1], L("Use less sugar next time","Porer bar chini kom")] : null };
    case "icy": return { t:L("Chill the coffee and blend longer.","Coffee bhalo kore thanda koro, beshi khon blend koro."),
      d:L("Watery means the coffee was still warm and melted the ice. Crunchy bits mean it needed more time on high. Best trick: freeze leftover coffee in an ice tray and use those cubes instead of plain ice.",
          "Patla mane coffee gorom chhilo, borof gole geche. Borof er tukro thakle high e aro chalate hoto. Shobcheye bhalo upay: baki coffee ice tray te jomiye, shadharon borof er bodole oi cube dao.") };
    case "plain": return { t:L("Add a little more sugar.","Ektu beshi chini dao."), d:L("Stir it in while the coffee is hot, so it dissolves.","Coffee gorom thaktei gholao, tahole mishe jabe."),
      fix: SWEET[S.sweet] < 3 ? ["sweet", Object.keys(SWEET)[SWEET[S.sweet] + 1], L("Use more sugar next time","Porer bar chini beshi")] : null };
  }
}

/* ---------- Learn: categories, lessons and quizzes ---------- */
const CATS = [
  { id:"drinks", icon:"cup", name:"The Drinks", sub:"What makes each one different",
    lessons:[
      { id:"d1", t:"Espresso and Americano", b:"<p>Espresso is a small, strong shot of coffee. A café machine pushes water through the coffee at about 9 bar of pressure. A moka pot works at 1-2 bar, so moka coffee is close to espresso, a little less intense, and without the golden foam on top (crema).</p><p>An <b>Americano</b> is espresso topped up with hot water: the same coffee, as a longer, milder cup.</p>" },
      { id:"d2", t:"Cappuccino, Latte, Flat White", b:"<p>All three are espresso plus milk. The difference is how much milk and how much foam:</p><ul><li><b>Cappuccino:</b> roughly equal parts coffee, hot milk and thick foam. The strongest-tasting of the three.</li><li><b>Latte:</b> lots of milk with a thin layer of foam. The mildest.</li><li><b>Flat White:</b> more coffee than a latte and less milk, with silky foam that sits almost flat.</li></ul>" },
      { id:"d3", t:"Mocha and Café au Lait", b:"<p>A <b>Mocha</b> is a latte with chocolate. Mix the cocoa, sugar and a little hot coffee into a paste first, or it goes lumpy.</p><p>A <b>Café au Lait</b> is coffee mixed into hot milk, with the milk as the star. Our home version boils and sweetens the milk.</p>" },
      { id:"d4", t:"Iced drinks and Whipped Coffee", b:"<p>Sugar won't dissolve in cold drinks, so always stir it into the hot coffee before adding ice and cold milk.</p><p><b>Whipped Coffee</b> (also called Dalgona) is instant coffee, sugar and hot water in equal parts, whipped until thick and spooned over cold milk.</p>" },
      { id:"d5", t:"Frappes", b:"<p>A <b>Frappe</b> is coffee, milk and ice blended until thick and frosty. The secret is <b>cold coffee</b>: hot coffee melts the ice and you get a watery drink. Stir the sugar in while the coffee is still hot, then chill it.</p><p>Blend on low first, then high for 30-45 seconds. Freeze leftover coffee in an ice tray and use those cubes for a frappe that never goes weak.</p>" }
    ],
    quiz:[
      { q:"Which drink has the most milk?", o:["Cappuccino","Latte","Flat White"], a:1, w:"A latte has the most milk and the thinnest foam." },
      { q:"An Americano is espresso plus…", o:["Hot water","Hot milk","Ice cream"], a:0, w:"Hot water makes it a longer, milder black coffee." },
      { q:"Why stir sugar into the coffee before adding ice?", o:["It looks nicer","Sugar won't dissolve in cold liquid","It makes it stronger"], a:1, w:"Sugar dissolves easily in hot coffee but sits at the bottom of a cold drink." }
    ]},
  { id:"moka", icon:"moka", name:"Moka Pot", sub:"Get a smooth, not bitter, brew",
    lessons:[
      { id:"m1", t:"Start with hot water", b:"<p>Pour hot water from the kettle into the base. Cold water means the pot sits on the stove much longer, and the coffee in the basket starts to cook and turn bitter.</p>" },
      { id:"m2", t:"Fill level, never press", b:"<p>Fill the basket to the top and level it with a finger. Don't press it down: a moka pot isn't an espresso machine. Pressing makes the pressure too high, which gives bitter coffee and is a safety risk.</p>" },
      { id:"m3", t:"Take it off early", b:"<p>The coffee should flow slowly, like honey. When it turns pale yellow or you hear a gurgle, take it off the heat immediately. The last part of the brew is the most bitter.</p>" },
      { id:"m4", t:"Cool the base", b:"<p>Run the base under cold water for 5 seconds. That stops the brewing instantly, so no extra bitterness is pulled through.</p>" },
      { id:"m5", t:"A new pot", b:"<p>Before first use, brew 3 times with only water and throw it away. This removes the factory smell. The rubber ring has a front and back: fitted upside down, it leaks.</p>" },
      { id:"m6", t:"Cleaning", b:"<p>Wash with hot water only, no soap (on aluminium it ruins the taste). Let it dry completely before screwing it back together. Check the rubber gasket once a month.</p>" },
      { id:"m7", t:"The Italian way", b:"<p>The moka pot was invented in Italy in 1933, and most Italian homes still use one every day. The traditional way: <b>fresh cold water</b> to just below the valve, the basket filled and levelled but never pressed, <b>low heat</b> with the lid open, and off the heat at the first gurgle. Then stir the coffee in the top, because the first coffee out is strong and the last is light.</p><p><b>Cremina:</b> pour the first few drops of coffee onto sugar and beat it hard with a teaspoon until pale and creamy. A spoon of it on top of each cup gives a sweet, golden foam, like a café crema.</p>" }
    ],
    quiz:[
      { q:"When should you take the pot off the heat?", o:["When the top is full","As soon as it gurgles or turns pale","After 10 minutes"], a:1, w:"The last part of the brew is the most bitter, so stop early." },
      { q:"How should the coffee basket be filled?", o:["Level, not pressed","Pressed down hard","Half full"], a:0, w:"Level and loose. Pressing raises the pressure too much." },
      { q:"Why start with hot water in the base?", o:["It protects the gasket","Less time on the stove, so less bitterness","It makes more coffee"], a:1, w:"The pot spends less time heating, so the coffee doesn't cook." }
    ]},
  { id:"beans", icon:"bean", name:"Beans & Grinding", sub:"Roasts, grind size, freshness",
    lessons:[
      { id:"b1", t:"How to tell the roast", b:"<ul><li><b>Light:</b> light brown, dry, no oil. Packets say Light, Breakfast or Filter.</li><li><b>Medium:</b> milk-chocolate brown, dry. Medium or House blend.</li><li><b>Medium-Dark:</b> dark chocolate colour, a few oily spots. Full City or Vienna.</li><li><b>Dark:</b> almost black, shiny with oil. Dark, Espresso roast, French or Italian.</li></ul><p>For a moka pot with milk, Medium or Medium-Dark is easiest.</p>" },
      { id:"b2", t:"Grind size", b:"<p>For a moka pot, grind until it's <b>like table salt</b>: coarser than espresso, finer than filter. Our blade grinder isn't perfectly even, so use short pulses, shake it in between, and don't put in more than 30 g at once. Running it too long heats the blade and spoils the flavour.</p>" },
      { id:"b3", t:"Keeping beans fresh", b:"<p>Coffee tastes best within 15 minutes of grinding. Store beans in an airtight jar, away from sunlight and heat. Not in the fridge: moisture and smells get in.</p>" }
    ],
    quiz:[
      { q:"Moka pot coffee should be ground like…", o:["Flour","Table salt","Coarse sea salt"], a:1, w:"Table salt texture. Finer clogs the pot and turns bitter." },
      { q:"Which roast is shiny with oil?", o:["Light","Medium","Dark"], a:2, w:"The longer the roast, the more oil comes to the surface." },
      { q:"Where should beans be stored?", o:["In the fridge","Airtight jar, out of the sun","Open bowl by the stove"], a:1, w:"Air, light, heat and moisture all make coffee go stale." }
    ]},
  { id:"milk", icon:"milk", name:"Milk & Foam", sub:"Temperature and frothing",
    lessons:[
      { id:"k1", t:"The right temperature", b:"<p>Aim for 60-65°C: steaming, small bubbles at the edge, but not boiling. A quick test: you can hold the pitcher for about 3 seconds before it's too hot. Boiled milk won't foam well and loses its natural sweetness.</p>" },
      { id:"k2", t:"Frother speeds", b:"<p>The frother only makes foam, it doesn't heat. Click once to turn it on, double-click to change speed.</p><ul><li><b>FAST:</b> thick foam for cappuccino and whipped coffee.</li><li><b>MEDIUM:</b> silky foam for latte and flat white.</li></ul><p>Put it in the milk before switching it on, or it splashes.</p>" },
      { id:"k3", t:"How much milk to froth", b:"<p>Foam roughly doubles the volume. For a cappuccino, don't fill the pitcher past the 150 mark (about 40%). Full-cream milk gives the best foam; low-fat makes more bubbles, but they're watery.</p>" },
      { id:"k4", t:"Looking after the frother", b:"<p>Charge it with a normal 5V phone charger, for no more than 2 hours. A fast charger can damage it. Charge it every 3 months even when unused. After washing, don't store it whisk-up, or water runs inside.</p>" }
    ],
    quiz:[
      { q:"Best milk temperature for a latte?", o:["About 40°C","60-65°C","Boiling"], a:1, w:"Hot enough to steam, not so hot it stops foaming." },
      { q:"Which speed for thick cappuccino foam?", o:["FAST","MEDIUM","It doesn't matter"], a:0, w:"FAST pulls in more air for stiffer foam." },
      { q:"Which milk makes the best foam?", o:["Full-cream","Low-fat","Condensed"], a:0, w:"The fat makes foam creamy and stable." }
    ]},
  { id:"safety", icon:"shield", name:"Safety", sub:"Valve, grinder and charging",
    lessons:[
      { id:"s1", t:"The safety valve", b:"<p>The little valve on the side of the moka base releases pressure if something blocks the coffee. Never fill water above it, never cover it, and never press the coffee down. The whole pot gets very hot: always use a cloth.</p>" },
      { id:"s2", t:"Grinder check after salt water", b:"<p>Salt water can cause short circuits and rust. Before plugging it in:</p><ul><li>Unplug, wipe the blade and chamber. Wipe salt marks with a damp cloth, then a dry one.</li><li>Dry for at least 48 hours somewhere airy.</li><li>Check the cord and pins for black or green corrosion. If you see any, don't use it.</li><li>Run it empty for 3 seconds. Burning smell, sparks or odd noises: stop and don't use it again.</li><li>Grind 10 g of beans and throw it away. Then use it as normal.</li></ul>" },
      { id:"s3", t:"Charging the frother", b:"<p>Use a normal phone charger, not a fast charger, and unplug it after 2 hours. Never charge it while wet.</p>" }
    ],
    quiz:[
      { q:"The water in the moka base should be…", o:["Above the valve","Just below the valve","As full as possible"], a:1, w:"Just below the valve, so it can release pressure if needed." },
      { q:"The grinder got salt water on it. First you should…", o:["Plug it in to test","Dry it 48 hours and check for corrosion","Rinse the motor"], a:1, w:"Water plus electricity is dangerous. Dry it fully and inspect it first." },
      { q:"How should you charge the frother?", o:["Fast charger","Normal 5V charger, under 2 hours","Overnight"], a:1, w:"Fast chargers and long charging can damage the battery." }
    ]}
];

/* ---------- Render: Make (pick → setup → cook → done) ---------- */
const $ = (sel, el=document) => el.querySelector(sel);
const recipe = () => RECIPES.find(x => x.id === S.drink) || RECIPES[0];
const tabVisible = id => !$("#tab-"+id).classList.contains("hide");
function seg(name, opts, cur){
  const n = Object.keys(opts).length;
  return `<div class="seg ${n === 5 ? "five" : ""}" style="--n:${n}" data-seg="${name}">${Object.entries(opts).map(([k,v]) => `<button data-v="${k}" class="${k===cur?"on":""}" aria-pressed="${k===cur}">${v}</button>`).join("")}</div>`;
}
let animDir = "", segJump = false; // slide direction, and pop the segment you just finished
function renderMake(){
  ({ pick:renderPick, setup:renderSetup, cook:renderCook, done:renderDone }[S.view] || renderPick)();
  if (!tabVisible("make")) return; // re-rendered from another tab: leave page chrome alone
  document.body.classList.toggle("cooking", S.view === "cook" || S.view === "done");
  document.body.classList.toggle("has-cta", S.view === "setup");
  document.body.classList.remove("sub");
  if (S.view === "cook") wakeOn(); else wakeOff();
}
let pickEnter = true; // animate the drink list when you arrive at it, not on every redraw
function renderPick(){
  const made = {}; S.log.forEach(x => made[x.d] = (made[x.d] || 0) + 1);
  const todo = unrated(), sp = special(), st = stats(), enter = pickEnter && !calm(); pickEnter = false;
  const streak = st.streak ? `<div class="chipsrow"><span class="chiprow fire ${st.madeToday ? "" : "risk"}">${ic("flame")}${st.streak}-day streak${st.madeToday ? "" : ": make one today to keep it"}</span></div>` : "";
  const spc = sp ? `<button class="special-card ${sp.done ? "did" : ""}" data-drink="${sp.r.id}">${cup(sp.r, "-sp")}<span class="stx"><small>Today's special</small><b>${sp.r.name}</b><em>${sp.done ? "Done for today. A new one tomorrow" : "Make it today for bonus XP"}</em></span><span class="xp">${sp.done ? ic("check") + "Done" : `+${SPECIAL_XP} XP`}</span></button>` : "";
  $("#tab-make").innerHTML = `<h2>What are we making?</h2>${streak}${todo.length ? `<button class="nudge" data-rate-log="${todo[0].t}">${ic("star")}<span><b>${plural(todo.length, "drink", "drinks")} to rate</b><small>Rate your ${(RECIPES.find(r => r.id === todo[0].d) || {}).name || "drink"} from ${whenText(todo[0].t).toLowerCase()} and get a tip for next time</small></span>${ic("next")}</button>` : ""}${spc}<div class="grid ${enter ? "enter" : ""}">` + RECIPES.map((x, idx) => {
    const m = missing(x), hot = sp && !sp.done && sp.r.id === x.id;
    return `<button class="drink ${hot ? "special" : ""}" data-drink="${x.id}" style="--i:${idx}">${hot ? `<span class="rib">Special</span>` : ""}${made[x.id] ? `<span class="made" title="Made ${made[x.id]} times">${ic("star")}${made[x.id]}</span>` : ""}${cup(x)}<b>${x.name}</b><small>${x.desc}</small>
      <span class="state ${m.length?"st-no":"st-ok"}">${m.length ? ic("x")+"Missing "+plural(m.length,"item","items") : ic("check")+"Ready to make"}</span></button>`;
  }).join("") + `</div>`;
}
let pplPop = 0; // the people count just changed: bump it
function renderSetup(){
  const r = recipe(), miss = missing(r), p = plan(r), src = coffeeSource();
  const canBoth = S.inv.beans && grinderOk() && S.inv.ground;
  let h = `<button class="back" data-go="pick">${ic("back")}All drinks</button>
    <div class="hero">${cup(r,"-h")}<div><h2>${r.name}</h2><p>${r.desc}</p></div></div>`;
  const last = [...S.log].reverse().find(x => x.d === r.id && x.rating);
  if (last){
    const a = (last.issues || []).map(i => advice(i, r)).filter(Boolean)[0];
    h += `<div class="note n-last"><b>Last time ${starRow(last.rating)}${(last.ratings || []).length > 1 ? ` ${last.rating.toFixed(1)} from ${last.ratings.length} people` : ""}</b>${a ? a.t + " " + a.d : (S.lang === "bn" ? "Darun hoyechilo. Abar same!" : "You loved it. Same again!")}</div>`;
  }
  h += `<div class="card">
    <div class="field row"><label class="lbl" style="margin:0">${ic("users")}People</label>
      <div class="stepper"><button data-ppl="-1" aria-label="Fewer people">${ic("minus")}</button><output class="${pplPop ? "bump" : ""}" aria-live="polite">${S.people}</output><button data-ppl="1" aria-label="More people">${ic("plus")}</button></div></div>
    <div class="cupsrow" aria-hidden="true">${Array.from({ length:Math.min(S.people, 12) }, (_, k) => ic("cup", pplPop > 0 && k === Math.min(S.people, 12) - 1 ? "new" : "")).join("")}${S.people > 12 ? `<b>+${S.people - 12}</b>` : ""}</div>
    ${r.instant || r.fixed ? "" : `<div class="field"><label class="lbl">${ic("bolt")}Strength</label>${seg("strength", STRENGTH_LBL, S.strength)}</div>`}
    ${r.coffee ? `<div class="field"><label class="lbl">${ic("bean")}Bean roast</label>${seg("roast", Object.fromEntries(Object.entries(ROASTS).map(([k,v]) => [k,v.lbl])), S.roast)}</div>` : ""}
    ${r.instant ? "" : `<div class="field"><label class="lbl">${ic("sugar")}Sugar</label>${seg("sweet", SWEET_LBL, S.sweet)}</div>`}
    ${canBoth && r.coffee ? `<div class="field"><label class="lbl">${ic("grinder")}Which coffee</label>${seg("source", {auto:"Auto",beans:"Grind beans",ground:"Ground coffee"}, S.source)}</div>` : ""}
  </div>`;
  if (miss.length) h += `<div class="note n-bad"><b>Can't make this yet.</b> You need: ${miss.join(", ")}. Update the Pantry tab, or pick another drink.</div>`;
  if (r.coffee && S.grinderType === "electric" && S.grinder !== "ok" && S.inv.beans) h += `<div class="note n-warn"><b>The grinder hasn't been checked.</b> Running it after salt-water exposure risks a short circuit or rust. There's a checklist in Learn → Safety. Use ground coffee until then.</div>`;
  if (p.brews >= 3) h += `<div class="note n-warn"><b>${p.brews} moka brews, about ${p.minutes} minutes.</b> One pot makes at most ${p.yieldPerBrew} ml at a time. To save time, pick "Mild" strength, or give half the group an Americano.</div>`;
  if (r.coffee){ const ro = roast(); h += `<div class="note n-tip"><b>${ro.lbl} roast in ${/^[AEIOU]/.test(r.name) ? "an" : "a"} ${r.name}</b>${BLACK.includes(r.id) ? ro.black : ro.milk}</div>`; }
  const st = [];
  if (r.instant){
    st.push(["Instant coffee", p.instantTbsp+" tbsp"],["Sugar", p.instantTbsp+" tbsp"],["Hot water", p.instantTbsp+" tbsp"]);
  } else {
    const what = src === "beans" ? "Coffee beans" : "Ground coffee";
    st.push([what, S.inv.scale ? `${p.grams} g` : `${p.tbsp} tbsp (about ${p.grams} g)`],["Moka brews", plural(p.brews, "brew", "brews")],["Brewed coffee", p.coffeeTotal+" ml"]);
    if (p.hotWaterTotal) st.push(["Extra hot water", p.hotWaterTotal+" ml"]);
  }
  if (p.milkTotal) st.push(["Milk", p.milkTotal+" ml"]);
  if (p.sugarTsp) st.push(["Sugar", p.sugarTsp+" tsp"]);
  if (p.cocoaTbsp) st.push(["Cocoa", p.cocoaTbsp+" tbsp"]);
  if (p.ice) st.push(["Ice", plural(p.ice, "cube", "cubes")]);
  if (p.sauceTbsp) st.push(["Butterscotch sauce", p.sauceTbsp+" tbsp + a drizzle"]);
  if (p.cookies) st.push(["Chocolate cookies", plural(p.cookies, "cookie", "cookies")]);
  h += `<h2 class="sm">You'll need</h2><div class="card"><ul class="need">${st.map(([k,v]) => `<li><span>${k}</span><b>${v}</b></li>`).join("")}</ul></div>`;
  const n = buildSteps(r, p, "en").length, resume = !miss.length && S.step > 0 && S.step < n;
  if (resume) h += `<button class="btn" data-restart>${ic("refresh")}Start over from step 1</button>`;
  h += `<div class="cta"><button data-start ${miss.length?"disabled":""}>${miss.length ? ic("lock","lg") : ic("play","lg")}<span>${miss.length ? "Missing "+plural(miss.length,"item","items") : resume ? `Resume at step ${S.step + 1}` : "Start making"}<small>${n} steps · about ${p.minutes} min</small></span></button></div>`;
  $("#tab-make").innerHTML = h; pplPop = 0;
}
function renderCook(){
  const r = recipe(), p = plan(r), steps = buildSteps(r, p, S.lang);
  S.step = Math.min(Math.max(0, S.step), steps.length - 1);
  const i = S.step, x = steps[i], last = i === steps.length - 1, mine = onTimerStep(), live = mine && tInt !== null;
  const tb = x.timer ? `<div class="tbox ${mine ? (tDone?"ding":"run") : ""}" id="tbox">${ic("clock")}<div class="tv" id="tbv">${mine ? (tDone ? "Done" : fmt(tLeft)) : fmt(x.timer)}</div>
      <button data-timer="${x.timer}">${mine && !tDone ? ic("stop")+"Stop" : ic("play")+"Start timer"}</button><i class="tbar" style="--p:${live ? tLeft / tTotal * 100 : mine ? 0 : 100}%"></i></div>` : "";
  $("#tab-make").innerHTML = `
    <div class="cook-top"><button class="x" data-go="setup">${ic("x")}Exit</button>
      <span class="count">${r.name} · ${plural(S.people,"person","people")}</span>
      <div class="lang" role="group" aria-label="Step language"><button data-lang="en" class="${S.lang==="en"?"on":""}" aria-pressed="${S.lang==="en"}">EN</button><button data-lang="bn" class="${S.lang==="bn"?"on":""}" aria-pressed="${S.lang==="bn"}">BN</button></div></div>
    <div class="progrow"><div class="prog" role="progressbar" aria-valuemin="1" aria-valuemax="${steps.length}" aria-valuenow="${i+1}" aria-label="Step ${i+1} of ${steps.length}">${steps.map((_,k) => `<i class="${k<i?"d":k===i?"c":""}${k === i - 1 && segJump ? " j" : ""}"></i>`).join("")}</div><span class="pn">${i+1}/${steps.length}</span></div>
    <div class="stepcard ${animDir}" id="stepcard">
      ${scene(x.a, x.o || {}, r).replace('class="stage"', `class="stage${live ? " live" : ""}"`)}<h3>${x.t}</h3><p>${md(x.d)}</p>${tb}
    </div>
    ${i === 0 ? `<p class="swipe-hint">Tap Next or swipe to move between steps</p>` : ""}
    <div class="cook-nav"><button data-nav="-1" ${i===0?"disabled":""}>${ic("back")}Back</button><button class="next${last ? " fin" : ""}" data-nav="1">${last ? ic("check")+"Finish" : "Next"+ic("next")}</button></div>`;
  animDir = ""; segJump = false;
  updateFloat();
}
// Rating draft for one logged drink, keyed by its timestamp. `where` says who redraws it.
let rateDraft = null; // {t, rating, issues:Set, saved, applied:Set, where:"done"|"sheet"}
const logEntry = t => S.log.find(x => x.t === t);
const unrated = () => S.log.filter(x => !x.rating).reverse(); // newest first
function newDraft(entry, where){
  const done = entry.ratings ? entry.ratings.map(c => ({ rating:c.rating, issues:new Set(c.issues) })) : entry.rating ? [{ rating:entry.rating, issues:new Set(entry.issues || []) }] : [];
  return { t: entry.t, n: Math.min(20, Math.max(1, entry.n || 1)), cur: { rating:0, issues:new Set() }, done, saved: !!entry.rating, applied: new Set(), where };
}
let starPop = 0; // stars to pop on the next draw, set by a tap
function rateBlock(r, R){
  const bn = S.lang === "bn", multi = R.n > 1, C = R.cur;
  if (!R.saved){
    const k = R.done.length + 1, last = k >= R.n;
    const chips = Object.entries(ISSUES).filter(([, [, ok]]) => ok(r)).map(([key, [l]]) => `<button data-issue="${key}" class="${C.issues.has(key)?"on":""}">${l}</button>`).join("");
    return `<div class="row" style="margin-bottom:6px"><h4 style="margin:0">${multi ? `Person ${k} of ${R.n}: how was your cup?` : "How did it turn out?"}</h4></div>
      ${multi ? `<div class="raters">${Array.from({ length:R.n }, (_, i) => `<span class="${i < R.done.length ? "did" : i === R.done.length ? "now" : ""}">${i < R.done.length ? ic("check") : i + 1}</span>`).join("")}</div>` : ""}
      <div class="stars" role="group" aria-label="Rating">${[1,2,3,4,5].map(n => `<button data-star="${n}" class="${n<=C.rating?"on":""}${n<=starPop?" pop":""}" ${n<=starPop?`style="--sd:${(n - 1) * 45}ms"`:""} aria-label="${n} stars" aria-pressed="${n<=C.rating}">${ic("star")}</button>`).join("")}</div>
      ${C.rating && C.rating < 5 ? `<h4 style="margin-top:4px">Anything off?</h4><div class="chips">${chips}</div>` : ""}
      <button class="btn primary" data-rate ${C.rating?"":"disabled"}>${ic("check")}${!multi ? "Save rating" : last ? "Save and finish" : `Save, then pass to person ${k + 1}`}</button>
      ${multi && R.done.length ? `<button class="btn" data-rate-finish>Finish with ${plural(R.done.length, "rating", "ratings")}</button>` : ""}`
      + (starPop = 0, "");
  }
  // Saved: everyone's cups together, then what to change
  starPop = 0;
  const cups = R.done, many = cups.length > 1, avg = cups.reduce((a, c) => a + c.rating, 0) / cups.length;
  const count = {}; cups.forEach(c => c.issues.forEach(i => count[i] = (count[i] || 0) + 1));
  const list = Object.keys(count).sort((a, b) => count[b] - count[a]).map(k => ({ k, n:count[k], ...advice(k, r) })).filter(a => a.t);
  const saved = `<span class="small" style="color:var(--ok);font-weight:700">${ic("check")} ${bn ? "Porer barer jonno save hoyeche" : "Saved for next time"}</span>`;
  const said = a => many ? `<span class="said">${bn ? `${a.n}/${cups.length} jon: ${ISSUES[a.k][0]}` : `${a.n} of ${cups.length} said ${ISSUES[a.k][0].toLowerCase()}`}</span>` : "";
  return `<div class="row" style="margin-bottom:10px"><h4 style="margin:0">${many ? `${cups.length} ratings · ${avg.toFixed(1)} average` : "How did it turn out?"}</h4><div class="lang" role="group" aria-label="Advice language"><button data-lang="en" class="${S.lang==="en"?"on":""}" aria-pressed="${S.lang==="en"}">EN</button><button data-lang="bn" class="${S.lang==="bn"?"on":""}" aria-pressed="${S.lang==="bn"}">BN</button></div></div>
    ${many ? `<ul class="cups">${cups.map((c, i) => `<li><span>Person ${i + 1}</span>${starRow(c.rating)}</li>`).join("")}</ul>` : `<div class="stars">${[1,2,3,4,5].map(n => `<button class="${n<=cups[0].rating?"on":""}" disabled aria-label="${n} stars">${ic("star")}</button>`).join("")}</div>`}
    <div class="advice">${list.length ? list.map(a => `<div class="note n-tip">${said(a)}<b>${a.t}</b>${a.d}${R.applied.has(a.k) ? "<br>" + saved : a.fix ? `<br><button class="apply" data-fix="${a.k}:${a.fix[0]}:${a.fix[1]}">${ic("refresh")}${a.fix[2]}</button>` : ""}</div>`).join("")
      : `<div class="note n-tip"><b>${avg >= 4 ? (bn ? "Darun cup!" : "Great cup!") : (bn ? "Rating er jonno dhonnobad." : "Thanks for rating.")}</b>${avg >= 4 ? (bn ? "Porer bar o same setting rakho." : "Keep the same settings next time.") : (bn ? "Porer bar ki gondogol chhilo bachai koro, app fix bole dibe." : "Pick what was off next time, and the app will suggest a fix.")}</div>`}</div>`;
}
function finishRating(){
  const R = rateDraft;
  reward(() => { const x = logEntry(R.t); if (x){
    x.ratings = R.done.map(c => ({ rating:c.rating, issues:[...c.issues] }));
    x.rating = Math.round(R.done.reduce((a, c) => a + c.rating, 0) / R.done.length * 10) / 10;
    x.issues = [...new Set(R.done.flatMap(c => [...c.issues]))];
  } save(); });
  R.saved = true; repaintRate();
}
function winBlock(w, fresh){
  const { res, lines } = w, b = res.b, pct = v => v.to ? Math.round((v.xp - v.from) / (v.to - v.from) * 100) : 100;
  const from = res.up ? 0 : pct(res.a), to = pct(b), dl = k => `style="animation-delay:${(1.3 + k * .22).toFixed(2)}s"`;
  return `<div class="win ${fresh ? "" : "still"} ${res.up ? "up" : ""}">
    ${res.up ? `<div class="lvup">${ic(b.li >= 4 ? "trophy" : "medal")}<span>Level up! You're now a ${b.level}</span></div>` : ""}
    <div class="wtop"><span class="gain">+<b id="gain">${fresh ? 0 : res.gained}</b><small>XP</small></span><span class="lv">${b.level}<br>${b.xp} XP</span></div>
    <div class="xpbar"><i style="--from:${from}%;--to:${to}%;width:${to}%"></i></div>
    <div class="xpt"><span>Level ${b.li + 1} of ${LEVELS.length}</span><span>${b.to ? `${b.to - b.xp} XP to ${b.nextName}` : "Top level!"}</span></div>
    <ul>${lines.map(([i, t, x], k) => `<li ${dl(k)}>${ic(i)}<span>${t}</span><b>+${x}</b></li>`).join("")}
      ${res.badges.map((B, k) => `<li ${dl(lines.length + k)}>${ic(B[1])}<span>New badge: <b>${B[2]}</b></span></li>`).join("")}</ul></div>`;
}
function renderDone(){
  const r = recipe(), entry = S.log[S.log.length - 1];
  if (!rateDraft && entry) rateDraft = newDraft(entry, "done");
  const fresh = !!win && !win.shown; if (win) win.shown = true; // the celebration plays once, not on every repaint
  $("#tab-make").innerHTML = `<div class="done">${scene("serve", {}, r).replace('class="stage"', `class="stage${fresh ? "" : " still"}"`)}<h3 class="${fresh ? "" : "nopop"}">Enjoy your ${r.name}!</h3>
    <p>Made for ${plural(S.people,"person","people")}.</p>
    ${win ? winBlock(win, fresh) : ""}
    ${rateDraft ? `<div class="rate" id="ratebox">${rateBlock(r, rateDraft)}</div>` : ""}
    <button class="btn primary" data-again>${ic("refresh")}Make another round</button>
    <button class="btn" data-go="pick">${ic("back")}Back to all drinks</button></div>`;
  if (fresh){
    countUp($("#gain"), win.res.gained, 1000);
    setTimeout(() => burstFrom($(".done .stage"), 48), 250);
    if (win.res.up) setTimeout(() => { burstFrom($(".win"), 64); try{ navigator.vibrate && navigator.vibrate([30, 60, 30, 60, 60]); }catch(e){} }, 1900);
  }
}
// Rate a drink later, from Learn or the drink list.
const whenText = t => { const d = new Date(t), today = new Date(), y = new Date(); y.setDate(y.getDate() - 1);
  return dayKey(t) === dayKey(today) ? "Today" : dayKey(t) === dayKey(y) ? "Yesterday" : d.toLocaleDateString(undefined, { weekday:"short", day:"numeric", month:"short" }); };
function openRate(t){ const e = logEntry(t); if (!e) return; rateDraft = newDraft(e, "sheet"); sheetOpen("rate", paintRateSheet); }
function paintRateSheet(sh){
  const e = logEntry(rateDraft.t), r = RECIPES.find(x => x.id === e.d) || RECIPES[0];
  sh.innerHTML = `<button class="sclose" data-sheet-close aria-label="Close">${ic("x")}</button><div class="grab"></div>
    <div class="ihead">${cup(r, "-r")}<div><h2 id="sh-h">Rate your ${r.name}</h2><p>${whenText(e.t)} · ${plural(e.n, "person", "people")}</p></div></div>
    <div class="rate rate-flat">${rateBlock(r, rateDraft)}</div>
    ${rateDraft.saved ? `<button class="btn" data-sheet-close>Done</button>` : ""}`;
}
// Redraw only the rating, so the finish screen's celebration doesn't replay on every tap
const repaintRate = () => { if (!rateDraft) return; if (rateDraft.where === "sheet") return sheetRepaint();
  const box = $("#ratebox"); if (box && S.view === "done") box.innerHTML = rateBlock(recipe(), rateDraft); else renderDone(); };
let win = null; // what the drink just finished earned, shown once on the finish screen
function go(view){
  if (view === "pick" && S.view !== "pick") pickEnter = true;
  if (view === "done" && S.view === "cook"){
    stopTimer(); // a finished drink needs no timer, and it would cover the finish screen
    const r = recipe(), sp = special(), bonus = !!(sp && !sp.done && sp.r.id === S.drink), isNew = !stats().drinks.has(S.drink);
    const t = Math.max(Date.now(), (S.log.length ? S.log[S.log.length - 1].t : 0) + 1); // one entry per timestamp
    const res = reward(() => S.log.push({ d:S.drink, n:S.people, t, rating:0, issues:[], ...(bonus ? { bonus:SPECIAL_XP } : {}) }), true);
    win = { res, shown:false, lines:[["cup", `Made ${/^[AEIOU]/.test(r.name) ? "an" : "a"} ${r.name}`, 20], ...(isNew ? [["compass", `Your first ${r.name}`, 30]] : []), ...(bonus ? [["spark", "Today's special", SPECIAL_XP]] : [])] };
  }
  if (view !== "done"){ rateDraft = null; win = null; }
  // Leaving the steps for the drink's setup keeps your place, so Exit never throws away progress
  const keepStep = view === "setup" && S.view === "cook";
  S.view = view; if (view !== "cook" && view !== "done" && !keepStep) S.step = 0; save(); renderMake(); window.scrollTo(0,0);
}
function nav(d){
  const steps = buildSteps(recipe(), plan(recipe()), S.lang);
  if (d > 0 && S.step >= steps.length - 1){ go("done"); return; }
  S.step = Math.min(Math.max(0, S.step + d), steps.length - 1);
  animDir = d < 0 ? "back-anim" : ""; segJump = d > 0; save(); renderMake(); window.scrollTo(0,0);
  try{ navigator.vibrate && navigator.vibrate(8); }catch(e){}
}

/* ---------- Keep the screen awake while cooking ---------- */
let wake = null, wakeAsk = false;
async function wakeOn(){
  if (wake || wakeAsk || !("wakeLock" in navigator)) return;
  wakeAsk = true;
  try{ const w = await navigator.wakeLock.request("screen");
    if (wake || S.view !== "cook" || !tabVisible("make")) w.release(); // left the steps while asking: let it go
    else { wake = w; w.addEventListener("release", () => { if (wake === w) wake = null; }); }
  }catch(e){}
  wakeAsk = false;
}
function wakeOff(){ try{ wake && wake.release(); }catch(e){} wake = null; }
document.addEventListener("visibilitychange", () => { if (document.visibilityState === "visible" && S.view === "cook" && tabVisible("make")) wakeOn(); });

/* ---------- Swipe between steps ---------- */
let tx = null, ty = null;
document.addEventListener("touchstart", e => { if (S.view !== "cook" || !tabVisible("make")) return; tx = e.touches[0].clientX; ty = e.touches[0].clientY; }, {passive:true});
document.addEventListener("touchend", e => {
  if (tx === null) return;
  const dx = e.changedTouches[0].clientX - tx, dy = e.changedTouches[0].clientY - ty; tx = null;
  if (Math.abs(dx) > 60 && Math.abs(dx) > Math.abs(dy) * 1.5) nav(dx < 0 ? 1 : -1);
}, {passive:true});
document.addEventListener("keydown", e => { if (S.view !== "cook" || !tabVisible("make")) return; if (e.key === "ArrowRight") nav(1); if (e.key === "ArrowLeft") nav(-1); });

/* ---------- Render: Pantry ---------- */
function renderInv(){
  const g = {ok:"Working", check:"Needs checking", broken:"Broken"};
  const sw = (k, [icon, l, d]) => `<div class="toggle"><div>${ic(icon)}<div><b>${l}</b>${d?`<small>${d}</small>`:""}</div></div>
    <label class="sw"><input type="checkbox" data-inv="${k}" ${S.inv[k]?"checked":""} aria-label="${l}"><i></i></label></div>`;
  const pitchers = PITCHERS.includes(S.pitcher) ? PITCHERS : [...PITCHERS, S.pitcher].sort((a, b) => a - b);
  const mk = x => Math.round(x / 10) * 10;
  let h = `<h2>Our equipment</h2><div class="card">
    <div class="toggle"><div>${ic("moka")}<div><b>Moka pot</b><small>${S.mokaWater} ml water · ${S.mokaCoffee} g coffee per brew</small></div></div>
      <select data-moka aria-label="Moka pot size">${Object.keys(MOKA).map(k => `<option value="${k}" ${+k === S.mokaSize ? "selected" : ""}>${k}-cup</option>`).join("")}</select></div>
    <div class="toggle eq"><div>${ic(GRINDERS[S.grinderType][0])}<div><b>Grinder</b><small>${GRINDERS[S.grinderType][2]}</small></div></div></div>
    <div class="seg pad" style="--n:3" role="group" aria-label="Grinder type">${Object.entries(GRINDERS).map(([k, [, l]]) => `<button data-gtype="${k}" class="${S.grinderType === k ? "on" : ""}" aria-pressed="${S.grinderType === k}">${{ electric:"Electric", manual:"Manual", none:"None" }[k]}</button>`).join("")}</div>
    ${S.grinderType !== "none" ? `<div class="toggle"><div><div><b>Grinder status</b><small>${S.grinderType === "electric" ? "If it got wet or anything seems wrong, set it to Needs checking" : "Set it to Needs checking if it's stiff or slipping"}</small></div></div>
      <select id="grinder" aria-label="Grinder status">${Object.entries(g).map(([k,v]) => `<option value="${k}" ${S.grinder===k?"selected":""}>${v}</option>`).join("")}</select></div>` : ""}
    <div class="toggle"><div>${ic("pitcher")}<div><b>Milk pitcher</b><small>Foam marks: thick up to ${mk(S.pitcher * 0.43)} ml, silky up to ${mk(S.pitcher * 0.71)} ml</small></div></div>
      <select data-pitcher aria-label="Milk pitcher size">${pitchers.map(v => `<option value="${v}" ${v === S.pitcher ? "selected" : ""}>${v} ml</option>`).join("")}</select></div>
    <div class="toggle"><div>${ic("frother")}<div><b>Milk frother</b><small>Handheld, with fast and medium speeds</small></div></div><span class="tag">Have it</span></div>
  </div>
  <h2 class="sm">Other tools</h2><div class="card">${Object.entries(TOOLS).map(([k,v]) => sw(k,v)).join("")}</div>
  <h2 class="sm">What's in the kitchen?</h2><div class="card">${Object.entries(INGREDIENTS).map(([k,v]) => sw(k,v)).join("")}</div>
  <h2 class="sm">Fine-tune your moka pot</h2><div class="card">
    <p class="small muted" style="margin-top:0">Optional. Picking a pot size fills these in. If your pot is different, measure once and adjust.</p>
    <div class="toggle"><div><div><b>Water in the base</b><small>Up to just below the valve, ml</small></div></div><input type="number" min="50" max="600" data-set="mokaWater" value="${S.mokaWater}"></div>
    <div class="toggle"><div><div><b>Coffee in the basket</b><small>Filled level, grams</small></div></div><input type="number" min="5" max="60" data-set="mokaCoffee" value="${S.mokaCoffee}"></div>
    <div class="toggle"><div><div><b>Coffee yield</b><small>% of the water that comes out as coffee, usually 80-90</small></div></div><input type="number" min="50" max="100" data-set="yieldPct" value="${S.yieldPct}"></div>
  </div>
  <h2 class="sm">App & progress</h2><div class="card">
    ${isStandalone()
      ? `<div class="toggle"><div>${ic("phone")}<div><b>Installed</b><small>You're using the Home Screen app</small></div></div><span class="tag">${ic("check")}</span></div>`
      : `<div class="toggle"><div>${ic("phone")}<div><b>Add to Home Screen</b><small>Opens full screen and keeps your progress</small></div></div><button class="rowbtn" data-open-install>${ic("plusSq")}Add</button></div>`}
    <div class="toggle"><div>${ic("copy")}<div><b>Copy progress code</b><small>Move your level, ratings and settings to another phone or browser</small></div></div><button class="rowbtn" data-copy-code>Copy</button></div>
    <div class="toggle"><div>${ic("paste")}<div><b>Paste progress code</b><small>Restore progress you copied</small></div></div><button class="rowbtn" data-open-restore>Paste</button></div>
  </div>
  <button class="btn" data-onboard>${ic("moka")}Run equipment setup again</button>
  <button class="btn" id="reset">${ic("refresh")}Reset settings to defaults</button>
  <p class="small muted" style="text-align:center">Your progress and ratings are kept.</p>
  <footer>Coffee Ghor · version ${APP_VERSION}</footer>`;
  $("#tab-inv").innerHTML = h;
}

/* ---------- Render: Learn ---------- */
let learnCat = null, openLesson = null, quiz = null, justLearned = null; // quiz: {i, score, picked}
function catProgress(c){ const done = c.lessons.filter(l => S.learned[l.id]).length + (S.quiz[c.id] || 0); return [done, c.lessons.length + c.quiz.length]; }
function renderLearn(){
  document.body.classList.toggle("sub", !!learnCat && tabVisible("tips"));
  if (learnCat) return renderCat();
  const s = stats(), pct = s.to ? Math.round((s.xp - s.from) / (s.to - s.from) * 100) : 100, got = earned(s);
  const fresh = S.seenBadges ? got.filter(id => !S.seenBadges.includes(id)) : []; // new since you last looked
  if (tabVisible("tips") && String(S.seenBadges) !== String(got)){ S.seenBadges = got; save(); }
  const recent = [...S.log].reverse().slice(0, 5), todo = unrated().slice(0, 10);
  const drinkRow = (x, btn) => { const r = RECIPES.find(y => y.id === x.d); return `<li><div>${r ? r.name : x.d}<small>${whenText(x.t)} · ${plural(x.n,"person","people")}</small></div>${btn}</li>`; };
  $("#tab-tips").innerHTML = `
  <div class="level"><div class="top"><div class="badge-ic">${ic(s.li >= 4 ? "trophy" : s.li >= 2 ? "medal" : "cup")}</div>
    <div><h2>${s.level}</h2><p>Level ${s.li + 1} of ${LEVELS.length}</p></div></div>
    <div class="xpbar"><i style="width:${pct}%"></i></div>
    <div class="xpt"><span>${s.xp} XP</span><span>${s.to ? `${s.to - s.xp} XP to ${s.nextName}` : "Top level!"}</span></div>
    ${(m => `<button class="nextmove" ${m.attr}><span><small>Your next move</small>${m.txt}</span><span class="xp">+${m.xp} XP</span>${ic("next")}</button>`)(nextMove())}</div>
  <p class="summary">${s.cups ? `<b>${plural(s.cups,"drink","drinks")}</b> made${s.avg ? ` · <b>${s.avg.toFixed(1)}</b> average rating` : ""}${s.streak ? ` · <b>${s.streak}-day</b> streak` : ""}.` : "Finish your first drink to start earning XP."}</p>
  ${todo.length ? `<h2 class="sm">Waiting for your rating</h2><div class="card log"><ul>${todo.map(x => drinkRow(x, `<button class="rowbtn" data-rate-log="${x.t}">${ic("star")}Rate</button>`)).join("")}</ul></div>` : ""}
  <div class="lhead"><h2 class="sm">Lessons</h2><button class="help" data-intro>${ic("compass")}How it works</button></div>
  <div class="cats">${CATS.map(c => { const [d, t] = catProgress(c); return `<button class="cat" data-cat="${c.id}"><span class="ci">${ic(c.icon)}</span>
    <span class="cm"><b>${c.name}</b><small>${c.sub}</small><span class="pbr"><span class="pb"><i style="width:${Math.round(d/t*100)}%"></i></span><span class="pn">${d}/${t}</span></span></span>${ic("next")}</button>`; }).join("")}</div>
  <h2 class="sm">Badges <span class="muted small">${got.length}/${BADGES.length}</span></h2>
  <div class="badges">${BADGES.map(b => { const on = got.includes(b[0]); return `<div class="bdg ${on?"":"locked"} ${on && fresh.includes(b[0]) ? "fresh" : ""}"><div class="bi">${ic(on ? b[1] : "lock")}</div><b>${b[2]}</b><span>${b[3]}</span></div>`; }).join("")}</div>
  <h2 class="sm">Recent drinks</h2>
  <div class="card log">${recent.length ? `<ul>${recent.map(x => drinkRow(x, x.rating ? `<span class="s">${starRow(x.rating)}${(x.ratings || []).length > 1 ? ` <small>${x.rating.toFixed(1)} · ${x.ratings.length}</small>` : ""}</span>` : `<button class="rowbtn" data-rate-log="${x.t}">${ic("star")}Rate</button>`)).join("")}</ul>`
    : `<p class="muted" style="margin:0">Make your first drink and it will show up here.</p>`}</div>
  <h2 class="sm">How to level up</h2>
  <ol class="path">
    <li><span class="pi">${ic("cup")}</span><div><b>Make a drink</b><small>Follow the steps to the end</small><small class="bonus">First time making a new drink: +30 more</small></div><span class="xp">+20</span></li>
    <li><span class="pi">${ic("star")}</span><div><b>Rate it</b><small>Everyone who drank one can rate their own cup</small><small class="bonus">+5 for each extra person · +10 for a 5-star cup</small></div><span class="xp">+10</span></li>
    <li><span class="pi">${ic("spark")}</span><div><b>Make Today's Special</b><small>One drink a day, picked from what you can make. It's on the drink list</small></div><span class="xp">+${SPECIAL_XP}</span></li>
    <li><span class="pi">${ic("book")}</span><div><b>Read a lesson</b><small>Open a lesson and tap Got it</small></div><span class="xp">+5</span></li>
    <li><span class="pi">${ic("learn")}</span><div><b>Take a quiz</b><small>3 questions per topic. Your best score counts, so retry any time</small></div><span class="xp">+15<small>each</small></span></li>
  </ol>
  <h2 class="sm">Levels</h2>
  <ol class="ladder">${LEVELS.map(([min, name], i) => `<li class="${i < s.li ? "past" : i === s.li ? "now" : ""}"><span class="dot">${i < s.li ? ic("check") : i + 1}</span><b>${name}</b><span>${i === s.li ? "You are here · " : ""}${min} XP</span></li>`).join("")}</ol>
  <footer>Coffee Ghor · made for home</footer>`;
}
// The single most useful thing to do now, and what it's worth.
function nextMove(){
  const todo = unrated();
  if (todo.length){ const r = RECIPES.find(x => x.id === todo[0].d) || {}; return { txt:`Rate your ${r.name || "drink"}`, xp:10, attr:`data-rate-log="${todo[0].t}"` }; }
  const made = stats().drinks, sp = special();
  if (!S.log.length && !S.past.cups) return { txt:"Make your first drink", xp:50, attr:`data-goto-drink="${S.drink}"` };
  if (sp && !sp.done) return { txt:`Make today's special: ${sp.r.name}`, xp:20 + SPECIAL_XP + (made.has(sp.r.id) ? 0 : 30), attr:`data-goto-drink="${sp.r.id}"` };
  for (const c of CATS){ const l = c.lessons.find(l => !S.learned[l.id]); if (l) return { txt:`Read "${l.t}"`, xp:5, attr:`data-cat="${c.id}" data-open="${l.id}"` }; }
  const fresh = RECIPES.find(r => !made.has(r.id) && !missing(r).length);
  if (fresh) return { txt:`Try a ${fresh.name} for the first time`, xp:50, attr:`data-goto-drink="${fresh.id}"` };
  const q = CATS.find(c => (S.quiz[c.id] || 0) < c.quiz.length);
  if (q) return { txt:`Ace the ${q.name} quiz`, xp:15 * (q.quiz.length - (S.quiz[q.id] || 0)), attr:`data-cat="${q.id}"` };
  return { txt:"Make another drink", xp:20, attr:`data-goto-drink="${S.drink}"` };
}
function renderCat(){
  const c = CATS.find(x => x.id === learnCat);
  let h = `<button class="back" data-cat="">${ic("back")}Learn</button>
    <div class="chero">${ic(c.icon)}<div><h2>${c.name}</h2><p>${c.sub}</p></div></div>`;
  if (quiz){
    const q = c.quiz[quiz.i], answered = quiz.picked !== null;
    if (quiz.i >= c.quiz.length){
      h += `<div class="card quiz"><div class="qcount">Quiz complete</div><div class="q">You got ${quiz.score} of ${c.quiz.length} right.</div>
        <p class="muted" style="margin:0">${quiz.score === c.quiz.length ? "Perfect score!" : "Read the lessons again and retry for full marks."}</p>
        <button class="btn primary" data-quiz="start">${ic("refresh")}Try again</button><button class="btn" data-quiz="close">Back to lessons</button></div>`;
    } else {
      h += `<div class="card quiz"><div class="qcount">Question ${quiz.i+1} of ${c.quiz.length}</div><div class="q">${q.q}</div>
        <div class="opts">${q.o.map((o, k) => `<button data-ans="${k}" ${answered?"disabled":""} class="${answered ? (k === q.a ? "right" : k === quiz.picked ? "wrong" : "") : ""}">${o}${answered && k === q.a ? ic("check") : answered && k === quiz.picked ? ic("x") : ""}</button>`).join("")}</div>
        ${answered ? `<p class="why"><b>${quiz.picked === q.a ? "Correct!" : "Not quite."}</b> ${q.w}</p><button class="btn primary" data-quiz="next">${quiz.i === c.quiz.length - 1 ? "See result" : "Next question"}${ic("next")}</button>` : ""}</div>`;
    }
  } else {
    h += `<div class="card">${c.lessons.map(l => `<div class="lesson ${S.learned[l.id]?"learned":""} ${openLesson===l.id?"open":""} ${justLearned===l.id?"just":""}">
        <button data-lesson="${l.id}" aria-expanded="${openLesson===l.id}"><span class="chk">${ic("check")}</span>${l.t}${ic("next")}</button>
        <div class="body">${l.b}${S.learned[l.id] ? "" : `<button class="got" data-got="${l.id}">${ic("check")}Got it · +5 XP</button>`}</div></div>`).join("")}</div>
      <div class="card"><div class="row"><div><b>Quiz: ${c.quiz.length} questions</b><br><span class="small muted">Best: ${S.quiz[c.id] || 0}/${c.quiz.length} · +15 XP per right answer</span></div>
      <button class="got" style="background:var(--brand)" data-quiz="start">${ic("play")}${S.quiz[c.id] !== undefined ? "Retry" : "Start"}</button></div></div>`;
  }
  $("#tab-tips").innerHTML = h; justLearned = null;
}

/* ---------- First-run equipment setup (also from Pantry) ---------- */
let onb = null; // {i}
const ONB_STEPS = 4;
function openOnboard(){ if (onb) return; guardFocus(); onb = { i:0 }; const el = document.createElement("div"); el.className = "onb"; el.id = "onb";
  el.setAttribute("role", "dialog"); el.setAttribute("aria-modal", "true"); el.setAttribute("aria-labelledby", "onb-h"); document.body.appendChild(el); paintOnboard(); syncBack(); }
function paintOnboard(){
  const el = $("#onb"), i = onb.i, last = i === ONB_STEPS - 1;
  const top = `<div class="onb-top">${i ? `<button class="back" data-onb="back">${ic("back")}Back</button>` : "<span></span>"}
    <div class="dots" aria-hidden="true">${Array.from({ length:ONB_STEPS }, (_, k) => `<i class="${k === i ? "on" : ""}"></i>`).join("")}</div>
    ${last ? "<span></span>" : `<button class="help" data-onb="skip">Skip</button>`}</div>`;
  let body = "";
  if (i === 0) body = `<div class="art">${ic("moka")}</div><h1 id="onb-h">Let's get your equipment ready</h1>
    <p class="lead">Three quick questions so every amount in the recipes fits your kitchen. About 30 seconds.</p>
    <h2 class="sm">Which moka pot do you have?</h2>
    <div class="tiles">${Object.entries(MOKA).map(([k, [w]]) => `<button class="tile ${+k === S.mokaSize ? "on" : ""}" data-onb="moka" data-v="${k}" aria-pressed="${+k === S.mokaSize}"><b>${k}-cup</b><small>${w} ml</small></button>`).join("")}</div>
    <p class="hint">The cup count is usually printed on the bottom. Not sure? Fill the base to just below the valve and measure the water.</p>`;
  if (i === 1) body = `<h1 id="onb-h">How do you grind your coffee?</h1><p class="lead">Grind time and texture are different for each.</p>
    <div class="opts-list">${Object.entries(GRINDERS).map(([k, [icon, l, d]]) => `<button class="opt ${S.grinderType === k ? "on" : ""}" data-onb="grind" data-v="${k}" aria-pressed="${S.grinderType === k}">${ic(icon)}<span><b>${l}</b><small>${d}</small></span><span class="radio">${S.grinderType === k ? ic("check") : ""}</span></button>`).join("")}</div>`;
  if (i === 2) body = `<h1 id="onb-h">What size is your milk pitcher?</h1><p class="lead">It decides how much milk to froth at a time, so the foam doesn't overflow.</p>
    <div class="tiles">${PITCHERS.map(v => `<button class="tile ${v === S.pitcher ? "on" : ""}" data-onb="pitcher" data-v="${v}" aria-pressed="${v === S.pitcher}"><b>${v} ml</b><small>${v <= 350 ? "Small" : v <= 600 ? "Medium" : "Large"}</small></button>`).join("")}</div>
    <p class="hint">Look for the size stamped on the bottom, or the highest mark inside. No pitcher? Pick 350 ml and use a tall mug.</p>`;
  if (i === 3) body = `<div class="art ok">${ic("check")}</div><h1 id="onb-h">You're all set</h1><p class="lead">Every recipe now fits your equipment.</p>
    <div class="card"><ul class="need"><li><span>Moka pot</span><b>${S.mokaSize}-cup · ${S.mokaWater} ml</b></li><li><span>Grinder</span><b>${GRINDERS[S.grinderType][1]}</b></li><li><span>Milk pitcher</span><b>${S.pitcher} ml</b></li></ul></div>
    <p class="hint">You can change any of this later in Pantry.</p>`;
  el.innerHTML = `<div class="onb-in">${top}<div class="onb-body">${body}</div>
    <button class="btn primary onb-go" data-onb="${last ? "done" : "next"}">${last ? `${ic("cup")}Start making coffee` : `Continue${ic("next")}`}</button></div>`;
  el.scrollTop = 0;
}
function onbAct(a, v){
  if (a === "moka") setMoka(+v);
  else if (a === "grind"){ S.grinderType = v; if (v === "none"){ S.inv.ground = true; } else S.inv.beans = true; }
  else if (a === "pitcher") S.pitcher = +v;
  else if (a === "next") onb.i++;
  else if (a === "back") onb.i = Math.max(0, onb.i - 1);
  else if (a === "skip" || a === "done"){ closeOnboard(); return; }
  save(); paintOnboard();
}
function closeOnboard(){
  const first = !S.setupDone; S.setupDone = true; save();
  $("#onb") && $("#onb").remove(); onb = null; unshield(); renderAll(); if (tabVisible("tips")) renderLearn();
  if (first) setTimeout(maybeInstall, 1200); // the Home Screen prompt waits until setup is done
}
function maybeInstall(){ if (!isStandalone() && PLAT.os !== "desktop" && !S.installSeen && S.view === "pick" && tabVisible("make")) sheetOpen("install", paintInstall); }

/* ---------- Learn intro (first visit; replay from "How it works") ---------- */
const INTRO = [
  ["cup", "Every drink counts", "Finish a drink to earn XP. Then rate it: tell the app what was off, and it tells you exactly what to change next time."],
  ["book", "Short lessons and quizzes", "Five topics, from the drinks themselves to safety. Each lesson takes a minute. Tap Got it, then take the 3-question quiz."],
  ["trophy", "Level up and collect badges", `Go from Beginner to Coffee Master, and unlock ${BADGES.length} badges along the way, like Milk Master and Full Menu. Make Today's Special for bonus XP.`]
];
let introI = -1, introEl = null;
function openIntro(){
  if (introEl || sheet || onb) return;
  guardFocus(); introI = 0; introEl = document.createElement("div");
  introEl.innerHTML = `<div class="scrim" data-intro-close></div><div class="sheet" role="dialog" aria-modal="true" aria-labelledby="intro-h"></div>`;
  document.body.appendChild(introEl);
  paintIntro();
  requestAnimationFrame(() => requestAnimationFrame(() => introEl && introEl.querySelectorAll(".scrim,.sheet").forEach(x => x.classList.add("show"))));
  syncBack();
}
function paintIntro(){
  const [icon, h, t] = INTRO[introI], last = introI === INTRO.length - 1;
  const sh = introEl.querySelector(".sheet");
  sh.innerHTML = `<div class="grab"></div><div class="art">${ic(icon)}</div><h2 id="intro-h">${h}</h2><p>${t}</p>
    <div class="dots">${INTRO.map((_, k) => `<i class="${k === introI ? "on" : ""}"></i>`).join("")}</div>
    <div class="acts"><button class="btn" data-intro-close>${introI ? "Close" : "Skip"}</button>
    <button class="btn primary" ${last ? 'data-intro-go' : 'data-intro-next'}>${last ? "Start with The Drinks" : "Next"}${ic("next")}</button></div>`;
  sh.querySelector(".btn.primary").focus({ preventScroll:true });
}
function closeIntro(then){
  if (!introEl) return;
  S.seenLearn = true; save();
  const el = introEl; introEl = null;
  el.querySelectorAll(".scrim,.sheet").forEach(x => x.classList.remove("show"));
  setTimeout(() => el.remove(), 400); unshield();
  if (then) then();
}
document.addEventListener("keydown", e => { if (introEl && e.key === "Escape"){ closeIntro(); syncBack(); } });

/* ---------- Home Screen install prompt and progress transfer ---------- */
const PLAT = (() => {
  const ua = navigator.userAgent;
  const ios = /iPhone|iPad|iPod/.test(ua) || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
  const android = /Android/i.test(ua);
  const inapp = /FBAN|FBAV|FB_IAB|Instagram|Line\/|MicroMessenger|Snapchat|LinkedInApp|TikTok|musical_ly|Twitter|GSA\//.test(ua) || (android && /; wv\)/.test(ua));
  let br = "other";
  if (inapp) br = "inapp";
  else if (ios) br = /CriOS/.test(ua) ? "chrome" : /FxiOS/.test(ua) ? "firefox" : /EdgiOS/.test(ua) ? "edge" : /Safari/.test(ua) ? "safari" : "other";
  else if (android) br = /SamsungBrowser/.test(ua) ? "samsung" : /Firefox/.test(ua) ? "firefox" : /EdgA/.test(ua) ? "edge" : /Chrome/.test(ua) ? "chrome" : "other";
  return { os: ios ? "ios" : android ? "android" : "desktop", br };
})();
const isStandalone = () => matchMedia("(display-mode: standalone)").matches || navigator.standalone === true;
const hasProgress = () => S.log.length > 0 || Object.keys(S.learned).length > 0 || Object.keys(S.quiz).length > 0;
let installEvt = null; // Android Chrome's own install prompt, when the browser offers one
window.addEventListener("beforeinstallprompt", e => { e.preventDefault(); installEvt = e; if (sheet && sheet.kind === "install") sheetRepaint(); });
window.addEventListener("appinstalled", () => { installEvt = null; S.installSeen = true; save(); sheetClose(); toast("check", "Installed. Open it from your Home Screen"); });

function installGuide(){
  const { os, br } = PLAT, g = { steps:[] };
  if (br === "inapp"){
    g.intro = `You're in another app's built-in browser, which can't add apps to your Home Screen. Open this page in ${os === "ios" ? "Safari" : "Chrome"} first.`;
    g.steps = [[os === "ios" ? "dotsH" : "dotsV", "Tap the <b>menu</b> or <b>Share</b> button in this browser"],
               ["compass", `Choose <b>Open in ${os === "ios" ? "Safari" : "Chrome"}</b> (or <b>Open in browser</b>)`],
               ["plusSq", "This guide will show you the next steps there"]];
    g.copyLink = true; return g;
  }
  if (os === "ios"){
    g.steps = br === "safari"
      ? [["share", "Tap <b>Share</b> in Safari's toolbar. Don't see it? Tap the <b>three dots</b> first"],
         ["plusSq", "Scroll down and tap <b>Add to Home Screen</b>"],
         ["check", "Keep <b>Open as Web App</b> on, then tap <b>Add</b>"]]
      : br === "chrome"
      ? [["share", "Tap <b>Share</b> in the address bar, at the top right"],
         ["plusSq", "Tap <b>Add to Home Screen</b>"],
         ["check", "Tap <b>Add</b>"]]
      : [["menu", "Open the browser <b>menu</b>, then tap <b>Share</b>"],
         ["plusSq", "Tap <b>Add to Home Screen</b>"],
         ["check", "Tap <b>Add</b>"]];
    g.transfer = hasProgress();
    return g;
  }
  if (os === "android"){
    if (installEvt){ g.install = true; return g; }
    g.steps = br === "samsung"
      ? [["menu", "Tap the <b>menu</b> at the bottom right"], ["plusSq", "Tap <b>Add page to</b>, then <b>Home screen</b>"], ["check", "Tap <b>Add</b>"]]
      : br === "firefox"
      ? [["dotsV", "Tap the <b>three-dot menu</b>"], ["plusSq", "Tap <b>Install</b> or <b>Add to Home screen</b>"], ["check", "Confirm with <b>Add</b>"]]
      : [["dotsV", "Tap the <b>three-dot menu</b> at the top right"], ["plusSq", "Tap <b>Add to Home screen</b> or <b>Install app</b>"], ["check", "Tap <b>Install</b>"]];
    return g;
  }
  g.intro = "Open <b>coffee-ghor.vercel.app</b> on your phone, and this guide will show the exact steps for it.";
  g.steps = [["download", "On a computer, Chrome and Edge show an <b>Install</b> icon at the right of the address bar"]];
  g.copyLink = true; return g;
}
function paintInstall(sh){
  const g = installGuide(), ios = PLAT.os === "ios";
  sh.innerHTML = `<button class="sclose" data-sheet-close aria-label="Close">${ic("x")}</button><div class="grab"></div>
    <div class="ihead"><img src="apple-touch-icon.png" alt=""><h2 id="sh-h">Add Coffee Ghor to your Home Screen</h2></div>
    <ul class="perks"><li>${ic("check")}Opens full screen, like a real app</li>
      <li>${ic("check")}${ios ? "Keeps your progress, ratings and settings. Safari can clear saved data from sites you haven't opened in a while" : "Your progress, ratings and settings come with you"}</li></ul>
    ${g.intro ? `<p class="lead">${g.intro}</p>` : ""}
    ${g.steps.length ? `<ol class="isteps">${g.steps.map(([i, t], k) => `<li><span class="in">${k + 1}</span><span class="it">${t}</span><span class="ii">${ic(i)}</span></li>`).join("")}</ol>` : ""}
    ${g.install ? `<button class="btn primary" data-install>${ic("download")}Install app</button>` : ""}
    ${g.transfer ? `<div class="note n-tip"><b>Bring your progress with you</b>On iPhone the Home Screen app has its own storage, separate from Safari. Copy your progress now, then paste it when the app opens.<br><button class="apply" data-copyprog>${ic("copy")}Copy my progress</button></div>` : ""}
    ${g.copyLink ? `<button class="btn" data-copylink>${ic("copy")}Copy link</button>` : ""}
    <button class="btn" data-sheet-close>Not now</button>`;
}
function paintRestore(sh, err=""){
  const welcome = sheet.kind === "welcome", val = sh.querySelector("textarea") ? sh.querySelector("textarea").value : "";
  sh.innerHTML = `<button class="sclose" data-sheet-close aria-label="Close">${ic("x")}</button><div class="grab"></div>
    <div class="art">${ic(welcome ? "cup" : "paste")}</div>
    <h2 id="sh-h">${welcome ? "Welcome to the app" : "Paste your progress"}</h2>
    <p>${welcome ? "Moved over from Safari? Paste the progress code you copied, and your level, badges, ratings and settings come with you." : "Paste a progress code you copied from another browser or phone. Your drinks, lessons and badges are added to what's here. The pantry and pot settings come from the code."}</p>
    <textarea aria-label="Progress code" placeholder="CG1.…" autocomplete="off" autocapitalize="off" spellcheck="false">${val}</textarea>
    ${err ? `<p class="err" role="alert">${err}</p>` : ""}
    ${navigator.clipboard && navigator.clipboard.readText ? `<button class="btn" data-pasteclip>${ic("paste")}Paste from clipboard</button>` : ""}
    <div class="acts"><button class="btn" data-sheet-close>${welcome ? "Start fresh" : "Cancel"}</button><button class="btn primary" data-restore>${ic("check")}Restore</button></div>`;
}
// Progress code: everything that makes the app yours, as one copyable line.
const SETTINGS_KEYS = ["drink","people","strength","sweet","source","roast","grinder","grinderType","mokaSize","mokaWater","mokaCoffee","yieldPct","pitcher","lang"];
function exportCode(){
  const d = { v:1, log:S.log, learned:S.learned, quiz:S.quiz, inv:S.inv, past:S.past, badges:S.badges, set:Object.fromEntries(SETTINGS_KEYS.map(k => [k, S[k]])) };
  return "CG1." + btoa(unescape(encodeURIComponent(JSON.stringify(d))));
}
function importCode(raw){
  try{
    const m = String(raw).replace(/\s+/g, "").match(/CG1\.([A-Za-z0-9+/=]+)/); if (!m) return null;
    const d = JSON.parse(decodeURIComponent(escape(atob(m[1])))); if (!isObj(d) || d.v !== 1) return null;
    // Merge, then send the result through the same gate as storage: nothing in a code is trusted
    const P = isObj(d.past) ? d.past : {}, Q = isObj(d.quiz) ? d.quiz : {}, set = isObj(d.set) ? d.set : {};
    const merged = { ...S, log:[...S.log, ...(Array.isArray(d.log) ? d.log.filter(x => isObj(x) && !S.log.some(y => y.t === x.t)) : [])],
      learned:{ ...S.learned, ...(isObj(d.learned) ? d.learned : {}) }, inv:{ ...S.inv, ...(isObj(d.inv) ? d.inv : {}) },
      quiz:Object.fromEntries(CATS.filter(c => S.quiz[c.id] !== undefined || Q[c.id] !== undefined).map(c => [c.id, Math.max(num(S.quiz[c.id], 0, 99, 0), num(Q[c.id], 0, 99, 0))])),
      past:{ xp:Math.max(S.past.xp, num(P.xp, 0, 1e7, 0)), cups:Math.max(S.past.cups, num(P.cups, 0, 1e6, 0)), milk:Math.max(S.past.milk, num(P.milk, 0, 1e6, 0)),
             specials:Math.max(S.past.specials, num(P.specials, 0, 1e6, 0)), drinks:[...S.past.drinks, ...(Array.isArray(P.drinks) ? P.drinks : [])] },
      badges:[...S.badges, ...(Array.isArray(d.badges) ? d.badges : [])], view:"pick", setupDone:true };
    for (const k of SETTINGS_KEYS) if (set[k] !== undefined) merged[k] = set[k];
    S = normalize(merged); S.badges = earned(stats()); save(); return S.log.length;
  }catch(e){ return null; }
}
async function copyText(text){
  try{ await navigator.clipboard.writeText(text); return true; }catch(e){}
  try{ const t = document.createElement("textarea"); t.value = text; t.setAttribute("readonly", ""); t.style.position = "fixed"; t.style.opacity = "0"; document.body.appendChild(t); t.select(); const ok = document.execCommand("copy"); t.remove(); return ok; }catch(e){ return false; }
}
// One bottom sheet at a time (install, welcome, restore). The Learn intro uses the same look.
let sheet = null;
function sheetOpen(kind, paint){
  if (sheet || introEl || onb) return;
  const el = document.createElement("div");
  el.innerHTML = `<div class="scrim" data-sheet-close></div><div class="sheet" role="dialog" aria-modal="true" aria-labelledby="sh-h" tabindex="-1"></div>`;
  guardFocus(); document.body.appendChild(el); sheet = { el, kind, paint }; syncBack();
  paint(el.querySelector(".sheet"));
  requestAnimationFrame(() => requestAnimationFrame(() => el.querySelectorAll(".scrim,.sheet").forEach(x => x.classList.add("show"))));
  setTimeout(() => el.querySelector(".sheet").focus({ preventScroll:true }), 50); // focus the dialog, not a button, so no ring flashes on open
}
function sheetRepaint(err){ if (sheet) sheet.paint(sheet.el.querySelector(".sheet"), err); }
function sheetClose(){
  if (!sheet) return;
  const { el, kind } = sheet; sheet = null;
  if (kind === "install") S.installSeen = true;
  if (kind === "welcome"){ S.appWelcomed = true; if (!S.setupDone) setTimeout(openOnboard, 400); }
  if (kind === "rate"){ rateDraft = null; if (tabVisible("tips")) renderLearn(); else if (tabVisible("make") && S.view === "pick") renderPick(); }
  save();
  el.querySelectorAll(".scrim,.sheet").forEach(x => x.classList.remove("show"));
  setTimeout(() => el.remove(), 400); unshield();
}
document.addEventListener("keydown", e => { if (sheet && e.key === "Escape"){ sheetClose(); syncBack(); } });

/* ---------- Timer: lives on its step, floats as a pill when you move away ---------- */
// Counts down to a real end time, so it stays right when the phone sleeps or throttles the page.
let tInt = null, tLeft = 0, tStep = -1, tDrink = null, tDone = false, tEnd = 0, tTotal = 1;
const fmt = s => `${Math.floor(s/60)}:${String(Math.max(0,s)%60).padStart(2,"0")}`;
const onTimerStep = () => S.view === "cook" && tStep === S.step && tDrink === S.drink;
function startTimer(sec){
  clearInterval(tInt); audioOn();
  tTotal = sec; tEnd = Date.now() + sec * 1000; tLeft = sec; tStep = S.view === "cook" ? S.step : -1; tDrink = S.drink; tDone = false;
  tInt = setInterval(tick, 250); paintTimer();
}
function tick(){
  if (tInt === null) return;
  const left = Math.max(0, Math.ceil((tEnd - Date.now()) / 1000));
  if (left === tLeft && left) return;
  tLeft = left;
  if (!left){ clearInterval(tInt); tInt = null; tDone = true; beep(); toast("clock", "Time's up! Check it"); try{ navigator.vibrate && navigator.vibrate([300,150,300]); }catch(e){} }
  paintTimer();
}
document.addEventListener("visibilitychange", () => { if (document.visibilityState === "visible") tick(); });
function stopTimer(){ clearInterval(tInt); tInt = null; tStep = -1; tDrink = null; tDone = false; paintTimer(); if (S.view === "cook" && tabVisible("make")) renderCook(); }
function paintTimer(){
  const box = $("#tbox");
  if (box && onTimerStep()){
    box.className = "tbox " + (tDone ? "ding" : "run");
    $("#tbv").textContent = tDone ? "Done" : fmt(tLeft);
    box.querySelector("button").innerHTML = tDone ? ic("play")+"Start timer" : ic("stop")+"Stop";
    const bar = box.querySelector(".tbar"); if (bar) bar.style.setProperty("--p", (tDone ? 0 : tLeft / tTotal * 100) + "%");
    const st = $("#stepcard .stage"); if (st) st.classList.toggle("live", tInt !== null);
  }
  updateFloat();
}
function updateFloat(){
  const el = $("#timer"), onItsStep = onTimerStep() && tabVisible("make");
  el.classList.toggle("show", (tInt !== null || tDone) && !onItsStep);
  el.classList.toggle("ding", tDone);
  $("#tval").textContent = tDone ? "Time's up! Check it" : fmt(tLeft);
}
// One audio context, switched on by the Start tap: iOS only plays sound that a tap allowed.
let actx = null;
function audioOn(){ try{ actx = actx || new (window.AudioContext || window.webkitAudioContext)(); if (actx.state === "suspended") actx.resume(); }catch(e){} }
function beep(){
  try{ audioOn(); const a = actx; [0,0.35,0.7].forEach(t => { const o=a.createOscillator(), g=a.createGain(); o.frequency.value=880; o.connect(g); g.connect(a.destination); g.gain.setValueAtTime(.2,a.currentTime+t); o.start(a.currentTime+t); o.stop(a.currentTime+t+.2); }); }catch(e){}
}
$("#tstop").onclick = stopTimer;

/* ---------- Overlays: keep focus inside, and the Back button steps back inside the app ---------- */
let lastFocus = null;
const shield = on => document.querySelectorAll("body > header, body > main, body > nav.tabs").forEach(el => { el.inert = on; });
const unshield = () => { if (!sheet && !introEl && !winEl && !onb){ shield(false); if (lastFocus && lastFocus.isConnected) lastFocus.focus({ preventScroll:true }); lastFocus = null; } };
const guardFocus = () => { if (!sheet && !introEl && !winEl && !onb) lastFocus = document.activeElement; shield(true); };
let popSkip = false;
const atRoot = () => !winEl && !sheet && !introEl && !onb && (tabVisible("make") ? S.view === "pick" : tabVisible("tips") ? !learnCat : true);
function syncBack(){
  try{
    const guard = history.state && history.state.cg;
    if (!atRoot() && !guard) history.pushState({ cg:1 }, "");
    else if (atRoot() && guard){ popSkip = true; history.back(); }
  }catch(e){}
}
window.addEventListener("popstate", () => {
  if (popSkip){ popSkip = false; return; }
  if (winEl) closeWin();
  else if (sheet) sheetClose();
  else if (introEl) closeIntro();
  else if (onb){ if (onb.i) onbAct("back"); }
  else if (tabVisible("make") && S.view !== "pick") go(S.view === "cook" ? "setup" : "pick");
  else if (tabVisible("tips") && learnCat){ learnCat = null; quiz = null; renderLearn(); window.scrollTo(0, 0); }
  syncBack();
});
document.addEventListener("keydown", e => { if (winEl && e.key === "Escape"){ closeWin(); syncBack(); } });

/* ---------- Events ---------- */
$("#tabs").innerHTML = [["make","cup","Make"],["inv","jar","Pantry"],["tips","learn","Learn"]].map(([k,i,l]) => `<button data-tab="${k}" class="${k==="make"?"on":""}">${ic(i)}${l}</button>`).join("");
function renderAll(){ renderMake(); renderInv(); }
function showTab(tab){
  document.querySelectorAll("nav.tabs button").forEach(b => b.classList.toggle("on", b.dataset.tab === tab));
  ["make","inv","tips"].forEach(x => $("#tab-"+x).classList.toggle("hide", x !== tab));
  document.body.classList.remove("cooking","has-cta","sub");
  if (tab === "make") renderMake();
  else { wakeOff(); if (tab === "tips"){ renderLearn(); if (!S.seenLearn) setTimeout(openIntro, 250); } }
  updateFloat(); window.scrollTo(0,0);
}
// Each tap redraws part of the page. Put focus back on the same control, so keyboards and screen readers keep their place.
const kebab = k => k.replace(/[A-Z]/g, c => "-" + c.toLowerCase());
const keyOf = el => { const ks = Object.keys(el.dataset); return ks.length ? ks.map(k => `[data-${kebab(k)}="${CSS.escape(el.dataset[k])}"]`).join("") : el.id ? "#" + CSS.escape(el.id) : null; };
document.addEventListener("click", e => {
  const t = e.target.closest("button,[data-intro-close],[data-sheet-close],[data-win-close]");
  const had = !!t && document.activeElement === t, key = t && keyOf(t);
  onTap(e, t);
  if (had && key && !t.isConnected){ const n = document.querySelector(key); if (n && !n.disabled) n.focus({ preventScroll:true }); }
  syncBack();
});
function onTap(e, t){
  if (!t || t.disabled) return;
  const D = t.dataset;
  if ("winClose" in D){ closeWin(); return; }
  if ("sheetClose" in D){ sheetClose(); return; }
  if ("openInstall" in D){ sheetOpen("install", paintInstall); return; }
  if ("openRestore" in D){ sheetOpen("restore", paintRestore); return; }
  if ("install" in D && installEvt){ const ev = installEvt; installEvt = null; ev.prompt(); ev.userChoice.then(c => { if (c.outcome === "accepted"){ S.installSeen = true; save(); sheetClose(); } else sheetRepaint(); }).catch(() => {}); return; }
  if ("copyprog" in D || "copyCode" in D){ copyText(exportCode()).then(ok => toast(ok ? "copy" : "x", ok ? "Progress copied" : "Couldn't copy. Try again")); return; }
  if ("copylink" in D){ copyText(location.origin && location.origin !== "null" ? location.origin + "/" : "https://coffee-ghor.vercel.app/").then(ok => toast(ok ? "copy" : "x", ok ? "Link copied" : "Couldn't copy")); return; }
  if ("pasteclip" in D){ navigator.clipboard.readText().then(txt => { const ta = sheet && sheet.el.querySelector("textarea"); if (ta){ ta.value = txt; } }).catch(() => sheetRepaint("Couldn't read the clipboard. Long-press the box and tap Paste.")); return; }
  if ("restore" in D){ const ta = sheet.el.querySelector("textarea"), n = importCode(ta.value);
    if (n === null){ sheetRepaint("That code doesn't look right. Copy it again and paste the whole thing."); return; }
    S.appWelcomed = true; sheetClose(); renderAll(); if (tabVisible("tips")) renderLearn(); toast("check", `Progress restored · ${plural(n, "drink", "drinks")}`); return; }
  if (D.gtype){ S.grinderType = D.gtype; if (D.gtype === "none"){ S.inv.ground = true; } save(); renderInv(); renderMake(); return; }
  if ("onboard" in D){ openOnboard(); return; }
  if (D.onb !== undefined){ onbAct(D.onb, D.v); return; }
  if (D.gotoDrink){ S.drink = D.gotoDrink; showTab("make"); go("setup"); return; }
  if ("intro" in D){ openIntro(); return; }
  if ("introNext" in D){ introI++; paintIntro(); return; }
  if ("introGo" in D){ closeIntro(() => { learnCat = "drinks"; openLesson = "d1"; quiz = null; renderLearn(); window.scrollTo(0,0); }); return; }
  if ("introClose" in D){ closeIntro(); return; }
  if (D.tab){
    if (D.tab === "make" && tabVisible("make") && S.view === "setup") go("pick");
    else if (D.tab === "tips" && tabVisible("tips")){ learnCat = null; quiz = null; renderLearn(); window.scrollTo(0,0); }
    else showTab(D.tab);
    return;
  }
  if (D.drink){ if (D.drink !== S.drink) S.step = 0; S.drink = D.drink; go("setup"); return; }
  if (D.go){ go(D.go); return; }
  if ("start" in D){ go("cook"); return; } // resumes where you left off, if you did
  if ("restart" in D){ S.step = 0; go("cook"); return; }
  if ("again" in D){ S.step = 0; go("setup"); return; }
  if (D.nav){ nav(+D.nav); return; }
  if (D.lang){ S.lang = D.lang; save(); if (sheet && sheet.kind === "rate") sheetRepaint(); else if (S.view === "done" && tabVisible("make")) repaintRate(); else renderMake(); return; }
  if (D.ppl){ const n = Math.min(20, Math.max(1, S.people + +D.ppl)); pplPop = n > S.people ? 1 : n < S.people ? -1 : 0; S.people = n; S.step = 0; save(); renderMake(); return; }
  const sg = t.closest("[data-seg]");
  if (sg && D.v){ S[sg.dataset.seg] = D.v; S.step = 0; save(); renderMake(); return; }
  if (D.timer){ if (onTimerStep() && tInt !== null) stopTimer(); else startTimer(+D.timer); return; }
  // Rating
  if (D.rateLog){ openRate(+D.rateLog); return; }
  if (D.star && rateDraft && !rateDraft.saved){ const C = rateDraft.cur; C.rating = +D.star; if (C.rating === 5) C.issues.clear(); starPop = C.rating; repaintRate();
    if (C.rating === 5) burstFrom(document.querySelector(rateDraft.where === "sheet" ? ".sheet .stars" : "#ratebox .stars"), 26); return; }
  if (D.issue && rateDraft && !rateDraft.saved){ const C = rateDraft.cur; C.issues.has(D.issue) ? C.issues.delete(D.issue) : C.issues.add(D.issue); repaintRate(); return; }
  if ("rate" in D && rateDraft && !rateDraft.saved){ const R = rateDraft; R.done.push(R.cur); R.cur = { rating:0, issues:new Set() };
    if (R.done.length >= R.n) finishRating(); else { repaintRate(); toast("users", `Pass the phone to person ${R.done.length + 1}`); } return; }
  if ("rateFinish" in D && rateDraft && rateDraft.done.length){ finishRating(); return; }
  if (D.fix && rateDraft){ const [issue, k, v] = D.fix.split(":"); S[k] = v; save(); rateDraft.applied.add(issue); repaintRate(); return; }
  // Learn
  if (D.cat !== undefined){ learnCat = D.cat || null; openLesson = D.open || null; quiz = null; renderLearn(); window.scrollTo(0,0); return; }
  if (D.lesson){ openLesson = openLesson === D.lesson ? null : D.lesson; renderCat(); return; }
  if (D.got){ reward(() => { S.learned[D.got] = true; }); justLearned = D.got; renderCat(); return; }
  if (D.quiz === "start"){ quiz = { i:0, score:0, picked:null }; renderCat(); window.scrollTo(0,0); return; }
  if (D.quiz === "close"){ quiz = null; renderCat(); return; }
  if (D.ans !== undefined && quiz){ const c = CATS.find(x => x.id === learnCat); quiz.picked = +D.ans; if (quiz.picked === c.quiz[quiz.i].a) quiz.score++; try{ navigator.vibrate && navigator.vibrate(quiz.picked === c.quiz[quiz.i].a ? 15 : [30,40,30]); }catch(e){} renderCat(); return; }
  if (D.quiz === "next"){ const c = CATS.find(x => x.id === learnCat); quiz.i++; quiz.picked = null;
    if (quiz.i >= c.quiz.length){ const sc = quiz.score; reward(() => { S.quiz[c.id] = Math.max(S.quiz[c.id] || 0, sc); }); if (sc === c.quiz.length){ renderCat(); burstFrom($(".quiz .q"), 44); return; } }
    renderCat(); return; }
  if (t.id === "reset" && confirm("This resets your pantry and pot settings to the defaults. Your progress is kept. Continue?")){
    // Settings only: progress, badges and "already seen" screens stay as they were
    const keep = { log:S.log, learned:S.learned, quiz:S.quiz, past:S.past, badges:S.badges, seenBadges:S.seenBadges, lang:S.lang,
                   setupDone:S.setupDone, installSeen:S.installSeen, seenLearn:S.seenLearn, appWelcomed:S.appWelcomed };
    S = { ...structuredClone(DEFAULTS), ...keep }; save(); renderAll(); toast("check", "Settings reset"); }
}
document.addEventListener("change", e => {
  const t = e.target;
  if (t.dataset.inv){ S.inv[t.dataset.inv] = t.checked; save(); renderMake(); }
  if (t.id === "grinder"){ S.grinder = t.value; save(); renderMake(); }
  if ("moka" in t.dataset){ setMoka(+t.value); save(); renderInv(); renderMake(); }
  if ("pitcher" in t.dataset){ S.pitcher = +t.value; save(); renderInv(); renderMake(); }
  if (t.dataset.set){ // stay inside the box's own min and max: 0.5 ml of water would mean infinite brews
    const v = num(t.value, +t.min, +t.max, null);
    if (v !== null){ S[t.dataset.set] = v; save(); renderInv(); renderMake(); } else t.value = S[t.dataset.set]; }
});

// A saved "done" screen is stale on reopen; resume cooking mid-recipe, otherwise start fresh.
let S = load();
if (S.view === "done") S.view = "pick";
S.badges = earned(stats()); // bank what's already earned, so a badge like On a Roll stays once you have it
try{ renderAll(); }catch(e){ // never leave a blank screen: fall back to fresh settings, keep the progress
  console.error(e); const keep = { log:S.log, learned:S.learned, quiz:S.quiz, past:S.past, badges:S.badges };
  S = { ...structuredClone(DEFAULTS), ...keep, setupDone:true }; save(); renderAll(); }
try{ navigator.storage && navigator.storage.persist && navigator.storage.persist(); }catch(e){}
// Offline: the service worker keeps a copy for when the kitchen has no signal (network first, so online is always fresh)
try{ if ("serviceWorker" in navigator && (location.protocol === "https:" || location.hostname === "localhost")) navigator.serviceWorker.register("/sw.js").catch(() => {}); }catch(e){}
const iosAppWelcome = isStandalone() && PLAT.os === "ios" && !S.appWelcomed && !hasProgress();
if (!S.setupDone && !iosAppWelcome) openOnboard(); // first run: get the equipment right before anything else
setTimeout(() => {
  if (S.view !== "pick" || !tabVisible("make") || onb) return; // only on the drink list, never over a recipe, rating or setup
  if (isStandalone()){ if (iosAppWelcome) sheetOpen("welcome", paintRestore); else if (!S.appWelcomed){ S.appWelcomed = true; save(); } }
  else maybeInstall();
}, 1200);
