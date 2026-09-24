# Chrome Web Store Listing & Publishing Record

*Last Updated: 2026-09-25*

---

## 1. Extension Information
- **Name**: Gita Wisdom New Tab
- **Extension ID**: `hebmlallhbgfnjjcnilphllknhfoddnk`
- **Publisher ID**: `9637cb78-fa33-49dd-a4cb-91066ff182e3`
- **Version**: `1.1.1`
- **Manifest Version**: `MV3`
- **Language**: `en`
- **Category**: `Lifestyle`

---

## 2. Store Listing Copy

### Short Description (max 132 characters)
> The complete Bhagavad Gita on your new tab: all 701 verses in Sanskrit with transliteration and a public-domain English translation.

### Detailed Description
```markdown
Gita Wisdom New Tab

Gita Wisdom New Tab transforms your browser's new tab page into a tranquil spiritual sanctuary. Start each browsing session with timeless wisdom from the complete Srimad Bhagavad Gita: all 18 chapters and 701 verses, bundled offline.

KEY FEATURES:
• A Shloka Every New Tab: A verse from the complete Gita, shown in the original Sanskrit (Devanagari) with IAST transliteration.
• Public-Domain English: Every verse comes with Annie Besant's classic English translation (1922, public domain). Hindi, Telugu, Tamil, Bengali and other Indian languages are machine-translated from the English on demand, entirely on your device, using Chrome's built-in Translator.
• Listen: Have the verse read aloud using your browser's built-in text-to-speech voices (voice quality depends on the voices installed on your device).
• Serene Aesthetics: Ambient visual backgrounds, tranquil starry night sky, and distraction-free themes.
• Bookmarks & Search: Save favourite verses and search all 701 verses by keyword, chapter title or verse number (e.g. 2.47).
• Private: No tracking, analytics, or accounts. Preferences and bookmarks are stored only on your computer. Fonts are loaded from Google Fonts; translation happens on-device and no verse text is ever sent to a translation server.

Sources: Sanskrit text from the gita/gita dataset (Unlicense); English translation by Annie Besant (1922), public domain.

HOW TO USE:
1. Install Gita Wisdom New Tab and open a new tab in Chrome.
2. Contemplate the shloka, read its translation, and listen to it read aloud.
3. Search verses and save favourites to your personal bookmarks.
4. Enjoy peace, mindfulness, and clarity with every new tab you open.
```

---

## 3. Permissions Justifications (Required for Review)

Google review requires specific plain-English justification for each declared permission:

| Permission | Used in Code? | Sample Evidence | Required? | Risk | Plain-English Review Justification |
| :--- | :---: | :--- | :---: | :---: | :--- |
| `storage` | Yes | newtab.js:104 | Yes | LOW | Stores the user's theme, preferred language, text-to-speech voice settings, bookmarked verses, reading-streak stats and cached machine translations locally in chrome.storage.local. |

---

## 4. Privacy & Data Use Disclosure

- **Privacy Policy URL**: `https://ravitejakamalapuram.github.io/gita-wisdom.html`
- **Network use**: Google Fonts (stylesheet/fonts) only. Translation to languages other than English runs entirely on-device via Chrome's built-in Translator API; no verse text is sent to any server for translation.

---

## 5. Store Assets Checklist

- [x] Extension Icon (128×128 PNG): `icons/icon-128.png`
- [x] Primary Screenshot (1280×800 PNG): `store-assets/screenshot-1.png`
- [x] Promotional Tile (440×280 PNG): `store-assets/promo-tile-small.png`
- [x] Marquee Promo (1400×560 PNG): `store-assets/promo-tile-marquee.png`

---

## 6. Pre-Publish Checklist

- [x] Manifest V3 compliance verified
- [x] No `eval()` or remotely hosted code
- [x] No secrets, private keys, or API tokens in package
- [x] Distributable archive contains `manifest.json` at root
- [x] Branding guidelines & uncropped promo assets verified
- [x] Live GitHub Pages privacy policy deployed

---

## 7. Release History

| Version | Date | Status | Package ZIP | Notes |
| :--- | :--- | :--- | :--- | :--- |
| `1.0.1` | 2026-09-21 | Rejected | `gita-wisdom-new-tab-v1.0.1.zip` | Rejected under Branding Guidelines (cropped promo tile) |
| `1.0.2` | 2026-09-22 | Draft / Ready | `chrome-store/builds/gita-wisdom-new-tab-v1.0.2.zip` | Added uncropped promo tiles with safe margins, updated privacy URL to GitHub Pages |
| `1.1.0` | 2026-09-23 | Rejected | — | Complete 701-verse Gita from public-domain sources (Sanskrit: gita/gita, Unlicense; English: Annie Besant 1922). Removed Hindi translation, word meanings and commentary of unclear provenance. See CREDITS.md. Rejected by CWS review: "did not comply with our Programme policies" (no specific reason given). |
| `1.1.1` | 2026-09-25 | Draft / Ready | — | Root cause: on-demand fallback used the unofficial `translate.googleapis.com/translate_a/single` ("gtx") endpoint, which is not sanctioned for third-party production use under Google's API Terms of Service. Removed it; machine translation now uses Chrome's on-device Translator API only, falling back to bundled English. Privacy policy, listing copy and CREDITS.md updated to match. See POR-77. |
