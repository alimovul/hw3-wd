# Alexandru-Gabriel BUTOI — HW3
Computer Science, Year 1 — West University of Timișoara.

---

## 🌐 Live Site

https://alimovul.github.io/hw3-wd/

---

## 📋 Task Checklist

- [x] **Portfolio page** (`portfolio.html`) — matches site style, nav, main content
- [x] **Accessible form** — 7 fields, 5+ types: `text`, `textarea`, `url`, `select`, `date`
  - Explicit `<label>` for every control
  - `<fieldset>` + `<legend>` wrapping all fields
  - `aria-describedby` on every error message
  - `aria-required="true"` on required fields
  - `aria-invalid` toggled dynamically on validation
- [x] **Visual enhancements** — hero banner, floating avatar, typewriter effect, stat cards, fade-in animations, quick-link grid with Icons8 icons
- [x] **JavaScript validation**
  - All required fields validated before submit
  - Per-field error messages displayed inline
  - `valid` / `invalid` CSS classes applied live on blur
  - Form submission blocked on any error
  - Reset button clears all fields and error states
  - First invalid field auto-focused on failed submit
- [x] **Projects table** — dynamically inserted after successful validation
  - `<caption>`, `<th scope="col">`, responsive wrapper with `tabindex="0"`
  - Lazy-loaded thumbnails with fallback placeholder
  - Technology pills, status badges, live project count
- [x] **Responsive layout** — works on mobile, tablet, desktop
- [x] **Dedicated CV page** (`cv.html`) — real data from Europass CV, linked in nav
- [x] **HTML/CSS validation** — validated with W3C Validator, no errors
- [x] **Published on GitHub Pages**

---

## 📊 Lighthouse Scores

> Tested with Chrome DevTools → Lighthouse → Desktop mode.

| Page | Performance | Accessibility | Best Practices | SEO |
|------|-------------|---------------|----------------|-----|
| `portfolio.html` | 100 | 96 | 100 | 100 |
| `cv.html` | 100 | 100 | 100 | 100 |
| `index.html` | 100 | 96 | 96 | 100 |

> Target of ≥95 Accessibility met on all pages.

---

## ♿ Accessibility Notes

- **Skip link** present on every page (`<a href="#main-content">`)
- **Heading hierarchy** — h1 → h2 → h3, no levels skipped
- **Images** — all have descriptive `alt` text; decorative icons use `aria-hidden="true"`
- **Form** — every input has an explicit `<label>`, grouped with `<fieldset>`/`<legend>`, errors linked via `aria-describedby`
- **ARIA** — `aria-live="polite"` on success banner; `aria-label` on landmark regions; no prohibited ARIA attributes
- **Keyboard navigation** — all interactive elements reachable and operable via keyboard
- **Color contrast** — all text/background combinations verified to meet 4.5:1 minimum ratio; issues found via Lighthouse + manual `getComputedStyle` debugging and fixed
- **Focus styles** — visible `:focus-visible` ring on all interactive elements

---

## ⚡ Performance Notes

- `loading="lazy"` on all below-fold images
- No external JS dependencies (vanilla only)
- CSS animations use `transform` + `opacity` (GPU-composited, no layout thrash)
- Minimal DOM updates — rows appended individually, not full re-render
- Icons loaded from CDN (Icons8) with `loading="lazy"`

---

&copy; 2026 Alexandru-Gabriel BUTOI
