import React from 'react'

function Cards({item}) {
    
  return (
    <>
      <div className='mt-4 my-3 p-3'>
      <div className="card bg-base-100 w-92 shadow-xl hover:scale-105 duration-200 dark:bg-slate-800 dark:text-white">
  <figure>
    <img
      src={item.image}
      alt="img"/>
  </figure>
  <div className="card-body">
    <h2 className="card-title">
     {item.name}
      <div className="badge bg-purple-600">{item.category}</div>
    </h2>
    <p>{item.title}</p>
    <div className="card-actions flex justify-between">
      <div className="badge badge-outline">${item.price}</div>
      <div className=" cursor-pointer px-3 py-1 rounded-full border-[2px] hover:bg-purple-600 hover:text-black-400 duration-200">Buy Now</div>
    </div>
  </div>
</div>
      </div>
    </>
  )
}

export default Cards
