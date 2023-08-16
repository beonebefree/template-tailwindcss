import React from 'react'
import Header from '../components/header/Header'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/navs/Navbar'
import Footer from '../components/footer/Footer'

const Landing = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Outlet />
      <Footer />    
    </>
  )
}

export default Landing