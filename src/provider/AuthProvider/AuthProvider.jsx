import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react'
import { app } from '../../Firebase/firebase.config';
import { GoogleAuthProvider } from "firebase/auth";
import useAxiosPublic from '../../hooks/useAxiosPublic';


export const AuthContext = createContext(null);
const auth = getAuth(app)

function AuthProvider({ children }) {

    const [user, setUser] = useState()
    const [loading, setLoading] = useState(true);
    const axiosPubilc = useAxiosPublic();

    // Creating Login with google Auth Provider
    const googleProvider = new GoogleAuthProvider();

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    //google SignIN Provider
    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth)
    }

    const updateUser = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo
        })

    }

    useEffect(() => {
        const unsubscibe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log("Current User", currentUser);

            if(currentUser){
                const userInfo = {email:currentUser.email}
                axiosPubilc.post('/jwt/',userInfo)
                .then(res=>{
                    if(res.data.token){
                        localStorage.setItem('access-token',res.data.token)
                    }
                })
            }
            else{
                localStorage.removeItem('access-token');
            }

            setLoading(false);
        });

        return () => {
            return unsubscibe();
        }
    }, [axiosPubilc])


    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut,
        updateUser,
        googleSignIn

    }
    return (

        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}


export default AuthProvider
