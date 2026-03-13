# 中华历史长河 - 中国历史时间线应用

一个展示中国从夏朝到清朝完整历史朝代信息的交互式时间线应用，采用优雅的水墨风格设计。

## ✨ 功能特色

### 核心功能
- 📜 **历史朝代展示** - 从夏朝到清朝的完整历史时间线
- 🎨 **水墨风格 UI** - 中国传统配色，宣纸背景，典雅设计
- 🔍 **时期筛选** - 按上古、中古、近古、帝国晚期分类浏览
- 🔎 **实时搜索** - 快速查找特定朝代或君主
- 📱 **响应式设计** - 完美适配桌面和移动设备
- ♿ **无障碍访问** - 支持键盘导航和屏幕阅读器

### 🆕 新增功能
- 🌳 **朝代世系表** - ECharts 树状图展示皇帝传承关系
  - 树状图布局，支持折叠/展开
  - 开国皇帝用红色高亮显示
  - 鼠标悬停查看皇帝详情（年号、在位时间、描述）
  - 支持缩放和拖拽平移

## 🛠️ 技术栈

- **框架**: Next.js 16 (Pages Router)
- **UI 库**: React 19
- **样式**: Tailwind CSS 3
- **图表**: ECharts 6 + echarts-for-react
- **包管理**: npm

## 🚀 快速开始

### 安装依赖
```bash
npm install
```

### 开发模式
```bash
npm run dev
```
访问 [http://localhost:3000](http://localhost:3000)

### 生产构建
```bash
npm run build
npm run start
```

## 📁 项目结构

```
nextjs-app/
├── components/           # React 组件
│   ├── Breadcrumb.js    # 面包屑导航
│   ├── DynastyCard.js   # 朝代卡片
│   ├── DynastyMap.js    # 朝代疆域地图 (ECharts)
│   ├── DynastyLineage.js # 朝代世系表 (ECharts)
│   ├── Timeline.js      # 时间线主组件
│   ├── TimelineFilter.js # 筛选组件
│   └── Quiz.js          # 历史测验组件
├── data/
│   └── dynasties.js     # 朝代数据
├── pages/
│   ├── index.js         # 首页
│   ├── _app.js          # 应用入口
│   ├── _document.js     # 文档结构
│   ├── quiz.js          # 测验页面
│   └── dynasty/[id].js  # 朝代详情动态路由
├── styles/
│   └── globals.css      # 全局样式
└── AGENTS.md            # 开发指南
```

## 🎯 使用方法

### 查看朝代信息
1. 浏览时间线，点击任意朝代卡片
2. 跳转到朝代详情页面，查看:
   - 基本信息（开国君主、代表君主、持续时间）
   - 疆域地图
   - 朝代世系表
   - 重要历史事件
   - 文化成就

### 使用朝代世系表
1. 在朝代详情页面，朝代世系表默认展开
2. **交互操作**:
   - 🖱️ **拖拽平移** - 调整视图位置
   - 🔍 **滚轮缩放** - 放大/缩小
   - 💬 **悬停** - 显示皇帝详情（年号、在位时间、描述）
   - 📂 **折叠/展开** - 点击节点可折叠或展开子节点

### 筛选和搜索
- 使用顶部的时期筛选器选择特定历史时期
- 在搜索框输入朝代名或君主名快速查找

## 📊 已录入数据

### 朝代数据
- ✅ 夏朝、商朝、西周、东周
- ✅ 秦朝、西汉、东汉
- ✅ 三国、西晋、东晋、南北朝
- ✅ 隋朝、唐朝、五代十国
- ✅ 北宋、南宋、元朝
- ✅ 明朝、清朝

### 历史数据
- ✅ 完整的朝代世系表（按在位时间排序）
- ✅ 详细的疆域地图（ECharts 可视化）
- ✅ 重要历史事件和文化成就

## 🎨 设计特色

### 水墨风格
- 中国传统配色（中国红、琉璃黄、青花蓝）
- 宣纸纹理背景
- 优雅的动画过渡效果
- 书法字体（楷体）

### 响应式布局
- 桌面端：左右交替的时间轴布局
- 移动端：单列垂直布局
- 自适应字体和间距

## 🔧 开发指南

### 添加新朝代
在 `/data/dynasties.js` 的 `dynasties` 数组中添加新朝代数据。

### 修改组件样式
- **时间线**: 编辑 `/components/Timeline.js`
- **朝代卡片**: 编辑 `/components/DynastyCard.js`
- **疆域地图**: 编辑 `/components/DynastyMap.js`
- **朝代世系表**: 编辑 `/components/DynastyLineage.js`

## 📖 资源链接

- [Next.js 文档](https://nextjs.org/docs)
- [ECharts 文档](https://echarts.apache.org/zh/index.html)
- [Tailwind CSS 文档](https://tailwindcss.com/docs)

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 📄 许可证

MIT License

---

**中华文明 · 源远流长** 🇨🇳
