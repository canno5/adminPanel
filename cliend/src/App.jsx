// import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import AdminLay from './component/Admin'
import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap/dist/js/bootstrap"
import Dashboard from './component/Dashboard'
import Error from './component/Error'
import OrderList from './component/OrderList'
import Product from './component/Product'
import AddPrduct from './component/AddPrduct'
import UpdateProduct from './component/UpdateProduct'
import Greeting from './component/Comp'
import Catagory from './component/Catagory'
import AddCatagory from './component/AddCatagort'
// import Detials from './component/Detials'
import News_Info from './component/News_Info'
import UpdateCatagory from './component/UpdateCatagory'
import AddSlider from './component/AddSlider'
import UpdateSlider from './component/UpdateSlider'
import Login from './component/Login'
import { Logout } from './component/Logout'
import { About } from './component/About'
// import { useAuths } from './hook/useAuths'
function App() {
  // const [count, setCount] = useState(0)


  // console.log("Bear "+ isLoggedIn);
  // const counter = useAuths();
  // console.log(counter);
  const Home = () => {
    return <>
      <h1>Hello Wolrd Admin Panel</h1>
      {/* <p>{count}</p> */}
      {/* <p className='display-2'>{counter}</p> */}
      {/* <button onClick={() => setCount(count + 1)}>Count</button> */}
      <Greeting isLoggedIn={false}/>
    </>
  }
  return (
    <>
      <Routes>
        <Route path='/' Component={Login} />
        {/* <Route path='/' Component={AdminLay} /> */}

        {/* <Route path='/admin' Component={Login} /> */}
        
        {/* <Route path='/admin' Component={Login} /> */}
        {/* <Route path='/login' Component={Login} /> */}
        {/* <Route path='/' Component={Login} /> */}
        {/* <Route path='/admin' Component={Login} /> */}
        {/* <Route path='/' Component={AdminLay} /> */}
        {/* <Route path='/admin' Component={Login} /> */}

        {/* <Route path="/admin" element={<AdminLay/>} */}
        {/* <Route path='/login' Component={Login} /> */}
        {/* <Route path='/login' Component={Login} /> */}
        {/* <Route path="/admin" element={Login}> */}
        {/* <Route path="/admin" element={<Login/>}> */}
        <Route path="/admin" element={<AdminLay/>}>
          <Route path="dashboard" Component={Dashboard} />
          <Route path="orderlist" Component={OrderList} />
          <Route path="product" Component={Product} />
          <Route path="addproduct" Component={AddPrduct} />
          <Route path="addcatagory" Component={AddCatagory} />
          <Route path="addslider" Component={AddSlider} />
          <Route path="product/edit/:id" Component={UpdateProduct} />
          <Route path="catagory/edit/:id" Component={UpdateCatagory} />
          <Route path="slider/edit/:id" Component={UpdateSlider} />
          <Route path="catagory" Component={Catagory} />
          <Route path="newsinfo" Component={News_Info} />
          <Route path="about" Component={About} />
          <Route path="logout" Component={Logout} />
        </Route>
        <Route path='/*' Component={Error} />
      </Routes>
    </>
  )
}
export default App