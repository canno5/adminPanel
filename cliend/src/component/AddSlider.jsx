import React, { useState } from 'react'
import Navbar from './Navbar'
import DashHeading from './DashHeading'

const defaultForm = {
    title: "",
    type: "",
    status: "",
    update: "",
    description: "",
    image: "",

}
const AddSlider = () => {
    const [user, setUser] = useState(defaultForm);
    const InputEvent = (e) => {
        const { value, name } = e.target;
        setUser({ ...user, [name]: value });
    }
    const addSlider = async (e) => {
        e.preventDefault();
        if (!user.title || !user.type || !user.status || !user.update || !user.description || !user.image) {
            alert("Empty Input Fields Please fill the data");
            return;
        }
        const res = await fetch("http://localhost:2000/admin/api/data/slider", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(user)
        });
        if (res.ok) {
            const data = await res.json();
            console.log(data)
            alert("Slider is Add Sucessfully");
            setUser(defaultForm);
        } else {
            alert("Slider is not Add Sucessfully");
        }
    }
    return (
        <>
            <div className="main-bars">
                <Navbar />
                <div className="container container-fluid p-0">
                    <div className="producthead">
                        <DashHeading heading="Add Sliders" />
                    </div>
                    <div className="main-table-rows">
                        <div className="form-group">
                            <form method="POST">
                                <div className="mb-4">
                                    <input type="text" className="form-control" id="" aria-describedby="emailHelp" name='title' placeholder='Title' onChange={InputEvent} required autoComplete="off" autoFocus value={user.title} />
                                </div>
                                <div className="mb-4">
                                    <input type="text" className="form-control width-control" id="" placeholder='Type' onChange={InputEvent} name='type' required value={user.type} />
                                </div>
                                <div className="mb-4 form-two-field">
                                    <input type="text" className="form-control price" id="" placeholder='Status' onChange={InputEvent} name='status' required autoComplete="off" value={user.status} />
                                    <input type="text" className="form-control price" id="" placeholder='Image Name' onChange={InputEvent} name='image' required autoComplete="off" value={user.image} />
                                </div>
                                <div className="mb-4">
                                    <input type="date" className="form-control width-control" id="" placeholder='Type' onChange={InputEvent} name='update' required value={user.update} />
                                </div>
                                <div className="mb-4 textBox">
                                    <label for="Description" className="form-label">Description</label>
                                    <textarea className="form-control" id="" rows="4" name='description' required autoComplete="off"
                                        onChange={InputEvent} value={user.description}></textarea>
                                </div>
                                <div className="catagorybtns">
                                    <div className="mb-4 form-check">
                                        <input type="checkbox" className="form-check-input" id="exampleCheck1" onChange={InputEvent} required autoComplete="off" />
                                        <label className="form-check-label" htmlFor="exampleCheck1">Save As Draft</label>
                                    </div>
                                    <button type="submit" className="btn btn-primary" onClick={addSlider}>Add Slider</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default AddSlider