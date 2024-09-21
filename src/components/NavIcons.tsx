"use client"
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import CartModal from './CartModal'

export default function NavIcons() {
    const router = useRouter()
    const [profileOpen, setProfileOpen] = useState(false)
    const [cartOpen, setCartOpen] = useState(false)

    const handleProfile = () => {
        const isLoggedIn = true
        if (!isLoggedIn) {
            router.push('/login')
        }

        setProfileOpen(prev => !prev)
    }
    return (
        <div className='flex items-center gap-4 relative'>
            <Image onClick={handleProfile} src="/profile.png" width={22} height={22} alt='profile' />
            {profileOpen && (
                <div className='cursor-pointer border p-3 shadow-2xl rounded-md absolute top-14 text-sm  '>
                    <Link href="/profile">Link</Link>
                    <div className='mt-3'>Logout</div>
                </div>
            )}
            <Image src="/notification.png" width={22} height={22} alt='profile' />

            <div className="relative cursor-pointer">
                <Image src="/cart.png" width={22} height={22} alt='profile' onClick={() => setCartOpen(prev => !prev)} />

                {cartOpen && (
                    <CartModal />
                )}
                <div className='absolute w-6 h-6 bg-myRed rounded-[50%] text-center -top-4 -left-4 text-white text-sm justify-center'>1</div>
            </div>



        </div>
    )
}
