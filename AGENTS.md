# AGENTS.md

## 项目概述

**朝代纪 (Chaodaiji)** — 水墨风格中国历史时间线应用，展示从夏朝到中华民国的完整朝代历史。

## 技术栈

| 类别 | 技术 |
|------|------|
| 框架 | Next.js 16 (Pages Router) |
| UI | React 19, Tailwind CSS 3 |
| 图表 | ECharts 6 + echarts-for-react |
| 语言 | JavaScript (ES6+) |

## 命令

### 开发
```bash
npm run dev      # 开发服务器 http://localhost:3000
npm run build    # 生产构建
npm run start    # 生产服务器
```

### 测试（需先安装）
```bash
npm install --save-dev jest @testing-library/react @testing-library/jest-dom jest-environment-jsdom
# 在 package.json 添加 "test": "jest"
npm run test                          # 运行所有测试
npm run test -- --testPathPattern=X   # 运行单个测试文件
npm run test -- --watch               # 监听模式
```

## 项目结构

```
├── components/        # React 组件 (PascalCase)
│   ├── Timeline.js    # 时间线 (懒加载 DynastyCard)
│   ├── TimelineFilter.js    # 时间线筛选器
│   ├── TimelineOverview.js  # 时间线概览导航
│   ├── DynastyCard.js # 朝代卡片
│   ├── DynastyMap.js  # 疆域地图 (ECharts)
│   └── DynastyLineage.js # 世系表 (ECharts)
├── data/              # 静态数据
│   └── dynasties.js   # 朝代数据 (4800+ 行)
├── pages/             # 文件路由 (Pages Router)
│   ├── index.js       # 首页
│   └── dynasty/[id].js # 动态路由 - 朝代详情页
├── styles/            # 全局样式
│   └── globals.css    # 水墨风格 CSS
├── utils/             # 工具函数
│   └── dateFormat.js  # 日期格式化工具
└── public/            # 静态资源
    └── favicon.ico    # 网站图标
```

## 代码风格

### 导入规范
- ES 模块 (`import`)，禁止 CommonJS (`require`)
- `@/` 映射到项目根目录 (jsconfig.json)
- 导入顺序（组间空行）：
  1. React/Next 核心
  2. 第三方库
  3. 内部 `@/` 导入
  4. 相对路径导入

```js
import React, { useState } from 'react';
import Link from 'next/link';

import Timeline from '@/components/Timeline';
import dynasties from '@/data/dynasties';
```

### 格式化
- 2 空格缩进，单引号 (JSX 属性用双引号)
- 对象/数组末尾逗号，必须分号
- 行宽约 100 字符
- 使用 Prettier 格式化，配置见 `.prettierrc`

### ESLint 配置
- 启用 React Hooks 规则
- 禁止 `any` 类型（无 TypeScript 项目忽略）
- 生产环境禁止 `console.log`（next.config.mjs 处理）

### 命名约定
| 类型 | 风格 | 示例 |
|------|------|------|
| 组件文件 | PascalCase | `DynastyCard.js` |
| 组件 | PascalCase 箭头函数 | `const DynastyCard = () => {}` |
| 工具函数 | camelCase | `formatYear` |
| 常量 | UPPER_SNAKE_CASE | `MAX_WIDTH` |

### 组件规范
- 仅函数组件 + Hooks，禁用类组件
- 顶部 JSDoc 注释，Props 解构
- 底部默认导出：`export default ComponentName;`

```js
/**
 * 朝代卡片组件 - 极简水墨风格
 */
const DynastyCard = ({ dynasty, index }) => {
  // ...
};

export default DynastyCard;
```

## 样式规范

