/**
 * 中国历史朝代数据
 * 包含从夏朝到清朝的所有主要朝代信息
 * 代表君主格式：谥号（本名）
 */

const dynasties = [
  {
    id: 'xia',
    name: '夏朝',
    startYear: -2070,
    endYear: -1600,
    period: 'ancient', // ancient, classical, medieval, late-imperial
    founder: '禹',
    representativeRulers: ['禹', '启', '太康', '少康', '桀'],
    events: [
      {
        name: '夏朝建立',
        description: '禹建立夏朝，标志着中国历史上第一个王朝的诞生，开启了"家天下"的时代',
        year: -2070
      },
      {
        name: '启继位',
        description: '禹之子启继位，确立了世袭制，结束了禅让制',
        year: -2040
      },
      {
        name: '少康中兴',
        description: '少康复国，恢复夏朝统治，使夏朝走向强盛',
        year: -1980
      }
    ],
    culturalAchievements: [
      {
        name: '青铜器制造',
        description: '开始制造青铜器，标志着中国进入青铜时代',
        figure: null
      },
      {
        name: '历法制定',
        description: '制定《夏小正》，是中国最早的历法之一',
        figure: null
      },
      {
        name: '城墙建筑',
        description: '开始建造城墙和宫殿，二里头遗址展现了早期国家形态',
        figure: null
      }
    ]
  },
  {
    id: 'shang',
    name: '商朝',
    startYear: -1600,
    endYear: -1046,
    period: 'ancient',
    founder: '汤',
    representativeRulers: ['汤', '盘庚', '武丁', '帝乙', '帝辛（纣）'],
    events: [
      {
        name: '商汤灭夏',
        description: '商汤推翻夏桀的统治，建立商朝',
        year: -1600
      },
      {
        name: '盘庚迁殷',
        description: '盘庚将都城迁至殷（今河南安阳），商朝从此稳定发展',
        year: -1300
      },
      {
        name: '武丁中兴',
        description: '武丁时期商朝达到鼎盛，国力强盛，疆域扩大',
        year: -1250
      }
    ],
    culturalAchievements: [
      {
        name: '甲骨文',
        description: '创造甲骨文，是中国已知最早的系统文字',
        figure: null
      },
      {
        name: '青铜器工艺',
        description: '青铜器制造技术达到高峰，代表作品有司母戊鼎、四羊方尊等',
        figure: null
      },
      {
        name: '占卜文化',
        description: '发展了系统的占卜文化，甲骨卜辞记录了当时的政治、军事、祭祀等活动',
        figure: null
      }
    ]
  },
  {
    id: 'western-zhou',
    name: '西周',
    startYear: -1046,
    endYear: -771,
    period: 'ancient',
    founder: '周武王（姬发）',
    representativeRulers: ['周武王（姬发）', '周公旦（姬旦）', '周成王（姬诵）', '周康王（姬钊）', '周穆王（姬满）'],
    events: [
      {
        name: '牧野之战',
        description: '周武王伐纣，在牧野之战中击败商军，商朝灭亡',
        year: -1046
      },
      {
        name: '分封制确立',
        description: '周公旦辅政，确立分封制，巩固周朝统治',
        year: -1040
      },
      {
        name: '成康之治',
        description: '周成王、周康王时期，天下安定，刑罚不用四十余年',
        year: -1020
      }
    ],
    culturalAchievements: [
      {
        name: '礼乐制度',
        description: '周公制礼作乐，建立了完善的礼乐制度',
        figure: '周公旦（姬旦）'
      },
      {
        name: '金文',
        description: '青铜器铭文（金文）大量出现，记录了重要历史事件',
        figure: null
      },
      {
        name: '宗法制度',
        description: '确立以嫡长子继承制为核心的宗法制度',
        figure: '周公旦（姬旦）'
      }
    ]
  },
  {
    id: 'eastern-zhou',
    name: '东周（春秋战国）',
    startYear: -770,
    endYear: -221,
    period: 'ancient',
    founder: '周平王（姬宜臼）',
    representativeRulers: ['周平王（姬宜臼）', '齐桓公（姜小白）', '晋文公（姬重耳）', '楚庄王（熊旅）', '秦始皇（嬴政）'],
    events: [
      {
        name: '平王东迁',
        description: '周平王将都城东迁至洛邑（今洛阳），东周开始',
        year: -770
      },
      {
        name: '孔子创立儒家',
        description: '孔子创立儒家学派，对中国文化产生深远影响',
        year: -551
      },
      {
        name: '商鞅变法',
        description: '商鞅在秦国实行变法，使秦国迅速强大',
        year: -356
      },
      {
        name: '长平之战',
        description: '秦将白起大败赵军，为秦统一六国奠定基础',
        year: -260
      },
      {
        name: '秦灭六国',
        description: '秦始皇先后灭掉韩、赵、魏、楚、燕、齐六国，统一中国',
        year: -221
      }
    ],
    culturalAchievements: [
      {
        name: '百家争鸣',
        description: '儒家、道家、法家、墨家等学派百家争鸣，思想文化空前繁荣',
        figure: '孔子、老子、墨子、韩非子等'
      },
      {
        name: '《诗经》编纂',
        description: '中国最早的诗歌总集《诗经》编纂完成',
        figure: '孔子（孔丘）'
      },
      {
        name: '《孙子兵法》',
        description: '孙武著《孙子兵法》，是世界上最早的军事著作',
        figure: '孙武'
      },
      {
        name: '《道德经》',
        description: '老子著《道德经》，是道家经典著作',
        figure: '老子（李耳）'
      },
      {
        name: '都江堰水利工程',
        description: '李冰父子修建都江堰，是世界上最古老的水利工程之一',
        figure: '李冰'
      }
    ]
  },
  {
    id: 'qin',
    name: '秦朝',
    startYear: -221,
    endYear: -207,
    period: 'classical',
    founder: '秦始皇（嬴政）',
    representativeRulers: ['秦始皇（嬴政）', '秦二世（嬴胡亥）'],
    events: [
      {
        name: '秦朝建立',
        description: '秦始皇统一六国，建立中国历史上第一个中央集权的封建王朝',
        year: -221
      },
      {
        name: '统一文字度量衡',
        description: '秦始皇统一文字、货币、度量衡，促进了经济文化交流',
        year: -220
      },
      {
        name: '修筑长城',
        description: '连接和修缮战国长城，形成万里长城',
        year: -214
      },
      {
        name: '焚书坑儒',
        description: '秦始皇焚烧百家书籍，活埋儒生，加强思想控制',
        year: -213
      }
    ],
    culturalAchievements: [
      {
        name: '小篆统一文字',
        description: '李斯创制小篆，统一全国文字',
        figure: '李斯'
      },
      {
        name: '秦始皇陵兵马俑',
        description: '修建规模宏大的秦始皇陵及兵马俑坑',
        figure: '秦始皇（嬴政）'
      },
      {
        name: '郡县制',
        description: '废除分封制，实行郡县制，奠定中国行政区划基础',
        figure: '李斯'
      }
    ]
  },
  {
    id: 'western-han',
    name: '西汉',
    startYear: -202,
    endYear: 8,
    period: 'classical',
    founder: '汉高祖（刘邦）',
    representativeRulers: ['汉高祖（刘邦）', '汉文帝（刘恒）', '汉景帝（刘启）', '汉武帝（刘彻）', '汉宣帝（刘询）'],
    events: [
      {
        name: '西汉建立',
        description: '刘邦建立汉朝，定都长安',
        year: -202
      },
      {
        name: '文景之治',
        description: '汉文帝、汉景帝时期，轻徭薄赋，与民休息，社会经济恢复发展',
        year: -180
      },
      {
        name: '汉武帝北击匈奴',
        description: '汉武帝派卫青、霍去病北击匈奴，解除北方威胁',
        year: -127
      },
      {
        name: '张骞通西域',
        description: '张骞两次出使西域，开辟丝绸之路',
        year: -138
      },
      {
        name: '王莽篡汉',
        description: '王莽篡夺西汉政权，建立新朝',
        year: 9
      }
    ],
    culturalAchievements: [
      {
        name: '罢黜百家，独尊儒术',
        description: '汉武帝采纳董仲舒建议，确立儒学正统地位',
        figure: '汉武帝（刘彻）、董仲舒'
      },
      {
        name: '《史记》',
        description: '司马迁著《史记》，是中国第一部纪传体通史',
        figure: '司马迁'
      },
      {
        name: '丝绸之路',
        description: '张骞出使西域，开辟丝绸之路',
        figure: '张骞'
      }
    ]
  },
  {
    id: 'eastern-han',
    name: '东汉',
    startYear: 25,
    endYear: 220,
    period: 'classical',
    founder: '汉光武帝（刘秀）',
    representativeRulers: ['汉光武帝（刘秀）', '汉明帝（刘庄）', '汉章帝（刘炟）', '汉和帝（刘肇）', '汉献帝（刘协）'],
    events: [
      {
        name: '东汉建立',
        description: '刘秀建立东汉，定都洛阳',
        year: 25
      },
      {
        name: '光武中兴',
        description: '汉光武帝励精图治，使东汉国力恢复',
        year: 40
      },
      {
        name: '班超经营西域',
        description: '班超出使西域，恢复汉朝对西域的统治',
        year: 73
      },
      {
        name: '黄巾起义',
        description: '张角领导黄巾起义，动摇了东汉统治基础',
        year: 184
      }
    ],
    culturalAchievements: [
      {
        name: '造纸术改进',
        description: '蔡伦改进造纸术，对人类文明发展产生深远影响',
        figure: '蔡伦'
      },
      {
        name: '《汉书》',
        description: '班固著《汉书》，是中国第一部纪传体断代史',
        figure: '班固'
      },
      {
        name: '佛教传入',
        description: '佛教通过丝绸之路传入中国',
        figure: null
      }
    ]
  },
  {
    id: 'three-kingdoms',
    name: '三国',
    startYear: 220,
    endYear: 280,
    period: 'classical',
    founder: '魏文帝（曹丕）',
    representativeRulers: ['魏文帝（曹丕）', '蜀汉昭烈帝（刘备）', '吴大帝（孙权）', '诸葛亮（孔明）', '司马懿'],
    events: [
      {
        name: '官渡之战',
        description: '曹操在官渡之战中以少胜多，击败袁绍，奠定统一北方的基础',
        year: 200
      },
      {
        name: '赤壁之战',
        description: '孙刘联军在赤壁大败曹操，奠定三国鼎立基础',
        year: 208
      },
      {
        name: '夷陵之战',
        description: '陆逊在夷陵之战中大败刘备，三国鼎立局面最终形成',
        year: 221
      },
      {
        name: '曹丕代汉',
        description: '曹丕逼迫汉献帝禅让，建立魏国，东汉灭亡',
        year: 220
      },
      {
        name: '西晋统一',
        description: '西晋灭吴，结束三国分裂局面',
        year: 280
      }
    ],
    culturalAchievements: [
      {
        name: '建安文学',
        description: '曹操、曹丕、曹植父子开创建安文学',
        figure: '曹操、曹丕、曹植'
      },
      {
        name: '《出师表》',
        description: '诸葛亮著《出师表》，成为千古名篇',
        figure: '诸葛亮'
      },
      {
        name: '九品中正制',
        description: '曹丕采纳陈群建议，实行九品中正制',
        figure: '陈群'
      }
    ]
  },
  {
    id: 'western-jin',
    name: '西晋',
    startYear: 265,
    endYear: 316,
    period: 'classical',
    founder: '晋武帝（司马炎）',
    representativeRulers: ['晋武帝（司马炎）', '晋惠帝（司马衷）', '晋怀帝（司马炽）'],
    events: [
      {
        name: '西晋建立',
        description: '司马炎逼迫魏元帝禅让，建立晋朝',
        year: 265
      },
      {
        name: '西晋统一全国',
        description: '西晋灭吴，统一全国',
        year: 280
      },
      {
        name: '八王之乱',
        description: '西晋皇室内部争夺政权的内乱，导致西晋衰落',
        year: 291
      }
    ],
    culturalAchievements: [
      {
        name: '《三国志》',
        description: '陈寿著《三国志》，记录三国历史',
        figure: '陈寿'
      },
      {
        name: '玄学兴起',
        description: '以老庄思想为核心的玄学兴起',
        figure: '王弼、何晏'
      },
      {
        name: '书法艺术',
        description: '书法艺术发展，出现钟繇等书法大家',
        figure: '钟繇'
      }
    ]
  },
  {
    id: 'eastern-jin',
    name: '东晋',
    startYear: 317,
    endYear: 420,
    period: 'classical',
    founder: '晋元帝（司马睿）',
    representativeRulers: ['晋元帝（司马睿）', '晋明帝（司马绍）', '晋孝武帝（司马曜）'],
    events: [
      {
        name: '东晋建立',
        description: '司马睿在建康（今南京）建立东晋',
        year: 317
      },
      {
        name: '淝水之战',
        description: '东晋在淝水之战中以少胜多，击败前秦',
        year: 383
      },
      {
        name: '刘裕代晋',
        description: '刘裕逼迫晋恭帝禅让，建立刘宋',
        year: 420
      }
    ],
    culturalAchievements: [
      {
        name: '王羲之书法',
        description: '王羲之被誉为"书圣"，《兰亭序》被誉为"天下第一行书"',
        figure: '王羲之'
      },
      {
        name: '顾恺之绘画',
        description: '顾恺之开创人物画新风格',
        figure: '顾恺之'
      },
      {
        name: '陶渊明田园诗',
        description: '陶渊明开创田园诗派',
        figure: '陶渊明'
      }
    ]
  },
  {
    id: 'northern-southern-dynasties',
    name: '南北朝',
    startYear: 420,
    endYear: 589,
    period: 'classical',
    founder: '宋武帝（刘裕）',
    representativeRulers: ['宋武帝（刘裕）', '北魏孝文帝（元宏）', '梁武帝（萧衍）'],
    events: [
      {
        name: '刘宋建立',
        description: '刘裕建立刘宋，南朝开始',
        year: 420
      },
      {
        name: '北魏孝文帝改革',
        description: '北魏孝文帝推行汉化改革，促进民族融合',
        year: 490
      },
      {
        name: '隋灭陈',
        description: '隋朝灭陈，结束南北朝分裂局面',
        year: 589
      }
    ],
    culturalAchievements: [
      {
        name: '龙门石窟',
        description: '开凿龙门石窟，是中国佛教艺术宝库',
        figure: null
      },
      {
        name: '《文心雕龙》',
        description: '刘勰著《文心雕龙》，是中国文学理论批评巨著',
        figure: '刘勰'
      },
      {
        name: '祖冲之计算圆周率',
        description: '祖冲之将圆周率精确到小数点后七位',
        figure: '祖冲之'
      }
    ]
  },
  {
    id: 'sui',
    name: '隋朝',
    startYear: 581,
    endYear: 618,
    period: 'medieval',
    founder: '隋文帝（杨坚）',
    representativeRulers: ['隋文帝（杨坚）', '隋炀帝（杨广）'],
    events: [
      {
        name: '隋朝建立',
        description: '杨坚逼迫北周静帝禅让，建立隋朝',
        year: 581
      },
      {
        name: '隋灭陈统一全国',
        description: '隋朝灭陈，结束近四百年的分裂局面',
        year: 589
      },
      {
        name: '开凿大运河',
        description: '隋炀帝开凿大运河，连接南北',
        year: 605
      }
    ],
    culturalAchievements: [
      {
        name: '科举制度创立',
        description: '隋朝创立科举制度，影响中国一千多年',
        figure: '隋文帝（杨坚）'
      },
      {
        name: '大运河',
        description: '开凿贯通南北的大运河，促进经济文化交流',
        figure: '隋炀帝（杨广）'
      },
      {
        name: '赵州桥',
        description: '李春设计建造赵州桥，是世界现存最古老的石拱桥',
        figure: '李春'
      }
    ]
  },
  {
    id: 'tang',
    name: '唐朝',
    startYear: 618,
    endYear: 907,
    period: 'medieval',
    founder: '唐高祖（李渊）',
    representativeRulers: ['唐高祖（李渊）', '唐太宗（李世民）', '武则天（武曌）', '唐玄宗（李隆基）'],
    events: [
      {
        name: '唐朝建立',
        description: '李渊建立唐朝，定都长安',
        year: 618
      },
      {
        name: '贞观之治',
        description: '唐太宗励精图治，开创贞观盛世',
        year: 627
      },
      {
        name: '武则天称帝',
        description: '武则天称帝，建立周朝，是中国历史上唯一的女皇帝',
        year: 690
      },
      {
        name: '开元盛世',
        description: '唐玄宗开元年间，唐朝达到鼎盛',
        year: 713
      },
      {
        name: '安史之乱',
        description: '安禄山、史思明发动叛乱，唐朝由盛转衰',
        year: 755
      }
    ],
    culturalAchievements: [
      {
        name: '唐诗',
        description: '唐诗达到中国古典诗歌巅峰',
        figure: '李白、杜甫、白居易等'
      },
      {
        name: '雕版印刷术',
        description: '雕版印刷术在唐朝发明，促进了文化传播',
        figure: null
      },
      {
        name: '玄奘西行',
        description: '玄奘西行取经，促进中印文化交流',
        figure: '玄奘'
      },
      {
        name: '敦煌艺术',
        description: '敦煌莫高窟艺术达到高峰，是世界艺术宝库',
        figure: null
      },
      {
        name: '唐传奇',
        description: '唐代传奇小说兴起，标志着中国小说的成熟',
        figure: '元稹、白行简等'
      }
    ]
  },
  {
    id: 'five-dynasties',
    name: '五代十国',
    startYear: 907,
    endYear: 960,
    period: 'medieval',
    founder: '后梁太祖（朱温）',
    representativeRulers: ['后梁太祖（朱温）', '后唐庄宗（李存勖）', '后周世宗（柴荣）'],
    events: [
      {
        name: '后梁建立',
        description: '朱温灭唐，建立后梁，五代开始',
        year: 907
      },
      {
        name: '陈桥兵变',
        description: '赵匡胤发动陈桥兵变，建立宋朝',
        year: 960
      },
      {
        name: '周世宗改革',
        description: '后周世宗柴荣改革，为北宋统一奠定基础',
        year: 955
      }
    ],
    culturalAchievements: [
      {
        name: '词的发展',
        description: '词在五代时期得到发展',
        figure: '李煜、冯延巳'
      },
      {
        name: '雕版印刷',
        description: '雕版印刷术进一步发展',
        figure: null
      },
      {
        name: '《花间集》',
        description: '中国最早的文人词总集',
        figure: '赵崇祚'
      }
    ]
  },
  {
    id: 'northern-song',
    name: '北宋',
    startYear: 960,
    endYear: 1127,
    period: 'medieval',
    founder: '宋太祖（赵匡胤）',
    representativeRulers: ['宋太祖（赵匡胤）', '宋太宗（赵光义）', '宋仁宗（赵祯）', '宋神宗（赵顼）'],
    events: [
      {
        name: '北宋建立',
        description: '赵匡胤建立宋朝，定都开封',
        year: 960
      },
      {
        name: '澶渊之盟',
        description: '北宋与辽国订立澶渊之盟，维持百年和平',
        year: 1005
      },
      {
        name: '王安石变法',
        description: '王安石在宋神宗支持下实行变法',
        year: 1069
      },
      {
        name: '靖康之变',
        description: '金军攻破开封，俘虏徽、钦二帝，北宋灭亡',
        year: 1127
      }
    ],
    culturalAchievements: [
      {
        name: '活字印刷术',
        description: '毕昇发明活字印刷术',
        figure: '毕昇'
      },
      {
        name: '指南针应用',
        description: '指南针开始应用于航海',
        figure: null
      },
      {
        name: '《资治通鉴》',
        description: '司马光主编《资治通鉴》，是中国最大的编年体通史',
        figure: '司马光'
      },
      {
        name: '宋词',
        description: '宋词达到艺术高峰',
        figure: '苏轼、辛弃疾、李清照等'
      }
    ]
  },
  {
    id: 'southern-song',
    name: '南宋',
    startYear: 1127,
    endYear: 1279,
    period: 'medieval',
    founder: '宋高宗（赵构）',
    representativeRulers: ['宋高宗（赵构）', '宋孝宗（赵昚）', '宋理宗（赵昀）'],
    events: [
      {
        name: '南宋建立',
        description: '赵构在临安（今杭州）建立南宋',
        year: 1127
      },
      {
        name: '岳飞抗金',
        description: '岳飞率军抗金，收复大片失地',
        year: 1140
      },
      {
        name: '崖山海战',
        description: '南宋在崖山海战中失败，南宋灭亡',
        year: 1279
      }
    ],
    culturalAchievements: [
      {
        name: '理学发展',
        description: '朱熹集理学之大成',
        figure: '朱熹'
      },
      {
        name: '南宋绘画',
        description: '南宋山水画达到新高峰',
        figure: '马远、夏圭'
      },
      {
        name: '火药武器',
        description: '火药开始用于军事，出现突火枪等武器',
        figure: null
      }
    ]
  },
  {
    id: 'yuan',
    name: '元朝',
    startYear: 1271,
    endYear: 1368,
    period: 'late-imperial',
    founder: '元世祖（忽必烈）',
    representativeRulers: ['元世祖（孛儿只斤·忽必烈）', '元成宗（孛儿只斤·铁穆耳）', '元武宗（孛儿只斤·海山）'],
    events: [
      {
        name: '元朝建立',
        description: '忽必烈建立元朝，定都大都（今北京）',
        year: 1271
      },
      {
        name: '元灭南宋',
        description: '元朝灭南宋，统一全国',
        year: 1279
      },
      {
        name: '红巾军起义',
        description: '红巾军起义爆发，动摇元朝统治',
        year: 1351
      }
    ],
    culturalAchievements: [
      {
        name: '元曲',
        description: '元曲（杂剧和散曲）达到艺术高峰',
        figure: '关汉卿、马致远、白朴等'
      },
      {
        name: '郭守敬编历',
        description: '郭守敬编制《授时历》，是当时世界上最先进的历法',
        figure: '郭守敬'
      },
      {
        name: '青花瓷',
        description: '元青花瓷达到很高艺术水平',
        figure: null
      }
    ]
  },
  {
    id: 'ming',
    name: '明朝',
    startYear: 1368,
    endYear: 1644,
    period: 'late-imperial',
    founder: '明太祖（朱元璋）',
    representativeRulers: ['明太祖（朱元璋）', '明成祖（朱棣）', '明仁宗（朱高炽）', '明宣宗（朱瞻基）', '明神宗（朱翊钧）'],
    events: [
      {
        name: '明朝建立',
        description: '朱元璋建立明朝，定都南京',
        year: 1368
      },
      {
        name: '靖难之役',
        description: '朱棣发动靖难之役，夺取皇位',
        year: 1399
      },
      {
        name: '郑和下西洋',
        description: '郑和七次下西洋，促进中外交流',
        year: 1405
      },
      {
        name: '戚继光抗倭',
        description: '戚继光率领戚家军抗击倭寇，保卫东南沿海',
        year: 1560
      },
      {
        name: '李自成起义',
        description: '李自成领导农民起义，攻占北京，明朝灭亡',
        year: 1644
      }
    ],
    culturalAchievements: [
      {
        name: '《永乐大典》',
        description: '编纂《永乐大典》，是中国最大的百科全书',
        figure: '解缙、姚广孝'
      },
      {
        name: '紫禁城',
        description: '修建北京紫禁城，是世界现存最大的宫殿建筑群',
        figure: '明成祖（朱棣）'
      },
      {
        name: '明代小说',
        description: '《三国演义》《水浒传》《西游记》等长篇小说问世',
        figure: '罗贯中、施耐庵、吴承恩'
      },
      {
        name: '《本草纲目》',
        description: '李时珍著《本草纲目》，是中国药物学巨著',
        figure: '李时珍'
      },
      {
        name: '《天工开物》',
        description: '宋应星著《天工开物》，是中国古代科技百科全书',
        figure: '宋应星'
      },
      {
        name: '《徐霞客游记》',
        description: '徐霞客著《徐霞客游记》，是地理学名著',
        figure: '徐霞客'
      }
    ]
  },
  {
    id: 'qing',
    name: '清朝',
    startYear: 1644,
    endYear: 1912,
    period: 'late-imperial',
    founder: '清世祖（福临）',
    representativeRulers: ['清世祖（爱新觉罗·福临）', '清圣祖（爱新觉罗·玄烨）', '清世宗（爱新觉罗·胤禛）', '清高宗（爱新觉罗·弘历）', '清德宗（爱新觉罗·载湉）'],
    events: [
      {
        name: '清军入关',
        description: '清军入关，建立全国性政权',
        year: 1644
      },
      {
        name: '康乾盛世',
        description: '康熙、雍正、乾隆三朝，清朝达到鼎盛',
        year: 1661
      },
      {
        name: '鸦片战争',
        description: '英国发动鸦片战争，中国开始沦为半殖民地半封建社会',
        year: 1840
      },
      {
        name: '太平天国运动',
        description: '洪秀全领导太平天国运动，动摇清朝统治',
        year: 1851
      },
      {
        name: '戊戌变法',
        description: '康有为、梁启超等推动戊戌变法，试图挽救民族危机',
        year: 1898
      },
      {
        name: '辛亥革命',
        description: '辛亥革命爆发，清朝灭亡',
        year: 1911
      }
    ],
    culturalAchievements: [
      {
        name: '《红楼梦》',
        description: '曹雪芹著《红楼梦》，是中国古典小说巅峰之作',
        figure: '曹雪芹'
      },
      {
        name: '《四库全书》',
        description: '编纂《四库全书》，是中国最大的丛书',
        figure: '纪昀等'
      },
      {
        name: '京剧形成',
        description: '京剧在北京形成，成为中国国粹',
        figure: null
      },
      {
        name: '《儒林外史》',
        description: '吴敬梓著《儒林外史》，是讽刺小说杰作',
        figure: '吴敬梓'
      },
      {
        name: '《聊斋志异》',
        description: '蒲松龄著《聊斋志异》，是文言短篇小说集',
        figure: '蒲松龄'
      }
    ]
  }
];

export default dynasties;
