import {
    createContext,
    useContext,
    useEffect,
    useState,
} from "react";

import {
    onAuthStateChanged,
} from "firebase/auth";

import { auth } from "../firebase/auth";

import authService from "../services/authService";

const AuthContext = createContext();

export function AuthProvider({

    children,

}) {

    const [user, setUser] = useState(null);

    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const unsubscribe = onAuthStateChanged(

            auth,

            (currentUser) => {

                setUser(currentUser);

                setLoading(false);

            }

        );

        return unsubscribe;

    }, []);

    const value = {

        user,

        loading,

        login: authService.login,

        register: authService.register,

        logout: authService.logout,

        googleLogin: authService.googleLogin,

        resetPassword: authService.resetPassword,

    };

    return (

        <AuthContext.Provider value={value}>

            {children}

        </AuthContext.Provider>

    );

}

export function useAuthContext() {

    return useContext(AuthContext);

}