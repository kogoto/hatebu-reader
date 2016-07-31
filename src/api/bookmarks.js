import querystring from 'querystring'

const yqlUrl = "https://query.yahooapis.com/v1/public/yql"

const hatenaUrl = {
  hotentry: 'http://b.hatena.ne.jp/hotentry.rss'
}

const defaultParams = {
  format: 'json',
  diagnotistics: true
}

export default {
  fetchBookmarks: () => {
    const sql = `SELECT * FROM rss WHERE url = '${hatenaUrl.hotentry}'`
    const data = Object.assign({}, defaultParams, { q: sql })
    const url = `${yqlUrl}?${querystring.stringify(data)}`

    return fetch(url)
      .then((res) => {
        return res.json()
      })
      .catch((err) => {
        console.log(err)
      })
  }
}
