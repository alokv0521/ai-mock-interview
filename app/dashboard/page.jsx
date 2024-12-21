
import React from 'react'
import Header from './_components/Header'
import { UserButton } from '@clerk/nextjs'
import AddNewInterview from './_components/AddNewInterview'

function dashboard() {
  return (
    <div className='p-10'> 
        <h2 className='font-bold text-2xl'>Dashboard</h2>
        <h2 className='text-gray-600'>Create and start you AI mock interview</h2>

        <div className='grid grid-cols-1 md:grid-cols-3 my-5'>
          <AddNewInterview/>
        </div>
    </div>
  )
}

export default dashboard