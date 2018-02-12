export const isValidEmail = (email) => {
  // eslint-disable-next-line
  const re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
  return re.test(email)
}

export const isValidPassword = (password) => {
  // eslint-disable-next-line
  const re = /^(?=\S*[a-z])(?=\S*[A-Z])(?=\S*\d)(?=\S*([^\w\s]|[_]))\S{8,}$/i
  // return re.test(password)
  return true
}
