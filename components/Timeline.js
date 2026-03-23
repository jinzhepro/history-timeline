import React, { useState, useMemo, Suspense, useRef, useCallback } from 'react';
import TimelineFilter from './TimelineFilter';
import TimelineOverview from './TimelineOverview';
import dynasties from '../data/dynasties';

import { getPeriodColor } from '@/utils/dateFormat';

// 懒加载 DynastyCard 组件
const DynastyCard = React.lazy(() => import('./DynastyCard'));

/**
 * 时间线主组件
 */
const Timeline = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const dynastyRefs = useRef({});

  // 时期选项
  const periodOptions = [
    { value: 'all', label: '全部' },
    { value: 'ancient', label: '上古' },
    { value: 'classical', label: '中古' },
    { value: 'medieval', label: '近古' },
    { value: 'late-imperial', label: '帝国晚期' },
    { value: 'modern', label: '近代' }
  ];

  /**
   * 模糊匹配搜索
   */
  const fuzzyMatch = (text, query) => {
    if (!text || !query) return false;
    const keywords = query.toLowerCase().split(/\s+/).filter(k => k.length > 0);
    if (keywords.length === 0) return true;
    return keywords.every(keyword => text.toLowerCase().includes(keyword));
  };

  /**
   * 滚动到指定朝代卡片
   */
  const scrollToDynasty = useCallback((dynasty, index) => {
    const element = dynastyRefs.current[dynasty.id];
    if (element) {
      // 计算滚动位置，考虑导航栏高度
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }, []);

  // 过滤朝代
  const filteredDynasties = useMemo(() => {
    return dynasties.filter(dynasty => {
      const matchesPeriod = selectedPeriod === 'all' || dynasty.period === selectedPeriod;

      if (searchQuery === '') {
        return matchesPeriod;
      }

      if (fuzzyMatch(dynasty.name, searchQuery)) return matchesPeriod;
      if (fuzzyMatch(dynasty.founder, searchQuery)) return matchesPeriod;
      if (dynasty.representativeRulers.some(ruler => fuzzyMatch(ruler, searchQuery))) {
        return matchesPeriod;
      }
      if (dynasty.events.some(event =>
        fuzzyMatch(event.name, searchQuery) || fuzzyMatch(event.description, searchQuery)
      )) {
        return matchesPeriod;
      }
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

  return (
    <div className="relative">
      {/* 朝代概览导航 */}
      <TimelineOverview 
        dynasties={filteredDynasties} 
        onDynastyClick={scrollToDynasty} 
      />
      
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* 标题 */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-ink font-chinese tracking-widest mb-3">
            中国历史时间线
          </h1>
          <p className="text-gray font-chinese tracking-[0.3em] text-sm">
            上下五千年，纵横九万里
          </p>
          <div className="w-12 h-px bg-ink mx-auto mt-6"></div>
        </div>

        {/* 筛选和搜索 */}
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
          <div className="absolute left-1/2 transform -translate-x-1/2 w-px h-full bg-[rgba(0,0,0,0.15)] hidden md:block"></div>

          {/* 朝代卡片 */}
          <div className="relative">
            {filteredDynasties.map((dynasty, index) => (
              <div
                key={dynasty.id}
                className="ink-animate mb-10"
                ref={el => dynastyRefs.current[dynasty.id] = el}
              >
                {/* 移动端 - 单列显示 */}
                <div className="md:hidden">
                  <Suspense fallback={
                    <div className="bg-paper rounded p-6 border border-[rgba(0,0,0,0.12)] animate-pulse">
                      <div className="h-5 bg-[rgba(0,0,0,0.08)] rounded w-3/4 mb-3"></div>
                      <div className="h-4 bg-[rgba(0,0,0,0.06)] rounded w-1/2 mb-3"></div>
                      <div className="space-y-2">
                        <div className="h-12 bg-[rgba(0,0,0,0.06)] rounded"></div>
                      </div>
                    </div>
                  }>
                    <DynastyCard dynasty={dynasty} index={index} />
                  </Suspense>
                </div>

                {/* 桌面端 - 左右交替显示 */}
                <div className="hidden md:flex items-center relative">
                  {/* 时间轴节点 */}
                  <div
                    className="absolute left-1/2 transform -translate-x-1/2 w-3 h-3 rounded-full bg-paper border-2 border-ink z-10"
                    style={{
                      backgroundColor: getPeriodColor(dynasty.period),
                    }}
                  ></div>

                  {index % 2 === 0 ? (
                    <>
                      <div className="w-1/2 pr-16 flex justify-end relative">
                        <Suspense fallback={<SkeletonCard />}>
                          <DynastyCard dynasty={dynasty} index={index} period={dynasty.period} />
                        </Suspense>
                      </div>
                      <div className="w-0"></div>
                      <div className="w-1/2 pl-16"></div>
                    </>
                  ) : (
                    <>
                      <div className="w-1/2 pr-16"></div>
                      <div className="w-0"></div>
                      <div className="w-1/2 pl-16 flex justify-start relative">
                        <Suspense fallback={<SkeletonCard />}>
                          <DynastyCard dynasty={dynasty} index={index} period={dynasty.period} />
                        </Suspense>
                      </div>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 无结果提示 */}
        {filteredDynasties.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray font-chinese">暂无匹配的朝代</p>
          </div>
        )}
      </div>
    </div>
  );
};

/**
 * 骨架屏卡片
 */
const SkeletonCard = () => (
  <div className="bg-paper rounded p-6 border border-[rgba(0,0,0,0.12)] w-full max-w-md animate-pulse">
    <div className="h-5 bg-[rgba(0,0,0,0.08)] rounded w-3/4 mb-3"></div>
    <div className="h-4 bg-[rgba(0,0,0,0.06)] rounded w-1/2 mb-4"></div>
    <div className="space-y-2">
      <div className="h-12 bg-[rgba(0,0,0,0.06)] rounded"></div>
    </div>
  </div>
);

export default Timeline;
