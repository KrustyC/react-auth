export default function promiseMiddleware() {
  return dispatch => (action) => {
    const { promise, reset, type, ...rest } = action

    const SUCCESS = type
    const REQUEST = `${type}_PENDING`
    const FAILURE = `${type}_FAILURE`
    const RESET = `${type}_RESET`

    if (!promise) {
      return dispatch(action)
    }

    dispatch({ type: REQUEST, ...rest })

    return promise.then((res) => {
      dispatch({ type: SUCCESS, payload: res, ...rest })
      if (reset) {
        setTimeout(() => {
          dispatch({ type: RESET, ...rest })
        }, 2500)
      }
    }).catch((error) => {
      dispatch({ type: FAILURE, payload: error, ...rest })
    })
  }
}
