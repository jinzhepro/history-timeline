# AGENTS.md

## Project Overview

**朝代纪 (Chaodaiji)** — Interactive timeline showcasing Chinese dynasties from Xia to Republic of China, with ink-wash (水墨) aesthetic.

### Tech Stack
- **Framework**: Next.js 16 (Pages Router)
- **UI**: React 19, Tailwind CSS 3
- **Charts**: ECharts 6 + echarts-for-react
- **Icons**: lucide-react
- **Language**: JavaScript (ES6+), no TypeScript

## Commands

```bash
npm run dev      # Dev server (http://localhost:3000)
npm run build    # Production build
npm run start    # Production server
```

No lint, test, or format scripts are configured. To add testing:
```bash
npm install --save-dev jest @testing-library/react @testing-library/jest-dom jest-environment-jsdom
# Then add "test": "jest" to package.json scripts
npm run test -- --testPathPattern=DynastyCard  # Single test file
```

## Project Structure

```
├── components/        # React components (PascalCase filenames)
│   ├── Timeline.js    # Main timeline with lazy-loaded DynastyCard
│   ├── DynastyCard.js # Dynasty info card
│   ├── Quiz.js        # History quiz component
│   └── quiz/          # Quiz subcomponents
├── data/              # Static data (dynasties.js - 4800+ lines)
├── pages/             # Next.js file-based routing
│   ├── api/           # API routes
│   └── dynasty/       # Dynamic route: [id].js
├── styles/            # globals.css with ink-wash theme
├── utils/             # Utility functions (quizGenerator.js)
└── test/              # Test directory (currently empty)
```

## Code Style

### Imports
- Use ES modules (`import`), never CommonJS (`require`)
- Path alias `@/` maps to project root (configured in `jsconfig.json`)
- Group order (blank line between groups):
  1. React/Next core
  2. Third-party libs
  3. Internal `@/` imports
  4. Relative imports

```js
import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';

import Timeline from '@/components/Timeline';
import dynasties from '@/data/dynasties';
```

### Formatting
- 2-space indentation
- Single quotes for JS strings, double quotes for JSX attributes
- Trailing commas in objects/arrays
- Semicolons required
- Max line length: ~100 chars (soft)

### Naming
- **Component files**: PascalCase (`DynastyCard.js`)
- **Components**: PascalCase functions with arrow syntax
- **Utilities**: camelCase (`formatYear`, `generateQuiz`)
- **Constants**: UPPER_SNAKE_CASE
- **CSS classes**: Tailwind utilities + custom `ink-` prefixed classes

### Components
- Function components with hooks only, no class components
- JSDoc comment at top describing purpose
- Props destructured in function parameters
- Default export at bottom: `export default ComponentName;`

```js
import React from 'react';

/**
 * 朝代卡片组件 - 极简水墨风格
 */
const DynastyCard = ({ dynasty, index }) => {
  // ...
};

export default DynastyCard;
```

## Styling

### Tailwind Custom Colors (tailwind.config.js)
```js
'china-red': '#B93A3A'    // 朱红
'ink': '#1A1A1A'          // 墨色
'ink-black': '#1A1A1A'
'ink-gray': '#4A4A4A'
'paper': '#F9F8F4'        // 宣纸白
'paper-dark': '#F0EEE8'
```

### CSS Variables (globals.css)
Same colors available as CSS vars: `--china-red`, `--ink-black`, `--paper`, etc.

### Font
Primary: `'KaiTi', 'STKaiti', 'SimSun', serif` — use `font-chinese` Tailwind class.

### Custom CSS Classes (globals.css)
- `.ink-card` — card with hover border effect
- `.ink-button`, `.ink-button-primary` — styled buttons
- `.ink-badge`, `.ink-badge-red` — small labels
- `.ink-input` — form inputs
- `.quiz-option-btn` — quiz answer buttons

## Key Patterns

### Component Lazy Loading
Timeline.js uses `React.lazy()` + `Suspense` for DynastyCard to reduce initial bundle size.

### ECharts Usage
Always dispose on unmount to prevent memory leaks:
```js
const chartRef = useRef(null);
useEffect(() => {
  return () => chartRef.current?.getEchartsInstance()?.dispose();
}, []);
```

### Data Source
All dynasty data lives in `/data/dynasties.js` (4800+ lines). Structure per dynasty:
```js
{ id, name, startYear, endYear, period, founder,
  representativeRulers, territory, events,
  culturalAchievements, battles, lineage }
```

### Dynamic Routes
Dynasty detail pages use `pages/dynasty/[id].js` with `getStaticPaths`/`getStaticProps`.

### Error Handling
- Use optional chaining (`?.`) and nullish coalescing (`??`)
- Conditional rendering for empty states
- try-catch for async operations

## Important Notes

1. **Path Alias**: `@/` maps to root directory (configured in jsconfig.json)
2. **No TypeScript**: Project uses JavaScript only
3. **No lint/test setup**: ESLint/Prettier/Jest not configured by default
4. **ECharts Import**: Use `echarts-for-react` wrapper for React components
5. **Responsive**: Mobile uses single-column, desktop uses alternating left/right timeline
6. **Next.js Config**: `compiler.removeConsole` strips console.log in production
7. **Data Notes**: Historical dates in `dynasties.js` include academic disclaimers - Xia/Shang/Zhou dates are scholarly estimates

## Git Conventions

```
feat: new feature
fix: bug fix
docs: documentation
style: formatting
refactor: code restructuring
test: adding tests
chore: build/tooling config
```

## Notes for Agents

- No Cursor rules (`.cursorrules`) or Copilot instructions found
- Project uses Pages Router, not App Router
- Chinese language UI — preserve Chinese text in components
- Ink-wash aesthetic is core — use muted colors, avoid bright/modern styles
- Data file is large; search carefully when modifying dynasty data
