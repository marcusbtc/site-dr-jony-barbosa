# Deployment Guide - Dr. Jony Barbosa Website

## Build for Production

```bash
npm run build
```

This generates a `dist/` folder with static HTML, CSS, and minimal JavaScript.

## Deploy to Hostinger (Shared Hosting)

### Method 1: File Manager

1. Run `npm run build` locally
2. Login to Hostinger control panel
3. Open **File Manager**
4. Navigate to `public_html/`
5. Upload all contents from `dist/` folder to `public_html/`
6. Done! Your site is live at your domain

### Method 2: FTP

1. Run `npm run build` locally
2. Use an FTP client (FileZilla, Cyberduck, etc.)
3. Connect using credentials from Hostinger
4. Upload all contents from `dist/` to `public_html/`

### Important Notes

- ✅ No Node.js required on server (static HTML)
- ✅ No environment variables needed
- ✅ Works on any shared hosting
- ⚠️ Delete old files from `public_html/` before uploading new build
- ⚠️ Make sure `.htaccess` allows static file serving (default is fine)

## Performance Benefits

Compared to original React SPA:

- **JavaScript Bundle**: ~150KB → ~10KB (islands only)
- **First Paint**: Instant (pre-rendered HTML)
- **Hydration**: Only interactive components (menu + FAQ)
- **SEO**: Perfect (server-rendered HTML with metadata)

## Development

```bash
npm run dev
```

Opens dev server at `http://localhost:4321`

## Project Structure

```
src/
├── components/       # Astro & React components
├── data/            # Site content & data
├── layouts/         # Page layouts
├── pages/           # Routes (index.astro)
├── styles/          # Global CSS
└── types/           # TypeScript definitions
```

## Updating Content

All content is in `src/data/site-data.ts`:

- Services, exams, procedures
- FAQs
- Contact info
- Business hours
- Blog posts

Edit that file and rebuild to update content.
