import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <div className='py-24  px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 bg-gray-100 text-sm mt-24'>
      {/* top */}
      <div className='flex flex-col gap-8 md:flex-row md:justify-between'>
        {/* left */}
        <div className="w-full md:w-1/2  lg:w-1/4 flex flex-col gap-8">
          <Link href='/' className=''>
            <h2 className="tracking-wide text-2xl"></h2>

          </Link>

          <p className=''>No #1 awsome empire, beside elite avenune</p>

          <span className='font-semibold'>D'elite@gmail.com</span>
          <span className='font-semibold'>+234 7010471769</span>

          <div className="flex gap-6">
            <Image src="/facebook.png" alt="socials" width={16} height={16} />
            <Image src="/instagram.png" alt="socials" width={16} height={16} />
            <Image src="/youtube.png" alt="socials" width={16} height={16} />
            <Image src="/pinterest.png" alt="socials" width={16} height={16} />
            <Image src="/x.png" alt="socials" width={16} height={16} />
          </div>
        </div>

        {/* center */}
        <div className="hidden lg:flex justify-between w-1/2">
          <div className="flex flex-col justify-between">
            <h1 className='font-medium text-lg'>Company</h1>

            <div className="flex flex-col gap-6">
              <Link href={'/'}>Home</Link>
              <Link href={'/'}>About Us</Link>
              <Link href={'/'}>Careers</Link>
              <Link href={'/'}>Affilations</Link>
              <Link href={'/'}>Blog</Link>
            
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <h1 className='font-medium text-lg'>Shop</h1>

            <div className="flex flex-col gap-6">
              <Link href={'/'}>New Arrivals</Link>
              <Link href={'/'}>Accessories</Link>
              <Link href={'/'}>Men</Link>
              <Link href={'/'}>Women</Link>
              <Link href={'/'}>All Producs</Link>
 
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <h1 className='font-medium text-lg'>Help</h1>

            <div className="flex flex-col gap-6">
              <Link href={'/'}>Customer Service</Link>
              <Link href={'/'}>My Account</Link>
              <Link href={'/'}>Find a store</Link>
              <Link href={'/'}>Legal & Privacy</Link>
              <Link href={'/'}>On Card</Link>
              
            </div>
          </div>
        </div>

        {/* right */}
        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
          <h1 className="font-medium text-lg">SUSCRIBE</h1>

          <p>Be the first to get the latest news about trends, promotions and much more</p>

          <div className='flex'>
            <input type="text" className="w-3/4 p-4" placeholder='Email Adress' />
            <button className="w-1/4 bg-red-700 text-white ">JOIN</button>
          </div>
          <span className="font-semibold">Secure payments</span>
          <div className='flex justify-between'>
            <Image className="" src="/discover.png" alt="socials" width={40} height={40} />
            <Image className="" src="/skrill.png" alt="socials" width={40} height={40} />
            <Image className="" src="/paypal.png" alt="socials" width={40} height={40} />
            <Image className="" src="/mastercard.png" alt="socials" width={40} height={40} />
            <Image className="" src="/visa.png" alt="socials" width={40} height={40} />
          </div>

        </div>
      </div>

      {/* bottom */}
      <div className='flex flex-col md:flex-row items-center justify-between gap-8 mt-16'>
        <div className=''> @ 2024 Awsome Shop</div>
        <div className='flex flex-col gap-8 md:flex-row'> 
          <div className="">
            <span className="text-gary-500 mr-4">Language</span>

            <span className='font-medium'>United States | English</span>
          </div>
          <div className="">
            <span className="text-gary-500 mr-4">Currency</span>

            <span className='font-medium'>$ USD</span>
          </div>

        </div>
      </div>

    </div>


  )
}
