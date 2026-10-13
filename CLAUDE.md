# CV website: atglauser.github.io

Personal, recruiter-oriented CV website for Arthur Glauser, hosted on GitHub Pages (repo `atglauser/atglauser.github.io`). Linked from LinkedIn.

## Stack
- One self-contained `index.html` (HTML + CSS + vanilla JS, no build step, no framework).
- Fonts from Google Fonts: Geist (base sans), Newsreader (SYZ and Education headings), JetBrains Mono (DCM, metadata).
- Photos in `images/`.

## Structure
One scrolling page. Menu: **Experience** (sub-menu: DCM, SYZ, GCP, Beric) · Sailing · Education · Skills · Contact. The sub-menu shows on hover/focus of Experience and stays open while scrolling through a role chapter.

Each section has its own visual language (deliberate, overrides the design skill's "one theme per page" rule):
- Hero + highlights: minimal monochrome, asymmetric split
- `#dcm` DCM Systematic: dark tactical terminal, green accent, mono metadata, sharp corners, scanlines
- `#syz` SYZ Bank: navy and gold, Newsreader serif, full-width editorial stack with the two published papers as linked cards
- `#gcp` Glauser Capital Partners: Swiss print, alpine green, oversized figure, capital-stack visual
- `#beric` Beric Management: terracotta and slate, figure-led column
- `#sailing` Competitive sailing: photo cover (`sailing-1.jpg`), sea blue, results timeline, gallery
- `#education`: minimalist document, asymmetric bento, pastel tints
- `#skills`: Swiss 1px grid on cool grey
- `#contact`: dark, type-led
Tokens live on `.theme-*`: `--bg --fg --muted --accent --card --line --r` (corner radius) `--display` (heading font). Keep each section internally consistent.
Layout families must stay varied: never 3 image+text splits in a row.

## Design skills
`.claude/skills/` holds design-taste-frontend, redesign-existing-projects, minimalist-ui, industrial-brutalist-ui, high-end-visual-design. Apply them, but this file wins on conflicts: vanilla stack (no React/Tailwind), restrained motion, Google Fonts link, per-section themes, no picsum placeholders (real photos only).
Rules worth keeping from them: no em/en dashes, max 1 middle dot per line, no numbered section eyebrows, no scroll cues, hero subtext ≤ 20 words, no `window` scroll listeners (progress bar uses CSS `animation-timeline`).

## Decisions to keep
- **Honesty over hype.** DCM work was fund reporting automation, CRM/BD data and dashboards, not trading. Never describe it as trading or signal research.
- **Conservative figures.** GCP: CHF 800k+ *soft commitments*, registration Q1 2027 (not "raised CHF 1M"). Matura 2021 to 2024.
- **No private data on the public site:** no home address, phone number or date of birth.
- **No CV download.** The site is the CV; Arthur tailors PDF versions per application. Don't add `cv.pdf` or download buttons.
- **4 languages** stat stays (Swiss German counted separately).
- SYZ papers: one co-authored with the Chief Economist (Swiss-US tariffs), one with the CIO (SCO). Not "both with CIO and Chief Economist".
- Restrained interactivity: scroll reveal, count-up numbers, active nav, progress bar. No skill bars, no typing effects.
- Must stay readable without JS, respect `prefers-reduced-motion`, work at 390px width with no horizontal scroll, and print cleanly.

## Images
- Company logos (from official sites; Syz from blog.syzgroup.com): `images/dcm-logo.svg` (recoloured to light greys for the dark section), `syz-logo.png` (140px native, keep small), `beric-logo.png`. Shown on `.media.logo` plates. GCP logo is an inline SVG (dark square, cream "GCP") in the GCP section.
- Photos (supplied by Arthur, resized to ≤2000px, JPEG q80): `portrait.jpg`, `gcp.jpg` (project rendering, label it as a rendering), `sailing-1.jpg` (cover), `sailing-2..7.jpg` (gallery: 3 wide + 3 tall, grid areas a-f). Torveo watermarks are the photographer's; leave them.
- Missing images fall back to styled placeholders.

## Open items
- Certification credential IDs/links (LinkedIn blocks automated access; Arthur to paste them).
- DataCamp: only Python Data Fundamentals and SQL Fundamentals are completed (Associate Data Scientist was never done; don't list it).

## Collaboration style
Arthur prefers concise, direct answers (bullet points where they fit), targeted edits over broad rewrites, and wants strategic concerns flagged before execution.
