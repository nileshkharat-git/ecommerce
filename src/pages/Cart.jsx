import React, {useEffect,useState} from 'react'
import CartCard from '../components/CartCard'

const Cart = () => {
    const [cartItems, setCartItems] = useState([])
    
    const changeItems = (id) => {
        setCartItems(cartItems.filter((item) => item.id !== id))
    }

    useEffect(() => {
        fetch(`/cart/get-cart/${localStorage.getItem('userId')}`)
        .then(res => res.json())
        .then(data => {
            setCartItems(data)
        })
        .catch(err => console.log(err))
        
    }, [])
  return (
    <div className='w-10/12 mx-auto'>
        <h1 className='text-2xl'>Cart</h1>
        <section className='w-10/12 mx-auto'>
            {cartItems.map((item, key) => (<CartCard item={item} key={key} changeItems={changeItems} />))}
        </section>
    </div>
  )
}

export default Cart