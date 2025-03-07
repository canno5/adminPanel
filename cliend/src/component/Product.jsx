import React, { useEffect, useState } from 'react'
import DashHeading from './DashHeading'
import Navbar from './Navbar'
import { CiSearch } from "react-icons/ci";
import { CiMenuKebab } from "react-icons/ci";
import { Navigate, NavLink, useNavigate } from 'react-router-dom';
import { RxCross2 } from "react-icons/rx";
// import {imgUrl } from "../../"
// import image from "public/shoponline.webp"
import { MdModeEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { MdDescription } from "react-icons/md";
import Detials from './Detials';
// import img from '../../src/images/shoponline.webp'

const Product = () => {

    const navigate = useNavigate();
    const [addProduct, setaddPorduct] = useState([]);
    const [products, setPorducts] = useState([]);
    // const [searchVal, setSearchVal] = useState('');
    const [searchVal, setSearchVal] = useState('');
    // const [searchVal, setSearchVal] = useState(null);
    // const [products, setPorducts] = useState({
    //     prodname: "",
    //     fileImage: "",
    //     type: "",
    //     status: "",
    //     breid: "",
    //     breidContent: "",
    // });
    // const [products, setPorducts] = useState([]);

    // console.log(products);
    // const [toggleList, setToggleList] = useState(false);

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
        // setPorducts(data);
        // console.log(data);
        // for (const element of data) {
        //     // console.log(element);
        //     setPorducts(element);
        // }
        // console.log(data[7].fileImage);
    }


    useEffect(() => {
        getData();


    }, []);

    const detailData = (id) => {
        // console.log(id);
        // document.querySelector(".details-tab").classList.add("active");

        // setPorducts((oldData)=>{
        //     console.log(oldData);
        // })
        setPorducts(
            // products.filter((val)=>{
            addProduct.filter((val) => {
                if (val._id === id) {
                    return products;
                }
                // return val._id === id;
                // val._id === id ? console.log("True Value") : console.log("False Value");
                // val._id === id ? products : null
                // return val._id === id ? <Detials/> : null 
            })
        )
        // document.querySelectorAll(".details-tab").forEach((item) => {
        //     item.classList.add("active");
        // });
        // setPorducts((oldData) => {
        //     return oldData.filter((val) => {
        //         // console.log(val);
        //         return val.id === id;
        //     })
        // })
        // return addProduct.filter((val)=>{
        // products.filter((val) => {
        //     // console.log(val);
        //     // return val._id === id
        //     // <Detials/>


        // })
        // addProduct.filter((val)=>{
        //     const { _id, prodname, price, stock, type, status, fileImage, breid, breidContent } = val;
        //     return <Detials heading="Details News Info" prodname={prodname} fileImage={`http://localhost:100/static/product/images/${fileImage}`} status={status} breid={breid} type={type} breidContent={breidContent} closeDetails={closeDetails} />
        // });

        // addProduct.map((val) => {
        //     val._id === id ? setToggleList(true) : setToggleList(false);

        // })
        // console.log(id)
        // for (let i = 0; i < addProduct.length; i++) {
        // console.log(i)

        // addProduct.filter((val) => {
        //     // console.log(val);
        //     //  id != null ?  <Detials/> : null
        //     if (val._id === id) {
        //         document.querySelector(".details-tab").classList.add("abc");

        //         // document.querySelector(".details-tab").classList.remove("activeDeta");

        //     } else {
        //         // document.querySelector(".details-tab").classList.add("activeDeta");
        //     }
        // })

        // }
        // <Detials   />
        // return <Greeting isLoggedIn={false}/>
        // document.querySelector(".details-tab").classList.add("activeDeta");
        // return <h1>Canno</h1>
        // console.log(id);
        // console.log(id);
        //     for (let i = 0; i < addProduct.length; i++) {
        //         console.log(addProduct[i]._id);
        //         if (addProduct[i]._id == id){
        //             // return <Detials/>
        //             // console.log("true")
        //             document.querySelector(".details-tab").classList.remove("d-none")

        //             document.querySelector(".details-tab").classList.add("d-block")
        //         }else{
        //             // return <h1>Sorry</h1>
        //             // console.log("false");
        //         }

        //    }
        // return <Detials/>

        // addProduct.map((val)=>{
        //    return <h1>Canno</h1>
        // })


        // return <Detials/>
        // addProduct.filter((val,ind)=>{
        //     return <h1>Canno</h1>

        // })
        // setToggleList(!toggleList);
        // setToggleList(true);
        // document.body.classList.add("background");
        // document.querySelector(".main-bars").classList.add("background");
        //  document.querySelector(".table-group").style.filter = "brightness(50%)"
        //  document.querySelector(".table-group").style.background = "#000"
        //  document.querySelector(".table-group").style.backgroundBlendMode = "darken";

        // document.getElementById().style.filter = brightness("50%");
        // document.body.style.background = ""
        // document.getElementById().style.backgroundBlendMode;
        // document.querySelector(".drop-list").style.display = "block"
    }
    const closeDetails = () => {

        setPorducts(
            // products.filter((val)=>{
            addProduct.filter(() => {
                // addProduct.map(() => { //map ke ander humay kuch na kuch kara hai null nahi return kar sathe hain
                return null;
                // return [];
                // val._id === id ? console.log("True Value") : console.log("False Value");
                // val._id === id ? products : null
                // return val._id === id ? <Detials/> : null 
            })
        )
        // document.querySelector(".details-tab").classList.add("d-none")
        // document.querySelector(".details-tab").classList.remove("activeDeta");
        // document.querySelector(".details-tab").classList.remove("activeDeta");

        // document.querySelectorAll(".details-tab").forEach((item) => {
        //     item.classList.remove("active");
        // });

        // setToggleList(false);
        // document.body.classList.remove("background");
        // document.querySelector(".main-bars").classList.add("background");


    }
    const deleteProduct = async (id) => {
        // console.log(id);
        const res = await fetch(`http://localhost:2000/admin/api/data/product/delete/${id}`, {
            method: "DELETE",

        }
        );
        console.log(res)

        if (res.ok) {
            getData();
            const data = await res.json();

            console.log(data);

        }

    }
    // const searchBoxEvent = (e)=>{
    //     const val = e.target.value;
    // }
    const searchBox = (e) => {
        setSearchVal(e.target.value)
        setaddPorduct(
            // products.filter((val)=>{
            addProduct.filter((val) => {
                // console.log(val.prodname.toUpperCase());
                // if (val.prodname === searchVal) {
                // if (val.prodname.contains(searchVal)) {
                // if (searchVal.toUpperCase().indexOf(val.prodname.toUpperCase()) > -1) {
                // if (searchVal.indexOf(val.prodname) > -1) {
                if (val.prodname.toUpperCase().indexOf(searchVal.toUpperCase()) > -1) {
                    document.getElementById('errsearchmsg').style.display = 'none';

                    return addProduct;
                } else {
                    document.getElementById('errsearchmsg').style.display = 'block';
                }
                // else{
                //     return addProduct
                // }
                // return val._id === id;
                // val._id === id ? console.log("True Value") : console.log("False Value");
                // val._id === id ? products : null
                // return val._id === id ? <Detials/> : null 
            })
        );

        // console.log(addProduct);
        // addProduct.filter((val)=>{
        //     console.log(addProduct);
        //     if (val.prodname == searchVal) {
        //         setPorducts(addProduct)
        //         return addProduct;
        //     }
        //     console.log(addProduct);

        //     // return null;
        //     // return searchVal === val.prodname;

        //     // console.log(val.prodname.contains("Hel"));;
        //     // console.log(val.prodname == "Hel");;


        // })

        // document.getElementById("search").style.display = 'block'

    }
    // const editProduct = () => {
    //     // return Navigate("/admin/product/edit")
    //     navigate('product/edit')
    // }
    const searchBoxHideShow = () => {
        document.getElementById('search').style.display == 'none' ? document.getElementById('search').style.display = 'block' : document.getElementById('search').style.display = 'none'
        // document.getElementById('search').style.display = 'inline-block' 
        // document.getElementById('search').style.visibility = 'visible';

    }
    return (
        <>



            <div className="main-bars">
                <Navbar />
                <div className="container container-fluids p-0">
                    {/* <div className='main-prods'> */}
                    <div className="producthead">
                        <DashHeading heading="Products" />
                        <input type="text" name="search" id="search" placeholder='Search Product' onChange={searchBox} />
                        <div className='menubtns'>

                            {/* <input type="text" name="search" id="search" placeholder='Search Product' onChange={(e) => setSearchVal(e.target.value)} /> */}
                            {/* <input type="text" name="search" id="search" placeholder='Search Product' onChange={searchBox} /> */}


                            {/* <CiSearch fontSize="3rem" color='white' style={{ cursor: "pointer" }} onClick={searchBox} className='searchBox' /> */}
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
                                                {/* <td>{type}</td> */}
                                                <td><p style={{ backgroundColor: "dodgerblue" }} className='colortext w-100'>{type}</p></td>


                                                <td>{price}</td>
                                                <td>10%</td>
                                                <td>{stock}</td>
                                                {/* <td>{status}</td> */}

                                                <td><p style={{ backgroundColor: "dodgerblue" }} className='colortext w-100'>{status}</p></td>

                                                <td>2025 - 3 - 12</td>
                                                <td>
                                                    <li className="nav-item dropdown">

                                                        <NavLink className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                        </NavLink>
                                                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                                            <h2>{prodname}</h2>
                                                            {/* <li onClick={() => detailData(_id)}><a className="dropdown-item"><MdDescription /> Detilas</a></li> */}
                                                            <li onClick={() => detailData(val._id)}><a className="dropdown-item"><MdDescription /> Detilas</a></li>
                                                            <li><NavLink to={`/admin/product/edit/${_id}`} className="dropdown-item"><MdModeEdit /> Edit</NavLink></li>
                                                            <li onClick={() => deleteProduct(_id)}><a className="dropdown-item"><MdDelete /> Delete</a></li>
                                                        </ul>
                                                    </li>
                                                </td>

                                                {/* <td>
                                                <li onClick={toggleLists}><CiMenuKebab />
                                                </li>
                                            </td> */}

                                            </tr>
                                            {/* {toggleList ?: null} */}
                                            {/* <Detials heading="Details News Info" prodname={prodname} fileImage={`http://localhost:100/static/product/images/${fileImage}`} status={status} breid={breid} type={type} breidContent={breidContent} closeDetails={closeDetails} /> */}






                                        </React.Fragment>


                                    })}

                                    {/* {console.log(products)} */}
                                    {products.map((val) => {
                                        const { _id, prodname, price, stock, type, status, fileImage, breid, breidContent } = val;
                                        return <Detials key={_id} heading="Details News Info" prodname={prodname} fileImage={`http://localhost:100/static/product/images/${fileImage}`} status={status} breid={breid} type={type} breidContent={breidContent} closeDetails={closeDetails} />

                                    })}



                                    {/* <Detials heading="Details News Info" prodname={products.prodname} fileImage={`http://localhost:100/static/product/images/${products.fileImage}`} status={products.status} breid={products.breid} type={products.type} breidContent={products.breidContent} closeDetails={closeDetails} /> */}






                                    {/* <tr className="d-flex"> */}



                                    {/* {toggleList ?
                                            <ul
                                                className='drop-list'>
                                                <h4>{prodname}</h4>
                                                <li><NavLink to="/">Details</NavLink></li>
                                                <li><NavLink to="/">Edit</NavLink></li>
                                                <li><NavLink to="/">Delete</NavLink></li>

                                            </ul>
                                            : null} */}

                                    {/* </tr> */}

                                </tbody>
                            </table>




                            {/* {products.map((val) => {
                                return <Detials />
                            })} */}
                            {/* {products.map((val)=>{
                                    const { _id, prodname, price, stock, type, status, fileImage, breid, breidContent } = val;
                                    return <Detials prodname={prodname}/>
                                  })} */}


                            {/* {addProduct.map((val) => { */}
                            {/* return <>  */}

                            {/* </>
                            })} */}





                        </div>

                    </div>
                </div>
                {/* </div> */}
            </div>



        </>
    )
}

export default Product
