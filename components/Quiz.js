/**
 * 测验主组件
 * 支持 7 种题型的完整测验功能
 * 
 * 功能特性：
 * - 题目显示（题干、选项）
 * - 答题进度条和题号显示
 * - 选项选择和提交逻辑
 * - 答案反馈显示（正确/错误标识、解析）
 * - 自动跳转下一题（2 秒后）或手动点击下一题
 * - 支持所有 7 种题型
 * 
 * @param {Object} props - 组件属性
 * @param {Array} props.questions - 测验题目数组
 * @param {Function} props.onComplete - 测验完成回调函数
 * @param {string} props.title - 测验标题
 */

import React, { useState, useEffect, useMemo } from 'react';
import { Check, X, CheckCircle2 } from 'lucide-react';

/**
 * 题型名称映射
 */
const QUESTION_TYPE_NAMES = {
  choice: '时间选择题',
  time: '时间选择题',
  founder: '开国君主题',
  event: '历史事件题',
  culture: '文化成就题',
  sort: '排序题',
  truefalse: '判断题',
  fillblank: '填空题'
};

/**
 * 难度名称映射
 */
const DIFFICULTY_NAMES = {
  easy: '简单',
  medium: '中等',
  hard: '困难'
};

/**
 * 获取难度对应的颜色类
 * @param {string} difficulty - 难度等级
 * @returns {string} Tailwind CSS 颜色类
 */
const getDifficultyColor = (difficulty) => {
  switch (difficulty) {
    case 'easy':
      return 'text-green-600 bg-green-50';
    case 'medium':
      return 'text-yellow-600 bg-yellow-50';
    case 'hard':
      return 'text-red-600 bg-red-50';
    default:
      return 'text-gray-600 bg-gray-50';
  }
};

/**
 * 进度条组件
 * 显示当前答题进度和题号
 * 
 * @param {Object} props - 组件属性
 * @param {number} props.current - 当前题号（从 1 开始）
 * @param {number} props.total - 总题数
 */
