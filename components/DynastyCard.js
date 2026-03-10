import React from 'react';

/**
 * 朝代卡片组件 - 水墨风格
 */
const DynastyCard = ({ dynasty, isSelected, onClick, index, period }) => {
  const formatYear = (year) => {
    if (year < 0) {
      return `${Math.abs(year)}年（公元前）`;
    }
    return `${year}年（公元）`;
  };

  const handleClick = () => {
    onClick(dynasty.id);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onClick(dynasty.id);
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

  return (
    <div
      className={`ink-card cursor-pointer p-6 w-full max-w-md transition-all duration-300 ${isSelected ? 'shadow-lg' : ''}`}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
      aria-expanded={isSelected}
      aria-label={`查看${dynasty.name}详情`}
      style={{
        borderTop: `3px solid ${periodColor}`,
        borderColor: isSelected ? periodColor : undefined
      }}
    >
      <div className="text-center">
        <h3 className="text-2xl ink-title mb-3" style={{ fontFamily: 'KaiTi, STKaiti, serif' }}>
          {dynasty.name}
        </h3>
        
        <p className="text-lg text-gray-600 mb-2" style={{ fontFamily: 'KaiTi, STKaiti, serif' }}>
          {formatYear(dynasty.startYear)} - {formatYear(dynasty.endYear)}
        </p>
        
        <p className="text-base text-gray-700" style={{ fontFamily: 'KaiTi, STKaiti, serif' }}>
          <span className="font-bold text-gray-800">开国君主：</span>
          {dynasty.founder}
        </p>
        
        {dynasty.description && (
          <p className="text-sm text-gray-600 mt-3 italic" style={{ fontFamily: 'KaiTi, STKaiti, serif' }}>
            {dynasty.description}
          </p>
        )}
      </div>
    </div>
  );
};

export default DynastyCard;
