# Coffee Ghor

Coffee guide for the family: pick a drink and the number of people, get quantities and step-by-step instructions for our moka pot, blade grinder, 350 ml pitcher and Enjoy frother.

Static site, no build step. Settings are saved per phone (localStorage).

## Deploy
Vercel project `coffee-ghor` is linked to this repo.
- Push or merge to `main`: production deploy to https://coffee-ghor.vercel.app
- Push to any other branch: preview deploy (needs Vercel login to view)

## Recipe evaluation
`tests/coffee-eval.js` checks every drink across people, strength, roast, sugar and kitchen-tool combinations against coffee standards (café ratios, workflow order, grinder and pitcher limits, milk temperature, safety cues, EN/BN parity).
```
npm i -D playwright && node tests/coffee-eval.js index.html
```

`tests/spacing-check.js` walks every screen (setup, drinks, steps, rating, sheets, Pantry, Learn, quiz) at 375 and 430 px in light and dark mode and reports text that touches or spills past the edge of its box.
```
node tests/spacing-check.js index.html
```
