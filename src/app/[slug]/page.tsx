import ProductImages from '@/components/ProductImages'
import React from 'react'

export default function SinglePage() {
  return (
    <div className='px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 flex flex-col lg:flex-row gap-16'>
      {/* img */}
      <div className='w-full lg:w-1/2 lg:sticky top-20 h-max'>
        <ProductImages/>
      </div>

      <div className="w-full lg:w-1/2 flex flex-col gap-6">
          <h1 className='text-4xl font-medium'>Product Name</h1>
          <p className='gray-500'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium tenetur quo nostrum eum labore quidem tempora sit, ut inventore laboriosam fugiat alias facere. Quia, quidem neque quisquam fuga qui illo!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis officia tempore ut voluptates doloremque molestias perferendis, blanditiis architecto quis suscipit debitis repellat facilis! Cupiditate ab explicabo repellat eius modi dolore.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id incidunt recusandae maxime minima natus. Amet fugit fuga beatae id modi provident voluptates. Quia eos harum blanditiis maiores sunt deleniti commodi.
          </p>
          <div className='h-[2px] bg-gray-100 '/>
          <div className='flex items-center gap-4'>
            <h3 className='text-xl text-gray-500 line-through'> $59</h3>
            <h3 className='font-mediu'> $49</h3>
            <h3 className=''> $59</h3>
            <h3 className=''> $59</h3>
          </div>

      </div>
      
    </div>
  )
}
