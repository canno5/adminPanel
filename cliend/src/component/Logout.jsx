import React, { useEffect } from 'react'
import { useAuth } from '../hook/useAuth'
import { NavLink } from 'react-router-dom';
export const Logout = () => {
    const {UserLogout} = useAuth();
    useEffect(()=>{
        UserLogout();
    },UserLogout);
    return <NavLink to='/' />
}