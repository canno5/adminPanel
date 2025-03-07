import React from 'react'
import { Navigate, NavLink, Outlet} from 'react-router-dom';
import { useAuth } from '../hook/useAuth';
// import { useAuthencate } from '../hook/useAuthencate';
// import { useAuth } from '../hook/useAuth';
// import { useAuthencate } from '../hook/useAuthencate';
// import { useAuth } from '../hook/useAuth'



const defaultForm = {
    email: "",
    password: ""
}
const AdminLay =  () => {
    // const [user, setUser] = useState(defaultForm);
    // const navigate = useNavigate();
    // const isLoggedIn  = useAuth();
    // console.log(isLoggedIn);
    // const location = useLocation();
    // let isLoggedIn = await useAuthencate();
    // console.log(isLoggedIn);
    // let isLoggedIn = false;
    // let isLoggedIn = true;
    let {isLoggedIn} = useAuth();
    // console.log("Ther Server Token: "+ isLoggedIn);
    // let {isLoggedIn} = useAuth();
    // console.log(isLoggedIn);
    // console.log("object");
    // let {isLoggedIn} = useAuthencate();
    // console.log(isLoggedIn);
    // const {isLoggedIn} = useAuth();
    // console.log(isLoggedIn);
    // const value = useContext();
    // console.log(value);
    // const [isLoggedIns, setIsLoggedIns] = useState(isLoggedIn);
    // let isLoggedIn = true;
    // const InputEvent = (event) => {
    //     const { value, name } = event.target;
    //     setUser({ ...user, [name]: value })
    // }
    // const dataSub = async () => {
    //     try {
    //         if (!user.email || !user.password) {
    //             alert("Empty Details");
    //             return;
    //         }
    //         const respoce = await fetch("http://localhost:2000/admin/api/data/user", {
    //             method: "POST",
    //             headers: {
    //                 "Content-Type": "application/json"
    //             },
    //             body: JSON.stringify(user)
    //         });
    //         console.log(respoce);
    //         const data = await respoce.json();
    //         console.log(data);

    //         if (respoce.ok) {
    //             alert("Sucessfully Login");
    //             setUser(defaultForm);
    //             navigate("/admin/dashboard");
    //             setIsLoggedIns(true)
    //         } else {
    //             alert("Not Sucessfully Login");

    //         }
    //         // alert(`${user.email} ${user.password}`)
    //         // setUser(defaultForm);



    //     } catch (err) {
    //         console.log("The Err Admin " + err);
    //     }

    // }
    // return isLoggedIn ? <Outlet/> : <Navigate to="/admin"/>
    // return isLoggedIn ? <Outlet/> : <Navigate to="/admin"/>
    // return isLoggedIn ? <Outlet/> : <Navigate to="/"/>
    // return isLoggedIn ? <Outlet/> : <Navigate to="/admin"/>
    // return isLoggedIn ? <Outlet/> : <Navigate to="/"/>
    return isLoggedIn ? <Outlet/> : <Navigate to="/"/>
    // return isLoggedIn ? <Outlet/> : <Navigate to="/"/>
    // return isLoggedIn ? <Outlet/> : <NavLink to="/"/>
    // return isLoggedIn ? <Navigate to="/"/> :  <Outlet/>  
    // return isLoggedIn ? <Navigate to="/"/> :  <Outlet/>  
    // return (
    //     <>

    //         {/* {location.pathname === "/admin" ? : null} */}
                // <div className="admin_dashboard">
                //     <h1>Admin</h1>
                //     <div className="mb-3">
                //         <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                //         <input type="email" className="form-control" id="email" placeholder="name@example.com" name='email' onChange={InputEvent} value={user.email} />
                //     </div>
                //     <div className="mb-3">
                //         <label htmlFor="exampleFormControlInput1" className="form-label">Password</label>
                //         <input type="password" className="form-control" id="
                //     password" name='password' placeholder="Password" onChange={InputEvent} value={user.password} />
                //     </div>
                //     <button className="btn btn-primary" onClick={dataSub}>Login</button>
                // </div> 

    //         <Outlet />

    //     </>
    // )
}

export default AdminLay
