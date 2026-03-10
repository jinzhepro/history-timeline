/**
 * 测验题目生成器工具函数
 * 基于朝代数据自动生成测验题目
 * 
 * 功能：
 * - 生成 7 种题型的测验题目
 * - 智能生成干扰项
 * - 自动生成题目解析
 * - 支持随机抽题
 */

import dynasties from '../data/dynasties.js';

/**
 * 题目数据结构定义
 * @typedef {Object} QuizQuestion
 * @property {string} id - 题目唯一标识
 * @property {string} type - 题型：choice/time/founder/event/culture/sort/truefalse/fillblank
 * @property {string} question - 题目内容
 * @property {string[]} options - 选项数组（填空题为空数组）
 * @property {string|number} correctAnswer - 正确答案
 * @property {string} explanation - 题目解析
 * @property {'easy'|'medium'|'hard'} difficulty - 难度等级
 * @property {string} knowledgePoint - 知识点
 * @property {string} dynastyId - 相关朝代 ID
 * @property {string} dynastyName - 相关朝代名称
 */

/**
 * 题型枚举
 */
const QUESTION_TYPES = {
  CHOICE: 'choice',           // 朝代时间范围选择题
  TIME: 'time',               // 朝代时间选择题
  FOUNDER: 'founder',         // 开国君主选择题
  EVENT: 'event',             // 历史事件匹配题
  CULTURE: 'culture',         // 文化成就匹配题
  SORT: 'sort',               // 朝代排序题
  TRUE_FALSE: 'truefalse',    // 判断题
  FILL_BLANK: 'fillblank'     // 填空题
};

/**
 * 难度等级
 */
const DIFFICULTY = {
  EASY: 'easy',
  MEDIUM: 'medium',
  HARD: 'hard'
};

/**
 * 生成唯一 ID
 * @returns {string} 唯一 ID
 */
const generateId = () => {
  return `quiz_${Date.now()}_${Math.random().toString(36).substring(2, 11)}`;
};

/**
 * 格式化年份
 * @param {number} year - 年份
 * @returns {string} 格式化后的年份字符串
 */
const formatYear = (year) => {
  if (year < 0) {
    return `公元前${Math.abs(year)}年`;
  }
  return `公元${year}年`;
};

/**
 * 从数组中随机选择元素
 * @param {Array} array - 源数组
 * @param {number} count - 选择数量
 * @returns {Array} 随机选择的元素数组
 */
const getRandomItems = (array, count) => {
  const shuffled = [...array].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
};

/**
 * 生成干扰项（错误选项）
 * @param {string} correctAnswer - 正确答案
 * @param {Array} allOptions - 所有可能的选项池
 * @param {number} count - 需要生成的干扰项数量
 * @param {string} excludeId - 需要排除的朝代 ID
 * @returns {string[]} 干扰项数组
 */
const generateDistractors = (correctAnswer, allOptions, count, excludeId = null) => {
  const filtered = allOptions.filter(opt => opt !== correctAnswer);

  if (excludeId) {
    const dynasty = dynasties.find(d => d.id === excludeId);
    if (dynasty) {
      // 排除同一时期的朝代，增加难度
      const samePeriod = dynasties.filter(d => d.period === dynasty.period && d.id !== excludeId);
      if (samePeriod.length >= count) {
        return getRandomItems(samePeriod.map(d => d.founder || d.name), count);
      }
    }
  }

  return getRandomItems(filtered, count);
};

/**
 * 生成题目解析
 * @param {string} type - 题型
 * @param {object} dynasty - 朝代数据
 * @param {string} correctAnswer - 正确答案
 * @param {any} extraData - 额外数据（事件、成就等）
 * @returns {string} 解析内容
 */
