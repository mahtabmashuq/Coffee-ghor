# Coffee Ghor

Banglish coffee guide for the family: pick a drink and the number of people, get quantities and step-by-step instructions for our moka pot, blade grinder, 350 ml pitcher and Enjoy frother.

Static site, no build step. Settings are saved per phone (localStorage).

## Deploy
```
gh repo create coffee-ghor --public --source=. --push
npx vercel --prod --yes --token "$VERCEL_TOKEN"
```