### Tailwind 颜色配置 (tailwind.config.js)
```js
colors: {
  'china-red': '#B93A3A',      // 朱红 - 强调色
  'ink': '#0D0D0D',             // 墨色 - 主文字色
  'ink-black': '#0D0D0D',       // 深墨色
  'ink-gray': '#3D3D3D',        // 深灰 - 次要文字
  'paper': '#F5F3EF',           // 宣纸白 - 背景色
  'paper-dark': '#EBE9E4',      // 深宣纸
  'glazed-yellow': '#FFD700',   // 琉璃黄 - 点缀
  'qinghua-blue': '#1E3A8A',    // 青花蓝
  'xuan-paper': '#F5F5F0',      // 宣纸
  'antique-bronze': '#8B4513',  // 古铜色
  'jade-green': '#00A862',      // 玉绿
}
```

### CSS 类规范
```css
/* 水墨卡片样式 */
.ink-card {
  background: var(--paper);
  border: 1px solid rgba(0, 0, 0, 0.12);
  border-radius: 4px;
  padding: 24px;
}

/* 按钮样式 */
.ink-button {
  background: transparent;
  color: var(--ink-black);
  border: 1px solid var(--ink-gray);
}

.ink-button-primary {
  background: var(--ink-black);
  color: white;
}

/* 标签样式 */
.ink-badge {
  display: inline-block;
  padding: 2px 8px;
  font-size: 0.75rem;
  background: rgba(0, 0, 0, 0.04);
}
```

### 字体使用
```js
// 中文字体栈
fontFamily: {
  'chinese': ['KaiTi', 'STKaiti', 'SimSun', 'serif']
}

// 使用示例
<h1 className="font-chinese">中国历史时间线</h1>
```

### 动画效果
```js
// Tailwind 配置中的动画
animation: {
  'fade-in': 'fadeIn 0.8s ease-in-out forwards',
  'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
  'slide-down': 'slideDown 0.4s ease-out forwards',
}

// 使用示例
<div className="animate-fade-in-up">
  {/* 内容 */}
</div>
```

## 关键模式

### React Hooks 使用规范
```js
// 使用 useState 管理状态
const [selectedPeriod, setSelectedPeriod] = useState('all');

// 使用 useMemo 优化计算
const filteredDynasties = useMemo(() => {
  return dynasties.filter(dynasty => {
    // 过滤逻辑
  });
}, [selectedPeriod, searchQuery]);

// 使用 useCallback 缓存函数
const scrollToDynasty = useCallback((dynasty, index) => {
  // 滚动逻辑
}, []);

// 使用 useRef 访问 DOM
const dynastyRefs = useRef({});
```

### 懒加载模式
```js
// 懒加载组件
const DynastyCard = React.lazy(() => import('./DynastyCard'));

// 使用 Suspense 包裹
<Suspense fallback={<SkeletonCard />}>
  <DynastyCard dynasty={dynasty} index={index} />
</Suspense>

// 骨架屏组件示例
const SkeletonCard = () => (
  <div className="bg-paper rounded p-6 border border-[rgba(0,0,0,0.12)] animate-pulse">
    <div className="h-5 bg-[rgba(0,0,0,0.08)] rounded w-3/4 mb-3"></div>
    <div className="h-4 bg-[rgba(0,0,0,0.06)] rounded w-1/2 mb-3"></div>
  </div>
);
```

### ECharts 使用
必须卸载时销毁实例防止内存泄漏：
```js
import ReactECharts from 'echarts-for-react';

const DynastyMap = ({ mapData }) => {
  const chartRef = useRef(null);
  
  // 清理 ECharts 实例
  useEffect(() => {
    return () => {
      if (chartRef.current) {
        chartRef.current.getEchartsInstance()?.dispose();
      }
    };
  }, []);
  
  return (
    <ReactECharts
      ref={chartRef}
      option={option}
      style={{ height: '400px' }}
    />
  );
};
```

### 响应式布局
```js
// 移动端单列，桌面端双列
<div className="md:hidden">
  <DynastyCard dynasty={dynasty} />
</div>

<div className="hidden md:flex items-center">
  {/* 桌面端布局 */}
</div>

// 使用 Tailwind 响应式类
<div className="text-center md:text-left lg:max-w-6xl lg:mx-auto">
  {/* 内容 */}
</div>
```

