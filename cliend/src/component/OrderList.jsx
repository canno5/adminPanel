import React from 'react'
import Navbar from './Navbar'
import DashHeading from './DashHeading'
import { CiMenuKebab, CiSearch } from 'react-icons/ci'
import { NavLink } from 'react-router-dom'

const OrderList = () => {
    return (
        <>
            <div className="main-bars">
                <Navbar />
                <div className="container container-fluid p-0">
                    <div className="producthead">
                        <DashHeading heading="Order List" />
                        <div className='menubtns me-5'>
                            <CiSearch fontSize="3rem" color='white'/>
                            <CiMenuKebab fontSize="3rem" color='white' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OrderList
