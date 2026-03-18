/**
 * 中国历史朝代数据
 * 包含从夏朝到清朝的所有主要朝代信息
 * 代表君主格式：谥号（本名）
 * 
 * ===========================================
 * 数据来源与参考文献
 * ===========================================
 * 1. 朝代年代框架
 *    - 夏商周断代工程报告（2000 年）
 *    - 《中国历代纪年表》（中华书局）
 *    - 《中国历史纪年表》（方诗铭编，上海辞书出版社）
 * 
 * 2. 帝王世系
 *    - 《史记》（司马迁）
 *    - 《汉书》（班固）
 *    - 《后汉书》（范晔）
 *    - 《三国志》（陈寿）
 *    - 《晋书》（房玄龄等）
 *    - 《宋书》《南齐书》《梁书》《陈书》
 *    - 《魏书》《北齐书》《周书》《隋书》
 *    - 《旧唐书》《新唐书》
 *    - 《旧五代史》《新五代史》
 *    - 《宋史》《辽史》《金史》
 *    - 《元史》（宋濂等）
 *    - 《明史》（张廷玉等）
 *    - 《清史稿》（赵尔巽等）
 * 
 * 3. 历史事件
 *    - 《资治通鉴》（司马光）
 *    - 《中国通史》（范文澜）
 *    - 《国史大纲》（钱穆）
 * 
 * 4. 文化成就
 *    - 《中国科学技术史》（李约瑟）
 *    - 《中国文学史》（游国恩等）
 *    - 《中国艺术史》（迈克尔·苏立文）
 * 
 * ===========================================
 * 学术免责声明
 * ===========================================
 * 本数据文件旨在提供科普教育用途的中国历史朝代信息，
 * 数据基于主流历史学界共识整理而成。
 * 
 * 请注意：
 * 1. 夏商周年代为推定年份，学术界存在不同观点
 *    - 夏朝（前 2070-前 1600）：采用夏商周断代工程推定年份，但夏朝存在性仍有争议
 *    - 商朝（前 1600-前 1046）：起始年有前 1558 年等不同说法
 *    - 西周（前 1046-前 771）：武王伐纣年份有前 1046/1045/1027 年等多种说法
 * 2. 部分历史事件的年份可能存在争议
 * 3. 帝王世系为简化版本，未包含所有在位时间极短的君主
 * 4. 疆域描述为大致范围，古代边界本身不精确
 * 
 * 本数据不适用于学术研究，如需严谨历史研究，
 * 请参考上述原始文献及专业学术著作。
 * 
 * 数据最后更新：2026 年 3 月
 * ===========================================
 */

