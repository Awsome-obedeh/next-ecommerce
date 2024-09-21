import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function ProductList() {
  return (

    <div className="mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap md:flex-nowrap">
      <Link href='/test' className='w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]'>

        <div  className='w-full h-80 relative '>

          <Image
            alt=''
            sizes='25vw'
            fill
            className='object-cover absolute rounded-md  z-10 hover:opacity-0 transition-opacity  easy transition-duration-500  '
            src="https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
             />
          <Image
            alt=''
            sizes='25vw'
            fill
            className='object-cover absolute rounded-md '
            src="https://plus.unsplash.com/premium_photo-1675186049222-0b5018db6ce9?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
             />
        </div>

        <div className="flex justify-between">
          <span className='font-medium'>Product name</span>
          <span className='font-semibold'>$49</span>
        </div>

        <div className="text-gray-500 text-sm ">My Description</div>
        <button className='rounded-2xl w-max ring-1 ring-red-500 text-black px-5 py-3 hover:text-black hover:bg-red-500 hover:text-white'>Add to cart</button>
      </Link>

      <Link href='/test' className='w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]'>

        <div  className='w-full h-80 relative '>

          <Image
            alt=''
            sizes='25vw'
            fill
            className='object-cover absolute rounded-md  z-10 hover:opacity-0 transition-opacity  easy transition-duration-500  '
            src="https://images.unsplash.com/photo-1495121605193-b116b5b9c5fe?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Q0xPVEhJTkd8ZW58MHx8MHx8fDA%3D"
             />
          <Image
            alt=''
            sizes='25vw'
            fill
            className='object-cover absolute rounded-md '
            src="https://images.unsplash.com/photo-1509319117193-57bab727e09d?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Q0xPVEhJTkd8ZW58MHx8MHx8fDA%3D"
             />
        </div>

        <div className="flex justify-between">
          <span className='font-medium'>Product name</span>
          <span className='font-semibold'>$49</span>
        </div>

        <div className="text-gray-500 text-sm ">My Description</div>
        <button className='rounded-2xl w-max ring-1 ring-red-500 text-black px-5 py-3 hover:text-black hover:bg-red-500 hover:text-white'>Add to cart</button>
      </Link>

      <Link href='/test' className='w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]'>

        <div  className='w-full h-80 relative '>

          <Image
            alt=''
            sizes='25vw'
            fill
            className='object-cover absolute rounded-md  z-10 hover:opacity-0 transition-opacity  easy transition-duration-500  '
            src="https://plus.unsplash.com/premium_photo-1675186049409-f9f8f60ebb5e?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Q0xPVEhJTkd8ZW58MHx8MHx8fDA%3D"
             />
          <Image
            alt=''
            sizes='25vw'
            fill
            className='object-cover absolute rounded-md '
            src="https://images.unsplash.com/photo-1470309864661-68328b2cd0a5?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Q0xPVEhJTkd8ZW58MHx8MHx8fDA%3D"
             />
        </div>

        <div className="flex justify-between">
          <span className='font-medium'>Product name</span>
          <span className='font-semibold'>$49</span>
        </div>

        <div className="text-gray-500 text-sm ">My Description</div>
        <button className='rounded-2xl w-max ring-1 ring-red-500 text-black px-5 py-3 hover:text-black hover:bg-red-500 hover:text-white'>Add to cart</button>
      </Link>

      <Link href='/test' className='w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]'>

        <div  className='w-full h-80 relative '>

          <Image
            alt=''
            sizes='25vw'
            fill
            className='object-cover absolute rounded-md  z-10 hover:opacity-0 transition-opacity  easy transition-duration-500  '
            src="https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
             />
          <Image
            alt=''
            sizes='25vw'
            fill
            className='object-cover absolute rounded-md '
            src="https://plus.unsplash.com/premium_photo-1675186049222-0b5018db6ce9?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
             />
        </div>

        <div className="flex justify-between">
          <span className='font-medium'>Product name</span>
          <span className='font-semibold'>$49</span>
        </div>

        <div className="text-gray-500 text-sm ">My Description</div>
        <button className='rounded-2xl w-max ring-1 ring-red-500 text-black px-5 py-3 hover:text-black hover:bg-red-500 hover:text-white'>Add to cart</button>
      </Link>
    </div>


  )
}
