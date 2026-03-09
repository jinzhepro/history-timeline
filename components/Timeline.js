import React, { useState, useMemo } from 'react';
import dynasties from '../data/dynasties';
import DynastyCard from './DynastyCard';
import DynastyDrawer from './DynastyDrawer';
import TimelineFilter from './TimelineFilter';

/**
 * 时间线主组件 - 增强版
 * 功能：
 * - 时期筛选
 * - 搜索功能
 * - 侧边抽屉式详情
 * - 时间轴节点和刻度
 */
const Timeline = () => {
  const [selectedDynastyId, setSelectedDynastyId] = useState(null);
  const [selectedPeriod, setSelectedPeriod] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // 时期选项
  const periodOptions = [
    { value: 'all', label: '全部', color: 'var(--ink-black)' },
    { value: 'ancient', label: '上古', color: '#8B4513' },
    { value: 'classical', label: '中古', color: '#C41E3A' },
    { value: 'medieval', label: '近古', color: '#1E3A8A' },
    { value: 'late-imperial', label: '帝国晚期', color: '#00A862' }
  ];

  // 过滤朝代
  const filteredDynasties = useMemo(() => {
    return dynasties.filter(dynasty => {
      const matchesPeriod = selectedPeriod === 'all' || dynasty.period === selectedPeriod;
      const matchesSearch = searchQuery === '' ||
        dynasty.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        dynasty.founder.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesPeriod && matchesSearch;
    });
  }, [selectedPeriod, searchQuery]);

  const handleDynastyClick = (dynastyId) => {
    setSelectedDynastyId(dynastyId === selectedDynastyId ? null : dynastyId);
  };

  const handleCloseDrawer = () => {
    setSelectedDynastyId(null);
  };

  // 计算时间范围
  const minYear = Math.min(...dynasties.map(d => d.startYear));
  const maxYear = Math.max(...dynasties.map(d => d.endYear));
  const totalYears = maxYear - minYear;

  return (
    <div className="min-h-screen relative overflow-x-hidden">
      {/* 水墨背景装饰 */}
      <div className="ink-background"></div>

      <div className="max-w-7xl mx-auto px-4 py-12 relative z-10">
        {/* 标题区域 */}
        <div className="text-center mb-16 ink-animate-in">
          <h1 className="text-5xl md:text-6xl ink-title mb-4" style={{ fontFamily: 'KaiTi, STKaiti, serif' }}>
            中国历史时间线
          </h1>
          <p className="text-xl text-gray-600 mb-4" style={{ letterSpacing: '0.2em' }}>
            上下五千年，纵横九万里
          </p>
          <div className="ink-divider w-32 mx-auto mt-6"></div>
        </div>

        {/* 筛选和搜索区域 */}
        <TimelineFilter
          periodOptions={periodOptions}
          selectedPeriod={selectedPeriod}
          onPeriodChange={setSelectedPeriod}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
        />

        {/* 时间线主轴 */}
        <div className="relative mt-12">
          {/* 中央轴线 */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-amber-700 via-amber-800 to-amber-900 opacity-40 hidden md:block"></div>

          {/* 朝代卡片 */}
          <div className="relative z-10">
            {filteredDynasties.map((dynasty, index) => (
              <div
                key={dynasty.id}
                className="ink-animate-in mb-8"
                style={{ animationDelay: `${Math.min(index * 0.05, 0.5)}s` }}
              >
                {/* 移动端 - 单列显示 */}
                <div className="md:hidden">
                  <DynastyCard
                    dynasty={dynasty}
                    isSelected={selectedDynastyId === dynasty.id}
                    onClick={handleDynastyClick}
                    index={index}
                  />
                </div>

                {/* 桌面端 - 左右交替显示 */}
                <div className="hidden md:flex items-center relative">
                  {/* 时间轴节点 - 统一放在中间 */}
                  <div
                    className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full border-2 border-white shadow-lg z-20"
                    style={{
                      backgroundColor: periodOptions.find(p => p.value === dynasty.period)?.color || '#8B4513',
                    }}
                  ></div>

                  {index % 2 === 0 ? (
                    <>
                      <div className="w-1/2 pr-12 flex justify-end relative z-10">
                        <DynastyCard
                          dynasty={dynasty}
                          isSelected={selectedDynastyId === dynasty.id}
                          onClick={handleDynastyClick}
                          index={index}
                          period={dynasty.period}
                          position="left"
                        />
                      </div>
                      <div className="w-0"></div>
                      <div className="w-1/2 pl-12"></div>
                    </>
                  ) : (
                    <>
                      <div className="w-1/2 pr-12"></div>
                      <div className="w-0"></div>
                      <div className="w-1/2 pl-12 flex justify-start relative z-10">
                        <DynastyCard
                          dynasty={dynasty}
                          isSelected={selectedDynastyId === dynasty.id}
                          onClick={handleDynastyClick}
                          index={index}
                          period={dynasty.period}
                          position="right"
                        />
                      </div>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 侧边抽屉式详情 */}
        {selectedDynastyId && (
          <DynastyDrawer
            dynasty={dynasties.find(d => d.id === selectedDynastyId)}
            onClose={handleCloseDrawer}
            onNext={() => {
              const currentIndex = filteredDynasties.findIndex(d => d.id === selectedDynastyId);
              const nextIndex = (currentIndex + 1) % filteredDynasties.length;
              setSelectedDynastyId(filteredDynasties[nextIndex].id);
            }}
            onPrevious={() => {
              const currentIndex = filteredDynasties.findIndex(d => d.id === selectedDynastyId);
              const prevIndex = (currentIndex - 1 + filteredDynasties.length) % filteredDynasties.length;
              setSelectedDynastyId(filteredDynasties[prevIndex].id);
            }}
            hasNext={selectedDynastyId !== filteredDynasties[filteredDynasties.length - 1]?.id}
            hasPrevious={selectedDynastyId !== filteredDynasties[0]?.id}
          />
        )}

        {/* 页脚 */}
        <footer className="text-center mt-20 ink-divider mb-8"></footer>
        <div className="text-center text-gray-600 ink-animate-in">
          <p className="text-lg" style={{ letterSpacing: '0.1em' }}>中华文明 · 源远流长</p>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
