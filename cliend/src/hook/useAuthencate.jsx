import {useState } from "react";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";


const defaultForm = {
    email: "",
    passwod: ""
}
export const useAuthencate = async () => {
    const [isLoggedIns, setIsLoggedIns] = useState(false);
    const [user, setUser] = useState(defaultForm);
    try {
        if (!user.email || !user.password) {
            toast.warn('Empty Details!', {
                position: "top-center",
                style: { fontSize: "1.8rem" }
            });
            return;
        }
        const respoce = await fetch("http://localhost:2000/admin/api/data/user", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        });
        const data = await respoce.json();
        console.log(data);

        if (respoce.ok) {
            toast.success('Sucessfully Login!', {
                position: "top-center",
                style: { fontSize: "1.8rem" }
            });
            setIsLoggedIns(true);
            setUser(defaultForm);
            <Navigate to='/admin/dashboard'/>
            // navigate("/admin/dashboard");
        } else {
            toast.error('Not Sucessfully Login!', {
                position: "top-center",
                style: { fontSize: "1.8rem" }
            });
            setIsLoggedIns(false);
            setUser(defaultForm);
        }
        // alert(`${user.email} ${user.password}`)
        // setUser(defaultForm);

        // return isLoggedIns;


    } catch (err) {
        console.log("The Err Admin " + err);
    }
    return isLoggedIns;

}
// useEffect(()=>{
//     useAuthencate();
// },[]);