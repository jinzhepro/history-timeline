/**
 * 朝代疆域地图组件
 * 使用 ECharts 展示各朝代疆域范围
 *
 * 功能特性：
 * - 展示简化世界地图作为背景
 * - 高亮显示中国区域内的朝代疆域
 * - 为大疆域朝代添加特殊标识和说明
 * - 支持缩放和平移
 * - 显示疆域信息和主要城市
 * - 水墨风格配色
 *
 * @param {Object} props - 组件属性
 * @param {Object} props.territory - 疆域数据
 * @param {string} props.dynastyName - 朝代名称
 * @param {string} props.dynastyId - 朝代 ID
 */

import React, { useEffect, useState, useRef } from 'react';
import ReactECharts from 'echarts-for-react';
import * as echarts from 'echarts';
import { AlertTriangle, Globe, MapPin, RotateCcw, Info } from 'lucide-react';

/**
 * 各朝代疆域对应的省份列表
 */
const DYNASTY_TERRITORIES = {
  'xia': ['河南省', '山西省', '陕西省', '河北省', '山东省'],
  'shang': ['河南省', '河北省', '山东省', '山西省', '陕西省', '安徽省'],
  'western-zhou': ['陕西省', '河南省', '山西省', '河北省', '山东省', '湖北省', '安徽省'],
  'eastern-zhou': ['陕西省', '河南省', '山西省', '河北省', '山东省', '湖北省', '安徽省', '江苏省', '浙江省', '四川省', '重庆市', '湖南省'],
  'qin': ['陕西省', '甘肃省', '宁夏回族自治区', '河南省', '山西省', '河北省', '山东省', '湖北省', '安徽省', '江苏省', '浙江省', '江西省', '湖南省', '四川省', '重庆市', '广东省', '广西壮族自治区', '福建省', '云南省', '贵州省', '辽宁省', '内蒙古自治区', '北京市', '天津市'],
  'western-han': ['陕西省', '甘肃省', '宁夏回族自治区', '河南省', '山西省', '河北省', '山东省', '湖北省', '安徽省', '江苏省', '浙江省', '江西省', '湖南省', '四川省', '重庆市', '广东省', '广西壮族自治区', '福建省', '云南省', '贵州省', '辽宁省', '吉林省', '黑龙江省', '内蒙古自治区', '北京市', '天津市', '新疆维吾尔自治区'],
  'eastern-han': ['陕西省', '甘肃省', '宁夏回族自治区', '河南省', '山西省', '河北省', '山东省', '湖北省', '安徽省', '江苏省', '浙江省', '江西省', '湖南省', '四川省', '重庆市', '广东省', '广西壮族自治区', '福建省', '云南省', '贵州省', '辽宁省', '内蒙古自治区', '北京市', '天津市'],
  'three-kingdoms': ['陕西省', '甘肃省', '宁夏回族自治区', '河南省', '山西省', '河北省', '山东省', '湖北省', '安徽省', '江苏省', '浙江省', '江西省', '湖南省', '四川省', '重庆市', '广东省', '广西壮族自治区', '福建省', '云南省', '贵州省', '辽宁省', '内蒙古自治区', '北京市', '天津市'],
  'western-jin': ['陕西省', '甘肃省', '宁夏回族自治区', '河南省', '山西省', '河北省', '山东省', '湖北省', '安徽省', '江苏省', '浙江省', '江西省', '湖南省', '四川省', '重庆市', '广东省', '广西壮族自治区', '福建省', '云南省', '贵州省', '辽宁省', '内蒙古自治区', '北京市', '天津市'],
  'eastern-jin': ['江苏省', '浙江省', '安徽省', '江西省', '湖北省', '湖南省', '四川省', '重庆市', '福建省', '广东省', '广西壮族自治区', '贵州省', '云南省'],
  'northern-southern-dynasties': ['江苏省', '浙江省', '安徽省', '江西省', '湖北省', '湖南省', '四川省', '重庆市', '福建省', '广东省', '广西壮族自治区', '贵州省', '云南省', '河南省', '河北省', '山东省', '山西省', '陕西省', '甘肃省', '内蒙古自治区'],
  'sui': ['陕西省', '甘肃省', '宁夏回族自治区', '河南省', '山西省', '河北省', '山东省', '湖北省', '安徽省', '江苏省', '浙江省', '江西省', '湖南省', '四川省', '重庆市', '广东省', '广西壮族自治区', '福建省', '云南省', '贵州省', '辽宁省', '内蒙古自治区', '北京市', '天津市'],
  'tang': ['陕西省', '甘肃省', '宁夏回族自治区', '河南省', '山西省', '河北省', '山东省', '湖北省', '安徽省', '江苏省', '浙江省', '江西省', '湖南省', '四川省', '重庆市', '广东省', '广西壮族自治区', '福建省', '云南省', '贵州省', '辽宁省', '吉林省', '黑龙江省', '内蒙古自治区', '北京市', '天津市', '新疆维吾尔自治区', '青海省', '西藏自治区'],
  'five-dynasties': ['河南省', '山西省', '河北省', '山东省', '陕西省', '甘肃省', '宁夏回族自治区', '安徽省', '江苏省', '湖北省'],
  'northern-song': ['河南省', '山西省', '河北省', '山东省', '陕西省', '湖北省', '安徽省', '江苏省', '浙江省', '江西省', '湖南省', '四川省', '重庆市', '福建省', '广东省', '广西壮族自治区', '贵州省', '云南省', '甘肃省', '宁夏回族自治区', '辽宁省', '北京市', '天津市', '内蒙古自治区'],
  'southern-song': ['江苏省', '浙江省', '安徽省', '江西省', '湖北省', '湖南省', '四川省', '重庆市', '福建省', '广东省', '广西壮族自治区', '贵州省', '云南省'],
  'yuan': ['北京市', '天津市', '河北省', '山西省', '内蒙古自治区', '辽宁省', '吉林省', '黑龙江省', '上海市', '江苏省', '浙江省', '安徽省', '福建省', '江西省', '山东省', '河南省', '湖北省', '湖南省', '广东省', '广西壮族自治区', '海南省', '重庆市', '四川省', '贵州省', '云南省', '西藏自治区', '陕西省', '甘肃省', '青海省', '宁夏回族自治区', '新疆维吾尔自治区', '台湾省', '香港特别行政区', '澳门特别行政区'],
  'ming': ['北京市', '天津市', '河北省', '山西省', '内蒙古自治区', '辽宁省', '吉林省', '黑龙江省', '上海市', '江苏省', '浙江省', '安徽省', '福建省', '江西省', '山东省', '河南省', '湖北省', '湖南省', '广东省', '广西壮族自治区', '海南省', '重庆市', '四川省', '贵州省', '云南省', '西藏自治区', '陕西省', '甘肃省', '青海省', '宁夏回族自治区', '新疆维吾尔自治区', '台湾省'],
  'qing': ['北京市', '天津市', '河北省', '山西省', '内蒙古自治区', '辽宁省', '吉林省', '黑龙江省', '上海市', '江苏省', '浙江省', '安徽省', '福建省', '江西省', '山东省', '河南省', '湖北省', '湖南省', '广东省', '广西壮族自治区', '海南省', '重庆市', '四川省', '贵州省', '云南省', '西藏自治区', '陕西省', '甘肃省', '青海省', '宁夏回族自治区', '新疆维吾尔自治区', '台湾省', '香港特别行政区', '澳门特别行政区'],
  'republic-of-china': ['北京市', '天津市', '河北省', '山西省', '内蒙古自治区', '辽宁省', '吉林省', '黑龙江省', '上海市', '江苏省', '浙江省', '安徽省', '福建省', '江西省', '山东省', '河南省', '湖北省', '湖南省', '广东省', '广西壮族自治区', '海南省', '重庆市', '四川省', '贵州省', '云南省', '西藏自治区', '陕西省', '甘肃省', '青海省', '宁夏回族自治区', '新疆维吾尔自治区', '台湾省', '香港特别行政区', '澳门特别行政区']
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

/**
 * 大疆域朝代列表（疆域超过现代中国）
 */
const LARGE_TERRITORY_DYNASTIES = ['tang', 'yuan', 'qing'];

/**
 * 大疆域朝代的额外说明
 */
const DYNASTY_TERRITORY_NOTES = {
  'tang': '唐朝极盛时期疆域东至朝鲜半岛，西达中亚咸海，南到越南顺化一带，北包贝加尔湖，面积约1237万平方公里',
  'yuan': '元朝疆域空前辽阔，东起日本海，西至天山，北包西伯利亚，南抵南海，面积约1372万平方公里',
  'qing': '清朝鼎盛时期疆域西跨葱岭，西北达巴尔喀什湖，北接西伯利亚，东北至外兴安岭和库页岛，东临太平洋，南包南海诸岛，面积约1316万平方公里'
};

/**
 * 大疆域朝代的世界地图配置
 */
const WORLD_MAP_CONFIG = {
  'tang': {
    zoom: 1.2,
    center: [95, 35]
  },
  'yuan': {
    zoom: 0.9,
    center: [100, 45]
  },
  'qing': {
    zoom: 1.0,
    center: [105, 40]
  }
};

/**
 * 大疆域朝代的疆域边界坐标
 */
const TERRITORY_BOUNDARIES = {
  'tang': [
    [125, 40], [130, 45], [135, 42], [130, 50], [120, 53], [107, 53],
    [90, 50], [75, 50], [60, 45], [65, 35], [72, 30], [80, 25],
    [95, 20], [107, 16.5], [115, 15], [120, 20], [125, 30]
  ],
  'yuan': [
    [135, 42], [145, 50], [140, 65], [120, 70], [100, 72], [80, 70],
    [60, 65], [45, 55], [40, 45], [45, 35], [55, 25], [70, 20],
    [90, 15], [110, 10], [125, 12], [135, 20], [140, 30]
  ],
  'qing': [
    [130, 42], [135, 48], [142, 50], [145, 55], [140, 58], [130, 55],
    [120, 53], [100, 55], [80, 52], [75, 50], [73, 45], [73, 38],
    [75, 35], [80, 30], [90, 25], [100, 22], [110, 20], [120, 18],
    [125, 20], [130, 25], [132, 35]
  ]
};

const DynastyMap = ({ territory, dynastyName, dynastyId }) => {
  const [mapLoaded, setMapLoaded] = useState(false);
  const [error, setError] = useState(null);
  const [mapType, setMapType] = useState('china');
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);

  const isLargeTerritory = LARGE_TERRITORY_DYNASTIES.includes(dynastyId);
  const [viewState, setViewState] = useState(null);

  // 重置地图视角
  const handleReset = () => {
    if (mapType === 'world' && isLargeTerritory) {
      const worldConfig = WORLD_MAP_CONFIG[dynastyId] || { zoom: 1, center: [100, 35] };
      setViewState({ zoom: worldConfig.zoom, center: worldConfig.center });
    } else {
      setViewState({ zoom: territory?.zoom || 1.2, center: territory?.center || [105, 36] });
    }
  };

  useEffect(() => {
    // 加载地图 GeoJSON 数据
    const loadMap = async () => {
      try {
        // 加载中国地图
        const chinaResponse = await fetch('https://geo.datav.aliyun.com/areas_v3/bound/100000_full.json');
        if (!chinaResponse.ok) {
          throw new Error('中国地图数据加载失败');
        }
        const chinaJson = await chinaResponse.json();
        echarts.registerMap('china', chinaJson);

        // 加载世界地图
        const worldResponse = await fetch('https://fastly.jsdelivr.net/npm/echarts@4.9.0/map/json/world.json');
        if (worldResponse.ok) {
          const worldJson = await worldResponse.json();
          echarts.registerMap('world', worldJson);
        }

        setMapLoaded(true);
      } catch (err) {
        console.error('[DynastyMap] 地图加载失败:', err);
        setError('地图数据加载失败，请检查网络连接');
      }
    };

    loadMap();

    // 清理函数：组件卸载时销毁 ECharts 实例，防止内存泄漏
    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.dispose();
        chartInstanceRef.current = null;
      }
    };
  }, []);

  // 当朝代改变时，自动切换地图类型并重置视角
  useEffect(() => {
    if (isLargeTerritory) {
      setMapType('world');
    } else {
      setMapType('china');
    }
    // 重置视角状态
    setViewState(null);
  }, [dynastyId, isLargeTerritory]);

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

  // 获取世界地图配置
  const getWorldMapConfig = () => {
    return WORLD_MAP_CONFIG[dynastyId] || { zoom: 1, center: [100, 35] };
  };

  // 构建中国地图配置
  const getChinaOption = () => {
    const provinces = getTerritoryProvinces();
    const cities = getMajorCities();

    // 构建省份数据
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
        formatter: function (params) {
          if (params.seriesName === '都城') {
            return `<div style="font-family: KaiTi, STKaiti, serif;">
              <strong>${params.name}</strong><br/>
              <span style="color: #FFD700;">${dynastyName}都城</span>
            </div>`;
          }
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
        zoom: viewState?.zoom || territory?.zoom || 1.2,
        center: viewState?.center || territory?.center || [105, 36],
        scaleLimit: {
          min: 0.5,
          max: 10
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

  // 构建世界地图配置
  const getWorldOption = () => {
    const cities = getMajorCities();
    const worldConfig = getWorldMapConfig();

    // 大疆域朝代的疆域范围边界点
    const currentBoundary = TERRITORY_BOUNDARIES[dynastyId] || [];

    // 构建边界线数据
    const boundaryLines = [];
    if (currentBoundary.length > 1) {
      for (let i = 0; i < currentBoundary.length; i++) {
        const start = currentBoundary[i];
        const end = currentBoundary[(i + 1) % currentBoundary.length];
        boundaryLines.push({
          coords: [start, end]
        });
      }
    }

    // 构建边界标记点（只保留第一个点显示名称）
    const boundaryPoints = [];
    if (currentBoundary.length > 0) {
      boundaryPoints.push({
        name: `${dynastyName}疆域范围`,
        value: [...currentBoundary[0], 1]
      });
    }

    return {
      backgroundColor: '#E8F4F8',
      tooltip: {
        trigger: 'item',
        formatter: function (params) {
          if (params.seriesName === '都城') {
            return `<div style="font-family: KaiTi, STKaiti, serif;">
              <strong>${params.name}</strong><br/>
              <span style="color: #FFD700;">${dynastyName}都城</span>
            </div>`;
          }
          if (params.seriesName === '疆域边界') {
            return `<div style="font-family: KaiTi, STKaiti, serif;">
              <strong>${dynastyName}疆域</strong><br/>
              <span style="color: #C41E3A;">极盛时期疆域边界</span>
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
        map: 'world',
        roam: true,
        zoom: viewState?.zoom || worldConfig.zoom,
        center: viewState?.center || worldConfig.center,
        scaleLimit: {
          min: 0.5,
          max: 10
        },
        label: {
          show: false
        },
        itemStyle: {
          areaColor: '#F5F5F0',
          borderColor: '#8B4513',
          borderWidth: 0.5
        },
        emphasis: {
          itemStyle: {
            areaColor: '#E5E5E0'
          }
        }
      },
      series: [
        // 疆域边界线
        {
          name: '疆域边界',
          type: 'lines',
          coordinateSystem: 'geo',
          data: boundaryLines,
          lineStyle: {
            color: 'rgba(196, 30, 58, 0.9)',
            width: 3,
            type: 'solid',
            curveness: 0.1
          },
          silent: false
        },
        // 疆域边界标记点
        {
          name: '疆域边界',
          type: 'scatter',
          coordinateSystem: 'geo',
          data: boundaryPoints,
          symbolSize: 8,
          label: {
            show: true,
            formatter: '{b}',
            position: 'top',
            fontFamily: 'KaiTi, STKaiti, serif',
            fontSize: 12,
            color: '#C41E3A',
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            padding: [4, 8],
            borderRadius: 3,
            borderColor: '#C41E3A',
            borderWidth: 1
          },
          itemStyle: {
            color: 'rgba(196, 30, 58, 0.8)',
            borderColor: '#C41E3A',
            borderWidth: 2
          }
        },
        // 都城标记
        {
          name: '都城',
          type: 'scatter',
          coordinateSystem: 'geo',
          data: cities.map(city => ({
            name: city.name,
            value: [...city.coord, 1]
          })),
          symbolSize: 25,
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
        },
        // 中国核心区域高亮
        {
          name: '中国核心',
          type: 'effectScatter',
          coordinateSystem: 'geo',
          data: [
            { name: '中原', value: [110, 35, 1] },
            { name: '关中', value: [108, 34, 1] },
            { name: '洛阳', value: [112, 34, 1] }
          ],
          symbolSize: 15,
          showEffectOn: 'render',
          rippleEffect: {
            brushType: 'stroke',
            scale: 3
          },
          label: {
            show: false
          },
          itemStyle: {
            color: '#C41E3A',
            shadowBlur: 10,
            shadowColor: '#C41E3A'
          }
        }
      ]
    };
  };

  // 根据地图类型获取配置
  const getOption = () => {
    if (mapType === 'world' && isLargeTerritory) {
      return getWorldOption();
    }
    return getChinaOption();
  };

  if (error) {
    return (
      <div className="w-full h-96 flex items-center justify-center bg-gray-50 rounded-lg border-2 border-dashed border-gray-300">
        <div className="text-center">
          <p className="text-gray-500 font-chinese text-lg mb-2"><AlertTriangle className="inline w-5 h-5 mr-1" />{error}</p>
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
        {isLargeTerritory && (
          <div className="mt-2 inline-flex items-center gap-2 px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm font-chinese">
            <Globe className="w-4 h-4" />
            <span>大疆域朝代</span>
          </div>
        )}
      </div>

      {/* 大疆域朝代说明 */}
      {isLargeTerritory && (
        <div className="mb-4 p-4 bg-gradient-to-r from-amber-50 to-yellow-50 border border-amber-200 rounded-lg">
          <p className="text-sm text-amber-900 font-chinese leading-relaxed">
            <span className="font-bold"><MapPin className="inline w-4 h-4 mr-1" />疆域说明：</span>
            {DYNASTY_TERRITORY_NOTES[dynastyId]}
          </p>
          <p className="text-xs text-amber-700 font-chinese mt-2">
            * 地图显示范围为该朝代极盛时期疆域，红色虚线表示疆域边界
          </p>
        </div>
      )}

      {/* 地图类型切换按钮（仅大疆域朝代显示） */}
      {isLargeTerritory && (
        <div className="mb-4 flex justify-center">
          <div className="inline-flex bg-gray-100 rounded-lg p-1">
            <button
              onClick={() => setMapType('china')}
              className={`px-4 py-2 rounded-md text-sm font-chinese transition-all ${mapType === 'china'
                ? 'bg-white text-gray-800 shadow-sm'
                : 'text-gray-600 hover:text-gray-800'
                }`}
            >
              中国地图
            </button>
            <button
              onClick={() => setMapType('world')}
              className={`px-4 py-2 rounded-md text-sm font-chinese transition-all ${mapType === 'world'
                ? 'bg-white text-gray-800 shadow-sm'
                : 'text-gray-600 hover:text-gray-800'
                }`}
            >
              世界地图
            </button>
          </div>
        </div>
      )}

      {/* 地图容器 */}
      <div className="relative w-full h-[500px] bg-gradient-to-b from-xuan-paper to-white rounded-lg overflow-hidden border-2 border-ink-border shadow-inner">
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
          <RotateCcw className="w-5 h-5" />
        </button>
      </div>

      {/* 图例说明 */}
      <div className="mt-4 flex flex-wrap items-center justify-center gap-6 text-sm font-chinese">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded" style={{ backgroundColor: '#C41E3A' }}></div>
          <span className="text-gray-700">{dynastyName}核心疆域</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded" style={{ backgroundColor: '#F5F5F0', border: '1px solid #8B4513' }}></div>
          <span className="text-gray-700">其他区域</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-full" style={{ backgroundColor: '#FFD700', border: '2px solid #8B4513' }}></div>
          <span className="text-gray-700">都城</span>
        </div>
        {isLargeTerritory && mapType === 'world' && (
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded" style={{ backgroundColor: 'rgba(196, 30, 58, 0.5)', border: '2px dashed #C41E3A' }}></div>
            <span className="text-gray-700">疆域边界</span>
          </div>
        )}
      </div>

      {/* 操作提示 */}
      <p className="mt-3 text-center text-xs text-gray-500 font-chinese">
        <Info className="inline w-3 h-3 mr-1" />
        提示：鼠标滚轮可缩放，拖拽可平移地图{isLargeTerritory && '，可切换中国地图/世界地图视图'}
      </p>
    </div>
  );
};

export default DynastyMap;
