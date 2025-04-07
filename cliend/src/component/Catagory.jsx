import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import DashHeading from './DashHeading'
import { CiMenuKebab, CiSearch } from 'react-icons/ci'
import { NavLink } from 'react-router-dom'
import { MdModeEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { MdDescription } from "react-icons/md";
import Detials from './Detials'

const Catagory = () => {
    const [data, setData] = useState([]);
    const [catagory, setCatagory] = useState([]);
    const getCatagoryData = async () => {
        const res = await fetch("http://localhost:2000/admin/api/data/catagorys", {
            method: "GET",
            headers: { "Content-Type": "application/json" }
        });
        if (res.ok) {
            const data = await res.json();
            setData(data.categories);
        }
    }
    useEffect(() => {
        getCatagoryData();

    }, []);
    const detailShow = (id) => {
        setCatagory(
            data.filter((val)=>{
                return val._id === id ;
            })
        );
    }
    const detailShowoff = () => {
        setCatagory(
            data.filter((val)=>{
                return null
            })
        );
    }
    const deleteCatagory = async (id) => {
        const res = await fetch(`http://localhost:2000/admin/api/data/catagory/delete/${id}`, {
            method: "DELETE"
        });
        if (res.ok) {
            getCatagoryData();
            alert("Delete Sucessfully");
        }
    }
    return (
        <>
            <div className="main-bars">
                <Navbar />
                <div className="container container-fluid p-0">
                    <div className="producthead">
                        <DashHeading heading="Catagory" />
                        <div className='menubtns'>
                            <CiSearch fontSize="3rem" color='white' />
                            <button>
                                <NavLink to="/admin/addcatagory">Add Catagory</NavLink>
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
                                        <td>Name</td>
                                        <td>Priority</td>
                                        <td>Color</td>
                                        <td>Type</td>
                                        <td>Update</td>
                                        <td>Action</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.map((val, ind) => {
                                        const { _id, no, name, priority, color, type, icon, update, description } = val;
                                        console.log(icon);
                                        return (
                                            <React.Fragment key={ind}> <tr>
                                                <td>{priority}</td>
                                                <td>{name}</td>
                                                <td>{priority}</td>
                                                <td><p style={{ backgroundColor: color }} className='colortext'>{color}</p></td>
                                                <td>
                                                    <p style={{ backgroundColor:"dodgerblue" }} className="colortext">{type}</p>
                                                </td>
                                                <td>{update}</td>
                                                <td>
                                                    <button onClick={()=> detailShow(_id)} className="text-dark">
                                                        <MdDescription fontSize="2.5rem" className="me-2" />
                                                    </button>
                                                    <button onClick={() => deleteCatagory(_id)} className="text-dark">
                                                        <MdDelete fontSize="2.5rem" />
                                                    </button>

                                                    <NavLink to={`/admin/catagory/edit/${_id}`} className="text-dark">
                                                        <MdModeEdit fontSize="2.5rem" className='me-2' />
                                                    </NavLink>
                                                </td>
                                            </tr>
                                                   

                                                 
                                            </React.Fragment>
                                        )
                                    })}
                                    {console.log(catagory)}
                                    {catagory.map((val)=> {
                                        const { _id, name, priority, color, type, icon, update, description } = val;
                                        return <Detials key={_id} icon={icon}  heading="Catagory Detail" closeDetails={detailShowoff} prodname={name} type={type} status={priority} color={color} update={update} breidContent={description} />
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

export default Catagory
