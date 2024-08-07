import React, { useEffect, useState } from "react";
import "boxicons/css/boxicons.min.css";
import { Link, useLocation } from "react-router-dom";
import Reveal from "react-awesome-reveal";
import { keyframes } from "@emotion/react";
import Menu from "../Components/Menu";
import Footer from "../Components/Footer";
import { RiTimerFlashFill } from "react-icons/ri";
import { FaApple } from "react-icons/fa";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { LuArrowDownFromLine } from "react-icons/lu";
import { FaCaretDown } from "react-icons/fa";
import LoginScreenshot from "../assets/screenshots/login.jpg";
import TrackScreenshot from "../assets/screenshots/track.jpg";
import { downloadtheapp } from "../Content/Content";
import imageTrack from '../assets/track.png'
import imageTicket from '../assets/ticket.png'

function Product() {
  const { pathname } = useLocation();

  useEffect(() => {
    // window.scrollTo(0, 0);
  }, [pathname]);

  const customAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
    // filter: blur(5px)
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

  const customAnimationImages = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
    // filter: blur(5px)
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

  return (
    <div
      className={` bg-light-body-color min-h-[100vh] w-full text-text-dark-color flex flex-col relative overflow-x-clip pt-16`}
    >
      {/* Menu */}
      <Menu />

      {/* Body */}
      <div
        id="Challenges"
        className={`h-full scroll-mt-24 max-sm:mt-[50px] w-full flex items-center relative justify-start flex-col`}
      >
        {/* Hero section */}
        <div className={`w-full h-fit z-10 mb-10`}>
          <div className="bg-stone-100 min-h-[450px] overflow-clip w-full py-10 px-12 flex items-center justify-center">
            <div className="w-full max-w-[1200px] h-full min-h-[400px] flex items-center justify-between px-6">
              {/* hero text */}
              <div className="flex flex-col items-start justify-start gap-3 max-w-[45%]">
                <Reveal
                  keyframes={customAnimation}
                  duration={1000}
                  cascade
                  damping={0.05}
                  triggerOnce
                >
                  <span className="flex items-center justify-start text-dark-body-color text-sm  bg-stone-400/20 px-5 gap-1 py-1 rounded-full ">
                    <RiTimerFlashFill />
                    Get there Fast!
                  </span>
                  <h1 className="text-[50px] leading-[60px] text-dark-body-color font-bold tracking-tight">
                    Track your bus and get your bus ticket faster.
                  </h1>
                  <p className="text-dark-body-color/60 font-medium tracking-tight max-w-[530px] pb-3  ">
                    Track your bus in real-time and get your ticket quickly. Our
                    easy-to-use system keeps you updated on where your bus is
                    and any changes to the schedule. Say goodbye to long waits
                    and hello to quick and convenient ticket purchasing.
                  </p>
                  <div className="flex items-center justify-start gap-2">
                    {/* <a
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
                  </a> */}
                    <a
                      href="https://gerayo.onrender.com/"
                      target="_blank"
                      className="bg-dark-body-color text-white px-8 font-medium h-[40px] flex justify-center items-center rounded-full text-sm transition duration-200 active:scale-95 "
                      title="Google Playstore"
                    >
                      Open gerayo
                    </a>
                  </div>
                </Reveal>
              </div>
              {/* visual */}
              <Reveal
                keyframes={customAnimationImages}
                duration={1000}
                cascade
                damping={0.05}
                triggerOnce
                className="w-full max-w-[50%] h-fit"
              >
                <div className="h-full max-h-[400px] flex items-start justify-center gap-4">
                  <img
                    src={TrackScreenshot}
                    className=" h-[370px] -rotate-6 z-0 translate-x-[40px] rounded-xl shadow-stone-300 shadow-xl "
                  />
                  <img
                    src={LoginScreenshot}
                    className=" h-[420px] translate-y-[-20px] rotate-0 translate-x-[30px] rounded-xl shadow-stone-300 shadow-xl z-10"
                  />
                  <img
                    src={TrackScreenshot}
                    className=" h-[370px] rotate-6 translate-x-[20px] rounded-xl shadow-stone-300 shadow-xl z-0"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </div>

        {/* feature showcase grid */}
        <Reveal
          keyframes={customAnimation}
          duration={1000}
          cascade
          damping={0.05}
          triggerOnce
          className="w-full max-w-[1200px]"
        >
          <div className="flex items-start justify-between w-full max-w-[1200px] px-6 my-10 ">
            <div className="w-[50%] h-fit relative shadow-lg rounded-2xl bg-purple-300 overflow-clip pb-10 pr-10">
              <img
                src={imageTrack}
                className="w-full min-h-[340px] rounded-br-2xl shadow-2xl "
              />
            </div>
            <div className="h-full min-h-[340px] flex items-start justify-center flex-col max-w-[50%] pl-10">
              <span className="flex items-center justify-start font-medium text-sm text-purple-600 bg-purple-600/10 px-5 py-1 rounded-full ">
                Get there Fast!
              </span>
              <h1 className="text-[35px] leading-tight my-2 text-dark-body-color font-bold tracking-tight">
                Track your Bus Anywhere, Everywhere!
              </h1>
              <p className="text-dark-body-color font-medium tracking-tight max-w-[530px] mb-5">
                Know the exact location of your bus and get accurate arrival and
                departure times. Plan your schedule with ease and avoid waiting
                in long queues at the bus station.
              </p>
              {/* <p className="font-medium tracking-tight text-sm py-3 px-5 bg-stone-200/60 text-dark-body-color rounded-xl w-full mb-2">
              Mobile App
            </p>
            <p className="font-medium tracking-tight text-sm py-3 px-5 bg-stone-200/60 text-dark-body-color rounded-xl w-full mb-3">
              Mobile App
            </p> */}
            </div>
          </div>
        </Reveal>

        {/* feature showcase grid */}
        <Reveal
          keyframes={customAnimation}
          duration={1000}
          cascade
          damping={0.05}
          triggerOnce
          className="w-full max-w-[1200px]"
        >
          <div className="flex items-start justify-between w-full max-w-[1200px] px-6 my-10 ">
            <div className="min-h-[340px] flex items-start justify-center flex-col max-w-[50%] pr-10">
              <span className="flex items-center justify-start font-medium text-amber-500 text-sm bg-amber-400/10 px-5 py-1 rounded-full ">
                No more queue lines!
              </span>
              <h1 className="text-[35px] leading-tight my-2 text-dark-body-color font-bold tracking-tight">
                Get your bus tickets instantly!
              </h1>
              <p className="text-dark-body-color font-medium tracking-tight max-w-[530px] mb-5">
                With Gerayo, you can easily purchase bus tickets online from the
                comfort of your home or office and track your bus in real-time.
                Save time and enjoy a smooth, hassle-free journey.
              </p>
              {/* <p className="text-dark-body-color font-medium tracking-tight py-3 px-5 text-sm bg-stone-200/60 rounded-xl w-full mb-2">
              Easy to use
            </p>
            <p className="text-dark-body-color font-medium tracking-tight py-3 px-5 text-sm bg-stone-200/60 rounded-xl w-full mb-2">
              Privacy protection
            </p> */}
            </div>
            <div className="w-[50%] h-fit relative shadow-lg rounded-2xl bg-amber-300 overflow-clip pb-10 pl-10">
              <img
                src={imageTicket}
                className="w-full min-h-[340px] object-cover rounded-bl-2xl shadow-2xl "
              />
            </div>
          </div>
        </Reveal>

        {/* CTA */}
        <div className="w-full h-fit flex flex-col items-center justify-start py-16">
          <div className="w-full max-w-[1000px] h-fit flex items-center gap-3 flex-wrap justify-center">
            {downloadtheapp.map((image, index) => (
              <div className="h-[150px] shadow-xl min-w-[190px] overflow-clip rounded-2xl flex items-center justify-center">
                <img
                  src={image}
                  key={index}
                  className="w-full h-full object-cover object-left origin-left brightness-110 bg-stone-100"
                />
              </div>
            ))}
          </div>
          <h1 className="text-[35px] leading-[65px] text-dark-body-color font-bold tracking-tight mt-4">
            Download the App
          </h1>
          <p className="text-dark-body-color font-medium tracking-tight max-w-[430px] mb-6 text-center">
            simply open gerayo in your prefered Web browser and install it on
            your device for easy access
          </p>
          <a
            href="https://gerayo.onrender.com/"
            target="_blank"
            className={`max-md:hidden font-medium cursor-pointer flex items-center gap-1 transition active:scale-95 text-sm py-2 px-5 rounded-full bg-dark-body-color text-white `}
          >
            Open Gerayo
          </a>
        </div>
      </div>

      {/* footer */}
      <Footer />
    </div>
  );
}

export default Product;
