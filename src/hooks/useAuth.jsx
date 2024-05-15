import React, { useContext } from 'react'
import AuthProvider from '../provider/AuthProvider/AuthProvider'

function useAuth() {
  const auth = useContext(AuthProvider);
  return auth;
}

export default useAuth
