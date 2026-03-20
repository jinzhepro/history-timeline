/**
 * 测验页面 - 极简版
 */

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Quiz from '@/components/Quiz';
import {
  generateRandomQuiz,
  generateTimeChoiceQuestions,
  generateFounderQuestions,
  generateEventQuestions,
  generateCultureQuestions,
  generateSortQuestions,
  generateTrueFalseQuestions,
  generateFillBlankQuestions
} from '../utils/quizGenerator';

const QuizPage = () => {
  const [questions, setQuestions] = useState([]);
  const [selectedType, setSelectedType] = useState('random');
  const [isLoading, setIsLoading] = useState(false);

  const generateQuiz = () => {
    setIsLoading(true);

    let newQuestions = [];

    switch (selectedType) {
      case 'time':
        newQuestions = generateTimeChoiceQuestions(5);
        break;
      case 'founder':
        newQuestions = generateFounderQuestions(5);
        break;
      case 'event':
        newQuestions = generateEventQuestions(5);
        break;
      case 'culture':
        newQuestions = generateCultureQuestions(5);
        break;
      case 'sort':
        newQuestions = generateSortQuestions(3);
        break;
      case 'truefalse':
        newQuestions = generateTrueFalseQuestions(5);
        break;
      case 'fillblank':
        newQuestions = generateFillBlankQuestions(5);
        break;
      case 'random':
      default:
        newQuestions = generateRandomQuiz(10);
        break;
    }

    setTimeout(() => {
      setQuestions(newQuestions);
      setIsLoading(false);
    }, 200);
  };

  useEffect(() => {
    generateQuiz();
  }, []);

  const handleQuizComplete = (result) => {
    console.log('测验完成！得分：', result.score);
  };

  return (
    <div className="min-h-screen bg-paper">
      <div className="max-w-3xl mx-auto px-6 py-8">
        {/* 返回按钮 */}
        <div className="mb-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-gray hover:text-ink transition-colors font-chinese"
          >
            <span>←</span>
            <span>返回首页</span>
          </Link>
        </div>

        {/* 标题 */}
        <div className="text-center mb-8 pb-8 border-b border-[rgba(0,0,0,0.08)]">
          <h1 className="text-2xl font-bold text-ink font-chinese tracking-widest mb-2">
            朝代纪 · 历史测验
          </h1>
          <p className="text-gray font-chinese text-sm">测试你对中国历史朝代的了解程度</p>
        </div>

        {/* 控制面板 */}
        <div className="mb-6 flex flex-wrap gap-4 items-center justify-between">
          <div className="flex items-center gap-3">
            <label className="text-sm text-gray font-chinese">题型：</label>
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="text-sm border border-[rgba(0,0,0,0.15)] rounded px-3 py-1.5 font-chinese bg-paper focus:outline-none focus:border-ink"
            >
              <option value="random">随机混合</option>
              <option value="time">时间选择</option>
              <option value="founder">开国君主</option>
              <option value="event">历史事件</option>
              <option value="culture">文化成就</option>
              <option value="sort">排序</option>
              <option value="truefalse">判断</option>
              <option value="fillblank">填空</option>
            </select>
          </div>

          <button
            onClick={generateQuiz}
            disabled={isLoading}
            className="text-sm bg-[#1A1A1A] text-white px-5 py-2 rounded hover:bg-[#4A4A4A] transition-colors disabled:opacity-50 font-chinese"
          >
            {isLoading ? '加载中...' : '重新生成'}
          </button>
        </div>

        {/* 加载状态 */}
        {isLoading && (
          <div className="text-center py-16">
            <div className="w-8 h-8 border-2 border-[rgba(0,0,0,0.2)] border-t-[#1A1A1A] rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-[#4A4A4A] font-chinese">正在准备题目...</p>
          </div>
        )}

        {/* 测验组件 */}
        {!isLoading && questions.length > 0 && (
          <Quiz
            questions={questions}
            onComplete={handleQuizComplete}
            title=""
          />
        )}

        {/* 页脚 */}
        <footer className="mt-12 text-center py-6 border-t border-[rgba(0,0,0,0.08)]">
          <p className="text-xs text-gray font-chinese">
            支持：时间选择 · 开国君主 · 历史事件 · 文化成就 · 排序 · 判断 · 填空
          </p>
        </footer>
      </div>
    </div>
  );
};

export default QuizPage;
