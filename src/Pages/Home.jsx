import React, { useEffect, useState } from "react";
import "boxicons/css/boxicons.min.css";
import { Link, useLocation } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";
import { Contacts, HeroText, Members, SORWAZINI } from "../Content/Content";
import Reveal from "react-awesome-reveal";
import { keyframes } from "@emotion/react";
import { RiShakeHandsLine } from "react-icons/ri";
import { TbExclamationCircle } from "react-icons/tb";
import { MdOutlineRocketLaunch } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { HiOutlineLightBulb } from "react-icons/hi";
import { RiTeamLine } from "react-icons/ri";
import { GiEarthAfricaEurope } from "react-icons/gi";
import Menu from "../Components/Menu";
import Footer from "../Components/Footer";

function Home() {
  const [showContact, setShowContact] = useState(false);
  const [copyButtonText, SetCopyButtonText] = useState("Copy");
  const location = useLocation();
  const [aboutUs, setAboutUs] = useState(1);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const handleLinkCopy = () => {
    navigator.clipboard.writeText(window.location.href).then(() => {
      SetCopyButtonText("Copied!");
      setTimeout(() => {
        SetCopyButtonText("Copy");
      }, 1000);
    });
  };

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

  return (
    <div className=" bg-light-body-color min-h-[100vh] w-full text-text-dark-color flex flex-col relative overflow-x-clip  ">
      {/* Menu */}
      <Menu />

      {/* Body */}
      <div
        id="Home"
        className="h-full scroll-mt-24 max-sm:mt-[50px] w-full flex items-center relative justify-start flex-col"
      >
        {/* Hero */}
        <div className="w-full h-fit py-[90px] mt-16 flex flex-col items-center justify-center sticky">
          <Reveal
            keyframes={customAnimation}
            duration={1000}
            cascade
            damping={0.05}
          // triggerOnce
          >
            <h1 className="text-center max-w-[900px] font-bold text-[70px] max-sm:text-[50px] leading-[80px] max-sm:leading-[55px] tracking-tighter">
              {HeroText.Big}
            </h1>
            <p className="font-medium max-w-[500px] text-center pt-5 max-sm:pt-2 tracking-tight leading-5 max-sm:px-5 ">
              {HeroText.Small}
            </p>
          </Reveal>
          {/* Members Grid */}
          <div className="w-full h-fit flex flex-col items-center justify-start gap-3 max-w-[1200px] mt-5">
            {/* Mapping members by countries */}
            <div className=" my-8 max-sm:px-3 ">
              {SORWAZINI.map((member, index) => (
                <div
                  className="flex gap-3 max-sm: flex-wrap items-center justify-center"
                  key={index}
                >
                  <Reveal
                    keyframes={customAnimation}
                    duration={1000}
                    cascade
                    damping={0.05}
                  // triggerOnce
                  >
                    {/* SO */}
                    <div className="w-fit flex flex-col gap-3 relative">
                      <div className="w-full text-center">
                        <h1 className="font-bold ">SO</h1>
                        <div className="border-t-[2px] border-l-[2px] border-r-[2px] h-[10px] rounded-t-xl border-dark-body-color "></div>
                      </div>
                      <div className="flex gap-3">
                        {member.SO.map((person, index) => (
                          <div
                            key={index}
                            className="w-[70px] aspect-square bg-stone-200 rounded-full cursor-pointer hover:scale-110 transition relative group"
                          >
                            <img
                              src={person.picture}
                              className="min-w-[100%] max-h-[100%] object-cover rounded-full"
                            />
                            <div className="absolute top-[110%] text-dark-body-color bg-white rounded-full left-[-50%] right-[-50%] mx-auto w-fit text-center h-fit px-2 py-1 opacity-0 pointer-events-none group-hover:opacity-100 transition duration-500 text-sm translate-y-[-10px] group-hover:translate-y-0 ">
                              <span key={index}>{person.name}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    {/* RWA */}
                    <div className="w-fit flex flex-col gap-3 relative">
                      <div className="w-full text-center">
                        <h1 className="font-bold ">RWA</h1>
                        <div className="border-t-[2px] border-l-[2px] border-r-[2px] h-[10px] rounded-t-xl border-dark-body-color "></div>
                      </div>
                      <div className="flex gap-3">
                        {member.RWA.map((person, index) => (
                          <div
                            key={index}
                            className="w-[70px] aspect-square bg-stone-200 rounded-full cursor-pointer hover:scale-110 transition hover:ring-0 ring-dark-body-color relative group flex justify-center items-center  "
                          >
                            <img
                              src={person.picture}
                              className="min-w-[100%] max-h-[100%] object-cover rounded-full"
                            />
                            <div className="absolute top-[110%] text-dark-body-color bg-white rounded-full left-[-50%] right-[-50%] mx-auto w-fit text-center h-fit px-2 py-1 opacity-0 pointer-events-none group-hover:opacity-100 transition duration-500 text-sm translate-y-[-10px] group-hover:translate-y-0 ">
                              <span key={index}>{person.name}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    {/* ZI */}
                    <div className="w-fit flex flex-col gap-3 relative">
                      <div className="w-full text-center">
                        <h1 className="font-bold ">ZI</h1>
                        <div className="border-t-[2px] border-l-[2px] border-r-[2px] h-[10px] rounded-t-xl border-dark-body-color "></div>
                      </div>
                      <div className="flex gap-3">
                        {member.ZI.map((person, index) => (
                          <div
                            key={index}
                            className="w-[70px] aspect-square bg-stone-200 rounded-full cursor-pointer hover:scale-110 transition hover:ring-0 ring-dark-body-color relative group"
                          >
                            <img
                              src={person.picture}
                              className="min-w-[100%] max-h-[100%] object-cover rounded-full"
                            />
                            <div className="absolute top-[110%] text-dark-body-color bg-white rounded-full left-[-50%] right-[-50%] mx-auto w-fit text-center h-fit px-2 py-1 opacity-0 pointer-events-none group-hover:opacity-100 transition duration-500 text-sm translate-y-[-10px] group-hover:translate-y-0 ">
                              <span key={index}>{person.name}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    {/* NI */}
                    <div className="w-fit flex flex-col gap-3 relative">
                      <div className="w-full text-center">
                        <h1 className="font-bold ">NI</h1>
                        <div className="border-t-[2px] border-l-[2px] border-r-[2px] h-[10px] rounded-t-xl border-dark-body-color "></div>
                      </div>
                      <div className="flex gap-3">
                        {member.NI.map((person, index) => (
                          <div
                            key={index}
                            className="w-[70px] aspect-square bg-stone-200 rounded-full cursor-pointer hover:scale-110 transition hover:ring-0 ring-dark-body-color relative group"
                          >
                            <img
                              src={person.picture}
                              className="min-w-[100%] max-h-[100%] object-cover rounded-full"
                            />
                            <div className="absolute top-[110%] text-dark-body-color bg-white rounded-full left-[-50%] right-[-50%] mx-auto w-fit text-center h-fit px-2 py-1 opacity-0 pointer-events-none group-hover:opacity-100 transition duration-500 text-sm translate-y-[-10px] group-hover:translate-y-0 ">
                              <span key={index}>{person.name}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </Reveal>
                </div>
              ))}
            </div>
            <div className="flex items-center gap-14 text-dark-body-color text-sm font-medium px-4 max-sm:gap-0 max-sm:px-8 ">
              <Reveal
                keyframes={customAnimation}
                duration={1000}
                cascade
                damping={0.05}
              //triggerOnce
              >
                <h1>🇿🇦 South Africa</h1>
                <h1>🇷🇼 Rwanda</h1>
                <h1>🇿🇼 Zimbambwe</h1>
                <h1>🇳🇬 Nigeria</h1>
              </Reveal>
            </div>
          </div>
        </div>

        {/* separator */}
        <div className="w-full h-[60px] rounded-t-[50%] bg-gradient-to-b from-stone-100/50 to-white"></div>

        {/* AboutUs */}
        <div
          id="who"
          className="w-full h-fit scroll-m-20 flex flex-col items-start justify-start relative  max-sm:px-5 bg-white"
        >
          <div className=" h-full w-full flex justify-start items-center flex-col ">
            <div className=" flex flex-col items-center justify-start w-full">
              <Reveal
                keyframes={customAnimation}
                duration={1000}
                cascade
                damping={0.05}
              // triggerOnce
              >
                {/* Tabs */}
                <h1 className=" text-[40px] max-w-[800px] leading-[47px] font-bold tracking-tighter text-center ">
                  {aboutUs === 1 && "Get to know us"}
                  {aboutUs === 3 && "Things we value"}
                  {aboutUs === 4 && "Our Problem Statement "}
                  {aboutUs === 5 && "Our Mission"}
                </h1>
                <div className="bg-stone-200/70 w-full h-[45px] max-w-fit mt-5 rounded-full shado p-1 flex items-center justify-center">
                  <button
                    onClick={() => {
                      setAboutUs(1);
                    }}
                    className={`px-5 h-full whitespace-nowrap rounded-full font-semibold text-sm tracking-tight flex items-center justify-center gap-2 ${aboutUs === 1
                        ? "transition duration-200 bg-white text-dark-body-color "
                        : " bg-transparent text-dark-body-color "
                      }`}
                  >
                    <RiShakeHandsLine className="text-[20px]" />
                    Who we are
                  </button>
                  <button
                    onClick={() => {
                      setAboutUs(3);
                    }}
                    className={`px-5 text-dark-body-color h-full whitespace-nowrap rounded-full font-semibold text-sm tracking-tight flex items-center justify-center gap-2 ${aboutUs === 3
                        ? "transition duration-200 bg-white text-dark-body-color "
                        : " bg-transparent text-dark-body-color "
                      }`}
                  >
                    <FaRegHeart className="text-[20px]" />
                    Values
                  </button>
                  <button
                    onClick={() => {
                      setAboutUs(4);
                    }}
                    className={`px-5 text-dark-body-color h-full whitespace-nowrap rounded-full font-semibold text-sm tracking-tight flex items-center justify-center gap-2 ${aboutUs === 4
                        ? "transition duration-200 bg-white text-dark-body-color "
                        : " bg-transparent text-dark-body-color "
                      }`}
                  >
                    <TbExclamationCircle className="text-[20px]" />
                    Problem
                  </button>
                  <button
                    onClick={() => {
                      setAboutUs(5);
                    }}
                    className={`px-5 text-dark-body-color h-full whitespace-nowrap rounded-full font-semibold text-sm tracking-tight flex items-center justify-center gap-2 ${aboutUs === 5
                        ? "transition duration-200 bg-white text-dark-body-color "
                        : " bg-transparent text-dark-body-color "
                      }`}
                  >
                    <MdOutlineRocketLaunch className="text-[20px]" />
                    Mission
                  </button>
                </div>

                {/* Who we are */}
                <div
                  className={`mt-2 pb-8 ${aboutUs === 1
                      ? "flex flex-col justify-center items-center"
                      : "hidden"
                    }`}
                >
                  <p className="font-medium max-w-[500px] text-black text-center w-full pb-6 pt-2 max-sm:pt-2 tracking-tight leading-5 max-sm:px-5 ">
                  Pan-African Techpreneurs united by a shared mission to transform Rwanda's public transport system.
                  </p>
                  <div className="flex flex-wrap items-center justify-center max-w-[1100px] gap-3">
                    {Members.map((person, index) => (
                      <div
                        className="p-[1px] bg-gradient-to-tl from-stone-300 via-transparent to-stone-300 rounded-2xl flex   "
                        key={index}
                      >
                        <div className="w-full h-full p-10 rounded-2xl bg-stone-50 flex flex-col items-center justify-start">
                          <div className="w-[140px] aspect-square bg-stone-50 rounded-full">
                            <img
                              src={person.picture}
                              className="min-w-[100%] max-h-[100%] object-cover rounded-full shadow-lg "
                            />
                          </div>

                          <p className="font-medium max-w-[500px] text-dark-body-color text-center pt-5 max-sm:pt-2 tracking-tight leading-5 max-sm:px-5 ">
                            {person.name}
                          </p>
                          <p className="font-medium max-w-[500px] text-dark-body-color/60 text-center pt-1 tracking-tight leading-5 max-sm:px-5 ">
                            {person.Role}
                          </p>
                          <div className="flex items-center justify-center mt-3 gap-3 ">
                            {person.socials.map((social, index) => (
                              <a
                                key={index}
                                href={social.siteLink}
                                target="_blank"
                                className="text-xl text-text-dark-color/40 hover:text-dark-body-color"
                                title={social.siteName}
                              >
                                {React.createElement(social.siteIcon)}
                              </a>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Mission */}
                <div
                  className={`mt-2 ${aboutUs === 5
                      ? "flex justify-center md:pb-44 items-start p-10 rounded-xl bg-stone-200/0 gap-10 mt-6 max-w-[1000px]"
                      : "hidden"
                    }`}
                >
                  <p className="font-medium max-w-[1000px] text-gray-800 text-justify max-sm:pt-2 tracking-tight leading-6 max-sm:px-5 w-[50%]">
                    Our Mission is to transform public transportation in Rwanda
                    through innovative software solutions, enhancing
                    accessibility and creating a seamless, efficient transport
                    network.
                  </p>
                  <div className="w-[50%] h-full min-h-[260px] bg-stone-50 flex rounded-md ">
                    <img
                      src="https://lh3.googleusercontent.com/u/1/drive-viewer/AKGpihZVEKrPNim41GZUO2tXRBSGC6DmAq_wyCkmVrhnF4eulUxbo4zvTsnGnAUOhoF5hWewYS77HXLII9Kmx__Nd-FNyPMsOZlIJyU=w1366-h649-rw-v1"
                      className="max-h-[300px] rounded-2xl shadow-xl w-full object-cover"
                    />
                  </div>
                </div>

                {/* Values */}
                <div
                  className={`mt-10 pb-16 ${aboutUs === 3
                      ? "flex flex-wrap gap-3 md:pb-44 relative max-w-[1000px]"
                      : "hidden"
                    }`}
                >
                  <div className=" w-full max-w-[320px] min-h-[100px] p-[4px]">
                    <div className="bg-gray-50 py-5 shadow-lg px-8 rounded-2xl flex flex-col w-full h-full">
                      <div className="bg-red-400/0 h-fit w-fit py-1">
                        <HiOutlineLightBulb className="text-[23px] text-dark-body-color/60  " />
                      </div>
                      <div className="flex flex-col">
                        <h1 className="tracking-tight font-extrabold  text-dark-body-color text-[20px] ">
                          Creativity
                        </h1>
                        <div className="tracking-tight font-medium leading-5 text-left text-base pr-3 pb-4 pt-1 text-dark-body-color/80">
                        Our spirit for innovation fuels us to find unique solutions for the challenges in the transport system.
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className=" w-full max-w-[320px] min-h-[100px] p-[4px] ">
                    <div className="bg-gray-50 py-5 px-8 shadow-lg rounded-2xl flex flex-col w-full h-full">
                      <div className="bg-red-400/0 h-fit w-fit py-1">
                        <RiTeamLine className="text-[20px] text-dark-body-color/60  " />
                      </div>
                      <div className="flex flex-col">
                        <h1 className="tracking-tight font-bold text-dark-body-color text-[20px]   ">
                          Teamwork
                        </h1>
                        <div className="tracking-tight font-medium leading-5 text-left text-base pr-3 pb-4 pt-1 text-dark-body-color/80  ">
                        We achieve our goals through strong collaboration and mutual support.
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className=" w-full max-w-[320px] min-h-[100px] p-[4px] ">
                    <div className="bg-gray-50 py-5 px-8 shadow-lg rounded-2xl flex flex-col w-full h-full">
                      <div className="bg-red-400/0 h-fit w-fit py-1">
                        <GiEarthAfricaEurope className="text-[20px] text-dark-body-color/60  " />
                      </div>
                      <div className="flex flex-col">
                        <h1 className="tracking-tight font-bold text-dark-body-color text-[20px]   ">
                          Pan-Africanism
                        </h1>
                        <div className="tracking-tight font-medium leading-5 text-left text-base pr-3 pb-4 pt-1 text-dark-body-color/80  ">
                        We thrive and draw strength from our diverse backgrounds, skills and experiences.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Problem */}
                <div
                  className={`mt-2  ${aboutUs === 4
                      ? "flex justify-center md:pb-28 items-start p-10 rounded-xl bg-stone-200/0 gap-10 mt-6 max-w-[1000px]"
                      : "hidden"
                    }`}
                >
                  <p className="font-medium max-w-[1000px] text-gray-800 text-justify max-sm:pt-2 tracking-tight leading-6 max-sm:px-5 w-[50%]">
                    In Rwanda, public transport is a lifeline for many, with
                    over 40% of people depending on buses to get around.
                    Unfortunately, the current ticketing system leads to long
                    waits and crowded bus stations, making daily journeys
                    stressful and time-consuming. To make things easier we need
                    a fresh, tech-driven approach to streamline the system and
                    ensure a smoother, more efficient ride for everyone.
                  </p>
                  <div className="w-[50%] h-full min-h-[260px] bg-stone-50 flex rounded-md ">
                    <img
                      src="https://mobile.igihe.com/local/cache-vignettes/L1000xH667/ry6b2412-2-46621.jpg?1713680919"
                      className="max-h-[300px] rounded-2xl shadow-xl w-full object-cover"
                    />
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>

      {/* footer */}
      <Footer />
    </div>
  );
}

export default Home;
