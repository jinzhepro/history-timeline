import React from 'react';

/**
 * 时间线筛选组件
 */
const TimelineFilter = ({
  periodOptions,
  selectedPeriod,
  onPeriodChange,
  searchQuery,
  onSearchChange
}) => {
  return (
    <div className="bg-paper rounded border border-[rgba(0,0,0,0.12)] p-6">
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        {/* 时期筛选 */}
        <div className="flex flex-wrap gap-2 justify-center">
          {periodOptions.map(option => (
            <button
              key={option.value}
              onClick={() => onPeriodChange(option.value)}
              className={`
                px-4 py-2 text-sm font-chinese rounded transition-all
                ${selectedPeriod === option.value
                  ? 'bg-[#1A1A1A] text-white'
                  : 'bg-transparent text-[#1A1A1A] hover:bg-[rgba(0,0,0,0.06)]'
                }
              `}
            >
              {option.label}
            </button>
          ))}
        </div>

        {/* 搜索框 */}
        <div className="relative w-full md:w-64">
          <input
            type="text"
            placeholder="搜索朝代、君主、事件..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full px-4 py-2 pr-10 bg-paper border border-[rgba(0,0,0,0.15)] rounded text-sm font-chinese focus:outline-none focus:border-[#1A1A1A] transition-colors"
          />
          <svg
            className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#888888]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>

      {/* 结果显示 */}
      <div className="mt-4 pt-3 border-t border-[rgba(0,0,0,0.06)]">
        <p className="text-xs text-[#4A4A4A] font-chinese text-center">
          {searchQuery ? (
            <span>
              搜索 "<span className="text-[#1A1A1A] font-medium">{searchQuery}</span>"
            </span>
          ) : (
            <span>浏览中国历史朝代</span>
          )}
        </p>
      </div>
    </div>
  );
};

export default TimelineFilter;
