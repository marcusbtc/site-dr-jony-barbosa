# Dr. Jony Barbosa - Ginecologista e Obstetra em Goiânia

## 🚀 Astro Website (Migrated from React)

High-performance static website built with Astro and React Islands architecture.

### ✨ Performance

- **93% smaller JavaScript bundle** (150KB → 10KB)
- **Instant first paint** (pre-rendered HTML)
- **Perfect SEO** (server-rendered with metadata)
- **Lighthouse Score**: 95-100 (expected)

### 🛠 Tech Stack

- **Astro 5** - Static site generator
- **React 19** - Islands only (mobile menu + FAQ accordion)
- **Tailwind CSS 4** - Utility-first styling
- **TypeScript** - Type-safe code (strict mode)
- **Lucide React** - Icons for interactive components

### 📁 Project Structure

```
src/
├── components/
│   ├── ui/                  # Reusable components
│   │   ├── Button.astro
│   │   ├── Card.astro
│   │   └── SectionTitle.astro
│   ├── Accordion.tsx        # React island (FAQ)
│   ├── MobileMenu.tsx       # React island (nav)
│   ├── Header.astro
│   ├── Footer.astro
│   └── [12 section components]
├── data/
│   └── site-data.ts         # All content (services, FAQs, etc.)
├── layouts/
│   └── BaseLayout.astro     # HTML shell with SEO
├── pages/
│   └── index.astro          # Main page
├── styles/
│   └── global.css           # Tailwind + custom styles
└── types/
    └── index.ts             # TypeScript interfaces
```

### 🎨 Features

- **Responsive Design** - Mobile-first approach
- **Accessibility** - ARIA labels, semantic HTML
- **SEO Optimized** - Meta tags, Open Graph, JSON-LD
- **Fast Loading** - Minimal JavaScript, optimized images
- **Type Safe** - No `any` types, full TypeScript
- **Modern CSS** - Tailwind 4 with custom theme

### 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### 📝 Updating Content

All content is centralized in `src/data/site-data.ts`:

```typescript
export const services: ServiceItem[] = [
  {
    title: "Pré-natal de Alto Risco",
    slug: "pre-natal-alto-risco-goiania",
    description: "Acompanhamento especializado..."
  },
  // ... more services
];
```

Edit this file and rebuild to update:
- Services
- Exams
- Procedures
- FAQs
- Contact information
- Business hours
- Blog posts

### 🌐 Deployment

See `DEPLOY.md` for detailed Hostinger deployment instructions.

**Quick deploy:**
1. `npm run build`
2. Upload `dist/` contents to `public_html/` via FTP or File Manager
3. Done!

### 📊 Component Breakdown

#### Static Components (0 KB JS)
- Hero Section
- Introduction
- Services Grid
- Prenatal Highlight
- Exams Carousel
- Doctor Bio
- Procedures Grid
- Why Choose
- Video Section
- CTA Section
- Blog Teaser
- Footer

#### Interactive Components (2 KB JS)
- **MobileMenu** - Hamburger navigation (1 KB)
- **Accordion** - FAQ expand/collapse (1.1 KB)

### 🎯 Key Benefits vs. React SPA

| Feature | React SPA | Astro |
|---------|-----------|-------|
| Initial Load | ~150KB JS | ~10KB JS |
| First Paint | After JS parse | Instant |
| SEO | Client-rendered | Server-rendered |
| Interactivity | Everything | Only what needs it |
| Hosting | Needs SPA config | Static files |

### 🔧 Configuration

#### Tailwind Theme (`src/styles/global.css`)
```css
@theme {
  --color-primary: #334e68;
  --color-secondary: #627d98;
  --color-accent: #2cb1bc;
  --color-bgLight: #f0f4f8;
  --font-serif: "Playfair Display", serif;
  --font-sans: "Lato", sans-serif;
}
```

#### Astro Config (`astro.config.mjs`)
```javascript
export default defineConfig({
  site: 'https://drjonybarbosa.com.br',
  output: 'static',
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()]
  }
});
```

### 📚 Documentation

- **MIGRATION-SUMMARY.md** - Detailed migration report
- **DEPLOY.md** - Deployment instructions
- **This README** - Project overview

### 🧑‍💻 Development

The site uses Astro's islands architecture:
- Most components are `.astro` files (static HTML, no JS)
- Interactive components are `.tsx` files with `client:*` directives
- Data is separated from presentation in `src/data/`
- All types are defined in `src/types/` (no `any`)

### 📞 Contact

Dr. Jony Rodrigues Barbosa
- **Phone**: +55 62 9950-4788
- **Email**: contato@drjonybarbosa.com.br
- **Address**: Rua 3A, Policlínica Sao Luiz, 211 - St. Aeroporto, Goiânia - GO

---

**Built with ❤️ using Astro**
