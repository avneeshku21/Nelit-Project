import React from "react"
import Home from "./Home/Home"
import { Routes,Route } from "react-router-dom"
import CousesNav from "./Couses/CousesNav"
import Singup from "./components/Singup"
function App() {


  return (
    <>
  
      {/* <Home/>
      <AllCourses/> */}
      <Routes>
<Route path="/"element={<Home/>}/>
<Route path="/Allcourses"element={<CousesNav/>}/>
<Route path="/signup"element={<Singup/>}/>


      </Routes>
     
    </>
  )
}

export default App
