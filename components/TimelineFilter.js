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
    <div className="sticky top-20 z-40 mb-6">
      <div className="bg-white/80 backdrop-blur-md rounded-2xl border border-gray-200/50 shadow-sm p-4">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          {/* 时期筛选 */}
          <div className="flex flex-wrap gap-2 justify-center">
            {periodOptions.map(option => (
              <button
                key={option.value}
                onClick={() => onPeriodChange(option.value)}
                className={`
                  px-4 py-2 rounded-xl text-sm font-chinese font-bold
                  transition-all duration-300 ease-out
                  ${selectedPeriod === option.value 
                    ? 'text-white shadow-md transform scale-105' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200'
                  }
                `}
                style={{
                  backgroundColor: selectedPeriod === option.value ? option.color : undefined,
                }}
              >
                {option.label}
              </button>
            ))}
          </div>
          
          {/* 搜索框 */}
          <div className="relative w-full md:w-72">
            <input
              type="text"
              placeholder="搜索朝代、君主、事件..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full px-4 py-2 pr-10 bg-white/50 backdrop-blur-sm border border-gray-200/50 rounded-xl focus:border-[#C41E3A]/50 focus:outline-none focus:ring-2 focus:ring-[#C41E3A]/20 font-chinese transition-all"
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
        <div className="mt-3 text-center text-xs text-gray-500 font-chinese">
          {searchQuery ? (
            <span>找到匹配 "{searchQuery}" 的朝代</span>
          ) : (
            <span>浏览中国历史朝代</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default TimelineFilter;
