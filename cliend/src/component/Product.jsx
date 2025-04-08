import React, { useEffect, useState } from 'react'
import DashHeading from './DashHeading'
import Navbar from './Navbar'
import { CiSearch } from "react-icons/ci";
import { CiMenuKebab } from "react-icons/ci";
import { NavLink, useNavigate } from 'react-router-dom';
import { MdModeEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { MdDescription } from "react-icons/md";
import Detials from './Detials';
const Product = () => {

    const navigate = useNavigate();
    const [addProduct, setaddPorduct] = useState([]);
    const [products, setPorducts] = useState([]);
    const [searchVal, setSearchVal] = useState('');
    const addProd = () => {
        navigate("/admin/addproduct");
    }
    const getData = async () => {
        const res = await fetch('http://localhost:2000/admin/api/data/products', {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });
        const { data } = await res.json();
        setaddPorduct(data);
    }
    useEffect(() => {
        getData();
    }, []);

    const detailData = (id) => {
        setPorducts(
            addProduct.filter((val) => {
                if (val._id === id) {
                    return products;
                }
            })
        );
    }
    const closeDetails = () => {
        setPorducts(
            addProduct.filter(() => {
                return null;
                // return [];
            })
        );

    }
    const deleteProduct = async (id) => {
        const res = await fetch(`http://localhost:2000/admin/api/data/product/delete/${id}`, {
            method: "DELETE",

        }
        );
        if (res.ok) {
            getData();
        }
    }
    const searchBox = (e) => {
        setSearchVal(e.target.value)
        setaddPorduct(
            addProduct.filter((val) => {
                if (val.prodname.toUpperCase().indexOf(searchVal.toUpperCase()) > -1) {
                    document.getElementById('errsearchmsg').style.display = 'none';
                    return addProduct;
                } else {
                    document.getElementById('errsearchmsg').style.display = 'block';
                }
            })
        );
    }
    const searchBoxHideShow = () => {
        document.getElementById('search').style.display == 'none' ? document.getElementById('search').style.display = 'block' : document.getElementById('search').style.display = 'none'
    }
    return (
        <>
            <div className="main-bars">
                <Navbar />
                <div className="container container-fluids p-0">
                    <div className="producthead">
                        <DashHeading heading="Products" />
                        <input type="text" name="search" id="search" placeholder='Search Product' onChange={searchBox} />
                        <div className='menubtns'>
                            <CiSearch fontSize="3rem" color='white' style={{ cursor: "pointer" }} className='searchBox' onClick={searchBoxHideShow} />
                            <button onClick={addProd}>Add Product</button>
                            <CiMenuKebab fontSize="3rem" color='white' />
                        </div>
                    </div>
                    <div className="filter-container">
                        <div className="filter-items">
                            <div className='items-catagory'>
                                <select name="list-items" id=''>
                                    <option value="men">All Iitem</option>
                                    <option value="men">Men</option>
                                    <option value="women">Women</option>
                                    <option value="sports">sports</option>
                                    <option value="toys">Baby Toys</option>
                                    <option value="electronic">Electronic</option>
                                    <option value="mens-shoes">Men's Shoes</option>
                                    <option value="headphones">HeadPhones</option>
                                    <option value="women-shoes">Women's Shoes</option>
                                </select>

                            </div>
                            <div className='items-box'>
                                <select name="itemsnums" id=''>
                                    <option value="men">20</option>
                                    <option value="men">30</option>
                                    <option value="women">40</option>
                                </select>
                            </div>
                            <div className='old-box'>
                                <select name="olditems" id=''>
                                    <option value="men">Time Old & News</option>
                                    <option value="men">Men</option>
                                    <option value="women">Women</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="main-table-rows">
                        <div className='table-group'>
                            <h1 className='errmsgsea' id='errsearchmsg'>Not Found Result</h1>
                            <table>
                                <thead>
                                    <tr>
                                        <td>No</td>
                                        <td>Name</td>
                                        <td>Type</td>
                                        <td>Price</td>
                                        <td>Disc</td>
                                        <td>Stock</td>
                                        <td>Status</td>
                                        <td>Update</td>
                                        <td>Action</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    {addProduct.map((val, ind) => {
                                        const { _id, prodname, price, stock, type, status, fileImage, breid, breidContent } = val;
                                        return <React.Fragment key={ind}>
                                            <tr>
                                                <td>{addProduct.length}</td>
                                                <td>{prodname}</td>
                                                <td><p style={{ backgroundColor: "dodgerblue" }} className='colortext w-100'>{type}</p></td>
                                                <td>{price}</td>
                                                <td>10%</td>
                                                <td>{stock}</td>
                                                <td><p style={{ backgroundColor: "dodgerblue" }} className='colortext w-100'>{status}</p></td>
                                                <td>2025 - 3 - 12</td>
                                                <td>
                                                    <li className="nav-item dropdown">
                                                        <NavLink className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                        </NavLink>
                                                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                                            <h2>{prodname}</h2>
                                                            <li onClick={() => detailData(val._id)}><a className="dropdown-item"><MdDescription /> Detilas</a></li>
                                                            <li><NavLink to={`/admin/product/edit/${_id}`} className="dropdown-item"><MdModeEdit /> Edit</NavLink></li>
                                                            <li onClick={() => deleteProduct(_id)}><a className="dropdown-item"><MdDelete /> Delete</a></li>
                                                        </ul>
                                                    </li>
                                                </td>
                                            </tr>
                                        </React.Fragment>
                                    })}
                                    {products.map((val) => {
                                        const { _id, prodname, price, stock, type, status, fileImage, breid, breidContent } = val;
                                        return <Detials key={_id} heading="Details News Info" prodname={prodname} fileImage={`http://localhost:100/static/product/images/${fileImage}`} status={status} breid={breid} type={type} breidContent={breidContent} closeDetails={closeDetails} />

                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Product