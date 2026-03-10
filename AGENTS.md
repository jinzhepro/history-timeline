# AGENTS.md

## 项目概述

**中华历史长河** - 一个展示中国从夏朝到清朝完整历史朝代信息的交互式时间线应用，采用优雅的水墨风格设计。

- **框架**: Next.js 16 (Pages Router)
- **UI 库**: React 19
- **样式**: Tailwind CSS 3
- **图表**: ECharts 6 + echarts-for-react
- **包管理**: npm

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

### 注意
- 项目当前没有配置 lint、format 或 typecheck 命令
- 如需添加，建议配置 ESLint、Prettier 和 TypeScript

## Code Style Guidelines

### 项目结构
```
nextjs-app/
├── components/          # React 组件
│   ├── DynastyCard.js   # 朝代卡片
│   ├── DynastyDrawer.js # 朝代详情抽屉
│   ├── DynastyDetail.js # 朝代详情
│   ├── Timeline.js      # 时间线主组件
│   ├── TimelineFilter.js # 筛选组件
│   ├── FamilyTree.js    # 人物关系图谱
│   ├── PersonCard.js    # 人物详情卡片
│   ├── Quiz.js          # 测验组件
│   └── README_QUIZ.md   # 测验功能文档
├── data/
│   └── dynasties.js     # 朝代和人物数据
├── pages/               # Next.js 页面
│   ├── index.js         # 首页
│   ├── quiz.js          # 测验页面
│   ├── _app.js          # 应用入口
│   ├── _document.js     # 文档结构
│   └── api/             # API 路由
├── styles/
│   └── globals.css      # 全局样式（水墨风格）
├── utils/
│   └── quizGenerator.js # 测验生成器
└── public/              # 静态资源
```

### Imports 规范
- 使用 ES Module 导入
- 按类型分组：React > 第三方库 > 内部模块 > 相对路径
- 使用 `@/` 别名导入项目内部模块（通过 jsconfig.json 配置）

```javascript
// 示例
import React, { useState, useMemo } from 'react';
import Head from "next/head";
import Link from "next/link";
import Timeline from "@/components/Timeline";
import dynasties from '../data/dynasties';
```

### Naming 规范
- **组件**: PascalCase (如 `DynastyCard.js`, `Timeline.js`)
- **函数/变量**: camelCase (如 `handleClick`, `filteredDynasties`)
- **常量**: 使用 const 声明，语义化命名
- **CSS 类名**: 使用 kebab-case，以 `ink-` 前缀表示水墨风格组件

### 组件规范
- 每个组件文件包含 JSDoc 注释说明功能
- 使用函数组件 + Hooks 模式
- 支持无障碍访问 (ARIA 属性、键盘导航)

```javascript
/**
 * 朝代卡片组件 - 水墨风格
 */
const DynastyCard = ({ dynasty, isSelected, onClick, index, period }) => {
  // 组件实现
};
```

### 样式规范
- **Tailwind CSS**: 用于布局和常用样式
- **自定义 CSS**: 在 `globals.css` 中定义水墨风格组件
- **CSS 变量**: 使用 `:root` 定义主题色
  - `--china-red`: #C41E3A (中国红)
  - `--glazed-yellow`: #FFD700 (琉璃黄)
  - `--qinghua-blue`: #1E3A8A (青花蓝)
  - `--ink-black`: #2C2C2C (墨色)
  - `--xuan-paper`: #F5F5F0 (宣纸色)
  - `--antique-bronze`: #8B4513 (古铜色)
  - `--jade-green`: #00A862 (玉绿)

### 字体规范
- 使用楷体作为主要字体: `'KaiTi', 'STKaiti', 'SimSun', serif`
- 标题使用 `.ink-title` 类

### Error Handling
- 使用 try-catch 处理异步操作
- 组件中使用条件渲染处理空状态

### 响应式设计
- 移动端优先设计
- 使用 Tailwind 响应式前缀: `md:`, `lg:`
- 桌面端采用左右交替布局，移动端采用单列布局

### 数据管理
- 静态数据存储在 `/data/dynasties.js`
- 组件状态使用 React Hooks (useState, useMemo)

## 开发注意事项

1. **水墨风格**: 所有 UI 组件应遵循水墨风格设计，使用定义好的 CSS 变量
2. **性能优化**: 使用 useMemo 过滤数据，避免不必要的重渲染
3. **无障碍**: 确保所有交互元素支持键盘导航和屏幕阅读器
4. **动画**: 使用 CSS 动画实现优雅的过渡效果
