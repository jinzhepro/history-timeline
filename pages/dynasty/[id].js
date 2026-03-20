/**
 * 朝代详情页面 - 极简版
 */

import React, { useState, useMemo } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import dynasties from '../../data/dynasties';
import DynastyLineage from '../../components/DynastyLineage';
import Breadcrumb from '../../components/Breadcrumb';

const formatYear = (year) => {
  if (year < 0) {
    return `公元前${Math.abs(year)}年`;
  }
  return `公元${year}年`;
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
  { id: 'overview', label: '概览' },
  { id: 'lineage', label: '世系表' },
  { id: 'events', label: '历史事件' },
  { id: 'culture', label: '文化成就' }
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

  if (!dynasty) {
    return (
      <div className="min-h-screen bg-paper flex items-center justify-center">
        <div className="text-center">
          <div className="w-10 h-10 border-2 border-ink/20 border-t-ink rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray font-chinese">正在载入...</p>
        </div>
      </div>
    );
  }

  const duration = Math.abs(dynasty.endYear - dynasty.startYear);

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="space-y-6">
            {/* 基本信息 */}
            <div className="border border-[rgba(0,0,0,0.12)] rounded p-6">
              <h3 className="text-sm font-bold text-ink font-chinese mb-4 tracking-wider">基本信息</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="border border-[rgba(0,0,0,0.08)] rounded p-4">
                  <span className="text-xs text-gray font-chinese">开国君主</span>
                  <p className="text-lg text-ink font-chinese mt-1">{dynasty.founder}</p>
                </div>
                <div className="border border-[rgba(0,0,0,0.08)] rounded p-4">
                  <span className="text-xs text-gray font-chinese">持续时间</span>
                  <p className="text-lg text-ink font-chinese mt-1">{duration} 年</p>
                </div>
                <div className="border border-[rgba(0,0,0,0.08)] rounded p-4">
                  <span className="text-xs text-gray font-chinese">历史时期</span>
                  <p className="text-lg text-ink font-chinese mt-1">{getPeriodName(dynasty.period)}</p>
                </div>
              </div>
              <div className="mt-4 border border-[rgba(0,0,0,0.08)] rounded p-4">
                <span className="text-xs text-gray font-chinese">代表君主</span>
                <p className="text-ink font-chinese mt-1 leading-relaxed">{dynasty.representativeRulers.join('、')}</p>
              </div>
            </div>
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
                className="border border-[rgba(0,0,0,0.12)] rounded p-4 hover:border-ink/60 transition-colors"
              >
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 text-center">
                    <span className="text-xs text-gray font-chinese block">{event.year < 0 ? '公元前' : '公元'}</span>
                    <span className="text-lg font-bold text-ink font-chinese">{Math.abs(event.year)}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-bold text-ink font-chinese">{event.name}</h3>
                      {event.period && (
                        <span className="flex-shrink-0 text-xs text-[#B93A3A] font-chinese px-2 py-0.5 bg-[rgba(185,58,58,0.06)] rounded">
                          {event.period}
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-gray font-chinese leading-relaxed">{event.description}</p>
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
                className="border border-[rgba(0,0,0,0.12)] rounded p-4 hover:border-ink/60 transition-colors"
              >
                <h3 className="font-bold text-ink font-chinese mb-2">{achievement.name}</h3>
                <p className="text-sm text-gray font-chinese leading-relaxed mb-2">{achievement.description}</p>
                {achievement.figure && (
                  <div className="text-xs text-gray font-chinese">
                    <span className="opacity-60">代表人物：</span>
                    <span className="text-ink">{achievement.figure}</span>
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
        <meta name="description" content={`了解${dynasty.name}的历史、人物和文化成就`} />
      </Head>

      <div className="min-h-screen bg-paper">
        <main className="max-w-5xl mx-auto px-6 py-8">
          {/* 面包屑导航 */}
          <div className="mb-6">
            <Breadcrumb
              items={[
                { label: '首页', href: '/' },
                { label: `${dynasty.name}（${getPeriodName(dynasty.period)}）`, href: null }
              ]}
            />
          </div>

          {/* 朝代标题 */}
          <div className="mb-6 pb-6 border-b border-[rgba(0,0,0,0.08)]">
            <h1 className="text-3xl font-bold text-ink font-chinese tracking-widest mb-2">{dynasty.name}</h1>
            <p className="text-sm text-gray font-chinese">
              {formatYear(dynasty.startYear)} - {formatYear(dynasty.endYear)}
            </p>
          </div>

          {/* Tab 切换 */}
          <div className="mb-6">
            <div className="flex gap-1">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-5 py-2 text-sm font-chinese transition-all rounded ${
                    activeTab === tab.id
                      ? 'bg-[#1A1A1A] text-white'
                      : 'text-[#1A1A1A] hover:bg-[rgba(0,0,0,0.06)]'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* 内容区域 */}
          <div className="border border-[rgba(0,0,0,0.12)] rounded p-6 min-h-[400px]">
            {renderTabContent()}
          </div>

          {/* 上下朝代导航 */}
          <div className="mt-6 flex justify-between">
            {hasPrevious ? (
              <Link
                href={`/dynasty/${dynasties[currentIndex - 1].id}`}
                className="text-sm text-ink font-chinese hover:text-[#B93A3A] transition-colors"
              >
                ← {dynasties[currentIndex - 1].name}
              </Link>
            ) : (
              <span></span>
            )}
            {hasNext ? (
              <Link
                href={`/dynasty/${dynasties[currentIndex + 1].id}`}
                className="text-sm text-ink font-chinese hover:text-[#B93A3A] transition-colors"
              >
                {dynasties[currentIndex + 1].name} →
              </Link>
            ) : null}
          </div>
        </main>

        {/* 页脚 */}
        <footer className="py-8 text-center border-t border-[rgba(0,0,0,0.08)]">
          <p className="text-sm text-gray font-chinese">中华文明 · 源远流长</p>
        </footer>
      </div>
    </>
  );
}
