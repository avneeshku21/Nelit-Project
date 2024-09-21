import React from 'react'
import Cards from './Cards'
import list from "../../public/list.json"
import { Link } from 'react-router-dom'
function AllCourses() {
  return (
    <>
      <div className='mx-w-screen-2xl container mz-auto md:px-20 px-4 dark:bg-slate-800 dark:text-white'>
        <div className='mt-28 items-center justify-center text-center'>
          <h1 className='text-2xl font-semibold md:text-4xl'>
            We are Delighted to have you <span className='text-purple-500'>Here! :)</span>
            <p className='mt-12'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae maxime repellat fugit dolorum incidunt deleniti molestias nostrum, alias eligendi, odit architecto laborum quis libero. Aliquid officia ea atque porro nesciunt!
            </p>
           <Link to='/'>
           <button className='bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300 mt-6'>
              Back

            </button>
           </Link>
          </h1>
        </div>

      </div>
      <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
        {
         list.map((item)=>(<Cards key={item.id} item={item}/>

         ))
        }
      </div>
    </>
  )
}

export default AllCourses
