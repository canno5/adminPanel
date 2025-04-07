import React, { useState } from 'react'
import Navbar from './Navbar'
import DashHeading from './DashHeading'

const defaultForm = {
  prodname: "",
  price: "",
  stock: "",
  type: "",
  status: "",
  fileImage: "",
  breid: "",
  breidContent: ""

}
const AddPrduct = () => {
  const [user, setUser] = useState(defaultForm);


  const InputEvent = (e) => {
    const { value, name } = e.target;
    setUser({ ...user, [name]: value });
    // setUser((oldDta)=>{
    //   return {...oldDta, [name]: value}
    // });
  }
  const dataget = async (e) => {
    e.preventDefault();
    if (!user.prodname || !user.price || !user.stock || !user.type || !user.status) {
      alert("Empty Detalis");
      return;
    }
    const res = await fetch("http://localhost:2000/admin/api/data/product",
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
            <DashHeading heading="Add Products" />
          </div>
          <div className="main-table-rows">
            <div className="form-group">
              <form method="POST" onSubmit={dataget}>
                <div className="mb-4">
                  <input type="text" className="form-control" id="" aria-describedby="emailHelp" name='prodname' placeholder='Product Name' onChange={InputEvent} required autoComplete="off" autoFocus value={user.prodname} />
                </div>
                <div className="mb-4 form-two-field">
                  <input type="text" className="form-control price" id="" placeholder='Price *' onChange={InputEvent} name='price' required autoComplete="off" value={user.price} />
                  <input type="text" className="form-control stock" id="" placeholder='Stock *' onChange={InputEvent} name='stock' required value={user.stock} />
                </div>

                <div className="mb-4">
                  <input list="browsers" className="form-control width-control" id="" placeholder='Type' onChange={InputEvent} name='type' required autoComplete="off" value={user.type} />
                  <datalist id="browsers">
                    <option value="Electornic" />
                    <option value="Women" />
                    <option value="Men" />
                    <option value="Toy" />
                    <option value="Fashsion" />
                    <option value="Shoes men's" />
                    <option value="Shoes women's" />
                  </datalist>
                </div>
                <div className="mb-4">
                  <input type="" className="form-control width-control" id="" placeholder='Product Status' onChange={InputEvent} name='status' required value={user.status} />
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
                        <label className="form-check-label" htmlFor="exampleCheck1">Men Clothing & Shoes</label>
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
                <div className="catagory-divide-two">
                  <h2>Image Primary *</h2>
                  <div className="mb-4 catagory">
                    <input type="text" className="form-control width-control" id="" onChange={InputEvent} name="fileImage" value={user.fileImage} />
                  </div>
                </div>
                <div className="catagory-divide-two">
                  <h2>Image Files Optional</h2>
                  <div className="mb-4 catagory">
                    <input type="file" className="form-control width-control" id="" placeholder='Product Status' onChange={InputEvent} />
                  </div>
                  <div className="mb-4 textBox">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Brired Content</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="2"
                      onChange={InputEvent} value={user.breid} name='breid'></textarea>
                  </div>
                  <div className="mb-4 textBox">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Full Content</label>
                    <textarea className="form-control" id="" rows="4" name='breidContent'
                      onChange={InputEvent} value={user.breidContent}></textarea>
                  </div>

                </div>
                <button type="submit" className="btn btn-primary">Add Product</button>
              </form>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}
export default AddPrduct