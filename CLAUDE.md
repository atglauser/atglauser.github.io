# CV website: atglauser.github.io

Personal, recruiter-oriented CV website for Arthur Glauser, hosted on GitHub Pages (repo `atglauser/atglauser.github.io`). Linked from LinkedIn.

## Stack
- One self-contained `index.html` (HTML + CSS + vanilla JS, no build step, no framework).
- Fonts from Google Fonts (Inter, Fraunces, JetBrains Mono).
- Photos in `images/`, CV download at `cv.pdf` (root).

## Structure
Hero, highlights strip, then one themed chapter per role, then Education, Skills, Contact:
- `#dcm` DCM Systematic: dark terminal theme (green accent, mono font)
- `#syz` SYZ Bank: navy and gold, serif headings
- `#gcp` Glauser Capital Partners: alpine green, capital-stack visual
- `#beric` Beric Management: terracotta
- `#sailing` Competitive sailing: sea blue, results timeline, photo gallery
Each chapter sets its palette through CSS variables on `.theme-*` (`--bg --fg --muted --accent --card --line`).

## Decisions to keep
- **Honesty over hype.** DCM work was fund reporting automation, CRM/BD data and dashboards, not trading. Never describe it as trading or signal research.
- **Conservative figures.** GCP: CHF 800k+ *soft commitments*, registration Q1 2027 (not "raised CHF 1M"). Matura 2021 to 2024.
- **No private data on the public site:** no home address, phone number or date of birth, including inside `cv.pdf`.
- Restrained interactivity: scroll reveal, count-up numbers, active nav, progress bar. No skill bars, no typing effects.
- Must stay readable without JS, respect `prefers-reduced-motion`, work at 390px width with no horizontal scroll, and print cleanly.

## Image filenames
`images/portrait.jpg`, `dcm.jpg`, `syz.jpg`, `gcp.jpg`, `beric.jpg`, `sailing-1.jpg`, `sailing-2.jpg`, `sailing-3.jpg`. Missing images fall back to styled placeholders.

## Open items
- Replace `https://www.linkedin.com/in/REPLACE-ME` (2 occurrences) with the real LinkedIn URL.
- Add photos and a cleaned `cv.pdf`.
- Confirm DataCamp "Associate Data Scientist in Python" is completed; remove if not.
- Add links to the two SYZ published papers if they are public.

## Collaboration style
Arthur prefers concise, direct answers, targeted edits over broad rewrites, and wants strategic concerns flagged before execution.
