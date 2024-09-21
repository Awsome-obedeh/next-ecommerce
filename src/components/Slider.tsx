"use client"

import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const slides = [
  {

    id: 1,
    title: "Summer sales coming",
    description: "Sale! upcoming",
    img: "https://images.unsplash.com/file-1707885205802-88dd96a21c72image?w=416&dpr=2&auto=format&fit=crop&q=60",
    bg: "bg-gradient-to-r from-yellow-50 to pink-50"
  },
  {
    id: 2,
    title: "Autumn sales coming",
    description: "Sale! upcoming",
    img: 'https://images.unsplash.com/photo-1721332149069-a470150ef51c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8',
    bg: "bg-gradient-to-r from-yellow-50 to pink-50"
  },
  {

    id: 3,
    title: "Spring sales coming",
    description: "Sale! upcoming",
    img: 'https://images.unsplash.com/photo-1724086575243-6796fc662673?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8',
    bg: "bg-gradient-to-r from-yellow-50 to pink-50"
  },
  {

    id: 4,
    title: "Spring salee coming",
    description: "Sale! upcoming",
    img: 'https://images.unsplash.com/photo-1724086575243-6796fc662673?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8',
    bg: "bg-gradient-to-r from-yellow-50 to pink-50"
  },
]

export default function Slider() {
  const [current, setCurrent] = useState(0)

  // for the slider interval
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
    }, 3000)

    // when using interval in useEffct you cleanup the interval
    return () => clearInterval(interval)
  }, [])
  return (
    <div className='h-[calc(100vh-80px)] overflow-hidden'>
      <div className="w-max h-full flex transition-all ease-in-out duration-1000"
        style={{ transform: `translateX(-${current * 100}vw)` }}>
        {
          slides.map(slide => (
            <div key={slide.id} className={`${slide.bg} w-screen bg-green-500 h-full flex flex-col xl:flex-row`}>
              {/* // text section */}
              <div className=' h-1/2 xl:w-1/2 xl:h-full flex items-center flex-col justify-center text-center gap-8 2xl:gap-12'>
                <h2 className='text-xl lg:text-3xl 2xl:text-5xl'>{slide.description}</h2>
                <h1 className=' text-5xl lg:text-6xl 2xl:text-8xl font-semibold'>{slide.title}</h1>
                <Link href='' className='rounded-md bg-black text-white py-3 px-4 '><button>Shop No</button></Link>
              </div>
              {/* // image section */}
              <div className="h-1/2 xl:w-1/2 relative">
              1sssssssssss
                <Image alt="" src={slide.img} sizes='100%' fill={true} className='object-cover'/>
              </div>
            </div>



          ))
        }
      </div>
      <div className='absolute m-auto left-1/2 flex gap-6'>

        {
          slides.map((slide, index) => (
            <div className={`w-3 h-3 rounded-full ring-1 ring-gray-600 cursor-pointer flex items-center justify-center ${current === index ? "scale-150" : ""}
             `}
              key={slide.id}
              onClick={() => setCurrent(index)}
            >
              {
                current == index && (
                  <div className="h-2 w-2 rounded-full bg-gray-600"></div>
                )
              }
            </div>
          ))
        }
      </div>
    </div>
  )
}
