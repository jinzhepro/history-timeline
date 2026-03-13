import React from 'react';
import Link from 'next/link';

/**
 * 朝代卡片组件 - 水墨风格
 * 点击跳转到朝代详情页面
 */
const DynastyCard = ({ dynasty, isSelected, onClick, index, period }) => {
  const formatYear = (year) => {
    if (year < 0) {
      return `${Math.abs(year)}年（公元前）`;
    }
    return `${year}年（公元）`;
  };

  const handleClick = () => {
    if (onClick) {
      onClick(dynasty.id);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      if (onClick) {
        onClick(dynasty.id);
      }
    }
  };

  // 时期颜色映射
  const periodColors = {
    'ancient': '#8B4513',
    'classical': '#C41E3A',
    'medieval': '#1E3A8A',
    'late-imperial': '#00A862',
    'modern': '#6B7280'
  };

  const periodColor = periodColors[dynasty.period] || '#8B4513';

  const cardContent = (
    <div>
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-2xl font-bold text-gray-800 font-chinese mb-2 group-hover:text-[#C41E3A] transition-colors">
            {dynasty.name}
          </h3>
          <p className="text-sm text-gray-500 font-chinese">
            {formatYear(dynasty.startYear)} - {formatYear(dynasty.endYear)}
          </p>
        </div>
        <div
          className="w-3 h-3 rounded-full flex-shrink-0"
          style={{ backgroundColor: periodColor }}
        ></div>
      </div>
      
      <div className="space-y-3">
        <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-3 rounded-xl border border-amber-100">
          <span className="text-amber-600 text-xs uppercase tracking-wider">开国君主</span>
          <p className="font-bold text-gray-800 text-lg mt-1 font-chinese">{dynasty.founder}</p>
        </div>
        
        {dynasty.representativeRulers && dynasty.representativeRulers.length > 0 && (
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-3 rounded-xl border border-blue-100">
            <span className="text-blue-600 text-xs uppercase tracking-wider">代表君主</span>
            <p className="text-gray-700 mt-1 font-chinese text-sm">{dynasty.representativeRulers.join('、')}</p>
          </div>
        )}
        
        {dynasty.description && (
          <div className="bg-gray-50 p-3 rounded-xl border border-gray-200/50">
            <p className="text-sm text-gray-600 font-chinese leading-relaxed">{dynasty.description}</p>
          </div>
        )}
      </div>
      
      <div className="mt-4 flex items-center justify-between text-xs text-gray-500 font-chinese">
        <span>点击查看详情</span>
        <svg className="w-4 h-4 text-[#C41E3A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </div>
  );

  // 如果有 onClick，使用 div，否则使用 Link
  if (onClick) {
    return (
      <div
        className="group bg-white/50 backdrop-blur-sm rounded-xl p-5 border border-gray-200/50 hover:shadow-md hover:border-[#C41E3A]/20 transition-all duration-300 cursor-pointer w-full max-w-md"
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        role="button"
        tabIndex={0}
        aria-expanded={isSelected}
        aria-label={`查看${dynasty.name}详情`}
        style={{
          borderLeft: `4px solid ${periodColor}`
        }}
      >
        {cardContent}
      </div>
    );
  }

  return (
    <Link
      href={`/dynasty/${dynasty.id}`}
      className="group bg-white/50 backdrop-blur-sm rounded-xl p-5 border border-gray-200/50 hover:shadow-md hover:border-[#C41E3A]/20 transition-all duration-300 block w-full max-w-md"
      style={{
        borderLeft: `4px solid ${periodColor}`
      }}
    >
      {cardContent}
    </Link>
  );
};

export default DynastyCard;
