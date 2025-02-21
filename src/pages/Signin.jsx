import React, {useState} from 'react'
import { Link, useNavigate } from "react-router-dom"

const Signin = () => {
    const [inputs, setInputs] = useState({})
    const navigate = useNavigate()
    const handleChange = e => {
        const name = e.target.name
        const value = e.target.value
        setInputs(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        const options = {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(inputs),
        }
        await fetch("/auth/register",options)
        .then((response)=>response.json())
        .then((data)=>{
            if(data['message'] === "success"){
                navigate("/login")
            }
        })
        .catch((err) => console.log(err))
    }
  return (
    <div className="w-4/12 mx-auto border shadow-sm my-32">
      <h1 className="text-center text-2xl mt-4">Sigin</h1>
      <form className="w-6/12 mx-auto" onSubmit={handleSubmit}>
        <div className="p-2">
          <input
            type="text"
            name="email"
            placeholder="Email"
            className="border rounded-md text-md p-2 focus:outline-none "
            value={inputs.email || ""}
            onChange={handleChange}
          />
        </div>
        <div className="p-2">
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="border rounded-md text-md p-2 focus:outline-none"
            value={inputs.password || ""}
            onChange={handleChange}
          />
        </div>
        <div className="p-2">
          <button className="px-4 py-2 rounded-md bg-blue-500 text-white focus:outline-none">
            Signin
          </button>
          <p className="my-4">Already have an account?<Link to="/login" className="text-blue-800">Login here</Link></p>
        </div>
      </form>
    </div>
  )
}

export default Signin