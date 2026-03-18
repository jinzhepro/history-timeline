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
    <div className="relative z-10">
      {/* 朝代名称和时期 */}
      <div className="flex items-start justify-between mb-5">
        <div>
          <h3 className="text-2xl font-bold text-gray-800 font-chinese mb-2 group-hover:text-[#C41E3A] transition-colors duration-300" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.1)' }}>
            {dynasty.name}
          </h3>
          <p className="text-sm text-gray-500 font-chinese" style={{ letterSpacing: '0.05em' }}>
            {formatYear(dynasty.startYear)} - {formatYear(dynasty.endYear)}
          </p>
        </div>
        <div
          className="w-4 h-4 rounded-full flex-shrink-0 shadow-md"
          style={{ 
            backgroundColor: periodColor,
            boxShadow: `0 0 12px ${periodColor}60`,
          }}
        ></div>
      </div>
      
      {/* 信息卡片区域 */}
      <div className="space-y-3">
        {/* 开国君主 */}
        <div className="group/info bg-gradient-to-br from-amber-50/90 to-orange-50/90 p-4 rounded-xl border border-amber-200/60 hover:border-amber-300 transition-all duration-300 backdrop-blur-sm">
          <div className="flex items-center gap-2 mb-1">
            <div className="w-1 h-4 bg-gradient-to-b from-amber-500 to-amber-300 rounded-full"></div>
            <span className="text-amber-700 text-xs uppercase tracking-wider font-bold">开国君主</span>
          </div>
          <p className="font-bold text-gray-800 text-lg mt-1 font-chinese pl-3">{dynasty.founder}</p>
        </div>
        
        {/* 代表君主 */}
        {dynasty.representativeRulers && dynasty.representativeRulers.length > 0 && (
          <div className="group/info bg-gradient-to-br from-blue-50/90 to-indigo-50/90 p-4 rounded-xl border border-blue-200/60 hover:border-blue-300 transition-all duration-300 backdrop-blur-sm">
            <div className="flex items-center gap-2 mb-1">
              <div className="w-1 h-4 bg-gradient-to-b from-blue-500 to-blue-300 rounded-full"></div>
              <span className="text-blue-700 text-xs uppercase tracking-wider font-bold">代表君主</span>
            </div>
            <p className="text-gray-700 mt-1 font-chinese text-sm pl-3 leading-relaxed">{dynasty.representativeRulers.join('、')}</p>
          </div>
        )}
        
        {/* 朝代描述 */}
        {dynasty.description && (
          <div className="bg-gradient-to-br from-gray-50/80 to-gray-100/80 p-4 rounded-xl border border-gray-200/60 backdrop-blur-sm">
            <p className="text-sm text-gray-600 font-chinese leading-relaxed">{dynasty.description}</p>
          </div>
        )}
      </div>
      
      {/* 底部提示 */}
      <div className="mt-5 flex items-center justify-between text-xs text-gray-500 font-chinese pt-3 border-t border-gray-200/50">
        <span className="flex items-center gap-2">
          <span className="w-1 h-4 bg-gradient-to-b from-[#C41E3A] to-[#C41E3A]/50 rounded-full"></span>
          点击查看详情
        </span>
        <svg className="w-5 h-5 text-[#C41E3A] group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </div>
  );

  // 如果有 onClick，使用 div，否则使用 Link
  if (onClick) {
    return (
      <div
        className="group relative bg-gradient-to-br from-white/90 to-[#F5F5F0]/80 backdrop-blur-md rounded-2xl p-6 border border-gray-200/60 hover:shadow-xl hover:border-[#C41E3A]/30 transition-all duration-500 cursor-pointer w-full max-w-md overflow-hidden"
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        role="button"
        tabIndex={0}
        aria-expanded={isSelected}
        aria-label={`查看${dynasty.name}详情`}
        style={{
          borderLeft: `5px solid ${periodColor}`,
          boxShadow: '0 4px 16px rgba(0,0,0,0.08), 0 1px 3px rgba(0,0,0,0.05)',
        }}
      >
        {/* 卡片光晕效果 */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
        {cardContent}
      </div>
    );
  }

  return (
    <Link
      href={`/dynasty/${dynasty.id}`}
      className="group relative bg-gradient-to-br from-white/90 to-[#F5F5F0]/80 backdrop-blur-md rounded-2xl p-6 border border-gray-200/60 hover:shadow-xl hover:border-[#C41E3A]/30 transition-all duration-500 block w-full max-w-md overflow-hidden"
      style={{
        borderLeft: `5px solid ${periodColor}`,
        boxShadow: '0 4px 16px rgba(0,0,0,0.08), 0 1px 3px rgba(0,0,0,0.05)',
      }}
    >
      {/* 卡片光晕效果 */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
      {cardContent}
    </Link>
  );
};

export default DynastyCard;
