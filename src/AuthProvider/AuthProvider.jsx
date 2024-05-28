import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import app from '../AuthConfigFireBase/FirebaseConfig';
import axios from 'axios';
import usePublic from '../hooks/usePublic';

export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {
    const axiosPublic = usePublic()
    const [loding, setLoding] = useState(true)
    const auth = getAuth(app)
    const [user, setUser] = useState(null)
    const googleProvider = new GoogleAuthProvider()
    const userRegister = (email, password) => {
        setLoding(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const userLogin = (email, password) => {
        setLoding(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const googleLoginUser = () => {
        setLoding(true)
        return signInWithPopup(auth, googleProvider)
    }
    const logOut = () => {
        return signOut(auth)
    }
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            
            if (currentUser) {
                const userInfo = { email: currentUser?.email }
                axiosPublic.post('/jwt', userInfo)
                    .then(res => {
                        if (res.data.token) {
                            localStorage.setItem('access-token', res.data.token)
                            setUser(currentUser)
                            setLoding(false)
                        }
                        
                    })
            }
            else {
                localStorage.removeItem('access-token')
                setUser(currentUser)
                setLoding(false)
            }
           

            return () => {
                unSubscribe
            }

        })
    }, [axiosPublic])

    const userInfo = {
        user,
        loding,
        userRegister,
        userLogin,
        googleLoginUser,
        logOut
    }
    return (
        <div>
            <AuthContext.Provider value={userInfo}>
                {
                    children
                }
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;