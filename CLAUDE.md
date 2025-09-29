# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static website for "DevFest Kaohsiung X S. TW Communities Gathering 2025" - a tech conference event. The site
is built with vanilla HTML, CSS, and JavaScript without any build system or package manager, featuring a modern dynamic
content management system.

## Project Structure

```
/
├── index.html                    # Main HTML file with all page content
├── admin.html                    # Content management interface (demo)
├── css/
│   └── style.css                # All styles, Material 3 design system
├── js/
│   ├── main.js                  # Core JavaScript with i18n and navigation
│   └── dynamic-content.js       # Dynamic content management system
├── data/                        # JSON data files for dynamic content
│   ├── speakers.json            # Speaker information
│   ├── markets.json             # Tech creation market booths
│   ├── sponsors.json            # Sponsor information
│   ├── community.json           # Community participants
│   ├── staff.json               # Staff and volunteer information
│   └── about.json               # About us information
├── images/                      # Event images and assets
├── favicon.svg                  # Site favicon
├── README-DYNAMIC-CONTENT.md    # Dynamic content system documentation
└── test-*.html                  # Development test files
```

## Development Commands

This is a static website with no build system. Development workflow:

```bash
# Serve the site locally (required for JSON loading due to CORS)
python -m http.server 8000
# or
npx serve .

# Then open http://localhost:8000 in your browser
```

**Important**: Due to CORS restrictions, you must use a local server to test the dynamic content features. Opening
`index.html` directly in a browser will not load the JSON data files.

## Architecture

### Core Architecture

- **Single Page Application (SPA)**: JavaScript-based page switching using `data-page` attributes
- **Multi-language Support**: Built-in i18n system with Traditional Chinese (zh-Hant), English, and Japanese
- **Material Design 3**: Uses Google's Material Web Components and expressive color system
- **Responsive Design**: Mobile-first approach with hamburger navigation
- **Dynamic Content Management**: JSON-based content system for speakers, sponsors, and other dynamic data

### Key Systems

1. **Navigation System** (`js/main.js:400+`):
    - Page switching via `data-page` attributes without actual navigation
    - Mobile hamburger menu with overlay
    - Active state management across pages

2. **Internationalization System** (`js/main.js:1-200`):
    - Translation objects with nested language keys
    - Dynamic text replacement using `data-i18n-key` attributes
    - Language switcher with localStorage persistence
    - Support for zh-Hant, en, and ja languages

3. **Dynamic Content Management** (`js/dynamic-content.js`):
    - `DynamicContentManager` class handles all dynamic content
    - JSON-based data loading from `/data` directory
    - Multi-language content support in JSON files
    - Automatic rendering of speakers, sponsors, community booths, etc.
    - Content validation and error handling

4. **Event Information Structure**:
    - Multi-day schedule with track-based organization
    - Speaker cards with expandable bio sections
    - Sponsor tier system (gold/silver/bronze)
    - Tech creation market booth displays

### Content Management Architecture

The site features two content management approaches:

**Static Content** (`js/main.js`):

- Navigation labels, event metadata, static page content
- Managed via `translations` object with language keys

**Dynamic Content** (`data/*.json` + `js/dynamic-content.js`):

- Speakers, sponsors, community participants, staff
- JSON files with multi-language objects
- Dynamically loaded and rendered
- Structured data format with validation

## CSS Architecture

The CSS follows Material 3 design principles:

- **Color System**: Expressive Material 3 colors with CSS custom properties
- **Google Fonts**: Roboto font family integration
- **Responsive Design**: Mobile-first breakpoints and flexible layouts
- **Material Components**: Integration with Material Web Components
- **Custom Properties**: Extensive use of CSS variables for theming

Key color system variables:

- Core colors: `--color-blue`, `--color-green`, `--color-yellow`, `--color-red`
- Material 3 tokens: `--md-sys-color-primary`, `--md-sys-color-secondary`, etc.

## JavaScript Architecture

- **Pure ES6**: No frameworks or build tools required
- **Class-based**: `DynamicContentManager` class for content management
- **Promise-based**: Async/await for JSON loading
- **Event-driven**: Event listeners for user interactions
- **Modular structure**: Separate concerns between static and dynamic content
- **Error handling**: Comprehensive error handling for JSON loading and rendering

### Critical Functions

- `DynamicContentManager.loadAllData()`: Loads all JSON data files
- `DynamicContentManager.renderSpeakers()`: Renders speaker cards
- `setLanguage()`: Updates language and re-renders content
- Navigation event handlers for page switching

## Content Management

### Static Content

- Navigation labels and static text in `translations` object (`js/main.js`)
- Event schedules and metadata hardcoded in translations

### Dynamic Content

- **Speakers**: `data/speakers.json` - Speaker profiles with sessions and bios
- **Sponsors**: `data/sponsors.json` - Sponsor information with tiers
- **Community**: `data/community.json` - Participating community groups
- **Staff**: `data/staff.json` - Volunteer and staff information
- **Markets**: `data/markets.json` - Tech creation market booth information
- **About**: `data/about.json` - About us and organization information

Each JSON file follows a structured format with multi-language support. See `README-DYNAMIC-CONTENT.md` for detailed
format specifications.

## Data File Structure

All JSON files follow this pattern:

```json
{
  "dataType": [
    {
      "id": "unique-identifier",
      "field": {
        "zh": "Traditional Chinese text",
        "en": "English text",
        "ja": "Japanese text"
      }
    }
  ]
}
```

Required fields vary by content type but all support multi-language text objects.

## Testing and Development

### Test Files

- `test-page-switching.html` - Page navigation testing
- `mobile-test.html` - Mobile responsiveness testing
- `timeline-alignment-test.html` - Schedule layout testing
- `unified-card-layout.html` - Card component testing
- `test-feature.html` - Feature testing

### Development Workflow

1. Use local server for development (required for JSON loading)
2. Test dynamic content by modifying JSON files
3. Test responsive design across different screen sizes
4. Verify multi-language support by switching languages
5. Check browser console for any loading errors

## Common Development Tasks

### Adding New Speakers

1. Edit `data/speakers.json`
2. Add speaker photo to `images/` directory
3. Follow the JSON schema in `README-DYNAMIC-CONTENT.md`

### Adding New Sponsors

1. Edit `data/sponsors.json`
2. Add sponsor logo to `images/` directory
3. Specify tier (gold/silver/bronze) for proper styling

### Modifying Event Schedule

- Edit the schedule translations in `js/main.js`
- Schedule is currently static but could be moved to JSON system

### Multi-language Content

- All new content must include zh, en, and ja language variants
- Use the `DynamicContentManager.getText()` method for consistent language handling