import Link from 'next/link'
import React from 'react'
import Menu from './Menu'
import Image from 'next/image'
import Search from './Search'
import NavIcons from './NavIcons'

export default function Navbar() {
  return (
    <>

      <div className='h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 bg-slate-600 md:hidden'>
        <div className="h-full flex items-center justify-between relative">
          {/* mobile */}

          <Link href={"/"}>
            <h2 className='text-2xl tracking-wide'>AWSOME</h2>
          </Link>
          <Menu />

        </div>
      </div>
      {/* bigger screen */}
      <div className=" hidden md:flex items-center justify-between gap-8 h-20 bg-red-500 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <div className='w-1/3 xl:w-1/2'>
          <Link href="/" className='flex g-4 items-center'>
            <Image src="/logo.png" width={20} height={20} alt="logo" />
            <h2>Awsome</h2>
          </Link>
        </div>

        {/* Links */}
        <div className="hidden xl:flex gap-4 items-center text-white">
        <Link href={'/'}>Home</Link>
                <Link href={'/'}>Shop</Link>
                <Link href={'/'}>Deals</Link>
                <Link href={'/'}>About</Link>
                <Link href={'/'}>Contact</Link>
                <Link href={'/'}>Logout</Link>
                <Link href={'/'}>Cart </Link>
        </div>

        <div className='w-2/3 flex items-center gap-8 xl:w-1/2'>
          <Search />
          <NavIcons />
        </div>
      </div>
    </>

  )
}
