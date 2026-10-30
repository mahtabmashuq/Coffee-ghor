# Changelog

All notable changes to Coffee Ghor. Versions follow [semantic versioning](https://semver.org). The 0.x releases built the app up to its first full release, 1.0.0. From here on, a major version changes how the app works for existing users, a minor version adds features, and a patch fixes things.

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
