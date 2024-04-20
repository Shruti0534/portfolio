'use client'
import { fetchVisitor } from '@/server/HandleVisitor'
import React, { useEffect, useState } from 'react'
import Msg from './Msg'

const Homepage = ({visitor}) => {
  return (
    <div  id='Homepage' className='h-screen flex flex-col justify-center items-center'>
      <div className=' absolute top-[20%] right-4'>
        <div>
          visitor-{visitor}
        </div>
      </div>
      <div className=' md:text-7xl text-4xl anime font-bold'>SHRUTI TIWARI</div>
      <div className=' text-xs md:text-lg'>
        <span>DESIGN AND DEVELOP</span>
        <span className=' text-yellow-400'> <Msg /></span>
      </div>
    </div>
        

        

  )
}

export default Homepage
