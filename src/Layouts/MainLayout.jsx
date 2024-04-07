import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}

export default MainLayout
