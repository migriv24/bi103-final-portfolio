# BI 103 Final Portfolio — Site Map

The portfolio hub at `src/data.js` links out to nine lab sites, one per learning
outcome (3 outcomes x 3 groups: Science, Biology, Human). This file tracks where each
one lives and whether it is wired into the hub yet.

- **Hub repo (this folder):** `C:\Users\migri\Documents\GitHub\bi103-final-portfolio`
- **Hub live URL:** https://migriv24.github.io/bi103-final-portfolio/
- **Wiring lives in:** `src/data.js` (each slot has a `url` and a `placeholder` flag)
- **Deploy:** `npm run deploy` (Vite build to the `gh-pages` branch)

Last updated: 2026-06-07.

---

## Status at a glance

| # | Group | Outcome slot | Title | Live? | In hub? |
|---|-------|--------------|-------|:-----:|:-------:|
| 1 | Science | `science-concepts` | Nervous System Lab | ✅ | ✅ linked |
| 2 | Science | `science-skills` | Experimental Design Media | ⏳ Pages pending | ✅ linked |
| 3 | Science | `science-connections` | Disease Literacy Lab | ✅ | ✅ linked |
| 4 | Biology | `biology-concepts` | Immune Lab | ✅ | ✅ linked |
| 5 | Biology | `biology-skills` | Skeletal & Muscular Lab | ✅ | ✅ linked |
| 6 | Biology | `biology-connections` | Digestive System Ranger | ✅ | ✅ linked |
| 7 | Human | `human-concepts` | Infectious Diseases Lab | ✅ | ✅ linked |
| 8 | Human | `human-skills` | Data Management Lab | ✅ | ✅ linked |
| 9 | Human | `human-connections` | Body Data Visualization | ✅ | ✅ linked |

**All 9 slots built and linked.** One pending action: enable GitHub Pages on
`bi103-experiment-lab` (Settings > Pages > Branch: main, /root). Code is already pushed.

---

## Full locations

### Science

**1. Nervous System Lab** — `science-concepts`
- Local: `C:\Users\migri\Documents\bi103-nervous-lab`
- Repo: `migriv24/bi103-nervous-lab` · Live: https://migriv24.github.io/bi103-nervous-lab/
- Status: linked in hub.

**2. Experimental Design Media ("Strength Into Speed")** — `science-skills`
- Local: `C:\Users\migri\Documents\OSU\BI 103\SkeletalSystem_MediaLab\experiment-lab`
- Repo: `migriv24/bi103-experiment-lab` · Live: https://migriv24.github.io/bi103-experiment-lab/
- Status: built and pushed, **linked in hub**. ⏳ **GitHub Pages still needs to be enabled** on the repo
  (Settings > Pages > Deploy from branch > `main` > `/root`). Illustrations are placeholders
  that auto-swap when real drawings land in `images/` (see `ASSETS.md`).

**3. Disease Literacy Lab** — `science-connections`
- Local: `C:\Users\migri\Documents\bi103-disease-lab`
- Repo: `migriv24/bi103-disease-lab` · Live: https://migriv24.github.io/bi103-disease-lab/
- Status: linked in hub.

### Biology

**4. Immune Lab** — `biology-concepts`
- Local: `C:\Users\migri\Documents\bi103-immune-lab`
- Repo: `migriv24/bi103-immune-lab` · Live: https://migriv24.github.io/bi103-immune-lab/
- Status: linked in hub.

**5. Skeletal & Muscular Lab** — `biology-skills`
- Local: `C:\Users\migri\Documents\bi103-movement-lab`
- Repo: `migriv24/bi103-movement-lab` · Live: https://migriv24.github.io/bi103-movement-lab/
- Status: linked in hub.

**6. Digestive System Ranger** — `biology-connections`
- Local: `C:\Users\migri\Documents\GitHub\digestive-system-ranger`
- Repo: `migriv24/digestive-system-ranger` · Live: https://migriv24.github.io/digestive-system-ranger/
- Status: linked in hub. (Related: `C:\Users\migri\Documents\GitHub\creature-ranger-game`.)

### Human

**7. Infectious Diseases Lab** — `human-concepts`
- Local: `C:\Users\migri\Documents\OSU\BI 103\SkeletalSystem_MediaLab\infectious-diseases-2026`
- Repo: `migriv24/bi103-infectious-disease-lab` · Live: https://migriv24.github.io/bi103-infectious-disease-lab/
- Status: linked in hub.

**8. Data Management Lab** — `human-skills`
- Local: `C:\Users\migri\Documents\bi103-datamgmt-lab`
- Repo: `migriv24/bi103-datamgmt-lab` · Live: https://migriv24.github.io/bi103-datamgmt-lab/
- Status: linked in hub.

**9. Body Data Visualization ("Soft Running")** — `human-connections`
- Local: `C:\Users\migri\Documents\OSU\BI 103\SkeletalSystem_MediaLab\body-effort-map`
- Repo: `migriv24/bi103-bodyviz-lab` · Live: https://migriv24.github.io/bi103-bodyviz-lab/
- Status: linked in hub. Includes a helper tool at `/tools/region-tagger.html`.

---

## What is left

1. **Enable GitHub Pages on `bi103-experiment-lab`** (one toggle in repo Settings > Pages). Code is pushed; this is the only thing keeping slot 2 from being fully live.
2. **(Optional) Draw the real illustrations** for the experiment lab and drop them in its `images/` folder; the placeholders swap in automatically. See its `ASSETS.md`.

Everything else is built, live, and linked.
