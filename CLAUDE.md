# CV website: atglauser.github.io

Personal, recruiter-oriented CV website for Arthur Glauser, hosted on GitHub Pages (repo `atglauser/atglauser.github.io`). Linked from LinkedIn.

## Stack
- Static multi-page site, no build step, no framework: `index.html` + one page per experience (`dcm.html`, `gcp.html`, `syz.html`, `beric.html`, `sailing.html`).
- Shared `styles.css` and `site.js` (fallbacks, reveal, count-up, nav state). Header, pager and footer markup is repeated in each page; keep them in sync when editing.
- Fonts from Google Fonts: Geist (base sans), Newsreader (SYZ and Education headings), JetBrains Mono (DCM, metadata).
- Photos in `images/`.

## Structure
- **Main page** (`index.html`): hero, highlights strip, Experience (5 clickable cards, each in its experience's theme, linking to its page), Distinctions, Education (with certifications), Contact. No Skills section (removed by Arthur).
- **Menu**: Experience (sub-menu: DCM, GCP, SYZ, Beric, Sailing pages) · Distinctions · Education · Contact. On experience pages, links point to `index.html#...`; the sub-menu is always open with the current page active (`body[data-page]`).
- **Experience order** everywhere (cards, sub-menu, pager): DCM, GCP, SYZ, Beric, Sailing. Each page has a back link, a previous/next pager and a compact contact footer.
- Each experience page title is an `h1`.

Each experience has its own visual language (deliberate, overrides the design skill's "one theme per page" rule):
- Main page: minimal monochrome hero; Distinctions dark, year-led list; Education minimalist bento
- DCM: dark tactical terminal, green accent, mono metadata, sharp corners, scanlines
- SYZ: navy and gold, Newsreader serif, editorial stack with the two published papers as linked cards
- GCP: Swiss print, alpine green, oversized figure, capital-stack visual, concept blocks, renderings
- Beric: terracotta and slate, figure-led column, project renderings grid
- Sailing: photo cover, sea blue, results timeline, SNG distinctions, masonry gallery
Tokens live on `.theme-*`: `--bg --fg --muted --accent --card --line --r` (corner radius) `--display` (heading font). Keep each theme internally consistent.

## Design skills
`.claude/skills/` (local only, git-excluded) holds design-taste-frontend, redesign-existing-projects, minimalist-ui, industrial-brutalist-ui, high-end-visual-design. Apply them, but this file wins on conflicts: vanilla stack (no React/Tailwind), restrained motion, Google Fonts link, per-experience themes, no picsum placeholders (real photos only).
Rules worth keeping from them: no em/en dashes, max 1 middle dot per line, no numbered section eyebrows, no scroll cues, hero subtext ≤ 20 words, no `window` scroll listeners (progress bar uses CSS `animation-timeline`).

## Decisions to keep
- **Honesty over hype.** DCM work was fund reporting automation, CRM/BD data and dashboards, not trading. Never describe it as trading or signal research.
- **Conservative figures.** GCP: CHF 800k+ *soft commitments*, registration Q1 2027 (not "raised CHF 1M"). Matura 2021 to 2024.
- **No private data on the public site:** no home address, phone number or date of birth.
- **No CV download.** The site is the CV; Arthur tailors PDF versions per application. Don't add `cv.pdf` or download buttons.
- **Exchange school not confirmed.** Never write its name in the HTML; the Education card shows a blurred placeholder ("Partner University", `.redacted`). Contact text says "exchange semester abroad".
- **4 languages** stat stays (Swiss German counted separately).
- SYZ papers: one co-authored with the Chief Economist (Swiss-US tariffs), one with the CIO (SCO). Not "both with CIO and Chief Economist".
- Distinctions (from Arthur's LinkedIn): SNG Special Distinction 2025 (Translémanique en Solitaire performance), SNG Sports Merit Awards 2025, 2023, 2022, Human Rights Watch nomination 2024 (Matura paper). No J/70 league bronze results.
- Experience copy is short prose with bold lead-ins; only restate facts Arthur supplied, never invent outcomes.
- GCP page = role (split, KPIs, capital stack, "My role" bullets) + concept blocks (problem, approach, working locally, structure) + ambition line. Keep the two halves non-overlapping.
- **Performance:** no `backdrop-filter` (caused scroll lag), no `text-wrap: pretty` on body text, reveal is fade-only, count-up blocks use `contain: layout`, no animated box-shadows, gallery photos ≤800px wide. Cards use `thumb-*.jpg` (900px); every `<img>` has `decoding="async"`, below-the-fold ones `loading="lazy"` with width/height.
- Restrained interactivity: scroll reveal, count-up numbers, active nav, progress bar, card hover. No skill bars, no typing effects.
- Must stay readable without JS, respect `prefers-reduced-motion`, work at 390px width with no horizontal scroll, and print cleanly.

## Images
- Company logos (from official sites; Syz from blog.syzgroup.com): `dcm-logo.svg` (recoloured light for the dark theme), `syz-logo.png` (140px native, keep small), `beric-logo.png`. GCP logo is an inline SVG (dark square, cream "GCP").
- Photos supplied by Arthur, resized (≤2000px, JPEG q80): `portrait.jpg`; `gcp.jpg`, `gcp-night.jpg` (renderings, label as such), `gcp-plan.jpg` (unit plan); `beric-1..4.jpg` (Beric project renderings, captioned "Projects by Beric", don't claim Arthur worked on them); `sailing-1.jpg` (cover), `sailing-2..14.jpg` (gallery). Torveo watermarks are the photographer's; leave them.
- Alpods material: only the renderings and the unit plan; never prices, address, plot number or unit grid.
- Not used: the yellow Miata photo (not sailing, not Arthur).
- Missing images fall back to styled placeholders.

## Notes
- No certification credential IDs on the site (Arthur's decision).
- DataCamp: only Python Data Fundamentals and SQL Fundamentals are completed (Associate Data Scientist was never done; don't list it).
- Sailing is dated "2016 to present" (Arthur's decision).

## Collaboration style
Arthur prefers concise, direct answers (bullet points where they fit), targeted edits over broad rewrites, and wants strategic concerns flagged before execution.
