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
          Learn. Grow. Succeed ~:)<span className='text-purple-500'>Explore Our Range of Courses :)</span>
            <p className='mt-12'>
            Gain the knowledge and skills you need to succeed in today’s competitive landscape. Our diverse course offerings cover everything from tech to soft skills, providing you with the tools to thrive in your career.
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
