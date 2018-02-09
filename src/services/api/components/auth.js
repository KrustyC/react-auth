import Base from '../Base'

export default class AuthAPI extends Base {
  signup(data, pushInfo) {
    return this.apiClient.post('auth/signup', { ...data, pushInfo })
  }

  confirmEmail(token) {
    return this.apiClient.patch(`auth/confirm-email/${token}`)
  }

  login(data) {
    return this.apiClient.post('login', { ...data })
  }

  recoverAccount(email) {
    return this.apiClient.post('auth/recover-account', email)
  }

  resetPassword(token, newPassword) {
    return this.apiClient.post('auth/reset-password', { token, newPassword })
  }
}
