"use client"
import Image from 'next/image'
import React from 'react'

export default function CartModal() {
  const cartItems = true
  return (
    <div className=' w-max bg-whites shadow-lg absolute right-0 top-14 p-4 z-10'>
      {
        cartItems ? (
          <>

            <h2 className='font-bold text-xl'>Your cart</h2>

            <div className='flex flex-col gap-8'>



              <div className="flex gap-6">
                <Image src="https://images.unsplash.com/file-1707885205802-88dd96a21c72image?w=416&dpr=2&auto=format&fit=crop&q=60" alt="cartImages" width={100} height={40} className='object-cover rounded-md' />
                <div className='flex flex-col justify-between w-full gap-4'>



                  <div className="">
                    <div className='flex items-center justify-between gap-8 font-bold'>
                      <h3>Product name</h3>
                      <p className='bg-gray-50 rounded-sm text-gray-500'>$39</p>
                    </div>

                  </div>

                  <div className="flex text-sm items-center justify-between gap-8">
                    <span className='text-gray-500'>QTY</span>
                    <span className='text-blue-500'>Remove</span>
                  </div>
                </div>

              </div>
              <div className="flex gap-6">
                <Image src="https://images.unsplash.com/file-1707885205802-88dd96a21c72image?w=416&dpr=2&auto=format&fit=crop&q=60" alt="cartImages" width={100} height={40} className='object-cover rounded-md' />
                <div className='flex flex-col justify-between w-full gap-4'>



                  <div className="">
                    <div className='flex items-center justify-between gap-8 font-bold'>
                      <h3>Product name</h3>
                      <p className='bg-gray-50 rounded-sm text-gray-500'>$49</p>
                    </div>

                  </div>

                  <div className="flex text-sm items-center justify-between gap-8">
                    <span className='text-gray-500'>QTY</span>
                    <span className='text-blue-500'>Remove</span>
                  </div>
                </div>

              </div>
              <div className="flex gap-6">
                <Image src="https://images.unsplash.com/file-1707885205802-88dd96a21c72image?w=416&dpr=2&auto=format&fit=crop&q=60" alt="cartImages" width={100} height={40} className='object-cover rounded-md' />
                <div className='flex flex-col justify-between w-full gap-4'>



                  <div className="">
                    <div className='flex items-center justify-between gap-8 font-bold'>
                      <h3>Product name</h3>
                      <p className='bg-gray-50 rounded-sm text-gray-500'>$49</p>
                    </div>

                  </div>

                  <div className="flex text-sm items-center justify-between gap-8">
                    <span className='text-gray-500'>QTY</span>
                    <span className='text-blue-500'>Remove</span>
                  </div>
                </div>

              </div>
            </div>
            <div className='mt-5'>
              <div className="flex items-center justify-between font-semibold">
                <span> SubTotal</span>
                <span> $49</span>
              </div>

{/* description */}
            <p className='text-gray-500 tex-sm my-4'>Lorem <img src="" alt="" /></p>

            <div className="flex justify-between">
              <button className="px-3 py-3 rounded ring-1">View Cart</button>
              <button className="px-3 py-3 rounded  ring-1 text-white bg-black">Check Out</button>
            </div>
            </div>

            
          </>
        ) : <h1>Cart Is Empty</h1>
      }


    </div>
  )
}
