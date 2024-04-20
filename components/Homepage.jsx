import { fetchVisitor } from '@/server/HandleVisitor'
import React, { useEffect, useState } from 'react'

const Homepage = () => {
  const [visitor,setvisitor]=useState(0)
  useEffect(()=>{
    fetchVisitor().then((call)=>{
      console.log(call.totalvisitor.count)
      setvisitor(call.totalvisitor.count)
    })
  },[])
  return (
    <div  id='Homepage' className='h-screen flex flex-col justify-center items-center'>
      <div className=' absolute top-[20%] right-4'>
        <div>
          visitor-{visitor}
        </div>
      </div>
      <div className=' md:text-7xl text-4xl anime'>SHRUTI TIWARI</div>
      <div className=' text-xs md:text-lg'>
        <span>DESIGN AND DEVELOP</span>
        <span className=' text-yellow-400'> GAMES</span>
      </div>
    </div>
        

        

  )
}

export default Homepage