const generateExplanation = (type, dynasty, correctAnswer, extraData = null) => {
  const explanations = {
    [QUESTION_TYPES.CHOICE]: `${dynasty.name}存在于${formatYear(dynasty.startYear)}至${formatYear(dynasty.endYear)}，${correctAnswer}。`,
    [QUESTION_TYPES.TIME]: `${dynasty.name}建立于${formatYear(dynasty.startYear)}，${correctAnswer}。`,
    [QUESTION_TYPES.FOUNDER]: `${dynasty.name}由${dynasty.founder}建立，${correctAnswer}。`,
    [QUESTION_TYPES.EVENT]: extraData
      ? `${extraData.name}发生在${dynasty.name}时期，${extraData.description}。`
      : `该事件发生在${dynasty.name}时期。`,
    [QUESTION_TYPES.CULTURE]: extraData
      ? `${extraData.name}是${dynasty.name}时期的重要文化成就，${extraData.description}。`
      : `该成就是${dynasty.name}时期的文化代表。`,
    [QUESTION_TYPES.SORT]: `正确顺序反映了历史朝代的时间先后关系。`,
    [QUESTION_TYPES.TRUE_FALSE]: correctAnswer === '正确'
      ? `该描述符合历史事实。`
      : `该描述与历史事实不符。`,
    [QUESTION_TYPES.FILL_BLANK]: extraData
      ? `${extraData.context}，正确答案是"${correctAnswer}"。`
      : `正确答案是"${correctAnswer}"。`
  };

  return explanations[type] || '';
};

/**
 * 生成朝代时间范围选择题
 * 例："西周建立于哪一年？"
 * @param {number} limit - 生成题目数量限制
 * @returns {QuizQuestion[]} 题目数组
 */
const generateTimeChoiceQuestions = (limit = 5) => {
  const questions = [];

  dynasties.forEach((dynasty) => {
    const questionTypes = [
      {
        question: `${dynasty.name}建立于哪一年？`,
        correctAnswer: formatYear(dynasty.startYear),
        knowledgePoint: '朝代建立时间'
      },
      {
        question: `${dynasty.name}结束于哪一年？`,
        correctAnswer: formatYear(dynasty.endYear),
        knowledgePoint: '朝代结束时间'
      },
      {
        question: `${dynasty.name}存在的时间范围是？`,
        correctAnswer: `${formatYear(dynasty.startYear)}至${formatYear(dynasty.endYear)}`,
        knowledgePoint: '朝代时间范围'
      }
    ];

    questionTypes.forEach((qType, index) => {
      if (questions.length >= limit) return;

      // 生成干扰项
      const otherYears = dynasties
        .filter(d => d.id !== dynasty.id)
        .map(d => {
          if (index === 0) return formatYear(d.startYear);
          if (index === 1) return formatYear(d.endYear);
          return `${formatYear(d.startYear)}至${formatYear(d.endYear)}`;
        });

      const distractors = generateDistractors(qType.correctAnswer, otherYears, 3, dynasty.id);
      const options = getRandomItems([...distractors, qType.correctAnswer], 4);

      questions.push({
        id: generateId(),
        type: QUESTION_TYPES.TIME,
        question: qType.question,
        options: options.sort(() => Math.random() - 0.5),
        correctAnswer: qType.correctAnswer,
        explanation: generateExplanation(QUESTION_TYPES.TIME, dynasty, qType.correctAnswer),
        difficulty: index === 2 ? DIFFICULTY.MEDIUM : DIFFICULTY.EASY,
        knowledgePoint: qType.knowledgePoint,
        dynastyId: dynasty.id,
        dynastyName: dynasty.name
      });
    });
  });

  return questions.slice(0, limit);
};

/**
 * 生成开国君主选择题
 * 例："谁建立了商朝？"
 * @param {number} limit - 生成题目数量限制
 * @returns {QuizQuestion[]} 题目数组
 */
