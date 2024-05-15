import React from 'react'

export const axiosSecure = axios.create({
    baseURL :'http://localhost:5000'
})

function useAxiosSecure() {
  return axiosSecure;
}

export default useAxiosSecure