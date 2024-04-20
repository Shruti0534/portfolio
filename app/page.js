'use client'

import About from "@/components/About";
import Contact from "@/components/Contact";
import Homepage from "@/components/Homepage";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import { fetchVisitor, toIncreaseCount } from "@/server/HandleVisitor";
import Image from "next/image";
import { useEffect } from "react";

export default function Home() {
  useEffect(()=>{
    fetchVisitor().then((visitor)=>{
      const tcount=visitor.totalvisitor.count
      const ncount=tcount+1
      toIncreaseCount(ncount)
    })
  },[])

  return (
  <main style={{fontFamily:'Azonix'}}> 
    <Navbar/>
    <Homepage/>
    <Skills/>
    <Projects/>
    <About/>
    <Contact/>
  



  </main>
  );
}
