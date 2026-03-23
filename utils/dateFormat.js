/**
 * 日期格式化工具函数
 */

/**
 * 格式化年份
 * @param {number} year - 年份
 * @returns {string} 格式化后的年份字符串
 */
export const formatYear = (year) => {
  if (year < 0) {
    return `公元前${Math.abs(year)}年`;
  }
  return `公元${year}年`;
};

/**
 * 获取时期名称
 * @param {string} period - 时期标识
 * @returns {string} 时期名称
 */
export const getPeriodName = (period) => {
  const names = {
    'ancient': '上古',
    'classical': '中古',
    'medieval': '近古',
    'late-imperial': '帝国晚期',
    'modern': '近代'
  };
  return names[period] || period;
};

/**
 * 获取时期颜色
 * @param {string} period - 时期标识
 * @returns {string} 颜色值
 */
export const getPeriodColor = (period) => {
  const colors = {
    'ancient': '#8B6F47',
    'classical': '#B93A3A',
    'medieval': '#4A6FA5',
    'late-imperial': '#2D7A3E',
    'modern': '#6B7280'
  };
  return colors[period] || '#1A1A1A';
};
