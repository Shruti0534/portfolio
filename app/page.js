'use client'

import About from "@/components/About";
import Contact from "@/components/Contact";
import Homepage from "@/components/Homepage";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import { fetchVisitor, toIncreaseCount } from "@/server/HandleVisitor";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [visitor,setvisitor]=useState(0)

  useEffect(()=>{
    fetchVisitor().then((visitor)=>{
      const tcount=visitor.totalvisitor.count
      console.log('visitor', tcount)
      const ncount=tcount+1
      toIncreaseCount(ncount)
      setvisitor(tcount)
    })
  },[])

  return (
  <main style={{fontFamily:'Azonix'}}> 
    <Navbar/>
    <Homepage visitor={visitor}/>
    <Skills/>
    <Projects/>
    <About/>
    <Contact/>
  



  </main>
  );
}
