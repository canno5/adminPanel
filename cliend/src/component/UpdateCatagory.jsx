import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import DashHeading from './DashHeading'
import { Navigate, NavLink, useNavigate, useParams } from 'react-router-dom'

const defaultForm = {
    name: "",
    priority: "",
    color: "",
    type: "",
    icon: "",
    update: "",
    description: "",


}

const UpdateCatagory = () => {
    const [user, setUser] = useState(defaultForm);
    const param = useParams();
    const navigate = useNavigate();
    const InputEvent = (e) => {
        const { value, name } = e.target;
        setUser({ ...user, [name]: value });

    }
    const getCatagorys = async () => {
        const res = await fetch(`http://localhost:2000/admin/api/data/catagory/edit/${param.id}`, {
            method: "GET"
        });
        if (res.ok) {
            const data = await res.json();
            setUser(data.data)
        }


    }
    useEffect(() => {
        getCatagorys();
    }, []);

    const updateCatagory = async (e) => {
        e.preventDefault();
        const res = await fetch(`http://localhost:2000/admin/api/data/catagory/edit/${param.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        });

        if (res.ok) {
            alert("update Suncessfully");
            navigate('/admin/catagory');        
       }
    }
    return (
        <>
            <div className="main-bars">
                <Navbar />
                <div className="container p-0">
                    <div className="producthead">
                        <DashHeading heading="Update Catagory" />
                    </div>
                    <div className="main-table-rows">
                        <div className="form-group">
                            <form method="POST">
                                <div className="mb-4">
                                    <input type="text" className="form-control" id="" aria-describedby="emailHelp" name='name' placeholder='Catagory Name' onChange={InputEvent} required autoComplete="off" autoFocus value={user.name} />
                                </div>
                                <div className="mb-4 form-two-field">
                                    <input type="text" className="form-control price" id="" placeholder='Priority *' onChange={InputEvent} name='priority' required autoComplete="off" value={user.priority} />
                                    <label htmlFor="Color" className='fs-2 px-4'>Color:</label>
                                    <input type="color" className="py-2" onChange={InputEvent} name='color' required value={user.color} />
                                </div>
                                <div className="mb-4">
                                    <input type="text" className="form-control width-control" id="" placeholder='Type' onChange={InputEvent} name='type' required value={user.type} />
                                </div>
                                <div className="mb-4">
                                    <input type="date" className="form-control width-control" id="" placeholder='Type' onChange={InputEvent} name='update' required value={user.update} />
                                </div>
                                <div className="mb-4">
                                    <input type="text" className="form-control width-control" id="" placeholder='Icon' onChange={InputEvent} name='icon' required value={user.icon} />
                                </div>
                                <div className="mb-4 textBox">
                                    <label for="Description" className="form-label">Description</label>
                                    <textarea className="form-control" id="" rows="4" name='description'
                                        onChange={InputEvent} value={user.description}></textarea>
                                </div>

                                <div className="catagory-divide-two">
                                    <h2>Catagory *</h2>
                                    <div className="row catagory">
                                        <div className="col">
                                            <div className="mb-4 form-check">
                                                <input type="checkbox" className="form-check-input" id="exampleCheck1" onChange={InputEvent} />
                                                <label className="form-check-label" htmlFor="exampleCheck1">Food & Groceries</label>
                                            </div>

                                            <div className="mb-4 form-check">
                                                <input type="checkbox" className="form-check-input" id="exampleCheck1" onChange={InputEvent} />
                                                <label className="form-check-label" htmlFor="exampleCheck1">Men br Clothing</label>
                                            </div>
                                            <div className="mb-4 form-check">
                                                <input type="checkbox" className="form-check-input" id="exampleCheck1" onChange={InputEvent} />
                                                <label className="form-check-label" htmlFor="exampleCheck1">Sports & Outdoor</label>
                                            </div>
                                            <div className="mb-4 form-check">
                                                <input type="checkbox" className="form-check-input" id="exampleCheck1" onChange={InputEvent} />
                                                <label className="form-check-label" htmlFor="exampleCheck1">Consumber Electronics</label>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="mb-4 form-check">
                                                <input type="checkbox" className="form-check-input" id="" onChange={InputEvent} />
                                                <label className="form-check-label" htmlFor="exampleCheck1">Home & lifestyle</label>
                                            </div>
                                            <div className="mb-4 form-check">
                                                <input type="checkbox" className="form-check-input" id="" onChange={InputEvent} />
                                                <label className="form-check-label" htmlFor="exampleCheck1">Woman's Fashsion</label>
                                            </div>
                                            <div className="mb-4 form-check">
                                                <input type="checkbox" className="form-check-input" id="" onChange={InputEvent} />
                                                <label className="form-check-label" htmlFor="exampleCheck1">Bables and Toy</label>
                                            </div>
                                            <div className="mb-4 form-check">
                                                <input type="checkbox" className="form-check-input" id="" onChange={InputEvent} />
                                                <label className="form-check-label" htmlFor="exampleCheck1">Healthy and Beauty</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="catagorybtns">
                                    <div className="mb-4 form-check">
                                        <input type="checkbox" className="form-check-input" id="exampleCheck1" onChange={InputEvent} />
                                        <label className="form-check-label" htmlFor="exampleCheck1">Save As Draft</label>
                                    </div>
                                    <button type="submit" className="btn btn-primary" onClick={updateCatagory}>Update Catagory</button>

                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default UpdateCatagory