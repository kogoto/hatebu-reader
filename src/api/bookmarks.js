import querystring from 'querystring'
import { getRssUrl } from '../constants/ApiCategory'

const YQL_URL = "https://query.yahooapis.com/v1/public/yql"

const defaultParams = {
  format: 'json',
  diagnotistics: true
}

export default {
  fetchBookmarks: (type, category) => {
    const sql = `SELECT * FROM rss WHERE url = '${getRssUrl(type, category)}'`
    const data = Object.assign({}, defaultParams, { q: sql })
    const url = `${YQL_URL}?${querystring.stringify(data)}`

    return fetch(url)
      .then((res) => {
        return res.json()
      })
      .then((json) => {
        return json.query.results.item
      })
      .catch((err) => {
        console.log(err)
      })
  }
}
