import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function CategoriesList() {
    return (
        <div className=' px-4 overflow-x-scroll categories'>
            <div className="flex gap-4 md:gap-8">
                <Link href="/test?cat=test" className='flex-shrink-0 w-full sm:w-1/2 md:w-1/4 xl:w-1/6'>
                    <div className="relative bg-slate-600 h-96 w-full">
                        <Image className='object-cover' alt="" src="https://plus.unsplash.com/premium_photo-1675186049409-f9f8f60ebb5e?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Q0xPVEhJTkd8ZW58MHx8MHx8fDA%3D" fill sizes="20vw" />

                    </div>
                    <h1 className='mt-8 font-light tracking-wide'>Category Name</h1>

                </Link>
                <Link href="/test?cat=test" className='flex-shrink-0 w-full sm:w-1/2 md:w-1/4 xl:w-1/6'>
                    <div className="relative bg-slate-600 h-96 w-full">
                        <Image className='object-cover' alt="" src="https://plus.unsplash.com/premium_photo-1675186049409-f9f8f60ebb5e?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Q0xPVEhJTkd8ZW58MHx8MHx8fDA%3D" fill sizes="20vw" />

                    </div>
                    <h1 className='mt-8 font-light tracking-wide'>Category Name</h1>

                </Link>
                <Link href="/test?cat=test" className='flex-shrink-0 w-full sm:w-1/2 md:w-1/4 xl:w-1/6'>
                    <div className="relative bg-slate-600 h-96 w-full">
                        <Image className='object-cover' alt="" src="https://plus.unsplash.com/premium_photo-1675186049409-f9f8f60ebb5e?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Q0xPVEhJTkd8ZW58MHx8MHx8fDA%3D" fill sizes="20vw" />

                    </div>
                    <h1 className='mt-8 font-light tracking-wide'>Category Name</h1>

                </Link>
                <Link href="/test?cat=test" className='flex-shrink-0 w-full sm:w-1/2 md:w-1/4 xl:w-1/6'>
                    <div className="relative bg-slate-600 h-96 w-full">
                        <Image className='object-cover' alt="" src="https://plus.unsplash.com/premium_photo-1675186049409-f9f8f60ebb5e?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Q0xPVEhJTkd8ZW58MHx8MHx8fDA%3D" fill sizes="20vw" />

                    </div>
                    <h1 className='mt-8 font-light tracking-wide'>Category Name</h1>

                </Link>
                <Link href="/test?cat=test" className='flex-shrink-0 w-full sm:w-1/2 md:w-1/4 xl:w-1/6'>
                    <div className="relative bg-slate-600 h-96 w-full">
                        <Image className='object-cover' alt="" src="https://plus.unsplash.com/premium_photo-1675186049409-f9f8f60ebb5e?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Q0xPVEhJTkd8ZW58MHx8MHx8fDA%3D" fill sizes="20vw" />

                    </div>
                    <h1 className='mt-8 font-light tracking-wide'>Category Name</h1>

                </Link>
                <Link href="/test?cat=test" className='flex-shrink-0 w-full sm:w-1/2 md:w-1/4 xl:w-1/6'>
                    <div className="relative bg-slate-600 h-96 w-full">
                        <Image className='object-cover' alt="" src="https://plus.unsplash.com/premium_photo-1675186049409-f9f8f60ebb5e?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Q0xPVEhJTkd8ZW58MHx8MHx8fDA%3D" fill sizes="20vw" />

                    </div>
                    <h1 className='mt-8 font-light tracking-wide'>Category Name</h1>

                </Link>
                <Link href="/test?cat=test" className='flex-shrink-0 w-full sm:w-1/2 md:w-1/4 xl:w-1/6'>
                    <div className="relative bg-slate-600 h-96 w-full">
                        <Image className='object-cover' alt="" src="https://plus.unsplash.com/premium_photo-1675186049409-f9f8f60ebb5e?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Q0xPVEhJTkd8ZW58MHx8MHx8fDA%3D" fill sizes="20vw" />

                    </div>
                    <h1 className='mt-8 font-light tracking-wide'>Category Name</h1>

                </Link>
            </div>
        </div>
    )
}