const dynasties = [
  {
    "id": "xia",
    "name": "夏朝",
    "startYear": -2070,
    "endYear": -1600,
    "period": "ancient",
    "founder": "禹",
    "representativeRulers": [
      "禹",
      "启",
      "太康",
      "少康",
      "桀"
    ],
    "territory": {
      "center": [
        113.6,
        34.5
      ],
      "zoom": 4,
      "area": 50,
      "description": "主要位于今河南西部、山西南部一带，以伊洛河流域为中心",
      "capital": "阳城（今河南登封）",
      "borders": {
        "east": "河南东部",
        "west": "陕西东部",
        "north": "山西南部",
        "south": "河南南部"
      }
    },
    "events": [
      {
        "name": "夏朝建立",
        "description": "禹建立夏朝，标志着中国历史上第一个王朝的诞生，开启了\"家天下\"的时代",
        "year": -2070
      },
      {
        "name": "启继位",
        "description": "禹之子启继位，确立了世袭制，结束了禅让制",
        "year": -2040
      },
      {
        "name": "少康中兴",
        "description": "少康复国，恢复夏朝统治，使夏朝走向强盛",
        "year": -1980
      }
    ],
    "culturalAchievements": [
      {
        "name": "青铜器制造",
        "description": "开始制造青铜器，标志着中国进入青铜时代",
        "figure": null
      },
      {
        "name": "历法制定",
        "description": "制定《夏小正》，是中国最早的历法之一",
        "figure": null
      },
      {
        "name": "城墙建筑",
        "description": "开始建造城墙和宫殿，二里头遗址展现了早期国家形态",
        "figure": null
      }
    ],
    "battles": [
      {
        "name": "甘之战",
        "description": "夏启讨伐有扈氏，巩固世袭制",
        "year": -2040,
        "coord": [
          113.5,
          34.5
        ],
        "winner": "夏启",
        "loser": "有扈氏"
      },
      {
        "name": "少康复国之战",
        "description": "少康联合夏朝遗臣，打败寒浞，恢复夏朝统治",
        "year": -1950,
        "coord": [
          113,
          34
        ],
        "winner": "少康",
        "loser": "寒浞"
      }
    ],
    "lineage": [
      {
        "name": "禹",
        "reign": "",
        "years": "约前 2070-前 2020",
        "description": "夏朝开国君主，治水英雄，采用疏导法治水，三过家门而不入",
        "isFounder": true,
        "order": 1,
        "predecessor": null,
        "successor": "夏启（启）"
      },
      {
        "name": "夏启（启）",
        "reign": "",
        "years": "约前2040-前1990",
        "description": "禹之子，确立世袭制，结束了禅让制",
        "isFounder": false,
        "order": 2,
        "predecessor": "禹",
        "successor": "少康"
      },
      {
        "name": "太康",
        "reign": "",
        "years": "约前1990-前1950",
        "description": "启之子，沉迷打猎，失国于有穷氏",
        "isFounder": false,
        "order": 3,
        "predecessor": "夏启（启）",
        "successor": "仲康"
      },
      {
        "name": "仲康",
        "reign": "",
        "years": "约前1950-前1940",
        "description": "太康之弟，短暂在位",
        "isFounder": false,
        "order": 4,
        "predecessor": "夏启（启）",
        "successor": "相"
      },
      {
        "name": "相",
        "reign": "",
        "years": "约前1940-前1910",
        "description": "仲康之子，被寒浞杀害",
        "isFounder": false,
        "order": 5,
        "predecessor": "夏启（启）",
        "successor": "少康"
      },
      {
        "name": "少康",
        "reign": "",
        "years": "约前 1910-前 1870",
        "description": "相之遗腹子，中兴夏朝，恢复统治",
        "isFounder": false,
        "order": 6,
        "predecessor": "相",
        "successor": "杼"
      },
      {
        "name": "杼",
        "reign": "",
        "years": "约前 1870-前 1840",
        "description": "少康之子，继续发展夏朝",
        "isFounder": false,
        "order": 7,
        "predecessor": "少康",
        "successor": "槐"
      },
      {
        "name": "杼",
        "reign": "",
        "years": "约前1870-前1840",
        "description": "少康之子，继续发展夏朝",
        "isFounder": false,
        "order": 7,
        "predecessor": "少康",
        "successor": "桀（履癸）"
      },
      {
        "name": "桀（履癸）",
        "reign": "",
        "years": "约前1650-前1600",
        "description": "夏朝末代君主，暴虐无道，被商汤灭亡",
        "isFounder": false,
        "order": 8,
        "predecessor": "夏朝",
        "successor": null
      }
    ]
  },
  {
    "id": "shang",
    "name": "商朝",
    "startYear": -1600,
    "endYear": -1046,
    "period": "ancient",
    "founder": "汤",
    "representativeRulers": [
      "汤",
      "盘庚",
      "武丁",
      "帝乙",
      "帝辛（纣）"
    ],
    "territory": {
      "center": [
        114.3,
        36.1
      ],
      "zoom": 4,
      "area": 80,
      "description": "以河南为中心，扩展至河北、山东、山西、陕西等地，盘庚迁殷后稳定",
      "capital": "殷（今河南安阳）",
      "borders": {
        "east": "山东半岛",
        "west": "陕西东部",
        "north": "河北南部",
        "south": "湖北北部"
      }
    },
    "events": [
      {
        "name": "商汤灭夏",
        "description": "商汤推翻夏桀的统治，建立商朝",
        "year": -1600
      },
      {
        "name": "盘庚迁殷",
        "description": "盘庚将都城迁至殷（今河南安阳），商朝从此稳定发展",
        "year": -1300
      },
      {
        "name": "武丁中兴",
        "description": "武丁时期商朝达到鼎盛，国力强盛，疆域扩大",
        "year": -1250
      }
    ],
    "culturalAchievements": [
      {
        "name": "甲骨文",
        "description": "创造甲骨文，是中国已知最早的系统文字",
        "figure": null
      },
      {
        "name": "青铜器工艺",
        "description": "青铜器制造技术达到高峰，代表作品有司母戊鼎、四羊方尊等",
        "figure": null
      },
      {
        "name": "占卜文化",
        "description": "发展了系统的占卜文化，甲骨卜辞记录了当时的政治、军事、祭祀等活动",
        "figure": null
      }
    ],
    "battles": [
      {
        "name": "商汤灭夏之战",
        "description": "商汤在鸣条之战中击败夏桀，灭亡夏朝",
        "year": -1600,
        "coord": [
          111.5,
          35
        ],
        "winner": "商汤",
        "loser": "夏桀"
      },
      {
        "name": "牧野之战",
        "description": "周武王联合诸侯在牧野击败商纣王，商朝灭亡",
        "year": -1046,
        "coord": [
          114,
          35.5
        ],
        "winner": "周武王",
        "loser": "商纣王"
      }
    ],
    "lineage": [
      {
        "name": "商汤（汤）",
        "reign": "",
        "years": "约前 1600-前 1580",
        "description": "商朝开国君主，灭夏建商",
        "isFounder": true,
        "order": 1,
        "predecessor": null,
        "successor": "外丙"
      },
      {
        "name": "外丙",
        "reign": "",
        "years": "约前 1580-前 1575",
        "description": "商汤之子，短暂在位",
        "isFounder": false,
        "order": 2,
        "predecessor": "商汤（汤）",
        "successor": "仲壬"
      },
      {
        "name": "仲壬",
        "reign": "",
        "years": "约前 1575-前 1570",
        "description": "外丙之弟，短暂在位",
        "isFounder": false,
        "order": 3,
        "predecessor": "外丙",
        "successor": "太甲"
      },
      {
        "name": "太甲",
        "reign": "",
        "years": "约前 1570-前 1540",
        "description": "商汤之孙，伊尹辅政，商朝稳定发展",
        "isFounder": false,
        "order": 4,
        "predecessor": "仲壬",
        "successor": "沃丁"
      },
      {
        "name": "盘庚",
        "reign": "",
        "years": "约前1300-前1270",
        "description": "迁都于殷，商朝从此稳定发展",
        "isFounder": false,
        "order": 5,
        "predecessor": "商朝",
        "successor": "武丁"
      },
      {
        "name": "小辛",
        "reign": "",
        "years": "约前1270-前1250",
        "description": "盘庚之弟，商朝继续发展",
        "isFounder": false,
        "order": 6,
        "predecessor": "盘庚",
        "successor": "小乙"
      },
      {
        "name": "小乙",
        "reign": "",
        "years": "约前1250-前1230",
        "description": "商朝君主，武丁之父",
        "isFounder": false,
        "order": 7,
        "predecessor": "盘庚",
        "successor": "武丁"
      },
      {
        "name": "武丁",
        "reign": "",
        "years": "约前1230-前1180",
        "description": "商朝鼎盛时期，开创武丁中兴",
        "isFounder": false,
        "order": 8,
        "predecessor": "商朝",
        "successor": "纣（帝辛）"
      },
      {
        "name": "祖庚",
        "reign": "",
        "years": "约前1180-前1160",
        "description": "武丁之子",
        "isFounder": false,
        "order": 9,
        "predecessor": "武丁",
        "successor": "祖甲"
      },
      {
        "name": "祖甲",
        "reign": "",
        "years": "约前1160-前1140",
        "description": "武丁之子，商朝继续发展",
        "isFounder": false,
        "order": 10,
        "predecessor": "武丁",
        "successor": "纣（帝辛）"
      },
      {
        "name": "纣（帝辛）",
        "reign": "",
        "years": "约前1075-前1046",
        "description": "商朝末代君主，暴虐无道，被周武王灭亡",
        "isFounder": false,
        "order": 11,
        "predecessor": "商朝",
        "successor": null
      }
    ]
  },
  {
    "id": "western-zhou",
    "name": "西周",
    "startYear": -1046,
    "endYear": -771,
    "period": "ancient",
    "founder": "周武王（姬发）",
    "representativeRulers": [
      "周武王（姬发）",
      "周公旦（姬旦）",
      "周成王（姬诵）",
      "周康王（姬钊）",
      "周穆王（姬满）"
    ],
    "territory": {
      "center": [
        108.9,
        34.3
      ],
      "zoom": 4,
      "area": 100,
      "description": "以关中平原为中心，通过分封制扩展至黄河中下游地区",
      "capital": "镐京（今陕西西安）",
      "borders": {
        "east": "山东半岛",
        "west": "甘肃东部",
        "north": "河北北部",
        "south": "长江中游"
      }
    },
    "events": [
      {
        "name": "牧野之战",
        "description": "周武王伐纣，在牧野之战中击败商军，商朝灭亡",
        "year": -1046
      },
      {
        "name": "分封制确立",
        "description": "周公旦辅政，确立分封制，巩固周朝统治",
        "year": -1040
      },
      {
        "name": "成康之治",
        "description": "周成王、周康王时期，天下安定，刑罚不用四十余年",
        "year": -1020
      }
    ],
    "culturalAchievements": [
      {
        "name": "礼乐制度",
        "description": "周公制礼作乐，建立了完善的礼乐制度",
        "figure": "周公旦（姬旦）"
      },
      {
        "name": "金文",
        "description": "青铜器铭文（金文）大量出现，记录了重要历史事件",
        "figure": null
      },
      {
        "name": "宗法制度",
        "description": "确立以嫡长子继承制为核心的宗法制度",
        "figure": "周公旦（姬旦）"
      }
    ],
    "battles": [
      {
        "name": "牧野之战",
        "description": "周武王伐纣，在牧野之战中击败商军，商朝灭亡",
        "year": -1046,
        "coord": [
          114,
          35.5
        ],
        "winner": "周武王",
        "loser": "商纣王"
      }
    ],
    "lineage": [
      {
        "name": "周武王（姬发）",
        "reign": "",
        "years": "前 1046-前 1043",
        "description": "西周开国君主，牧野之战灭商建周",
        "isFounder": true,
        "order": 1,
        "predecessor": null,
        "successor": "周成王（姬诵）"
      },
      {
        "name": "周成王（姬诵）",
        "reign": "",
        "years": "前1042-前1021",
        "description": "周武王之子，周公旦辅政，开创成康之治",
        "isFounder": false,
        "order": 2,
        "predecessor": "周武王（姬发）",
        "successor": "周康王（姬钊）"
      },
      {
        "name": "周康王（姬钊）",
        "reign": "",
        "years": "前1020-前996",
        "description": "周成王之子，继续成康之治",
        "isFounder": false,
        "order": 3,
        "predecessor": "周成王（姬诵）",
        "successor": "周穆王（姬满）"
      },
      {
        "name": "周穆王（姬满）",
        "reign": "",
        "years": "前976-前922",
        "description": "西周中期君主，周游天下，记载于《穆天子传》",
        "isFounder": false,
        "order": 4,
        "predecessor": "西周",
        "successor": "周厉王（姬胡）"
      },
      {
        "name": "周共王（姬繄扈）",
        "reign": "",
        "years": "前922-前900",
        "description": "周穆王之子",
        "isFounder": false,
        "order": 5,
        "predecessor": "周穆王（姬满）",
        "successor": "周厉王（姬胡）"
      },
      {
        "name": "周厉王（姬胡）",
        "reign": "",
        "years": "前877-前841",
        "description": "暴虐无道，引发国人暴动，被流放",
        "isFounder": false,
        "order": 6,
        "predecessor": "西周",
        "successor": "周宣王（姬静）"
      },
      {
        "name": "周宣王（姬静）",
        "reign": "",
        "years": "前828-前782",
        "description": "周厉王之子，中兴西周",
        "isFounder": false,
        "order": 7,
        "predecessor": "西周",
        "successor": "周幽王（姬宫湦）"
      },
      {
        "name": "周幽王（姬宫湦）",
        "reign": "",
        "years": "前 781-前 771",
        "description": "西周末代君主，宠爱褒姒，废嫡立庶，导致申侯联合犬戎攻破镐京",
        "isFounder": false,
        "order": 8,
        "predecessor": "西周",
        "successor": null
      }
    ]
  },
  {
    "id": "eastern-zhou",
    "name": "东周（春秋战国）",
    "startYear": -770,
    "endYear": -221,
    "period": "ancient",
    "founder": "周平王（姬宜臼）",
    "representativeRulers": [
      "周平王（姬宜臼）",
      "齐桓公（姜小白）",
      "晋文公（姬重耳）",
      "楚庄王（熊旅）",
      "秦始皇（嬴政）"
    ],
    "territory": {
      "center": [
        112.4,
        34.6
      ],
      "zoom": 4,
      "area": 150,
      "description": "周王室衰微，诸侯争霸，各诸侯国疆域此消彼长，文化上百家争鸣",
      "capital": "洛邑（今河南洛阳）",
      "borders": {
        "east": "齐鲁之地",
        "west": "秦地",
        "north": "燕赵",
        "south": "楚越"
      }
    },
    "events": [
      {
        "name": "平王东迁",
        "description": "周平王将都城东迁至洛邑（今洛阳），东周开始",
        "year": -770
      },
      {
        "name": "孔子创立儒家",
        "description": "孔子创立儒家学派，对中国文化产生深远影响",
        "year": -551
      },
      {
        "name": "商鞅变法",
        "description": "商鞅在秦国实行变法，使秦国迅速强大",
        "year": -356
      },
      {
        "name": "长平之战",
        "description": "秦将白起大败赵军，为秦统一六国奠定基础",
        "year": -260
      },
      {
        "name": "秦灭六国",
        "description": "秦始皇先后灭掉韩、赵、魏、楚、燕、齐六国，统一中国",
        "year": -221
      }
    ],
    "culturalAchievements": [
      {
        "name": "百家争鸣",
        "description": "儒家、道家、法家、墨家等学派百家争鸣，思想文化空前繁荣",
        "figure": "孔子、老子、墨子、韩非子等"
      },
      {
        "name": "《诗经》编纂",
        "description": "中国最早的诗歌总集《诗经》编纂完成",
        "figure": "孔子（孔丘）"
      },
      {
        "name": "《孙子兵法》",
        "description": "孙武著《孙子兵法》，是世界上最早的军事著作",
        "figure": "孙武"
      },
      {
        "name": "《道德经》",
        "description": "老子著《道德经》，是道家经典著作",
        "figure": "老子（李耳）"
      },
      {
        "name": "都江堰水利工程",
        "description": "李冰父子修建都江堰，是世界上最古老的水利工程之一",
        "figure": "李冰"
      }
    ],
    "lineage": [
      {
        "name": "周平王（姬宜臼）",
        "reign": "",
        "years": "前770-前720年",
        "description": "东周开国君主，迁都洛邑",
        "isFounder": true,
        "order": 1,
        "predecessor": null,
        "successor": "周桓王（姬林）"
      },
      {
        "name": "周桓王（姬林）",
        "reign": "",
        "years": "前719-前697年",
        "description": "周平王之孙",
        "isFounder": false,
        "order": 2,
        "predecessor": "周平王（姬宜臼）",
        "successor": "周庄王（姬佗）"
      },
      {
        "name": "周庄王（姬佗）",
        "reign": "",
        "years": "前696-前682年",
        "description": "周桓王之子",
        "isFounder": false,
        "order": 3,
        "predecessor": "周平王（姬宜臼）",
        "successor": "周釐王（姬胡齐）"
      },
      {
        "name": "周釐王（姬胡齐）",
        "reign": "",
        "years": "前681-前677年",
        "description": "周庄王之子",
        "isFounder": false,
        "order": 4,
        "predecessor": "周平王（姬宜臼）",
        "successor": "周惠王（姬阆）"
      },
      {
        "name": "周惠王（姬阆）",
        "reign": "",
        "years": "前676-前652年",
        "description": "周釐王之子",
        "isFounder": false,
        "order": 5,
        "predecessor": "周平王（姬宜臼）",
        "successor": "周襄王（姬郑）"
      },
      {
        "name": "周襄王（姬郑）",
        "reign": "",
        "years": "前651-前619年",
        "description": "周惠王之子",
        "isFounder": false,
        "order": 6,
        "predecessor": "东周（春秋战国）",
        "successor": "周简王（姬夷）"
      },
      {
        "name": "周顷王（姬壬臣）",
        "reign": "",
        "years": "前618-前613年",
        "description": "周襄王之子",
        "isFounder": false,
        "order": 7,
        "predecessor": "周襄王（姬郑）",
        "successor": "周匡王（姬班）"
      },
      {
        "name": "周匡王（姬班）",
        "reign": "",
        "years": "前612-前607年",
        "description": "周顷王之子",
        "isFounder": false,
        "order": 8,
        "predecessor": "周襄王（姬郑）",
        "successor": "周定王（姬瑜）"
      },
      {
        "name": "周定王（姬瑜）",
        "reign": "",
        "years": "前606-前586年",
        "description": "周匡王之弟",
        "isFounder": false,
        "order": 9,
        "predecessor": "周襄王（姬郑）",
        "successor": "周简王（姬夷）"
      },
      {
        "name": "周简王（姬夷）",
        "reign": "",
        "years": "前585-前572年",
        "description": "周定王之子",
        "isFounder": false,
        "order": 10,
        "predecessor": "东周（春秋战国）",
        "successor": "周敬王（姬匄）"
      },
      {
        "name": "周灵王（姬泄心）",
        "reign": "",
        "years": "前571-前545年",
        "description": "周简王之子",
        "isFounder": false,
        "order": 11,
        "predecessor": "周简王（姬夷）",
        "successor": "周景王（姬贵）"
      },
      {
        "name": "周景王（姬贵）",
        "reign": "",
        "years": "前544-前520年",
        "description": "周灵王之子",
        "isFounder": false,
        "order": 12,
        "predecessor": "周灵王（姬泄心）",
        "successor": "周敬王（姬匄）"
      },
      {
        "name": "周敬王（姬匄）",
        "reign": "",
        "years": "前519-前476年",
        "description": "周景王之子，王子朝之乱后即位",
        "isFounder": false,
        "order": 13,
        "predecessor": "东周（春秋战国）",
        "successor": "周威烈王（姬午）"
      },
      {
        "name": "周元王（姬仁）",
        "reign": "",
        "years": "前475-前469年",
        "description": "周敬王之子",
        "isFounder": false,
        "order": 14,
        "predecessor": "周敬王（姬匄）",
        "successor": "周贞定王（姬介）"
      },
      {
        "name": "周贞定王（姬介）",
        "reign": "",
        "years": "前468-前441年",
        "description": "周元王之子",
        "isFounder": false,
        "order": 15,
        "predecessor": "周敬王（姬匄）",
        "successor": "周威烈王（姬午）"
      },
      {
        "name": "周威烈王（姬午）",
        "reign": "",
        "years": "前425-前402年",
        "description": "战国时期周王室",
        "isFounder": false,
        "order": 16,
        "predecessor": "东周（春秋战国）",
        "successor": "周慎靓王（姬定）"
      },
      {
        "name": "周安王（姬骄）",
        "reign": "",
        "years": "前401-前376年",
        "description": "周威烈王之子",
        "isFounder": false,
        "order": 17,
        "predecessor": "周威烈王（姬午）",
        "successor": "周烈王（姬喜）"
      },
      {
        "name": "周烈王（姬喜）",
        "reign": "",
        "years": "前375-前369年",
        "description": "周安王之子",
        "isFounder": false,
        "order": 18,
        "predecessor": "周威烈王（姬午）",
        "successor": "周显王（姬扁）"
      },
      {
        "name": "周显王（姬扁）",
        "reign": "",
        "years": "前368-前321年",
        "description": "周烈王之弟",
        "isFounder": false,
        "order": 19,
        "predecessor": "周威烈王（姬午）",
        "successor": "周慎靓王（姬定）"
      },
      {
        "name": "周慎靓王（姬定）",
        "reign": "",
        "years": "前320-前315年",
        "description": "周显王之子",
        "isFounder": false,
        "order": 20,
        "predecessor": "东周（春秋战国）",
        "successor": "周赧王（姬延）"
      },
      {
        "name": "周赧王（姬延）",
        "reign": "",
        "years": "前314-前256年",
        "description": "周慎靓王之子，东周末代君主",
        "isFounder": false,
        "order": 21,
        "predecessor": "周慎靓王（姬定）",
        "successor": null
      }
    ]
  },
  {
    "id": "qin",
    "name": "秦朝",
    "startYear": -221,
    "endYear": -207,
    "period": "classical",
    "founder": "秦始皇（嬴政）",
    "representativeRulers": [
      "秦始皇（嬴政）",
      "秦二世（嬴胡亥）"
    ],
    "territory": {
      "center": [
        108.7,
        34.3
      ],
      "zoom": 4,
      "area": 340,
      "description": "中国历史上第一个统一的多民族国家，东到辽东，西到陇西，北抵长城，南达南海",
      "capital": "咸阳（今陕西咸阳）",
      "borders": {
        "east": "辽东",
        "west": "陇西",
        "north": "长城",
        "south": "南海"
      }
    },
    "events": [
      {
        "name": "秦朝建立",
        "description": "秦始皇统一六国，建立中国历史上第一个中央集权的封建王朝",
        "year": -221
      },
      {
        "name": "统一文字度量衡",
        "description": "秦始皇统一文字、货币、度量衡，促进了经济文化交流",
        "year": -220
      },
      {
        "name": "修筑长城",
        "description": "连接和修缮战国长城，形成万里长城",
        "year": -214
      },
      {
        "name": "焚书坑儒",
        "description": "秦始皇焚烧百家书籍，活埋儒生，加强思想控制",
        "year": -213
      },
      {
        "name": "陈胜吴广起义",
        "description": "陈胜吴广在大泽乡起义，揭开秦末农民战争序幕",
        "year": -209
      },
      {
        "name": "巨鹿之战",
        "description": "项羽在巨鹿之战中大败秦军，摧毁秦朝主力",
        "year": -207
      }
    ],
    "culturalAchievements": [
      {
        "name": "小篆统一文字",
        "description": "李斯创制小篆，统一全国文字",
        "figure": "李斯"
      },
      {
        "name": "秦始皇陵兵马俑",
        "description": "修建规模宏大的秦始皇陵及兵马俑坑",
        "figure": "秦始皇（嬴政）"
      },
      {
        "name": "郡县制",
        "description": "废除分封制，实行郡县制，奠定中国行政区划基础",
        "figure": "李斯"
      },
      {
        "name": "秦直道",
        "description": "修建秦直道，是中国古代重要军事交通要道",
        "figure": null
      },
      {
        "name": "灵渠",
        "description": "开凿灵渠，连接长江和珠江水系",
        "figure": null
      }
    ],
    "battles": [
      {
        "name": "长平之战",
        "description": "秦将白起大败赵军，坑杀四十万赵卒，为秦统一奠定基础",
        "year": -260,
        "coord": [
          112.8,
          35.5
        ],
        "winner": "秦国（白起）",
        "loser": "赵国"
      },
      {
        "name": "巨鹿之战",
        "description": "项羽在巨鹿之战中大败秦军，摧毁秦朝主力",
        "year": -207,
        "coord": [
          115,
          37.5
        ],
        "winner": "项羽",
        "loser": "秦军"
      }
    ],
    "lineage": [
      {
        "name": "秦始皇（嬴政）",
        "reign": "",
        "years": "前221-前210",
        "description": "中国历史上第一位皇帝，统一六国，建立中央集权制度",
        "isFounder": true,
        "order": 1,
        "predecessor": null,
        "successor": "秦二世（嬴胡亥）"
      },
      {
        "name": "秦二世（嬴胡亥）",
        "reign": "",
        "years": "前210-前207",
        "description": "秦始皇之子，赵高专权，秦朝灭亡",
        "isFounder": false,
        "order": 2,
        "predecessor": "秦始皇（嬴政）",
        "successor": null
      }
    ]
  },
  {
    "id": "western-han",
    "name": "西汉",
    "startYear": -202,
    "endYear": 8,
    "period": "classical",
    "founder": "汉高祖（刘邦）",
    "representativeRulers": [
      "汉高祖（刘邦）",
      "汉文帝（刘恒）",
      "汉景帝（刘启）",
      "汉武帝（刘彻）",
      "汉宣帝（刘询）"
    ],
    "territory": {
      "center": [
        108.9,
        34.3
      ],
      "zoom": 4,
      "area": 609,
      "description": "汉武帝时期疆域达到极盛，开拓西域，北击匈奴，东并朝鲜，南拓交趾",
      "capital": "长安（今陕西西安）",
      "borders": {
        "east": "朝鲜半岛",
        "west": "西域（今新疆）",
        "north": "大漠",
        "south": "交趾（今越南北部）"
      }
    },
    "events": [
      {
        "name": "西汉建立",
        "description": "刘邦建立汉朝，定都长安",
        "year": -202
      },
      {
        "name": "白登之围",
        "description": "刘邦被匈奴围困于白登山，后采用陈平计策脱险",
        "year": -200
      },
      {
        "name": "文景之治",
        "description": "汉文帝、汉景帝时期，轻徭薄赋，与民休息，社会经济恢复发展",
        "year": -180
      },
      {
        "name": "七国之乱",
        "description": "吴王刘濞等七国诸侯发动叛乱，被周亚夫平定",
        "year": -154
      },
      {
        "name": "汉武帝北击匈奴",
        "description": "汉武帝派卫青、霍去病北击匈奴，解除北方威胁",
        "year": -127
      },
      {
        "name": "张骞通西域",
        "description": "张骞两次出使西域，开辟丝绸之路",
        "year": -138
      },
      {
        "name": "巫蛊之祸",
        "description": "汉武帝晚年发生巫蛊之祸，太子刘据被迫自杀",
        "year": -91
      },
      {
        "name": "王莽篡汉",
        "description": "王莽篡夺西汉政权，建立新朝",
        "year": 9
      }
    ],
    "culturalAchievements": [
      {
        "name": "罢黜百家，独尊儒术",
        "description": "汉武帝采纳董仲舒建议，确立儒学正统地位",
        "figure": "汉武帝（刘彻）、董仲舒"
      },
      {
        "name": "《史记》",
        "description": "司马迁著《史记》，是中国第一部纪传体通史",
        "figure": "司马迁"
      },
      {
        "name": "丝绸之路",
        "description": "张骞出使西域，开辟丝绸之路",
        "figure": "张骞"
      },
      {
        "name": "汉赋",
        "description": "汉赋兴盛，成为汉代代表性文学体裁",
        "figure": "司马相如、扬雄"
      },
      {
        "name": "太初历",
        "description": "汉武帝时期制定太初历，是中国第一部比较完整的历法",
        "figure": "司马迁、公孙卿"
      }
    ],
    "lineage": [
      {
        "name": "汉高祖（刘邦）",
        "reign": "",
        "years": "前202-前195",
        "description": "西汉开国皇帝，建立汉朝",
        "isFounder": true,
        "order": 1,
        "predecessor": null,
        "successor": "汉惠帝（刘盈）"
      },
      {
        "name": "汉惠帝（刘盈）",
        "reign": "",
        "years": "前 195-前 188",
        "description": "刘邦之子，吕后专权",
        "isFounder": false,
        "order": 2,
        "predecessor": "汉高祖（刘邦）",
        "successor": "汉文帝（刘恒）"
      },
      {
        "name": "前少帝（刘恭）",
        "reign": "",
        "years": "前 188-前 184",
        "description": "汉惠帝之子，吕后临朝称制，后被废杀",
        "isFounder": false,
        "order": 3,
        "predecessor": "汉惠帝（刘盈）",
        "successor": "后少帝（刘弘）"
      },
      {
        "name": "后少帝（刘弘）",
        "reign": "",
        "years": "前 184-前 180",
        "description": "汉惠帝之子，吕后死后被废",
        "isFounder": false,
        "order": 4,
        "predecessor": "汉惠帝（刘盈）",
        "successor": "汉文帝（刘恒）"
      },
      {
        "name": "汉文帝（刘恒）",
        "reign": "",
        "years": "前180-前157",
        "description": "开创文景之治，轻徭薄赋",
        "isFounder": false,
        "order": 5,
        "predecessor": "汉高祖（刘邦）",
        "successor": "汉武帝（刘彻）"
      },
      {
        "name": "汉景帝（刘启）",
        "reign": "",
        "years": "前157-前141",
        "description": "继续文景之治，平定七国之乱",
        "isFounder": false,
        "order": 6,
        "predecessor": "汉文帝（刘恒）",
        "successor": "汉昭帝（刘弗陵）"
      },
      {
        "name": "汉武帝（刘彻）",
        "reign": "",
        "years": "前141-前87",
        "description": "开创汉武盛世，北击匈奴，开辟丝绸之路",
        "isFounder": false,
        "order": 7,
        "predecessor": "汉景帝（刘启）",
        "successor": "汉昭帝（刘弗陵）"
      },
      {
        "name": "汉昭帝（刘弗陵）",
        "reign": "",
        "years": "前 87-前 74",
        "description": "霍光辅政",
        "isFounder": false,
        "order": 8,
        "predecessor": "汉武帝（刘彻）",
        "successor": "汉废帝（刘贺）"
      },
      {
        "name": "汉废帝（刘贺）",
        "reign": "",
        "years": "前 74",
        "description": "汉武帝之孙，在位仅 27 天，被霍光废黜",
        "isFounder": false,
        "order": 9,
        "predecessor": "汉武帝（刘彻）",
        "successor": "汉宣帝（刘询）"
      },
      {
        "name": "汉宣帝（刘询）",
        "reign": "",
        "years": "前74-前49",
        "description": "开创孝宣之治，西汉达到鼎盛",
        "isFounder": false,
        "order": 10,
        "predecessor": "汉武帝（刘彻）",
        "successor": "汉元帝（刘奭）"
      },
      {
        "name": "汉元帝（刘奭）",
        "reign": "",
        "years": "前 48-前 33",
        "description": "西汉中期君主",
        "isFounder": false,
        "order": 11,
        "predecessor": "汉宣帝（刘询）",
        "successor": "汉成帝（刘骜）"
      },
      {
        "name": "汉成帝（刘骜）",
        "reign": "",
        "years": "前 33-前 7",
        "description": "西汉后期君主，外戚专权",
        "isFounder": false,
        "order": 12,
        "predecessor": "汉元帝（刘奭）",
        "successor": "汉哀帝（刘欣）"
      },
      {
        "name": "汉哀帝（刘欣）",
        "reign": "",
        "years": "前 7-前 1",
        "description": "西汉末期君主",
        "isFounder": false,
        "order": 13,
        "predecessor": "汉成帝（刘骜）",
        "successor": "汉平帝（刘衎）"
      },
      {
        "name": "汉平帝（刘衎）",
        "reign": "",
        "years": "1-5 年",
        "description": "王莽专权",
        "isFounder": false,
        "order": 14,
        "predecessor": "汉哀帝（刘欣）",
        "successor": "孺子婴（刘婴）"
      },
      {
        "name": "孺子婴（刘婴）",
        "reign": "",
        "years": "6-8 年",
        "description": "王莽摄政，西汉灭亡",
        "isFounder": false,
        "order": 15,
        "predecessor": "汉平帝（刘衎）",
        "successor": null
      }
    ]
  },
  {
    "id": "eastern-han",
    "name": "东汉",
    "startYear": 25,
    "endYear": 220,
    "period": "classical",
    "founder": "汉光武帝（刘秀）",
    "representativeRulers": [
      "汉光武帝（刘秀）",
      "汉明帝（刘庄）",
      "汉章帝（刘炟）",
      "汉和帝（刘肇）",
      "汉献帝（刘协）"
    ],
    "territory": {
      "center": [
        112.4,
        34.6
      ],
      "zoom": 4,
      "area": 580,
      "description": "定都洛阳，疆域基本继承西汉，西域都护府继续存在，与罗马帝国并列为世界两大强国",
      "capital": "洛阳（今河南洛阳）",
      "borders": {
        "east": "朝鲜半岛",
        "west": "西域",
        "north": "大漠",
        "south": "交趾"
      }
    },
    "events": [
      {
        "name": "东汉建立",
        "description": "刘秀建立东汉，定都洛阳",
        "year": 25
      },
      {
        "name": "光武中兴",
        "description": "汉光武帝励精图治，使东汉国力恢复",
        "year": 40
      },
      {
        "name": "班超经营西域",
        "description": "班超出使西域，恢复汉朝对西域的统治",
        "year": 73
      },
      {
        "name": "党锢之祸",
        "description": "宦官迫害士人，禁锢党人，东汉政治日益腐败",
        "year": 166
      },
      {
        "name": "黄巾起义",
        "description": "张角领导黄巾起义，动摇了东汉统治基础",
        "year": 184
      },
      {
        "name": "董卓之乱",
        "description": "董卓进京专权，各地诸侯起兵讨伐，东汉名存实亡",
        "year": 189
      }
    ],
    "culturalAchievements": [
      {
        "name": "造纸术改进",
        "description": "蔡伦改进造纸术，对人类文明发展产生深远影响",
        "figure": "蔡伦"
      },
      {
        "name": "《汉书》",
        "description": "班固著《汉书》，是中国第一部纪传体断代史",
        "figure": "班固"
      },
      {
        "name": "佛教传入",
        "description": "佛教通过丝绸之路传入中国",
        "figure": null
      },
      {
        "name": "《说文解字》",
        "description": "许慎著《说文解字》，是中国第一部系统分析汉字字形和考究字源的专著",
        "figure": "许慎"
      },
      {
        "name": "浑天仪",
        "description": "张衡发明浑天仪和地动仪，是世界最早的地震仪器",
        "figure": "张衡"
      }
    ],
    "lineage": [
      {
        "name": "汉光武帝（刘秀）",
        "reign": "",
        "years": "25-57 年",
        "description": "东汉开国皇帝，光武中兴",
        "isFounder": true,
        "order": 1,
        "predecessor": null,
        "successor": "汉明帝（刘庄）"
      },
      {
        "name": "汉明帝（刘庄）",
        "reign": "",
        "years": "57-75年",
        "description": "明章之治，东汉继续发展",
        "isFounder": false,
        "order": 2,
        "predecessor": "汉光武帝（刘秀）",
        "successor": "汉和帝（刘肇）"
      },
      {
        "name": "汉章帝（刘炟）",
        "reign": "",
        "years": "75-88年",
        "description": "明章之治达到顶峰",
        "isFounder": false,
        "order": 3,
        "predecessor": "汉明帝（刘庄）",
        "successor": "汉和帝（刘肇）"
      },
      {
        "name": "汉和帝（刘肇）",
        "reign": "",
        "years": "88-105年",
        "description": "永元之隆，东汉鼎盛时期",
        "isFounder": false,
        "order": 4,
        "predecessor": "汉章帝（刘炟）",
        "successor": "汉殇帝（刘隆）"
      },
      {
        "name": "汉殇帝（刘隆）",
        "reign": "",
        "years": "105-106 年",
        "description": "在位仅 1 年，幼年即位",
        "isFounder": false,
        "order": 5,
        "predecessor": "汉和帝（刘肇）",
        "successor": "汉安帝（刘祜）"
      },
      {
        "name": "汉安帝（刘祜）",
        "reign": "",
        "years": "106-125 年",
        "description": "东汉中期君主",
        "isFounder": false,
        "order": 6,
        "predecessor": "汉殇帝（刘隆）",
        "successor": "汉顺帝（刘保）"
      },
      {
        "name": "汉顺帝（刘保）",
        "reign": "",
        "years": "125-144 年",
        "description": "东汉后期君主",
        "isFounder": false,
        "order": 7,
        "predecessor": "汉安帝（刘祜）",
        "successor": "汉冲帝（刘炳）"
      },
      {
        "name": "汉安帝（刘祜）",
        "reign": "",
        "years": "106-125年",
        "description": "东汉中期君主",
        "isFounder": false,
        "order": 6,
        "predecessor": "东汉",
        "successor": "汉顺帝（刘保）"
      },
      {
        "name": "汉顺帝（刘保）",
        "reign": "",
        "years": "125-144 年",
        "description": "东汉后期君主",
        "isFounder": false,
        "order": 7,
        "predecessor": "东汉",
        "successor": "汉质帝（刘缵）"
      },
      {
        "name": "汉冲帝（刘炳）",
        "reign": "",
        "years": "144-145 年",
        "description": "汉顺帝之子，即位时年仅 2 岁，在位不到半年",
        "isFounder": false,
        "order": 8,
        "predecessor": "汉顺帝（刘保）",
        "successor": "汉质帝（刘缵）"
      },
      {
        "name": "汉质帝（刘缵）",
        "reign": "",
        "years": "145-146 年",
        "description": "汉章帝曾孙，被梁冀毒死",
        "isFounder": false,
        "order": 9,
        "predecessor": "汉冲帝（刘炳）",
        "successor": "汉桓帝（刘志）"
      },
      {
        "name": "汉桓帝（刘志）",
        "reign": "",
        "years": "146-168 年",
        "description": "党锢之祸发生",
        "isFounder": false,
        "order": 10,
        "predecessor": "汉质帝（刘缵）",
        "successor": "汉灵帝（刘宏）"
      },
      {
        "name": "汉灵帝（刘宏）",
        "reign": "",
        "years": "168-189 年",
        "description": "黄巾起义爆发",
        "isFounder": false,
        "order": 11,
        "predecessor": "汉桓帝（刘志）",
        "successor": "汉献帝（刘协）"
      },
      {
        "name": "汉献帝（刘协）",
        "reign": "",
        "years": "189-220 年",
        "description": "东汉末代君主，被曹丕废黜，东汉灭亡",
        "isFounder": false,
        "order": 12,
        "predecessor": "汉灵帝（刘宏）",
        "successor": null
      }
    ]
  },
  {
    "id": "three-kingdoms",
    "name": "三国",
    "startYear": 220,
    "endYear": 280,
    "period": "classical",
    "founder": "魏文帝（曹丕）",
    "representativeRulers": [
      "魏文帝（曹丕）",
      "蜀汉昭烈帝（刘备）",
      "吴大帝（孙权）",
      "诸葛亮（孔明）",
      "司马懿"
    ],
    "territory": {
      "center": [
        112.4,
        34.6
      ],
      "zoom": 4,
      "area": 540,
      "description": "魏蜀吴三国鼎立，曹魏据中原，蜀汉据益州，东吴据江东",
      "capital": "洛阳（魏）、成都（蜀）、建业（吴）",
      "borders": {
        "east": "东海",
        "west": "益州",
        "north": "大漠",
        "south": "交州"
      }
    },
    "events": [
      {
        "name": "官渡之战",
        "description": "曹操在官渡之战中以少胜多，击败袁绍，奠定统一北方的基础",
        "year": 200
      },
      {
        "name": "赤壁之战",
        "description": "孙刘联军在赤壁大败曹操，奠定三国鼎立基础",
        "year": 208
      },
      {
        "name": "夷陵之战",
        "description": "陆逊在夷陵之战中大败刘备，三国鼎立局面最终形成",
        "year": 221
      },
      {
        "name": "曹丕代汉",
        "description": "曹丕逼迫汉献帝禅让，建立魏国，东汉灭亡",
        "year": 220
      },
      {
        "name": "西晋统一",
        "description": "西晋灭吴，结束三国分裂局面",
        "year": 280
      }
    ],
    "culturalAchievements": [
      {
        "name": "建安文学",
        "description": "曹操、曹丕、曹植父子开创建安文学",
        "figure": "曹操、曹丕、曹植"
      },
      {
        "name": "《出师表》",
        "description": "诸葛亮著《出师表》，成为千古名篇",
        "figure": "诸葛亮"
      },
      {
        "name": "九品中正制",
        "description": "曹丕采纳陈群建议，实行九品中正制",
        "figure": "陈群"
      }
    ],
    "battles": [
      {
        "name": "官渡之战",
        "description": "曹操以少胜多击败袁绍，奠定统一北方的基础",
        "year": 200,
        "coord": [
          114.5,
          34.8
        ],
        "winner": "曹操",
        "loser": "袁绍"
      },
      {
        "name": "赤壁之战",
        "description": "孙刘联军火攻曹操水军，大败曹军，奠定三国鼎立",
        "year": 208,
        "coord": [
          112.5,
          29.8
        ],
        "winner": "孙权、刘备",
        "loser": "曹操"
      },
      {
        "name": "夷陵之战",
        "description": "陆逊火烧连营，大败刘备，三国鼎立局面最终形成",
        "year": 221,
        "coord": [
          111,
          30.8
        ],
        "winner": "陆逊（吴）",
        "loser": "刘备（蜀）"
      },
      {
        "name": "六出祁山",
        "description": "诸葛亮多次北伐曹魏，虽未成功但展现卓越军事才能",
        "year": 228,
        "coord": [
          105.5,
          33.5
        ],
        "winner": "曹魏",
        "loser": "蜀汉"
      }
    ],
    "lineage": [
      {
        "name": "魏文帝（曹丕）",
        "reign": "",
        "years": "220-226 年",
        "description": "曹魏开国皇帝，代汉建魏",
        "isFounder": true,
        "order": 1,
        "regime": "曹魏",
        "predecessor": null,
        "successor": "魏明帝（曹叡）"
      },
      {
        "name": "魏明帝（曹叡）",
        "reign": "",
        "years": "226-239 年",
        "description": "曹丕之子，诸葛亮北伐的主要对手",
        "isFounder": false,
        "order": 2,
        "regime": "曹魏",
        "predecessor": "魏文帝（曹丕）",
        "successor": "魏齐王（曹芳）"
      },
      {
        "name": "魏齐王（曹芳）",
        "reign": "",
        "years": "239-254 年",
        "description": "曹叡养子，司马懿专权",
        "isFounder": false,
        "order": 3,
        "regime": "曹魏",
        "predecessor": "魏明帝（曹叡）",
        "successor": "魏高贵乡公（曹髦）"
      },
      {
        "name": "魏高贵乡公（曹髦）",
        "reign": "",
        "years": "254-260 年",
        "description": "反抗司马昭失败被杀",
        "isFounder": false,
        "order": 4,
        "regime": "曹魏",
        "predecessor": "魏齐王（曹芳）",
        "successor": "魏元帝（曹奂）"
      },
      {
        "name": "魏元帝（曹奂）",
        "reign": "",
        "years": "260-265 年",
        "description": "曹魏末代皇帝，被司马炎废黜",
        "isFounder": false,
        "order": 5,
        "regime": "曹魏",
        "predecessor": "魏高贵乡公（曹髦）",
        "successor": null
      },
      {
        "name": "汉昭烈帝（刘备）",
        "reign": "",
        "years": "221-223 年",
        "description": "蜀汉开国皇帝，建立蜀汉",
        "isFounder": true,
        "order": 6,
        "regime": "蜀汉",
        "predecessor": null,
        "successor": "汉后主（刘禅）"
      },
      {
        "name": "汉后主（刘禅）",
        "reign": "",
        "years": "223-263 年",
        "description": "刘备之子，蜀汉末代皇帝",
        "isFounder": false,
        "order": 7,
        "regime": "蜀汉",
        "predecessor": "汉昭烈帝（刘备）",
        "successor": null
      },
      {
        "name": "吴大帝（孙权）",
        "reign": "",
        "years": "222-252 年",
        "description": "东吴开国皇帝，建立东吴",
        "isFounder": true,
        "order": 8,
        "regime": "东吴",
        "predecessor": null,
        "successor": "吴会稽王（孙亮）"
      },
      {
        "name": "吴会稽王（孙亮）",
        "reign": "",
        "years": "252-258 年",
        "description": "孙权之子，幼年即位",
        "isFounder": false,
        "order": 9,
        "regime": "东吴",
        "predecessor": "吴大帝（孙权）",
        "successor": "吴景帝（孙休）"
      },
      {
        "name": "吴景帝（孙休）",
        "reign": "",
        "years": "258-264 年",
        "description": "孙权之子",
        "isFounder": false,
        "order": 10,
        "regime": "东吴",
        "predecessor": "吴会稽王（孙亮）",
        "successor": "吴末帝（孙皓）"
      },
      {
        "name": "吴末帝（孙皓）",
        "reign": "",
        "years": "264-280 年",
        "description": "东吴末代皇帝，被西晋灭亡",
        "isFounder": false,
        "order": 11,
        "regime": "东吴",
        "predecessor": "吴景帝（孙休）",
        "successor": null
      }
    ]
  },
  {
    "id": "western-jin",
    "name": "西晋",
    "startYear": 265,
    "endYear": 316,
    "period": "classical",
    "founder": "晋武帝（司马炎）",
    "representativeRulers": [
      "晋武帝（司马炎）",
      "晋惠帝（司马衷）",
      "晋怀帝（司马炽）"
    ],
    "territory": {
      "center": [
        112.4,
        34.6
      ],
      "zoom": 4,
      "area": 543,
      "description": "短暂统一全国，疆域继承三国，但八王之乱后迅速衰落",
      "capital": "洛阳（今河南洛阳）",
      "borders": {
        "east": "东海",
        "west": "西域",
        "north": "大漠",
        "south": "交州"
      }
    },
    "events": [
      {
        "name": "西晋建立",
        "description": "司马炎逼迫魏元帝禅让，建立晋朝",
        "year": 265
      },
      {
        "name": "西晋统一全国",
        "description": "西晋灭吴，统一全国",
        "year": 280
      },
      {
        "name": "八王之乱",
        "description": "西晋皇室内部争夺政权的内乱，导致西晋衰落",
        "year": 291
      }
    ],
    "culturalAchievements": [
      {
        "name": "《三国志》",
        "description": "陈寿著《三国志》，记录三国历史",
        "figure": "陈寿"
      },
      {
        "name": "玄学兴起",
        "description": "以老庄思想为核心的玄学兴起",
        "figure": "王弼、何晏"
      },
      {
        "name": "书法艺术",
        "description": "书法艺术发展，出现钟繇等书法大家",
        "figure": "钟繇"
      }
    ],
    "lineage": [
      {
        "name": "晋武帝（司马炎）",
        "reign": "",
        "years": "265-290 年",
        "description": "西晋开国皇帝，代魏建晋，统一全国",
        "isFounder": true,
        "order": 1,
        "predecessor": null,
        "successor": "晋惠帝（司马衷）"
      },
      {
        "name": "晋惠帝（司马衷）",
        "reign": "",
        "years": "290-307年",
        "description": "晋武帝之子，八王之乱时期",
        "isFounder": false,
        "order": 2,
        "predecessor": "晋武帝（司马炎）",
        "successor": "晋怀帝（司马炽）"
      },
      {
        "name": "晋怀帝（司马炽）",
        "reign": "",
        "years": "307-313年",
        "description": "晋武帝之子，被刘聪俘虏",
        "isFounder": false,
        "order": 3,
        "predecessor": "晋武帝（司马炎）",
        "successor": "晋愍帝（司马邺）"
      },
      {
        "name": "晋愍帝（司马邺）",
        "reign": "",
        "years": "313-316年",
        "description": "西晋末代皇帝，被刘聪俘虏，西晋灭亡",
        "isFounder": false,
        "order": 4,
        "predecessor": "晋武帝（司马炎）",
        "successor": null
      }
    ]
  },
  {
    "id": "eastern-jin",
    "name": "东晋",
    "startYear": 317,
    "endYear": 420,
    "period": "classical",
    "founder": "晋元帝（司马睿）",
    "representativeRulers": [
      "晋元帝（司马睿）",
      "晋明帝（司马绍）",
      "晋孝武帝（司马曜）"
    ],
    "territory": {
      "center": [
        118.8,
        32.1
      ],
      "zoom": 4,
      "area": 280,
      "description": "偏安江南，与北方十六国对峙，文化上玄学、书法、绘画达到高峰",
      "capital": "建康（今江苏南京）",
      "borders": {
        "east": "东海",
        "west": "益州",
        "north": "淮河",
        "south": "交州"
      }
    },
    "events": [
      {
        "name": "东晋建立",
        "description": "司马睿在建康（今南京）建立东晋",
        "year": 317
      },
      {
        "name": "淝水之战",
        "description": "东晋在淝水之战中以少胜多，击败前秦",
        "year": 383
      },
      {
        "name": "刘裕代晋",
        "description": "刘裕逼迫晋恭帝禅让，建立刘宋",
        "year": 420
      }
    ],
    "culturalAchievements": [
      {
        "name": "王羲之书法",
        "description": "王羲之被誉为\"书圣\"，《兰亭序》被誉为\"天下第一行书\"",
        "figure": "王羲之"
      },
      {
        "name": "顾恺之绘画",
        "description": "顾恺之开创人物画新风格",
        "figure": "顾恺之"
      },
      {
        "name": "陶渊明田园诗",
        "description": "陶渊明开创田园诗派",
        "figure": "陶渊明"
      }
    ],
    "lineage": [
      {
        "name": "晋元帝（司马睿）",
        "reign": "",
        "years": "317-322 年",
        "description": "东晋开国皇帝，建立东晋",
        "isFounder": true,
        "order": 1,
        "predecessor": null,
        "successor": "晋明帝（司马绍）"
      },
      {
        "name": "晋明帝（司马绍）",
        "reign": "",
        "years": "322-325年",
        "description": "晋元帝之子",
        "isFounder": false,
        "order": 2,
        "predecessor": "晋元帝（司马睿）",
        "successor": "晋成帝（司马衍）"
      },
      {
        "name": "晋成帝（司马衍）",
        "reign": "",
        "years": "325-342年",
        "description": "晋明帝之子",
        "isFounder": false,
        "order": 3,
        "predecessor": "晋明帝（司马绍）",
        "successor": "晋康帝（司马岳）"
      },
      {
        "name": "晋康帝（司马岳）",
        "reign": "",
        "years": "342-344年",
        "description": "晋成帝之弟",
        "isFounder": false,
        "order": 4,
        "predecessor": "晋明帝（司马绍）",
        "successor": "晋穆帝（司马聃）"
      },
      {
        "name": "晋穆帝（司马聃）",
        "reign": "",
        "years": "344-361年",
        "description": "晋康帝之子",
        "isFounder": false,
        "order": 5,
        "predecessor": "晋明帝（司马绍）",
        "successor": "晋哀帝（司马丕）"
      },
      {
        "name": "晋哀帝（司马丕）",
        "reign": "",
        "years": "361-365年",
        "description": "晋成帝之子",
        "isFounder": false,
        "order": 6,
        "predecessor": "东晋",
        "successor": "晋废帝（司马奕）"
      },
      {
        "name": "晋废帝（司马奕）",
        "reign": "",
        "years": "365-371年",
        "description": "晋哀帝之弟",
        "isFounder": false,
        "order": 7,
        "predecessor": "东晋",
        "successor": "晋简文帝（司马昱）"
      },
      {
        "name": "晋简文帝（司马昱）",
        "reign": "",
        "years": "371-372年",
        "description": "晋元帝之子",
        "isFounder": false,
        "order": 8,
        "predecessor": "东晋",
        "successor": "晋安帝（司马德宗）"
      },
      {
        "name": "晋孝武帝（司马曜）",
        "reign": "",
        "years": "372-396年",
        "description": "晋简文帝之子，淝水之战时期",
        "isFounder": false,
        "order": 9,
        "predecessor": "晋简文帝（司马昱）",
        "successor": "晋安帝（司马德宗）"
      },
      {
        "name": "晋安帝（司马德宗）",
        "reign": "",
        "years": "396-418年",
        "description": "晋孝武帝之子",
        "isFounder": false,
        "order": 10,
        "predecessor": "晋孝武帝（司马曜）",
        "successor": "晋恭帝（司马德文）"
      },
      {
        "name": "晋恭帝（司马德文）",
        "reign": "",
        "years": "418-420年",
        "description": "晋安帝之弟，东晋末代皇帝",
        "isFounder": false,
        "order": 11,
        "predecessor": "晋孝武帝（司马曜）",
        "successor": null
      }
    ]
  },
  {
    "id": "northern-southern-dynasties",
    "name": "南北朝",
    "startYear": 420,
    "endYear": 589,
    "period": "classical",
    "founder": "宋武帝（刘裕）",
    "representativeRulers": [
      "宋武帝（刘裕）",
      "北魏孝文帝（元宏）",
      "梁武帝（萧衍）"
    ],
    "territory": {
      "center": [
        112.4,
        34.6
      ],
      "zoom": 4,
      "area": 400,
      "description": "南北分裂，南朝据江南，北朝据中原，北魏孝文帝改革促进民族融合",
      "capital": "建康（南朝）、洛阳（北朝）",
      "borders": {
        "east": "东海",
        "west": "西域",
        "north": "大漠",
        "south": "交州"
      }
    },
    "events": [
      {
        "name": "刘宋建立",
        "description": "刘裕建立刘宋，南朝开始",
        "year": 420
      },
      {
        "name": "北魏孝文帝改革",
        "description": "北魏孝文帝推行汉化改革，促进民族融合",
        "year": 490
      },
      {
        "name": "隋灭陈",
        "description": "隋朝灭陈，结束南北朝分裂局面",
        "year": 589
      }
    ],
    "culturalAchievements": [
      {
        "name": "龙门石窟",
        "description": "开凿龙门石窟，是中国佛教艺术宝库",
        "figure": null
      },
      {
        "name": "《文心雕龙》",
        "description": "刘勰著《文心雕龙》，是中国文学理论批评巨著",
        "figure": "刘勰"
      },
      {
        "name": "祖冲之计算圆周率",
        "description": "祖冲之将圆周率精确到小数点后七位",
        "figure": "祖冲之"
      }
    ],
    "lineage": [
      {
        "name": "宋武帝（刘裕）",
        "reign": "",
        "years": "420-422 年",
        "description": "南朝宋开国皇帝，建立刘宋",
        "isFounder": true,
        "order": 1,
        "regime": "南朝宋",
        "predecessor": null,
        "successor": "宋少帝（刘义符）"
      },
      {
        "name": "宋文帝（刘义隆）",
        "reign": "",
        "years": "424-453 年",
        "description": "开创元嘉之治，南朝宋鼎盛时期",
        "isFounder": false,
        "order": 2,
        "regime": "南朝宋",
        "predecessor": "宋武帝（刘裕）",
        "successor": "宋孝武帝（刘骏）"
      },
      {
        "name": "北魏道武帝（拓跋珪）",
        "reign": "",
        "years": "386-409 年",
        "description": "北魏开国皇帝，建立北魏",
        "isFounder": true,
        "order": 3,
        "regime": "北魏",
        "predecessor": null,
        "successor": "北魏明元帝（拓跋嗣）"
      },
      {
        "name": "北魏孝文帝（元宏）",
        "reign": "",
        "years": "471-499 年",
        "description": "推行汉化改革，促进民族融合，迁都洛阳",
        "isFounder": false,
        "order": 4,
        "regime": "北魏",
        "predecessor": "北魏献文帝（拓跋弘）",
        "successor": "北魏宣武帝（元恪）"
      },
      {
        "name": "梁武帝（萧衍）",
        "reign": "",
        "years": "502-549 年",
        "description": "南朝梁开国皇帝，在位时间最长，晚年爆发侯景之乱",
        "isFounder": true,
        "order": 5,
        "regime": "南朝梁",
        "predecessor": null,
        "successor": "梁简文帝（萧纲）"
      },
      {
        "name": "陈武帝（陈霸先）",
        "reign": "",
        "years": "557-559 年",
        "description": "南朝陈开国皇帝，建立陈朝",
        "isFounder": true,
        "order": 6,
        "regime": "南朝陈",
        "predecessor": null,
        "successor": "陈文帝（陈蒨）"
      }
    ]
  },
  {
    "id": "sui",
    "name": "隋朝",
    "startYear": 581,
    "endYear": 618,
    "period": "medieval",
    "founder": "隋文帝（杨坚）",
    "representativeRulers": [
      "隋文帝（杨坚）",
      "隋炀帝（杨广）"
    ],
    "territory": {
      "center": [
        108.9,
        34.3
      ],
      "zoom": 4,
      "area": 470,
      "description": "结束近四百年分裂，重新统一全国，开凿大运河连接南北",
      "capital": "大兴（今陕西西安）",
      "borders": {
        "east": "东海",
        "west": "西域",
        "north": "大漠",
        "south": "交州"
      }
    },
    "events": [
      {
        "name": "隋朝建立",
        "description": "杨坚逼迫北周静帝禅让，建立隋朝",
        "year": 581
      },
      {
        "name": "隋灭陈统一全国",
        "description": "隋朝灭陈，结束近四百年的分裂局面",
        "year": 589
      },
      {
        "name": "开凿大运河",
        "description": "隋炀帝开凿大运河，连接南北",
        "year": 605
      }
    ],
    "culturalAchievements": [
      {
        "name": "科举制度创立",
        "description": "隋朝创立科举制度，影响中国一千多年",
        "figure": "隋文帝（杨坚）"
      },
      {
        "name": "大运河",
        "description": "开凿贯通南北的大运河，促进经济文化交流",
        "figure": "隋炀帝（杨广）"
      },
      {
        "name": "赵州桥",
        "description": "李春设计建造赵州桥，是世界现存最古老的石拱桥",
        "figure": "李春"
      }
    ],
    "lineage": [
      {
        "name": "隋文帝（杨坚）",
        "reign": "",
        "years": "581-604 年",
        "description": "隋朝开国皇帝，结束南北朝分裂",
        "isFounder": true,
        "order": 1,
        "predecessor": null,
        "successor": "隋炀帝（杨广）"
      },
      {
        "name": "隋炀帝（杨广）",
        "reign": "",
        "years": "604-618年",
        "description": "隋文帝之子，开凿大运河，隋朝灭亡",
        "isFounder": false,
        "order": 2,
        "predecessor": "隋文帝（杨坚）",
        "successor": null
      }
    ]
  },
  {
    "id": "tang",
    "name": "唐朝",
    "startYear": 618,
    "endYear": 907,
    "period": "medieval",
    "founder": "唐高祖（李渊）",
    "representativeRulers": [
      "唐高祖（李渊）",
      "唐太宗（李世民）",
      "武则天（武曌）",
      "唐玄宗（李隆基）"
    ],
    "territory": {
      "center": [
        108.9,
        34.3
      ],
      "zoom": 4,
      "area": 1237,
      "description": "唐朝极盛时期疆域空前辽阔，东起朝鲜半岛，西达咸海，北包贝加尔湖，南至越南中部",
      "capital": "长安（今陕西西安）",
      "borders": {
        "east": "朝鲜半岛",
        "west": "咸海",
        "north": "贝加尔湖",
        "south": "越南中部"
      }
    },
    "events": [
      {
        "name": "唐朝建立",
        "description": "李渊建立唐朝，定都长安",
        "year": 618
      },
      {
        "name": "玄武门之变",
        "description": "李世民在玄武门发动政变，杀死太子李建成，后即位为唐太宗",
        "year": 626
      },
      {
        "name": "贞观之治",
        "description": "唐太宗励精图治，开创贞观盛世",
        "year": 627
      },
      {
        "name": "武则天称帝",
        "description": "武则天称帝，建立周朝，是中国历史上唯一的女皇帝",
        "year": 690
      },
      {
        "name": "开元盛世",
        "description": "唐玄宗开元年间，唐朝达到鼎盛",
        "year": 713
      },
      {
        "name": "安史之乱",
        "description": "安禄山、史思明发动叛乱，唐朝由盛转衰",
        "year": 755
      },
      {
        "name": "黄巢起义",
        "description": "黄巢领导农民起义，攻入长安，唐朝统治崩溃",
        "year": 875
      }
    ],
    "culturalAchievements": [
      {
        "name": "唐诗",
        "description": "唐诗达到中国古典诗歌巅峰",
        "figure": "李白、杜甫、白居易等"
      },
      {
        "name": "雕版印刷术",
        "description": "雕版印刷术在唐朝发明，促进了文化传播",
        "figure": null
      },
      {
        "name": "玄奘西行",
        "description": "玄奘西行取经，促进中印文化交流",
        "figure": "玄奘"
      },
      {
        "name": "敦煌艺术",
        "description": "敦煌莫高窟艺术达到高峰，是世界艺术宝库",
        "figure": null
      },
      {
        "name": "唐传奇",
        "description": "唐代传奇小说兴起，标志着中国小说的成熟",
        "figure": "元稹、白行简等"
      },
      {
        "name": "楷书四大家",
        "description": "颜真卿、柳公权等书法家创立颜体、柳体，影响深远",
        "figure": "颜真卿、柳公权、欧阳询、赵孟頫"
      },
      {
        "name": "《千金方》",
        "description": "孙思邈著《千金方》，是中国最早的临床医学百科全书",
        "figure": "孙思邈"
      }
    ],
    "battles": [
      {
        "name": "虎牢关之战",
        "description": "李世民以少胜多，击败窦建德和王世充，统一中原",
        "year": 621,
        "coord": [
          113,
          34.7
        ],
        "winner": "李世民",
        "loser": "窦建德、王世充"
      },
      {
        "name": "安史之乱",
        "description": "安禄山、史思明发动叛乱，唐朝由盛转衰",
        "year": 755,
        "coord": [
          114,
          34.8
        ],
        "winner": "安禄山（叛军）",
        "loser": "唐军"
      },
      {
        "name": "怛罗斯之战",
        "description": "唐朝与阿拉伯帝国在中亚的决战，虽败但促进了文化",
        "year": 751,
        "coord": [
          75,
          40
        ],
        "winner": "阿拉伯帝国",
        "loser": "唐朝"
      }
    ],
    "lineage": [
      {
        "name": "唐高祖（李渊）",
        "reign": "武德",
        "years": "618-626",
        "description": "唐朝开国皇帝，建立唐朝，定都长安",
        "isFounder": true,
        "order": 1,
        "predecessor": null,
        "successor": "唐太宗（李世民）"
      },
      {
        "name": "唐太宗（李世民）",
        "reign": "贞观",
        "years": "626-649",
        "description": "开创贞观之治，是中国历史上最著名的皇帝之一",
        "isFounder": false,
        "order": 2,
        "predecessor": "唐高祖（李渊）",
        "successor": "唐中宗（李显）"
      },
      {
        "name": "唐高宗（李治）",
        "reign": "永徽等",
        "years": "649-683",
        "description": "在位期间国力强盛，版图达到极盛",
        "isFounder": false,
        "order": 3,
        "predecessor": "唐太宗（李世民）",
        "successor": "唐中宗（李显）"
      },
      {
        "name": "唐睿宗（李旦）",
        "reign": "文明、景云等",
        "years": "684-690, 710-712",
        "description": "武则天之子，两度在位",
        "isFounder": false,
        "order": 4,
        "predecessor": "唐高宗（李治）",
        "successor": "武则天（武曌）"
      },
      {
        "name": "武则天（武曌）",
        "reign": "天授等",
        "years": "690-705",
        "description": "中国历史上唯一的女皇帝，建立武周",
        "isFounder": false,
        "order": 5,
        "predecessor": "唐睿宗（李旦）",
        "successor": "唐玄宗（李隆基）"
      },
      {
        "name": "唐玄宗（李隆基）",
        "reign": "先天、开元、天宝",
        "years": "712-756",
        "description": "开创开元盛世，唐朝达到鼎盛，晚年发生安史之乱",
        "isFounder": false,
        "order": 6,
        "predecessor": "唐睿宗（李旦）",
        "successor": "唐肃宗（李亨）"
      },
      {
        "name": "唐肃宗（李亨）",
        "reign": "至德、乾元等",
        "years": "756-762",
        "description": "在安史之乱中即位，平定叛乱",
        "isFounder": false,
        "order": 7,
        "predecessor": "唐玄宗（李隆基）",
        "successor": "唐代宗（李豫）"
      },
      {
        "name": "唐代宗（李豫）",
        "reign": "宝应、大历等",
        "years": "762-779",
        "description": "继续平定叛乱，恢复统治",
        "isFounder": false,
        "order": 8,
        "predecessor": "唐肃宗（李亨）",
        "successor": "唐德宗（李适）"
      },
      {
        "name": "唐德宗（李适）",
        "reign": "建中、贞元",
        "years": "779-805",
        "description": "唐代宗之子，实行两税法",
        "isFounder": false,
        "order": 9,
        "predecessor": "唐代宗（李豫）",
        "successor": "唐顺宗（李诵）"
      },
      {
        "name": "唐顺宗（李诵）",
        "reign": "永贞",
        "years": "805",
        "description": "唐德宗之子，在位仅 8 个月，永贞革新",
        "isFounder": false,
        "order": 10,
        "predecessor": "唐德宗（李适）",
        "successor": "唐穆宗（李恒）"
      },
      {
        "name": "唐宪宗（李纯）",
        "reign": "元和",
        "years": "805-820",
        "description": "唐顺宗之子，元和中兴，削弱藩镇势力",
        "isFounder": false,
        "order": 11,
        "predecessor": "唐顺宗（李诵）",
        "successor": "唐懿宗（李漼）"
      },
      {
        "name": "唐穆宗（李恒）",
        "reign": "长庆",
        "years": "820-824",
        "description": "唐宪宗之子，藩镇势力复起",
        "isFounder": false,
        "order": 12,
        "predecessor": "唐宪宗（李纯）",
        "successor": "唐宣宗（李忱）"
      },
      {
        "name": "唐敬宗（李湛）",
        "reign": "宝历",
        "years": "824-826",
        "description": "唐穆宗之子，沉迷游乐，被宦官杀害",
        "isFounder": false,
        "order": 13,
        "predecessor": "唐穆宗（李恒）",
        "successor": "唐文宗（李昂）"
      },
      {
        "name": "唐文宗（李昂）",
        "reign": "太和、开成",
        "years": "826-840",
        "description": "唐穆宗之子，甘露之变失败，宦官专权",
        "isFounder": false,
        "order": 14,
        "predecessor": "唐穆宗（李恒）",
        "successor": "唐武宗（李炎）"
      },
      {
        "name": "唐武宗（李炎）",
        "reign": "会昌",
        "years": "840-846",
        "description": "唐穆宗之子，会昌灭佛",
        "isFounder": false,
        "order": 15,
        "predecessor": "唐穆宗（李恒）",
        "successor": "唐宣宗（李忱）"
      },
      {
        "name": "唐宣宗（李忱）",
        "reign": "大中",
        "years": "846-859",
        "description": "唐宪宗之子，大中之治，被称为\"小太宗\"",
        "isFounder": false,
        "order": 16,
        "predecessor": "唐宪宗（李纯）",
        "successor": "唐僖宗（李儇）"
      },
      {
        "name": "唐懿宗（李漼）",
        "reign": "咸通",
        "years": "859-873",
        "description": "唐宣宗之子，唐朝开始衰落",
        "isFounder": false,
        "order": 17,
        "predecessor": "唐宣宗（李忱）",
        "successor": "唐僖宗（李儇）"
      },
      {
        "name": "唐僖宗（李儇）",
        "reign": "乾符、中和",
        "years": "873-888",
        "description": "唐懿宗之子，黄巢起义爆发",
        "isFounder": false,
        "order": 18,
        "predecessor": "唐懿宗（李漼）",
        "successor": "唐昭宗（李晔）"
      },
      {
        "name": "唐昭宗（李晔）",
        "reign": "龙纪、大顺等",
        "years": "888-904",
        "description": "唐朝末期皇帝，无力挽救唐朝衰亡",
        "isFounder": false,
        "order": 19,
        "predecessor": "唐僖宗（李儇）",
        "successor": "唐哀帝（李柷）"
      },
      {
        "name": "唐哀帝（李柷）",
        "reign": "天祐",
        "years": "904-907",
        "description": "唐朝末代皇帝，被朱温废黜",
        "isFounder": false,
        "order": 20,
        "predecessor": "唐昭宗（李晔）",
        "successor": null
      }
    ]
  },
  {
    "id": "five-dynasties",
    "name": "五代十国",
    "startYear": 907,
    "endYear": 960,
    "period": "medieval",
    "founder": "后梁太祖（朱温）",
    "representativeRulers": [
      "后梁太祖（朱温）",
      "后唐庄宗（李存勖）",
      "后周世宗（柴荣）"
    ],
    "territory": {
      "center": [
        114.3,
        34.8
      ],
      "zoom": 4,
      "area": 200,
      "description": "政权更迭频繁，北方五代相继，南方十国并立，战乱不断",
      "capital": "开封、洛阳",
      "borders": {
        "east": "东海",
        "west": "关中",
        "north": "契丹",
        "south": "南唐、吴越"
      }
    },
    "events": [
      {
        "name": "后梁建立",
        "description": "朱温灭唐，建立后梁，五代开始",
        "year": 907
      },
      {
        "name": "陈桥兵变",
        "description": "赵匡胤发动陈桥兵变，建立宋朝",
        "year": 960
      },
      {
        "name": "周世宗改革",
        "description": "后周世宗柴荣改革，为北宋统一奠定基础",
        "year": 955
      }
    ],
    "culturalAchievements": [
      {
        "name": "词的发展",
        "description": "词在五代时期得到发展",
        "figure": "李煜、冯延巳"
      },
      {
        "name": "雕版印刷",
        "description": "雕版印刷术进一步发展",
        "figure": null
      },
      {
        "name": "《花间集》",
        "description": "中国最早的文人词总集",
        "figure": "赵崇祚"
      }
    ],
    "lineage": [
      {
        "name": "后梁太祖（朱温）",
        "reign": "",
        "years": "907-912 年",
        "description": "五代十国开国皇帝，建立后梁",
        "isFounder": true,
        "order": 1,
        "predecessor": null,
        "successor": "后梁末帝（朱友贞）"
      },
      {
        "name": "后梁",
        "reign": "907-923年",
        "years": "16年",
        "description": "朱温建立，五代之首",
        "isFounder": true,
        "order": 2,
        "predecessor": "后梁太祖（朱温）",
        "successor": "后唐"
      },
      {
        "name": "后梁末帝（朱友贞）",
        "reign": "",
        "years": "913-923年",
        "description": "后梁末代皇帝",
        "isFounder": false,
        "order": 3,
        "predecessor": "后梁",
        "successor": "后唐"
      },
      {
        "name": "后唐",
        "reign": "923-936年",
        "years": "13年",
        "description": "李存勖建立，灭后梁",
        "isFounder": false,
        "order": 4,
        "predecessor": "五代十国",
        "successor": "后晋"
      },
      {
        "name": "后唐庄宗（李存勖）",
        "reign": "",
        "years": "923-926年",
        "description": "后唐开国皇帝",
        "isFounder": false,
        "order": 5,
        "predecessor": "后唐",
        "successor": "后唐明宗（李嗣源）"
      },
      {
        "name": "后唐明宗（李嗣源）",
        "reign": "",
        "years": "926-933年",
        "description": "后唐中期君主",
        "isFounder": false,
        "order": 6,
        "predecessor": "后唐",
        "successor": "后晋"
      },
      {
        "name": "后晋",
        "reign": "936-947年",
        "years": "11年",
        "description": "石敬瑭建立，割让燕云十六州",
        "isFounder": false,
        "order": 7,
        "predecessor": "五代十国",
        "successor": "后汉"
      },
      {
        "name": "后晋高祖（石敬瑭）",
        "reign": "",
        "years": "936-942年",
        "description": "后晋开国皇帝",
        "isFounder": false,
        "order": 8,
        "predecessor": "后晋",
        "successor": "后晋出帝（石重贵）"
      },
      {
        "name": "后晋出帝（石重贵）",
        "reign": "",
        "years": "942-947年",
        "description": "后晋末代皇帝",
        "isFounder": false,
        "order": 9,
        "predecessor": "后晋",
        "successor": "后汉"
      },
      {
        "name": "后汉",
        "reign": "947-950年",
        "years": "3年",
        "description": "刘知远建立，统治时间短暂",
        "isFounder": false,
        "order": 10,
        "predecessor": "五代十国",
        "successor": "后周"
      },
      {
        "name": "后汉高祖（刘知远）",
        "reign": "",
        "years": "947-948年",
        "description": "后汉开国皇帝",
        "isFounder": false,
        "order": 11,
        "predecessor": "后汉",
        "successor": "后汉隐帝（刘承祐）"
      },
      {
        "name": "后汉隐帝（刘承祐）",
        "reign": "",
        "years": "948-950年",
        "description": "后汉末代皇帝",
        "isFounder": false,
        "order": 12,
        "predecessor": "后汉",
        "successor": "后周"
      },
      {
        "name": "后周",
        "reign": "951-960年",
        "years": "9年",
        "description": "郭威建立，为北宋统一奠定基础",
        "isFounder": false,
        "order": 13,
        "predecessor": "五代十国",
        "successor": "后周太祖（郭威）"
      },
      {
        "name": "后周太祖（郭威）",
        "reign": "",
        "years": "951-954年",
        "description": "后周开国皇帝",
        "isFounder": false,
        "order": 14,
        "predecessor": "后周",
        "successor": "后周世宗（柴荣）"
      },
      {
        "name": "后周世宗（柴荣）",
        "reign": "",
        "years": "954-959年",
        "description": "后周中期君主，改革图强",
        "isFounder": false,
        "order": 15,
        "predecessor": "后周",
        "successor": "后周恭帝（柴宗训）"
      },
      {
        "name": "后周恭帝（柴宗训）",
        "reign": "",
        "years": "959-960年",
        "description": "后周末代皇帝，陈桥兵变",
        "isFounder": false,
        "order": 16,
        "predecessor": "后周",
        "successor": null
      }
    ]
  },
  {
    "id": "northern-song",
    "name": "北宋",
    "startYear": 960,
    "endYear": 1127,
    "period": "medieval",
    "founder": "宋太祖（赵匡胤）",
    "representativeRulers": [
      "宋太祖（赵匡胤）",
      "宋太宗（赵光义）",
      "宋仁宗（赵祯）",
      "宋神宗（赵顼）"
    ],
    "territory": {
      "center": [
        114.3,
        34.8
      ],
      "zoom": 4,
      "area": 280,
      "description": "结束五代十国分裂，与辽、西夏并立，经济文化高度繁荣",
      "capital": "开封（今河南开封）",
      "borders": {
        "east": "东海",
        "west": "西夏",
        "north": "辽国",
        "south": "大理"
      }
    },
    "events": [
      {
        "name": "北宋建立",
        "description": "赵匡胤建立宋朝，定都开封",
        "year": 960
      },
      {
        "name": "杯酒释兵权",
        "description": "宋太祖通过酒宴解除将领兵权，加强中央集权",
        "year": 961
      },
      {
        "name": "澶渊之盟",
        "description": "北宋与辽国订立澶渊之盟，维持百年和平",
        "year": 1005
      },
      {
        "name": "庆历新政",
        "description": "范仲淹推行庆历新政，试图改革吏治",
        "year": 1043
      },
      {
        "name": "王安石变法",
        "description": "王安石在宋神宗支持下实行变法",
        "year": 1069
      },
      {
        "name": "靖康之变",
        "description": "金军攻破开封，俘虏徽、钦二帝，北宋灭亡",
        "year": 1127
      }
    ],
    "culturalAchievements": [
      {
        "name": "活字印刷术",
        "description": "毕昇发明活字印刷术",
        "figure": "毕昇"
      },
      {
        "name": "指南针应用",
        "description": "指南针开始应用于航海",
        "figure": null
      },
      {
        "name": "火药武器",
        "description": "火药开始用于军事，发明突火枪等武器",
        "figure": null
      },
      {
        "name": "《资治通鉴》",
        "description": "司马光主编《资治通鉴》，是中国最大的编年体通史",
        "figure": "司马光"
      },
      {
        "name": "宋词",
        "description": "宋词达到艺术高峰",
        "figure": "苏轼、辛弃疾、李清照等"
      },
      {
        "name": "理学兴起",
        "description": "程颢、程颐创立理学，对后世影响深远",
        "figure": "程颢、程颐"
      },
      {
        "name": "《清明上河图》",
        "description": "张择端绘《清明上河图》，展现北宋繁华景象",
        "figure": "张择端"
      }
    ],
    "battles": [
      {
        "name": "高粱河之战",
        "description": "宋太宗北伐辽国，高粱河之战惨败，宋军损失惨重",
        "year": 979,
        "coord": [
          116.2,
          39.9
        ],
        "winner": "辽国",
        "loser": "北宋"
      },
      {
        "name": "澶州之战",
        "description": "辽军南下攻宋，宋真宗亲征，最终签订澶渊之盟",
        "year": 1004,
        "coord": [
          114.8,
          35.7
        ],
        "winner": "宋辽平局",
        "loser": "无"
      },
      {
        "name": "靖康之变",
        "description": "金军攻破开封，俘虏徽钦二帝，北宋灭亡",
        "year": 1127,
        "coord": [
          114.3,
          34.8
        ],
        "winner": "金国",
        "loser": "北宋"
      }
    ],
    "lineage": [
      {
        "name": "宋太祖（赵匡胤）",
        "reign": "",
        "years": "960-976 年",
        "description": "北宋开国皇帝，杯酒释兵权",
        "isFounder": true,
        "order": 1,
        "predecessor": null,
        "successor": "宋太宗（赵光义）"
      },
      {
        "name": "宋太宗（赵光义）",
        "reign": "",
        "years": "976-997年",
        "description": "赵匡胤之弟，继续统一事业",
        "isFounder": false,
        "order": 2,
        "predecessor": "宋太祖（赵匡胤）",
        "successor": "宋仁宗（赵祯）"
      },
      {
        "name": "宋真宗（赵恒）",
        "reign": "",
        "years": "997-1022年",
        "description": "签订澶渊之盟",
        "isFounder": false,
        "order": 3,
        "predecessor": "宋太宗（赵光义）",
        "successor": "宋仁宗（赵祯）"
      },
      {
        "name": "宋仁宗（赵祯）",
        "reign": "",
        "years": "1022-1063年",
        "description": "庆历新政，北宋鼎盛时期",
        "isFounder": false,
        "order": 4,
        "predecessor": "宋真宗（赵恒）",
        "successor": "宋英宗（赵曙）"
      },
      {
        "name": "宋英宗（赵曙）",
        "reign": "",
        "years": "1063-1067年",
        "description": "宋仁宗之侄",
        "isFounder": false,
        "order": 5,
        "predecessor": "北宋",
        "successor": "宋神宗（赵顼）"
      },
      {
        "name": "宋神宗（赵顼）",
        "reign": "",
        "years": "1067-1085年",
        "description": "王安石变法",
        "isFounder": false,
        "order": 6,
        "predecessor": "北宋",
        "successor": "宋徽宗（赵佶）"
      },
      {
        "name": "宋哲宗（赵煦）",
        "reign": "",
        "years": "1085-1100年",
        "description": "宋神宗之子",
        "isFounder": false,
        "order": 7,
        "predecessor": "宋神宗（赵顼）",
        "successor": "宋徽宗（赵佶）"
      },
      {
        "name": "宋徽宗（赵佶）",
        "reign": "",
        "years": "1100-1125年",
        "description": "艺术成就高，但政治腐败",
        "isFounder": false,
        "order": 8,
        "predecessor": "北宋",
        "successor": "宋钦宗（赵桓）"
      },
      {
        "name": "宋钦宗（赵桓）",
        "reign": "",
        "years": "1125-1127年",
        "description": "北宋末代皇帝，靖康之变被俘",
        "isFounder": false,
        "order": 9,
        "predecessor": "宋徽宗（赵佶）",
        "successor": null
      }
    ]
  },
  {
    "id": "southern-song",
    "name": "南宋",
    "startYear": 1127,
    "endYear": 1279,
    "period": "medieval",
    "founder": "宋高宗（赵构）",
    "representativeRulers": [
      "宋高宗（赵构）",
      "宋孝宗（赵昚）",
      "宋理宗（赵昀）"
    ],
    "territory": {
      "center": [
        120.2,
        30.3
      ],
      "zoom": 5,
      "area": 200,
      "description": "偏安江南，与金朝对峙，经济重心南移完成，海上贸易繁荣",
      "capital": "临安（今浙江杭州）",
      "borders": {
        "east": "东海",
        "west": "四川",
        "north": "淮河",
        "south": "南海"
      }
    },
    "events": [
      {
        "name": "南宋建立",
        "description": "赵构在临安（今杭州）建立南宋",
        "year": 1127
      },
      {
        "name": "岳飞抗金",
        "description": "岳飞率军抗金，收复大片失地",
        "year": 1140
      },
      {
        "name": "崖山海战",
        "description": "南宋在崖山海战中失败，南宋灭亡",
        "year": 1279
      }
    ],
    "culturalAchievements": [
      {
        "name": "理学发展",
        "description": "朱熹集理学之大成",
        "figure": "朱熹"
      },
      {
        "name": "南宋绘画",
        "description": "南宋山水画达到新高峰",
        "figure": "马远、夏圭"
      },
      {
        "name": "火药武器",
        "description": "火药开始用于军事，出现突火枪等武器",
        "figure": null
      }
    ],
    "lineage": [
      {
        "name": "宋高宗（赵构）",
        "reign": "",
        "years": "1127-1162 年",
        "description": "南宋开国皇帝，定都临安",
        "isFounder": true,
        "order": 1,
        "predecessor": null,
        "successor": "宋孝宗（赵昚）"
      },
      {
        "name": "宋孝宗（赵昚）",
        "reign": "",
        "years": "1162-1189年",
        "description": "南宋中期君主，隆兴北伐",
        "isFounder": false,
        "order": 2,
        "predecessor": "宋高宗（赵构）",
        "successor": "宋光宗（赵惇）"
      },
      {
        "name": "宋光宗（赵惇）",
        "reign": "",
        "years": "1189-1194年",
        "description": "南宋后期君主",
        "isFounder": false,
        "order": 3,
        "predecessor": "宋孝宗（赵昚）",
        "successor": "宋宁宗（赵扩）"
      },
      {
        "name": "宋宁宗（赵扩）",
        "reign": "",
        "years": "1194-1224年",
        "description": "南宋君主",
        "isFounder": false,
        "order": 4,
        "predecessor": "宋孝宗（赵昚）",
        "successor": "宋理宗（赵昀）"
      },
      {
        "name": "宋理宗（赵昀）",
        "reign": "",
        "years": "1224-1264年",
        "description": "南宋后期君主",
        "isFounder": false,
        "order": 5,
        "predecessor": "南宋",
        "successor": "宋度宗（赵禥）"
      },
      {
        "name": "宋度宗（赵禥）",
        "reign": "",
        "years": "1264-1274年",
        "description": "南宋末期君主",
        "isFounder": false,
        "order": 6,
        "predecessor": "南宋",
        "successor": "宋恭帝（赵㬎）"
      },
      {
        "name": "宋恭帝（赵㬎）",
        "reign": "",
        "years": "1274-1276年",
        "description": "南宋幼主，被元军俘虏",
        "isFounder": false,
        "order": 7,
        "predecessor": "南宋",
        "successor": "宋端宗（赵昰）"
      },
      {
        "name": "宋端宗（赵昰）",
        "reign": "",
        "years": "1276-1278年",
        "description": "南宋流亡皇帝",
        "isFounder": false,
        "order": 8,
        "predecessor": "南宋",
        "successor": "宋末帝（赵昺）"
      },
      {
        "name": "宋末帝（赵昺）",
        "reign": "",
        "years": "1278-1279年",
        "description": "南宋末代皇帝，崖山海战失败，南宋灭亡",
        "isFounder": false,
        "order": 9,
        "predecessor": "南宋",
        "successor": null
      }
    ]
  },
  {
    "id": "yuan",
    "name": "元朝",
    "startYear": 1271,
    "endYear": 1368,
    "period": "late-imperial",
    "founder": "元世祖（忽必烈）",
    "representativeRulers": [
      "元世祖（孛儿只斤·忽必烈）",
      "元成宗（孛儿只斤·铁穆耳）",
      "元武宗（孛儿只斤·海山）"
    ],
    "territory": {
      "center": [
        116.4,
        39.9
      ],
      "zoom": 3,
      "area": 1372,
      "description": "中国历史上疆域最大的朝代，东起日本海，西至天山，北包贝加尔湖，南抵南海",
      "capital": "大都（今北京）",
      "borders": {
        "east": "日本海",
        "west": "天山",
        "north": "贝加尔湖",
        "south": "南海"
      }
    },
    "events": [
      {
        "name": "元朝建立",
        "description": "忽必烈建立元朝，定都大都（今北京）",
        "year": 1271
      },
      {
        "name": "元灭南宋",
        "description": "元朝灭南宋，统一全国",
        "year": 1279
      },
      {
        "name": "行省制度确立",
        "description": "元朝确立行省制度，设立中书省和十个行中书省，奠定中国行政区划基础",
        "year": 1283
      },
      {
        "name": "马可·波罗来华",
        "description": "意大利旅行家马可·波罗到达元朝，受到忽必烈接见，促进中西文化交流",
        "year": 1275
      },
      {
        "name": "红巾军起义",
        "description": "红巾军起义爆发，动摇元朝统治",
        "year": 1351
      }
    ],
    "culturalAchievements": [
      {
        "name": "元曲",
        "description": "元曲（杂剧和散曲）达到艺术高峰",
        "figure": "关汉卿、马致远、白朴等"
      },
      {
        "name": "郭守敬编历",
        "description": "郭守敬编制《授时历》，是当时世界上最先进的历法",
        "figure": "郭守敬"
      },
      {
        "name": "青花瓷",
        "description": "元青花瓷达到很高艺术水平，景德镇成为制瓷中心",
        "figure": null
      },
      {
        "name": "赵孟頫书法",
        "description": "赵孟頫创立赵体，是元代书法的代表人物，对后世影响深远",
        "figure": "赵孟頫"
      },
      {
        "name": "元大都建设",
        "description": "元大都（今北京）的城市规划严谨，是当时世界上最宏伟的城市之一",
        "figure": "刘秉忠"
      }
    ],
    "lineage": [
      {
        "name": "元世祖（忽必烈）",
        "reign": "",
        "years": "1271-1294 年",
        "description": "元朝开国皇帝，建立元朝，统一全国",
        "isFounder": true,
        "order": 1,
        "predecessor": null,
        "successor": "元成宗（铁穆耳）"
      },
      {
        "name": "元成宗（铁穆耳）",
        "reign": "",
        "years": "1294-1307年",
        "description": "忽必烈之孙",
        "isFounder": false,
        "order": 2,
        "predecessor": "元世祖（忽必烈）",
        "successor": "元武宗（海山）"
      },
      {
        "name": "元武宗（海山）",
        "reign": "",
        "years": "1307-1311年",
        "description": "元成宗之侄",
        "isFounder": false,
        "order": 3,
        "predecessor": "元世祖（忽必烈）",
        "successor": "元仁宗（爱育黎拔力八达）"
      },
      {
        "name": "元仁宗（爱育黎拔力八达）",
        "reign": "",
        "years": "1311-1320年",
        "description": "元武宗之弟",
        "isFounder": false,
        "order": 4,
        "predecessor": "元世祖（忽必烈）",
        "successor": "元英宗（硕德八剌）"
      },
      {
        "name": "元英宗（硕德八剌）",
        "reign": "",
        "years": "1320-1323年",
        "description": "元仁宗之子",
        "isFounder": false,
        "order": 5,
        "predecessor": "元朝",
        "successor": "元泰定帝（也孙铁木儿）"
      },
      {
        "name": "元泰定帝（也孙铁木儿）",
        "reign": "",
        "years": "1323-1328年",
        "description": "元朝中期君主",
        "isFounder": false,
        "order": 6,
        "predecessor": "元朝",
        "successor": "元文宗（图帖睦尔）"
      },
      {
        "name": "元文宗（图帖睦尔）",
        "reign": "",
        "years": "1328-1332年",
        "description": "元朝后期君主",
        "isFounder": false,
        "order": 7,
        "predecessor": "元朝",
        "successor": "元顺帝（妥懽帖睦尔）"
      },
      {
        "name": "元顺帝（妥懽帖睦尔）",
        "reign": "",
        "years": "1333-1368年",
        "description": "元朝末代皇帝，红巾军起义后退位",
        "isFounder": false,
        "order": 8,
        "predecessor": "元朝",
        "successor": null
      }
    ]
  },
  {
    "id": "ming",
    "name": "明朝",
    "startYear": 1368,
    "endYear": 1644,
    "period": "late-imperial",
    "founder": "明太祖（朱元璋）",
    "representativeRulers": [
      "明太祖（朱元璋）",
      "明成祖（朱棣）",
      "明仁宗（朱高炽）",
      "明宣宗（朱瞻基）",
      "明神宗（朱翊钧）"
    ],
    "territory": {
      "center": [
        116.4,
        39.9
      ],
      "zoom": 4,
      "area": 900,
      "description": "推翻元朝统治，疆域包括内地十八省及东北部分地区，郑和下西洋宣扬国威",
      "capital": "北京（明成祖后）、南京",
      "borders": {
        "east": "东海",
        "west": "哈密",
        "north": "长城",
        "south": "南海"
      }
    },
    "events": [
      {
        "name": "明朝建立",
        "description": "朱元璋建立明朝，定都南京",
        "year": 1368
      },
      {
        "name": "靖难之役",
        "description": "朱棣发动靖难之役，夺取皇位",
        "year": 1399
      },
      {
        "name": "郑和下西洋",
        "description": "郑和七次下西洋，促进中外交流",
        "year": 1405
      },
      {
        "name": "土木堡之变",
        "description": "明英宗被瓦剌俘虏，明朝由盛转衰",
        "year": 1449
      },
      {
        "name": "戚继光抗倭",
        "description": "戚继光率领戚家军抗击倭寇，保卫东南沿海",
        "year": 1560
      },
      {
        "name": "张居正改革",
        "description": "张居正推行一条鞭法等改革，使明朝中兴",
        "year": 1572
      },
      {
        "name": "李自成起义",
        "description": "李自成领导农民起义，攻占北京，明朝灭亡",
        "year": 1644
      }
    ],
    "culturalAchievements": [
      {
        "name": "《永乐大典》",
        "description": "编纂《永乐大典》，是中国最大的百科全书",
        "figure": "解缙、姚广孝"
      },
      {
        "name": "紫禁城",
        "description": "修建北京紫禁城，是世界现存最大的宫殿建筑群",
        "figure": "明成祖（朱棣）"
      },
      {
        "name": "明代小说",
        "description": "《三国演义》《水浒传》《西游记》等长篇小说问世",
        "figure": "罗贯中、施耐庵、吴承恩"
      },
      {
        "name": "《本草纲目》",
        "description": "李时珍著《本草纲目》，是中国药物学巨著",
        "figure": "李时珍"
      },
      {
        "name": "《天工开物》",
        "description": "宋应星著《天工开物》，是中国古代科技百科全书",
        "figure": "宋应星"
      },
      {
        "name": "《徐霞客游记》",
        "description": "徐霞客著《徐霞客游记》，是地理学名著",
        "figure": "徐霞客"
      },
      {
        "name": "阳明心学",
        "description": "王阳明创立心学，提出\"知行合一\"",
        "figure": "王阳明"
      },
      {
        "name": "景泰蓝工艺",
        "description": "景泰蓝工艺达到高峰，成为明代特色工艺品",
        "figure": null
      }
    ],
    "battles": [
      {
        "name": "鄱阳湖之战",
        "description": "朱元璋在鄱阳湖击败陈友谅，奠定统一基础",
        "year": 1363,
        "coord": [
          116.2,
          29.5
        ],
        "winner": "朱元璋",
        "loser": "陈友谅"
      },
      {
        "name": "靖难之役",
        "description": "朱棣发动靖难之役，从侄子建文帝手中夺取皇位",
        "year": 1399,
        "coord": [
          116.4,
          39.9
        ],
        "winner": "朱棣",
        "loser": "建文帝"
      },
      {
        "name": "土木堡之变",
        "description": "明英宗被瓦剌俘虏，五十万大军覆没",
        "year": 1449,
        "coord": [
          115.5,
          40.5
        ],
        "winner": "瓦剌",
        "loser": "明朝"
      },
      {
        "name": "萨尔浒之战",
        "description": "努尔哈赤以少胜多，大败明军，后金崛起",
        "year": 1619,
        "coord": [
          124,
          42
        ],
        "winner": "后金（努尔哈赤）",
        "loser": "明朝"
      }
    ],
    "lineage": [
      {
        "name": "明太祖（朱元璋）",
        "reign": "洪武",
        "years": "1368-1398",
        "description": "明朝开国皇帝，推翻元朝统治，建立明朝",
        "isFounder": true,
        "order": 1,
        "predecessor": null,
        "successor": "明惠宗（朱允炆）"
      },
      {
        "name": "明惠宗（朱允炆）",
        "reign": "建文",
        "years": "1398-1402",
        "description": "朱元璋之孙，在靖难之役中被朱棣推翻",
        "isFounder": false,
        "order": 2,
        "predecessor": "明太祖（朱元璋）",
        "successor": "明成祖（朱棣）"
      },
      {
        "name": "明成祖（朱棣）",
        "reign": "永乐",
        "years": "1402-1424",
        "description": "发动靖难之役夺取皇位，迁都北京，郑和下西洋",
        "isFounder": false,
        "order": 3,
        "predecessor": "明惠宗（朱允炆）",
        "successor": "明仁宗（朱高炽）"
      },
      {
        "name": "明仁宗（朱高炽）",
        "reign": "洪熙",
        "years": "1424-1425",
        "description": "在位时间短，但仁政爱民",
        "isFounder": false,
        "order": 4,
        "predecessor": "明成祖（朱棣）",
        "successor": "明宣宗（朱瞻基）"
      },
      {
        "name": "明宣宗（朱瞻基）",
        "reign": "宣德",
        "years": "1425-1435",
        "description": "仁宣之治，明朝达到鼎盛",
        "isFounder": false,
        "order": 5,
        "predecessor": "明仁宗（朱高炽）",
        "successor": "明英宗（朱祁镇）"
      },
      {
        "name": "明英宗（朱祁镇）",
        "reign": "正统、天顺",
        "years": "1435-1449, 1457-1464",
        "description": "土木堡之变被俘，后复辟",
        "isFounder": false,
        "order": 6,
        "predecessor": "明宣宗（朱瞻基）",
        "successor": "明代宗（朱祁钰）"
      },
      {
        "name": "明代宗（朱祁钰）",
        "reign": "景泰",
        "years": "1449-1457",
        "description": "土木堡之变后即位，领导北京保卫战",
        "isFounder": false,
        "order": 7,
        "predecessor": "明英宗（朱祁镇）",
        "successor": "明宪宗（朱见深）"
      },
      {
        "name": "明宪宗（朱见深）",
        "reign": "成化",
        "years": "1464-1487",
        "description": "成化年间，社会相对稳定",
        "isFounder": false,
        "order": 8,
        "predecessor": "明代宗（朱祁钰）",
        "successor": "明孝宗（朱祐樘）"
      },
      {
        "name": "明孝宗（朱祐樘）",
        "reign": "弘治",
        "years": "1487-1505",
        "description": "弘治中兴，励精图治",
        "isFounder": false,
        "order": 9,
        "predecessor": "明宪宗（朱见深）",
        "successor": "明武宗（朱厚照）"
      },
      {
        "name": "明武宗（朱厚照）",
        "reign": "正德",
        "years": "1505-1521",
        "description": "性格叛逆，喜欢游乐",
        "isFounder": false,
        "order": 10,
        "predecessor": "明孝宗（朱祐樘）",
        "successor": "明世宗（朱厚熜）"
      },
      {
        "name": "明世宗（朱厚熜）",
        "reign": "嘉靖",
        "years": "1521-1567",
        "description": "在位时间长，前期励精图治，后期沉迷道教",
        "isFounder": false,
        "order": 11,
        "predecessor": "明武宗（朱厚照）",
        "successor": "明穆宗（朱载坖）"
      },
      {
        "name": "明穆宗（朱载坖）",
        "reign": "隆庆",
        "years": "1567-1572",
        "description": "隆庆开关，开放海禁",
        "isFounder": false,
        "order": 12,
        "predecessor": "明世宗（朱厚熜）",
        "successor": "明神宗（朱翊钧）"
      },
      {
        "name": "明神宗（朱翊钧）",
        "reign": "万历",
        "years": "1572-1620",
        "description": "明朝在位时间最长的皇帝，万历中兴，后期怠政",
        "isFounder": false,
        "order": 13,
        "predecessor": "明穆宗（朱载坖）",
        "successor": "明光宗（朱常洛）"
      },
      {
        "name": "明光宗（朱常洛）",
        "reign": "泰昌",
        "years": "1620",
        "description": "在位仅一个月，红丸案",
        "isFounder": false,
        "order": 14,
        "predecessor": "明神宗（朱翊钧）",
        "successor": "明熹宗（朱由校）"
      },
      {
        "name": "明熹宗（朱由校）",
        "reign": "天启",
        "years": "1620-1627",
        "description": "沉迷木工，魏忠贤专权",
        "isFounder": false,
        "order": 15,
        "predecessor": "明光宗（朱常洛）",
        "successor": "明思宗（朱由检）"
      },
      {
        "name": "明思宗（朱由检）",
        "reign": "崇祯",
        "years": "1627-1644",
        "description": "明朝末代皇帝，勤政但无力挽救明朝灭亡",
        "isFounder": false,
        "order": 16,
        "predecessor": "明熹宗（朱由校）",
        "successor": null
      }
    ]
  },
  {
    "id": "qing",
    "name": "清朝",
    "startYear": 1644,
    "endYear": 1912,
    "period": "late-imperial",
    "founder": "清太祖（努尔哈赤）",
    "representativeRulers": [
      "清世祖（爱新觉罗·福临）",
      "清圣祖（爱新觉罗·玄烨）",
      "清世宗（爱新觉罗·胤禛）",
      "清高宗（爱新觉罗·弘历）",
      "清德宗（爱新觉罗·载湉）"
    ],
    "territory": {
      "center": [
        116.4,
        39.9
      ],
      "zoom": 3,
      "area": 1316,
      "description": "中国历史上最后一个封建王朝，疆域辽阔，奠定了现代中国版图的基础",
      "capital": "北京",
      "borders": {
        "east": "太平洋",
        "west": "帕米尔高原",
        "north": "外兴安岭",
        "south": "南海"
      }
    },
    "events": [
      {
        "name": "清军入关",
        "description": "清军入关，建立全国性政权",
        "year": 1644
      },
      {
        "name": "康熙擒鳌拜",
        "description": "康熙帝智擒权臣鳌拜，开始亲政",
        "year": 1669
      },
      {
        "name": "三藩之乱",
        "description": "吴三桂等发动三藩之乱，被康熙平定",
        "year": 1673
      },
      {
        "name": "康乾盛世",
        "description": "康熙、雍正、乾隆三朝，清朝达到鼎盛",
        "year": 1661
      },
      {
        "name": "文字狱",
        "description": "清朝大兴文字狱，禁锢思想",
        "year": 1750
      },
      {
        "name": "鸦片战争",
        "description": "英国发动鸦片战争，中国开始沦为半殖民地半封建社会",
        "year": 1840
      },
      {
        "name": "太平天国运动",
        "description": "洪秀全领导太平天国运动，动摇清朝统治",
        "year": 1851
      },
      {
        "name": "洋务运动",
        "description": "曾国藩、李鸿章等推动洋务运动，学习西方技术",
        "year": 1861
      },
      {
        "name": "甲午战争",
        "description": "中日甲午战争，清朝战败，签订《马关条约》",
        "year": 1894
      },
      {
        "name": "戊戌变法",
        "description": "康有为、梁启超等推动戊戌变法，试图挽救民族危机",
        "year": 1898
      },
      {
        "name": "义和团运动",
        "description": "义和团运动爆发，八国联军侵华",
        "year": 1900
      },
      {
        "name": "辛亥革命",
        "description": "辛亥革命爆发，清朝灭亡",
        "year": 1911
      }
    ],
    "culturalAchievements": [
      {
        "name": "《红楼梦》",
        "description": "曹雪芹著《红楼梦》，是中国古典小说巅峰之作",
        "figure": "曹雪芹"
      },
      {
        "name": "《四库全书》",
        "description": "编纂《四库全书》，是中国最大的丛书",
        "figure": "纪昀等"
      },
      {
        "name": "京剧形成",
        "description": "京剧在北京形成，成为中国国粹",
        "figure": null
      },
      {
        "name": "《儒林外史》",
        "description": "吴敬梓著《儒林外史》，是讽刺小说杰作",
        "figure": "吴敬梓"
      },
      {
        "name": "《聊斋志异》",
        "description": "蒲松龄著《聊斋志异》，是文言短篇小说集",
        "figure": "蒲松龄"
      },
      {
        "name": "考据学",
        "description": "乾嘉学派发展考据学，对中国古籍进行系统整理",
        "figure": "戴震、钱大昕"
      },
      {
        "name": "圆明园",
        "description": "修建圆明园，被誉为\"万园之园\"",
        "figure": null
      }
    ],
    "lineage": [
      {
        "name": "清太祖（努尔哈赤）",
        "reign": "天命",
        "years": "1616-1626",
        "description": "后金建立者，统一女真各部，为清朝建立奠定基础",
        "isFounder": true,
        "order": 1,
        "predecessor": null,
        "successor": "清太宗（皇太极）"
      },
      {
        "name": "清太宗（皇太极）",
        "reign": "天聪、崇德",
        "years": "1626-1643",
        "description": "改国号为清，奠定入关基础",
        "isFounder": false,
        "order": 2,
        "predecessor": "清太祖（努尔哈赤）",
        "successor": "清世祖（福临）"
      },
      {
        "name": "清世祖（福临）",
        "reign": "顺治",
        "years": "1643-1661",
        "description": "清军入关，建立全国性政权",
        "isFounder": false,
        "order": 3,
        "predecessor": "清太宗（皇太极）",
        "successor": "清圣祖（玄烨）"
      },
      {
        "name": "清圣祖（玄烨）",
        "reign": "康熙",
        "years": "1661-1722",
        "description": "在位 61 年，开创康乾盛世，平定三藩，收复台湾",
        "isFounder": false,
        "order": 4,
        "predecessor": "清世祖（福临）",
        "successor": "清世宗（胤禛）"
      },
      {
        "name": "清世宗（胤禛）",
        "reign": "雍正",
        "years": "1722-1735",
        "description": "勤政爱民，改革税制，为乾隆盛世奠定基础",
        "isFounder": false,
        "order": 5,
        "predecessor": "清圣祖（玄烨）",
        "successor": "清高宗（弘历）"
      },
      {
        "name": "清世宗（胤禛）",
        "reign": "雍正",
        "years": "1722-1735",
        "description": "勤政爱民，改革税制，为乾隆盛世奠定基础",
        "isFounder": false,
        "order": 5,
        "predecessor": "清圣祖（玄烨）",
        "successor": "清仁宗（颙琰）"
      },
      {
        "name": "清高宗（弘历）",
        "reign": "乾隆",
        "years": "1735-1796",
        "description": "在位60年，清朝达到鼎盛，后期开始衰落",
        "isFounder": false,
        "order": 6,
        "predecessor": "清世宗（胤禛）",
        "successor": "清仁宗（颙琰）"
      },
      {
        "name": "清仁宗（颙琰）",
        "reign": "嘉庆",
        "years": "1796-1820",
        "description": "亲政后惩治和珅，但白莲教起义爆发",
        "isFounder": false,
        "order": 7,
        "predecessor": "清高宗（弘历）",
        "successor": "清宣宗（旻宁）"
      },
      {
        "name": "清宣宗（旻宁）",
        "reign": "道光",
        "years": "1820-1850",
        "description": "鸦片战争爆发，中国开始沦为半殖民地半封建社会",
        "isFounder": false,
        "order": 8,
        "predecessor": "清仁宗（颙琰）",
        "successor": "清文宗（奕詝）"
      },
      {
        "name": "清文宗（奕詝）",
        "reign": "咸丰",
        "years": "1850-1861",
        "description": "太平天国运动爆发，英法联军火烧圆明园",
        "isFounder": false,
        "order": 9,
        "predecessor": "清宣宗（旻宁）",
        "successor": "清穆宗（载淳）"
      },
      {
        "name": "清穆宗（载淳）",
        "reign": "同治",
        "years": "1861-1875",
        "description": "慈禧太后垂帘听政，洋务运动兴起",
        "isFounder": false,
        "order": 10,
        "predecessor": "清文宗（奕詝）",
        "successor": "清德宗（载湉）"
      },
      {
        "name": "清德宗（载湉）",
        "reign": "光绪",
        "years": "1875-1908",
        "description": "甲午战争战败，戊戌变法失败，八国联军侵华",
        "isFounder": false,
        "order": 11,
        "predecessor": "清穆宗（载淳）",
        "successor": "清宣统帝（溥仪）"
      },
      {
        "name": "清宣统帝（溥仪）",
        "reign": "宣统",
        "years": "1909-1912",
        "description": "清朝末代皇帝，辛亥革命后退位",
        "isFounder": false,
        "order": 12,
        "predecessor": "清德宗（载湉）",
        "successor": null
      }
    ]
  },
  {
    "id": "republic-of-china",
    "name": "中华民国",
    "startYear": 1912,
    "endYear": 1949,
    "period": "modern",
    "founder": "孙中山",
    "representativeRulers": [
      "孙中山",
      "袁世凯",
      "蒋介石",
      "李宗仁"
    ],
    "territory": {
      "center": [
        116.4,
        39.9
      ],
      "zoom": 4,
      "area": 1141,
      "description": "结束两千多年封建帝制，建立共和政体，经历军阀混战、抗日战争和国共内战",
      "capital": "南京（1927-1937, 1946-1949）、重庆（战时陪都）",
      "borders": {
        "east": "太平洋",
        "west": "帕米尔高原",
        "north": "蒙古",
        "south": "南海"
      }
    },
    "events": [
      {
        "name": "中华民国成立",
        "description": "孙中山就任临时大总统，中华民国正式成立，结束了两千多年的封建帝制",
        "year": 1912
      },
      {
        "name": "清帝退位",
        "description": "清宣统帝溥仪颁布退位诏书，清朝正式灭亡",
        "year": 1912
      },
      {
        "name": "二次革命",
        "description": "孙中山发动二次革命，反对袁世凯独裁统治",
        "year": 1913
      },
      {
        "name": "袁世凯称帝",
        "description": "袁世凯复辟帝制，改国号为\"中华帝国\"",
        "year": 1915
      },
      {
        "name": "护国运动",
        "description": "蔡锷等发动护国运动，反对袁世凯称帝",
        "year": 1915
      },
      {
        "name": "五四运动",
        "description": "北京学生发起五四运动，标志着中国新民主主义革命的开端",
        "year": 1919
      },
      {
        "name": "中国共产党成立",
        "description": "中国共产党第一次全国代表大会在上海召开",
        "year": 1921
      },
      {
        "name": "黄埔军校创办",
        "description": "孙中山创办黄埔军校，培养革命军事人才",
        "year": 1924
      },
      {
        "name": "北伐战争",
        "description": "国民革命军出师北伐，统一中国",
        "year": 1926
      },
      {
        "name": "南京国民政府成立",
        "description": "蒋介石建立南京国民政府",
        "year": 1927
      },
      {
        "name": "九一八事变",
        "description": "日本发动九一八事变，侵占中国东北",
        "year": 1931
      },
      {
        "name": "长征",
        "description": "中国工农红军进行二万五千里长征",
        "year": 1934
      },
      {
        "name": "西安事变",
        "description": "张学良、杨虎城发动西安事变，促成国共合作抗日",
        "year": 1936
      },
      {
        "name": "七七事变",
        "description": "卢沟桥事变爆发，中国全面抗日战争开始",
        "year": 1937
      },
      {
        "name": "南京大屠杀",
        "description": "日军攻占南京，进行惨绝人寰的大屠杀",
        "year": 1937
      },
      {
        "name": "抗战胜利",
        "description": "日本宣布无条件投降，中国抗日战争取得伟大胜利",
        "year": 1945
      },
      {
        "name": "国共内战",
        "description": "国共两党爆发全面内战",
        "year": 1946
      },
      {
        "name": "中华人民共和国成立",
        "description": "毛泽东在天安门宣布中华人民共和国成立，中华民国政府迁往台湾",
        "year": 1949
      }
    ],
    "culturalAchievements": [
      {
        "name": "新文化运动",
        "description": "提倡民主与科学，推动白话文运动，是中国近代思想启蒙运动",
        "figure": "陈独秀、胡适、鲁迅"
      },
      {
        "name": "白话文运动",
        "description": "胡适倡导白话文，推动文学革命",
        "figure": "胡适、鲁迅"
      },
      {
        "name": "《狂人日记》",
        "description": "鲁迅发表《狂人日记》，是中国现代文学史上第一篇白话小说",
        "figure": "鲁迅"
      },
      {
        "name": "西南联大",
        "description": "抗战时期北大、清华、南开三校南迁昆明，组成西南联合大学",
        "figure": "梅贻琦、张伯苓、蒋梦麟"
      },
      {
        "name": "电影艺术发展",
        "description": "中国电影业蓬勃发展，出现《渔光曲》《马路天使》等经典作品",
        "figure": "蔡楚生、阮玲玉"
      },
      {
        "name": "京剧改良",
        "description": "梅兰芳等推动京剧艺术革新，走向国际舞台",
        "figure": "梅兰芳"
      }
    ],
    "lineage": [
      {
        "name": "孙中山",
        "reign": "",
        "years": "1912-1912",
        "description": "中华民国开国君主",
        "isFounder": true,
        "order": 1,
        "predecessor": null,
        "successor": "袁世凯"
      },
      {
        "name": "袁世凯",
        "reign": "",
        "years": "1912-1916年",
        "description": "继任临时大总统，后复辟称帝",
        "isFounder": false,
        "order": 2,
        "predecessor": "孙中山",
        "successor": "黎元洪"
      },
      {
        "name": "黎元洪",
        "reign": "",
        "years": "1916-1917年",
        "description": "继任大总统",
        "isFounder": false,
        "order": 3,
        "predecessor": "中华民国",
        "successor": "徐世昌"
      },
      {
        "name": "徐世昌",
        "reign": "",
        "years": "1918-1922年",
        "description": "北洋政府总统",
        "isFounder": false,
        "order": 4,
        "predecessor": "中华民国",
        "successor": "曹锟"
      },
      {
        "name": "曹锟",
        "reign": "",
        "years": "1923-1924年",
        "description": "直系军阀领导人",
        "isFounder": false,
        "order": 5,
        "predecessor": "中华民国",
        "successor": "段祺瑞"
      },
      {
        "name": "段祺瑞",
        "reign": "",
        "years": "1924-1926年",
        "description": "北洋政府实际执政者",
        "isFounder": false,
        "order": 6,
        "predecessor": "中华民国",
        "successor": "蒋介石"
      },
      {
        "name": "蒋介石",
        "reign": "",
        "years": "1928-1948年",
        "description": "国民政府领导人，领导抗战",
        "isFounder": false,
        "order": 7,
        "predecessor": "中华民国",
        "successor": "李宗仁"
      },
      {
        "name": "李宗仁",
        "reign": "",
        "years": "1948-1949年",
        "description": "继任总统",
        "isFounder": false,
        "order": 8,
        "predecessor": "蒋介石",
        "successor": null
      }
    ]
  }
]
export default dynasties;
