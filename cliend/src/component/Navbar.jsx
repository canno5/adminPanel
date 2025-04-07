import React from 'react'
import { NavLink } from 'react-router-dom'
import { MdDashboard } from "react-icons/md";
import { FaInfoCircle, FaList } from "react-icons/fa";
import { MdProductionQuantityLimits } from "react-icons/md";
import { FaRegNewspaper } from "react-icons/fa";
import { CiSquareInfo } from "react-icons/ci";
import { BiSolidComponent } from "react-icons/bi";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">Canan Developer</NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/admin/dashboard">
                  <MdDashboard fontSize="2rem" />
                  Dashboard</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/admin/orderlist">
                  <FaList fontSize="2rem" />
                  Order List</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/admin/product">
                  <MdProductionQuantityLimits />
                  Procuct</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/admin/newsinfo">
                  <FaRegNewspaper />
                  News Info</NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/admin/catagory">
                  <BiSolidComponent />
                  Catagorey</NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/admin/about">
                  <FaInfoCircle />
                  About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/admin/logout">
                  <CiSquareInfo />
                  Logout</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}
export default Navbar