import axios, { Axios } from 'axios'
import React from 'react'

const axioxPublic = axios.create({
    baseURL:'http://localhost:5000'
})


function useAxiosPublic() {
  return axioxPublic;
}

export default useAxiosPublic
