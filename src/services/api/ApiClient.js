import _ from 'lodash'
import queryString from 'query-string'
import fetch from './fetch'

// import { APP_PREFIX } from '../../config'

const APP_PREFIX = 'react-auth'

export default class ApiClient {
  constructor({ apiUrl = '' } = {}) {
    this.apiUrl = apiUrl
    this.headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
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

  async request ({ path, method, params = {}, body, config = {} }) {
    const addParam = _.keys(params).length > 0 ? '?' : ''
    const url = `${this.apiUrl}/${path}${addParam}${queryString.stringify(params)}`

    // const token = typeof localStorage !== 'undefined' ?
    //   localStorage.getItem(`${APP_PREFIX}-token`)
    //   : null
    const options = {
      method,
      headers: this.headers,
      body: method !== 'GET' ? JSON.stringify(body) : null
    }
  
    return fetch(url, options)
      .then(response => {
        const { status, statusText } = response
        if (status >= 200 && status < 300) {
          return Promise.resolve(response.json())
        }
        return Promise.reject(new Error(statusText))
      })
  }
}
