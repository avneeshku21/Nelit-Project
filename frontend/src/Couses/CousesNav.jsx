import React from 'react'
import Navbar from '../components/Navbar'
import AllCourses from '../components/AllCourses'
import Footer from '../components/Footer'


function CousesNav()  {
    // console.log(list);
  return (
    <>
      <Navbar/>
      <div className='min-h-screen'>
      <AllCourses/>
      </div>
      <Footer/>
    </>
  )
}

export default CousesNav
