const BASE_URL = 'http://b.hatena.ne.jp' 

const CATEGORY_NONE = 'none'
const CATEGORY_GENERAL = 'general'
const CATEGORY_SOCIAL = 'social'
const CATEGORY_ECONOMICS = 'economics'
const CATEGORY_LIFE = 'life'
const CATEGORY_KNOWLEDGE = 'knowledge'
const CATEGORY_IT = 'it'
const CATEGORY_FUN = 'fun'
const CATEGORY_ENTERTAINMENT = 'entertainment'
const CATEGORY_GAME = 'game'

export const CATEGORIES = {
  [CATEGORY_NONE]: {
    name: '総合',
    path: 'hotentry.rss',
    default: true
  },
  [CATEGORY_GENERAL]: {
    name: '一般',
    path: 'hotentry/general.rss'
  },
  [CATEGORY_SOCIAL]: {
    name: '世の中',
    path: 'hotentry/social.rss'
  },
  [CATEGORY_ECONOMICS]: {
    name: '政治と経済',
    path: 'hotentry/economics.rss'
  },
  [CATEGORY_LIFE]: {
    name: '暮らし',
    path: 'hotentry/life.rss'
  },
  [CATEGORY_KNOWLEDGE]: {
    name: '学び',
    path: 'hotentry/knowledge.rss'
  },
  [CATEGORY_IT]: {
    name: 'テクノロジー',
    path: 'hotentry/it.rss'
  },
  [CATEGORY_FUN]: {
    name: 'おもしろ',
    path: 'hotentry/fun.rss'
  },
  [CATEGORY_ENTERTAINMENT]: {
    name: 'エンタメ',
    path: 'hotentry/entertainment.rss'
  },
  [CATEGORY_GAME]: {
    name: 'アニメとゲーム',
    path: 'hotentry/game.rss'
  },
}

export const getRssUrl = (category) => {
  let path = ((category in CATEGORIES)
           ? CATEGORIES[category] : CATEGORIES[CATEGORY_NONE]).path
  return `${BASE_URL}/${path}`
}
