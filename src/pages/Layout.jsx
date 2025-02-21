import React, { useState, useEffect } from "react"
import { Link, Outlet } from "react-router-dom"
import { BsCart4, BsCart, BsPerson,BsBoxArrowRight } from "react-icons/bs"

const Layout = () => {
  const [isAuth, setIsAuth] = useState(false)

  useEffect(() => {
    if (localStorage.getItem("token") != null) {
      setIsAuth(true)
    }
  }, [])

  const handleLogout = () => {
    localStorage.clear()
    window.location.href = "/"
  }

  return (
    <>
      <nav className="w-10/12 mx-auto my-2">
        <aside className="flex justify-between items-center">
          <section>
            <h1 className="text-2xl font-bold">
              <BsCart4 className="text-green-600 text-2xl float-start mx-2" />
              FreshCart
            </h1>
          </section>
          {isAuth ? (
            <section className="flex">
              <Link to="/cart">
                <BsCart className="text-2xl mx-2" />
              </Link>
              <a onClick={handleLogout}><BsBoxArrowRight className="text-2xl mx-2"/></a>
            </section>
          ) : (
            <section className="flex">
              <Link to="/login">
                <BsPerson className="text-2xl mx-2" />
              </Link>
            </section>
          )}
        </aside>
        <aside className="mt-8 flex items-center">
          <button className="bg-green-600 text-white rounded px-4 py-2">
            All Departments
          </button>
          <Link to="/" className="block mx-2">
            Home
          </Link>
          <Link to="/shop" className="block mx-2">
            Shop
          </Link>
          {isAuth?<Link to="/add-product" className="block mx-2">
            Add Product
          </Link>:null}
          
          <Link to="/about" className="block mx-2">
            About
          </Link>
        </aside>
      </nav>
      <Outlet />
    </>
  )
}

export default Layout
