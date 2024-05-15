import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react'
import { app } from '../../Firebase/firebase.config';

export const AuthContext = createContext(null);
const auth = getAuth(app)

function AuthProvider({ children }) {
    const [user, setUser] = useState()
    const [loading, setLoading] = useState(true);


    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth,email, password)
    }

    const logOut = () =>{
        setLoading(true);
        return signOut(auth)
    }

    const updateUser =(name,photo)=>{
       return updateProfile(auth.currentUser, {
            displayName: name, 
            photoURL: photo
          })
         
    }

    useEffect(() => {
        const unsubscibe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log("Current User", currentUser);
            setLoading(false);
        });

        return () => {
            return unsubscibe();
        }
    }, [])


    const authInfo = {
        user,
        loading,
        createUser,
         signIn,
          logOut,
          updateUser
    }
    return (

        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}


export default AuthProvider
