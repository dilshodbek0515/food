export const auth = () => {
  return !!localStorage.getItem('user')
}

export const login = (userData: { name: string; surname: string }) => {
  localStorage.setItem('user', JSON.stringify(userData))
}

export const logOut = () => {
  localStorage.removeItem('user')
}
