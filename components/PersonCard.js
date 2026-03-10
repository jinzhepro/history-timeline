import React from 'react';
import { historicalFigures } from '../data/dynasties';

/**
 * 人物详情卡片组件
 * 展示单个历史人物的详细信息
 * 
 * @param {string} personId - 人物 ID
 * @param {function} onClose - 关闭回调
 */
const PersonCard = ({ personId, onClose }) => {
  const person = historicalFigures.find(f => f.id === personId);

  if (!person) {
    return null;
  }

  // 获取关系类型对应的图标
  const getRelationIcon = (type) => {
    const icons = {
      'father': '👨‍👦',
      'mother': '👩‍👦',
      'son': '👦',
      'daughter': '👧',
      'brother': '👬',
      'sister': '👭',
      'spouse': '💑',
      'husband': '👨‍❤️‍👨',
      'wife': '👩‍❤️‍👨',
      'successor': '👑',
      'predecessor': '📜',
      'teacher': '👨‍🏫',
      'student': '🎓',
      'general': '⚔️',
      'advisor': '💡',
      'monarch': '🏛️',
      'friend': '🤝',
      'sworn_brother': '🍶',
      'envoy': '🐫',
      'concubine': '🌸',
      'nephew': '👦',
      'uncle': '👨‍🦱',
      'grandfather': '👴',
      'grandson': '👶'
    };
    return icons[type] || '🔗';
  };

  // 获取相关人物信息
  const getRelatedPerson = (targetId) => {
    return historicalFigures.find(f => f.id === targetId);
  };

  return (
    <div className="person-card ink-card p-6 mt-4">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-2xl font-bold font-chinese" style={{ fontFamily: 'KaiTi, STKaiti, serif', color: '#C41E3A' }}>
            {person.name}
          </h3>
          {person.formalName && (
            <p className="text-gray-600 font-chinese text-sm mt-1">
              名：{person.formalName}
            </p>
          )}
        </div>
        {onClose && (
          <button
            onClick={onClose}
            className="w-8 h-8 ink-button rounded-full text-xl flex items-center justify-center pb-1"
            aria-label="关闭人物详情"
          >
            ×
          </button>
        )}
      </div>

      <div className="ink-divider mb-4"></div>

      {/* 基本信息 */}
      <div className="space-y-3 mb-6">
        <p className="text-gray-700 font-chinese">
          <span className="font-bold text-gray-800">头衔：</span>
          {person.title}
        </p>
        {person.reign && (
          <p className="text-gray-700 font-chinese">
            <span className="font-bold text-gray-800">在位时间：</span>
            {person.reign}
          </p>
        )}
      </div>

      {/* 人物描述 */}
      <div className="mb-6">
        <h4 className="font-bold text-gray-800 mb-2 font-chinese">人物简介</h4>
        <p className="text-gray-700 font-chinese leading-relaxed text-sm">
          {person.description}
        </p>
      </div>

      {/* 关系网络 */}
      {person.relations && person.relations.length > 0 && (
        <div>
          <h4 className="font-bold text-gray-800 mb-3 font-chinese">社会关系</h4>
          <div className="space-y-2">
            {person.relations.map((relation, index) => {
              const relatedPerson = getRelatedPerson(relation.target);
              return (
                <div
                  key={index}
                  className="flex items-center gap-3 p-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
                >
                  <span className="text-xl">{getRelationIcon(relation.type)}</span>
                  <div className="flex-1">
                    <p className="text-sm font-bold text-gray-800 font-chinese">
                      {relation.label}：{relatedPerson ? relatedPerson.name : relation.target}
                    </p>
                    {relatedPerson && (
                      <p className="text-xs text-gray-600 font-chinese">
                        {relatedPerson.title}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default PersonCard;
