import React from "react"
import { useNavigate } from "react-router-dom"

const Card = ({ product }) => {
  const navigate = useNavigate()
  const handleAddToCart = () => {
    if(localStorage.getItem("userId") === null){
      navigate("/login")
      return
    }
    const user_id = localStorage.getItem("userId")
    const product_id = product.product_id
    const formData = new FormData()

    formData.append("user_id", user_id)
    formData.append("product_id", product_id)    
    
    fetch(`/cart/add_to_cart`, {
      method: "POST",
      headers: {
        "Custom-Header": "value",
      },
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        alert(data.message)
      })
      .catch((err) => console.log(err))
  }
  return (
    <div className="bg-slate-50 w-1/4 p-4 mx-2 shadow">
      <aside className="w-full">
        <img
          src={`/media/${product.product_image}`}
          alt="img not found"
          className="block mx-auto w-32 h-32 object-scale-down"
        />
      </aside>
      <aside className="">
        <h1 className="text-2xl">{product.product_name}</h1>
        <p className="font-bold">{product.product_price}&#8377;</p>
        <button className="bg-blue-500 text-white p-2 rounded-md" onClick={handleAddToCart}>
          Add to cart
        </button>
      </aside>
    </div>
  )
}

export default Card
