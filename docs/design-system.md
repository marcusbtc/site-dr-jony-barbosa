# Dr. Jony Figma Design System

Source of truth:
- Figma file: `ei2559utgvt9hWuDQA5Tj9`
- Main landing node: `121:3718`
- Extraction date: `2026-03-12`

This document separates:
- `Explicit from Figma variables`: values returned directly by Figma variables.
- `Inferred from node fills/styles`: repeated values found in section fills, text styles, and component treatments across the landing page.

## 1. Design Intent

The visual language is a soft editorial medical brand:
- muted blue-grey surfaces instead of bright clinical blues,
- serif display typography paired with clean geometric body text,
- layered paper/marble textures,
- understated cards, pills, and glassy overlays,
- high trust, low noise, soft contrast.

## 2. Color System

### 2.1 Core brand and neutrals

Explicit from Figma variables:

| Token | Value | Role |
|------|------|------|
| `Neutral/1` | `#EFF2F6` | light neutral surface |
| `Neutral/5` | `#ADBDD2` | soft card fill / avatar fill |
| `Neutral/7` | `#8CA2C0` | secondary brand text |
| `Neutral/10` | `#486284` | primary action / brand anchor |
| `Azul` | `#36416E` | footer technical text |
| `color/grey/31` | `#4C5253` | muted dark text |
| `color/grey/36` | `#5B5B5B` | embedded map text |
| `color/azure/51` | `#1A73E8` | embedded map link blue |
| `fetalcentercentromedico.com.br/White` | `#FFFFFF` | white |

Inferred from node fills/styles:

| Token | Value | Role |
|------|------|------|
| `hero/base` | `#9AACB4` | top hero background |
| `surface/100` | `#EDF4F6` | FAQ / footer / airy sections |
| `surface/150` | `#EBEDEE` | default page section background |
| `surface/200` | `#E1E6E7` | exams section background |
| `surface/250` | `#D3DDE3` | alternate blue-grey section |
| `surface/tint` | `#A2C9DE` | image wash / soft overlay |
| `text/strong` | `#1F1F1F` | main headings |
| `text/body` | `#2F2F2F` | paragraphs |
| `text/legal` | `#1F2222` | copyright |

### 2.2 Recommended semantic mapping

| Semantic token | Value |
|------|------|
| `--ds-color-brand-700` | `#486284` |
| `--ds-color-brand-500` | `#8CA2C0` |
| `--ds-color-brand-300` | `#ADBDD2` |
| `--ds-color-brand-200` | `#C8D4D9` |
| `--ds-color-neutral-0` | `#FFFFFF` |
| `--ds-color-neutral-50` | `#EFF2F6` |
| `--ds-color-neutral-100` | `#EDF4F6` |
| `--ds-color-neutral-150` | `#EBEDEE` |
| `--ds-color-neutral-200` | `#E1E6E7` |
| `--ds-color-text-strong` | `#1F1F1F` |
| `--ds-color-text-body` | `#2F2F2F` |
| `--ds-color-text-muted` | `#4C5253` |

## 3. Typography System

### 3.1 Font families

Observed across the Figma:

| Font | Usage |
|------|------|
| `EB Garamond` | hero and section headings |
| `Questrial` | body copy and paragraph text |
| `DM Sans` | small CTA buttons |
| `Poppins` | FAQ rows, contact chips, support labels |
| `Lato` | large bottom CTA buttons |
| `Inter` | footer authority line |
| `Roboto` | embedded map widget only |

### 3.2 Text styles

Explicit from Figma variables:

| Style | Definition |
|------|------|
| `body/small` | `DM Sans`, 16, 400, line-height 24, letter-spacing 0.5 |
| `fetalcentercentromedico.com.br/Roboto/Medium` | `Roboto`, 14, 500 |
| `fetalcentercentromedico.com.br/Roboto/Regular` | `Roboto`, 12, 400 |

Inferred from repeated text layers:

