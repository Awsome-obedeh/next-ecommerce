"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

export default function Menu() {
  const [open, setOpen]=useState(false)
  console.log(open)
  const handleMenu=()=>{
    setOpen(prev=>!prev)
    console.log("hii")
  }

    return (
    <div onClick={()=>setOpen(prev=>!prev)} className=" ">
      <Image  alt='hambuger' width={20} height={20} src='/menu.png' className='cursor-pointer'/>

      {open && (
            <div className='absolute flex flex-col justify-center items-center gap-10 text-white text-2xl   bg-black  top-20 left-0 w-full h-[calc(100vh-80px)] z-10'>
                <Link href={'/'}>Home</Link>
                <Link href={'/'}>Shop</Link>
                <Link href={'/'}>Deals</Link>
                <Link href={'/'}>About</Link>
                <Link href={'/'}>Contact</Link>
                <Link href={'/'}>Logout</Link>
                <Link href={'/'}>Cart (1)</Link>
               
            </div>
        ) }
    </div>
  )
}
