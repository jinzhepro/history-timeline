import React, { useState, useEffect } from 'react';

/**
 * 朝代详情组件 - 水墨风格
 */
const DynastyDetail = ({ dynasty, onClose }) => {
  const [isVisible, setIsVisible] = useState(false);

  const formatYear = (year) => {
    if (year < 0) {
      return `${Math.abs(year)}年（公元前）`;
    }
    return `${year}年（公元）`;
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 10);
    
    return () => clearTimeout(timer);
  }, []);

  const handleCloseClick = (e) => {
    e.stopPropagation();
    setIsVisible(false);
    setTimeout(() => {
      onClose();
    }, 300);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      handleCloseClick(e);
    }
  };

  if (!dynasty) {
    return null;
  }

  return (
    <div 
      className="ink-detail-panel ink-animate-down p-8 relative z-10"
      role="dialog"
      aria-modal="true"
      aria-labelledby={`detail-title-${dynasty.id}`}
      onKeyDown={handleKeyDown}
      style={{ 
        maxHeight: '70vh', 
        overflowY: 'auto',
        width: '100%',
        maxWidth: '800px'
      }}
    >
      <button
        className="absolute top-4 right-4 w-10 h-10 ink-button rounded-full text-xl flex items-center justify-center"
        onClick={handleCloseClick}
        aria-label="关闭详情"
      >
        ×
      </button>
      
      <h2 
        className="text-4xl ink-title text-center mb-8"
        id={`detail-title-${dynasty.id}`}
        style={{ fontFamily: 'KaiTi, STKaiti, serif' }}
      >
        {dynasty.name}
      </h2>

      <div className="space-y-6">
        {/* 基本信息 */}
        <section className="bg-gray-50 p-4 rounded border-l-4 border-gray-600">
          <h3 className="text-xl font-bold mb-3" style={{ fontFamily: 'KaiTi, STKaiti, serif' }}>基本信息</h3>
          <div className="space-y-2" style={{ fontFamily: 'KaiTi, STKaiti, serif' }}>
            <p className="text-gray-700">
              <span className="font-bold text-gray-800">时间范围：</span>
              {formatYear(dynasty.startYear)} - {formatYear(dynasty.endYear)}
            </p>
            <p className="text-gray-700">
              <span className="font-bold text-gray-800">开国君主：</span>{dynasty.founder}
            </p>
            <p className="text-gray-700">
              <span className="font-bold text-gray-800">代表君主：</span>
              {dynasty.representativeRulers.join(', ')}
            </p>
          </div>
        </section>

        {/* 重要历史事件 */}
        <section>
          <h3 className="text-xl font-bold mb-3" style={{ fontFamily: 'KaiTi, STKaiti, serif' }}>重要历史事件</h3>
          <div className="space-y-3">
            {dynasty.events.map((event, index) => (
              <div key={index} className="ink-list-item">
                <div className="text-gray-600 text-sm" style={{ fontFamily: 'KaiTi, STKaiti, serif' }}>
                  {formatYear(event.year)}
                </div>
                <p className="font-bold text-gray-800" style={{ fontFamily: 'KaiTi, STKaiti, serif' }}>{event.name}</p>
                <p className="text-gray-700 text-sm mt-1" style={{ fontFamily: 'KaiTi, STKaiti, serif' }}>{event.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 文化成就 */}
        <section>
          <h3 className="text-xl font-bold mb-3" style={{ fontFamily: 'KaiTi, STKaiti, serif' }}>文化成就</h3>
          <div className="space-y-3">
            {dynasty.culturalAchievements.map((achievement, index) => (
              <div key={index} className="ink-list-item">
                <p className="font-bold text-gray-800" style={{ fontFamily: 'KaiTi, STKaiti, serif' }}>{achievement.name}</p>
                <p className="text-gray-700 text-sm mt-1" style={{ fontFamily: 'KaiTi, STKaiti, serif' }}>{achievement.description}</p>
                {achievement.figure && (
                  <p className="text-gray-600 text-sm mt-1 italic" style={{ fontFamily: 'KaiTi, STKaiti, serif' }}>
                    代表人物：{achievement.figure}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default DynastyDetail;
