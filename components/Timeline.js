import React, { useState, useMemo } from 'react';
import dynasties from '../data/dynasties';
import DynastyCard from './DynastyCard';
import TimelineFilter from './TimelineFilter';

/**
 * 时间线主组件 - 增强版
 * 功能：
 * - 时期筛选
 * - 搜索功能
 * - 点击跳转详情页面
 * - 时间轴节点和刻度
 */
const Timeline = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // 时期选项
  const periodOptions = [
    { value: 'all', label: '全部', color: 'var(--ink-black)' },
    { value: 'ancient', label: '上古', color: '#8B4513' },
  { value: 'classical', label: '中古', color: '#C41E3A' },
  { value: 'medieval', label: '近古', color: '#1E3A8A' },
  { value: 'late-imperial', label: '帝国晚期', color: '#00A862' },
  { value: 'modern', label: '近代', color: '#6B7280' }
  ];

  /**
   * 检查文本是否包含搜索关键词（模糊查询）
   * @param {string} text - 要检查的文本
   * @param {string} query - 搜索关键词
   * @returns {boolean} 是否匹配
   */
  const fuzzyMatch = (text, query) => {
    if (!text || !query) return false;
    const textLower = text.toLowerCase();
    const queryLower = query.toLowerCase();
    // 支持多关键词搜索，用空格分隔
    const keywords = queryLower.split(/\s+/).filter(k => k.length > 0);
    if (keywords.length === 0) return true;
    // 所有关键词都必须在文本中出现
    return keywords.every(keyword => textLower.includes(keyword));
  };

  // 过滤朝代
  const filteredDynasties = useMemo(() => {
    return dynasties.filter(dynasty => {
      const matchesPeriod = selectedPeriod === 'all' || dynasty.period === selectedPeriod;
      
      if (searchQuery === '') {
        return matchesPeriod;
      }

      // 搜索朝代名称
      if (fuzzyMatch(dynasty.name, searchQuery)) return matchesPeriod;
      
      // 搜索开国君主
      if (fuzzyMatch(dynasty.founder, searchQuery)) return matchesPeriod;
      
      // 搜索代表君主
      if (dynasty.representativeRulers.some(ruler => fuzzyMatch(ruler, searchQuery))) {
        return matchesPeriod;
      }
      
      // 搜索历史事件（名称和描述）
      if (dynasty.events.some(event => 
        fuzzyMatch(event.name, searchQuery) || fuzzyMatch(event.description, searchQuery)
      )) {
        return matchesPeriod;
      }
      
      // 搜索文化成就（名称、描述和代表人物）
      if (dynasty.culturalAchievements.some(achievement => 
        fuzzyMatch(achievement.name, searchQuery) || 
        fuzzyMatch(achievement.description, searchQuery) ||
        fuzzyMatch(achievement.figure, searchQuery)
      )) {
        return matchesPeriod;
      }

      return false;
    });
  }, [selectedPeriod, searchQuery]);

  // 计算时间范围
  const minYear = Math.min(...dynasties.map(d => d.startYear));
  const maxYear = Math.max(...dynasties.map(d => d.endYear));
  const totalYears = maxYear - minYear;

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F5F5F0] via-[#FAFAF5] to-white relative overflow-hidden">
      {/* 水墨背景装饰 - 增强质感 */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='200' height='200' viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23noise)' opacity='0.08'/%3E%3C/svg%3E")`,
        }}
      />

      {/* 顶部装饰线 - 增强 */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#C41E3A] to-transparent opacity-80" />
      
      {/* 底部装饰线 */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C41E3A]/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 py-12 relative">
        {/* 标题区域 - 增强版 */}
        <div className="text-center mb-16 ink-animate-in">
          <div className="inline-block bg-gradient-to-br from-white/90 to-[#F5F5F0]/80 backdrop-blur-md rounded-3xl border border-gray-200/60 shadow-lg px-10 py-8 relative overflow-hidden">
            {/* 卡片顶部装饰 */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#C41E3A] to-transparent opacity-60" />
            
            {/* 角落装饰 */}
            <div className="absolute top-3 left-3 w-8 h-8 border-t-2 border-l-2 border-[#C41E3A]/20 rounded-tl-lg" />
            <div className="absolute top-3 right-3 w-8 h-8 border-t-2 border-r-2 border-[#C41E3A]/20 rounded-tr-lg" />
            <div className="absolute bottom-3 left-3 w-8 h-8 border-b-2 border-l-2 border-[#C41E3A]/20 rounded-bl-lg" />
            <div className="absolute bottom-3 right-3 w-8 h-8 border-b-2 border-r-2 border-[#C41E3A]/20 rounded-br-lg" />
            
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4 font-chinese relative z-10" style={{ fontFamily: 'KaiTi, STKaiti, serif', textShadow: '2px 2px 4px rgba(0,0,0,0.1)' }}>
              中国历史时间线
            </h1>
            <p className="text-xl text-gray-600 relative z-10" style={{ letterSpacing: '0.3em', fontFamily: 'KaiTi, STKaiti, serif' }}>
              上下五千年，纵横九万里
            </p>
            <div className="flex items-center justify-center gap-4 mt-8">
              <div className="w-20 h-px bg-gradient-to-r from-transparent to-gray-400" />
              <div className="w-3 h-3 rotate-45 bg-gradient-to-br from-[#C41E3A] to-[#C41E3A]/60 shadow-md" />
              <div className="w-20 h-px bg-gradient-to-l from-transparent to-gray-400" />
            </div>
          </div>
        </div>

        {/* 筛选和搜索区域 */}
        <TimelineFilter
          periodOptions={periodOptions}
          selectedPeriod={selectedPeriod}
          onPeriodChange={setSelectedPeriod}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
        />

        {/* 时间线主轴 - 增强版 */}
        <div className="relative mt-12">
          {/* 中央轴线 - 增强发光效果 */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#C41E3A]/50 via-[#C41E3A]/40 to-[#C41E3A]/30 opacity-70 hidden md:block shadow-[0_0_12px_rgba(196,30,58,0.3)]"></div>

          {/* 朝代卡片 */}
          <div className="relative">
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
                    index={index}
                  />
                </div>

                {/* 桌面端 - 左右交替显示 */}
                <div className="hidden md:flex items-center relative">
                  {/* 时间轴节点 - 增强发光效果 */}
                  <div
                    className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full border-4 border-white shadow-lg z-10 flex items-center justify-center"
                    style={{
                      backgroundColor: periodOptions.find(p => p.value === dynasty.period)?.color || '#8B4513',
                      boxShadow: '0 0 20px rgba(196, 30, 58, 0.4), inset 0 2px 4px rgba(255,255,255,0.5)',
                    }}
                  >
                    <div className="w-2 h-2 rounded-full bg-white/60"></div>
                  </div>

                  {index % 2 === 0 ? (
                    <>
                      <div className="w-1/2 pr-16 flex justify-end relative">
                        <DynastyCard
                          dynasty={dynasty}
                          index={index}
                          period={dynasty.period}
                          position="left"
                        />
                      </div>
                      <div className="w-0"></div>
                      <div className="w-1/2 pl-16"></div>
                    </>
                  ) : (
                    <>
                      <div className="w-1/2 pr-16"></div>
                      <div className="w-0"></div>
                      <div className="w-1/2 pl-16 flex justify-start relative">
                        <DynastyCard
                          dynasty={dynasty}
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

        {/* 页脚 */}
        <footer className="py-8 text-center">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-gray-300" />
            <div className="w-2 h-2 rotate-45 bg-[#C41E3A]/20" />
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-gray-300" />
          </div>
          <p className="text-gray-400 font-chinese text-sm">中华文明 · 源远流长</p>
        </footer>
      </div>
    </div>
  );
};

export default Timeline;
