import React from 'react';

/**
 * 朝代世系表组件 - 极简版
 */

const EmperorCard = ({ node }) => {
  const formattedName = node.name.includes('（') || node.name.includes('(') ? node.name : (node.isFounder ? node.name : (node.name.length === 1 ? node.name + '帝' : node.name));

  return (
    <div className={`border rounded p-4 mb-3 ${node.isFounder ? 'border-[#B93A3A] bg-[rgba(185,58,58,0.04)]' : 'border-[rgba(0,0,0,0.12)] bg-paper'}`}>
      {node.isFounder && (
        <span className="text-xs text-[#B93A3A] font-chinese float-right">开国皇帝</span>
      )}
      <div className="text-base font-bold font-chinese text-ink mb-2">
        {formattedName}
      </div>
      <div className="flex gap-4 text-sm text-gray font-chinese mb-2">
        {node.reign && (
          <span><span className="opacity-60">年号：</span><span className="text-ink">{node.reign}</span></span>
        )}
        {node.years && (
          <span><span className="opacity-60">在位：</span><span className="text-ink">{node.years}</span></span>
        )}
      </div>
      {node.description && (
        <div className="text-sm text-ink leading-relaxed font-chinese">
          {node.description}
        </div>
      )}
    </div>
  );
};

const DynastyLineage = ({ dynasty }) => {
  if (!dynasty || !dynasty.lineage || !Array.isArray(dynasty.lineage)) {
    return (
      <div className="border border-[rgba(0,0,0,0.12)] rounded p-6 text-center">
        <p className="text-gray font-chinese text-sm">暂无世系数据</p>
      </div>
    );
  }

  const emperors = dynasty.lineage;

  return (
    <div>
      <div className="text-center mb-4 pb-4 border-b border-[rgba(0,0,0,0.08)]">
        <h2 className="text-base font-bold font-chinese text-ink tracking-wider">{dynasty.name}世系表</h2>
      </div>

      <div className="flex items-center justify-center gap-4 text-sm text-gray font-chinese mb-4 pb-4 border-b border-[rgba(0,0,0,0.06)]">
        <span>{dynasty.lineage[0]?.years || `${dynasty.startYear}-${dynasty.endYear}`}</span>
        <span className="opacity-40">|</span>
        <span>共{emperors.length}位皇帝</span>
      </div>

      <div>
        {emperors.map((emperor, index) => (
          <EmperorCard key={index} node={emperor} />
        ))}
      </div>

      <p className="mt-4 text-xs text-gray font-chinese text-center opacity-60">
        红色标记为开国皇帝
      </p>
    </div>
  );
};

export default DynastyLineage;
