# Quiz 测验组件使用说明

## 组件概述

`Quiz.js` 是一个功能完整的测验主组件，支持 7 种不同的题型，提供流畅的答题体验和即时反馈。

## 功能特性

### 核心功能
1. ✅ **题目显示** - 清晰展示题干和选项
2. ✅ **进度条和题号** - 实时显示答题进度和题号指示器
3. ✅ **选项选择** - 支持点击选择答案
4. ✅ **答案提交** - 提交答案后立即显示反馈
5. ✅ **答案反馈** - 正确/错误标识、答案解析、相关朝代
6. ✅ **自动跳转** - 2 秒后自动跳转下一题，或手动点击下一题

### 支持的题型

| 题型 | 标识 | 描述 | 示例 |
|------|------|------|------|
| 时间选择题 | `time` | 选择朝代的时间范围 | "西周建立于哪一年？" |
| 开国君主题 | `founder` | 选择朝代的建立者 | "谁建立了商朝？" |
| 历史事件题 | `event` | 选择发生在某朝代的事件 | "下列哪个事件发生在秦朝？" |
| 文化成就题 | `culture` | 选择某朝代的文化成就 | "甲骨文是哪个朝代的成就？" |
| 排序题 | `sort` | 按时间顺序排列朝代 | "下列朝代按时间顺序排列正确的是？" |
| 判断题 | `truefalse` | 判断陈述是否正确 | "秦始皇统一了六国，正确吗？" |
| 填空题 | `fillblank` | 填写正确答案 | "____建立了夏朝" |

## 组件 Props

```javascript
/**
 * @param {Object} props - 组件属性
 * @param {Array} props.questions - 测验题目数组（必需）
 * @param {Function} props.onComplete - 测验完成回调函数（可选）
 * @param {string} props.title - 测验标题（可选，默认：'中国历史朝代测验'）
 */
```

### questions 数组结构

每个题目对象应包含以下字段：

```javascript
{
  id: 'quiz_1234567890_abc',           // 唯一标识
  type: 'time',                         // 题型：time/founder/event/culture/sort/truefalse/fillblank
  question: '西周建立于哪一年？',        // 题干
  options: ['选项 A', '选项 B', ...],    // 选项数组（填空题为空数组）
  correctAnswer: '公元前 1046 年',       // 正确答案
  explanation: '解析内容...',            // 答案解析
  difficulty: 'medium',                 // 难度：easy/medium/hard
  knowledgePoint: '朝代建立时间',       // 知识点
  dynastyId: 'western-zhou',           // 相关朝代 ID
  dynastyName: '西周'                   // 相关朝代名称
}
```

### onComplete 回调函数

测验完成时触发，接收一个结果对象：

```javascript
const handleQuizComplete = (result) => {
  console.log({
    score: result.score,      // 得分
    total: result.total,      // 总题数
    answers: result.answers,  // 用户答案数组
    questions: result.questions // 题目数组
  });
};
```

## 使用示例

### 基础用法

```javascript
import React from 'react';
import Quiz from '@/components/Quiz';

const MyQuizPage = () => {
  const questions = [
    {
      id: 'q1',
      type: 'time',
      question: '夏朝建立于哪一年？',
      options: ['公元前 2070 年', '公元前 1600 年', '公元前 1046 年', '公元前 221 年'],
      correctAnswer: '公元前 2070 年',
      explanation: '夏朝建立于公元前 2070 年，是中国历史上第一个王朝。',
      difficulty: 'easy',
      knowledgePoint: '朝代建立时间',
      dynastyId: 'xia',
      dynastyName: '夏朝'
    },
    // 更多题目...
  ];

  const handleComplete = (result) => {
    console.log(`得分：${result.score}/${result.total}`);
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <Quiz
        questions={questions}
        onComplete={handleComplete}
        title="中国历史朝代测验"
      />
    </div>
  );
};

export default MyQuizPage;
```

### 结合题目生成器使用

```javascript
import React, { useState, useEffect } from 'react';
import Quiz from '@/components/Quiz';
import { generateRandomQuiz } from '@/utils/quizGenerator';

const QuizDemo = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    // 生成 10 道随机题目
    const newQuestions = generateRandomQuiz(10);
    setQuestions(newQuestions);
  }, []);

  const handleComplete = (result) => {
    alert(`测验完成！得分：${result.score}/${result.total}`);
  };

  return (
    <div>
      <Quiz
        questions={questions}
        onComplete={handleComplete}
      />
    </div>
  );
};

export default QuizDemo;
```

## 子组件说明

### ProgressBar - 进度条组件

显示当前答题进度和题号指示器。

```javascript
<ProgressBar current={5} total={10} />
```

### OptionButton - 选项按钮组件

用于选择题和判断题的选项显示。

```javascript
<OptionButton
  option="选项 A"
  index={0}
  isSelected={false}
  showResult={false}
  isCorrect={true}
  onSelect={() => console.log('选中')}
/>
```

### SortOptions - 排序题组件

支持点击交换顺序的排序界面。

```javascript
<SortOptions
  items={['选项 A', '选项 B', '选项 C', '选项 D']}
  currentOrder={[0, 1, 2, 3]}
  showResult={false}
  onReorder={(newOrder) => console.log(newOrder)}
/>
```

### FillBlankInput - 填空题输入组件

提供文本输入框供用户输入答案。

```javascript
<FillBlankInput
  value="用户输入的答案"
  disabled={false}
  showResult={true}
  correctAnswer="正确答案"
  onChange={(value) => console.log(value)}
/>
```

