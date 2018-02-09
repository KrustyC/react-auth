import Base from '../Base'

export default class EventsAPI extends Base {
  signup(data, pushInfo) {
    return this.apiClient.post('auth/signup', { ...data, pushInfo })
  }

  confirmEmail(token) {
    return this.apiClient.patch(`auth/confirm-email/${token}`)
  }

  signin(data, pushInfo) {
    return this.apiClient.post('auth/signin', { ...data, pushInfo })
  }

  recoverAccount(email) {
    return this.apiClient.post('auth/recover-account', email)
  }

  resetPassword(token, newPassword) {
    return this.apiClient.post('auth/reset-password', { token, newPassword })
  }
}