| Style name | Family | Size | Weight | Line-height | Tracking | Usage |
|------|------|------|------|------|------|------|
| `display/hero` | `EB Garamond` | `56px` | `500-600` | `66px` | `0.5px` | top hero title |
| `display/section` | `EB Garamond` | `48px` | `500` | `70px` | `0.5px` | main section headings |
| `body/primary` | `Questrial` | `18px` | `400` | `32px` | `0.5px` | body paragraphs |
| `body/large-list` | `Questrial` | `20px` | `400` | `32px` | `0.5px` | hero bullets |
| `label/faq` | `Poppins` | `20px` | `500` | `29.9px` | `0` | FAQ summary |
| `label/contact` | `Poppins` | `15-16px` | `500` | `28-30px` | `0` | contact badges |
| `cta/small` | `DM Sans` | `16px` | `400` | `24px` | `0.5px` | section CTA pills |
| `cta/large` | `Lato` | `23px` | `500` | `23px` | `0.83px` | bottom CTA buttons |
| `footer/name` | `Inter` | `24px` | `700` | `22.36px` | `1.04px` | doctor/authority line |

## 4. Layout System

Inferred from repeated section geometry:

| Token | Value | Notes |
|------|------|------|
| `canvas width` | `1920px` | desktop artboard |
| `content max width` | `1280px` | standard section content width |
| `primary text column` | `700px` | repeated in hero/text sections |
| `standard image column` | `517px` | repeated portrait/image card width |
| `wide image column` | `649px` | prenatal media block |
| `section vertical rhythm` | `80-96px` | implementation-friendly range |
| `major gap` | `68px` | text/media spacing |
| `secondary gap` | `41px` | internal stack spacing |
| `body gap` | `24px` | paragraph/button grouping |

## 5. Shape, Radius, and Elevation

| Token | Value | Usage |
|------|------|------|
| `radius/pill` | `26px` | small CTA pills |
| `radius/cta` | `36px` | bottom CTA buttons |
| `radius/photo` | `16px` | image cards, often asymmetric top-left / bottom-right |
| `radius/service` | `30px` | exam/procedure pills |
| `radius/badge` | `9px` | contact badges, schedule box |
| `radius/faq` | `7px` | FAQ rows |
| `radius/card` | `10px` | testimonial cards |
| `shadow/soft` | `0 24px 60px rgba(72, 98, 132, 0.08)` | image containers |
| `shadow/card` | `0 12px 36px rgba(72, 98, 132, 0.08)` | testimonials |
| `shadow/faq` | `0 10px 24px rgba(72, 98, 132, 0.05)` | FAQ rows |

## 6. Decorative Details

Repeated visual motifs:
- layered marble or paper textures on pale surfaces,
- muted blue gradient washes over photography,
- bottom hero wave divider,
- floating circular badges around imagery,
- white/transparent testimonial cards with blurred background feel,
- asymmetric image framing to avoid a generic grid look,
- embedded Google-map styling preserved as an external visual island.

## 7. Component Patterns

### 7.1 Hero
- Left-aligned text block, `700px` max width.
- Editorial heading with highlighted keywords in `#486A84`.
- Composite background built from photography plus gradient overlays.
- Doctor cutout anchored right and cropped deliberately.

### 7.2 Section CTA
- Small pill button.
- `DM Sans`, `16/24`, regular.
- Background `#486284`, white text.

### 7.3 Exam/Procedure Pills
- Tall rounded cards, centered label.
- Fill uses translucent `#486284`.
- White text, generous vertical padding.

### 7.4 FAQ Rows
- White row on pale background.
- `Poppins` medium label.
- Compact radius and understated shadow.

### 7.5 Contact Strip
- Blue-grey chips with icon plus text.
- Schedule card and map card share the same cool neutral family.

## 8. Implementation Files

This repo now stores the normalized token layer here:
- [src/styles/design-system.css](/Users/marcus/Downloads/dr.-jony-barbosa---ginecologista-goiânia/src/styles/design-system.css)

And consumes it here:
- [src/styles/global.css](/Users/marcus/Downloads/dr.-jony-barbosa---ginecologista-goiânia/src/styles/global.css)

## 9. Practical Guidance

Use this system when building new sections:
- headings should default to `EB Garamond`,
- body copy should default to `Questrial`,
- actions should default to `#486284`,
- surfaces should stay within the blue-grey neutral ramp,
- avoid saturated accent colors unless the Figma introduces them explicitly,
- preserve texture and soft layering, otherwise the page collapses into a generic medical landing page.
