import React, { useState } from "react";
import "boxicons/css/boxicons.min.css";
import { Link, useLocation } from "react-router-dom";
import Reveal from "react-awesome-reveal";
import { keyframes } from "@emotion/react";
import Menu from "../Components/Menu";
import Footer from "../Components/Footer";
import { RiTimerFlashFill } from "react-icons/ri";
import { FaApple } from "react-icons/fa";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import coaster from "../assets/coaster-logo.png";
import yutong from "../assets/Yutong-Logo.wine.png";
import acgroup from "../assets/ac-group.png";
import { LuArrowDownFromLine } from "react-icons/lu";

function Product() {
  const customAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(80px);
    // filter: blur(5px)
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

  return (
    <div className=" bg-light-body-color min-h-[100vh] mt-16 w-full text-text-dark-color flex flex-col relative overflow-x-clip  ">
      {/* Menu */}
      <Menu />

      {/* Body */}
      <div
        id="Challenges"
        className="h-full scroll-mt-24 max-sm:mt-[50px] w-full flex items-center relative justify-start flex-col"
      >
        {/* <div className="bg-white h-[100vh] w-full flex items-center justify-center flex-col fixed top-0 left-0 z-20">
          <Reveal
            keyframes={customAnimation}
            duration={1000}
            cascade
            damping={0.05}
            // triggerOnce
          >
            <h1 className="text-center max-w-[900px] font-bold text-[70px] max-sm:text-[50px] leading-[80px] max-sm:leading-[55px] tracking-tighter">
              Introducing...
            </h1>
          <button className="text-[35px] p-[15px] text-dark-body-color hover:bg-stone-200 rounded-full absolute bottom-16 left-0 right-0 mx-auto w-fit active:scale-95">
            <LuArrowDownFromLine />
          </button>

          </Reveal>
        </div> */}

        <div className="w-full h-fit px-6 max-w-[1200px] pt-10 z-10 ">
          <div className="bg-project-green min-h-[450px] w-full rounded-3xl flex items-center justify-between py-10 px-12">
            <div className="flex flex-col items-start justify-start gap-3 max-w-[50%]">
              <span className="flex items-center justify-start text-white text-sm  bg-stone-100/20 px-5 py-1 rounded-full ">
                <RiTimerFlashFill />
                Get there Fast!
              </span>
              <h1 className="text-[55px] leading-[65px] text-white font-bold tracking-tight">
                Get your bus tickets faster with Gerayo
              </h1>
              <p className="text-white font-medium tracking-tight max-w-[530px]  ">
                With Gerayo, you can easily buy bus tickets online and see where
                your bus is in real-time. It's perfect for saving time and
                making your journey smooth and hassle-free.
              </p>
              <div className="flex items-center justify-start gap-2">
                <a
                  href="https://www.apple.com/app-store/"
                  target="_blank"
                  className="bg-stone-100/20 text-white px-3 h-[45px] flex justify-center items-center rounded-xl text-[23px] transition duration-200 active:scale-95 "
                  title="App Store"
                >
                  <FaApple />
                </a>
                <a
                  href="https://play.google.com/store/games?hl=en"
                  target="_blank"
                  className="bg-stone-100/20 text-white px-3 h-[45px] flex justify-center items-center rounded-xl text-[23px] transition duration-200 active:scale-95 "
                  title="Google Play store"
                >
                  <IoLogoGooglePlaystore />
                </a>
                <a
                  href="#"
                  target="_blank"
                  className="bg-dark-body-color text-white px-6 font-medium h-[45px] flex justify-center items-center rounded-xl text-sm transition duration-200 active:scale-95 "
                  title="Google Playstore"
                >
                  Live Demo
                </a>
              </div>
            </div>
            <div></div>
          </div>
        </div>

        <div className="flex flex-col w-full h-fit items-center justify-center py-12 ">
          <p className="font-medium pb-4 ">Intend to collaborate with:</p>
          <div className="h-fit items-center justify-center w-fit flex  gap-4">
            <img src={coaster} className="h-10 opacity-80" />
            <img src={acgroup} className="h-6 opacity-80" />
            <img src={yutong} className="h-5 opacity-80" />
          </div>
        </div>

        <div className="flex items-start justify-between w-full max-w-[1200px] px-9 ">
          <div className="flex items-start justify-start flex-col max-w-[50%]">
            <span className="flex items-center justify-start font-medium text-project-green text-sm bg-project-green/10 px-5 py-1 rounded-full ">
              Get there Fast!
            </span>
            <h1 className="text-[35px] leading-[65px] text-dark-body-color font-bold tracking-tight">
              Get your bus tickets instantly!
            </h1>
            <p className="text-dark-body-color font-medium tracking-tight max-w-[530px] mb-3">
              With Gerayo, you can easily buy bus tickets online and see where
              your bus is in real-time. It's perfect for saving time and making
              your journey smooth and hassle-free.
            </p>
            <p className="text-dark-body-color font-medium tracking-tight py-3 px-5 bg-stone-200 rounded-xl w-full mb-2">
              Mobile App
            </p>
            <p className="text-dark-body-color font-medium tracking-tight py-3 px-5 bg-stone-200 rounded-xl w-full mb-3">
              Mobile App
            </p>
          </div>
          <div className="w-[50%] h-fit relative">
            <img
              src=""
              className="w-full min-h-[340px] rounded-2xl bg-stone-200"
            />
          </div>
        </div>
      </div>

      {/* footer */}
      <Footer />
    </div>
  );
}

export default Product;
