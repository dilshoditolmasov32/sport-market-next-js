"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@mui/material";
import "./index.css";
import Login from "../sign-in";
import {
  logo,
  phone_icon,
  email,
  katalog,
  user,
  like,
  savat,
  search,
  menu,
} from "@images";


const Index = () => {
  const [open, setOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    {
      title: "Продукты",
      url: "/product",
    },
  
    {
      title: "Оплата и Доставка",
      url: "/delivery",
    },
    {
      title: "Новости",
      url: "/news",
    },
    {
      title: "О нас",
      url: "/about",
    },
  ];

  const handleOpen = () => {
    setOpen(true);
  };


  const handleClickBasket=()=>{
      console.log("savat")
    
  }
  return (
    <>
      <Login open={open} setOpen={setOpen} />
      <div className="bg-[#1F1D14]">
        <div className="container mx-auto px-4">
          <nav className="flex justify-between items-center py-[10px]">
            <ul className="flex items-center gap-[30px]">
              <li>
                <Link href={"/"}>
                  <Image src={logo} alt="sport-logo" />
                </Link>
              </li>
              <div className="hidden lg:flex items-center gap-[30px]">
                {links?.map((item, index) => (
                  <li
                    key={index}
                    className="font-Fira Sans text-white opacity-80 text-[16px] relative"
                    id="navbar_link"
                  >
                    <Link href={`${item.url}`}>{item.title}</Link>
                  </li>
                ))}
              </div>
            </ul>
            <div className="hidden lg:flex items-center gap-[30px]">
              <p
                className="flex items-center gap-[5px] relative "
                id="navbar_link"
              >
                <Image src={phone_icon} alt="phone icon" />
                <Link
                  href="tel:+998905711442"
                  className="font-Fira Sans text-white text-[16px] "
                >
                  +998 90 571 14 42
                </Link>
              </p>
              <p
                className="flex items-center gap-[5px] relative"
                id="navbar_link"
              >
                <Image src={email} alt="email icon" />
                <Link
                  href="mailto:dilshoditolmasov32@gmail.com"
                  className="font-Fira Sans text-white text-[16px] "
                >
                  info@gmail.com
                </Link>
              </p>
            </div>
            <div className="lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white"
                aria-label="Open Menu"
              >
                <svg
                  className="h-9 w-9"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  ></path>
                </svg>
              </button>
            </div>
          </nav>
          {isOpen && (
            <div className="lg:hidden flex flex-col items-center space-y-4 bg-[#1F1D14] py-4">
              {links?.map((item, index) => (
                <Link
                  key={index}
                  href={`${item.url}`}
                  className="font-Fira Sans text-white text-[18px] my-4"
                >
                  {item.title}
                </Link>
              ))}
              <Link
                href="tel:+998905711442"
                className="font-Fira Sans text-white text-[18px] my-4"
              >
                +998 90 571 14 42
              </Link>
              <Link
                href="mailto:dilshoditolmasov32@gmail.com"
                className="font-Fira Sans my-4 text-white text-[18px] pb-4"
              >
                dilshoditolmasov32@gmail.com
              </Link>
            </div>
          )}
        </div>
      </div>

      <div className="bg-[#fff]">
        <div className="container mx-auto px-4">
          <div className="flex justify-between py-4 gap-5 max-md:flex max-md:flex-wrap">
            <div className="flex items-center gap-[10px] mb-4 md:mb-0  max-md:w-full max-md:flex max-md:justify-between">
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#1F1D14",
                  "&:hover": {
                    backgroundColor: "#1F1D14",
                  },
                  borderRadius: "5px",
                  paddingX: "40px",
                  paddingY: "11px ",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  fontFamily: "Fira Sans",
                  fontSize: "20px",
                }}
              >
                <Image src={katalog} alt="katalog" className="max-xs:hidden" />
                Каталог
              </Button>
              <div className=" search_input flex items-center lg:w-[500px]  bg-[#F2F2F2] px-5 rounded-[5px]  max-md:w-full">
                <input
                  type="text"
                  className="  py-[17px] bg-[#F2F2F2] rounded-[5px] outline-none border-[#F2F2F2] opacity-80 font-Fira Sans text-[16px] flex-grow"
                  placeholder="Поиск"
                />
                <p>
                  <Image
                    src={search}
                    alt="search_icon"
                    className="max-xs:hidden"
                  />
                </p>
              </div>
            </div>
            <div className="flex items-center gap-[10px] max-md:w-full max-md:flex max-md:gap-5 max-xs:flex max-xs:justify-between ">
             
                <button
                  onClick={handleOpen}
                  className="flex items-center py-[13px] px-[13px] bg-[#F2F2F2] hover:bg-[#FBD029] transition-all  duration-300 active:bg-[#FBD029] rounded-[5px]"
                >
                  <Image src={user} alt="user" />
                </button>
              <Link href={"wishlist"}>
                <button className="flex items-center py-[13px] px-[13px] bg-[#F2F2F2] hover:bg-[#FBD029] transition-all  duration-300 active:bg-[#FBD029] rounded-[5px] text-[#1F1D14] ml-[13px] mr-[25px]">
                  <Image src={like} alt="like" />
                </button>
              </Link>
                <button className="flex items-center gap-[5px] text-[20px] font-Fira Sans py-[12px] px-[30px] bg-[#F2F2F2] hover:bg-[#FBD029] transition-all  duration-300 active:bg-[#FBD029] rounded-[5px] text-[#1F1D14]"
                 onClick={handleClickBasket}>
                  <Image src={savat} alt="cart" />
                  Корзина
                </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
