/**
 * 朝代疆域地图组件
 * 使用 ECharts 展示各朝代疆域范围
 * 
 * 功能特性：
 * - 展示中国地图及朝代疆域高亮
 * - 支持缩放和平移
 * - 显示疆域信息和主要城市
 * - 水墨风格配色
 * 
 * @param {Object} props - 组件属性
 * @param {Object} props.territory - 疆域数据
 * @param {string} props.dynastyName - 朝代名称
 */

import React, { useEffect, useState, useRef } from 'react';
import ReactECharts from 'echarts-for-react';
import * as echarts from 'echarts';

/**
 * 各朝代疆域对应的省份列表（使用中文省份名称，带"省"字）
 */
const DYNASTY_TERRITORIES = {
  'xia': ['河南省', '山西省', '陕西省', '河北省', '山东省'], // 夏朝：中原核心区域
  'shang': ['河南省', '河北省', '山东省', '山西省', '陕西省', '安徽省'], // 商朝：扩展至东部
  'western-zhou': ['陕西省', '河南省', '山西省', '河北省', '山东省', '湖北省', '安徽省'], // 西周
  'eastern-zhou': ['陕西省', '河南省', '山西省', '河北省', '山东省', '湖北省', '安徽省', '江苏省', '浙江省', '四川省', '重庆市', '湖南省'], // 东周/春秋战国
  'qin': ['陕西省', '甘肃省', '宁夏回族自治区', '河南省', '山西省', '河北省', '山东省', '湖北省', '安徽省', '江苏省', '浙江省', '江西省', '湖南省', '四川省', '重庆市', '广东省', '广西壮族自治区', '福建省', '云南省', '贵州省', '辽宁省', '内蒙古自治区', '北京市', '天津市'], // 秦朝统一
  'western-han': ['陕西省', '甘肃省', '宁夏回族自治区', '河南省', '山西省', '河北省', '山东省', '湖北省', '安徽省', '江苏省', '浙江省', '江西省', '湖南省', '四川省', '重庆市', '广东省', '广西壮族自治区', '福建省', '云南省', '贵州省', '辽宁省', '吉林省', '黑龙江省', '内蒙古自治区', '北京市', '天津市', '新疆维吾尔自治区'], // 西汉扩展西域
  'eastern-han': ['陕西省', '甘肃省', '宁夏回族自治区', '河南省', '山西省', '河北省', '山东省', '湖北省', '安徽省', '江苏省', '浙江省', '江西省', '湖南省', '四川省', '重庆市', '广东省', '广西壮族自治区', '福建省', '云南省', '贵州省', '辽宁省', '内蒙古自治区', '北京市', '天津市'], // 东汉
  'three-kingdoms': ['陕西省', '甘肃省', '宁夏回族自治区', '河南省', '山西省', '河北省', '山东省', '湖北省', '安徽省', '江苏省', '浙江省', '江西省', '湖南省', '四川省', '重庆市', '广东省', '广西壮族自治区', '福建省', '云南省', '贵州省', '辽宁省', '内蒙古自治区', '北京市', '天津市'], // 三国
  'western-jin': ['陕西省', '甘肃省', '宁夏回族自治区', '河南省', '山西省', '河北省', '山东省', '湖北省', '安徽省', '江苏省', '浙江省', '江西省', '湖南省', '四川省', '重庆市', '广东省', '广西壮族自治区', '福建省', '云南省', '贵州省', '辽宁省', '内蒙古自治区', '北京市', '天津市'], // 西晋短暂统一
  'eastern-jin': ['江苏省', '浙江省', '安徽省', '江西省', '湖北省', '湖南省', '四川省', '重庆市', '福建省', '广东省', '广西壮族自治区', '贵州省', '云南省'], // 东晋
  'northern-southern-dynasties': ['江苏省', '浙江省', '安徽省', '江西省', '湖北省', '湖南省', '四川省', '重庆市', '福建省', '广东省', '广西壮族自治区', '贵州省', '云南省', '河南省', '河北省', '山东省', '山西省', '陕西省', '甘肃省', '内蒙古自治区'], // 南北朝
  'sui': ['陕西省', '甘肃省', '宁夏回族自治区', '河南省', '山西省', '河北省', '山东省', '湖北省', '安徽省', '江苏省', '浙江省', '江西省', '湖南省', '四川省', '重庆市', '广东省', '广西壮族自治区', '福建省', '云南省', '贵州省', '辽宁省', '内蒙古自治区', '北京市', '天津市'], // 隋朝统一
  'tang': ['陕西省', '甘肃省', '宁夏回族自治区', '河南省', '山西省', '河北省', '山东省', '湖北省', '安徽省', '江苏省', '浙江省', '江西省', '湖南省', '四川省', '重庆市', '广东省', '广西壮族自治区', '福建省', '云南省', '贵州省', '辽宁省', '吉林省', '黑龙江省', '内蒙古自治区', '北京市', '天津市', '新疆维吾尔自治区', '青海省', '西藏自治区'], // 唐朝极盛
  'five-dynasties': ['河南省', '山西省', '河北省', '山东省', '陕西省', '甘肃省', '宁夏回族自治区', '安徽省', '江苏省', '湖北省'], // 五代
  'northern-song': ['河南省', '山西省', '河北省', '山东省', '陕西省', '湖北省', '安徽省', '江苏省', '浙江省', '江西省', '湖南省', '四川省', '重庆市', '福建省', '广东省', '广西壮族自治区', '贵州省', '云南省', '甘肃省', '宁夏回族自治区', '辽宁省', '北京市', '天津市', '内蒙古自治区'], // 北宋
  'southern-song': ['江苏省', '浙江省', '安徽省', '江西省', '湖北省', '湖南省', '四川省', '重庆市', '福建省', '广东省', '广西壮族自治区', '贵州省', '云南省'], // 南宋
  'yuan': ['北京市', '天津市', '河北省', '山西省', '内蒙古自治区', '辽宁省', '吉林省', '黑龙江省', '上海市', '江苏省', '浙江省', '安徽省', '福建省', '江西省', '山东省', '河南省', '湖北省', '湖南省', '广东省', '广西壮族自治区', '海南省', '重庆市', '四川省', '贵州省', '云南省', '西藏自治区', '陕西省', '甘肃省', '青海省', '宁夏回族自治区', '新疆维吾尔自治区', '台湾省', '香港特别行政区', '澳门特别行政区'], // 元朝最大
  'ming': ['北京市', '天津市', '河北省', '山西省', '内蒙古自治区', '辽宁省', '吉林省', '黑龙江省', '上海市', '江苏省', '浙江省', '安徽省', '福建省', '江西省', '山东省', '河南省', '湖北省', '湖南省', '广东省', '广西壮族自治区', '海南省', '重庆市', '四川省', '贵州省', '云南省', '西藏自治区', '陕西省', '甘肃省', '青海省', '宁夏回族自治区', '新疆维吾尔自治区', '台湾省'], // 明朝
  'qing': ['北京市', '天津市', '河北省', '山西省', '内蒙古自治区', '辽宁省', '吉林省', '黑龙江省', '上海市', '江苏省', '浙江省', '安徽省', '福建省', '江西省', '山东省', '河南省', '湖北省', '湖南省', '广东省', '广西壮族自治区', '海南省', '重庆市', '四川省', '贵州省', '云南省', '西藏自治区', '陕西省', '甘肃省', '青海省', '宁夏回族自治区', '新疆维吾尔自治区', '台湾省', '香港特别行政区', '澳门特别行政区'], // 清朝
  'republic-of-china': ['北京市', '天津市', '河北省', '山西省', '内蒙古自治区', '辽宁省', '吉林省', '黑龙江省', '上海市', '江苏省', '浙江省', '安徽省', '福建省', '江西省', '山东省', '河南省', '湖北省', '湖南省', '广东省', '广西壮族自治区', '海南省', '重庆市', '四川省', '贵州省', '云南省', '西藏自治区', '陕西省', '甘肃省', '青海省', '宁夏回族自治区', '新疆维吾尔自治区', '台湾省', '香港特别行政区', '澳门特别行政区'] // 中华民国
};

