import  { useContext } from 'react'
import AuthProvider, { AuthContext } from '../provider/AuthProvider/AuthProvider'

function useAuth() {
  const auth = useContext(AuthContext);
  return auth;
}

export default useAuth;