const generateFounderQuestions = (limit = 5) => {
  const questions = [];
  const allFounders = dynasties.map(d => d.founder);

  dynasties.forEach((dynasty) => {
    if (questions.length >= limit) return;

    const question = `谁建立了${dynasty.name}？`;
    const correctAnswer = dynasty.founder;

    const distractors = generateDistractors(correctAnswer, allFounders, 3, dynasty.id);
    const options = getRandomItems([...distractors, correctAnswer], 4);

    questions.push({
      id: generateId(),
      type: QUESTION_TYPES.FOUNDER,
      question: question,
      options: options.sort(() => Math.random() - 0.5),
      correctAnswer: correctAnswer,
      explanation: generateExplanation(QUESTION_TYPES.FOUNDER, dynasty, correctAnswer),
      difficulty: DIFFICULTY.EASY,
      knowledgePoint: '开国君主',
      dynastyId: dynasty.id,
      dynastyName: dynasty.name
    });
  });

  return questions.slice(0, limit);
};

/**
 * 生成历史事件匹配题
 * 例："下列哪个事件发生在秦朝？"
 * @param {number} limit - 生成题目数量限制
 * @returns {QuizQuestion[]} 题目数组
 */
const generateEventQuestions = (limit = 5) => {
  const questions = [];

  dynasties.forEach((dynasty) => {
    if (!dynasty.events || dynasty.events.length === 0) return;
    if (questions.length >= limit) return;

    dynasty.events.forEach((event) => {
      if (questions.length >= limit) return;

      const question = `下列哪个事件发生在${dynasty.name}？`;
      const correctAnswer = event.name;

      // 从其他朝代收集事件作为干扰项
      const otherEvents = dynasties
        .filter(d => d.id !== dynasty.id && d.events && d.events.length > 0)
        .flatMap(d => d.events.map(e => e.name));

      const distractors = generateDistractors(correctAnswer, otherEvents, 3);
      const options = getRandomItems([...distractors, correctAnswer], 4);

      questions.push({
        id: generateId(),
        type: QUESTION_TYPES.EVENT,
        question: question,
        options: options.sort(() => Math.random() - 0.5),
        correctAnswer: correctAnswer,
        explanation: generateExplanation(QUESTION_TYPES.EVENT, dynasty, correctAnswer, event),
        difficulty: DIFFICULTY.MEDIUM,
        knowledgePoint: '历史事件',
        dynastyId: dynasty.id,
        dynastyName: dynasty.name
      });
    });
  });

  return questions.slice(0, limit);
};

/**
 * 生成文化成就匹配题
 * 例："甲骨文是哪个朝代的成就？"
 * @param {number} limit - 生成题目数量限制
 * @returns {QuizQuestion[]} 题目数组
 */
const generateCultureQuestions = (limit = 5) => {
  const questions = [];

  // 正向提问：哪个成就是某朝代的
  dynasties.forEach((dynasty) => {
    if (!dynasty.culturalAchievements || dynasty.culturalAchievements.length === 0) return;
    if (questions.length >= limit) return;

    dynasty.culturalAchievements.forEach((achievement) => {
      if (questions.length >= limit) return;

      const question = `${achievement.name}是哪个朝代的成就？`;
      const correctAnswer = dynasty.name;

      const otherDynasties = dynasties
        .filter(d => d.id !== dynasty.id)
        .map(d => d.name);

      const distractors = generateDistractors(correctAnswer, otherDynasties, 3);
      const options = getRandomItems([...distractors, correctAnswer], 4);

      questions.push({
        id: generateId(),
        type: QUESTION_TYPES.CULTURE,
        question: question,
        options: options.sort(() => Math.random() - 0.5),
        correctAnswer: correctAnswer,
        explanation: generateExplanation(QUESTION_TYPES.CULTURE, dynasty, correctAnswer, achievement),
        difficulty: DIFFICULTY.MEDIUM,
        knowledgePoint: '文化成就',
        dynastyId: dynasty.id,
        dynastyName: dynasty.name
      });
    });
  });

  // 反向提问：某朝代有什么成就
  dynasties.forEach((dynasty) => {
    if (!dynasty.culturalAchievements || dynasty.culturalAchievements.length === 0) return;
    if (questions.length >= limit) return;

    dynasty.culturalAchievements.forEach((achievement) => {
      if (questions.length >= limit) return;

      const question = `${dynasty.name}的文化成就是什么？`;
      const correctAnswer = achievement.name;

      const otherAchievements = dynasties
        .filter(d => d.id !== dynasty.id && d.culturalAchievements)
        .flatMap(d => d.culturalAchievements.map(a => a.name));

      const distractors = generateDistractors(correctAnswer, otherAchievements, 3);
      const options = getRandomItems([...distractors, correctAnswer], 4);

      questions.push({
        id: generateId(),
        type: QUESTION_TYPES.CULTURE,
        question: question,
        options: options.sort(() => Math.random() - 0.5),
        correctAnswer: correctAnswer,
        explanation: generateExplanation(QUESTION_TYPES.CULTURE, dynasty, correctAnswer, achievement),
        difficulty: DIFFICULTY.MEDIUM,
        knowledgePoint: '文化成就',
        dynastyId: dynasty.id,
        dynastyName: dynasty.name
      });
    });
  });

  return questions.slice(0, limit);
};