/**
 * 主要城市坐标
 */
const MAJOR_CITIES = {
  'xia': [{ name: '阳城', coord: [113.6, 34.5] }],
  'shang': [{ name: '殷', coord: [114.3, 36.1] }],
  'western-zhou': [{ name: '镐京', coord: [108.9, 34.3] }],
  'eastern-zhou': [{ name: '洛邑', coord: [112.4, 34.6] }],
  'qin': [{ name: '咸阳', coord: [108.7, 34.3] }],
  'western-han': [{ name: '长安', coord: [108.9, 34.3] }],
  'eastern-han': [{ name: '洛阳', coord: [112.4, 34.6] }],
  'three-kingdoms': [
    { name: '洛阳', coord: [112.4, 34.6] },
    { name: '成都', coord: [104.1, 30.7] },
    { name: '建业', coord: [118.8, 32.1] }
  ],
  'western-jin': [{ name: '洛阳', coord: [112.4, 34.6] }],
  'eastern-jin': [{ name: '建康', coord: [118.8, 32.1] }],
  'northern-southern-dynasties': [{ name: '建康', coord: [118.8, 32.1] }],
  'sui': [{ name: '大兴', coord: [108.9, 34.3] }],
  'tang': [{ name: '长安', coord: [108.9, 34.3] }],
  'five-dynasties': [{ name: '开封', coord: [114.3, 34.8] }],
  'northern-song': [{ name: '开封', coord: [114.3, 34.8] }],
  'southern-song': [{ name: '临安', coord: [120.2, 30.3] }],
  'yuan': [{ name: '大都', coord: [116.4, 39.9] }],
  'ming': [
    { name: '北京', coord: [116.4, 39.9] },
    { name: '南京', coord: [118.8, 32.1] }
  ],
  'qing': [{ name: '北京', coord: [116.4, 39.9] }],
  'republic-of-china': [
    { name: '南京', coord: [118.8, 32.1] },
    { name: '重庆', coord: [106.5, 29.6] }
  ]
};

