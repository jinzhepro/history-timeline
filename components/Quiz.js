/**
 * 测验组件 - 极简版
 */

import React, { useState, useEffect, useMemo } from 'react';

const QUESTION_TYPE_NAMES = {
  choice: '时间选择',
  time: '时间选择',
  founder: '开国君主',
  event: '历史事件',
  culture: '文化成就',
  sort: '排序',
  truefalse: '判断',
  fillblank: '填空'
};

const DIFFICULTY_NAMES = {
  easy: '简单',
  medium: '中等',
  hard: '困难'
};

/**
 * 进度条组件
 */
const ProgressBar = ({ current, total }) => {
  const percentage = Math.round((current / total) * 100);

  return (
    <div className="w-full mb-6">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm text-gray font-chinese">
          第 {current} / {total} 题
        </span>
        <span className="text-sm text-gray font-chinese">{percentage}%</span>
      </div>
      <div className="w-full h-1.5 bg-[rgba(0,0,0,0.08)] rounded overflow-hidden">
        <div
          className="h-full bg-ink transition-all duration-300 ease-out"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};

/**
 * 选项按钮组件
 */
const OptionButton = ({ option, index, isSelected, showResult, isCorrect, onSelect }) => {
  let classes = 'w-full text-left p-3 rounded border transition-all font-chinese text-sm ';

  if (showResult) {
    if (isCorrect) {
      classes += 'border-[#2D7A3E] bg-[rgba(45,122,62,0.08)] text-[#2D7A3E]';
    } else if (isSelected) {
      classes += 'border-[#B93A3A] bg-[rgba(185,58,58,0.08)] text-[#B93A3A]';
    } else {
      classes += 'border-[rgba(0,0,0,0.08)] bg-paper text-gray opacity-60';
    }
  } else if (isSelected) {
    classes += 'border-[#B93A3A] bg-[rgba(185,58,58,0.08)] text-[#B93A3A]';
  } else {
    classes += 'border-[rgba(0,0,0,0.12)] bg-paper hover:border-[#B93A3A]';
  }

  return (
    <button
      onClick={onSelect}
      disabled={showResult}
      className={classes}
    >
      <span className="inline-flex items-center justify-center w-6 h-6 rounded text-xs font-bold mr-3">
        {String.fromCharCode(65 + index)}
      </span>
      <span>{option}</span>
    </button>
  );
};

/**
 * 排序题组件
 */
const SortOptions = ({ items, currentOrder, showResult, onReorder }) => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleItemClick = (index) => {
    if (showResult) return;

    if (selectedIndex !== null && selectedIndex !== index) {
      const newOrder = [...currentOrder];
      const temp = newOrder[selectedIndex];
      newOrder[selectedIndex] = newOrder[index];
      newOrder[index] = temp;
      onReorder(newOrder);
      setSelectedIndex(null);
    } else {
      setSelectedIndex(index);
    }
  };

  return (
    <div className="space-y-2">
      <p className="text-sm text-gray font-chinese mb-2">点击两个项目可以交换顺序</p>
      {items.map((item, index) => {
        const currentItemIndex = currentOrder.indexOf(index);
        const isItemSelected = selectedIndex === index;
        let classes = 'w-full p-3 rounded border transition-all cursor-pointer font-chinese text-sm ';

        if (showResult) {
          classes += 'border-[rgba(0,0,0,0.12)] bg-paper';
        } else if (isItemSelected) {
          classes += 'border-[#B93A3A] bg-[rgba(185,58,58,0.08)]';
        } else {
          classes += 'border-[rgba(0,0,0,0.12)] bg-paper hover:border-ink';
        }

        return (
          <div key={index} onClick={() => handleItemClick(index)} className={classes}>
            <div className="flex items-center">
              <span className="inline-flex items-center justify-center w-6 h-6 rounded bg-[rgba(0,0,0,0.08)] text-xs font-bold mr-3">
                {String.fromCharCode(65 + currentItemIndex)}
              </span>
              <span>{item}</span>
              {isItemSelected && (
                <span className="ml-auto text-[#B93A3A] text-xs">已选中</span>
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
 */
const FillBlankInput = ({ value, disabled, showResult, correctAnswer, onChange }) => {
  let classes = 'w-full px-3 py-2.5 border rounded text-sm focus:outline-none transition-all font-chinese ';

  if (showResult) {
    if (value === correctAnswer) {
      classes += 'border-[#2D7A3E] bg-[rgba(45,122,62,0.08)] text-[#2D7A3E]';
    } else {
      classes += 'border-[#B93A3A] bg-[rgba(185,58,58,0.08)] text-[#B93A3A]';
    }
  } else if (disabled) {
    classes += 'border-[rgba(0,0,0,0.08)] bg-[rgba(0,0,0,0.04)] text-gray';
  } else {
    classes += 'border-[rgba(0,0,0,0.15)] focus:border-ink';
  }

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        disabled={disabled}
        placeholder="请输入答案"
        className={classes}
      />
      {showResult && value !== correctAnswer && (
        <p className="mt-2 text-xs text-[#B93A3A] font-chinese">
          正确答案：{correctAnswer}
        </p>
      )}
    </div>
  );
};

/**
 * 答案反馈组件
 */
const AnswerFeedback = ({ isCorrect, correctAnswer, userAnswer, explanation, dynastyName }) => {
  return (
    <div className={`mt-6 p-4 rounded border ${
      isCorrect ? 'border-[#2D7A3E] bg-[rgba(45,122,62,0.04)]' : 'border-[#B93A3A] bg-[rgba(185,58,58,0.04)]'
    }`}>
      <div className="flex items-center mb-3">
        <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 text-white text-sm ${
          isCorrect ? 'bg-[#2D7A3E]' : 'bg-[#B93A3A]'
        }`}>
          {isCorrect ? '✓' : '✕'}
        </div>
        <span className={`text-sm font-bold font-chinese ${
          isCorrect ? 'text-[#2D7A3E]' : 'text-[#B93A3A]'
        }`}>
          {isCorrect ? '回答正确' : '回答错误'}
        </span>
      </div>

      {!isCorrect && (
        <p className="text-[#B93A3A] mb-2 text-sm font-chinese">
          <span className="opacity-60">你的答案：</span>{userAnswer}
        </p>
      )}

      <div className="mt-3">
        <p className="text-xs text-gray font-chinese mb-1">解析：</p>
        <p className="text-sm text-ink leading-relaxed font-chinese">{explanation}</p>
      </div>

      {dynastyName && (
        <p className="mt-3 text-xs text-gray font-chinese">
          <span className="opacity-60">相关朝代：</span>{dynastyName}
        </p>
      )}
    </div>
  );
};

/**
 * 测验结果组件
 */
const QuizResult = ({ score, total, answers, questions, onRetry }) => {
  const percentage = Math.round((score / total) * 100);

  const getGrade = () => {
    if (percentage >= 90) return '优秀';
    if (percentage >= 70) return '良好';
    if (percentage >= 60) return '及格';
    return '需努力';
  };

  const getGradeColor = () => {
    if (percentage >= 90) return 'text-[#2D7A3E]';
    if (percentage >= 70) return 'text-[#4A6FA5]';
    if (percentage >= 60) return 'text-[#A67C52]';
    return 'text-[#B93A3A]';
  };

  return (
    <div className="text-center py-6">
      <div className="mb-6">
        <div className="text-4xl font-bold text-[#1A1A1A] font-chinese mb-2">{score} / {total}</div>
        <div className={`text-lg font-bold font-chinese ${getGradeColor()}`}>
          {getGrade()}（{percentage}分）
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3 mb-6">
        <div className="border border-[rgba(0,0,0,0.12)] rounded p-3">
          <div className="text-xl font-bold text-[#2D7A3E] font-chinese">{score}</div>
          <div className="text-xs text-[#888888] font-chinese">答对</div>
        </div>
        <div className="border border-[rgba(0,0,0,0.12)] rounded p-3">
          <div className="text-xl font-bold text-[#B93A3A] font-chinese">{total - score}</div>
          <div className="text-xs text-[#888888] font-chinese">答错</div>
        </div>
        <div className="border border-[rgba(0,0,0,0.12)] rounded p-3">
          <div className="text-xl font-bold text-[#1A1A1A] font-chinese">{percentage}%</div>
          <div className="text-xs text-[#888888] font-chinese">正确率</div>
        </div>
      </div>

      <button
        onClick={onRetry}
        className="bg-[#1A1A1A] text-white px-6 py-2.5 rounded text-sm font-chinese hover:bg-[#4A4A4A] transition-colors"
      >
        重新开始
      </button>
    </div>
  );
};

/**
 * 测验主组件
 */
const Quiz = ({ questions, onComplete, title = '' }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [currentAnswer, setCurrentAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [showFinalResult, setShowFinalResult] = useState(false);
  const [countdown, setCountdown] = useState(null);
  const [sortOrder, setSortOrder] = useState([]);

  const currentQuestion = useMemo(() => questions[currentIndex], [currentIndex, questions]);

  useEffect(() => {
    if (currentQuestion?.type === 'sort') {
      setSortOrder(currentQuestion.options.map((_, i) => i));
    }
  }, [currentQuestion]);

  const handleAnswerSelect = (answer) => {
    if (showResult) return;
    setCurrentAnswer(answer);
  };

  const handleFillBlankChange = (value) => {
    if (showResult) return;
    setCurrentAnswer(value);
  };

  const handleSortReorder = (newOrder) => {
    if (showResult) return;
    setSortOrder(newOrder);
    const items = currentQuestion.options;
    const orderedItems = newOrder.map(i => items[i]);
    setCurrentAnswer(orderedItems.join(' → '));
  };

  const handleSubmitAnswer = () => {
    if (!currentAnswer) return;

    const newAnswers = [...answers];
    newAnswers[currentIndex] = currentAnswer;
    setAnswers(newAnswers);
    setShowResult(true);

    const timer = setTimeout(() => {
      handleNextQuestion();
    }, 2000);

    setCountdown(timer);
  };

  const handleNextQuestion = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setCurrentAnswer(null);
      setShowResult(false);
      setCountdown(null);
    } else {
      finishQuiz();
    }
  };

  const finishQuiz = () => {
    setShowFinalResult(true);
    let score = 0;
    answers.forEach((answer, index) => {
      if (answer === questions[index].correctAnswer) {
        score++;
      }
    });
    if (onComplete) {
      onComplete({ score, total: questions.length, answers, questions });
    }
  };

  const handleRetry = () => {
    setCurrentIndex(0);
    setAnswers([]);
    setCurrentAnswer(null);
    setShowResult(false);
    setShowFinalResult(false);
    setCountdown(null);
  };

  useEffect(() => {
    return () => {
      if (countdown) clearTimeout(countdown);
    };
  }, [countdown]);

  if (!questions?.length) {
    return (
      <div className="border border-[rgba(0,0,0,0.12)] rounded p-8 text-center">
        <p className="text-gray font-chinese">暂无测验题目</p>
      </div>
    );
  }

  if (showFinalResult) {
    const score = answers.filter((answer, index) => answer === questions[index].correctAnswer).length;
    return (
      <div className="border border-[rgba(0,0,0,0.12)] rounded p-6">
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

  const isCurrentAnswerCorrect = currentAnswer === currentQuestion.correctAnswer;

  return (
    <div className="border border-[rgba(0,0,0,0.12)] rounded p-6">
      {title && (
        <h2 className="text-xl font-bold text-center mb-6 font-chinese">{title}</h2>
      )}

      <ProgressBar current={currentIndex + 1} total={questions.length} />

      <div className="mb-6">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-xs bg-[#1A1A1A] text-white px-2 py-1 rounded font-chinese">
            {QUESTION_TYPE_NAMES[currentQuestion.type]}
          </span>
          <span className={`text-xs px-2 py-1 rounded font-chinese border ${
            currentQuestion.difficulty === 'easy' ? 'text-[#2D7A3E] border-[#2D7A3E] bg-[rgba(45,122,62,0.08)]' :
            currentQuestion.difficulty === 'medium' ? 'text-[#A67C52] border-[#A67C52] bg-[rgba(166,124,82,0.08)]' :
            'text-[#B93A3A] border-[#B93A3A] bg-[rgba(185,58,58,0.08)]'
          }`}>
            {DIFFICULTY_NAMES[currentQuestion.difficulty]}
          </span>
        </div>

        <h3 className="text-base text-ink mb-6 leading-relaxed font-chinese">
          {currentQuestion.question}
        </h3>

        <div className="space-y-3">
          {(currentQuestion.type === 'choice' || currentQuestion.type === 'time' ||
            currentQuestion.type === 'founder' || currentQuestion.type === 'event' ||
            currentQuestion.type === 'culture' || currentQuestion.type === 'truefalse') && (
            <div className="space-y-2">
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

          {currentQuestion.type === 'sort' && (
            <SortOptions
              items={currentQuestion.options}
              currentOrder={sortOrder}
              showResult={showResult}
              onReorder={handleSortReorder}
            />
          )}

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

      {showResult && (
        <AnswerFeedback
          isCorrect={isCurrentAnswerCorrect}
          correctAnswer={currentQuestion.correctAnswer}
          userAnswer={currentAnswer}
          explanation={currentQuestion.explanation}
          dynastyName={currentQuestion.dynastyName}
        />
      )}

      <div className="mt-6 flex items-center justify-between">
        <button
          onClick={() => {
            if (currentIndex > 0) {
              setCurrentIndex(currentIndex - 1);
              setCurrentAnswer(answers[currentIndex - 1] || null);
              setShowResult(false);
            }
          }}
          disabled={currentIndex === 0 || showResult}
          className={`px-5 py-2.5 rounded text-sm font-chinese transition-colors ${
            currentIndex === 0 || showResult
              ? 'bg-[rgba(0,0,0,0.06)] text-[#888888] cursor-not-allowed'
              : 'bg-[rgba(0,0,0,0.08)] text-[#1A1A1A] hover:bg-[rgba(0,0,0,0.12)]'
          }`}
        >
          上一题
        </button>

        {!showResult ? (
          <button
            onClick={handleSubmitAnswer}
            disabled={!currentAnswer}
            className={`px-6 py-2.5 rounded text-sm font-chinese transition-colors ${
              !currentAnswer
                ? 'bg-[rgba(0,0,0,0.06)] text-[#888888] cursor-not-allowed'
                : 'bg-[#1A1A1A] text-white hover:bg-[#4A4A4A]'
            }`}
          >
            提交答案
          </button>
        ) : (
          <div className="flex items-center gap-4">
            <span className="text-xs text-[#888888] font-chinese">
              {countdown ? '自动跳转中...' : ''}
            </span>
            <button
              onClick={handleNextQuestion}
              className="px-6 py-2.5 bg-[#1A1A1A] text-white rounded text-sm font-chinese hover:bg-[#4A4A4A] transition-colors"
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
