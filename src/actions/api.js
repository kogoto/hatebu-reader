import { createAction } from 'redux-actions'
import querystring from 'querystring'
import { getRssUrl } from '../constants/ApiCategory'
import * as types from '../constants/ActionTypes'

const YQL_URL = "https://query.yahooapis.com/v1/public/yql"

const defaultParams = {
  format: 'json',
  diagnotistics: true
}

const fetchRequest = createAction(types.FETCH_REQUEST)
const fetchSuccess = createAction(types.FETCH_SUCCESS)
const fetchFailure = createAction(types.FETCH_FAILURE)

export const fetchBookmarks = (params) => {
  return (dispatch) => {
    dispatch(fetchRequest(params))

    const { type, category } = params

    const sql = `SELECT * FROM rss WHERE url = '${getRssUrl(type, category)}'`
    const data = Object.assign({}, defaultParams, { q: sql })
    const url = `${YQL_URL}?${querystring.stringify(data)}`

    return fetch(url)
      .then(res => res.json())
      .then((json) => dispatch(
        fetchSuccess({ type: type, category: category, query: json.query }))
       )
      .catch((err) => dispatch(fetchFailure(err)))
  }
}
