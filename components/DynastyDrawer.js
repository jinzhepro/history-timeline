import React, { useState, useEffect } from 'react';
import FamilyTree from './FamilyTree';
// import FamilyTreeNative from './FamilyTreeNative'; // 备用版本
import PersonCard from './PersonCard';
import DynastyMap from './DynastyMap';

/**
 * 朝代详情抽屉组件 - 侧边滑出式
 * 功能：
 * - 从右侧滑出
 * - 显示详细信息
 * - 支持上一个/下一个导航
 */
const DynastyDrawer = ({ dynasty, onClose, onNext, onPrevious, hasNext, hasPrevious }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedPersonId, setSelectedPersonId] = useState(null);
  const [showFamilyTree, setShowFamilyTree] = useState(false);
  const [showMap, setShowMap] = useState(false);

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

    document.documentElement.classList.add('scroll-locked');
    document.body.classList.add('scroll-locked');

    return () => {
      clearTimeout(timer);
      document.documentElement.classList.remove('scroll-locked');
      document.body.classList.remove('scroll-locked');
    };
  }, []);

  const handleCloseClick = (e) => {
    e.stopPropagation();
    setIsVisible(false);
    setTimeout(() => {
      onClose();
    }, 300);
  };

  /**
   * 处理下一个朝代按钮点击
   * 切换朝代后将抽屉滚动到顶部
   */
  const handleNext = (e) => {
    onNext();
    // 将抽屉内容区域滚动到顶部
    const drawerContent = document.querySelector('.overflow-y-auto.h-full');
    if (drawerContent) {
      drawerContent.scrollTop = 0;
    }
  };

  /**
   * 处理上一个朝代按钮点击
   * 切换朝代后将抽屉滚动到顶部
   */
  const handlePrevious = (e) => {
    onPrevious();
    // 将抽屉内容区域滚动到顶部
    const drawerContent = document.querySelector('.overflow-y-auto.h-full');
    if (drawerContent) {
      drawerContent.scrollTop = 0;
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      handleCloseClick(e);
    }
  };

  /**
   * 处理背景遮罩点击事件
   * 点击黑色半透明背景时关闭抽屉
   */
  const handleBackdropClick = (e) => {
    // 确保点击的是背景遮罩本身，而不是抽屉内容
    if (e.target === e.currentTarget || e.target.classList.contains('backdrop-overlay')) {
      handleCloseClick(e);
    }
  };

  if (!dynasty) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-[60] flex justify-end"
      onKeyDown={handleKeyDown}
      tabIndex={-1}
      autoFocus
    >
      {/* 背景遮罩 - 点击可关闭抽屉 */}
      <div
        className="backdrop-overlay absolute inset-0 bg-black bg-opacity-30 transition-opacity cursor-pointer"
        onClick={handleBackdropClick}
      ></div>

      {/* 抽屉面板 */}
      <div
        className={`
          relative w-full max-w-2xl bg-gradient-to-b from-white to-xuan-paper
          shadow-2xl overflow-y-auto h-full
          transform transition-transform duration-300 ease-out
          ${isVisible ? 'translate-x-0' : 'translate-x-full'}
        `}
        role="dialog"
        aria-modal="true"
        aria-labelledby={`drawer-title-${dynasty.id}`}
      >
        {/* 顶部装饰条 */}
        <div className="sticky top-0 left-0 right-0 h-2 bg-gradient-to-r from-amber-700 via-china-red to-amber-900 z-[60]"></div>

        {/* 关闭按钮区域 - 粘性定位 */}
        <div className="sticky top-2 right-0 z-[60] flex justify-end px-4 py-2 bg-gradient-to-b from-white to-transparent pointer-events-none">
          <button
            className="w-10 h-10 ink-button rounded-full text-2xl flex items-center justify-center pb-1 pointer-events-auto shadow-lg"
            onClick={handleCloseClick}
            aria-label="关闭详情"
            style={{
              background: 'linear-gradient(135deg, var(--ink-black) 0%, var(--ink-light) 100%)',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)'
            }}
          >
            ×
          </button>
        </div>

        {/* 内容区域 */}
        <div className="p-8 pt-4">
          {/* 标题 */}
          <h2
            className="text-4xl ink-title text-center mb-2"
            id={`drawer-title-${dynasty.id}`}
            style={{ fontFamily: 'KaiTi, STKaiti, serif' }}
          >
            {dynasty.name}
          </h2>

          {/* 时间范围 */}
          <p className="text-center text-lg text-gray-600 mb-6 font-chinese">
            {formatYear(dynasty.startYear)} - {formatYear(dynasty.endYear)}
          </p>

          <div className="ink-divider mb-6"></div>

          {/* 功能按钮组 */}
          <div className="mb-6 space-y-3">
            {/* 疆域地图按钮 */}
            <button
              onClick={() => setShowMap(!showMap)}
              className="w-full py-3 px-6 ink-button rounded-lg font-chinese flex items-center justify-center gap-2"
            >
              <span className="text-xl">🗺️</span>
              {showMap ? '隐藏疆域地图' : '查看疆域地图'}
            </button>

            {/* 人物关系图谱按钮 */}
            <button
              onClick={() => setShowFamilyTree(!showFamilyTree)}
              className="w-full py-3 px-6 ink-button rounded-lg font-chinese flex items-center justify-center gap-2"
            >
              <span className="text-xl">👥</span>
              {showFamilyTree ? '隐藏人物关系图谱' : '查看人物关系图谱'}
            </button>
          </div>

          {/* 疆域地图区域 */}
          {showMap && (
            <section className="ink-card p-4 mb-6">
              <DynastyMap
                territory={dynasty.territory}
                dynastyName={dynasty.name}
                dynastyId={dynasty.id}
              />
            </section>
          )}

          {/* 人物关系图谱区域 */}
          {showFamilyTree && (
            <section className="ink-card p-4 mb-6">
              <h3 className="text-xl font-bold mb-4 font-chinese text-center">
                {dynasty.name}人物关系图谱
              </h3>
              <p className="text-sm text-gray-600 font-chinese text-center mb-4">
                💡 提示：拖拽节点可调整位置，滚轮可缩放，点击节点查看详情
              </p>
              <FamilyTree
                dynastyId={dynasty.id}
                selectedPersonId={selectedPersonId}
                onPersonSelect={setSelectedPersonId}
              />

              {/* 选中人物详情 */}
              {selectedPersonId && (
                <PersonCard
                  personId={selectedPersonId}
                  onClose={() => setSelectedPersonId(null)}
                />
              )}
            </section>
          )}

          <div className="space-y-8">
            {/* 基本信息 */}
            <section className="ink-card p-6">
              <h3 className="text-xl font-bold mb-4 font-chinese">基本信息</h3>
              <div className="space-y-3 font-chinese">
                <p className="text-gray-700">
                  <span className="font-bold text-gray-800">开国君主：</span>
                  {dynasty.founder}
                </p>
                <p className="text-gray-700">
                  <span className="font-bold text-gray-800">代表君主：</span>
                  {dynasty.representativeRulers.join('、')}
                </p>
                <p className="text-gray-700">
                  <span className="font-bold text-gray-800">持续时间：</span>
                  {Math.abs(dynasty.endYear - dynasty.startYear)}年
                </p>
              </div>
            </section>

            {/* 重要历史事件 */}
            <section>
              <h3 className="text-xl font-bold mb-4 font-chinese">重要历史事件</h3>
              <div className="space-y-4">
                {dynasty.events.map((event, index) => (
                  <div key={index} className="ink-card p-4">
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 text-sm text-gray-600 font-chinese pt-1 whitespace-nowrap">
                        {formatYear(event.year)}
                      </div>
                      <div className="flex-1">
                        <p className="font-bold text-gray-800 font-chinese mb-1">{event.name}</p>
                        <p className="text-gray-700 text-sm font-chinese leading-relaxed">{event.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* 文化成就 */}
            <section>
              <h3 className="text-xl font-bold mb-4 font-chinese">文化成就</h3>
              <div className="space-y-4">
                {dynasty.culturalAchievements.map((achievement, index) => (
                  <div key={index} className="ink-card p-4">
                    <p className="font-bold text-gray-800 font-chinese mb-2">{achievement.name}</p>
                    <p className="text-gray-700 text-sm font-chinese leading-relaxed mb-2">{achievement.description}</p>
                    {achievement.figure && (
                      <p className="text-gray-600 text-sm font-chinese italic">
                        代表人物：{achievement.figure}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* 导航按钮 */}
          <div className="mt-8 flex justify-between gap-4">
            <button
              onClick={handlePrevious}
              disabled={!hasPrevious}
              className={`
                flex-1 py-3 px-6 rounded-lg font-chinese
                transition-all duration-300
                ${hasPrevious
                  ? 'ink-button hover:translate-x-1'
                  : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                }
              `}
            >
              ← 上一个朝代
            </button>
            <button
              onClick={handleNext}
              disabled={!hasNext}
              className={`
                flex-1 py-3 px-6 rounded-lg font-chinese
                transition-all duration-300
                ${hasNext
                  ? 'ink-button hover:translate-x-1'
                  : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                }
              `}
            >
              下一个朝代 →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DynastyDrawer;
