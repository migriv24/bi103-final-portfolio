# BI 103 Final Portfolio — Site Map

The portfolio hub at `src/data.js` links out to nine lab sites, one per learning
outcome (3 outcomes x 3 groups: Science, Biology, Human). This file tracks where each
one lives and whether it is wired into the hub yet.

- **Hub repo (this folder):** `C:\Users\migri\Documents\GitHub\bi103-final-portfolio`
- **Hub live URL:** https://migriv24.github.io/bi103-final-portfolio/
- **Wiring lives in:** `src/data.js` (each slot has a `url` and a `placeholder` flag)

Last checked: 2026-06-07. All eight built sites returned HTTP 200.

---

## Status at a glance

| # | Group | Outcome slot | Title | Live? | In hub? |
|---|-------|--------------|-------|:-----:|:-------:|
| 1 | Science | `science-concepts` | Nervous System Lab | ✅ | ✅ linked |
| 2 | Science | `science-skills` | Experimental Design Media | ❌ | ⬜ placeholder |
| 3 | Science | `science-connections` | Disease Literacy Lab | ✅ | ✅ linked |
| 4 | Biology | `biology-concepts` | Immune Lab | ✅ | ✅ linked |
| 5 | Biology | `biology-skills` | Skeletal & Muscular Lab | ✅ | ✅ linked |
| 6 | Biology | `biology-connections` | Digestive System Ranger | ✅ | ✅ linked |
| 7 | Human | `human-concepts` | Infectious Diseases Lab | ✅ | ⛔ **not linked yet** |
| 8 | Human | `human-skills` | Data Management Lab | ✅ | ✅ linked |
| 9 | Human | `human-connections` | Body Data Visualization | ✅ | ⛔ **not linked yet** |

**Connected: 6 · Built but not yet connected: 2 · Not built: 1**

---

## Full locations

### Science

**1. Nervous System Lab** — `science-concepts`
- Local: `C:\Users\migri\Documents\bi103-nervous-lab`
- Repo: `migriv24/bi103-nervous-lab`
- Live: https://migriv24.github.io/bi103-nervous-lab/
- Status: linked in hub.

**2. Experimental Design Media** — `science-skills`
- Local: _none yet (not built)_
- Live: _none_
- Status: **placeholder** (`url: '#'`, `placeholder: true`). This is the one outcome with no site. The hub caption describes a "biohacking experiment designed from scratch."

**3. Disease Literacy Lab** — `science-connections`
- Local: `C:\Users\migri\Documents\bi103-disease-lab`
- Repo: `migriv24/bi103-disease-lab`
- Live: https://migriv24.github.io/bi103-disease-lab/
- Status: linked in hub.

### Biology

**4. Immune Lab** — `biology-concepts`
- Local: `C:\Users\migri\Documents\bi103-immune-lab`
- Repo: `migriv24/bi103-immune-lab`
- Live: https://migriv24.github.io/bi103-immune-lab/
- Status: linked in hub.

**5. Skeletal & Muscular Lab** — `biology-skills`
- Local: `C:\Users\migri\Documents\bi103-movement-lab`
- Repo: `migriv24/bi103-movement-lab`
- Live: https://migriv24.github.io/bi103-movement-lab/
- Status: linked in hub.

**6. Digestive System Ranger** — `biology-connections`
- Local: `C:\Users\migri\Documents\GitHub\digestive-system-ranger`
- Repo: `migriv24/digestive-system-ranger`
- Live: https://migriv24.github.io/digestive-system-ranger/
- Status: linked in hub. (Related: `C:\Users\migri\Documents\GitHub\creature-ranger-game`.)

### Human

**7. Infectious Diseases Lab** — `human-concepts`
- Local: `C:\Users\migri\Documents\OSU\BI 103\SkeletalSystem_MediaLab\infectious-diseases-2026`
- Repo: `migriv24/bi103-infectious-disease-lab`
- Live: https://migriv24.github.io/bi103-infectious-disease-lab/
- Status: **built and live, but NOT linked in the hub yet** (slot still `url: '#'`, `placeholder: true`).
- Note: the existing hub caption for this slot describes epidemiology / R0 / herd immunity, which does not match the actual site (a malaria + tuberculosis parasite-vs-pathogen piece). The caption should be rewritten when connecting.

**8. Data Management Lab** — `human-skills`
- Local: `C:\Users\migri\Documents\bi103-datamgmt-lab`
- Repo: `migriv24/bi103-datamgmt-lab`
- Live: https://migriv24.github.io/bi103-datamgmt-lab/
- Status: linked in hub.

**9. Body Data Visualization ("Soft Running")** — `human-connections`
- Local: `C:\Users\migri\Documents\OSU\BI 103\SkeletalSystem_MediaLab\body-effort-map`
- Repo: `migriv24/bi103-bodyviz-lab`
- Live: https://migriv24.github.io/bi103-bodyviz-lab/
- Status: **built and live, but NOT linked in the hub yet** (slot still `url: '#'`, `placeholder: true`).
- Includes a helper tool at `/tools/region-tagger.html`.

---

## What is left

1. **Connect Infectious Diseases Lab** (`human-concepts`): flip `placeholder` to `false`, set `url` to the live link, and rewrite the caption to match the malaria + TB piece.
2. **Connect Body Data Visualization** (`human-connections`): flip `placeholder` to `false`, set `url` to the live link. The existing caption already fits this site well.
3. **Experimental Design Media** (`science-skills`): the only outcome with no site built. Either build it or leave it as a "coming soon" placeholder.

After editing `src/data.js`, rebuild/redeploy the hub for the changes to go live.