const ProgressBar = ({ current, total }) => {
  const percentage = Math.round((current / total) * 100);

  return (
    <div className="w-full mb-6">
      {/* 进度条容器 */}
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium text-gray-700 font-chinese">
          第 {current} / {total} 题
        </span>
        <span className="text-sm font-medium text-gray-700 font-chinese">
          {percentage}%
        </span>
      </div>

      {/* 进度条 */}
      <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-[#C41E3A] to-[#A81830] transition-all duration-500 ease-out"
          style={{ width: `${percentage}%` }}
        />
      </div>

      {/* 题号指示器 */}
      <div className="flex items-center justify-between mt-3 gap-1">
        {Array.from({ length: total }, (_, i) => i + 1).map((num) => (
          <div
            key={num}
            className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold font-chinese transition-all ${num === current
                ? 'bg-[#C41E3A] text-white scale-110 shadow-md'
                : num < current
                  ? 'bg-[#00A862] text-white'
                  : 'bg-gray-200 text-gray-600'
              }`}
          >
            {num < current ? (
              <CheckCircle2 className="w-4 h-4" />
            ) : (
              num
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

/**
 * 选项按钮组件
 * 用于选择题和判断题的选项显示
 * 
 * @param {Object} props - 组件属性
 * @param {string} props.option - 选项内容
 * @param {number} props.index - 选项索引
 * @param {boolean} props.isSelected - 是否已选中
 * @param {boolean} props.showResult - 是否显示结果
 * @param {boolean} props.isCorrect - 是否是正确答案
 * @param {Function} props.onSelect - 选择回调函数
 */
const OptionButton = ({ option, index, isSelected, showResult, isCorrect, onSelect }) => {
  const baseClasses = 'w-full text-left p-4 rounded-xl border-2 transition-all font-medium font-chinese';

  let stateClasses = '';

  if (showResult) {
    if (isCorrect) {
      stateClasses = 'border-[#00A862] bg-[#00A862]/10 text-[#00A862]';
    } else if (isSelected && !isCorrect) {
      stateClasses = 'border-[#C41E3A] bg-[#C41E3A]/10 text-[#C41E3A]';
    } else {
      stateClasses = 'border-gray-200 bg-gray-50 text-gray-500 opacity-60';
    }
  } else if (isSelected) {
    stateClasses = 'border-[#C41E3A] bg-[#C41E3A]/10 text-[#C41E3A] shadow-md';
  } else {
    stateClasses = 'border-gray-200 bg-white/50 backdrop-blur-sm hover:border-[#C41E3A]/50 hover:bg-[#C41E3A]/5';
  }

  return (
    <button
      onClick={onSelect}
      disabled={showResult}
      className={`${baseClasses} ${stateClasses}`}
    >
      <span className="inline-block w-8 h-8 rounded-full bg-current opacity-20 text-center leading-8 mr-3 text-sm font-bold">
        {String.fromCharCode(65 + index)}
      </span>
      <span className="text-base">{option}</span>
    </button>
  );
};

/**
 * 排序题选项组件
 * 支持点击交换顺序的排序界面
 * 
 * @param {Object} props - 组件属性
 * @param {Array} props.items - 需要排序的项目数组
 * @param {Array} props.currentOrder - 当前排序顺序（索引数组）
 * @param {boolean} props.showResult - 是否显示结果
 * @param {Array} props.correctOrder - 正确排序顺序
 * @param {Function} props.onReorder - 重新排序回调函数
 */
const SortOptions = ({ items, currentOrder, showResult, correctOrder, onReorder }) => {
  /**
   * 处理点击交换
   * @param {number} index - 点击的项目索引
   */
  const handleItemClick = (index) => {
    if (showResult) return;

    // 如果已经有选中的项目，进行交换
    if (selectedIndex !== null && selectedIndex !== index) {
      const newOrder = [...currentOrder];
      const temp = newOrder[selectedIndex];
      newOrder[selectedIndex] = newOrder[index];
      newOrder[index] = temp;
      onReorder(newOrder);
      setSelectedIndex(null);
    } else {
      // 选中项目
      setSelectedIndex(index);
    }
  };

  const [selectedIndex, setSelectedIndex] = useState(null);

  return (
    <div className="space-y-3">
      <p className="text-sm text-gray-600 mb-3 font-chinese">
        点击两个项目可以交换它们的位置
      </p>

      {items.map((item, index) => {
        const currentItemIndex = currentOrder.indexOf(index);
        const isItemSelected = selectedIndex === index;
        let itemClasses = 'w-full p-4 rounded-xl border-2 transition-all cursor-pointer font-chinese ';

        if (showResult) {
          const isCorrect = correctOrder && currentOrder[currentItemIndex] === correctOrder.indexOf(index);
          itemClasses += isCorrect
            ? 'border-[#00A862] bg-[#00A862]/10'
            : 'border-[#C41E3A] bg-[#C41E3A]/10';
        } else if (isItemSelected) {
          itemClasses += 'border-[#C41E3A] bg-[#C41E3A]/10 shadow-md';
        } else {
          itemClasses += 'border-gray-200 bg-white/50 backdrop-blur-sm hover:border-[#C41E3A]/50 hover:bg-[#C41E3A]/5';
        }

        return (
          <div
            key={index}
            onClick={() => handleItemClick(index)}
            className={itemClasses}
          >
            <div className="flex items-center">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gray-200 text-gray-700 font-bold mr-3 text-sm font-chinese">
                {String.fromCharCode(65 + currentItemIndex)}
              </span>
              <span className="text-base font-medium">{item}</span>
              {isItemSelected && (
                <span className="ml-auto text-[#C41E3A] text-sm font-medium font-chinese">
                  已选中（点击另一个交换）
                </span>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

/**
 * 填空题输入组件
 * 提供文本输入框供用户输入答案
 * 
 * @param {Object} props - 组件属性
 * @param {string} props.value - 当前输入值
 * @param {boolean} props.disabled - 是否禁用输入
 * @param {boolean} props.showResult - 是否显示结果
 * @param {string} props.correctAnswer - 正确答案
 * @param {Function} props.onChange - 输入变化回调函数
 */
const FillBlankInput = ({ value, disabled, showResult, correctAnswer, onChange }) => {
  let inputClasses = 'w-full px-4 py-3 border-2 rounded-xl text-lg focus:outline-none transition-all font-chinese';

  if (showResult) {
    const isCorrect = value === correctAnswer;
    inputClasses += isCorrect
      ? ' border-[#00A862] bg-[#00A862]/10 text-[#00A862]'
      : ' border-[#C41E3A] bg-[#C41E3A]/10 text-[#C41E3A]';
  } else if (disabled) {
    inputClasses += ' border-gray-300 bg-gray-100 text-gray-500';
  } else {
    inputClasses += ' border-gray-300 focus:border-[#C41E3A] focus:ring-2 focus:ring-[#C41E3A]/20';
  }

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        disabled={disabled}
        placeholder="请输入答案"
        className={inputClasses}
      />
      {showResult && value !== correctAnswer && (
        <p className="mt-2 text-sm text-[#C41E3A] font-medium font-chinese">
          正确答案：{correctAnswer}
        </p>
      )}
    </div>
  );
};

/**
 * 答案反馈组件
 * 显示答案正确/错误标识和题目解析
 * 
 * @param {Object} props - 组件属性
 * @param {boolean} props.isCorrect - 是否回答正确
 * @param {string} props.correctAnswer - 正确答案
 * @param {string} props.userAnswer - 用户答案
 * @param {string} props.explanation - 题目解析
 * @param {string} props.dynastyName - 相关朝代名称
 */
const AnswerFeedback = ({ isCorrect, correctAnswer, userAnswer, explanation, dynastyName }) => {
  return (
    <div className={`mt-6 p-5 rounded-xl border-2 ${isCorrect ? 'border-[#00A862] bg-[#00A862]/10' : 'border-[#C41E3A] bg-[#C41E3A]/10'
      }`}>
      {/* 正确/错误标识 */}
      <div className="flex items-center mb-3">
        <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-3 ${isCorrect ? 'bg-[#00A862]' : 'bg-[#C41E3A]'
          }`}>
          {isCorrect ? (
            <Check className="w-6 h-6 text-white" />
          ) : (
            <X className="w-6 h-6 text-white" />
          )}
        </div>
        <span className={`text-lg font-bold font-chinese ${isCorrect ? 'text-[#00A862]' : 'text-[#C41E3A]'
          }`}>
          {isCorrect ? '回答正确！' : '回答错误'}
        </span>
      </div>

      {/* 答案信息 */}
      {!isCorrect && (
        <p className="text-[#C41E3A] mb-2 font-chinese">
          <span className="font-medium">你的答案：</span>{userAnswer}
        </p>
      )}

      {/* 题目解析 */}
      <div className="mt-3">
        <p className="font-medium text-gray-800 mb-2 font-chinese">解析：</p>
        <p className="text-gray-700 leading-relaxed font-chinese">{explanation}</p>
      </div>

      {/* 相关朝代 */}
      {dynastyName && (
        <p className="mt-3 text-sm text-gray-600 font-chinese">
          <span className="font-medium">相关朝代：</span>{dynastyName}
        </p>
      )}
    </div>
  );
};

/**
 * 测验结果组件
 * 显示测验最终结果和统计信息
 * 
 * @param {Object} props - 组件属性
 * @param {number} props.score - 得分
 * @param {number} props.total - 总题数
 * @param {Array} props.answers - 用户答案数组
 * @param {Array} props.questions - 题目数组
 * @param {Function} props.onRetry - 重试回调函数
 */
const QuizResult = ({ score, total, answers, questions, onRetry }) => {
  const percentage = Math.round((score / total) * 100);

  /**
   * 获取评价等级
   * @returns {string} 评价等级
   */
  const getGrade = () => {
    if (percentage >= 90) return '优秀';
    if (percentage >= 70) return '良好';
    if (percentage >= 60) return '及格';
    return '需努力';
  };

  /**
   * 获取评价颜色
   * @returns {string} 颜色类
   */
  const getGradeColor = () => {
    if (percentage >= 90) return 'text-[#00A862]';
    if (percentage >= 70) return 'text-[#1E3A8A]';
    if (percentage >= 60) return 'text-[#FFD700]';
    return 'text-[#C41E3A]';
  };

  return (
    <div className="text-center py-8">
      {/* 得分显示 */}
      <div className="mb-6">
        <div className="text-6xl font-bold text-[#C41E3A] mb-2 font-chinese">
          {score} / {total}
        </div>
        <div className={`text-2xl font-bold font-chinese ${getGradeColor()}`}>
          {getGrade()}（{percentage}分）
        </div>
      </div>

      {/* 统计信息 */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        <div className="bg-[#00A862]/10 p-4 rounded-xl border border-[#00A862]/20">
          <div className="text-2xl font-bold text-[#00A862] font-chinese">{score}</div>
          <div className="text-sm text-[#00A862] font-chinese">答对</div>
        </div>
        <div className="bg-[#C41E3A]/10 p-4 rounded-xl border border-[#C41E3A]/20">
          <div className="text-2xl font-bold text-[#C41E3A] font-chinese">{total - score}</div>
          <div className="text-sm text-[#C41E3A] font-chinese">答错</div>
        </div>
        <div className="bg-[#1E3A8A]/10 p-4 rounded-xl border border-[#1E3A8A]/20">
          <div className="text-2xl font-bold text-[#1E3A8A] font-chinese">{percentage}%</div>
          <div className="text-sm text-[#1E3A8A] font-chinese">正确率</div>
        </div>
      </div>

      {/* 答题详情 */}
      <div className="text-left mb-8">
        <h3 className="text-lg font-bold text-gray-800 mb-4 font-chinese">答题详情</h3>
        <div className="space-y-2 max-h-64 overflow-y-auto">
          {questions.map((q, index) => {
            const isCorrect = answers[index] === q.correctAnswer;
            return (
              <div
                key={q.id}
                className={`flex items-center justify-between p-3 rounded-xl font-chinese ${isCorrect ? 'bg-[#00A862]/10' : 'bg-[#C41E3A]/10'
                  }`}
              >
                <span className="text-sm text-gray-700 font-chinese">
                  第{index + 1}题：{QUESTION_TYPE_NAMES[q.type]}
                </span>
                <span className={`text-sm font-bold font-chinese ${isCorrect ? 'text-[#00A862]' : 'text-[#C41E3A]'
                  }`}>
                  {isCorrect ? (
                    <CheckCircle2 className="w-4 h-4 inline" />
                  ) : (
                    <X className="w-4 h-4 inline" />
                  )}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* 重试按钮 */}
      <button
        onClick={onRetry}
        className="bg-[#C41E3A] text-white px-8 py-3 rounded-xl font-bold font-chinese hover:bg-[#A81830] transition-all shadow-md hover:shadow-lg"
      >
        重新开始
      </button>
    </div>
  );
};

/**
 * 测验主组件
 */
const Quiz = ({ questions, onComplete, title = '中国历史朝代测验' }) => {
  // 当前题目索引（从 0 开始）
  const [currentIndex, setCurrentIndex] = useState(0);

  // 用户答案存储
  const [answers, setAnswers] = useState([]);

  // 当前题目的用户答案
  const [currentAnswer, setCurrentAnswer] = useState(null);

  // 是否显示结果
  const [showResult, setShowResult] = useState(false);

  // 是否显示最终结果
  const [showFinalResult, setShowFinalResult] = useState(false);

  // 倒计时（自动跳转）
  const [countdown, setCountdown] = useState(null);

  // 当前题目的排序顺序（用于排序题）
  const [sortOrder, setSortOrder] = useState([]);

  // 获取当前题目
  const currentQuestion = useMemo(() => {
    return questions[currentIndex];
  }, [currentIndex, questions]);

  // 初始化排序题的顺序
  useEffect(() => {
    if (currentQuestion && currentQuestion.type === 'sort') {
      // 从选项中提取排序项目
      const items = currentQuestion.options;
      setSortOrder(items.map((_, i) => i));
    }
  }, [currentQuestion]);

  /**
   * 处理答案选择（选择题、判断题）
   * @param {string} answer - 选择的答案
   */
  const handleAnswerSelect = (answer) => {
    if (showResult) return;
    setCurrentAnswer(answer);
  };

  /**
   * 处理填空题输入
   * @param {string} value - 输入的值
   */
  const handleFillBlankChange = (value) => {
    if (showResult) return;
    setCurrentAnswer(value);
  };

  /**
   * 处理排序题重新排序
   * @param {Array} newOrder - 新的排序顺序
   */
  const handleSortReorder = (newOrder) => {
    if (showResult) return;
    setSortOrder(newOrder);
    // 将排序结果转换为字符串答案
    const items = currentQuestion.options;
    const orderedItems = newOrder.map(i => items[i]);
    setCurrentAnswer(orderedItems.join('→'));
  };

  /**
   * 提交当前答案
   */
  const handleSubmitAnswer = () => {
    if (!currentAnswer) return;

    // 保存答案
    const newAnswers = [...answers];
    newAnswers[currentIndex] = currentAnswer;
    setAnswers(newAnswers);

    // 显示结果
    setShowResult(true);

    // 2 秒后自动跳转下一题
    const timer = setTimeout(() => {
      handleNextQuestion();
    }, 2000);

    setCountdown(timer);
  };

  /**
   * 跳转下一题
   */
  const handleNextQuestion = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setCurrentAnswer(null);
      setShowResult(false);
      setCountdown(null);
    } else {
      // 测验完成
      finishQuiz();
    }
  };

  /**
   * 完成测验
   */
  const finishQuiz = () => {
    setShowFinalResult(true);

    // 计算得分
    let score = 0;
    answers.forEach((answer, index) => {
      if (answer === questions[index].correctAnswer) {
        score++;
      }
    });

    // 调用完成回调
    if (onComplete) {
      onComplete({
        score,
        total: questions.length,
        answers,
        questions
      });
    }
  };

  /**
   * 重新开始测验
   */
  const handleRetry = () => {
    setCurrentIndex(0);
    setAnswers([]);
    setCurrentAnswer(null);
    setShowResult(false);
    setShowFinalResult(false);
    setCountdown(null);
  };

  // 清理定时器
  useEffect(() => {
    return () => {
      if (countdown) {
        clearTimeout(countdown);
      }
    };
  }, [countdown]);

  // 如果没有题目，显示提示
  if (!questions || questions.length === 0) {
    return (
      <div className="bg-white/70 backdrop-blur-sm rounded-2xl border border-gray-200/50 shadow-sm p-8 text-center">
        <p className="text-gray-600 text-lg font-chinese">暂无测验题目</p>
      </div>
    );
  }

  // 显示最终结果
  if (showFinalResult) {
    const score = answers.filter((answer, index) => answer === questions[index].correctAnswer).length;
    return (
      <div className="bg-white/70 backdrop-blur-sm rounded-2xl border border-gray-200/50 shadow-sm p-8">
        <QuizResult
          score={score}
          total={questions.length}
          answers={answers}
          questions={questions}
          onRetry={handleRetry}
        />
      </div>
    );
  }

  // 判断当前答案是否正确
  const isCurrentAnswerCorrect = currentAnswer === currentQuestion.correctAnswer;

  return (
    <div className="bg-white/70 backdrop-blur-sm rounded-2xl border border-gray-200/50 shadow-sm p-6 md:p-8">
      {/* 测验标题 */}
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 font-chinese ink-title">
        {title}
      </h2>

      {/* 进度条 */}
      <ProgressBar current={currentIndex + 1} total={questions.length} />

      {/* 题目区域 */}
      <div className="mb-6">
        {/* 题型和难度标签 */}
        <div className="flex items-center gap-3 mb-4">
          <span className="bg-[#C41E3A] text-white text-sm px-3 py-1 rounded-full font-medium font-chinese">
            {QUESTION_TYPE_NAMES[currentQuestion.type]}
          </span>
          <span className={`text-sm px-3 py-1 rounded-full font-medium font-chinese ${getDifficultyColor(currentQuestion.difficulty)}`}>
            {DIFFICULTY_NAMES[currentQuestion.difficulty]}
          </span>
          {currentQuestion.knowledgePoint && (
            <span className="text-sm text-gray-600 font-chinese">
              知识点：{currentQuestion.knowledgePoint}
            </span>
          )}
        </div>

        {/* 题干 */}
        <h3 className="text-xl font-medium text-gray-800 mb-6 leading-relaxed font-chinese">
          {currentQuestion.question}
        </h3>

        {/* 选项区域 - 根据题型渲染不同的组件 */}
        <div className="space-y-3">
          {/* 选择题和判断题 */}
          {(currentQuestion.type === 'choice' ||
            currentQuestion.type === 'time' ||
            currentQuestion.type === 'founder' ||
            currentQuestion.type === 'event' ||
            currentQuestion.type === 'culture' ||
            currentQuestion.type === 'truefalse') && (
              <div className="space-y-3">
                {currentQuestion.options.map((option, index) => (
                  <OptionButton
                    key={index}
                    option={option}
                    index={index}
                    isSelected={currentAnswer === option}
                    showResult={showResult}
                    isCorrect={option === currentQuestion.correctAnswer}
                    onSelect={() => handleAnswerSelect(option)}
                  />
                ))}
              </div>
            )}

          {/* 排序题 */}
          {currentQuestion.type === 'sort' && (
            <SortOptions
              items={currentQuestion.options}
              currentOrder={sortOrder}
              showResult={showResult}
              correctOrder={null}
              onReorder={handleSortReorder}
            />
          )}

          {/* 填空题 */}
          {currentQuestion.type === 'fillblank' && (
            <FillBlankInput
              value={currentAnswer || ''}
              disabled={showResult}
              showResult={showResult}
              correctAnswer={currentQuestion.correctAnswer}
              onChange={handleFillBlankChange}
            />
          )}
        </div>
      </div>

      {/* 答案反馈 */}
      {showResult && (
        <AnswerFeedback
          isCorrect={isCurrentAnswerCorrect}
          correctAnswer={currentQuestion.correctAnswer}
          userAnswer={currentAnswer}
          explanation={currentQuestion.explanation}
          dynastyName={currentQuestion.dynastyName}
        />
      )}

      {/* 操作按钮 */}
      <div className="mt-6 flex items-center justify-between">
        {/* 上一题按钮 */}
        <button
          onClick={() => {
            if (currentIndex > 0) {
              setCurrentIndex(currentIndex - 1);
              setCurrentAnswer(answers[currentIndex - 1] || null);
              setShowResult(false);
            }
          }}
          disabled={currentIndex === 0 || showResult}
          className={`px-6 py-3 rounded-xl font-medium font-chinese transition-all ${currentIndex === 0 || showResult
              ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
              : 'bg-gray-600 text-white hover:bg-gray-700'
            }`}
        >
          上一题
        </button>

        {/* 提交/下一题按钮 */}
        {!showResult ? (
          <button
            onClick={handleSubmitAnswer}
            disabled={!currentAnswer}
            className={`px-8 py-3 rounded-xl font-medium font-chinese transition-all shadow-md ${!currentAnswer
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                : 'bg-[#C41E3A] text-white hover:bg-[#A81830] hover:shadow-lg'
              }`}
          >
            提交答案
          </button>
        ) : (
          <div className="flex items-center gap-4">
            <span className="text-gray-600 text-sm font-chinese">
              {countdown ? '自动跳转中...' : ''}
            </span>
            <button
              onClick={handleNextQuestion}
              className="px-8 py-3 bg-[#C41E3A] text-white rounded-xl font-bold font-chinese hover:bg-[#A81830] transition-all shadow-md hover:shadow-lg"
            >
              {currentIndex < questions.length - 1 ? '下一题' : '查看结果'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Quiz;
