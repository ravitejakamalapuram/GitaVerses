# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.1.0] - 2026-09-23

### Added
- The complete Bhagavad Gita: all 18 chapters and 701 verses (previously 25), bundled offline.
- English translation by Annie Besant (4th ed., 1922), which is in the public domain.
- Sanskrit text from the `gita/gita` dataset (The Unlicense).
- IAST transliteration generated from the Devanagari by `scripts/build-verses.py`.
- `CREDITS.md` with sources and licences, and a source attribution line in the page footer.
- Search now also matches verse numbers (e.g. `2.47`), chapter titles and transliteration.

### Changed
- Verse theme tags now show the chapter title.
- Hindi and other Indian languages are now machine-translated from the English on demand
  (Chrome Translator API or Google Translate), clearly labelled as such.
- Footer quotes are taken from the bundled public-domain translation.
- Store listing, manifest description and privacy policy updated to match.

### Removed
- The bundled Hindi translation, word-by-word meanings and commentary. Their provenance
  (a modern copyrighted edition) could not be shown to be public domain.
- The "View Word Meanings & Explanation" panel and the "Default Expand Meaning" setting.

## [1.0.2] - 2026-09-23

### Changed
- Privacy policy URL now points to the GitHub Pages policy.
- Store listing made accurate: corrected descriptions, privacy details and
  `store.config.json` description (previously copy-pasted).
- Store assets organized under `store-assets/`; icon-512 re-compressed.
- Added `.gitignore` to keep Chrome Web Store secrets and build zips out of git.

## [1.0.0] - 2026-06-02

### Added
- Serene Bhagavad Gita New Tab interface.
- Sanskrit shlokas accompanied by English and Hindi translations.
- Detailed shloka word-by-word meanings and commentaries.
- Audio recitations for each shloka.
- Clean glassmorphic customized dark themes.
- Client storage integration using Chrome's local storage API.
