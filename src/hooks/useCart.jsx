import { useQueries, useQuery } from '@tanstack/react-query'
import React from 'react'
import useAxiosSecure from './useAxiosSecure'
import useAuth from './useAuth'

function useCart() {
    const axioSecure = useAxiosSecure()
    const {user} = useAuth();
    const  {refetch, data:cart =[]} = useQuery({
        queryKey:['cart', user?.email],
        queryFn: async ()=> {
            const res = await axioSecure.get(`/carts?email=${user.email}`)
            return res.data;
        }
    })
    return [cart,refetch];
}

export default useCart
