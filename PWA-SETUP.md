# PWA Icons Setup

## Required Icons

Please add the following icon files to the `/public` directory:

### App Icons

- **icon-192x192.png** (192x192px) - Standard PWA icon
- **icon-384x384.png** (384x384px) - Medium PWA icon
- **icon-512x512.png** (512x512px) - Large PWA icon
- **icon.png** (any size) - Default favicon
- **apple-icon.png** (180x180px recommended) - Apple touch icon

### Social Media Images

- **og-image.png** (1200x630px) - Open Graph / Twitter card image
- **screenshot1.png** (1280x720px) - App screenshot for PWA

## Tools to Generate Icons

You can use these tools to generate all required icon sizes from a single image:

1. **PWA Asset Generator**: https://github.com/onderceylan/pwa-asset-generator

   ```bash
   bunx pwa-asset-generator logo.png public/icons --icon-only
   ```

2. **Favicon.io**: https://favicon.io/favicon-converter/

3. **RealFaviconGenerator**: https://realfavicongenerator.net/

## Icon Guidelines

- Use a simple, recognizable design
- Ensure icons work well on both light and dark backgrounds
- Use maskable icons for better Android support
- Test icons at different sizes

## Current Setup

✅ PWA configuration added to `next.config.ts`
✅ Manifest file created at `/public/manifest.json`
✅ Metadata and Open Graph tags configured in `app/layout.tsx`
✅ Service worker will be auto-generated in production
✅ Robots.txt created

## Testing PWA

1. Build the production version: `bun run build`
2. Start production server: `bun run start`
3. Open in Chrome and use DevTools > Application > Manifest
4. Test "Add to Home Screen" functionality
