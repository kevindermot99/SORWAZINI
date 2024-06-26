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
import { FaCaretDown } from "react-icons/fa";
import { Faqs } from "../Content/Content";

function Product() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

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
    <div
      className={` bg-light-body-color min-h-[100vh] w-full text-text-dark-color flex flex-col relative overflow-x-clip mt-16`}
    >
      {/* Menu */}
      <Menu />

      {/* Body */}
      <div
        id="Challenges"
        className={`h-full scroll-mt-24 max-sm:mt-[50px] w-full flex items-center relative justify-start flex-col`}
      >
        {/* Hero section */}
        <div className={`w-full h-fit px-6 max-w-[1200px] pt-10 z-10`}>
          <div className="bg-project-green min-h-[450px] w-full rounded-3xl flex items-center justify-between py-10 px-12">
            <div className="flex flex-col items-start justify-start gap-3 max-w-[50%]">
              <Reveal
                keyframes={customAnimation}
                duration={1000}
                cascade
                damping={0.05}
                // triggerOnce
              >
                <span className="flex items-center justify-start text-white text-sm  bg-stone-100/20 px-5 gap-1 py-1 rounded-full ">
                  <RiTimerFlashFill />
                  Get there Fast!
                </span>
                <h1 className="text-[55px] leading-[65px] text-white font-bold tracking-tight">
                  Get your bus tickets faster with Gerayo
                </h1>
                <p className="text-white font-medium tracking-tight max-w-[530px]  ">
                  With Gerayo, you can easily buy bus tickets online and see
                  where your bus is in real-time. It's perfect for saving time
                  and making your journey smooth and hassle-free.
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
                    className="bg-dark-body-color text-white px-8 font-medium h-[45px] flex justify-center items-center rounded-xl text-sm transition duration-200 active:scale-95 "
                    title="Google Playstore"
                  >
                    Live Demo
                  </a>
                </div>
              </Reveal>
            </div>
            <div></div>
          </div>
        </div>

        {/* feature showcase grid */}
        <div className="flex items-start justify-between w-full max-w-[1200px] px-6 my-10 ">
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
            <p className="text-dark-body-color font-medium tracking-tight py-3 px-5 bg-project-green/10 rounded-xl w-full mb-2">
              Mobile App
            </p>
            <p className="text-dark-body-color font-medium tracking-tight py-3 px-5 bg-project-green/10 rounded-xl w-full mb-3">
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

        {/* feature showcase grid */}
        <div className="flex items-start justify-between w-full max-w-[1200px] px-6 my-10 ">
          <div className="w-[50%] h-fit relative">
            <img
              src=""
              className="w-full min-h-[340px] rounded-2xl bg-stone-200"
            />
          </div>
          <div className="flex items-start justify-start flex-col max-w-[50%]">
            <span className="flex items-center justify-start font-medium text-sm text-purple-600 bg-purple-600/10 px-5 py-1 rounded-full ">
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
            <p className="font-medium tracking-tight py-3 px-5 bg-purple-600/20 text-dark-body-color rounded-xl w-full mb-2">
              Mobile App
            </p>
            <p className="font-medium tracking-tight py-3 px-5 bg-purple-600/20 text-dark-body-color rounded-xl w-full mb-3">
              Mobile App
            </p>
          </div>
        </div>

        {/* Faqs */}
        <div className="w-full h-full bg-stone-100 px-10 py-16 flex flex-col items-center justify-start ">
          <span className="flex items-center w-fit justify-start font-medium capitalize text-project-green text-sm bg-project-green/10 px-5 py-1 rounded-full ">
            Frequently asked questions
          </span>
          <h1 className="text-[35px] leading-[65px] capitalize text-dark-body-color font-bold tracking-tight">
            Got questions? We've got answers!
          </h1>
          <div className="w-full h-fit flex flex-col items-center justify-start my-2 max-w-[900px]">
            {Faqs.map((item, index) => (
              <div
                key={item.index}
                className=" py-4 px-5 bg-white text-dark-body-color rounded-xl w-full mb-2 flex justify-between items-start gap-5"
              >
                <div className="flex flex-col items-start justify-start">
                  <h1 className="font-medium tracking-tight text-base leading-5 min-h-[30px] w-full flex items-center justify-start">
                    {item.question}
                  </h1>
                  <p
                    className={`text-sm leading-5 font-medium text-dark-body-color/70 transition-all duration-500 ease-in-out overflow-hidden ${
                      activeIndex === index ? "max-h-96" : "max-h-0"
                    }`}
                  >
                    {item.answer}
                  </p>
                </div>
                <button
                  onClick={() => toggleAnswer(index)}
                  className=" h-[30px] aspect-square rounded-full transition duration-150 active:scale-90 text-dark-body-color/30 hover:bg-stone-200 flex items-center justify-center   "
                >
                  <FaCaretDown className="text-[20px]" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="w-full h-fit flex flex-col items-center justify-start py-16">
          <div className="w-full max-w-[1200px] h-fit min-h-[340px] bg-stone-100 rounded-3xl"></div>
          <h1 className="text-[35px] leading-[65px] text-dark-body-color font-bold tracking-tight mt-4">
            Free Trial Signup
          </h1>
          <p className="text-dark-body-color font-medium tracking-tight max-w-[530px] mb-3 text-center">
            Sign up now for a free trial and experience our premium features
            without any commitment. Start your risk-free journey today!
          </p>
          <button
            className={`max-md:hidden font-medium cursor-pointer flex items-center gap-1 transition active:scale-95 text-sm py-2 px-5 rounded-full bg-dark-body-color text-white `}
          >
            Get Started Today!
          </button>
        </div>
      </div>

      {/* footer */}
      <Footer />
    </div>
  );
}

export default Product;
