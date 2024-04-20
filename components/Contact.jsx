"use client";
import Image from "next/image";
import React, { useState } from "react";
import { useToast } from "./ui/use-toast";
import Link from "next/link";
import axios from "axios";
import { toStoreData } from "@/server/HandleContacts";
const contact = [
  {
    Logo: "/facebook.svg",
    Name: "Facebook",
    Link: "",
  },
  {
  Logo: "/gmail.svg",
  Name: "Gmail",
  Link: "",
},
{

Logo: "/instagram.svg",
Name: "Instagram",
Link: "",
},
{

  Logo: "/linkedin.svg",
  Name: "Linkedin",
  Link: "",
  },
];

const Contact = () => {
  const { toast } = useToast();
  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const onSubmit = async (e) => {
    e.preventDefault();
    //used of data stored
    const result = await toStoreData(data)
    console.log(result)
    let status = result.status
    let title = "";
    let color = "";
    status
      ? ((title = "Message sent"), (color = "default"))
      : ((title = "Message not sent"), (color = "destructive"));

    toast({
      title: title,
      variant: color,
    });

    status &&
      setData({
        name: "",
        email: "",
        message: "",
      });
  };

  return (
    <div id="Contact" className=" h-screen md:flex">
      <div className="md:w-[50%] flex items-center justify-center ">
        <div className="flex flex-col items-start gap-5">
        {contact.map((item) => {
          return (
            <Link key={item.Name} href={item.Link} className="flex justify-center items-center gap-5">
              <Image src={item.Logo} alt={item.Name} width={30} height={30} />
              <span>{item.Name}</span>
            </Link>
          );
        })}
        </div>
        
      </div>

      <div className="md:w-[50%] flex justify-center items-center">
        <form action="" className="flex flex-col gap-5">
          <div className=" flex-col flex ">
            <label htmlFor="">NAME</label>
            <input
              type="text"
              className=" bg-transparent border-[1px] px-3"
              placeholder="NAME"
              value={data.name}
              onChange={(e) => setData({ ...data, name: e.target.value })}
            />
          </div>
          <div className=" flex-col flex ">
            <label htmlFor="">EMAIL</label>
            <input
              type="email"
              className=" bg-transparent border-[1px] px-3"
              placeholder="EMAIL"
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
            />
          </div>
          <div className=" flex-col flex ">
            <label htmlFor="">MESSAGE</label>
            <textarea
              rows={5}
              maxLength={5}
              type="text"
              className=" bg-transparent border-[1px] px-3"
              placeholder="MESSAGE"
              value={data.message}
              onChange={(e) => setData({ ...data, message: e.target.value })}
            />
          </div>
          <button
            className=" bg-blue-600 py-2 flex  w-fit px-2 rounded-lg hover:bg-blue-800"
            onClick={(e) => onSubmit(e)}
          >
            Submit{" "}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
