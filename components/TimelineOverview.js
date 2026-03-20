import React, { useState, useEffect } from 'react';

/**
 * 时间轴概览组件 - 提供朝代快速导航
 * 固定在右侧，显示所有朝代，点击可平滑滚动到对应位置
 */
const TimelineOverview = ({ dynasties, onDynastyClick }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);

  // 监听滚动，控制概览面板显示
  useEffect(() => {
    const handleScroll = () => {
      // 当滚动超过 300px 时显示概览面板
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 处理朝代点击
  const handleDynastyClick = (dynasty, index) => {
    setActiveIndex(index);
    onDynastyClick(dynasty, index);
  };

  // 获取时期颜色
  const getPeriodColor = (period) => {
    const colors = {
      'ancient': '#8B6F47',
      'classical': '#B93A3A',
      'medieval': '#4A6FA5',
      'late-imperial': '#2D7A3E',
      'modern': '#6B7280'
    };
    return colors[period] || '#1A1A1A';
  };

  if (!isVisible || dynasties.length === 0) {
    return null;
  }

  return (
    <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block">
      <div className="bg-paper/95 backdrop-blur-sm border border-[rgba(0,0,0,0.08)] rounded-lg shadow-lg p-3">
        <h3 className="text-xs font-bold text-ink font-chinese tracking-wider mb-2 text-center">
          朝代概览
        </h3>
        
        <div className="space-y-0.5">
          {dynasties.map((dynasty, index) => (
            <button
              key={dynasty.id}
              onClick={() => handleDynastyClick(dynasty, index)}
              className={`w-full text-left px-2 py-1 rounded text-xs transition-all duration-200 flex items-center gap-1.5 ${
                activeIndex === index 
                  ? 'bg-[rgba(0,0,0,0.05)] text-ink font-medium' 
                  : 'text-gray hover:bg-[rgba(0,0,0,0.03)] hover:text-ink'
              }`}
            >
              <span 
                className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                style={{ backgroundColor: getPeriodColor(dynasty.period) }}
              ></span>
              <span className="font-chinese truncate">{dynasty.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TimelineOverview;