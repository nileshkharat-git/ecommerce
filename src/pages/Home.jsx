import React from 'react'
import banner from '../assets/banner.jpg'

const Home = () => {
  return (
    <main className='w-10/12 mx-auto'>
      <img src={banner} alt="banner" className='w-full' />
    </main>
  )
}

export default Home