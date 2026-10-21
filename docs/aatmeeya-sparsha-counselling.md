# Aatmeeya Sparsha counselling pages

The geriatric counselling centre page, in English and Telugu. Each language has its own URL. Both share one layout and keep their text in separate content files.

| Language | URL | Route file |
| --- | --- | --- |
| English | `/counselling` | `src/app/counselling/page.js` |
| Telugu | `/te/counselling` | `src/app/te/counselling/page.js` |

This is a different page from the existing `/aatmeeyasparsha` page (the home-visit programme), which was not changed.

## Files

```
src/app/
├── counselling/
│   └── page.js                  English route
├── te/
│   └── counselling/
│       └── page.js              Telugu route
└── components/
    ├── Navbar.jsx               Site navbar (resized, see below)
    ├── Footer.jsx               Site footer (unchanged)
    └── counselling/
        ├── CounsellingPage.jsx  Shared layout, metadata and structured data
        ├── content.en.js        All English text
        └── content.te.js        All Telugu text
```

## How it connects

```
/counselling      ──> counselling/page.js     ──┐
                        imports content.en.js   │
                                                ├──> CounsellingPage.jsx
/te/counselling   ──> te/counselling/page.js  ──┘      ├── Navbar.jsx
                        imports content.te.js          ├── page sections (from the content object)
                                                       └── Footer.jsx
```

Each route file does two things:

```js
export const metadata = buildMetadata(en);          // <title>, description, hreflang, Open Graph
export default function Page() {
  return <CounsellingPage t={en} />;                 // renders the page with that language's text
}
```

### `content.en.js` / `content.te.js`

Every word on the page comes from these files. Both export an object with **exactly the same shape**:

| Key | Used for |
| --- | --- |
| `lang`, `path` | Language code and the page's own URL |
| `meta` | Browser tab title, search description, Open Graph locale |
| `switchLabel` | Accessible label for the language switch |
| `nav` | Section links under the navbar (`id` must match a section id) |
| `hero` | Eyebrow, name, subtitle, intro, tags, button labels |
| `who` | "Who it is for" heading and the three cards (`icon`: `elder`, `memory` or `carer`) |
| `help` | "What we help with" heading and the list of concerns |
| `approach` | "Our approach" heading and the six therapy cards |
| `how` | "How it works" heading and the four numbered steps |
| `fees`, `team` | The two side-by-side cards |
| `privacy` | "What you tell us stays here" (confidentiality) |
| `eligibility` | "Who can come to us" (ages 50+, caregivers 35+) |
| `limits` | "What we do not do" list; `directoryLink` turns "Saanidhyam directory" into a link |
| `harm` | "If an older person is being harmed". **Hidden while `publish: false`** |
| `emergency` | The red emergency notice |
| `book` | Booking section labels and the address |
| `about` | Closing paragraph and legal line |

**To edit text:** change it in the content file only. When you add or remove a key, do it in both files.

### `CounsellingPage.jsx`

This is a server component, so the full HTML is built on the server and search engines see it without running JavaScript. It contains:

- **Constants:** `SITE_URL`, phone, WhatsApp link and email, shared by both languages.
- **`buildMetadata(t)`:** used by both route files. It sets:
  - the title and description from `t.meta`
  - a canonical URL
  - **hreflang** links to both versions (`en-IN`, `te-IN`, and `x-default` → English), so Google shows each searcher the right language
  - Open Graph tags (what appears when the link is shared)
- **`jsonLd(t)`:** structured data in a `<script type="application/ld+json">` tag. It describes the centre as a `MedicalClinic` (phone, email, languages, Punjagutta/Hyderabad address, Satoru Foundation as parent) and includes a breadcrumb.
- **`LangSwitch`:** the English | తెలుగు pill. It's made of plain links to `/counselling` and `/te/counselling`, not a JavaScript toggle, so search engines can follow it.
- **`SectionHeading`:** the small gold label, heading and intro used by each section.
- **Page layout**, top to bottom: Navbar → section links + language switch → hero → Who → Help → Approach → How → Fees/Team → Confidentiality + Who can come → What we do not do → (Harm, when published) → emergency notice → Book → About → Footer.
- **`InfoCard` / `TextWithLink`:** the card used by the new sections, and the helper that links the Saanidhyam directory inside a sentence.
- **Footer email:** the page passes `office@satorufoundation.org` to `<Footer email={...} />`, so each page shows only one address. Every other page keeps the default, `info@satorufoundation.org`.

### Fonts and the Telugu version

- The Noto Sans Telugu and Noto Serif Telugu fonts are loaded with `next/font`.
- On the Telugu page, the Telugu font and roomier line height apply **only to `<main>`**. The Navbar and Footer sit outside it, so they look identical on every page of the site.
- Uppercase labels normally get extra letter spacing. That spacing is turned off for Telugu (`[[lang=te]_&]:tracking-normal`), because it splits Telugu syllables apart.
- The root layout sets `<html lang="en">` for the whole site, so the Telugu page sets `lang="te"` on `<main>` instead.

### Navbar change (affects the whole site)

The navbar used to wrap labels onto two lines ("About / Us") between 768px and about 1300px wide. Now:

- labels never wrap (`whitespace-nowrap`)
- the text is 15px on laptops and 17px from 1280px up (`xl`)
- the logo is smaller and the bar is slimmer
- the full menu appears from 1024px (`lg`); below that the hamburger menu is used

## Colours

The page uses the site's existing palette:

| Colour | Use |
| --- | --- |
| `#4a5838` dark olive | Hero and booking backgrounds (darker than the brand olive so gold and white text pass 4.5:1) |
| `#5e6f47` olive | Headings, active language, borders |
| `#ecc750` gold | Buttons, accents, step numbers |
| `#f4f6f0` light olive | Alternate section backgrounds, section-link bar |
| `#7a5814` dark gold | Small labels on white and light olive (`#b8962f` for icons only) |
| `#a8432f` rust | Emergency notice only |

## Still to confirm before launch

**Held back on purpose:**

- **Harm section** (`harm.publish: false`). Don't publish it until an internal protocol exists that says who assesses risk, who decides to escalate, and where it's recorded. To publish, set `publish: true` in both content files.
- **Confidentiality wording.** Have your advocate check it against the Schedule 4 DPDP notice for the college MoU.
- **Telugu spelling of Saanidhyam.** The copy-fix document spells it సానిధ్యం. The standard spelling is usually సాన్నిధ్యం, so a native speaker should confirm it.

**Missing information:**

These were marked `[CONFIRM]` in the source documents and are **not shown** on the page yet:

1. Consultation days and times
2. Full street address. Once confirmed, add it to `book.address` in both content files and as `streetAddress` / `postalCode` in `jsonLd()`.
3. Whether to state the concession policy publicly
4. Clinician names, qualifications, RCI numbers and photos

The pages are also not linked from the navbar yet.

## Adding another language later

1. Copy `content.en.js` to `content.<code>.js` and translate it, keeping the same keys.
2. Add a route at `src/app/<code>/counselling/page.js`, modelled on the Telugu one.
3. Add the language to `LANGS` and to the `alternates.languages` map in `buildMetadata` in `CounsellingPage.jsx`.
