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
    <div className="sticky top-20 z-40 mb-8">
      <div className="bg-gradient-to-br from-white/90 to-[#F5F5F0]/80 backdrop-blur-md rounded-2xl border border-gray-200/60 shadow-lg p-5 relative overflow-hidden">
        {/* 顶部装饰线 */}
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#C41E3A]/40 to-transparent" />
        
        <div className="flex flex-col md:flex-row gap-5 items-center justify-between relative z-10">
          {/* 时期筛选 - 增强版 */}
          <div className="flex flex-wrap gap-2 justify-center">
            {periodOptions.map(option => (
              <button
                key={option.value}
                onClick={() => onPeriodChange(option.value)}
                className={`
                  px-5 py-2.5 rounded-xl text-sm font-chinese font-bold
                  transition-all duration-300 ease-out relative overflow-hidden
                  ${selectedPeriod === option.value 
                    ? 'text-white shadow-lg transform scale-105 ring-2 ring-offset-2' 
                    : 'bg-gradient-to-br from-white/80 to-gray-50/80 text-gray-700 hover:bg-white border border-gray-200/60 hover:border-gray-300 hover:shadow-md'
                  }
                `}
                style={{
                  backgroundColor: selectedPeriod === option.value ? option.color : undefined,
                  ringColor: selectedPeriod === option.value ? option.color : undefined,
                }}
              >
                {option.label}
              </button>
            ))}
          </div>
          
          {/* 搜索框 - 水墨风格增强版 */}
          <div className="relative w-full md:w-80 group">
            <input
              type="text"
              placeholder="搜索朝代、君主、事件..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full px-5 py-3 pr-12 bg-white/70 backdrop-blur-sm border border-gray-200/60 rounded-xl focus:border-[#C41E3A]/60 focus:outline-none focus:ring-2 focus:ring-[#C41E3A]/20 focus:bg-white font-chinese transition-all duration-300 shadow-sm hover:shadow-md"
            />
            <svg
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-[#C41E3A] transition-colors duration-300"
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
        
        {/* 结果显示 - 增强版 */}
        <div className="mt-4 text-center text-xs text-gray-500 font-chinese pt-3 border-t border-gray-200/40">
          {searchQuery ? (
            <span className="inline-flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C41E3A]"></span>
              找到匹配 <span className="font-bold text-[#C41E3A]">"{searchQuery}"</span> 的朝代
            </span>
          ) : (
            <span className="inline-flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-gray-400"></span>
              浏览中国历史朝代
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default TimelineFilter;
