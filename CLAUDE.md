# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static website for "DevFest Kaohsiung X S. TW Communities Gathering 2025" - a tech conference event. The site
is built with vanilla HTML, CSS, and JavaScript without any build system or package manager.

## Project Structure

```
/
├── index.html           # Main HTML file with all page content
├── css/
│   └── style.css       # All styles, including Material 3 design system
├── js/
│   └── main.js         # All JavaScript functionality
├── images/             # Event images and assets
├── favicon.svg         # Site favicon
└── temp_event_info.html # Temporary event information page
```

## Architecture

- **Single Page Application (SPA)**: The site uses JavaScript-based page switching without actual navigation
- **Multi-language Support**: Built-in i18n system with Traditional Chinese (zh-Hant) and English translations
- **Material Design 3**: Uses Google's Material Web Components and Material 3 color system
- **Responsive Design**: Mobile-first approach with responsive navigation

### Key Components

1. **Navigation System** (`js/main.js:400+`):
    - Page switching via `data-page` attributes
    - Mobile hamburger menu with overlay
    - Active state management

2. **Internationalization** (`js/main.js:1-200`):
    - Translation object with language keys
    - Dynamic text replacement using `data-i18n-key` attributes
    - Language switcher with localStorage persistence

3. **Event Information Structure**:
    - 11-layer card layout for event details
    - Schedule grid with track-based organization
    - Speaker cards with image and bio sections

## Development Commands

This is a static website with no build system. Development workflow:

```bash
# Open the site locally
# Simply open index.html in a web browser, or use a local server:
python -m http.server 8000
# or
npx serve .
```

## CSS Architecture

The CSS follows Material 3 design principles:

- CSS custom properties for color system
- Google Fonts (Roboto) integration
- Responsive breakpoints
- Material Web Components styling

## JavaScript Architecture

- **Pure ES6**: No frameworks or build tools
- **Event-driven**: Uses event listeners for interactions
- **Modular structure**: Separate functions for each feature
- **State management**: Uses localStorage for language preference

## Content Management

- All text content is managed through the `translations` object in `js/main.js`
- Images are stored in the `/images` directory
- Event schedules and speaker information are hardcoded in the translation objects

## Git Workflow

Currently on branch `feature/圖片比例調整` with modifications to:

- `css/style.css` - styling adjustments
- `temp_event_info.html` - temporary event info page