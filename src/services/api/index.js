import ApiClient from './ApiClient'

// Components
import AuthAPI from './components/auth'

export default function ({ apiUrl } = {}) {
  if (!apiUrl) {
    throw new Error('[apiUrl] required')
  }

  const api = new ApiClient({ apiUrl })

  return {
    apiClient: api,
    auth: new AuthAPI({ apiClient: api })
  }
}
