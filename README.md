# Photography & Film — layout clone

Created with Ditto's local open-source engine from https://www.professorhines.com/.

## Included

- Home: `/`
- Photography: `/photography`
- Film & Production: `/production`
- About: `/hines`
- Contact: `/contact`

The four inner pages retain Ditto's captured structure, typography, and spacing. The homepage hero and category layout were simplified to remove overlapping slideshow layers and adapt to screen widths. The navigation was replaced with a working five-page desktop/mobile menu. Photo and video assets were omitted; media slots use a local placeholder. No hosted Ditto service was used for this successful capture.

## Run

Use Node.js 24, then run from the repository root:

```bash
npm ci
npm run dev
```

For a static production build:

```bash
npm run build
```

The generated static website is in `out`. Use static hosting with clean-URL support for the exported `.html` pages.

## Customization

The wordmark is `YOUR NAME`. Reference copy, biographical details, prices, address, and some branding remain in the inner pages as layout filler; replace these before using this as your own website. The shared image placeholder is `public/placeholder.svg`. Replace individual image sources to add your work. Edit route `page.tsx` files, `SiteNav.tsx`, and `preview.css` for content and custom adjustments.

The contact form displays a preview notice and sends nothing. Links outside the five selected routes display a notice instead of opening the original website. Email/newsletter services, map interaction, video playback, and external portfolio galleries are not connected.

## Verification

Production build completed with type checking enabled. Checked all five routes in the browser, mobile menu opening, mobile page widths, placeholder loading, and the contact form's no-send behavior. This is a usable layout starting point, not a claim of pixel-identical cloning or fully reproduced backend functionality.
