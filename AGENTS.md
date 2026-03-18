# AGENTS.md

## 项目概述

**中华历史长河（朝代纪）** - 一个展示中国从夏朝到清朝完整历史朝代信息的交互式时间线应用，采用优雅的水墨风格设计。

### 技术栈
- **框架**: Next.js 16 (Pages Router)
- **UI 库**: React 19
- **样式**: Tailwind CSS 3
- **图表**: ECharts 6 + echarts-for-react
- **包管理**: npm
- **语言**: JavaScript (ES6+)
- **构建工具**: PostCSS + Autoprefixer

## Build / Test / Lint Commands

### 开发
```bash
npm run dev      # 启动开发服务器 (http://localhost:3000)
```

### 构建
```bash
npm run build    # 生产构建
npm run start    # 启动生产服务器
```

### 代码质量 (推荐配置)
*当前项目未配置 lint/format/typecheck，建议添加以下脚本到 `package.json`:*

```bash
# 安装依赖 (如果需要)
npm install --save-dev eslint prettier eslint-config-next

# Lint 代码
npm run lint     # eslint . --ext .js,.jsx

# 格式化代码
npm run format   # prettier --write "**/*.js"

# 检查类型 (如果使用 TypeScript)
npx tsc --noEmit
```

### 测试 (推荐配置)
*项目暂未配置测试框架，建议添加 Jest + React Testing Library:*

```bash
# 安装测试依赖
npm install --save-dev jest @testing-library/react @testing-library/jest-dom jest-environment-jsdom

# 运行所有测试
npm run test

# 运行单个测试文件
npm run test -- --testPathPattern=DynastyCard

# 运行单个测试用例
npm run test -- --testNamePattern="should render dynasty name"

# 监听模式运行测试
npm run test -- --watch

# 生成测试覆盖率报告
npm run test -- --coverage
```

## Code Style Guidelines

### 项目结构
```
nextjs-app/
├── components/          # React 组件 (PascalCase 命名)
│   ├── Breadcrumb.js    # 面包屑导航
│   ├── DynastyCard.js   # 朝代卡片
│   ├── DynastyLineage.js# 朝代世系表 (ECharts)
│   ├── DynastyMap.js    # 疆域地图 (ECharts)
│   ├── Quiz.js          # 测验组件
│   ├── Timeline.js      # 时间线
│   └── TimelineFilter.js# 时间线过滤器
├── data/
│   └── dynasties.js     # 朝代数据 (静态 JSON 数据)
├── pages/               # Next.js 页面路由
│   ├── dynasty/
│   │   └── [id].js      # 动态路由：朝代详情页
│   ├── _app.js          # 应用入口
│   ├── _document.js     # 自定义 Document
│   ├── index.js         # 首页
│   └── quiz.js          # 测验页面
├── styles/
│   └── globals.css      # 全局样式 (水墨风格)
├── utils/
│   └── quizGenerator.js # 测验生成器工具
├── public/              # 静态资源
│   └── favicon.ico      # 网站图标
└── configuration files  # 配置文件
    ├── jsconfig.json    # JavaScript 配置 (路径别名)
    ├── next.config.mjs  # Next.js 配置
    ├── tailwind.config.js # Tailwind 配置
    └── postcss.config.js # PostCSS 配置
```

### Imports 规范
- **使用 ES Module 导入**，禁止使用 CommonJS require()
- **路径别名**: 优先使用 `@/` 别名 (配置于 `jsconfig.json`)
  ```javascript
  import Timeline from "@/components/Timeline"
  ```
- **分组顺序** (组间空一行):
  1. React 核心库 (`react`, `next/head`, `next/link`, `next/router`)
  2. 第三方库 (`echarts`, `echarts-for-react`, 其他 npm 包)
  3. 内部模块 (`@/components/...`, `@/utils/...`, `@/data/...`)
  4. 相对路径导入 (`../`, `./`)

