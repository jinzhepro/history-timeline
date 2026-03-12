/**
 * 朝代详情页面
 * 展示单个朝代的完整信息，包括疆域地图、人物关系、历史事件等
 * 
 * 页面结构：
 * - 顶部导航栏（返回按钮、朝代切换）
 * - 头部信息区（朝代名称、时间范围）
 * - 疆域地图区
 * - 人物关系图谱区
 * - 基本信息区
 * - 历史事件区
 * - 文化成就区
 * - 底部导航（上一个/下一个朝代）
 */

import React, { useState, useMemo } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import dynasties from '../../data/dynasties';
import DynastyMap from '../../components/DynastyMap';
import FamilyTree from '../../components/FamilyTree';
import PersonCard from '../../components/PersonCard';

/**
 * 格式化年份显示
 * @param {number} year - 年份
 * @returns {string} 格式化后的年份字符串
 */
const formatYear = (year) => {
  if (year < 0) {
    return `${Math.abs(year)}年（公元前）`;
  }
  return `${year}年（公元）`;
};

/**
 * 朝代详情页面组件
 */
export default function DynastyDetailPage() {
  const router = useRouter();
  const { id } = router.query;
  const [selectedPersonId, setSelectedPersonId] = useState(null);
  const [showFamilyTree, setShowFamilyTree] = useState(true);

  // 获取当前朝代数据
  const currentIndex = useMemo(() => {
    return dynasties.findIndex(d => d.id === id);
  }, [id]);

  const dynasty = useMemo(() => {
    return dynasties[currentIndex];
  }, [currentIndex]);

  const hasPrevious = currentIndex > 0;
  const hasNext = currentIndex < dynasties.length - 1;

  // 导航到上一个朝代
  const handlePrevious = () => {
    if (hasPrevious) {
      router.push(`/dynasty/${dynasties[currentIndex - 1].id}`);
    }
  };

  // 导航到下一个朝代
  const handleNext = () => {
    if (hasNext) {
      router.push(`/dynasty/${dynasties[currentIndex + 1].id}`);
    }
  };

  // 页面加载中
  if (!dynasty) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-xuan-paper to-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-china-red mx-auto mb-4"></div>
          <p className="text-gray-600 font-chinese">正在加载...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>{dynasty.name} - 朝代纪</title>
        <meta name="description" content={`了解${dynasty.name}的历史、疆域、人物和文化成就`} />
      </Head>

      <div className="min-h-screen bg-gradient-to-b from-xuan-paper to-white">
        {/* 顶部导航栏 */}
        <nav className="sticky top-0 z-50 bg-gradient-to-r from-red-900 to-red-700 text-white shadow-lg">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              {/* 返回按钮 */}
              <Link
                href="/"
                className="flex items-center gap-2 text-white hover:text-red-100 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                <span className="font-chinese">返回时间线</span>
              </Link>

              {/* 朝代名称 */}
              <h1 className="text-xl font-bold font-chinese hidden sm:block">
                {dynasty.name}
              </h1>

              {/* 朝代切换 */}
              <div className="flex gap-2">
                <button
                  onClick={handlePrevious}
                  disabled={!hasPrevious}
                  className={`px-3 py-1 rounded text-sm font-chinese transition-all ${
                    hasPrevious
                      ? 'bg-white/20 hover:bg-white/30'
                      : 'bg-white/10 text-white/50 cursor-not-allowed'
                  }`}
                >
                  ← 上一个
                </button>
                <button
                  onClick={handleNext}
                  disabled={!hasNext}
                  className={`px-3 py-1 rounded text-sm font-chinese transition-all ${
                    hasNext
                      ? 'bg-white/20 hover:bg-white/30'
                      : 'bg-white/10 text-white/50 cursor-not-allowed'
                  }`}
                >
                  下一个 →
                </button>
              </div>
            </div>
          </div>
        </nav>

        {/* 主内容区 */}
        <main className="max-w-7xl mx-auto px-4 py-8">
          {/* 头部信息区 */}
          <header className="text-center mb-10">
            <h1 className="text-5xl md:text-6xl ink-title mb-4" style={{ fontFamily: 'KaiTi, STKaiti, serif' }}>
              {dynasty.name}
            </h1>
            <p className="text-xl text-gray-600 font-chinese mb-2">
              {formatYear(dynasty.startYear)} - {formatYear(dynasty.endYear)}
            </p>
            <p className="text-gray-500 font-chinese">
              持续 {Math.abs(dynasty.endYear - dynasty.startYear)} 年
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-china-red to-transparent mx-auto mt-6"></div>
          </header>

          {/* 单列布局 */}
          <div className="max-w-4xl mx-auto space-y-8">
            {/* 基本信息 */}
            <section className="ink-card p-6">
              <h2 className="text-2xl font-bold mb-6 font-chinese flex items-center gap-2">
                <span className="text-china-red">📋</span> 基本信息
              </h2>
              <div className="space-y-4 font-chinese">
                <div className="flex items-center gap-4 py-3 border-b border-gray-100">
                  <span className="text-gray-500 text-sm w-24 flex-shrink-0">开国君主</span>
                  <p className="font-bold text-gray-800 text-lg">{dynasty.founder}</p>
                </div>
                <div className="flex items-center gap-4 py-3 border-b border-gray-100">
                  <span className="text-gray-500 text-sm w-24 flex-shrink-0">代表君主</span>
                  <p className="text-gray-800">{dynasty.representativeRulers.join('、')}</p>
                </div>
                <div className="flex items-center gap-4 py-3 border-b border-gray-100">
                  <span className="text-gray-500 text-sm w-24 flex-shrink-0">持续时间</span>
                  <p className="font-bold text-gray-800 text-lg">
                    {Math.abs(dynasty.endYear - dynasty.startYear)} 年
                  </p>
                </div>
                <div className="flex items-center gap-4 py-3">
                  <span className="text-gray-500 text-sm w-24 flex-shrink-0">历史时期</span>
                  <p className="text-gray-800">
                    {dynasty.period === 'ancient' && '上古'}
                    {dynasty.period === 'classical' && '中古'}
                    {dynasty.period === 'medieval' && '近古'}
                    {dynasty.period === 'late-imperial' && '帝国晚期'}
                    {dynasty.period === 'modern' && '近代'}
                  </p>
                </div>
              </div>
            </section>

            {/* 疆域地图和信息 */}
            <section className="ink-card p-6">
              <DynastyMap
                territory={dynasty.territory}
                dynastyName={dynasty.name}
                dynastyId={dynasty.id}
              />
              
              {/* 疆域详细信息 */}
              {dynasty.territory && (
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <h3 className="text-lg font-bold mb-4 font-chinese flex items-center gap-2">
                    <span className="text-china-red">🗺️</span> 疆域详情
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-chinese text-sm">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <span className="text-gray-500 block mb-1">都城</span>
                      <span className="text-gray-800 font-bold text-base">{dynasty.territory.capital}</span>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <span className="text-gray-500 block mb-1">疆域面积</span>
                      <span className="text-gray-800 font-bold text-base">约 {dynasty.territory.area} 万平方公里</span>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <span className="text-gray-500 block mb-1">历史时期</span>
                      <span className="text-gray-800 font-bold text-base">
                        {dynasty.period === 'ancient' && '上古'}
                        {dynasty.period === 'classical' && '中古'}
                        {dynasty.period === 'medieval' && '近古'}
                        {dynasty.period === 'late-imperial' && '帝国晚期'}
                        {dynasty.period === 'modern' && '近代'}
                      </span>
                    </div>
                  </div>
                  <div className="mt-4 p-4 bg-gradient-to-r from-red-50 to-amber-50 rounded-lg">
                    <span className="text-gray-500 text-sm block mb-2">疆域范围</span>
                    <p className="text-gray-800 font-chinese leading-relaxed">
                      {dynasty.territory.description}
                    </p>
                  </div>
                </div>
              )}
            </section>

            {/* 人物关系图谱 */}
            <section className="ink-card p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold font-chinese">人物关系图谱</h2>
                <button
                  onClick={() => setShowFamilyTree(!showFamilyTree)}
                  className="text-sm text-china-red hover:text-red-700 font-chinese"
                >
                  {showFamilyTree ? '收起' : '展开'}
                </button>
              </div>
              {showFamilyTree && (
                <>
                  <p className="text-sm text-gray-600 font-chinese text-center mb-4">
                    💡 提示：拖拽节点可调整位置，滚轮可缩放，点击节点查看详情
                  </p>
                  <FamilyTree
                    dynastyId={dynasty.id}
                    selectedPersonId={selectedPersonId}
                    onPersonSelect={setSelectedPersonId}
                  />
                  {selectedPersonId && (
                    <PersonCard
                      personId={selectedPersonId}
                      onClose={() => setSelectedPersonId(null)}
                    />
                  )}
                </>
              )}
            </section>

            {/* 历史事件 */}
            <section>
              <h2 className="text-2xl font-bold mb-6 font-chinese flex items-center gap-2">
                <span className="text-china-red">📜</span> 重要历史事件
              </h2>
              <div className="space-y-4">
                {dynasty.events.map((event, index) => (
                  <div key={index} className="ink-card p-5 hover:shadow-lg transition-shadow">
                    <div className="space-y-3 font-chinese">
                      <div className="flex items-center gap-3">
                        <span className="text-china-red font-bold text-lg">{formatYear(event.year)}</span>
                        <h3 className="font-bold text-lg text-gray-800">{event.name}</h3>
                      </div>
                      <p className="text-gray-600 leading-relaxed pl-0">
                        {event.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* 文化成就 */}
            <section>
              <h2 className="text-2xl font-bold mb-6 font-chinese flex items-center gap-2">
                <span className="text-china-red">🎨</span> 文化成就
              </h2>
              <div className="space-y-4">
                {dynasty.culturalAchievements.map((achievement, index) => (
                  <div key={index} className="ink-card p-5 border-l-4 border-china-red">
                    <h3 className="font-bold text-lg text-gray-800 font-chinese mb-2">
                      {achievement.name}
                    </h3>
                    <p className="text-sm text-gray-600 font-chinese leading-relaxed mb-2">
                      {achievement.description}
                    </p>
                    {achievement.figure && (
                      <p className="text-xs text-gray-500 font-chinese italic">
                        代表人物：{achievement.figure}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* 底部导航 */}
          <nav className="mt-12 pt-8 border-t-2 border-gray-200">
            <div className="flex justify-between items-center">
              <button
                onClick={handlePrevious}
                disabled={!hasPrevious}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-chinese transition-all ${
                  hasPrevious
                    ? 'ink-button hover:translate-x-[-4px]'
                    : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                }`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                <div className="text-left">
                  <div className="text-xs opacity-70">上一个朝代</div>
                  <div className="font-bold">{hasPrevious ? dynasties[currentIndex - 1].name : '无'}</div>
                </div>
              </button>

              <Link
                href="/"
                className="px-6 py-3 bg-gray-100 hover:bg-gray-200 rounded-lg font-chinese transition-colors text-gray-700"
              >
                返回时间线
              </Link>

              <button
                onClick={handleNext}
                disabled={!hasNext}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-chinese transition-all ${
                  hasNext
                    ? 'ink-button hover:translate-x-[4px]'
                    : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                }`}
              >
                <div className="text-right">
                  <div className="text-xs opacity-70">下一个朝代</div>
                  <div className="font-bold">{hasNext ? dynasties[currentIndex + 1].name : '无'}</div>
                </div>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </nav>
        </main>
      </div>
    </>
  );
}
