// import React from "react";
import { createContext, useContext, useEffect, useState } from "react";
export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(localStorage.getItem("token"));
    const authorizationToken = token;
    const API = import.meta.env.VITE_APP_URI_API;

    //token generate
    const storageTokenInLS = (serverToken) => {
        setToken(serverToken);
        return localStorage.setItem("token", serverToken);
    }
    let isLoggedIn = token;
    //logout user
    const UserLogout = () => {
        setToken("");
        return localStorage.removeItem("token");

    };
    return (
        <AuthContext.Provider value={{ isLoggedIn, storageTokenInLS, UserLogout, API }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => {
    const authContextValue = useContext(AuthContext);
    if (!authContextValue) {
        throw new Error("useAuth use outside of the Provider");
    }
    return authContextValue;
}

