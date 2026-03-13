/**
 * 朝代详情页面 - Tab 切换整体布局版
 * 展示单个朝代的完整信息
 */
         
import React, { useState, useMemo } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import dynasties from '../../data/dynasties';
import DynastyMap from '../../components/DynastyMap';
import DynastyLineage from '../../components/DynastyLineage';
import Breadcrumb from '../../components/Breadcrumb';

const formatYear = (year) => {
  if (year < 0) {
    return `${Math.abs(year)}年（公元前）`;
  }
  return `${year}年（公元）`;
};

const getPeriodColor = (period) => {
  const colors = {
    'ancient': '#8B4513',
    'classical': '#C41E3A',
    'medieval': '#1E3A8A',
    'late-imperial': '#00A862',
    'modern': '#6B7280'
  };
  return colors[period] || '#8B4513';
};

const getPeriodName = (period) => {
  const names = {
    'ancient': '上古',
    'classical': '中古',
    'medieval': '近古',
    'late-imperial': '帝国晚期',
    'modern': '近代'
  };
  return names[period] || period;
};

const tabs = [
  { id: 'overview', label: '概览', icon: '📋' },
  { id: 'territory', label: '疆域', icon: '🗺️' },
  { id: 'lineage', label: '世系表', icon: '🌳' },
  { id: 'events', label: '历史事件', icon: '📜' },
  { id: 'culture', label: '文化成就', icon: '🎨' }
];