/**
 * 生成朝代排序题
 * 例："下列朝代按时间顺序排列正确的是？"
 * @param {number} limit - 生成题目数量限制
 * @returns {QuizQuestion[]} 题目数组
 */
const generateSortQuestions = (limit = 3) => {
  const questions = [];

  // 按时期分组朝代
  const periodGroups = {
    ancient: dynasties.filter(d => d.period === 'ancient'),
    classical: dynasties.filter(d => d.period === 'classical'),
    medieval: dynasties.filter(d => d.period === 'medieval'),
    'late-imperial': dynasties.filter(d => d.period === 'late-imperial')
  };

  Object.values(periodGroups).forEach(periodDynasties => {
    if (periodDynasties.length < 4 || questions.length >= limit) return;

    const selected = getRandomItems(periodDynasties, 4);
    const sorted = [...selected].sort((a, b) => a.startYear - b.startYear);

    const correctOrder = sorted.map(d => d.name);
    const correctAnswer = correctOrder.join('→');

    // 生成错误选项
    const wrongOptions = [];
    for (let i = 0; i < 3; i++) {
      const shuffled = [...correctOrder].sort(() => Math.random() - 0.5);
      if (shuffled.join('') !== correctOrder.join('')) {
        wrongOptions.push(shuffled.join('→'));
      }
    }

    const options = getRandomItems([...wrongOptions, correctAnswer], 4);

    questions.push({
      id: generateId(),
      type: QUESTION_TYPES.SORT,
      question: `下列朝代按时间顺序排列正确的是？`,
      options: options.sort(() => Math.random() - 0.5),
      correctAnswer: correctAnswer,
      explanation: generateExplanation(QUESTION_TYPES.SORT, sorted[0], correctAnswer),
      difficulty: DIFFICULTY.HARD,
      knowledgePoint: '朝代顺序',
      dynastyId: sorted[0].id,
      dynastyName: `${sorted[0].name}等`
    });
  });

  return questions.slice(0, limit);
};

/**
 * 生成判断题
 * 例："秦始皇统一了六国，正确吗？"
 * @param {number} limit - 生成题目数量限制
 * @returns {QuizQuestion[]} 题目数组
 */
