import React, {useState, useEffect} from 'react'
import Card from "./Card"

const CardList = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch("/product/get_products")
        .then(res => res.json())
        .then(data => {
            setProducts(data)
        })
        .catch(err => console.log(err))
    },[])

  return (
    <div className='flex'>
        {products && products.map((product,key) => <Card key={key} product={product} />)}  
    </div>
  )
}

export default CardList