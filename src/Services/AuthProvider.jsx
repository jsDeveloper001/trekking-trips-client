import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "./Firebase.config";

export const FirebaseAuth = createContext(null)
const AuthProvider = ({ children }) => {
    const [User, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const [update, setUpdate] = useState(true)

    const reUpdate = () =>{
        setUpdate(!update)
    }

    const GoogleProvider = new GoogleAuthProvider()
    const GithubProvider = new GithubAuthProvider()

    const GoogleSignIn = () => {
        return signInWithPopup(auth, GoogleProvider)
    }
    const GithubSignIn = () => {
        return signInWithPopup(auth, GithubProvider)
    }
    const Login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const Register = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const Logout = () => {
        return signOut(auth)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
                setLoading(false)
            }
            else {
                setUser(null)
                setLoading(false)
            }
        })
        return () => {
            unSubscribe()
        }
    }, [update])

    // Firebase Auth Related Information in a Context
    const AuthInfo = {
        GoogleSignIn,
        GithubSignIn,
        Login,
        Register,
        Logout,
        loading,
        User,
        reUpdate
    }

    return (
        <FirebaseAuth.Provider value={AuthInfo}>
            {children}
        </FirebaseAuth.Provider>
    );
};

export default AuthProvider;