# Chrome Web Store Listing & Publishing Record

*Last Updated: 2026-09-21*

---

## 1. Extension Information
- **Name**: Gita Wisdom New Tab
- **Extension ID**: `hebmlallhbgfnjjcnilphllknhfoddnk`
- **Publisher ID**: `9637cb78-fa33-49dd-a4cb-91066ff182e3`
- **Version**: `1.0.2`
- **Manifest Version**: `MV3`
- **Language**: `en`
- **Category**: `Lifestyle`

---

## 2. Store Listing Copy

### Short Description (max 132 characters)
> Transform your new tab with Bhagavad Gita wisdom. Displays shlokas in Sanskrit, English, and Hindi with audio and meanings.

### Detailed Description
```markdown
Gita Wisdom New Tab

Transform your new tab into a serene sanctuary of Bhagavad Gita wisdom. Displays shlokas in Sanskrit, English, and Hindi, featuring audio recitations, word meanings, and customized themes.

Key Features:
- Daily Shloka: Inspiring Bhagavad Gita verse every time you open a new tab.
- Multilingual: Shlokas in original Sanskrit with English and Hindi translations.
- Audio Recitation: Clear and meditative audio playback for authentic pronunciation.
- Local-first & Private: All preferences and audio cached locally without tracking.

How to use:
1. Open a new tab in Chrome.
2. Read the daily shloka or browse chapter verses.
3. Listen to recitation or change themes from settings.
```

---

## 3. Permissions Justifications (Required for Review)

Google review requires specific plain-English justification for each declared permission:

| Permission | Used in Code? | Sample Evidence | Required? | Risk | Plain-English Review Justification |
| :--- | :---: | :--- | :---: | :---: | :--- |
| `storage` | Yes | newtab.js:104 | Yes | LOW | Required to locally persist user settings, configurations, and application state across sessions. |

---

## 4. Privacy & Data Use Disclosure

- **Privacy Policy URL**: `https://ravitejakamalapuram.github.io/gita-wisdom.html`

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