```javascript
// ✅ 正确示例
import React, { useState, useMemo, useEffect } from 'react';
import Head from "next/head";
import Link from "next/link";

import { Chart } from 'echarts';
import SimpleReactLightbox from 'simple-react-lightbox';

import Timeline from "@/components/Timeline";
import dynasties from '@/data/dynasties';

import { formatDate } from '../utils/helpers';
import styles from './Card.module.css';
```

### Formatting 规范
- **缩进**: 2 个空格
- **字符串**: 优先使用单引号 `'`
- **行尾逗号**: ES6 对象和数组添加行尾逗号
- **行长度**: 最大 100 字符
- **分号**: 必须使用分号
- **括号**: 单行代码块可省略括号

### Naming 规范
- **组件文件**: PascalCase (如 `DynastyCard.js`, `Timeline.js`)
- **组件函数**: PascalCase (如 `function DynastyCard() {}`)
- **函数/变量**: camelCase (如 `handleClick`, `filteredDynasties`, `parseYear`)
- **常量**: `UPPER_SNAKE_CASE` (如 `MAX_COUNT`, `DEFAULT_THEME`)
- **私有属性**: `_prefix` 下划线前缀
- **CSS 类名**: 使用 kebab-case，以 `ink-` 前缀表示水墨风格组件
  ```css
  .ink-card
  .ink-button--primary
  .ink-timeline__item
  ```

### 组件规范
- **使用函数组件 + Hooks 模式**，禁止使用 class 组件
- **JSDoc 注释**: 每个组件文件顶部需包含功能说明
  ```javascript
  /**
   * 朝代世系表组件 - 卡片式线性展示（按在位时间排序）
   *
   * @param {Object} dynasty - 朝代数据对象
   * @param {string} dynasty.name - 朝代名称
   * @param {Object} dynasty.lineage - 世系数据
   */
  const DynastyLineage = ({ dynasty }) => { ... }
  ```
- **Props 解构**: 直接在函数参数中解构
- **无障碍访问**: 支持 ARIA 属性、键盘导航 (如 `aria-label`, `tabIndex`, `role`)
- **导出**: 使用 `export default` 作为默认导出

### 样式规范
- **Tailwind CSS**: 用于布局和原子类
- **自定义 CSS**: 在 `globals.css` 定义水墨风格变量和组件
- **CSS 变量** (主题色):
  ```css
  --china-red: #C41E3A;      /* 中国红 */
  --ink-black: #2C2C2C;      /* 墨黑 */
  --xuan-paper: #F5F5F0;     /* 宣纸白 */
  ```
- **响应式断点**:
  - `sm`: 640px (手机横屏)
  - `md`: 768px (平板)
  - `lg`: 1024px (桌面)
  - `xl`: 1280px (大屏)

### 错误处理
- **异步操作**: 使用 `try-catch` 处理
  ```javascript
  try {
    const data = await fetchData();
  } catch (error) {
    console.error('Failed to fetch data:', error);
    setError(error.message);
  }
  ```
- **空状态**: 组件中使用条件渲染处理空数据
  ```javascript
  if (!dynasty || !dynasty.lineage) {
    return <EmptyState message="暂无数据" />;
  }
  ```
- **边界情况**: 使用 Optional Chaining (`?.`) 和 Nullish Coalescing (`??`)

### 响应式设计
- **移动端优先**: 使用 Tailwind 前缀 `md:`, `lg:`
- **布局**: 桌面端左右交替，移动端单列
- **图片**: 使用响应式图片，添加 `loading="lazy"`

## 开发注意事项

### 1. ECharts 使用
- **用途**: 疆域地图 (DynastyMap.js)、朝代世系表 (DynastyLineage.js)
- **内存管理**: 组件卸载时销毁实例
  ```javascript
  useEffect(() => {
    return () => {
      chartInstance.current?.dispose();
    };
  }, []);
  ```
- **响应式**: 监听窗口大小变化，调用 `resize()` 方法

