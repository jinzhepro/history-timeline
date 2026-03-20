# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Quick Reference

### Commands
```bash
npm run dev      # Start dev server at localhost:3000
npm run build    # Production build
npm run start    # Start production server
```

### Tech Stack
- Next.js 16 (Pages Router)
- React 19
- Tailwind CSS 3
- ECharts 6 + echarts-for-react
- JavaScript (ES6+)

## Architecture Overview

This is a Chinese history timeline application displaying dynasties from Xia (2070 BCE) to Republic of China (1949 CE).

### Directory Structure
```
nextjs-app/
├── components/        # React components
│   ├── Timeline.js          # Main timeline with lazy-loaded DynastyCard
│   ├── TimelineFilter.js    # Period filter and search
│   ├── DynastyCard.js       # Dynasty info card
│   ├── DynastyMap.js        # ECharts territory map
│   ├── DynastyLineage.js    # ECharts family tree
│   ├── Breadcrumb.js        # Navigation breadcrumb
│   └── Quiz.js              # History quiz component
├── data/
│   └── dynasties.js         # All dynasty data (4000+ lines)
├── pages/
│   ├── index.js             # Home page (Timeline)
│   ├── dynasty/[id].js      # Dynasty detail page
│   ├── quiz.js              # Quiz page
│   ├── _app.js              # App entry
│   └── _document.js         # Document structure
├── styles/
│   └── globals.css          # Ink-style theme (CSS vars)
├── next.config.mjs          # Next.js config
├── jsconfig.json            # Path alias: @/* -> ./*
└── AGENTS.md                # Detailed development guide
```

### Key Patterns

**Component Lazy Loading**: Timeline.js uses `React.lazy()` + `Suspense` for DynastyCard to reduce initial bundle size.

**ECharts Memory Management**: Components must dispose ECharts instances on unmount:
```javascript
useEffect(() => {
  return () => chartInstance.current?.dispose();
}, []);
```

**Data Structure**: Each dynasty in `data/dynasties.js` contains:
- Basic info: id, name, startYear, endYear, period, founder
- `representativeRulers[]`, `events[]`, `culturalAchievements[]`
- `territory`: { center, zoom, area, description, capital }
- `lineage[]`: Emperor family tree with predecessor/successor links
- Optional: `battles[]`

**Period Values**: `ancient`, `classical`, `medieval`, `late-imperial`, `modern`

**CSS Theme**: globals.css defines CSS variables for ink-style theme:
- `--china-red: #C41E3A`, `--glazed-yellow: #FFD700`
- `--ink-black: #2C2C2C`, `--xuan-paper: #F5F5F0`
- Classes: `.ink-card`, `.ink-title`, `.ink-button`, etc.

## Important Notes

1. **Path Alias**: `@/` maps to root directory (configured in jsconfig.json)
2. **No TypeScript**: Project uses JavaScript only
3. **No lint/test setup**: ESLint/Prettier/Jest not configured by default
4. **ECharts Import**: Use `echarts-for-react` wrapper for React components
5. **Responsive**: Mobile uses single-column, desktop uses alternating left/right timeline

## Additional Patterns

**Dynamic Routes**: `pages/dynasty/[id].js` handles dynasty detail pages using Next.js dynamic routing.

**Quiz Component**: `/components/Quiz.js` provides interactive history quizzes with multiple question types (multiple choice, fill-in-blank, sorting).

**CSS Utility Classes** (defined in globals.css):
- `.ink-card`, `.ink-title`, `.ink-button` - Core UI components
- `.ink-detail-panel`, `.ink-list-item`, `.ink-divider` - Content layout
- `.quiz-option-btn`, `.quiz-progress-bar` - Quiz UI elements
- `.family-tree-container`, `.person-card` - ECharts visualization containers

**Next.js Config**:
- `compiler.removeConsole` strips console.log in production
- `images.remotePatterns` allows external images from geo.datav.aliyun.com

**Data Notes**: Historical dates in `dynasties.js` include academic disclaimers - Xia/Shang/Zhou dates are scholarly estimates.

For detailed coding standards and conventions, see AGENTS.md.
