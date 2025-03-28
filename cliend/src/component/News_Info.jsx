import React, { useEffect, useState } from 'react'
import Navbar from './Navbar';
import DashHeading from './DashHeading';
import { CiMenuKebab, CiSearch } from 'react-icons/ci';
import { NavLink } from 'react-router-dom';
import { MdDelete, MdDescription, MdModeEdit } from 'react-icons/md';
import Detials from './Detials';

const News_Info = () => {
    const [data, setData] = useState([]);
    const [slide, setSlider] = useState([]);
    // const [toggleList, setToggleList] = useState(false);





    const getAllSliders = async () => {
        const res = await fetch("http://localhost:2000/admin/api/data/sliders",)
        if (res.ok) {
            const data = await res.json();
            // console.log(data.data[0].update);
            setData(data.data);
            // setSlider(data.data);
        }

    }
    useEffect(() => {
        getAllSliders();

    }, []);


    const detailShow = (id) => {
        // console.log(id);
        // setToggleList(true);
        // document.querySelector(".details-tab").style.zIndex = "1"
        // document.querySelectorAll(".details-tab").forEach((item) => {
        //     item.style.zIndex = "1"
        // });
        // // document.querySelector(".details-tab").classList.add("abc");
        // document.querySelectorAll(".details-tab").forEach((item)=>{
        //     item.classList.add("active");
        // });
        // setSlider(slide.filter((val)=>{
        //     return id  === val._id;
        // }))
        // setSlider(slide.filter((val)=>{
        //     return id  === val._id ? slide : null;
        // }))
        setSlider(data.filter((val) => {
            // return id  === val._id ? slide : null;
            return id === val._id;
        }))

    }

    const detailShowoff = () => {
        setSlider(data.filter((val) => {
            return null;
        }))
        // document.querySelectorAll(".details-tab").forEach((item)=>{
        //     item.classList.remove("active");
        // });
        // setSlider(slide.filter((val)=>{
        //     return [];
        // }))
        // setToggleList(false);
        // document.querySelector(".details-tab").style.zIndex = "-1"

    }


    const deleteSlider = async (id) => {
        const res = await fetch(`http://localhost:2000/admin/api/data/slider/delete/${id}`, {
            method: "DELETE"
        });

        if (res.ok) {
            // const data = await res.json();
            alert("Delete Slider");
            getAllSliders();

        }

    }
    return (
        <>
            <div className="main-bars">
                <Navbar />
                <div className="container container-fluid p-0">
                    <div className="producthead">
                        <DashHeading heading="Sliders" />
                        <div className='menubtns'>
                            <CiSearch fontSize="3rem" color='white' />
                            <button>
                                <NavLink to="/admin/addslider">Add Slder</NavLink>
                            </button>
                            <CiMenuKebab fontSize="3rem" color='white' />
                        </div>

                    </div>
                    <div className="main-table-rows">
                        <div className='table-group'>
                            <table>
                                <thead>
                                    <tr>
                                        <td>No</td>
                                        <td>Title</td>
                                        <td>Type</td>
                                        <td>Status</td>
                                        <td>Update</td>
                                        <td>Action</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.map((val, ind) => {
                                        const { _id, title, type, status, update, description, image } = val;
                                        return (
                                            <React.Fragment key={ind}> <tr>
                                                <td>1</td>
                                                <td>{title}</td>
                                                <td><p style={{ backgroundColor: "dodgerblue" }} className='colortext'>{type}</p></td>
                                                <td><p style={{ backgroundColor: "gold" }} className='colortext'>{status}</p></td>
                                                <td>{update}</td>
                                                <td>
                                                    <button onClick={() => detailShow(_id)} className="text-dark">
                                                        <MdDescription fontSize="2.5rem" className="me-2" />
                                                    </button>

                                                    <button onClick={() => deleteSlider(_id)} className="text-dark">
                                                        <MdDelete fontSize="2.5rem" className='me-2' />
                                                    </button>

                                                    <NavLink to={`/admin/slider/edit/${_id}`} className="text-dark">
                                                        <MdModeEdit fontSize="2.5rem" />
                                                    </NavLink>


                                                </td>
                                            </tr>
                                                {/* {toggleList ? : null} */}
                                                {/* <Detials heading="Slider Detail" closeDetails={detailShowoff} prodname={title} type={type} status={status} update={update} breidContent={description} fileImage={`http://localhost:100/static/product/images/${image}`} /> */}


                                            </React.Fragment>
                                        )
                                    })}
                                    {console.log(slide)}
                                    {slide.map((val) => {
                                        const { _id, title, type, status, update, description, image } = val;
                                        return <Detials key={_id} heading="Slider Detail" closeDetails={detailShowoff} prodname={title} type={type} status={status} update={update} breidContent={description} fileImage={`http://localhost:100/static/product/images/${image}`} />
                                    })}


                                </tbody>
                            </table>






                            {/* {addProduct.map((val) => { */}
                            {/* return <>  */}

                            {/* </>
                            })} */}





                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default News_Info
