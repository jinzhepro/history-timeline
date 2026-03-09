# AGENTS.md

## 项目概述

中国历史时间线应用 - 展示从夏朝到清朝的完整历史朝代信息
- **技术栈**: Next.js 16 + React 19 + Tailwind CSS 3
- **类型**: 静态网站（SSG）
- **包管理**: npm

## Build / Test / Lint Commands

### 开发
```bash
npm run dev          # 启动开发服务器（http://localhost:3000）
```

### 构建
```bash
npm run build        # 生产环境构建
npm run start        # 启动生产服务器
```

### 代码检查
```bash
# 项目中未配置 lint 和 test 命令
# 建议添加以下依赖和命令：
# npm install -D eslint eslint-config-next
# npm run lint        # ESLint 代码检查
```

## Code Style Guidelines

### 文件组织
- **组件**: `/components/` 目录，使用 PascalCase 命名（如 `DynastyCard.js`）
- **数据**: `/data/` 目录，存放 JSON/JS 数据文件
- **页面**: `/pages/` 目录，Next.js 路由文件
- **样式**: `/styles/` 目录，全局 CSS 和模块样式

### 导入规范
```javascript
// 1. React 核心库
import React, { useState, useMemo } from 'react';

// 2. Next.js 组件
import Head from "next/head";

// 3. 内部组件（使用 @/ 别名）
import Timeline from "@/components/Timeline";
import dynasties from '../data/dynasties';

// 4. 样式导入
import "@/styles/globals.css";
```

### 命名规范
- **组件**: PascalCase - `DynastyCard`, `TimelineFilter`
- **函数**: camelCase - `handleClick`, `formatYear`
- **变量**: camelCase - `selectedDynasty`, `periodOptions`
- **常量**: UPPER_SNAKE_CASE - 暂未使用
- **CSS 类**: kebab-case - `ink-card`, `ink-title`

### React 组件规范
```javascript
// 使用函数组件 + 解构 props
const DynastyCard = ({ dynasty, isSelected, onClick, index, period }) => {
  // Hook 使用顺序：useState → useEffect → 自定义 hooks
  const [isVisible, setIsVisible] = useState(false);
  
  // 事件处理函数
  const handleClick = () => {
    onClick(dynasty.id);
  };
  
  return (
    <div className="ink-card">
      {/* 组件内容 */}
    </div>
  );
};

export default DynastyCard;
```

### Props 命名
- **事件处理**: `on + EventName` - `onClick`, `onChange`, `onClose`
- **布尔值**: `is/has/should + Adjective` - `isSelected`, `hasNext`, `shouldRender`
- **回调函数**: `on + Action` - `onPeriodChange`, `handleCloseClick`

### Tailwind CSS 使用
```javascript
// 1. 优先使用 Tailwind 工具类
<div className="flex items-center justify-center p-6 mb-4">

// 2. 复杂样式使用内联 style
<div style={{ 
  backgroundColor: periodColor,
  borderTop: `3px solid ${periodColor}`
}}>

// 3. 条件类名使用模板字符串
className={`ink-card ${isSelected ? 'shadow-lg' : ''}`}
```

### 自定义 CSS 规范
```css
/* 1. 使用 CSS 变量定义主题色 */
:root {
  --china-red: #C41E3A;
  --ink-black: #2C2C2C;
}

/* 2. 组件类名使用 BEM 或连字符命名 */
.ink-card { /* 卡片样式 */ }
.ink-card--selected { /* 修饰符 */ }
.ink-card__title { /* 子元素 */ }

/* 3. 动画使用 keyframes */
@keyframes inkFadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
```

### 数据结构规范
```javascript
// 朝代数据对象结构
{
  id: 'xia',                    // 唯一标识（kebab-case）
  name: '夏朝',                 // 朝代名称
  startYear: -2070,            // 开始年份（负数表示公元前）
  endYear: -1600,              // 结束年份
  period: 'ancient',           // 历史时期分类
  founder: '禹',               // 开国君主
  representativeRulers: [],    // 代表君主数组
  events: [],                  // 重要事件数组
  culturalAchievements: []     // 文化成就数组
}
```

### 事件处理规范
```javascript
// 1. 使用语义化的事件处理函数名
const handleDynastyClick = (dynastyId) => {
  setSelectedDynastyId(dynastyId);
};

// 2. 阻止事件冒泡时使用 stopPropagation
const handleCloseClick = (e) => {
  e.stopPropagation();
  onClose();
};

// 3. 键盘事件支持无障碍访问
const handleKeyDown = (e) => {
  if (e.key === 'Escape') {
    handleClose();
  }
};
```

### 无障碍访问（A11y）
```javascript
// 1. 可点击元素添加 role 和 tabIndex
<div
  role="button"
  tabIndex={0}
  onClick={handleClick}
  onKeyDown={handleKeyDown}
  aria-expanded={isSelected}
  aria-label={`查看${dynasty.name}详情`}
>

// 2. 对话框添加 aria 属性
<div
  role="dialog"
  aria-modal="true"
  aria-labelledby={`drawer-title-${dynasty.id}`}
>
```

### 性能优化
```javascript
// 1. 使用 useMemo 缓存计算结果
const filteredDynasties = useMemo(() => {
  return dynasties.filter(dynasty => {
    // 过滤逻辑
  });
}, [selectedPeriod, searchQuery]);

// 2. 使用动画延迟实现 staggered 效果
style={{ animationDelay: `${Math.min(index * 0.05, 0.5)}s` }}
```

### 注释规范
```javascript
/**
 * 组件说明 - 使用 JSDoc 风格
 * 功能：
 * - 功能点 1
 * - 功能点 2
 */
const DynastyDrawer = ({ dynasty, onClose }) => {
  // 单行注释说明复杂逻辑
  const formatYear = (year) => {
    if (year < 0) {
      return `${Math.abs(year)}年（公元前）`;
    }
    return `${year}年（公元）`;
  };
};
```

## 开发注意事项

1. **数据更新**: 修改 `/data/dynasties.js` 后无需重启，热更新会自动生效
2. **样式修改**: 全局样式在 `/styles/globals.css`，组件样式使用 Tailwind
3. **组件复用**: 新增组件放在 `/components/`，确保单一职责
4. **响应式**: 使用 Tailwind 的 `md:`、`lg:` 前缀实现响应式布局
5. **时期分类**: 
   - ancient: 夏商周
   - classical: 秦汉魏晋南北朝
   - medieval: 隋唐宋
   - late-imperial: 元明清

## 项目特色

- ✅ 水墨风格 UI 设计
- ✅ 时期筛选功能
- ✅ 实时搜索功能
- ✅ 侧边抽屉式详情面板
- ✅ 时间轴可视化（彩色节点）
- ✅ 响应式设计（移动端适配）
- ✅ 无障碍访问支持
