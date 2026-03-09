import React from 'react';

/**
 * 时间线筛选组件
 * 功能：
 * - 时期筛选按钮
 * - 搜索输入框
 */
const TimelineFilter = ({ 
  periodOptions, 
  selectedPeriod, 
  onPeriodChange, 
  searchQuery, 
  onSearchChange 
}) => {
  return (
    <div className="ink-card p-6 mb-8">
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        {/* 时期筛选 */}
        <div className="flex flex-wrap gap-2 justify-center">
          {periodOptions.map(option => (
            <button
              key={option.value}
              onClick={() => onPeriodChange(option.value)}
              className={`
                px-4 py-2 rounded-full text-sm font-chinese
                transition-all duration-300 ease-out
                ${selectedPeriod === option.value 
                  ? 'ink-button text-white shadow-md' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200'
                }
              `}
              style={{
                backgroundColor: selectedPeriod === option.value ? option.color : undefined,
                borderRadius: '9999px'
              }}
            >
              {option.label}
            </button>
          ))}
        </div>
        
        {/* 搜索框 */}
        <div className="relative w-full md:w-64">
          <input
            type="text"
            placeholder="搜索朝代或君主..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full px-4 py-2 pr-10 border-2 border-gray-300 rounded-full focus:border-gray-600 focus:outline-none font-chinese transition-colors"
          />
          <svg
            className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>
      
      {/* 结果显示 */}
      <div className="mt-4 text-center text-sm text-gray-600 font-chinese">
        {searchQuery && (
          <span>找到 {periodOptions.find(p => p.value === selectedPeriod)?.label || '全部'} 中匹配 "{searchQuery}" 的朝代</span>
        )}
      </div>
    </div>
  );
};

export default TimelineFilter;
