import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import app from '../Firebase/Firebase.config';

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
    const auth = getAuth(app);
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);

    const CreateNewUserFB = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const UserLoginFB = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
    const UserLogOutFB = () => {
        setLoading(true);
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (CurrentUser) => {
            setUser(CurrentUser);
            setLoading(false);
        });
        return () => unsubscribe;
    })

    const UpdateUserProfileFB = (name, photoURL) => {
        window.location.reload();
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photoURL
        })
    }

    const LoginWithPopup = (provider) => {
        signInWithPopup(auth, provider)
    }

    const AuthInfo = {
        loading
        , user
        , setUser
        , CreateNewUserFB
        , UserLoginFB
        , UserLogOutFB
        , UpdateUserProfileFB
        , LoginWithPopup
    }
    return (
        <div>
            <AuthContext.Provider value={AuthInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};


export default AuthContextProvider;