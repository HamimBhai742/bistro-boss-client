import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import app from '../AuthConfigFireBase/FirebaseConfig';
export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {
    const auth = getAuth(app)
    const [user, setUser] = useState(null)
    const userRegister = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const userLogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut = () => {
        return signOut(auth)
    }
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            // setLoding(false)
            return () => {
                unSubscribe
            }

        })
    }, [])

    const userInfo = {
        user,
        userRegister,
        userLogin,
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