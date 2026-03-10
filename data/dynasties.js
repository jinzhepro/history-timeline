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
      },
      {
        name: '陈胜吴广起义',
        description: '陈胜吴广在大泽乡起义，揭开秦末农民战争序幕',
        year: -209
      },
      {
        name: '巨鹿之战',
        description: '项羽在巨鹿之战中大败秦军，摧毁秦朝主力',
        year: -207
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
      },
      {
        name: '秦直道',
        description: '修建秦直道，是中国古代重要军事交通要道',
        figure: null
      },
      {
        name: '灵渠',
        description: '开凿灵渠，连接长江和珠江水系',
        figure: null
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
        name: '白登之围',
        description: '刘邦被匈奴围困于白登山，后采用陈平计策脱险',
        year: -200
      },
      {
        name: '文景之治',
        description: '汉文帝、汉景帝时期，轻徭薄赋，与民休息，社会经济恢复发展',
        year: -180
      },
      {
        name: '七国之乱',
        description: '吴王刘濞等七国诸侯发动叛乱，被周亚夫平定',
        year: -154
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
        name: '巫蛊之祸',
        description: '汉武帝晚年发生巫蛊之祸，太子刘据被迫自杀',
        year: -91
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
      },
      {
        name: '汉赋',
        description: '汉赋兴盛，成为汉代代表性文学体裁',
        figure: '司马相如、扬雄'
      },
      {
        name: '太初历',
        description: '汉武帝时期制定太初历，是中国第一部比较完整的历法',
        figure: '司马迁、公孙卿'
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
        name: '党锢之祸',
        description: '宦官迫害士人，禁锢党人，东汉政治日益腐败',
        year: 166
      },
      {
        name: '黄巾起义',
        description: '张角领导黄巾起义，动摇了东汉统治基础',
        year: 184
      },
      {
        name: '董卓之乱',
        description: '董卓进京专权，各地诸侯起兵讨伐，东汉名存实亡',
        year: 189
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
      },
      {
        name: '《说文解字》',
        description: '许慎著《说文解字》，是中国第一部系统分析汉字字形和考究字源的专著',
        figure: '许慎'
      },
      {
        name: '浑天仪',
        description: '张衡发明浑天仪和地动仪，是世界最早的地震仪器',
        figure: '张衡'
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
        name: '玄武门之变',
        description: '李世民在玄武门发动政变，杀死太子李建成，后即位为唐太宗',
        year: 626
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
      },
      {
        name: '黄巢起义',
        description: '黄巢领导农民起义，攻入长安，唐朝统治崩溃',
        year: 875
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
      },
      {
        name: '楷书四大家',
        description: '颜真卿、柳公权等书法家创立颜体、柳体，影响深远',
        figure: '颜真卿、柳公权、欧阳询、赵孟頫'
      },
      {
        name: '《千金方》',
        description: '孙思邈著《千金方》，是中国最早的临床医学百科全书',
        figure: '孙思邈'
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
        name: '杯酒释兵权',
        description: '宋太祖通过酒宴解除将领兵权，加强中央集权',
        year: 961
      },
      {
        name: '澶渊之盟',
        description: '北宋与辽国订立澶渊之盟，维持百年和平',
        year: 1005
      },
      {
        name: '庆历新政',
        description: '范仲淹推行庆历新政，试图改革吏治',
        year: 1043
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
        name: '火药武器',
        description: '火药开始用于军事，发明突火枪等武器',
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
      },
      {
        name: '理学兴起',
        description: '程颢、程颐创立理学，对后世影响深远',
        figure: '程颢、程颐'
      },
      {
        name: '《清明上河图》',
        description: '张择端绘《清明上河图》，展现北宋繁华景象',
        figure: '张择端'
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
        name: '土木堡之变',
        description: '明英宗被瓦剌俘虏，明朝由盛转衰',
        year: 1449
      },
      {
        name: '戚继光抗倭',
        description: '戚继光率领戚家军抗击倭寇，保卫东南沿海',
        year: 1560
      },
      {
        name: '张居正改革',
        description: '张居正推行一条鞭法等改革，使明朝中兴',
        year: 1572
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
      },
      {
        name: '阳明心学',
        description: '王阳明创立心学，提出"知行合一"',
        figure: '王阳明'
      },
      {
        name: '景泰蓝工艺',
        description: '景泰蓝工艺达到高峰，成为明代特色工艺品',
        figure: null
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
        name: '康熙擒鳌拜',
        description: '康熙帝智擒权臣鳌拜，开始亲政',
        year: 1669
      },
      {
        name: '三藩之乱',
        description: '吴三桂等发动三藩之乱，被康熙平定',
        year: 1673
      },
      {
        name: '康乾盛世',
        description: '康熙、雍正、乾隆三朝，清朝达到鼎盛',
        year: 1661
      },
      {
        name: '文字狱',
        description: '清朝大兴文字狱，禁锢思想',
        year: 1750
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
        name: '洋务运动',
        description: '曾国藩、李鸿章等推动洋务运动，学习西方技术',
        year: 1861
      },
      {
        name: '甲午战争',
        description: '中日甲午战争，清朝战败，签订《马关条约》',
        year: 1894
      },
      {
        name: '戊戌变法',
        description: '康有为、梁启超等推动戊戌变法，试图挽救民族危机',
        year: 1898
      },
      {
        name: '义和团运动',
        description: '义和团运动爆发，八国联军侵华',
        year: 1900
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
      },
      {
        name: '考据学',
        description: '乾嘉学派发展考据学，对中国古籍进行系统整理',
        figure: '戴震、钱大昕'
      },
      {
        name: '圆明园',
        description: '修建圆明园，被誉为"万园之园"',
        figure: null
      }
    ]
  },
  {
    id: 'republic-of-china',
    name: '中华民国',
    startYear: 1912,
    endYear: 1949,
    period: 'modern',
    founder: '孙中山',
    representativeRulers: ['孙中山', '袁世凯', '蒋介石', '李宗仁'],
    events: [
      {
        name: '中华民国成立',
        description: '孙中山就任临时大总统，中华民国正式成立，结束了两千多年的封建帝制',
        year: 1912
      },
      {
        name: '清帝退位',
        description: '清宣统帝溥仪颁布退位诏书，清朝正式灭亡',
        year: 1912
      },
      {
        name: '二次革命',
        description: '孙中山发动二次革命，反对袁世凯独裁统治',
        year: 1913
      },
      {
        name: '袁世凯称帝',
        description: '袁世凯复辟帝制，改国号为"中华帝国"',
        year: 1915
      },
      {
        name: '护国运动',
        description: '蔡锷等发动护国运动，反对袁世凯称帝',
        year: 1915
      },
      {
        name: '五四运动',
        description: '北京学生发起五四运动，标志着中国新民主主义革命的开端',
        year: 1919
      },
      {
        name: '中国共产党成立',
        description: '中国共产党第一次全国代表大会在上海召开',
        year: 1921
      },
      {
        name: '黄埔军校创办',
        description: '孙中山创办黄埔军校，培养革命军事人才',
        year: 1924
      },
      {
        name: '北伐战争',
        description: '国民革命军出师北伐，统一中国',
        year: 1926
      },
      {
        name: '南京国民政府成立',
        description: '蒋介石建立南京国民政府',
        year: 1927
      },
      {
        name: '九一八事变',
        description: '日本发动九一八事变，侵占中国东北',
        year: 1931
      },
      {
        name: '长征',
        description: '中国工农红军进行二万五千里长征',
        year: 1934
      },
      {
        name: '西安事变',
        description: '张学良、杨虎城发动西安事变，促成国共合作抗日',
        year: 1936
      },
      {
        name: '七七事变',
        description: '卢沟桥事变爆发，中国全面抗日战争开始',
        year: 1937
      },
      {
        name: '南京大屠杀',
        description: '日军攻占南京，进行惨绝人寰的大屠杀',
        year: 1937
      },
      {
        name: '抗战胜利',
        description: '日本宣布无条件投降，中国抗日战争取得伟大胜利',
        year: 1945
      },
      {
        name: '国共内战',
        description: '国共两党爆发全面内战',
        year: 1946
      },
      {
        name: '中华人民共和国成立',
        description: '毛泽东在天安门宣布中华人民共和国成立，中华民国政府迁往台湾',
        year: 1949
      }
    ],
    culturalAchievements: [
      {
        name: '新文化运动',
        description: '提倡民主与科学，推动白话文运动，是中国近代思想启蒙运动',
        figure: '陈独秀、胡适、鲁迅'
      },
      {
        name: '白话文运动',
        description: '胡适倡导白话文，推动文学革命',
        figure: '胡适、鲁迅'
      },
      {
        name: '《狂人日记》',
        description: '鲁迅发表《狂人日记》，是中国现代文学史上第一篇白话小说',
        figure: '鲁迅'
      },
      {
        name: '西南联大',
        description: '抗战时期北大、清华、南开三校南迁昆明，组成西南联合大学',
        figure: '梅贻琦、张伯苓、蒋梦麟'
      },
      {
        name: '电影艺术发展',
        description: '中国电影业蓬勃发展，出现《渔光曲》《马路天使》等经典作品',
        figure: '蔡楚生、阮玲玉'
      },
      {
        name: '京剧改良',
        description: '梅兰芳等推动京剧艺术革新，走向国际舞台',
        figure: '梅兰芳'
      }
    ]
  }
];

