import React from "react"

const CartCard = ({ item, changeItems }) => {
  const handleRemove = () => {
    changeItems(item.id)
    fetch(`/cart/remove_from_cart/${item.id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        alert(data.message)
      })
      .catch((err) => console.log(err))
  }
  return (
    <div className="bg-slate-50 w-full p-4 mx-2 shadow flex justify-between my-4">
      <aside className="">
        <img
          src={`/media/${item.product_details.filename}`}
          alt="img not found"
          className="block mx-auto w-32 h-32 object-scale-down"
        />
      </aside>
      <aside className="">
        <h1 className="text-lg">{item.product_details.name}</h1>
        <p className="font-bold">{item.product_details.price}&#8377;</p>
      </aside>
      <aside className="flex flex-col">
        <button className="bg-blue-500 text-white p-2 rounded-md my-2">Place Order</button>
        <button className="bg-red-500 text-white p-2 rounded-md my-2" onClick={handleRemove}>Remove</button>
      </aside>
    </div>
  )
}

export default CartCard
