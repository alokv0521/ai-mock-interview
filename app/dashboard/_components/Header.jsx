"use client"
import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import React, { useEffect } from 'react'

function Header() {
  const path=usePathname();

  useEffect(()=>{
      console.log(path)
  }, [])

  return (
    <div className='flex p-4 items-center justify-between bg-secondary shadow-sm'>
      <Image src={'/logo.svg'} height={250} width ={200} alt ='log0'/>
      <ul className=' hidden md:flex gap-10'>
        <li className={`hover:text-primary hover:font-bold transition-all cursor-pointer
        ${path=='/dashboard' && 'text-pri font-bold'}
        `}
        >Dashboard</li>
        <li className={`hover:text-primary hover:font-bold transition-all cursor-pointer
        ${path=='/dashboard/questions' && 'text-pri font-bold'}
        `}
        >Question</li>
        <li className={`hover:text-primary hover:font-bold transition-all cursor-pointer
        ${path=='/dashboard/upgrade' && 'text-pri font-bold'}
        `}
        >Upgrade</li>
        <li className={`hover:text-primary hover:font-bold transition-all cursor-pointer
        ${path=='/dashboard/working' && 'text-pri font-bold'}
        `}
        >How it works?</li>
      </ul>
      <UserButton/>
    
    </div>
    
  )
}

export default Header