### 错误处理
- 可选链 (`?.`) 和空值合并 (`??`)
- 条件渲染空状态
- 异步操作 try-catch
```js
// 可选链示例
const rulerName = dynasty?.founder ?? '未知';

// 空状态渲染
{filteredDynasties.length === 0 && (
  <div className="text-center py-16">
    <p className="text-gray font-chinese">暂无匹配的朝代</p>
  </div>
)}
```

## 重要配置

### jsconfig.json
```json
{ 
  "compilerOptions": { 
    "paths": { 
      "@/*": ["./*"] 
    } 
  } 
}
```

### next.config.mjs
```js
const nextConfig = {
  reactStrictMode: true,
  
  // 性能优化配置
  compiler: {
    // 移除生产环境的 console.log
    removeConsole: process.env.NODE_ENV === 'production',
  },
  
  // 图片优化配置
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'geo.datav.aliyun.com',
      },
    ],
    formats: ['image/avif', 'image/webp'],
  },
};

export default nextConfig;
```

### postcss.config.js
```js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

## 性能优化

### 组件懒加载
```js
// 使用 React.lazy + Suspense
const DynastyCard = React.lazy(() => import('./DynastyCard'));

<Suspense fallback={<SkeletonCard />}>
  <DynastyCard />
</Suspense>
```

### 计算优化
```js
// 使用 useMemo 缓存计算结果
const filteredDynasties = useMemo(() => {
  return dynasties.filter(dynasty => {
    // 复杂过滤逻辑
  });
}, [selectedPeriod, searchQuery]);

// 使用 useCallback 缓存函数引用
const scrollToDynasty = useCallback((dynasty) => {
  // 滚动逻辑
}, []);
```

### 图片优化
```js
// 使用 Next.js Image 组件（如有需要）
import Image from 'next/image';

<Image
  src="/path/to/image.jpg"
  alt="描述"
  width={800}
  height={600}
  priority={true} // 首屏图片
/>
```

## 最佳实践

### 1. 数据流
- 从 `data/dynasties.js` 导入数据
- 通过 props 传递给子组件
- 避免在组件内直接修改原始数据

### 2. 状态管理
- 使用 React Hooks 管理本地状态
- 复杂状态使用 useReducer
- 避免过度提升状态

### 3. 可访问性
```js
// 使用语义化 HTML 标签
<nav>, <main>, <article>, <footer>

// 添加 aria 标签
<button aria-label="查看详情">

// 图片添加 alt 文本
<img src="..." alt="朝代疆域图" />
```

### 4. SEO 优化
```js
import Head from 'next/head';

<Head>
  <title>朝代纪 - 中国历史朝代时间线</title>
  <meta name="description" content="探索中国五千年历史" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="icon" href="/favicon.ico" />
</Head>
```

### 5. 代码分割
- 使用动态路由 `/dynasty/[id].js`
- 大组件使用懒加载
- 利用 Next.js 自动代码分割

## Git 提交规范

```
feat: 新功能
fix: 修复 bug
docs: 文档更新
style: 格式化
refactor: 重构
test: 添加测试
chore: 构建/工具配置
```

## 注意事项

1. **Pages Router** — 不使用 App Router (next/headers, next/cache 等不可用)
2. **无 TypeScript** — 纯 JavaScript，使用 JSDoc 提供类型提示
3. **中文 UI** — 保留组件中文文本，不翻译成英文
4. **水墨风格** — 传统配色，避免鲜艳/现代风格 (如亮蓝色、荧光色)
5. **大数据文件** — dynasties.js 4800+ 行，修改时仔细搜索，避免破坏数据结构
6. **无外部规则** — 无 Cursor/Copilot rules，仅遵循 AGENTS.md
7. **ECharts 内存管理** — 必须在组件卸载时销毁实例
8. **懒加载组件** — 必须用 Suspense 包裹，提供骨架屏 fallback
9. **响应式设计** — 优先移动端，使用 Tailwind 响应式类 (md:, lg:)
10. **字体加载** — 使用系统字体栈，不依赖外部字体文件