const generateTrueFalseQuestions = (limit = 5) => {
  const questions = [];

  // 正确陈述
  dynasties.forEach((dynasty) => {
    if (questions.length >= limit) return;

    const statements = [
      {
        statement: `${dynasty.founder}建立了${dynasty.name}`,
        isTrue: true
      },
      {
        statement: `${dynasty.name}存在于${formatYear(dynasty.startYear)}至${formatYear(dynasty.endYear)}`,
        isTrue: true
      }
    ];

    if (dynasty.events && dynasty.events.length > 0) {
      const event = dynasty.events[0];
      statements.push({
        statement: `${event.name}发生在${dynasty.name}时期`,
        isTrue: true
      });
    }

    statements.forEach(stmt => {
      if (questions.length >= limit) return;

      questions.push({
        id: generateId(),
        type: QUESTION_TYPES.TRUE_FALSE,
        question: `${stmt.statement}，正确吗？`,
        options: ['正确', '错误'],
        correctAnswer: stmt.isTrue ? '正确' : '错误',
        explanation: generateExplanation(QUESTION_TYPES.TRUE_FALSE, dynasty, stmt.isTrue ? '正确' : '错误'),
        difficulty: DIFFICULTY.EASY,
        knowledgePoint: '历史事实判断',
        dynastyId: dynasty.id,
        dynastyName: dynasty.name
      });
    });
  });

  // 错误陈述
  dynasties.forEach((dynasty, index) => {
    if (questions.length >= limit) return;

    const wrongFounder = dynasties[(index + 1) % dynasties.length].founder;
    if (wrongFounder !== dynasty.founder) {
      questions.push({
        id: generateId(),
        type: QUESTION_TYPES.TRUE_FALSE,
        question: `${wrongFounder}建立了${dynasty.name}，正确吗？`,
        options: ['正确', '错误'],
        correctAnswer: '错误',
        explanation: generateExplanation(QUESTION_TYPES.TRUE_FALSE, dynasty, '错误'),
        difficulty: DIFFICULTY.MEDIUM,
        knowledgePoint: '开国君主判断',
        dynastyId: dynasty.id,
        dynastyName: dynasty.name
      });
    }
  });

  return questions.slice(0, limit);
};

/**
 * 生成填空题
 * 例："____建立了夏朝"
 * @param {number} limit - 生成题目数量限制
 * @returns {QuizQuestion[]} 题目数组
 */
const generateFillBlankQuestions = (limit = 5) => {
  const questions = [];

  // 从开国君主生成填空题
  dynasties.forEach((dynasty) => {
    if (questions.length >= limit) return;

    const templates = [
      {
        question: `____建立了${dynasty.name}`,
        answer: dynasty.founder,
        context: `${dynasty.founder}是${dynasty.name}的建立者`
      },
      {
        question: `${dynasty.name}建立于____`,
        answer: formatYear(dynasty.startYear),
        context: `${dynasty.name}的建立时间是${formatYear(dynasty.startYear)}`
      }
    ];

    templates.forEach(template => {
      if (questions.length >= limit) return;

      questions.push({
        id: generateId(),
        type: QUESTION_TYPES.FILL_BLANK,
        question: template.question,
        options: [],
        correctAnswer: template.answer,
        explanation: generateExplanation(QUESTION_TYPES.FILL_BLANK, dynasty, template.answer, { context: template.context }),
        difficulty: DIFFICULTY.MEDIUM,
        knowledgePoint: '朝代基础知识',
        dynastyId: dynasty.id,
        dynastyName: dynasty.name
      });
    });
  });

  // 从历史事件生成填空题
  dynasties.forEach((dynasty) => {
    if (!dynasty.events || dynasty.events.length === 0) return;
    if (questions.length >= limit) return;

    dynasty.events.forEach((event) => {
      if (questions.length >= limit) return;

      const question = `${event.name}发生在____时期`;
      const answer = dynasty.name;

      questions.push({
        id: generateId(),
        type: QUESTION_TYPES.FILL_BLANK,
        question: question,
        options: [],
        correctAnswer: answer,
        explanation: generateExplanation(QUESTION_TYPES.FILL_BLANK, dynasty, answer, {
          context: `${event.name}是${dynasty.name}时期的重要历史事件`
        }),
        difficulty: DIFFICULTY.MEDIUM,
        knowledgePoint: '历史事件',
        dynastyId: dynasty.id,
        dynastyName: dynasty.name
      });
    });
  });

  // 从文化成就生成填空题
  dynasties.forEach((dynasty) => {
    if (!dynasty.culturalAchievements || dynasty.culturalAchievements.length === 0) return;
    if (questions.length >= limit) return;

    dynasty.culturalAchievements.forEach((achievement) => {
      if (questions.length >= limit) return;

      const question = `____是${dynasty.name}的文化成就`;
      const answer = achievement.name;

      questions.push({
        id: generateId(),
        type: QUESTION_TYPES.FILL_BLANK,
        question: question,
        options: [],
        correctAnswer: answer,
        explanation: generateExplanation(QUESTION_TYPES.FILL_BLANK, dynasty, answer, {
          context: achievement.description
        }),
        difficulty: DIFFICULTY.HARD,
        knowledgePoint: '文化成就',
        dynastyId: dynasty.id,
        dynastyName: dynasty.name
      });
    });
  });

  return questions.slice(0, limit);
};

