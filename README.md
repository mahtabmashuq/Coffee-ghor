# Coffee Ghor

**Version 1.0.0** · Live at **https://coffee-ghor.vercel.app** · [Changelog](CHANGELOG.md)

A home coffee guide for a moka pot kitchen. Pick a drink and how many people, and Coffee Ghor works out the amounts for *your* equipment, walks you through it one step at a time, then helps you get better with every cup.

Installable on iPhone and Android as a Home Screen app. No account, no backend: everything is saved on the phone.

## Features

**Make**
- 10 drinks with standard café names: Espresso, Americano, Cappuccino, Latte, Flat White, Mocha, Café au Lait, Iced Latte, Iced Mocha, Whipped Coffee
- Set people, strength, bean roast and sugar; strength always stays inside each drink's café ratio
- A "You'll need" shopping list, then a guided step-by-step mode: one large step per screen, progress bar, swipe or Back/Next, built-in timers, screen kept awake, resumes where you left off
- **EN | BN** switch for the steps and rating advice (Banglish). Drink names always stay in English
- Every recipe checked against coffee standards: kettle first, grind while it heats, milk heated right before frothing, warmed cups, safe moka pot use

**Your equipment**
- First-run setup: *Let's get your equipment ready* (moka pot size, grinder, milk pitcher)
- Moka pot 1 to 12 cup sets the water and coffee per brew; electric, manual or no grinder changes the grinding steps; pitcher size sets the foam marks and batch sizes
- Pantry for ingredients and tools (kettle, scale, thermometer, flask, cinnamon, vanilla); steps adapt to what you have

**Rate and improve**
- Rate every drink, one rating per cup: pass the phone so each person rates their own
- "Anything off?" gives a specific fix (too bitter, sour, weak, burnt, poor foam, sweetness), with one-tap changes for next time
- Skipped a rating? A reminder and a waiting list let you rate it later

**Learn and level up**
- 5 topics with short lessons and quizzes: The Drinks, Moka Pot, Beans & Grinding, Milk & Foam, Safety
- XP, 5 levels from Beginner to Coffee Master, 10 badges, day streaks, and a "Your next move" suggestion

**App**
- Device-aware "Add to Home Screen" guide for iPhone, Android and in-app browsers
- Progress codes to move your level, ratings and settings to another phone
- Light and dark mode, iOS type scale, 44 px touch targets

## Releases

| Version | Highlights |
|---|---|
| **1.0.0** | First full release: spacing fixes, app version shown in Pantry, README and changelog |
| 0.8.0 | Equipment setup, equipment-aware recipes, per-cup ratings, level-up guide |
| 0.7.0 | iOS type scale; rate drinks later |
| 0.6.0 | Every recipe refined to coffee standards; recipe evaluation |
| 0.5.0 | UI pass; iPhone status bar fix; Learn intro; Home Screen prompt; progress transfer |
| 0.4.0 | Learn tab, XP, levels, badges; ratings with fixes; more Pantry |
| 0.3.0 | Guided flow: pick, set up, then one step at a time |
| 0.2.0 | Plain English, standard drink names, redesign; installable on iPhone |
| 0.1.0 | First version: Banglish family coffee guide |

Full details in [CHANGELOG.md](CHANGELOG.md).

## How it's built
A single static `index.html` (HTML, CSS and vanilla JavaScript), no build step and no dependencies. State lives in `localStorage` on each phone. `manifest.json` and PNG icons make it installable.

## Deploy
The Vercel project `coffee-ghor` is linked to this repo.
- Push or merge to `main`: production deploy to https://coffee-ghor.vercel.app
- Push to any other branch: preview deploy (needs a Vercel login to view)

## Tests
Both run in a headless browser with Playwright (`npm i -D playwright`).

- `node tests/coffee-eval.js index.html` checks every drink across people, strength, roast, sugar, kitchen tools, moka pot size, pitcher size and grinder type (8,640 combinations) against coffee rules: café ratios, workflow order, grinder and pitcher limits, milk temperature, safety cues and EN/BN parity.
- `node tests/spacing-check.js index.html` walks every screen and sheet at 375 and 430 px in light and dark mode and reports text that touches or spills past the edge of its box.
