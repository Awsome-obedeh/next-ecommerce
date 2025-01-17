import Filter from '@/components/Filter'
import ProductList from '@/components/ProductList'
import Image from 'next/image'
import React from 'react'

export default function ListPage() {
  return (
    <div className='px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 '>
      <div className="bg-pink-50 p-4 flex justify-between h-64">
        <div className="w-2/3 flex flex-col items-center justify-center gap-8">
          <h1 className='text-4xl font-semibold leading-[48px] text-gary-700'>Grab up to 50% off on
            <br></br> Selected Products</h1>
          <button className="bg-red-500 text-white w-max px-5 py-3 text-sm rounded-3xl">Buy Now</button>
        </div>
        <div className="relative w-1/3">
          <Image src="/woman.png" fill className='object-contain' alt="campaign" />
        </div>
      </div>
      {/* FILTER */}

      <Filter/>

      <h1 className='mt-12 text-xl font-semibold'>Shoes for you</h1>
      <ProductList/>
    </div>
  )
}
