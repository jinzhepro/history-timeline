/**
 * 测验演示页面
 * 使用新的 Quiz 组件展示功能
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
 * 测验演示页面组件
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
    console.log('测验完成:', result);
    alert(`测验完成！得分：${result.score}/${result.total} (${Math.round((result.score/result.total)*100)}分)`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-yellow-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        {/* 标题 */}
        <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-2 ink-title">
          中国历史朝代测验
        </h1>
        <p className="text-center text-gray-600 mb-8">
          测试你对中国历史朝代的了解程度
        </p>

        {/* 控制面板 */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8 ink-card">
          <div className="flex flex-wrap gap-4 items-center justify-between">
            <div className="flex items-center gap-4">
              <label className="font-medium text-gray-700">题型选择：</label>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500 bg-white"
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
                className="bg-gradient-to-r from-red-600 to-red-400 text-white px-6 py-2 rounded-md hover:from-red-700 hover:to-red-500 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? '加载中...' : '重新生成'}
              </button>
            </div>
          </div>
        </div>

        {/* 加载状态 */}
        {isLoading && (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-red-600"></div>
            <p className="mt-4 text-gray-600">正在准备测验题目...</p>
          </div>
        )}

        {/* 测验组件 */}
        {!isLoading && questions.length > 0 && (
          <Quiz
            questions={questions}
            onComplete={handleQuizComplete}
            title="中国历史朝代测验"
          />
        )}

        {/* 无题目提示 */}
        {!isLoading && questions.length === 0 && (
          <div className="text-center py-12 ink-card p-8">
            <p className="text-gray-600 text-lg">暂无测验题目</p>
            <button
              onClick={generateQuiz}
              className="mt-4 bg-gradient-to-r from-red-600 to-red-400 text-white px-6 py-3 rounded-lg font-medium hover:from-red-700 hover:to-red-500 transition-all"
            >
              生成题目
            </button>
          </div>
        )}

        {/* 说明 */}
        <div className="mt-12 text-center text-gray-500 text-sm">
          <h3 className="font-bold mb-2">支持的题型</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 max-w-2xl mx-auto">
            <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-xs">时间选择题</span>
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs">开国君主题</span>
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs">历史事件题</span>
            <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-xs">文化成就题</span>
            <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-xs">排序题</span>
            <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-xs">判断题</span>
            <span className="bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-xs">填空题</span>
            <span className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-xs">混合题型</span>
          </div>
          <p className="mt-4">基于中国历史朝代数据自动生成，支持多种交互方式</p>
        </div>
      </div>
    </div>
  );
};

export default QuizPage;