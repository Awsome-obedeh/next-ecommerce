"use client"
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function Search() {
    const router = useRouter()
    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log("submitted")
        const formData = new FormData(e.currentTarget)
        const formName = formData.get("name") as string;
        if (formName) {
            router.push(`/list?name=${formName}`)
        }



    }
    return (
        <form className='flex items-center p-2 justify-between gap-5 bg-gray-100 rounded-md flex-1' onSubmit={handleSearch}>
            <input type="search" name="name" id="" placeholder='Search' className='border-0 flex-1 focus:outline-none bg-transparent' />
            <button className='cursor pointer' type='submit'>
                <Image width={20} height={20} alt='search' src={'/search.png'} />
            </button>
        </form>
    )
}
