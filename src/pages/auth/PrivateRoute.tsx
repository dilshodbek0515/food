import { Navigate } from 'react-router-dom'

const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  const isAdmin = localStorage.getItem('token')

  return isAdmin ? children : <Navigate to='/adminlogin' />
}

export default PrivateRoute
