import React, { useEffect, useRef, useState, useMemo } from 'react';
import * as echarts from 'echarts';
import { historicalFigures } from '../data/dynasties';

/**
 * 人物关系图谱组件 - 使用 ECharts 原生 API
 * 相比 echarts-for-react 提供更好的控制
 * 
 * @param {string} dynastyId - 当前朝代 ID
 * @param {string} selectedPersonId - 选中的历史人物 ID
 * @param {function} onPersonSelect - 人物选择回调函数
 */
const FamilyTree = ({ dynastyId, selectedPersonId, onPersonSelect }) => {
  const chartContainerRef = useRef(null);
  const chartInstance = useRef(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // 根据朝代筛选人物
  const dynastyFigures = useMemo(() => {
    if (!dynastyId) return [];
    return historicalFigures.filter(figure => figure.dynasty === dynastyId);
  }, [dynastyId]);

  // 初始化图表
  useEffect(() => {
    if (!chartContainerRef.current || dynastyFigures.length === 0) {
      setIsLoading(false);
      return;
    }

    try {
      // 销毁旧实例
      if (chartInstance.current) {
        chartInstance.current.dispose();
        chartInstance.current = null;
      }

      // 创建新实例
      chartInstance.current = echarts.init(chartContainerRef.current, null, {
        renderer: 'svg',
        devicePixelRatio: window.devicePixelRatio || 1
      });

      // 创建人物 ID 映射
      const figureMap = {};
      dynastyFigures.forEach((figure, index) => {
        figureMap[figure.id] = index;
      });

      // 构建节点数据
      const nodes = dynastyFigures.map(figure => ({
        id: figure.id,
        name: figure.formalName || figure.name,
        value: figure.id,
        symbolSize: 50,
        itemStyle: {
          color: '#C41E3A',
          borderColor: '#8B4513',
          borderWidth: 2,
          shadowColor: 'rgba(0, 0, 0, 0.3)',
          shadowBlur: 10
        },
        label: {
          show: true,
          position: 'bottom',
          fontSize: 14,
          fontWeight: 'bold',
          fontFamily: 'KaiTi, STKaiti, serif',
          color: '#2C2C2C',
          formatter: '{b}'
        }
      }));

      // 构建关系连线
      const links = [];
      dynastyFigures.forEach(figure => {
        if (figure.relations && figure.relations.length > 0) {
          figure.relations.forEach(relation => {
            if (figureMap.hasOwnProperty(relation.target)) {
              links.push({
                source: figure.id,
                target: relation.target,
                label: {
                  show: true,
                  formatter: relation.label,
                  fontSize: 10,
                  color: '#666',
                  fontFamily: 'KaiTi, STKaiti, serif',
                  backgroundColor: 'rgba(255,255,255,0.8)',
                  padding: [2, 4],
                  borderRadius: 3
                },
                lineStyle: {
                  color: '#C41E3A',
                  width: 2,
                  curveness: 0.3,
                  type: 'solid'
                }
              });
            }
          });
        }
      });

      // 配置项
      const option = {
        tooltip: {
          show: true,
          trigger: 'item',
          triggerOn: 'mousemove',
          backgroundColor: 'rgba(255, 255, 255, 0.98)',
          borderColor: '#C41E3A',
          borderWidth: 2,
          padding: [10, 14],
          textStyle: {
            color: '#2C2C2C',
            fontSize: 12,
            lineHeight: 18
          },
          formatter: (params) => {
            if (params.dataType === 'node') {
              const figure = historicalFigures.find(f => f.id === params.data.id);
              if (figure) {
                const displayName = figure.formalName ? `${figure.name} (${figure.formalName})` : figure.name;
                return `
                  <div style="max-width: 280px;">
                    <div style="font-size: 14px; font-weight: bold; color: #C41E3A; margin-bottom: 6px;">${displayName}</div>
                    <div style="font-size: 12px; font-weight: bold; margin-bottom: 4px;">${figure.title}</div>
                    ${figure.reign ? `<div style="font-size: 11px; color: #666; margin-bottom: 4px;">在位：${figure.reign}</div>` : ''}
                    <div style="font-size: 11px; color: #333; line-height: 1.5; max-width: 260px; word-break: break-word;">${figure.description}</div>
                  </div>
                `;
              }
            }
            return params.name;
          },
          extraCssText: 'box-shadow: 0 2px 8px rgba(0,0,0,0.15); border-radius: 4px; max-width: 300px;'
        },
        series: [
          {
            type: 'graph',
            layout: 'force',
            data: nodes,
            links: links,
            roam: true,
            draggable: true,
            scaleLimit: {
              min: 0.3,
              max: 3
            },
            label: {
              show: true,
              position: 'bottom',
              distance: 8,
              fontSize: 12,
              fontWeight: 'bold',
              fontFamily: 'KaiTi, STKaiti, serif',
              color: '#2C2C2C',
              formatter: (params) => {
                const name = params.name;
                if (name && name.length > 4) {
                  return name.substring(0, 4) + '...';
                }
                return name;
              }
            },
            itemStyle: {
              color: '#C41E3A',
              borderColor: '#8B4513',
              borderWidth: 2,
              shadowColor: 'rgba(0, 0, 0, 0.3)',
              shadowBlur: 10
            },
            lineStyle: {
              color: '#C41E3A',
              width: 2,
              curveness: 0.3,
              type: 'solid'
            },
            edgeSymbol: ['circle', 'arrow'],
            edgeSymbolSize: [4, 10],
            emphasis: {
              focus: 'adjacency',
              lineStyle: {
                width: 4,
                color: '#C41E3A',
                shadowColor: 'rgba(196, 30, 58, 0.5)',
                shadowBlur: 10
              },
              itemStyle: {
                shadowBlur: 20,
                shadowColor: 'rgba(196, 30, 58, 0.5)'
              }
            },
            force: {
              repulsion: 800,
              edgeLength: 200,
              gravity: 0.3
            }
          }
        ]
      };

      // 设置配置项
      chartInstance.current.setOption(option, {
        notMerge: true,
        lazyUpdate: false
      });

      // 添加点击事件
      chartInstance.current.on('click', (params) => {
        if (params.dataType === 'node' && onPersonSelect) {
          onPersonSelect(params.data.id);
        }
      });

      // 添加鼠标悬停事件
      chartInstance.current.on('mouseover', (params) => {
        if (params.dataType === 'node') {
          chartInstance.current.getDom().style.cursor = 'pointer';
        } else {
          chartInstance.current.getDom().style.cursor = 'default';
        }
      });

      // 响应式调整
      const handleResize = () => {
        if (chartInstance.current) {
          chartInstance.current.resize();
        }
      };

      window.addEventListener('resize', handleResize);
      
      // 初始调整
      setTimeout(() => {
        handleResize();
        setIsLoading(false);
      }, 100);

      // 清理
      return () => {
        window.removeEventListener('resize', handleResize);
        if (chartInstance.current) {
          chartInstance.current.dispose();
          chartInstance.current = null;
        }
      };
    } catch (err) {
      console.error('[FamilyTree] Error initializing chart:', err);
      setError(err.message);
      setIsLoading(false);
    }
  }, [dynastyId, dynastyFigures, onPersonSelect]);

  if (dynastyFigures.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500">
        <p className="font-chinese text-lg mb-2">该朝代暂无详细人物关系数据</p>
        <p className="text-sm">当前朝代 ID: {dynastyId}</p>
        <p className="text-sm mt-2">已加载人物总数：{historicalFigures.length}</p>
      </div>
    );
  }

  return (
    <div className="family-tree-container">
      <div className="mb-2 text-sm text-gray-600 font-chinese flex justify-between items-center">
        <span>已加载 {dynastyFigures.length} 位人物</span>
        {isLoading && <span className="text-gray-400">图表加载中...</span>}
      </div>
      {error && (
        <div className="mb-2 text-sm text-red-600 font-chinese">
          加载失败：{error}
        </div>
      )}
      <div
        ref={chartContainerRef}
        style={{
          height: '400px',
          width: '100%',
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          borderRadius: '4px'
        }}
      />
    </div>
  );
};

export default FamilyTree;
