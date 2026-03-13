/**
 * 朝代纪 - 测验页面
 * 使用 Quiz 组件展示历史知识测验功能
 */

import React, { useState, useEffect } from 'react';
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

/**
 * 朝代纪测验页面组件
 */
const QuizPage = () => {
  const [questions, setQuestions] = useState([]);
  const [selectedType, setSelectedType] = useState('random');
  const [isLoading, setIsLoading] = useState(false);

  // 生成题目
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
    }, 300); // 模拟加载时间
  };

  // 初始化时生成一套题目
  useEffect(() => {
    generateQuiz();
  }, []);

  // 测验完成回调
  const handleQuizComplete = (result) => {
    console.log('测验完成！得分：', result.score, '/', result.total, `(${Math.round((result.score / result.total) * 100)}分)`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F5F5F0] via-[#FAFAF5] to-white relative overflow-hidden">
      {/* 水墨背景装饰 */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* 顶部装饰线 */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#C41E3A] to-transparent opacity-60" />

      <div className="max-w-4xl mx-auto px-4 py-8 relative">
        {/* 标题区域 */}
        <div className="text-center mb-8">
          <div className="inline-block bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200/50 shadow-sm px-8 py-6">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2 font-chinese ink-title">
              朝代纪 · 历史测验
            </h1>
            <p className="text-center text-gray-600 font-chinese">
              测试你对中国历史朝代的了解程度
            </p>
            <div className="flex items-center justify-center gap-4 mt-6">
              <div className="w-16 h-px bg-gradient-to-r from-transparent to-gray-300" />
              <div className="w-2 h-2 rotate-45 bg-[#C41E3A]/20" />
              <div className="w-16 h-px bg-gradient-to-l from-transparent to-gray-300" />
            </div>
          </div>
        </div>

        {/* 控制面板 */}
        <div className="sticky top-20 z-40 mb-6">
          <div className="bg-white/80 backdrop-blur-md rounded-2xl border border-gray-200/50 shadow-sm p-4">
            <div className="flex flex-wrap gap-4 items-center justify-between">
              <div className="flex items-center gap-4">
                <label className="font-medium text-gray-700 font-chinese">题型选择：</label>
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="bg-white/50 backdrop-blur-sm border border-gray-200/50 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#C41E3A]/20 focus:border-[#C41E3A]/50 font-chinese transition-all"
                >
                  <option value="random">随机混合</option>
                  <option value="time">时间选择题</option>
                  <option value="founder">开国君主题</option>
                  <option value="event">历史事件题</option>
                  <option value="culture">文化成就题</option>
                  <option value="sort">排序题</option>
                  <option value="truefalse">判断题</option>
                  <option value="fillblank">填空题</option>
                </select>
              </div>

              <div className="flex gap-4">
                <button
                  onClick={generateQuiz}
                  disabled={isLoading}
                  className="bg-[#C41E3A] text-white px-6 py-2 rounded-xl hover:bg-[#A81830] transition-all disabled:opacity-50 disabled:cursor-not-allowed font-chinese font-bold shadow-md hover:shadow-lg"
                >
                  {isLoading ? '加载中...' : '重新生成'}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 加载状态 */}
        {isLoading && (
          <div className="text-center py-12">
            <div className="relative inline-block">
              <div className="animate-spin rounded-full h-16 w-16 border-2 border-[#C41E3A]/20 border-t-[#C41E3A] mx-auto"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-[#C41E3A] text-2xl font-bold font-chinese">测</span>
              </div>
            </div>
            <p className="mt-6 text-gray-600 font-chinese">正在准备测验题目...</p>
          </div>
        )}

        {/* 测验组件 */}
        {!isLoading && questions.length > 0 && (
          <Quiz
            questions={questions}
            onComplete={handleQuizComplete}
            title="朝代纪历史测验"
          />
        )}

        {/* 无题目提示 */}
        {!isLoading && questions.length === 0 && (
          <div className="text-center py-12 bg-white/70 backdrop-blur-sm rounded-2xl border border-gray-200/50 shadow-sm p-8">
            <p className="text-gray-600 text-lg font-chinese">暂无测验题目</p>
            <button
              onClick={generateQuiz}
              className="mt-4 bg-[#C41E3A] text-white px-6 py-3 rounded-xl font-bold font-chinese hover:bg-[#A81830] transition-all shadow-md hover:shadow-lg"
            >
              生成题目
            </button>
          </div>
        )}

        {/* 说明 */}
        <footer className="mt-12 py-8 text-center">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-gray-300" />
            <div className="w-2 h-2 rotate-45 bg-[#C41E3A]/20" />
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-gray-300" />
          </div>
          <h3 className="font-bold text-gray-700 font-chinese mb-4">支持的题型</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 max-w-2xl mx-auto mb-4">
            <span className="bg-[#C41E3A]/10 text-[#C41E3A] px-3 py-1 rounded-xl text-xs font-chinese text-center">时间选择题</span>
            <span className="bg-[#1E3A8A]/10 text-[#1E3A8A] px-3 py-1 rounded-xl text-xs font-chinese text-center">开国君主题</span>
            <span className="bg-[#00A862]/10 text-[#00A862] px-3 py-1 rounded-xl text-xs font-chinese text-center">历史事件题</span>
            <span className="bg-[#FFD700]/20 text-[#8B4513] px-3 py-1 rounded-xl text-xs font-chinese text-center">文化成就题</span>
            <span className="bg-[#8B4513]/10 text-[#8B4513] px-3 py-1 rounded-xl text-xs font-chinese text-center">排序题</span>
            <span className="bg-[#6B7280]/10 text-[#6B7280] px-3 py-1 rounded-xl text-xs font-chinese text-center">判断题</span>
            <span className="bg-[#555555]/10 text-[#555555] px-3 py-1 rounded-xl text-xs font-chinese text-center">填空题</span>
            <span className="bg-gradient-to-r from-[#C41E3A]/10 to-[#1E3A8A]/10 text-gray-700 px-3 py-1 rounded-xl text-xs font-chinese text-center">混合题型</span>
          </div>
          <p className="text-gray-500 font-chinese text-sm">基于中国历史朝代数据自动生成，支持多种交互方式</p>
        </footer>
      </div>
    </div>
  );
};

export default QuizPage;