### AnswerFeedback - 答案反馈组件

显示答案正确/错误标识和题目解析。

```javascript
<AnswerFeedback
  isCorrect={true}
  correctAnswer="正确答案"
  userAnswer="用户答案"
  explanation="解析内容..."
  dynastyName="西周"
/>
```

### QuizResult - 测验结果组件

显示测验最终结果和统计信息。

```javascript
<QuizResult
  score={8}
  total={10}
  answers={['答案 A', '答案 B', ...]}
  questions={questions}
  onRetry={() => console.log('重试')}
/>
```

## 样式定制

组件使用 Tailwind CSS 实现水墨风格样式，可以通过以下方式定制：

### 1. 修改主题颜色

在 `styles/globals.css` 中修改 CSS 变量：

```css
:root {
  --china-red: #C41E3A;      /* 中国红 */
  --ink-black: #2C2C2C;      /* 墨黑 */
  --xuan-paper: #F5F5F0;     /* 宣纸色 */
}
```

### 2. 自定义组件样式

通过覆盖类名或添加自定义类来修改样式：

```javascript
<Quiz
  questions={questions}
  className="custom-quiz-style"
/>
```

## 交互说明

### 答题流程

1. **选择答案**
   - 选择题/判断题：点击选项按钮
   - 填空题：在输入框中输入文本
   - 排序题：点击两个项目交换位置

2. **提交答案**
   - 点击"提交答案"按钮
   - 答案未选择时按钮禁用

3. **查看反馈**
   - 正确答案显示绿色边框和背景
   - 错误答案显示红色边框和背景
   - 显示题目解析和相关朝代

4. **跳转下一题**
   - 自动：2 秒后自动跳转
   - 手动：点击"下一题"按钮立即跳转

5. **查看结果**
   - 完成所有题目后显示最终结果
   - 显示得分、正确率、答题详情
   - 可点击"重新开始"重新测验

### 键盘导航（未来增强）

计划支持键盘操作：
- `↑/↓`：选择上一个/下一个选项
- `Enter`：提交答案
- `→`：下一题

## 性能优化

### 1. 题目预加载

```javascript
// 提前生成下一套题目
const [nextQuestions, setNextQuestions] = useState([]);

useEffect(() => {
  const preloaded = generateRandomQuiz(10);
  setNextQuestions(preloaded);
}, []);
```

### 2. 答案缓存

组件内部使用 React state 管理答案，确保数据不丢失。

### 3. 定时器清理

组件卸载时自动清理倒计时定时器，防止内存泄漏。

## 无障碍访问

### ARIA 标签（待添加）

```javascript
<button
  role="radio"
  aria-checked={isSelected}
  aria-label={`选项 ${String.fromCharCode(65 + index)}: ${option}`}
>
```

### 键盘支持（待添加）

```javascript
const handleKeyDown = (e) => {
  if (e.key === 'Enter') {
    handleSubmitAnswer();
  }
};
```

## 测试建议

### 单元测试

```javascript
import { render, screen, fireEvent } from '@testing-library/react';
import Quiz from '@/components/Quiz';

test('显示题目和选项', () => {
  const questions = [{ /* 题目数据 */ }];
  render(<Quiz questions={questions} />);
  
  expect(screen.getByText('题目内容')).toBeInTheDocument();
  expect(screen.getByText('选项 A')).toBeInTheDocument();
});

test('选择答案后显示提交按钮', () => {
  // 测试逻辑
});
```

### 集成测试

```javascript
// 测试完整答题流程
test('完成整个测验流程', async () => {
  // 1. 渲染组件
  // 2. 选择答案
  // 3. 提交答案
  // 4. 验证反馈显示
  // 5. 跳转下一题
  // 6. 完成测验
});
```

## 已知限制

1. **排序题**：目前仅支持点击交换，不支持拖拽排序
2. **多选题**：暂不支持多选题型（未来可扩展）
3. **图片题**：暂不支持包含图片的题目（未来可扩展）

## 未来计划

- [ ] 添加拖拽排序支持
- [ ] 支持多选题型
- [ ] 支持图片/音频/视频题
- [ ] 添加计时器功能
- [ ] 支持键盘导航
- [ ] 添加答题统计和分析
- [ ] 支持自定义主题
- [ ] 添加成就系统

## 故障排除

### 问题：组件不显示

**解决方案**：
1. 检查 `questions` prop 是否传入
2. 确认题目数组不为空
3. 检查浏览器控制台是否有错误

### 问题：自动跳转不生效

**解决方案**：
1. 检查是否选择了答案
2. 确认答案已提交（显示反馈后才开始倒计时）
3. 检查浏览器控制台是否有定时器错误

### 问题：样式显示异常

**解决方案**：
1. 确认 Tailwind CSS 已正确配置
2. 检查 `globals.css` 是否导入
3. 清除浏览器缓存

## 相关文件

- 组件文件：`/components/Quiz.js`
- 演示页面：`/pages/quiz.js`
- 题目生成器：`/utils/quizGenerator.js`
- 朝代数据：`/data/dynasties.js`
- 全局样式：`/styles/globals.css`

## 更新日志

### v1.0.0 (2026-03-10)
- ✅ 初始版本发布
- ✅ 支持 7 种题型
- ✅ 实现进度条和题号显示
- ✅ 实现答案选择和提交
- ✅ 实现答案反馈显示
- ✅ 实现自动跳转功能
- ✅ 水墨风格 UI 设计
