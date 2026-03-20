import React from 'react';
import Link from 'next/link';

/**
 * 面包屑导航组件 - 极简版
 */
const Breadcrumb = ({ items }) => {
  return (
    <nav className="flex items-center gap-2 text-sm font-chinese flex-wrap">
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <React.Fragment key={item.href || index}>
            {index > 0 && (
              <span className="text-gray opacity-40" aria-hidden="true">/</span>
            )}

            {isLast ? (
              <span className="text-ink font-medium">{item.label}</span>
            ) : (
              <Link
                href={item.href}
                className="text-gray hover:text-ink transition-colors"
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
