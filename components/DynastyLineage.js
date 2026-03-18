import React from 'react';

/**
 * 格式化皇帝名称，确保包含庙号/谥号和本名
 * @param {string} name - 原始名称
 * @param {boolean} isFounder - 是否为开国皇帝
 * @returns {string} 格式化后的名称
 */
const formatEmperorName = (name, isFounder = false) => {
  // 如果已经有括号格式，直接返回
  if (name.includes('（') || name.includes('(')) {
    return name;
  }
  
  // 开国皇帝特殊处理
  if (isFounder) {
    return name;
  }
  
  // 单字名称，可能是名，添加"帝"字
  if (name.length === 1) {
    return name + '帝';
  }
  
  // 其他情况直接返回
  return name;
};

/**
 * 解析在位时间字符串，返回起始年份（用于排序）
 * @param {string} years - 在位时间字符串
 * @returns {number} 起始年份
 */
const parseYear = (years) => {
  if (!years) return 0;
  const match = years.match(/([前]?)(\d+)/);
  if (!match) return 0;
  const isBCE = match[1] === '前';
  const year = parseInt(match[2], 10);
  return isBCE ? -year : year;
};



/**
 * 单个皇帝卡片组件
 * @param {Object} node - 皇帝节点数据
 */
const EmperorCard = ({ node }) => {
  const formattedName = formatEmperorName(node.name, node.isFounder);
  const cardStyle = {
    backgroundColor: node.isFounder ? 'rgba(196, 30, 58, 0.05)' : 'rgba(255, 255, 255, 0.9)',
    border: node.isFounder ? '2px solid #C41E3A' : '1px solid #e0e0e0',
    borderRadius: '8px',
    padding: '16px',
    transition: 'all 0.3s ease',
    boxShadow: node.isFounder ? '0 2px 8px rgba(196, 30, 58, 0.2)' : '0 1px 3px rgba(0, 0, 0, 0.05)',
    position: 'relative',
    overflow: 'hidden'
  };

  const nameStyle = {
    fontSize: '16px',
    fontWeight: node.isFounder ? 'bold' : 'normal',
    color: node.isFounder ? '#C41E3A' : '#2C2C2C',
    fontFamily: "'KaiTi', 'STKaiti', 'SimSun', serif",
    marginBottom: '8px'
  };

  const infoStyle = {
    display: 'flex',
    gap: '16px',
    fontSize: '13px',
    color: '#666',
    marginBottom: '8px',
    fontFamily: "'KaiTi', 'STKaiti', 'SimSun', serif",
    flexWrap: 'wrap'
  };

  const descStyle = {
    fontSize: '13px',
    color: '#555',
    lineHeight: '1.6',
    fontFamily: "'KaiTi', 'STKaiti', 'SimSun', serif"
  };

  return (
    <div style={cardStyle}>
      {node.isFounder && (
        <div style={{
          position: 'absolute',
          top: '0',
          right: '0',
          backgroundColor: '#C41E3A',
          color: 'white',
          fontSize: '11px',
          padding: '2px 8px',
          borderRadius: '0 0 0 8px',
          fontFamily: "'KaiTi', 'STKaiti', 'SimSun', serif"
        }}>
          开国皇帝
        </div>
      )}
      <div style={nameStyle}>
        {formattedName}
      </div>
      <div style={infoStyle}>
        {node.reign && (
          <span>
            <span style={{ color: '#999' }}>年号：</span>
            <span style={{ fontWeight: 'bold' }}>{node.reign}</span>
          </span>
        )}
        {node.years && (
          <span>
            <span style={{ color: '#999' }}>在位：</span>
            <span style={{ fontWeight: 'bold' }}>{node.years}</span>
          </span>
        )}
      </div>
      {node.description && (
        <div style={descStyle}>
          {node.description}
        </div>
      )}
    </div>
  );
};

/**
 * 朝代世系表组件 - 卡片式线性展示（按在位时间排序）
 * 
 * @param {Object} dynasty - 朝代数据对象
 */
const DynastyLineage = ({ dynasty }) => {
  if (!dynasty || !dynasty.lineage || !Array.isArray(dynasty.lineage)) {
    return (
      <div className="ink-card" style={{ padding: '20px', textAlign: 'center' }}>
        <p style={{ color: '#666', fontFamily: "'KaiTi', 'STKaiti', 'SimSun', serif" }}>
          暂无世系数据
        </p>
      </div>
    );
  }

  const emperors = dynasty.lineage;

  const containerStyle = {
    padding: '20px',
    backgroundColor: 'rgba(245, 245, 240, 0.5)',
    borderRadius: '8px'
  };

  const titleStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#2C2C2C',
    fontFamily: "'KaiTi', 'STKaiti', 'SimSun', serif",
    marginBottom: '20px',
    textAlign: 'center',
    borderBottom: '2px solid #C41E3A',
    paddingBottom: '10px'
  };

  const lineageStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: '20px',
    borderRadius: '8px',
    border: '1px solid #e0e0e0'
  };

  const dynastyInfoStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '12px',
    marginBottom: '20px',
    padding: '12px',
    backgroundColor: 'rgba(196, 30, 58, 0.1)',
    borderRadius: '6px',
    flexWrap: 'wrap'
  };

  const hintStyle = {
    marginTop: '16px',
    padding: '12px',
    backgroundColor: 'rgba(245, 245, 240, 0.8)',
    borderRadius: '4px',
    fontSize: '13px',
    color: '#666',
    fontFamily: "'KaiTi', 'STKaiti', 'SimSun', serif",
    textAlign: 'center'
  };

  // 时间轴连接线样式
  const timelineContainerStyle = {
    position: 'relative',
    paddingLeft: '20px'
  };

  const lineStyle = {
    position: 'absolute',
    left: '0',
    top: '0',
    bottom: '0',
    width: '2px',
    backgroundColor: '#8B4513',
    opacity: '0.3'
  };

  return (
    <div className="ink-card" style={containerStyle}>
      <h2 style={titleStyle}>{dynasty.name}世系表</h2>
      
      <div style={dynastyInfoStyle}>
        <span style={{ fontSize: '14px', fontFamily: "'KaiTi', 'STKaiti', 'SimSun', serif" }}>
          📜 {dynasty.lineage[0]?.years || `${dynasty.startYear > 0 ? dynasty.startYear : '前' + Math.abs(dynasty.startYear)}-${dynasty.endYear > 0 ? dynasty.endYear : '前' + Math.abs(dynasty.endYear)}`}
        </span>
        <span style={{ color: '#999' }}>|</span>
        <span style={{ fontSize: '14px', fontFamily: "'KaiTi', 'STKaiti', 'SimSun', serif" }}>
          共{emperors.length}位皇帝
        </span>
      </div>

      <div style={lineageStyle}>
        <div style={timelineContainerStyle}>
          <div style={lineStyle} />
          {emperors.map((emperor, index) => (
            <div
              key={index}
              style={{
                position: 'relative',
                marginBottom: '16px',
                paddingLeft: '20px'
              }}
            >
              {/* 时间轴节点 */}
              <div style={{
                position: 'absolute',
                left: '-20px',
                top: '20px',
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                backgroundColor: emperor.isFounder ? '#C41E3A' : '#8B4513',
                border: '2px solid white',
                boxShadow: '0 0 0 2px #8B4513',
                zIndex: '1'
              }} />
              <EmperorCard node={emperor} />
            </div>
          ))}
        </div>
      </div>

      <div style={hintStyle}>
        💡 提示：红色标记为开国皇帝，世系表按在位时间顺序排列
      </div>
    </div>
  );
};

export default DynastyLineage;
