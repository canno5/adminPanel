import React, { useContext, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuth } from '../hook/useAuth';
const defaultForm = {
    email: "",
    password: ""
}
const Login = () => {
    const [user, setUser] = useState(defaultForm);
    const navigate = useNavigate();
    const {storageTokenInLS } = useAuth();
    const InputEvent = (event) => {
        const { value, name } = event.target;
        setUser({ ...user, [name]: value })
    }
    const dataSub = async () => {
        try {
            if (!user.email || !user.password) {
                toast.warn('Empty Details!', {
                    position: "top-center",
                    style: { fontSize: "1.8rem" }
                });
                return;
            }
            const respoce = await fetch("http://localhost:2000/admin/api/data/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(user)
            });
            if (respoce.ok) {
                const data = await respoce.json();
                console.log(data);
                storageTokenInLS(data.userToken);
    
                toast.success('Sucessfully Login!', {
                    position: "top-center",
                    style: { fontSize: "1.8rem" }
                });
                setUser(defaultForm);
                navigate("/admin/dashboard");
            } else {
                toast.error('Invalid Credentails', {
                    position: "top-center",
                    style: { fontSize: "1.8rem" }
                });
                setUser(defaultForm);
            }
        } catch (err) {
            console.log("The Err Admin FrontEnd " + err);
        }
    }
    return (
        <>
            <div className="admin_dashboard">
                <h1>Admin</h1>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" placeholder="name@example.com" name='email' onChange={InputEvent} value={user.email} autoComplete="off" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="
                    password" name='password' placeholder="Password" onChange={InputEvent} value={user.password} autoComplete="off" />
                </div>
                <button className="btn btn-success" onClick={dataSub}>Login</button>
            </div>
            <ToastContainer />
        </>
    )
}
export default Login