/**
 * 朝代疆域面积数据（万平方公里，估算值）
 */
const DYNASTY_AREAS = {
  'xia': 50,
  'shang': 80,
  'western-zhou': 100,
  'eastern-zhou': 150,
  'qin': 340,
  'western-han': 609,
  'eastern-han': 580,
  'three-kingdoms': 540,
  'western-jin': 543,
  'eastern-jin': 280,
  'northern-southern-dynasties': 400,
  'sui': 470,
  'tang': 1237,
  'five-dynasties': 200,
  'northern-song': 280,
  'southern-song': 200,
  'yuan': 1372,
  'ming': 900,
  'qing': 1316,
  'republic-of-china': 1141
};

const DynastyMap = ({ territory, dynastyName, dynastyId }) => {
  const [mapLoaded, setMapLoaded] = useState(false);
  const [error, setError] = useState(null);
  const [geoJsonData, setGeoJsonData] = useState(null);
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);

  // 重置地图视角
  const handleReset = () => {
    if (chartInstanceRef.current) {
      chartInstanceRef.current.dispatchAction({
        type: 'restore'
      });
    }
  };

  useEffect(() => {
    // 加载中国地图 GeoJSON 数据
    const loadMap = async () => {
      try {
        // 使用阿里云 DataV 的 GeoJSON 数据
        const response = await fetch('https://geo.datav.aliyun.com/areas_v3/bound/100000_full.json');
        if (!response.ok) {
          throw new Error('地图数据加载失败');
        }
        const chinaJson = await response.json();
        console.log('[DynastyMap] GeoJSON loaded:', chinaJson);
        console.log('[DynastyMap] Features:', chinaJson.features.map(f => f.properties.name));
        
        echarts.registerMap('china', chinaJson);
        setGeoJsonData(chinaJson);
        setMapLoaded(true);
      } catch (err) {
        console.error('[DynastyMap] 地图加载失败:', err);
        setError('地图数据加载失败，请检查网络连接');
      }
    };

    loadMap();
  }, []);

  // 获取当前朝代的疆域省份
  const getTerritoryProvinces = () => {
    return DYNASTY_TERRITORIES[dynastyId] || [];
  };

  // 获取主要城市
  const getMajorCities = () => {
    return MAJOR_CITIES[dynastyId] || [];
  };

  // 获取疆域面积
  const getArea = () => {
    return DYNASTY_AREAS[dynastyId] || 0;
  };

  // 构建地图配置
  const getOption = () => {
    const provinces = getTerritoryProvinces();
    const cities = getMajorCities();
    const area = getArea();

    console.log('[DynastyMap] dynastyId:', dynastyId);
    console.log('[DynastyMap] provinces:', provinces);

    // 构建省份数据 - 使用带"省"字的名称
    const provinceData = provinces.map(name => ({
      name: name,
      value: 1,
      itemStyle: {
        areaColor: '#C41E3A',
        borderColor: '#8B4513',
        borderWidth: 1
      },
      emphasis: {
        itemStyle: {
          areaColor: '#8B0000'
        }
      }
    }));

    return {
      backgroundColor: 'transparent',
      tooltip: {
        trigger: 'item',
        formatter: function(params) {
          if (params.value === 1) {
            return `<div style="font-family: KaiTi, STKaiti, serif;">
              <strong>${params.name}</strong><br/>
              <span style="color: #C41E3A;">${dynastyName}疆域</span>
            </div>`;
          }
          return params.name;
        },
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        borderColor: '#8B4513',
        borderWidth: 1,
        textStyle: {
          color: '#2C2C2C'
        }
      },
      geo: {
        map: 'china',
        roam: true,
        zoom: territory?.zoom || 1.2,
        center: territory?.center || [105, 36],
        // 设置缩放限制
        scaleLimit: {
          min: 1,
          max: 8
        },
        label: {
          show: false
        },
        itemStyle: {
          areaColor: '#F5F5F0',
          borderColor: '#8B4513',
          borderWidth: 1
        },
        emphasis: {
          itemStyle: {
            areaColor: '#E5E5E0'
          }
        },
        regions: provinceData
      },
      series: [
        {
          name: '都城',
          type: 'scatter',
          coordinateSystem: 'geo',
          data: cities.map(city => ({
            name: city.name,
            value: [...city.coord, 1]
          })),
          symbolSize: 20,
          label: {
            show: true,
            formatter: '{b}',
            position: 'top',
            fontFamily: 'KaiTi, STKaiti, serif',
            fontSize: 14,
            fontWeight: 'bold',
            color: '#2C2C2C',
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            padding: [6, 10],
            borderRadius: 4,
            borderColor: '#8B4513',
            borderWidth: 1
          },
          itemStyle: {
            color: '#FFD700',
            borderColor: '#8B4513',
            borderWidth: 3,
            shadowBlur: 15,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          },
          emphasis: {
            scale: 1.8,
            itemStyle: {
              color: '#FFA500'
            }
          }
        }
      ]
    };
  };

  if (error) {
    return (
      <div className="w-full h-96 flex items-center justify-center bg-gray-50 rounded-lg border-2 border-dashed border-gray-300">
        <div className="text-center">
          <p className="text-gray-500 font-chinese text-lg mb-2">⚠️ {error}</p>
          <p className="text-gray-400 font-chinese text-sm">请刷新页面重试</p>
        </div>
      </div>
    );
  }

  if (!mapLoaded) {
    return (
      <div className="w-full h-96 flex items-center justify-center bg-gray-50 rounded-lg">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-china-red mx-auto mb-4"></div>
          <p className="text-gray-600 font-chinese">正在加载地图数据...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full">
      {/* 标题区域 */}
      <div className="text-center mb-4">
        <h3 className="text-xl font-bold font-chinese text-gray-800">
          {dynastyName}疆域图 · 面积约 {getArea()} 万平方公里
        </h3>
      </div>

      {/* 地图容器 */}
      <div className="relative w-full h-96 bg-gradient-to-b from-xuan-paper to-white rounded-lg overflow-hidden border-2 border-ink-border shadow-inner">
        <ReactECharts
          ref={(e) => {
            chartRef.current = e;
            if (e) {
              chartInstanceRef.current = e.getEchartsInstance();
            }
          }}
          option={getOption()}
          style={{ width: '100%', height: '100%' }}
          opts={{ renderer: 'canvas' }}
        />
        
        {/* 重置按钮 */}
        <button
          onClick={handleReset}
          className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center bg-white/90 hover:bg-white text-gray-700 rounded-lg shadow-md border border-gray-200 transition-all hover:shadow-lg"
          title="重置视角"
        >
          🔄
        </button>
      </div>

      {/* 图例说明 */}
      <div className="mt-4 flex flex-wrap items-center justify-center gap-6 text-sm font-chinese">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded" style={{ backgroundColor: '#C41E3A' }}></div>
          <span className="text-gray-700">{dynastyName}疆域</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded" style={{ backgroundColor: '#F5F5F0', border: '1px solid #8B4513' }}></div>
          <span className="text-gray-700">其他区域</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-full" style={{ backgroundColor: '#FFD700', border: '2px solid #8B4513' }}></div>
          <span className="text-gray-700">都城</span>
        </div>
      </div>

      {/* 操作提示 */}
      <p className="mt-3 text-center text-xs text-gray-500 font-chinese">
        💡 提示：鼠标滚轮可缩放，拖拽可平移地图
      </p>
    </div>
  );
};

export default DynastyMap;
