"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const skill = [
  {
    LOGO: "/java.svg",
    NAME: " JAVA",
    LINK: " ",
  },
  {
    LOGO: "/css.svg",
    NAME: "CSS",
    LINK: " ",
  },
  {
    LOGO: "/html.svg",
    NAME: "HTML",
    LINK: " ",
  },
];

const Skills = () => {
  return (
    <div id="Skills" className=" h-full ">
      <div className="flex flex-wrap justify-center items-center gap-8">
        {skill.map((item) => (
          <div className="flex  justify-center items-center gap-5">
            <div className="flex justify-center items-center gap-2">
            <Image src={item.LOGO} alt= {item.NAME} width={30} height={30}/>
            <div>{item.NAME}</div>

            </div>
            <Link className=" text-xs hover:text-blue-400 ease-in-out duration-300" href={item.LINK}>View certificate</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
