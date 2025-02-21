import React, { useState } from "react"
import { useNavigate } from "react-router-dom"

const AddProduct = () => {
  const [inputs, setInputs] = useState({})
  const navigate = useNavigate()
  const handleChange = e => {
    if (e.target.files) {
      const name = e.target.name
      setInputs(values => ({ ...values, [name]: e.target.files[0] }))
      return
    }
    const name = e.target.name
    const value = e.target.value
    setInputs(values => ({ ...values, [name]: value }))
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append("product_name", inputs.product_name)
    formData.append("product_price", inputs.product_price)
    formData.append("product_image", inputs.product_image)
    formData.append("product_category", inputs.product_category)
    const options = {
      method: "POST",
      headers: {
        "Custom-Header": "value",
      },
      body: formData,
    }
    await fetch("/product/add_product", options)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        navigate("/shop")
      })
      .catch(err => console.log(err))
    setInputs({})
  }
  return (
    <div className="w-4/12 mx-auto border">
      <h1 className="text-center text-2xl mt-4">Add product</h1>
      <form className="w-6/12 mx-auto " onSubmit={handleSubmit}>
        <div className="p-2">
          <input
            type="text"
            name="product_name"
            placeholder="Product name"
            className="border rounded-md text-md p-2 focus:outline-none "
            value={inputs.product_name || ""}
            onChange={handleChange}
          />
        </div>
        <div className="p-2">
          <input
            type="text"
            name="product_price"
            placeholder="Product price"
            className="border rounded-md text-md p-2 focus:outline-none"
            value={inputs.product_price || ""}
            onChange={handleChange}
          />
        </div>
        <div className="p-2">
          <input
            type="text"
            name="product_category"
            placeholder="Product category"
            className="border rounded-md text-md p-2 focus:outline-none"
            value={inputs.product_category || ""}
            onChange={handleChange}
          />
        </div>
        <div className="p-2">
          <label htmlFor="product_image">Product image</label>
          <input
            type="file"
            name="product_image"
            className="focus:outline-none"
            onChange={handleChange}
          />
        </div>
        <div className="p-2">
          <button className="px-4 py-2 rounded-md bg-blue-500 text-white focus:outline-none">
            Add
          </button>
        </div>
      </form>
    </div>
  )
}

export default AddProduct
