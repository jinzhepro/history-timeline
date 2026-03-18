# AGENTS.md

## 项目概述

**中华历史长河（朝代纪）** - 展示中国从夏朝到清朝完整历史朝代信息的交互式时间线应用，采用水墨风格设计。

### 技术栈
- **框架**: Next.js 16 (Pages Router)
- **UI 库**: React 19
- **样式**: Tailwind CSS 3
- **图表**: ECharts 6 + echarts-for-react
- **包管理**: npm
- **语言**: JavaScript (ES6+)

## Build / Test / Lint Commands

### 开发
```bash
npm run dev      # 启动开发服务器 (http://localhost:3000)
npm run build    # 生产构建
npm run start    # 启动生产服务器
```

### 代码质量 (需先安装)
```bash
npm install --save-dev eslint prettier eslint-config-next
npm run lint     # eslint . --ext .js,.jsx
npm run format   # prettier --write "**/*.js"
```

### 测试 (需先安装)
```bash
npm install --save-dev jest @testing-library/react @testing-library/jest-dom jest-environment-jsdom
# package.json 添加："test": "jest"
npm run test     # 运行所有测试
npm run test -- --testPathPattern=DynastyCard  # 单个测试文件
npm run test -- --watch  # 监听模式
```

## Code Style Guidelines

### 项目结构
```
nextjs-app/
├── components/          # React 组件 (PascalCase)
├── data/                # 静态数据
├── pages/               # Next.js 页面路由
├── styles/              # 全局样式
└── utils/               # 工具函数
```

### Imports 规范
- **使用 ES Module**，禁止 CommonJS require()
- **路径别名**: 优先使用 `@/` (配置于 jsconfig.json)
- **分组顺序** (组间空一行):
  1. React/Next 核心库
  2. 第三方库
  3. 内部模块 (`@/...`)
  4. 相对路径

```javascript
import React, { useState } from 'react';
import Head from "next/head";
import Link from "next/link";

import { Chart } from 'echarts';

import Timeline from "@/components/Timeline";
import dynasties from '@/data/dynasties';

import { formatDate } from '../utils/helpers';
```

### Formatting 规范
- **缩进**: 2 个空格
- **字符串**: 单引号 `'`
- **行尾逗号**: ES6 对象/数组添加
- **行长度**: 最大 100 字符
- **分号**: 必须使用

### Naming 规范
- **组件文件**: PascalCase (`DynastyCard.js`)
- **组件函数**: PascalCase (`function DynastyCard() {}`)
- **函数/变量**: camelCase (`handleClick`, `filteredDynasties`)
- **常量**: `UPPER_SNAKE_CASE` (`MAX_COUNT`)
- **CSS 类名**: kebab-case + `ink-` 前缀 (`.ink-card`)

### 组件规范
- **函数组件 + Hooks**，禁止 class 组件
- **JSDoc 注释**: 组件顶部需包含功能说明
- **Props 解构**: 直接在函数参数中解构
- **无障碍访问**: 支持 ARIA、键盘导航
- **导出**: `export default` 默认导出

### 样式规范
- **Tailwind CSS**: 布局和原子类
- **自定义 CSS**: `globals.css` 定义水墨风格
- **CSS 变量**:
  ```css
  --china-red: #C41E3A;
  --ink-black: #2C2C2C;
  --xuan-paper: #F5F5F0;
  ```
- **响应式断点**: `sm: 640px`, `md: 768px`, `lg: 1024px`, `xl: 1280px`

### 错误处理
- **异步操作**: try-catch 处理
- **空状态**: 条件渲染处理空数据
- **边界情况**: Optional Chaining (`?.`) 和 Nullish Coalescing (`??`)

## 开发注意事项

### ECharts 使用
- **用途**: 疆域地图、朝代世系表
- **内存管理**: 组件卸载时销毁实例
  ```javascript
  useEffect(() => {
    return () => chartInstance.current?.dispose();
  }, []);
  ```
- **响应式**: 监听窗口大小变化，调用 `resize()`

### 数据管理
- **静态数据**: `/data/dynasties.js`
- **性能优化**: 使用 `useMemo`, `useCallback`

### 水墨风格
- **配色**: 遵守 globals.css 主题色
- **字体**: 优先楷体 (`KaiTi`, `STKaiti`)

### Next.js Pages Router
- **文件路由**: `pages/` 目录即路由
- **动态路由**: `[id].js` 处理动态参数
- **数据获取**: `getStaticProps` / `getServerSideProps`
- **懒加载**: `dynamic(() => import(...), { ssr: false })`

## Git 工作流

### 提交信息规范
```
feat: 新功能
fix: 修复 bug
docs: 文档更新
style: 代码格式
refactor: 重构
test: 添加测试
chore: 构建/工具配置
```

### 分支策略
- `main`: 生产分支
- `develop`: 开发分支
- `feature/*`: 功能分支
- `fix/*`: 修复分支

## Other Rules

### Cursor Rules
No specific Cursor rules found.

### Copilot Rules
No specific Copilot rules found.

---
**最后更新**: 2026 年 3 月 18 日
