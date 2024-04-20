'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import menu from '@/public/menu.svg'
import Image from 'next/image'
const tag=[

    {   Number:'01',
        Name: 'Home //',
        Link: '#Homepage',
    },
    {   Number:'02',
        Name: 'Skills //',
        Link: '#Skills',
    },
    {   Number:'03',
        Name: 'Projects //',
        Link: '#Projects',
    },
    {   Number:'04',
        Name: 'About //',
        Link: '#About',
    },
    {   Number:'05',
        Name: 'Contact',
        Link: '#Contact',
    },
]

const Navbar = () => {
    const [active, setActive] = useState('Home //')
    const [open, setOpen] = useState(false)
  return (

    <div className='fixed top-0 flex  w-full  px-7 py-5 items-center z-50'>
      <div className=' flex items-end'>
        <span className=' text-2xl'>Shruti</span>
        <span className=' text-purple-500 animation'>_</span>
      </div>
      <div className='md:flex justify-center w-full gap-5 hidden'>
        {tag.map((item)=>(
            <Link key={item.Name} onClick={()=>setActive(item.Name)} href={item.Link}  className={`${active === item.Name ? ' text-white' : 'text-neutral-400 '} hover:text-neutral-500`}>
                <div className=' flex justify-end text-xs'> {item.Number}</div>
                <div>{item.Name}</div>
            </Link>

        ))}
      </div>
      <div className='md:hidden justify-end w-full gap-5 flex'>
        <Image onClick={()=> setOpen(prev=>!prev)} src={menu} alt='menu' className=' w-7 h-7'  />
        {open && <div className=' absolute top-16 right-16 bg-black'>
        {tag.map((item)=>(
            <Link key={item.Name} onClick={()=>{setActive(item.Name);setOpen(false)}} href={item.Link}  className={`${active === item.Name ? ' text-white' : 'text-neutral-400 '} hover:text-neutral-500`}>
                <div>{item.Name}</div>
            </Link>

        ))}
        </div>}
      </div>
    </div>
  )
}

export default Navbar
