import _ from 'lodash'
import queryString from 'query-string'

// import { APP_PREFIX } from '../../config'
// import { API_URL } from '../../config'

const APP_PREFIX = 'react-auth'
const API_URL = 'http://example.com'

export default class ApiClient {
  constructor({ apiUrl = '' } = {}) {
    this.apiUrl = apiUrl
  }

  get(requestPath, payload = {}, params = {}) {
    return this.request({
      path: requestPath,
      method: 'GET',
      body: payload,
      params
    })
  }

  put(requestPath, payload = {}) {
    return this.request({
      path: requestPath,
      method: 'PUT',
      body: payload
    })
  }

  post(requestPath, payload = {}, config = {}) {
    return this.request({
      path: requestPath,
      method: 'POST',
      body: payload,
      config
    })
  }

  patch(requestPath, payload = {}) {
    return this.request({
      path: requestPath,
      method: 'PATCH',
      body: payload
    })
  }

  delete(requestPath, payload = {}, params = {}) {
    return this.request({
      path: requestPath,
      method: 'DELETE',
      body: payload,
      params
    })
  }

  async request ({ requestedPath, method, params = {}, body, config = {} }) {
    const addParam = _.keys(params).length > 0 ? '?' : ''
    const url = `${this.apiUrl}/${requestedPath}${addParam}${queryString.stringify(params)}`

    // const token = typeof localStorage !== 'undefined' ?
    //   localStorage.getItem(`${APP_PREFIX}-token`)
    //   : null

    // eventually add the token
    return fetch(url, method, body)
      .then(res => res)
      .catch((response) => {
        console.log(response)
        Promise.reject(response)
      })
    // .then(
    //   res => this.handleResponse( res, action, next ),
    //   err => this.handleErrors( err, action, next )
    // );
  }

  handleErrors(err, action, next) {
    next({
      type: `${ action.type }_FAILED`,
      payload: err,
      meta: action.meta,
    });

    return Promise.reject(err)
  }

  handleResponse(res, action, next) {
    next({
      type: `${ action.type }_COMPLETED`,
      payload: res,
      meta: action.meta,
    });

    return res
  }
}