export default function DynastyDetailPage() {
  const router = useRouter();
  const { id } = router.query;
  const [activeTab, setActiveTab] = useState('overview');

  const currentIndex = useMemo(() => {
    return dynasties.findIndex(d => d.id === id);
  }, [id]);

  const dynasty = useMemo(() => {
    return dynasties[currentIndex];
  }, [currentIndex]);

  const hasPrevious = currentIndex > 0;
  const hasNext = currentIndex < dynasties.length - 1;

  const handlePrevious = () => {
    if (hasPrevious) {
      router.push(`/dynasty/${dynasties[currentIndex - 1].id}`);
    }
  };

  const handleNext = () => {
    if (hasNext) {    
      router.push(`/dynasty/${dynasties[currentIndex + 1].id}`);
    } 
  }; 

  if (!dynasty) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#F5F5F0] via-[#FAFAF5] to-white flex items-center justify-center">
        <div className="text-center">
          <div className="relative">
            <div className="animate-spin rounded-full h-16 w-16 border-2 border-[#C41E3A]/20 border-t-[#C41E3A] mx-auto mb-6"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-[#C41E3A] text-2xl font-bold" style={{ fontFamily: 'KaiTi, STKaiti, serif' }}>史</span>
            </div>
          </div>
          <p className="text-gray-600 font-chinese text-lg">正在载入历史...</p>
        </div>
      </div>
    );
  }

  const periodColor = getPeriodColor(dynasty.period);
  const duration = Math.abs(dynasty.endYear - dynasty.startYear);

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="space-y-6">
            {/* 基本信息卡片 */}
            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
              <h3 className="text-lg font-bold mb-4 font-chinese text-gray-900">基本信息</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-4 rounded-xl border border-amber-200">
                  <span className="text-amber-700 text-xs uppercase tracking-wider font-bold">开国君主</span>
                  <p className="font-bold text-gray-900 text-xl mt-1 font-chinese">{dynasty.founder}</p>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-4 rounded-xl border border-blue-200">
                  <span className="text-blue-700 text-xs uppercase tracking-wider font-bold">持续时间</span>
                  <p className="font-bold text-gray-900 text-xl mt-1">
                    <span className="text-2xl text-[#1E3A8A]">{duration}</span> 年
                  </p>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-4 rounded-xl border border-green-200">
                  <span className="text-green-700 text-xs uppercase tracking-wider font-bold">历史时期</span>
                  <p className="font-bold text-gray-900 text-xl mt-1 font-chinese">{getPeriodName(dynasty.period)}</p>
                </div>
              </div>
              <div className="mt-4 p-4 bg-gray-50 rounded-xl border border-gray-200">
                <span className="text-gray-600 text-xs uppercase tracking-wider font-bold">代表君主</span>
                <p className="text-gray-800 mt-2 font-chinese font-medium">{dynasty.representativeRulers.join('、')}</p>
              </div>
            </div>

            {/* 疆域概览 - 简化版 */}
            {dynasty.territory && (
              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <h3 className="text-lg font-bold mb-4 font-chinese text-gray-900">疆域概况</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-3 rounded-lg border border-amber-200">
                    <span className="text-amber-700 text-xs font-bold">都城</span>
                    <p className="font-bold text-gray-900 text-sm mt-1 font-chinese truncate">{dynasty.territory.capital}</p>
                  </div>
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-3 rounded-lg border border-blue-200">
                    <span className="text-blue-700 text-xs font-bold">面积</span>
                    <p className="font-bold text-gray-900 text-sm mt-1">
                      <span className="text-lg text-[#1E3A8A]">{dynasty.territory.area}</span> 万 km²
                    </p>
                  </div>
                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-3 rounded-lg border border-purple-200 col-span-2">
                    <span className="text-purple-700 text-xs font-bold">疆域范围</span>
                    <p className="text-gray-800 mt-1 text-sm font-chinese font-medium line-clamp-2">{dynasty.territory.description}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        );

      case 'territory':
        return (
          <div className="space-y-6">
            {/* 疆域地图 */}
            <DynastyMap
              territory={dynasty.territory}
              dynastyName={dynasty.name}
              dynastyId={dynasty.id}
            />
            
            {/* 疆域四至详情 */}
            {dynasty.territory && dynasty.territory.borders && (
              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <h3 className="text-lg font-bold mb-4 font-chinese text-gray-900">疆域四至</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {dynasty.territory.borders.east && (
                    <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-4 rounded-xl border border-blue-200">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-8 h-8 rounded-full bg-blue-200 flex items-center justify-center">
                          <svg className="w-4 h-4 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </div>
                        <span className="text-blue-700 text-xs font-bold">东</span>
                      </div>
                      <p className="font-chinese text-gray-900 font-medium">{dynasty.territory.borders.east}</p>
                    </div>
                  )}
                  {dynasty.territory.borders.west && (
                    <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-4 rounded-xl border border-amber-200">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-8 h-8 rounded-full bg-amber-200 flex items-center justify-center">
                          <svg className="w-4 h-4 text-amber-700 transform rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </div>
                        <span className="text-amber-700 text-xs font-bold">西</span>
                      </div>
                      <p className="font-chinese text-gray-900 font-medium">{dynasty.territory.borders.west}</p>
                    </div>
                  )}
                  {dynasty.territory.borders.north && (
                    <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-4 rounded-xl border border-indigo-200">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-8 h-8 rounded-full bg-indigo-200 flex items-center justify-center">
                          <svg className="w-4 h-4 text-indigo-700 transform -rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </div>
                        <span className="text-indigo-700 text-xs font-bold">北</span>
                      </div>
                      <p className="font-chinese text-gray-900 font-medium">{dynasty.territory.borders.north}</p>
                    </div>
                  )}
                  {dynasty.territory.borders.south && (
                    <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-4 rounded-xl border border-green-200">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-8 h-8 rounded-full bg-green-200 flex items-center justify-center">
                          <svg className="w-4 h-4 text-green-700 transform rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </div>
                        <span className="text-green-700 text-xs font-bold">南</span>
                      </div>
                      <p className="font-chinese text-gray-900 font-medium">{dynasty.territory.borders.south}</p>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        );

      case 'lineage':
        return <DynastyLineage dynasty={dynasty} />;

      case 'events':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {dynasty.events.map((event, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl p-5 border border-gray-200 shadow-sm hover:shadow-md hover:border-[#C41E3A]/30 transition-all duration-300"
              >
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-14 text-center">
                    <div className="inline-flex flex-col items-center bg-[#C41E3A]/20 rounded-lg px-2 py-1 border border-[#C41E3A]/30">
                      <span className="text-xs text-[#C41E3A] font-chinese font-bold">{event.year < 0 ? '公元前' : '公元'}</span>
                      <span className="text-base font-bold text-[#C41E3A] font-chinese">{Math.abs(event.year)}</span>
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-gray-900 font-chinese mb-1 group-hover:text-[#C41E3A] transition-colors">{event.name}</h3>
                    <p className="text-gray-700 text-sm leading-relaxed font-chinese">{event.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        );

      case 'culture':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {dynasty.culturalAchievements.map((achievement, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl p-5 border-l-4 border-gray-200 shadow-sm hover:shadow-md transition-all duration-300"
                style={{ borderLeftColor: periodColor }}
              >
                <h3 className="font-bold text-base text-gray-900 font-chinese mb-2 group-hover:text-[#C41E3A] transition-colors">{achievement.name}</h3>
                <p className="text-gray-700 text-sm leading-relaxed font-chinese mb-2">{achievement.description}</p>
                {achievement.figure && (
                  <div className="flex items-center gap-2 text-xs">
                    <span className="text-gray-500 font-chinese">代表人物</span>
                    <span className="text-[#C41E3A] font-bold font-chinese">{achievement.figure}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <>
      <Head>
        <title>{dynasty.name} - 朝代纪</title>
        <meta name="description" content={`了解${dynasty.name}的历史、疆域、人物和文化成就`} />
      </Head>

      <div className="min-h-screen bg-gradient-to-b from-[#F5F5F0] via-[#FAFAF5] to-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />

        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#C41E3A] to-transparent opacity-60" />

        <main className="max-w-6xl mx-auto px-4 py-8 relative">
          {/* 面包屑导航 - 替代原 header */}
          <div className="mb-6">
            <Breadcrumb
              items={[
                { label: '首页', href: '/' },
                { label: `${dynasty.name}（${getPeriodName(dynasty.period)}）`, href: null }
              ]}
            />
          </div>

          <div className="sticky top-20 z-40 mb-6">
            <div className="bg-white/95 backdrop-blur-md rounded-2xl border border-gray-200 shadow-sm p-2">
              <div className="flex overflow-x-auto scrollbar-hide gap-1">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex-shrink-0 flex items-center gap-2 px-4 py-3 rounded-xl font-chinese font-bold text-sm transition-all duration-300 whitespace-nowrap ${
                      activeTab === tab.id
                        ? 'bg-[#C41E3A] text-white shadow-md'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <span>{tab.icon}</span>
                    <span>{tab.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white/95 backdrop-blur-sm rounded-2xl border border-gray-200/50 shadow-sm p-6 min-h-[500px]">
            {renderTabContent()}
          </div>
        </main>

        <footer className="py-8 text-center">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-gray-300" />
            <div className="w-2 h-2 rotate-45 bg-[#C41E3A]/20" />
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-gray-300" />
          </div>
          <p className="text-gray-400 font-chinese text-sm">中华文明 · 源远流长</p>
        </footer>
      </div>
    </>
  );
}
