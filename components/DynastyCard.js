import React from 'react';
import Link from 'next/link';

/**
 * 朝代卡片组件 - 极简水墨风格
 */
const DynastyCard = ({ dynasty, index, period }) => {
  const formatYear = (year) => {
    if (year < 0) {
      return `公元前${Math.abs(year)}年`;
    }
    return `公元${year}年`;
  };

  // 时期颜色映射
  const periodColors = {
    'ancient': '#8B6F47',
    'classical': '#B93A3A',
    'medieval': '#4A6FA5',
    'late-imperial': '#2D7A3E',
    'modern': '#6B7280'
  };

  const periodColor = periodColors[dynasty.period] || '#1A1A1A';

  return (
    <Link
      href={`/dynasty/${dynasty.id}`}
      className="block w-full max-w-md"
    >
      <article
        className="bg-paper p-5 border border-[rgba(0,0,0,0.12)] rounded hover:border-[rgba(0,0,0,0.25)] transition-all group"
        style={{
          borderLeftWidth: '3px',
          borderLeftColor: periodColor,
        }}
      >
        {/* 朝代名称和年份 */}
        <div className="mb-4">
          <h3 className="text-xl font-bold text-ink font-chinese mb-1 group-hover:text-[#B93A3A] transition-colors">
            {dynasty.name}
          </h3>
          <p className="text-sm text-gray font-chinese">
            {formatYear(dynasty.startYear)} - {formatYear(dynasty.endYear)}
          </p>
        </div>

        {/* 信息区域 */}
        <div className="space-y-3">
          {/* 开国君主 */}
          <div className="bg-[rgba(0,0,0,0.03)] p-3 rounded">
            <span className="text-xs text-gray font-chinese">开国君主</span>
            <p className="text-ink font-medium font-chinese mt-0.5">{dynasty.founder}</p>
          </div>

          {/* 代表君主 */}
          {dynasty.representativeRulers && dynasty.representativeRulers.length > 0 && (
            <div className="bg-[rgba(0,0,0,0.03)] p-3 rounded">
              <span className="text-xs text-gray font-chinese">代表君主</span>
              <p className="text-sm text-ink font-chinese mt-0.5 leading-relaxed">
                {dynasty.representativeRulers.join('、')}
              </p>
            </div>
          )}
        </div>

        {/* 底部提示 */}
        <div className="mt-4 pt-3 border-t border-[rgba(0,0,0,0.06)] flex items-center justify-between">
          <span className="text-xs text-gray font-chinese">点击查看详情</span>
          <svg className="w-4 h-4 text-gray group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </article>
    </Link>
  );
};

export default DynastyCard;
