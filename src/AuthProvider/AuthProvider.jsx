import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {

    const [user,setUser] = useState([]);
    const [loading, setLoading]  = useState(true);

    const signUp = (email,password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email,password);
    }

    const signIn = (email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email,password);
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser);
            setLoading(false);
            // console.log('from authstate: ', currentUser);
        })
        return ()=>{
            return unSubscribe();
        }
    },[])
    
    const info = {signUp, signIn, user ,loading};
    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;