/**
 * 历史人物关系数据
 * 包含重要历史人物的详细信息和关系网络
 */
export const historicalFigures = [
  // 夏朝人物
  {
    id: 'yu-xia',
    name: '禹',
    dynasty: 'xia',
    title: '夏朝开国君主',
    reign: '-2070 至 -2020',
    description: '夏朝的建立者，治水英雄，采用疏导法治水，三过家门而不入',
    relations: [
      { type: 'successor', target: 'qi', label: '传位于' }
    ]
  },
  {
    id: 'qi',
    name: '启',
    dynasty: 'xia',
    title: '夏朝第二代君主',
    reign: '-2020 至 -1990',
    description: '禹之子，继承王位，确立了世袭制，结束了禅让制',
    relations: [
      { type: 'predecessor', target: 'yu-xia', label: '继承自' },
      { type: 'successor', target: 'tai-kang', label: '传位于' }
    ]
  },
  
  // 商朝人物
  {
    id: 'tang-shang',
    name: '汤',
    dynasty: 'shang',
    title: '商朝开国君主',
    reign: '-1600 至 -1580',
    description: '商朝建立者，推翻夏桀统治，建立商朝',
    relations: [
      { type: 'successor', target: 'wai-bing', label: '传位于' }
    ]
  },
  {
    id: 'wu-ding',
    name: '武丁',
    dynasty: 'shang',
    title: '商朝第 23 代君主',
    reign: '-1250 至 -1192',
    description: '商朝鼎盛时期的君主，在位 59 年，史称"武丁中兴"',
    relations: [
      { type: 'spouse', target: 'fu-hao', label: '配偶' }
    ]
  },
  {
    id: 'fu-hao',
    name: '妇好',
    dynasty: 'shang',
    title: '商王武丁配偶',
    reign: null,
    description: '中国历史上有据可查的第一位女性军事统帅和政治家',
    relations: [
      { type: 'spouse', target: 'wu-ding', label: '配偶' }
    ]
  },
  
  // 西周人物
  {
    id: 'ji-fa',
    name: '周武王',
    formalName: '姬发',
    dynasty: 'western-zhou',
    title: '西周开国君主',
    reign: '-1046 至 -1043',
    description: '西周建立者，在牧野之战中击败商纣王，建立周朝',
    relations: [
      { type: 'father', target: 'ji-chang', label: '父亲' },
      { type: 'brother', target: 'ji-dan', label: '弟弟' },
      { type: 'successor', target: 'ji-song', label: '传位于' }
    ]
  },
  {
    id: 'ji-chang',
    name: '周文王',
    formalName: '姬昌',
    dynasty: 'western-zhou',
    title: '周朝奠基者',
    reign: null,
    description: '周武王之父，为周朝建立奠定基础，演《周易》',
    relations: [
      { type: 'son', target: 'ji-fa', label: '儿子' },
      { type: 'son', target: 'ji-dan', label: '儿子' }
    ]
  },
  {
    id: 'ji-dan',
    name: '周公旦',
    formalName: '姬旦',
    dynasty: 'western-zhou',
    title: '西周政治家',
    reign: null,
    description: '周武王之弟，辅佐成王，制礼作乐，建立周朝典章制度',
    relations: [
      { type: 'father', target: 'ji-chang', label: '父亲' },
      { type: 'brother', target: 'ji-fa', label: '哥哥' },
      { type: 'nephew', target: 'ji-song', label: '辅佐' }
    ]
  },
  {
    id: 'ji-song',
    name: '周成王',
    formalName: '姬诵',
    dynasty: 'western-zhou',
    title: '西周第二代君主',
    reign: '-1042 至 -1021',
    description: '周武王之子，周公旦辅佐，开创"成康之治"',
    relations: [
      { type: 'father', target: 'ji-fa', label: '父亲' },
      { type: 'uncle', target: 'ji-dan', label: '叔父' }
    ]
  },
  
  // 东周/春秋战国人物
  {
    id: 'kong-zi',
    name: '孔子',
    formalName: '孔丘',
    dynasty: 'eastern-zhou',
    title: '儒家学派创始人',
    reign: null,
    description: '春秋末期思想家、教育家，儒家学派创始人，被尊为"至圣先师"',
    relations: [
      { type: 'student', target: 'yan-hui', label: '得意弟子' },
      { type: 'student', target: 'zi-lu', label: '弟子' }
    ]
  },
  {
    id: 'yan-hui',
    name: '颜回',
    formalName: '颜渊',
    dynasty: 'eastern-zhou',
    title: '孔子弟子',
    reign: null,
    description: '孔子最得意的弟子，以德行著称',
    relations: [
      { type: 'teacher', target: 'kong-zi', label: '老师' }
    ]
  },
  {
    id: 'lao-zi',
    name: '老子',
    formalName: '李耳',
    dynasty: 'eastern-zhou',
    title: '道家学派创始人',
    reign: null,
    description: '春秋时期思想家，著《道德经》，道家学派创始人',
    relations: []
  },
  {
    id: 'sun-wu',
    name: '孙子',
    formalName: '孙武',
    dynasty: 'eastern-zhou',
    title: '军事家',
    reign: null,
    description: '春秋末期军事家，著《孙子兵法》，被尊为"兵圣"',
    relations: []
  },
  {
    id: 'ying-zheng',
    name: '秦始皇',
    formalName: '嬴政',
    dynasty: 'qin',
    title: '秦朝开国皇帝',
    reign: '-221 至 -210',
    description: '中国历史上第一位皇帝，统一六国，建立中央集权制度',
    relations: [
      { type: 'father', target: 'ying-yiren', label: '父亲' },
      { type: 'successor', target: 'ying-huhai', label: '继承人' }
    ]
  },
  {
    id: 'ying-yiren',
    name: '秦庄襄王',
    formalName: '嬴异人',
    dynasty: 'qin',
    title: '秦国君主',
    reign: '-250 至 -247',
    description: '秦始皇之父，在位 3 年',
    relations: [
      { type: 'son', target: 'ying-zheng', label: '儿子' }
    ]
  },
  {
    id: 'ying-huhai',
    name: '秦二世',
    formalName: '嬴胡亥',
    dynasty: 'qin',
    title: '秦朝第二代皇帝',
    reign: '-210 至 -207',
    description: '秦始皇第十八子，秦朝第二位皇帝',
    relations: [
      { type: 'father', target: 'ying-zheng', label: '父亲' }
    ]
  },
  {
    id: 'li-si',
    name: '李斯',
    formalName: null,
    dynasty: 'qin',
    title: '秦朝丞相',
    reign: null,
    description: '秦朝著名政治家，协助秦始皇统一天下，创制小篆',
    relations: [
      { type: 'monarch', target: 'ying-zheng', label: '效忠' }
    ]
  },
  
  // 西汉人物
  {
    id: 'liu-bang',
    name: '汉高祖',
    formalName: '刘邦',
    dynasty: 'western-han',
    title: '西汉开国皇帝',
    reign: '-202 至 -195',
    description: '西汉建立者，中国历史上第一位平民出身的皇帝',
    relations: [
      { type: 'successor', target: 'liu-heng', label: '继承人' }
    ]
  },
  {
    id: 'liu-che',
    name: '汉武帝',
    formalName: '刘彻',
    dynasty: 'western-han',
    title: '西汉第七位皇帝',
    reign: '-141 至 -87',
    description: '西汉鼎盛时期皇帝，北击匈奴，开辟丝绸之路',
    relations: [
      { type: 'general', target: 'wei-qing', label: '大将' },
      { type: 'general', target: 'huo-qubing', label: '大将' },
      { type: 'envoy', target: 'zhang-qian', label: '使者' }
    ]
  },
  {
    id: 'wei-qing',
    name: '卫青',
    formalName: null,
    dynasty: 'western-han',
    title: '西汉名将',
    reign: null,
    description: '汉武帝时期名将，多次北击匈奴，战功卓著',
    relations: [
      { type: 'monarch', target: 'liu-che', label: '效忠' },
      { type: 'nephew', target: 'huo-qubing', label: '外甥' }
    ]
  },
  {
    id: 'huo-qubing',
    name: '霍去病',
    formalName: null,
    dynasty: 'western-han',
    title: '西汉名将',
    reign: null,
    description: '汉武帝时期名将，封狼居胥，英年早逝',
    relations: [
      { type: 'monarch', target: 'liu-che', label: '效忠' },
      { type: 'uncle', target: 'wei-qing', label: '舅舅' }
    ]
  },
  {
    id: 'zhang-qian',
    name: '张骞',
    formalName: null,
    dynasty: 'western-han',
    title: '西汉外交家',
    reign: null,
    description: '丝绸之路开拓者，两次出使西域',
    relations: [
      { type: 'monarch', target: 'liu-che', label: '效忠' }
    ]
  },
  {
    id: 'si-ma-qian',
    name: '司马迁',
    formalName: null,
    dynasty: 'western-han',
    title: '西汉史学家',
    reign: null,
    description: '著《史记》，中国第一部纪传体通史',
    relations: []
  },
  
  // 东汉人物
  {
    id: 'liu-xiu',
    name: '汉光武帝',
    formalName: '刘秀',
    dynasty: 'eastern-han',
    title: '东汉开国皇帝',
    reign: '25 至 57',
    description: '东汉建立者，开创"光武中兴"',
    relations: []
  },
  {
    id: 'cai-lun',
    name: '蔡伦',
    formalName: null,
    dynasty: 'eastern-han',
    title: '东汉发明家',
    reign: null,
    description: '改进造纸术，对人类文明发展产生深远影响',
    relations: []
  },
  
  // 三国人物
  {
    id: 'cao-cao',
    name: '曹操',
    formalName: '孟德',
    dynasty: 'three-kingdoms',
    title: '魏国奠基者',
    reign: null,
    description: '东汉末年政治家、军事家、诗人，魏国实际建立者',
    relations: [
      { type: 'son', target: 'cao-pi', label: '儿子' },
      { type: 'son', target: 'cao-zhi', label: '儿子' },
      { type: 'advisor', target: 'guo-jia', label: '谋士' }
    ]
  },
  {
    id: 'cao-pi',
    name: '魏文帝',
    formalName: '曹丕',
    dynasty: 'three-kingdoms',
    title: '魏国开国皇帝',
    reign: '220 至 226',
    description: '曹操之子，魏国建立者，建安文学代表人物',
    relations: [
      { type: 'father', target: 'cao-cao', label: '父亲' },
      { type: 'brother', target: 'cao-zhi', label: '弟弟' }
    ]
  },
  {
    id: 'cao-zhi',
    name: '曹植',
    formalName: '子建',
    dynasty: 'three-kingdoms',
    title: '魏国文学家',
    reign: null,
    description: '曹操之子，建安文学集大成者，《七步诗》作者',
    relations: [
      { type: 'father', target: 'cao-cao', label: '父亲' },
      { type: 'brother', target: 'cao-pi', label: '哥哥' }
    ]
  },
  {
    id: 'liu-bei',
    name: '刘备',
    formalName: '玄德',
    dynasty: 'three-kingdoms',
    title: '蜀汉开国皇帝',
    reign: '221 至 223',
    description: '蜀汉建立者，三国时期蜀汉政权开国皇帝',
    relations: [
      { type: 'advisor', target: 'zhuge-liang', label: '军师' },
      { type: 'general', target: 'guan-yu', label: '大将' },
      { type: 'general', target: 'zhang-fei', label: '大将' }
    ]
  },
  {
    id: 'zhuge-liang',
    name: '诸葛亮',
    formalName: '孔明',
    dynasty: 'three-kingdoms',
    title: '蜀汉丞相',
    reign: null,
    description: '三国时期蜀汉丞相，杰出政治家、军事家',
    relations: [
      { type: 'monarch', target: 'liu-bei', label: '效忠' },
      { type: 'monarch', target: 'liu-shan', label: '辅佐' }
    ]
  },
  {
    id: 'guan-yu',
    name: '关羽',
    formalName: '云长',
    dynasty: 'three-kingdoms',
    title: '蜀汉名将',
    reign: null,
    description: '蜀汉名将，被后世尊为"武圣"',
    relations: [
      { type: 'monarch', target: 'liu-bei', label: '效忠' },
      { type: 'sworn_brother', target: 'zhang-fei', label: '义弟' },
      { type: 'sworn_brother', target: 'liu-bei', label: '义兄' }
    ]
  },
  {
    id: 'zhang-fei',
    name: '张飞',
    formalName: '翼德',
    dynasty: 'three-kingdoms',
    title: '蜀汉名将',
    reign: null,
    description: '蜀汉名将，与关羽并称"关张"',
    relations: [
      { type: 'monarch', target: 'liu-bei', label: '效忠' },
      { type: 'sworn_brother', target: 'guan-yu', label: '义兄' },
      { type: 'sworn_brother', target: 'liu-bei', label: '义兄' }
    ]
  },
  {
    id: 'sun-quan',
    name: '孙权',
    formalName: '仲谋',
    dynasty: 'three-kingdoms',
    title: '吴国开国皇帝',
    reign: '229 至 252',
    description: '吴国建立者，三国时期吴国开国皇帝',
    relations: [
      { type: 'general', target: 'zhou-yu', label: '大将' }
    ]
  },
  {
    id: 'zhou-yu',
    name: '周瑜',
    formalName: '公瑾',
    dynasty: 'three-kingdoms',
    title: '吴国名将',
    reign: null,
    description: '吴国名将，赤壁之战指挥者',
    relations: [
      { type: 'monarch', target: 'sun-quan', label: '效忠' }
    ]
  },
  
  // 唐朝人物
  {
    id: 'li-shimin',
    name: '唐太宗',
    formalName: '李世民',
    dynasty: 'tang',
    title: '唐朝第二位皇帝',
    reign: '627 至 649',
    description: '唐朝第二位皇帝，开创"贞观之治"',
    relations: [
      { type: 'father', target: 'li-yuan', label: '父亲' },
      { type: 'successor', target: 'li-zhi', label: '继承人' }
    ]
  },
  {
    id: 'li-yuan',
    name: '唐高祖',
    formalName: '李渊',
    dynasty: 'tang',
    title: '唐朝开国皇帝',
    reign: '618 至 626',
    description: '唐朝建立者',
    relations: [
      { type: 'son', target: 'li-shimin', label: '儿子' }
    ]
  },
  {
    id: 'wu-ze-tian',
    name: '武则天',
    formalName: '武曌',
    dynasty: 'tang',
    title: '周朝皇帝',
    reign: '690 至 705',
    description: '中国历史上唯一的女皇帝',
    relations: [
      { type: 'husband', target: 'li-zhi', label: '丈夫' }
    ]
  },
  {
    id: 'li-longji',
    name: '唐玄宗',
    formalName: '李隆基',
    dynasty: 'tang',
    title: '唐朝第七位皇帝',
    reign: '712 至 756',
    description: '开创"开元盛世"，后期爆发安史之乱',
    relations: [
      { type: 'concubine', target: 'yang-gui-fei', label: '宠妃' }
    ]
  },
  {
    id: 'yang-gui-fei',
    name: '杨贵妃',
    formalName: '杨玉环',
    dynasty: 'tang',
    title: '唐玄宗宠妃',
    reign: null,
    description: '中国古代四大美女之一，唐玄宗宠妃',
    relations: [
      { type: 'monarch', target: 'li-longji', label: '宠幸' }
    ]
  },
  {
    id: 'li-bai',
    name: '李白',
    formalName: '太白',
    dynasty: 'tang',
    title: '唐代诗人',
    reign: null,
    description: '唐代伟大浪漫主义诗人，被尊为"诗仙"',
    relations: [
      { type: 'friend', target: 'du-fu', label: '好友' }
    ]
  },
  {
    id: 'du-fu',
    name: '杜甫',
    formalName: '子美',
    dynasty: 'tang',
    title: '唐代诗人',
    reign: null,
    description: '唐代伟大现实主义诗人，被尊为"诗圣"',
    relations: [
      { type: 'friend', target: 'li-bai', label: '好友' }
    ]
  },
  
  // 宋朝人物
  {
    id: 'zhao-kuang-yin',
    name: '宋太祖',
    formalName: '赵匡胤',
    dynasty: 'northern-song',
    title: '北宋开国皇帝',
    reign: '960 至 976',
    description: '北宋建立者，"陈桥兵变"黄袍加身',
    relations: []
  },
  {
    id: 'wang-an-shi',
    name: '王安石',
    formalName: '介甫',
    dynasty: 'northern-song',
    title: '北宋政治家',
    reign: null,
    description: '北宋著名政治家、文学家，主持"王安石变法"',
    relations: [
      { type: 'monarch', target: 'zhao-xu', label: '效忠' }
    ]
  },
  {
    id: 'su-shi',
    name: '苏轼',
    formalName: '子瞻',
    dynasty: 'northern-song',
    title: '北宋文学家',
    reign: null,
    description: '北宋文学家、书画家，"唐宋八大家"之一',
    relations: []
  },
  
  // 元朝人物
  {
    id: 'hubilie',
    name: '元世祖',
    formalName: '孛儿只斤·忽必烈',
    dynasty: 'yuan',
    title: '元朝开国皇帝',
    reign: '1260 至 1294',
    description: '元朝建立者，成吉思汗之孙',
    relations: [
      { type: 'grandfather', target: 'tie-mu-zhen', label: '祖父' }
    ]
  },
  {
    id: 'tie-mu-zhen',
    name: '成吉思汗',
    formalName: '孛儿只斤·铁木真',
    dynasty: 'yuan',
    title: '蒙古帝国大汗',
    reign: '1206 至 1227',
    description: '蒙古帝国建立者，被尊为"成吉思汗"',
    relations: [
      { type: 'grandson', target: 'hubilie', label: '孙子' }
    ]
  },
  
  // 明朝人物
  {
    id: 'zhu-yuan-zhang',
    name: '明太祖',
    formalName: '朱元璋',
    dynasty: 'ming',
    title: '明朝开国皇帝',
    reign: '1368 至 1398',
    description: '明朝建立者，出身贫寒，开创大明基业',
    relations: [
      { type: 'successor', target: 'zhu-di', label: '继承人' }
    ]
  },
  {
    id: 'zhu-di',
    name: '明成祖',
    formalName: '朱棣',
    dynasty: 'ming',
    title: '明朝第三位皇帝',
    reign: '1402 至 1424',
    description: '发动"靖难之役"夺取皇位，迁都北京，派郑和下西洋',
    relations: [
      { type: 'father', target: 'zhu-yuan-zhang', label: '父亲' },
      { type: 'envoy', target: 'zheng-he', label: '派遣' }
    ]
  },
  {
    id: 'zheng-he',
    name: '郑和',
    formalName: null,
    dynasty: 'ming',
    title: '明代航海家',
    reign: null,
    description: '明代著名航海家、外交家，七下西洋',
    relations: [
      { type: 'monarch', target: 'zhu-di', label: '效忠' }
    ]
  },
  {
    id: 'li-shi-zhen',
    name: '李时珍',
    formalName: '东璧',
    dynasty: 'ming',
    title: '明代医学家',
    reign: null,
    description: '著《本草纲目》，是中国药物学巨著',
    relations: []
  },
  
  // 清朝人物
  {
    id: 'kangxi',
    name: '康熙帝',
    formalName: '爱新觉罗·玄烨',
    dynasty: 'qing',
    title: '清朝第四位皇帝',
    reign: '1661 至 1722',
    description: '清朝在位时间最长的皇帝，开创"康乾盛世"',
    relations: [
      { type: 'father', target: 'yongzheng', label: '儿子' },
      { type: 'grandfather', target: 'qianlong', label: '孙子' }
    ]
  },
  {
    id: 'yongzheng',
    name: '雍正帝',
    formalName: '爱新觉罗·胤禛',
    dynasty: 'qing',
    title: '清朝第五位皇帝',
    reign: '1722 至 1735',
    description: '康熙帝第四子，在位期间励精图治',
    relations: [
      { type: 'father', target: 'kangxi', label: '父亲' },
      { type: 'son', target: 'qianlong', label: '儿子' }
    ]
  },
  {
    id: 'qianlong',
    name: '乾隆帝',
    formalName: '爱新觉罗·弘历',
    dynasty: 'qing',
    title: '清朝第六位皇帝',
    reign: '1735 至 1796',
    description: '清朝鼎盛时期皇帝，在位 60 年',
    relations: [
      { type: 'grandfather', target: 'kangxi', label: '祖父' },
      { type: 'father', target: 'yongzheng', label: '父亲' }
    ]
  },

  // 中华民国人物
  {
    id: 'sun-yat-sen',
    name: '孙中山',
    formalName: '孙文',
    dynasty: 'republic-of-china',
    title: '中华民国临时大总统',
    reign: '1912',
    description: '中国民主革命的伟大先驱，中华民国的缔造者，提出三民主义',
    relations: [
      { type: 'successor', target: 'yuan-shikai', label: '让位于' }
    ]
  },
  {
    id: 'yuan-shikai',
    name: '袁世凯',
    formalName: null,
    dynasty: 'republic-of-china',
    title: '中华民国大总统',
    reign: '1912 至 1916',
    description: '北洋军阀首领，曾任中华民国临时大总统和大总统，后复辟帝制',
    relations: [
      { type: 'predecessor', target: 'sun-yat-sen', label: '继任' }
    ]
  },
  {
    id: 'chiang-kai-shek',
    name: '蒋介石',
    formalName: '蒋中正',
    dynasty: 'republic-of-china',
    title: '国民政府军事委员会委员长',
    reign: '1925 至 1949',
    description: '国民党领袖，曾任黄埔军校校长，领导北伐战争和抗日战争',
    relations: [
      { type: 'predecessor', target: 'sun-yat-sen', label: '继承遗志' }
    ]
  },
  {
    id: 'lu-xun',
    name: '鲁迅',
    formalName: '周树人',
    dynasty: 'republic-of-china',
    title: '文学家、思想家',
    reign: null,
    description: '中国现代文学奠基人，新文化运动的重要参与者',
    relations: []
  },
  {
    id: 'hu-shi',
    name: '胡适',
    formalName: null,
    dynasty: 'republic-of-china',
    title: '学者、思想家',
    reign: null,
    description: '新文化运动领袖，提倡白话文和文学改良',
    relations: []
  },
  {
    id: 'mei-lanfang',
    name: '梅兰芳',
    formalName: null,
    dynasty: 'republic-of-china',
    title: '京剧表演艺术家',
    reign: null,
    description: '京剧大师，四大名旦之首，推动京剧艺术走向世界',
    relations: []
  }
];

export default dynasties;