### 2. 数据管理
- **静态数据**: 位于 `/data/dynasties.js`
- **性能优化**: 使用 React Hooks (`useMemo`, `useCallback`) 优化计算和过滤
  ```javascript
  const filteredDynasties = useMemo(() => {
    return dynasties.filter(d => d.era === selectedEra);
  }, [selectedEra]);
  ```

### 3. 水墨风格
- **配色**: 遵守 `globals.css` 中定义的主题色
- **动画**: 使用 CSS transitions 和 keyframes
- **字体**: 优先使用楷体 (`KaiTi`, `STKaiti`) 展示历史内容

### 4. 朝代世系表数据结构
```javascript
{
  name: "皇帝名",
  reign: "年号",
  years: "在位时间",
  description: "描述",
  children: [...],  // 子节点数组
  isFounder: false  // 是否开国皇帝
}
```
- **展示方式**: 卡片式线性展示
- **排序规则**: 按在位时间升序排列
- **开国皇帝**: 红色高亮显示

### 5. Next.js Pages Router 特性
- **文件路由**: `pages/` 目录下文件即路由
- **动态路由**: `[id].js` 处理动态参数
- **数据获取**: 使用 `getStaticProps` 或 `getServerSideProps`
- **页面跳转**: 使用 `next/link` 或 `useRouter` hook

### 6. 性能优化
- **图片优化**: 使用 `next/image` 组件
- **代码分割**: Next.js 自动按页面分割
- **懒加载**: 非关键组件使用 `dynamic` 导入
  ```javascript
  import dynamic from 'next/dynamic';
  const Chart = dynamic(() => import('@/components/Chart'), { ssr: false });
  ```

## 测试指南 (推荐)

### 单元测试
- **测试框架**: Jest + React Testing Library
- **测试文件**: 与组件同名，`.test.js` 后缀
  ```
  components/
  ├── DynastyCard.js
  └── DynastyCard.test.js
  ```

### 测试示例
```javascript
import { render, screen } from '@testing-library/react';
import DynastyCard from './DynastyCard';

describe('DynastyCard', () => {
  it('should render dynasty name', () => {
    render(<DynastyCard name="唐朝" />);
    expect(screen.getByText('唐朝')).toBeInTheDocument();
  });
});
```

## Git 工作流

### 提交信息规范
```
feat: 添加新功能
fix: 修复 bug
docs: 文档更新
style: 代码格式调整
refactor: 重构代码
test: 添加测试
chore: 构建/工具配置
```

### 分支策略
- `main`: 生产环境分支
- `develop`: 开发分支
- `feature/*`: 功能分支
- `fix/*`: 修复分支

## Other Rules

### Cursor Rules
No specific Cursor rules found in `.cursor/rules/` or `.cursorrules`.

### Copilot Rules
No specific Copilot rules found in `.github/copilot-instructions.md`.

## 补充说明

### 代码观察要点

1. **组件模式**：所有组件均为函数组件，使用 Hooks 管理状态
2. **样式组合**：Tailwind CSS 原子类 + 自定义 `ink-` 前缀 CSS 类
3. **数据流**：静态数据位于 `/data/dynasties.js`，通过 props 传递
4. **ECharts 集成**：使用 `echarts-for-react` 库，注意组件卸载时清理实例
5. **响应式**：移动端单列，桌面端左右交替布局（使用 `md:` 断点）

### 开发快速参考

```bash
# 启动开发服务器
npm run dev

# 生产构建并测试
npm run build && npm run start

# 代码检查（需先安装）
npm install --save-dev eslint prettier eslint-config-next
npm run lint
npm run format
```

### 测试说明

当前项目**暂未配置测试框架**。如需添加测试：

1. 安装 Jest + React Testing Library
2. 在 `package.json` 添加 test 脚本
3. 测试文件命名：`*.test.js`
4. 运行测试：`npm test -- --testPathPattern=组件名`

---

**最后更新**: 2026 年 3 月 18 日