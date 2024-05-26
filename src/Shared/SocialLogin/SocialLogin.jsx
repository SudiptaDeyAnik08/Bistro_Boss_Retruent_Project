import React, { useContext } from 'react'
import { FaGoogle } from "react-icons/fa6";
import useAuth from '../../hooks/useAuth';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import { useNavigate } from 'react-router-dom';
// import useAuth from '../../hooks/useAuth'

function SocialLogin() {
    
    const {googleSignIn } = useAuth()

    const axiosPublic = useAxiosPublic();

    const navigate = useNavigate();

    const handleGoolgeSignIn = ()=>{
        googleSignIn() 
        .then(res=>{
            console.log(res.user);
            const userInfo = {
                email:res.user?.email,
                name:res.user.displayName
            }

            axiosPublic.post('/users',userInfo)
            .then(res=>{
                console.log(res.data);
                navigate('/')
            })
        })
        .catch(e=>{
            console.log(e)
        })
    }

    return (
        <div className='p-2'>
            <button className="btn" onClick={handleGoolgeSignIn}>
            <FaGoogle /> Google

            </button>
        </div>
    )
}

export default SocialLogin
