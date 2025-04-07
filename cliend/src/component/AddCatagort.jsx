import React, { useState } from 'react'
import Navbar from './Navbar'
import DashHeading from './DashHeading'

const defaultForm = {
    name: "",
    priority: "",
    color: "",
    type: "",
    icon: "",
    update: "",
    description: "",

}
const AddCatagory = () => {
    const [user, setUser] = useState(defaultForm);
    const InputEvent = (e) => {
        const { value, name } = e.target;
        setUser({ ...user, [name]: value });
    }
    const dataget = async (e) => {
        e.preventDefault();
        if (!user.name || !user.priority || !user.color || !user.type || !user.update) {
            alert("Empty Detalis");
            return;
        }
        const res = await fetch("http://localhost:2000/admin/api/data/catagory",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(user)
            }
        );
        if (res.ok) {
            setUser(defaultForm);
            alert("Data Add Sucessfully");
        } else {
            alert("Data Not Add Sucessfully")

        }
    }

    return (
        <>
            <div className="main-bars">
                <Navbar />
                <div className="container container-fluid p-0">
                    <div className="producthead">
                        <DashHeading heading="Add Catagorys" />
                    </div>
                    <div className="main-table-rows">
                        <div className="form-group">
                            <form method="POST" onSubmit={dataget}>
                                <div className="mb-4">
                                    <input type="text" className="form-control" id="" aria-describedby="emailHelp" name='name' placeholder='Catagory Name' onChange={InputEvent} required autoComplete="off" autoFocus value={user.name} />
                                </div>
                                <div className="mb-4 form-two-field">
                                    <input type="text" className="form-control price" id="" placeholder='Priority *' onChange={InputEvent} name='priority' required autoComplete="off" value={user.priority} />
                                    <label htmlFor="Color" className='fs-2 px-4'>Color:</label>
                                    <input type="color" className="py-2" onChange={InputEvent} name='color' required value={user.color} autoComplete="off" />
                                </div>
                                <div className="mb-4">
                                    <input type="text" className="form-control width-control price" id="" placeholder='Type' onChange={InputEvent} name='type' required value={user.type} />
                                </div>

                                <div className="mb-4">
                                    <input type="text" className="form-control width-control" id="" placeholder='Icon' onChange={InputEvent} name='icon' required value={user.icon} />
                                </div>
                                <div className="mb-4">
                                    <input type="date" className="form-control width-control" id="" placeholder='Type' onChange={InputEvent} name='update' required value={user.update} />
                                </div>
                                <div className="mb-4 textBox">
                                    <label for="Description" className="form-label">Description</label>
                                    <textarea className="form-control" id="" rows="4" name='description' required autoComplete="off"
                                        onChange={InputEvent} value={user.description}></textarea>
                                </div>

                                <div className="catagory-divide-two">
                                    <h2>Catagory *</h2>
                                    <div className="row catagory">
                                        <div className="col">
                                            <div className="mb-4 form-check">
                                                <input type="checkbox" className="form-check-input" id="exampleCheck1" onChange={InputEvent} name='catagory' value="Food & Groceries" />
                                                <label className="form-check-label" htmlFor="exampleCheck1">Men's Fashsion</label>
                                            </div>

                                            <div className="mb-4 form-check">
                                                <input type="checkbox" className="form-check-input" id="exampleCheck1" onChange={InputEvent} name='catagory' value="Men br Clothing" />
                                                <label className="form-check-label" htmlFor="exampleCheck1">Woman's Fashsion</label>
                                            </div>
                                            <div className="mb-4 form-check">
                                                <input type="checkbox" className="form-check-input" id="exampleCheck1" onChange={InputEvent} name='catagory' value="Sports & Outdoor" />
                                                <label className="form-check-label" htmlFor="exampleCheck1">Sports & Outdoor</label>
                                            </div>
                                            <div className="mb-4 form-check">
                                                <input type="checkbox" className="form-check-input" id="exampleCheck1" onChange={InputEvent} name='catagory' value="Consumber Electronics" />
                                                <label className="form-check-label" htmlFor="exampleCheck1">Consumber Electronics</label>
                                            </div>

                                        </div>
                                        <div className="col">
                                            <div className="mb-4 form-check">
                                                <input type="checkbox" className="form-check-input" id="" onChange={InputEvent} name='catagory' value="Home & lifestyle" />
                                                <label className="form-check-label" htmlFor="exampleCheck1">Home & lifestyle</label>
                                            </div>

                                            <div className="mb-4 form-check">
                                                <input type="checkbox" className="form-check-input" id="" onChange={InputEvent} name='catagory' value="Woman's Fashsion" />
                                                <label className="form-check-label" htmlFor="exampleCheck1">Mens Shoes</label>
                                            </div>
                                            <div className="mb-4 form-check">
                                                <input type="checkbox" className="form-check-input" id="" onChange={InputEvent} name='catagory' value="Bables and Toy" />
                                                <label className="form-check-label" htmlFor="exampleCheck1">Babys and Toys</label>
                                            </div>
                                            <div className="mb-4 form-check">
                                                <input type="checkbox" className="form-check-input" id="" onChange={InputEvent} name='catagory' value="Healthy and Beauty" />
                                                <label className="form-check-label" htmlFor="exampleCheck1">Healthy and Beauty</label>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div className="catagorybtns">
                                    <div className="mb-4 form-check">
                                        <input type="checkbox" className="form-check-input" id="exampleCheck1" onChange={InputEvent} required autoComplete="off" />
                                        <label className="form-check-label" htmlFor="exampleCheck1">Save As Draft</label>
                                    </div>
                                    <button type="submit" className="btn btn-primary">Add Catagory</button>

                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default AddCatagory;