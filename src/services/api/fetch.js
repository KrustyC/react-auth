export default (url, method, body) => {
  const options = {
    method,
    headers: requestHeaders(),
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

const requestHeaders = () => ({
  Accept: 'application/json',
  'Content-Type': 'application/json',
})
