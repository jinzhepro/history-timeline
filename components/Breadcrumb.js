import React from 'react';
import Link from 'next/link';

/**
 * 面包屑导航组件 - 展示页面层级关系
 * 
 * @param {Array} items - 面包屑项目数组
 * @param {string} items[].label - 显示文本
 * @param {string} items[].href - 链接地址
 */
const Breadcrumb = ({ items }) => {
  const containerStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    padding: '12px 16px',
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    borderRadius: '8px',
    marginBottom: '20px',
    fontSize: '14px',
    fontFamily: "'KaiTi', 'STKaiti', 'SimSun', serif",
    flexWrap: 'wrap'
  };

  const linkStyle = {
    color: '#666',
    textDecoration: 'none',
    transition: 'all 0.3s ease'
  };

  const linkHoverStyle = {
    color: '#C41E3A'
  };

  const activeStyle = {
    color: '#2C2C2C',
    fontWeight: 'bold'
  };

  const separatorStyle = {
    color: '#999',
    margin: '0 4px'
  };

  return (
    <nav style={containerStyle} aria-label="面包屑导航">
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <React.Fragment key={item.href || index}>
            {index > 0 && (
              <span style={separatorStyle} aria-hidden="true">
                ›
              </span>
            )}
            
            {isLast ? (
              <span style={activeStyle} aria-current="page">
                {item.label}
              </span>
            ) : (
              <Link
                href={item.href}
                style={linkStyle}
                onMouseEnter={(e) => Object.assign(e.currentTarget.style, linkHoverStyle)}
                onMouseLeave={(e) => Object.assign(e.currentTarget.style, linkStyle)}
              >
                {item.label}
              </Link>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
};

export default Breadcrumb;
