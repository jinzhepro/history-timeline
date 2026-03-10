/**
 * 测验题目生成器演示页面
 * 展示生成的测验题目示例
 */

import React, { useState, useEffect } from 'react';
import {
  generateRandomQuiz,
  generateTimeChoiceQuestions,
  generateFounderQuestions,
  generateEventQuestions,
  generateCultureQuestions,
  generateSortQuestions,
  generateTrueFalseQuestions,
  generateFillBlankQuestions,
  QUESTION_TYPES,
  DIFFICULTY
} from '../utils/quizGenerator';

/**
 * 测验题目演示组件
 */
const QuizDemo = () => {
  const [questions, setQuestions] = useState([]);
  const [selectedType, setSelectedType] = useState('random');
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);

  // 生成题目
  const generateQuiz = () => {
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
    
    setQuestions(newQuestions);
    setAnswers({});
    setShowResults(false);
    setScore(0);
  };

  // 初始化时生成一套题目
  useEffect(() => {
    generateQuiz();
  }, []);

  // 处理答案选择
  const handleAnswerSelect = (questionId, answer) => {
    if (showResults) return;
    
    setAnswers(prev => ({
      ...prev,
      [questionId]: answer
    }));
  };

  // 提交答案
  const handleSubmit = () => {
    let correctCount = 0;
    
    questions.forEach(q => {
      if (answers[q.id] === q.correctAnswer) {
        correctCount++;
      }
    });
    
    setScore(correctCount);
    setShowResults(true);
  };

  // 获取难度颜色
  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'easy': return 'text-green-600';
      case 'medium': return 'text-yellow-600';
      case 'hard': return 'text-red-600';
      default: return 'text-gray-600';
    }
  };

  // 获取题型名称
  const getTypeName = (type) => {
    const typeNames = {
      'time': '时间选择题',
      'founder': '开国君主题',
      'event': '历史事件题',
      'culture': '文化成就题',
      'sort': '排序题',
      'truefalse': '判断题',
      'fillblank': '填空题'
    };
    return typeNames[type] || type;
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        {/* 标题 */}
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          中国历史朝代测验题目生成器
        </h1>

        {/* 控制面板 */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex flex-wrap gap-4 items-center justify-between">
            <div className="flex items-center gap-4">
              <label className="font-medium text-gray-700">题型选择：</label>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
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
                className="bg-gray-600 text-white px-6 py-2 rounded-md hover:bg-gray-700 transition-colors"
              >
                重新生成
              </button>
              {!showResults && (
                <button
                  onClick={handleSubmit}
                  className="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700 transition-colors"
                >
                  提交答案
                </button>
              )}
            </div>
          </div>

          {/* 统计信息 */}
          {showResults && (
            <div className="mt-4 p-4 bg-green-50 rounded-md">
              <p className="text-lg font-medium text-green-800">
                得分：{score} / {questions.length} 
                ({Math.round((score / questions.length) * 100)}分)
              </p>
            </div>
          )}
        </div>

        {/* 题目列表 */}
        <div className="space-y-6">
          {questions.map((question, index) => (
            <div
              key={question.id}
              className={`bg-white rounded-lg shadow-md p-6 ${
                showResults && answers[question.id] === question.correctAnswer
                  ? 'border-2 border-green-500'
                  : showResults && answers[question.id] !== question.correctAnswer
                  ? 'border-2 border-red-500'
                  : ''
              }`}
            >
              {/* 题目标题 */}
              <div className="mb-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-red-600 text-white text-sm px-2 py-1 rounded">
                    第{index + 1}题
                  </span>
                  <span className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded">
                    {getTypeName(question.type)}
                  </span>
                  <span className={`text-sm font-medium ${getDifficultyColor(question.difficulty)}`}>
                    {question.difficulty === 'easy' ? '简单' : 
                     question.difficulty === 'medium' ? '中等' : '困难'}
                  </span>
                </div>
                <h3 className="text-lg font-medium text-gray-800">
                  {question.question}
                </h3>
                {question.knowledgePoint && (
                  <p className="text-sm text-gray-500 mt-1">
                    知识点：{question.knowledgePoint}
                  </p>
                )}
              </div>

              {/* 选项 */}
              {question.options && question.options.length > 0 ? (
                <div className="space-y-2 mb-4">
                  {question.options.map((option, optIndex) => (
                    <button
                      key={optIndex}
                      onClick={() => handleAnswerSelect(question.id, option)}
                      disabled={showResults}
                      className={`w-full text-left p-3 rounded-md border-2 transition-all ${
                        answers[question.id] === option
                          ? 'border-red-600 bg-red-50'
                          : 'border-gray-200 hover:border-gray-300'
                      } ${
                        showResults && option === question.correctAnswer
                          ? 'border-green-500 bg-green-50'
                          : ''
                      } ${
                        showResults && answers[question.id] === option && option !== question.correctAnswer
                          ? 'border-red-500 bg-red-50'
                          : ''
                      }`}
                    >
                      <span className="font-medium text-gray-700">
                        {String.fromCharCode(65 + optIndex)}.
                      </span>
                      <span className="ml-2 text-gray-800">{option}</span>
                    </button>
                  ))}
                </div>
              ) : (
                /* 填空题输入框 */
                <div className="mb-4">
                  <input
                    type="text"
                    value={answers[question.id] || ''}
                    onChange={(e) => handleAnswerSelect(question.id, e.target.value)}
                    disabled={showResults}
                    placeholder="请输入答案"
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>
              )}

              {/* 答案解析 */}
              {showResults && (
                <div className="mt-4 p-4 bg-blue-50 rounded-md">
                  <p className="font-medium text-blue-800 mb-2">
                    正确答案：{question.correctAnswer}
                  </p>
                  <p className="text-blue-700">
                    解析：{question.explanation}
                  </p>
                  {question.dynastyName && (
                    <p className="text-sm text-blue-600 mt-2">
                      相关朝代：{question.dynastyName}
                    </p>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* 底部说明 */}
        <div className="mt-8 text-center text-gray-500 text-sm">
          <p>测验题目基于中国历史朝代数据自动生成</p>
          <p>包含 7 种题型：时间选择、开国君主、历史事件、文化成就、排序、判断、填空</p>
        </div>
      </div>
    </div>
  );
};

export default QuizDemo;
