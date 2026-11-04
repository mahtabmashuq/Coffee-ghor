# Changelog

All notable changes to Coffee Ghor. Versions follow [semantic versioning](https://semver.org). The 0.x releases built the app up to its first full release, 1.0.0. From here on, a major version changes how the app works for existing users, a minor version adds features, and a patch fixes things.

## 1.3.0 · 2026-11-04
### Changed
- **Every step scene redrawn** (following the Impeccable design guide). They're now tableaux on one full-width kitchen counter instead of small drawings in an empty box: subjects are bigger and fill the frame, and nothing floats. The pot sits on a burner with pan supports, the tap comes out of the wall, the kettle pours in from the edge of the frame, and soft contact shadows ground every object
- Scenes tell the step's story with the props it uses: beans waiting and a pile of grounds growing beside the grinder, your cup waiting next to the moka pot, a thermometer that climbs or falls, a tick when the water reaches the valve line, the burner knob turning to your heat setting before the flames light, one glass per person, and the brews left as "×2" inside a turning cycle arrow
- **Scenes follow a running timer**: the coffee in the pot rises with the brew timer, foam climbs with the froth timer, the thermometer falls with the ice bath, and the cremina turns golden as you whisk
- **The finish pours your drink**: it falls in from above and fills layer by layer, then milk drinks get latte art on the foam, black coffee gets crema, iced drinks get ice and a straw, frappes get the whipped top
- Motion uses exponential ease-out with no reflex bounce; line weights stay even at every size; the flashing green "timer running" ring (a zero-offset glow) is gone, and so are the gold glow halos on rewards
- Reduce motion: nothing moves, but scenes still show the finished state and the timer's progress
- **README rebuilt**: new banner, an animated demo of a cappuccino being made, every screenshot retaken and shown in a phone frame, a scene gallery that follows GitHub's light or dark theme, and a new social preview card
### Fixed
- A step sliding in made the page briefly wider than the screen, which could nudge the layout sideways on phones
- "You're now a Apprentice": level-ups and drink names now use "an" before a vowel everywhere

## 1.2.0 · 2026-11-04
### Added
- **An animated scene for every step**, 24 in all: kettle steam, a buzzing grinder with bouncing beans, a turning crank, water rising to the valve line, grounds being levelled, the moka pot on the flame with coffee bubbling up inside (smaller flames on low heat), the cold tap on the base, cremina whisked from dark to golden, milk steaming with a thermometer, the frother spinning as foam rises, an ice bath, a blender vortex and ice dropping into glasses. Scenes follow the step's action, not its text, so they're the same in English and Banglish
- Scenes speed up and glow while a timer runs, and the timer box drains as time runs out
- **Finish celebration**: the drink fills layer by layer in its real proportions, confetti, and an XP card that counts up with a breakdown (+20 made, +30 first time, +25 special), level-ups and new badges
- **Level-up and new-badge cards** with confetti wherever you earn them (ratings, lessons, quizzes)
- **Today's Special**: one drink a day from what you can make, +25 XP. New badge **Chef's Pick** for making three (11 badges now)
- **Streak flame** on the drink list, with a nudge when the streak is about to end
- One cup per person beside the people counter; stars pop when tapped and 5 stars throws confetti; quiz answers bounce or shake, a perfect quiz throws confetti; the finished step pops in the progress bar; Finish shimmers
- **Resume**: Exit keeps your place, and the drink page offers "Resume at step N" or "Start over"
- **Works offline**: a service worker keeps a copy (network first, so online is always the newest version)
- Android Back steps back inside the app instead of leaving it
- `tests/security-check.js`: 20 checks with a hostile progress code, corrupt saves, log folding, timer drift and Back; the recipe check now also requires a scene for every step (31 rules)
### Security
- **Fixed: a crafted progress code could run script in the app**, every time it opened. All saved and imported data now goes through one gate (`normalize()`) that whitelists every option, clamps every number and rebuilds every drink in the log field by field
- Strict Content Security Policy (`script-src 'self'`, no inline scripts); the code moved to `app.js` to allow it
- Security headers on every response: no framing, nosniff, referrer policy, permissions locked down
- Fonts are served from the site itself (SIL Open Font License), so the app makes no requests to Google
### Fixed
- Corrupt saved data (an unknown grinder type, a missing log, odd values) could leave a blank app with no way to reset; it now always opens
- A huge person count in a saved drink could freeze the phone; people are capped at 20 everywhere
- The timer counted ticks, so it fell behind when the phone slept; it now counts to a real end time. The alarm sound is unlocked by the Start tap, so iOS plays it
- A running timer could hide when you switched drinks; timers belong to a drink and a step
- The screen could stay awake after leaving the steps
- XP and badges could go down after 200 drinks, and On a Roll vanished when a streak ended; old drinks are now folded into a running total and badges are kept for good
- Two imported drinks with the same time could not both be rated
- Reset brought back the first-run screens; it now resets settings only
- Pantry number boxes accepted any value (0.5 ml of water meant infinite brews); they now stay inside their limits and the summary updates
- Toasts appeared dimmed under pop-up sheets
- Accessibility: focus stays on the control you used after each tap, the page behind a sheet can't be reached, focus returns when it closes, option buttons announce their state, and the timer no longer talks to screen readers every second
- The progress code's restore text now says plainly that pantry and pot settings come from the code

## 1.1.0 · 2026-10-30
### Added
- **Italian Moka**: moka pot coffee the traditional Italian way: fresh cold water in the base, low heat with the lid open, off at the first gurgle, stirred in the pot. With sugar, the first drops are whipped into a **cremina** that floats on each cup like a golden crema
- **Frappes**: Butterscotch, Dark Chocolate and Cookies & Creme. Sugar and cocoa go into the hot coffee, the coffee is chilled in an ice bath, then blended with cold milk and ice (up to 3 drinks per blender batch), with toppings to finish
- Pantry: Blender, butterscotch or caramel sauce, chocolate sandwich cookies and whipped cream
- Learn: "The Italian way" (Moka Pot) and "Frappes" (The Drinks)
- Rating: "Watery or icy" for frappes, with a fix
- Recipe check: 7 new rules (cold water and low heat, cremina, coffee chilled before blending, blender batch size, sugar dissolved hot); now 12,096 combinations
### Changed
- The Full Menu badge counts every drink on the menu (now 14)
- Sauce and cookie frappes use one notch less sugar, since the flavouring is sweet already
### Fixed
- "in a Italian Moka": roast tips now use "an" before a vowel

## 1.0.0 · 2026-10-16
The first full release: everything from the 0.x series below, plus:
### Fixed
- "You're all set" summary: text touched the card border because the list style zeroed the card padding
- More room in the XP pills; smaller selector text on narrow phones so options don't crowd
### Added
- App version shown at the bottom of Pantry
- `tests/spacing-check.js`: scans every screen for text touching or spilling past its box

## 0.8.0 · 2026-10-16
### Added
- **First-run setup**, "Let's get your equipment ready": moka pot size, grinder type and milk pitcher size, with Back, Skip and a summary. Existing users keep their settings and can rerun it from Pantry
- **Equipment in Pantry**: moka pot 1 to 12 cup, grinder (electric, manual, none) and pitcher 350 to 1000 ml, as native pickers
- **Equipment-aware recipes**: water and coffee per brew from the pot size, foam marks and whipped-coffee batches from the pitcher, hand-grinding steps and timing for manual grinders, ground coffee when there is no grinder; rating advice matches the grinder
- **Per-cup ratings**: each person rates their own cup in turn ("pass the phone"), with an average and advice showing how many people said what. +5 XP per extra person
- **Level-up guide** in Learn: "Your next move" with its XP, a step-by-step "How to level up" path and a level ladder
### Changed
- Ratings are stored per cup (older single ratings still load)
- The Home Screen prompt waits until setup is finished
### Fixed
- A step timer left running covered the finish screen; finishing a drink now stops it

## 0.7.0 · 2026-10-16
### Added
- **Rate later**: "N drinks to rate" reminder on the drink list, a "Waiting for your rating" list in Learn, and a rating sheet for any past drink
### Changed
- UI resized to the iOS type scale: 17 px body, smaller headings, cards, icons and tab bar; compact controls keep a 44 px touch area. Step mode stays one notch larger for reading at arm's length

## 0.6.0 · 2026-10-16
### Changed
- Every drink's steps refined to coffee standards: kettle first and grind while it heats, milk heated after brewing and frothed straight away, grinding in batches the grinder can take, warmed cups, "never leave the pot unattended", a use for leftover coffee
- Strength stays inside each drink's café ratio; hidden for Espresso, whose dose the basket fixes
- Whipped coffee made in batches that can't overflow the pitcher; warning for unsweetened cocoa with no sugar
### Added
- `tests/coffee-eval.js`: 21 coffee rules over every drink and setting (63.8% before this release, 100% after)

## 0.5.0 · 2026-10-16
### Added
- **Home Screen prompt** on first visit with steps for iPhone Safari and Chrome, Android Chrome (one-tap Install), Samsung Internet and in-app browsers
- **Progress codes** to copy and paste level, ratings and settings between browsers and phones; a welcome screen to restore them in the installed iPhone app
- **Learn intro**: three short cards on first visit, replayable from "How it works"
### Changed
- Full UI pass against the Impeccable design guidelines: no eyebrow labels, no big-number tiles, drawn star icons, even segmented controls, 44 px touch targets, themed selection and focus
### Fixed
- White bar behind the iPhone Dynamic Island: translucent status bar with a brown band behind the clock
- A hidden notification peeking out at the top of the screen

## 0.4.0 · 2026-10-16
### Added
- **Learn tab** with 5 categories of lessons and quizzes
- **XP, 5 levels, 10 badges**, drinks made, average rating and day streak
- **Rating after every drink**, with "Anything off?" fixes, one-tap changes and a "Last time" note on setup; advice follows the EN | BN switch
- **Pantry tools**: kettle, scale, thermometer, flask, cinnamon, vanilla, and steps that adapt to them
- One consistent icon set across the app

## 0.3.0 · 2026-10-16
### Added
- **Guided flow**: pick a drink, set it up, then one step at a time with progress, swipe, timers inside steps and a finish screen
- **EN | BN switch** for the step text
- Screen kept awake while cooking; resumes mid-recipe after a reload

## 0.2.0 · 2026-10-16
### Changed
- Whole app in plain English with standard café drink names
- Redesign: new type, warm palette that works in light and dark, cup illustrations drawn from each recipe
### Added
- **Installable on iPhone**: app icons, full-screen mode and Home Screen title
- Git-linked Vercel deploys: every push to `main` goes live

## 0.1.0 · 2026-10-16
### Added
- First version: a Banglish coffee guide for the family's moka pot, blade grinder, 350 ml pitcher and frother
- Drinks, people count, strength, sugar and roast selection with matching grind, water, heat and timing