/**
 * 从所有题型中随机抽取题目
 * @param {number} count - 抽取题目数量
 * @param {object} options - 选项配置
 * @param {boolean} options.includeChoice - 是否包含时间选择题
 * @param {boolean} options.includeFounder - 是否包含开国君主题
 * @param {boolean} options.includeEvent - 是否包含历史事件题
 * @param {boolean} options.includeCulture - 是否包含文化成就题
 * @param {boolean} options.includeSort - 是否包含排序题
 * @param {boolean} options.includeTrueFalse - 是否包含判断题
 * @param {boolean} options.includeFillBlank - 是否包含填空题
 * @returns {QuizQuestion[]} 随机抽取的题目数组
 */
const generateRandomQuiz = (count = 10, options = {}) => {
  const config = {
    includeChoice: true,
    includeFounder: true,
    includeEvent: true,
    includeCulture: true,
    includeSort: true,
    includeTrueFalse: true,
    includeFillBlank: true,
    ...options
  };

  // 生成所有类型的题目
  const allQuestions = [];

  if (config.includeChoice) {
    allQuestions.push(...generateTimeChoiceQuestions(10));
  }
  if (config.includeFounder) {
    allQuestions.push(...generateFounderQuestions(10));
  }
  if (config.includeEvent) {
    allQuestions.push(...generateEventQuestions(10));
  }
  if (config.includeCulture) {
    allQuestions.push(...generateCultureQuestions(10));
  }
  if (config.includeSort) {
    allQuestions.push(...generateSortQuestions(5));
  }
  if (config.includeTrueFalse) {
    allQuestions.push(...generateTrueFalseQuestions(10));
  }
  if (config.includeFillBlank) {
    allQuestions.push(...generateFillBlankQuestions(10));
  }

  // 随机打乱并抽取指定数量的题目
  const shuffled = allQuestions.sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
};

/**
 * 获取所有可用的题型
 * @returns {string[]} 题型数组
 */
const getAvailableQuestionTypes = () => {
  return Object.values(QUESTION_TYPES);
};

/**
 * 根据题型筛选题目
 * @param {QuizQuestion[]} questions - 题目数组
 * @param {string} type - 题型
 * @returns {QuizQuestion[]} 筛选后的题目数组
 */
const filterQuestionsByType = (questions, type) => {
  return questions.filter(q => q.type === type);
};

/**
 * 根据难度筛选题目
 * @param {QuizQuestion[]} questions - 题目数组
 * @param {string} difficulty - 难度等级
 * @returns {QuizQuestion[]} 筛选后的题目数组
 */
const filterQuestionsByDifficulty = (questions, difficulty) => {
  return questions.filter(q => q.difficulty === difficulty);
};

/**
 * 根据朝代筛选题目
 * @param {QuizQuestion[]} questions - 题目数组
 * @param {string} dynastyId - 朝代 ID
 * @returns {QuizQuestion[]} 筛选后的题目数组
 */
const filterQuestionsByDynasty = (questions, dynastyId) => {
  return questions.filter(q => q.dynastyId === dynastyId);
};

// 导出所有函数和常量
export {
// 主函数
  generateRandomQuiz,
  
  // 各题型生成器
  generateTimeChoiceQuestions,
  generateFounderQuestions,
  generateEventQuestions,
  generateCultureQuestions,
  generateSortQuestions,
  generateTrueFalseQuestions,
  generateFillBlankQuestions,
  
  // 辅助函数
  getAvailableQuestionTypes,
  filterQuestionsByType,
  filterQuestionsByDifficulty,
  filterQuestionsByDynasty,
  
  // 常量
  QUESTION_TYPES,
  DIFFICULTY
};
