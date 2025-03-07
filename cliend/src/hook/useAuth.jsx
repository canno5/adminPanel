// import React from "react";
import { createContext, useContext, useEffect, useState } from "react";
export const AuthContext = createContext();
// const storageTokenInLS = (serverToken) => {
//     return localStorage.setItem("token", serverToken);
// }
export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(localStorage.getItem("token"));
    // const [user, setUser] = useState();
    // const [user, setUser] = useState("");
    // const [serviceData, setServiceData] = useState([]);
    // const [isLoading, setIsLoading] = useState(true);
    // const [loading, setLoading] = useState(false);

    // const authorizeToken = `Bearer ${token}`;
    const authorizationToken = token;


    const API = import.meta.env.VITE_APP_URI_API;
    // const API = process.env.VITE_APP_URI_API


    // console.log(`${API}/api/data/service`);





    //token generate
    const storageTokenInLS = (serverToken) => {
        // setToken(token);
        setToken(serverToken); //token add useState variable not use 

        return localStorage.setItem("token", serverToken);
    }
    // let isLoggedIn = !!token;
    let isLoggedIn = token;
    // let isLoggedIn = !token;
    // console.log("isLoggedIn " + isLoggedIn);

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
    // return useContext(AuthContext);
    const authContextValue = useContext(AuthContext);
    if (!authContextValue) {
        throw new Error("useAuth use outside of the Provider");
    }
    return authContextValue;
}

