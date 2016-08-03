const BASE_URL = 'http://b.hatena.ne.jp' 

export const TYPE_HOTENTRY = 'hotentry'
export const TYPE_ENTRYLIST = 'entrylist'

export const TYPES = {
  [TYPE_HOTENTRY]:  { name: '人気' },
  [TYPE_ENTRYLIST]: { name: '新着' },
}

export const CATEGORY_ALL = 'all'
export const CATEGORY_GENERAL = 'general'
export const CATEGORY_SOCIAL = 'social'
export const CATEGORY_ECONOMICS = 'economics'
export const CATEGORY_LIFE = 'life'
export const CATEGORY_KNOWLEDGE = 'knowledge'
export const CATEGORY_IT = 'it'
export const CATEGORY_FUN = 'fun'
export const CATEGORY_ENTERTAINMENT = 'entertainment'
export const CATEGORY_GAME = 'game'

export const CATEGORIES = {
  [CATEGORY_ALL]: {
    name: '総合'
  },
  [CATEGORY_GENERAL]: {
    name: '一般'
  },
  [CATEGORY_SOCIAL]: {
    name: '世の中'
  },
  [CATEGORY_ECONOMICS]: {
    name: '政治と経済'
  },
  [CATEGORY_LIFE]: {
    name: '暮らし'
  },
  [CATEGORY_KNOWLEDGE]: {
    name: '学び'
  },
  [CATEGORY_IT]: {
    name: 'テクノロジー'
  },
  [CATEGORY_FUN]: {
    name: 'おもしろ'
  },
  [CATEGORY_ENTERTAINMENT]: {
    name: 'エンタメ'
  },
  [CATEGORY_GAME]: {
    name: 'アニメとゲーム'
  },
}

export const getRssUrl = (type, category) => {
  if ((category in CATEGORIES) && (category !== CATEGORY_ALL)) {
    return `${BASE_URL}/${type}/${category}.rss`
  } else {
    return `${BASE_URL}/${type}.rss`
  }
}
