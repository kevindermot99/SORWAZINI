import React, { useState } from "react";
import "boxicons/css/boxicons.min.css";
import { Link, useLocation } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";
import {
  Contacts,
  HeroText,
  Members,
  SORWAZINI,
  Projects,
  AboutUs,
  Values,
  Challenges,
} from "../Content/Content";
import Reveal from "react-awesome-reveal";
import { keyframes } from "@emotion/react";
import { Fade } from "react-awesome-reveal";
import SorwaziniLogo from "../assets/SORWAZINI-Logo-1.png";
import { RiShakeHandsLine } from "react-icons/ri";
import { FaRegHandPointUp } from "react-icons/fa6";
import sample from "../assets/sample2.png";
import { TbExclamationCircle } from "react-icons/tb";
import { MdOutlineRocketLaunch } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { HiOutlineLightBulb } from "react-icons/hi";
import { RiTeamLine } from "react-icons/ri";
import { GiEarthAfricaEurope } from "react-icons/gi";

function Home() {
  const [showContact, setShowContact] = useState(false);
  const [copyButtonText, SetCopyButtonText] = useState("Copy");
  const location = useLocation();
  const [aboutUs, setAboutUs] = useState(1);

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
    transform: translateY(80px);
    // filter: blur(5px)
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

  return (
    <div className=" bg-light-body-color min-h-[100vh] w-full text-text-dark-color flex flex-col relative overflow-x-clip  ">
      {/* Contact Overlay */}
      <div
        className={`fixed top-0 left-0 w-full h-full backdrop-blur-sm flex items-center justify-center ${
          showContact
            ? "z-30 opacity-100 transition duration-200 "
            : "-z-50 opacity-0 "
        } `}
      >
        <div
          onClick={() => setShowContact(false)}
          className="bg-dark-body-color/20 w-full h-full absolute top-0 left-0 z-10"
        ></div>
        <div
          className={` w-fit max-w-[500px] h-fit shadow-xl rounded-3xl bg-white p-8  mx-auto z-20 overflow-clip transition duration-200 ${
            showContact ? "scale-100 " : "scale-50 "
          } `}
        >
          <h1 className=" font-medium text-base">Contact us via </h1>
          <div className="py-4 flex gap-2 items-start justify-start max-sm:flex-wrap">
            <a
              href={`https://wa.me/${Contacts.WhatsAppNumber}`}
              target="_blank"
              className=" w-full h-fit flex items-center justify-start flex-col gap-1 cursor-pointer"
            >
              <div className="p-2 w-fit transition bg-green-700 text-text-light-color rounded-full text-[30px]">
                <FaWhatsapp />
              </div>
              <p className="font-medium text-sm ">WhatsApp</p>
            </a>
            <a
              href={`https://www.instagram.com/${Contacts.InstagramUsername}/`}
              target="_blank"
              className=" w-full h-fit flex items-center justify-start flex-col gap-1 cursor-pointer"
            >
              <div className="p-2 w-fit bg-red-500  text-text-light-color rounded-full text-[30px]">
                <IoLogoInstagram />
              </div>
              <p className="font-medium text-sm ">Instagram</p>
            </a>
            <a
              href={`mailto:${Contacts.Gmail}`}
              target="_blank"
              className=" w-full h-fit flex items-center justify-start flex-col gap-1 cursor-pointer"
            >
              <div className="p-2 w-fit bg-blue-500  text-text-light-color rounded-full text-[30px]">
                <MdOutlineEmail />
              </div>
              <p className="font-medium text-sm ">Gmail</p>
            </a>
          </div>
          <div className="w-full h-full flex flex-col ">
            <h1 className=" pt-5 font-medium text-base">Share The Link </h1>
            <input
              type="text"
              readOnly
              value={window.location.href}
              className=" my-2 py-2 px-4 font-medium w-full text-sm  bg-stone-200 rounded-full max-w-[300px]"
            />
            <button
              onClick={handleLinkCopy}
              className="font-medium cursor-pointer w-fit bg-dark-body-color text-light-body-color transition  active:scale-95 text-sm mt-1 py-2 px-5 rounded-full"
            >
              {copyButtonText}
            </button>
          </div>
        </div>
      </div>

      {/* <Fade duration={1000} triggerOnce> */}
      {/* Menu */}
      <div className=" h-fit w-full flex items-center bg-light-body-color/95 backdrop-blur-lg   justify-between gap-4 py-4 px-[24px] fixed top-0 z-20">
        <Link
          className={`font-Kanit font-medium text-2xl flex flex-col leading-6 text-dark-body-color justify-center items-start `}
        >
          <img src={SorwaziniLogo} className="w-[180px]" />
          <p className="text-sm pt-1 tracking-wide font-bold text-dark-body-color">
            E-lab Think Tank
          </p>
        </Link>

        <span className="space-x-6 max-md:hidden  ">
          <a
            href="#Home"
            className={`font-medium text-sm text-dark-body-color px-1 py-2 transition hover:border-b-[2px] border-dark-body-color`}
          >
            Home
          </a>
          <a
            href="#who"
            className={`font-medium text-sm text-dark-body-color px-1 py-2 transition hover:border-b-[2px] border-dark-body-color`}
          >
            Who we are
          </a>
          <a
            href="#AboutUs"
            className={`font-medium text-sm text-dark-body-color px-1 py-2 transition hover:border-b-[2px] border-dark-body-color`}
          >
            E-Lab Challenges
          </a>
          <a
            href="#Aboutus"
            className={`font-medium text-sm text-dark-body-color px-1 py-2 transition hover:border-b-[2px] border-dark-body-color`}
          >
            Gallery
          </a>
          <a
            href="#Aboutus"
            className={`font-medium text-sm text-dark-body-color px-1 py-2 transition hover:border-b-[2px] border-dark-body-color`}
          >
            Our Product
          </a>
        </span>
        <span className="space-x-6 flex ">
          <Link
            to={`https://www.alueducation.com/`}
            className={`font-medium text-sm text-dark-body-color px-1 py-2 outline-none`}
          >
            <img
              src="https://ciradu2204.github.io/ALUWebsite/img/alu_logo_original.png"
              className="h-5"
            />
          </Link>
          <button
            onClick={() => setShowContact(true)}
            className="max-md:hidden font-medium cursor-pointer bg-dark-body-color text-light-body-color transition active:scale-95 text-sm py-2 px-5 rounded-full "
          >
            Contact us
          </button>
        </span>
      </div>
      {/* </Fade> */}

      {/* Content */}
      <div
        id="Home"
        className="h-full pt-[100px] max-sm:mt-[50px] w-full flex items-center relative justify-start flex-col"
      >
        {/* bubbles */}
        {/* <div className="absolute top-0 left-0 w-full h-full max-h-[500px]  ">
            <div className="absolute top-[200px] right-20 h-10 w-3 bg-black/80 rotate-6  "></div>
        </div> */}
        {/* Hero */}
        <div className="w-full h-fit py-16 flex flex-col items-center justify-center sticky">
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
                        <div className="border-t-[2px] border-l-[2px] border-r-[2px] h-[10px] border-dark-body-color "></div>
                      </div>
                      <div className="flex gap-3">
                        {member.SO.map((person, index) => (
                          <div
                            key={index}
                            className="w-[70px] aspect-square bg-stone-200 rounded-full cursor-pointer hover:scale-110 transition hover:ring-0 ring-dark-body-color relative group"
                          >
                            <img
                              src={person.picture}
                              className="min-w-[100%] max-h-[100%] object-cover rounded-full"
                            />
                            <div className="absolute top-[110%] text-dark-body-color bg-white left-[-50%] right-[-50%] mx-auto w-fit text-center h-fit px-2 py-1 opacity-0 pointer-events-none group-hover:opacity-100 transition duration-500 text-sm translate-y-[-10px] group-hover:translate-y-0 ">
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
                        <div className="border-t-[2px] border-l-[2px] border-r-[2px] h-[10px] border-dark-body-color "></div>
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
                            <div className="absolute top-[110%] text-dark-body-color bg-white left-[-50%] right-[-50%] mx-auto w-fit text-center h-fit px-2 py-1 opacity-0 pointer-events-none group-hover:opacity-100 transition duration-500 text-sm translate-y-[-10px] group-hover:translate-y-0 ">
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
                        <div className="border-t-[2px] border-l-[2px] border-r-[2px] h-[10px] border-dark-body-color "></div>
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
                            <div className="absolute top-[110%] text-dark-body-color bg-white left-[-50%] right-[-50%] mx-auto w-fit text-center h-fit px-2 py-1 opacity-0 pointer-events-none group-hover:opacity-100 transition duration-500 text-sm translate-y-[-10px] group-hover:translate-y-0 ">
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
                        <div className="border-t-[2px] border-l-[2px] border-r-[2px] h-[10px] border-dark-body-color "></div>
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
                            <div className="absolute top-[110%] text-dark-body-color bg-white left-[-50%] right-[-50%] mx-auto w-fit text-center h-fit px-2 py-1 opacity-0 pointer-events-none group-hover:opacity-100 transition duration-500 text-sm translate-y-[-10px] group-hover:translate-y-0 ">
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
          className="w-full h-fit scroll-m-24 flex flex-col items-start justify-start relative  max-sm:px-5 bg-white"
        >
          {/* bubbles */}
          <div className="absolute top-0 left-0 w-full h-full max-h-[500px]  ">
            <div className="absolute top-[50px] left-0 right-0 mx-auto h-[300px] w-[300px] blur-[100px] bg-stone-100 "></div>
          </div>
          <div class=" h-full w-full flex justify-start items-center flex-col ">
            <div className=" flex flex-col items-center justify-start w-full">
              <Reveal
                keyframes={customAnimation}
                duration={1000}
                cascade
                damping={0.05}
                // triggerOnce
              >
                <h1 className=" text-[40px] max-w-[800px] leading-[47px] font-bold tracking-tighter text-center ">
                  {aboutUs === 1 && "Get to know us"}
                  {aboutUs === 3 && "Things we value"}
                  {aboutUs === 4 && "Our Problem Statement "}
                  {aboutUs === 5 && "Our Mission"}
                </h1>
                <div className="bg-white w-full h-[45px] max-w-fit mt-5 rounded-full shadow p-1 flex items-center justify-center">
                  <button
                    onClick={() => {
                      setAboutUs(1);
                    }}
                    className={`px-5 h-full whitespace-nowrap rounded-full font-semibold text-sm tracking-tight flex items-center justify-center gap-2 ${
                      aboutUs === 1
                        ? "transition duration-200 bg-dark-body-color text-white"
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
                    className={`px-5 text-dark-body-color h-full whitespace-nowrap rounded-full font-semibold text-sm tracking-tight flex items-center justify-center gap-2 ${
                      aboutUs === 3
                        ? "transition duration-200 bg-dark-body-color text-white"
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
                    className={`px-5 text-dark-body-color h-full whitespace-nowrap rounded-full font-semibold text-sm tracking-tight flex items-center justify-center gap-2 ${
                      aboutUs === 4
                        ? "transition duration-200 bg-dark-body-color text-white"
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
                    className={`px-5 text-dark-body-color h-full whitespace-nowrap rounded-full font-semibold text-sm tracking-tight flex items-center justify-center gap-2 ${
                      aboutUs === 5
                        ? "transition duration-200 bg-dark-body-color text-white"
                        : " bg-transparent text-dark-body-color "
                    }`}
                  >
                    <MdOutlineRocketLaunch className="text-[20px]" />
                    Mission
                  </button>
                </div>

                {/* Who we are */}
                <div
                  className={`mt-2 ${
                    aboutUs === 1
                      ? "flex flex-col justify-center items-center"
                      : "hidden"
                  }`}
                >
                  <p className="font-medium max-w-[500px] text-dark-body-color/60 text-center w-full pb-6 pt-8 max-sm:pt-2 tracking-tight leading-5 max-sm:px-5 ">
                    We are Pan-African Tech-preneurs
                  </p>
                  <div className="flex flex-wrap items-center justify-center max-w-[1000px] gap-2">
                    {Members.map((person, index) => (
                      <div className="p-4">
                        <img
                          src={person.picture}
                          className="h-[140px] aspect-square object-cover rounded-full"
                        />
                        <p className="font-medium max-w-[500px] text-dark-body-color text-center pt-5 max-sm:pt-2 tracking-tight leading-5 max-sm:px-5 ">
                          {person.name}
                        </p>
                        <p className="font-medium max-w-[500px] text-dark-body-color/60 text-center pt-1 tracking-tight leading-5 max-sm:px-5 ">
                          {person.Role}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Mission */}
                <div className={`mt-2 ${aboutUs === 5 ? "flex justify-center items-start p-10 rounded-xl bg-stone-200/0 gap-10 mt-6 max-w-[1000px]" : "hidden"}`}>
                  <p className="font-medium max-w-[1000px] text-dark-body-color/60 text-justify max-sm:pt-2 tracking-tight leading-6 max-sm:px-5 w-[50%]">
                  Our Mission is to transform public transportation in Rwanda through innovative software solutions, enhancing accessibility and creating a seamless, efficient transport network.
                  </p>
                  <div className="w-[50%] h-full min-h-[260px] bg-stone-50 flex rounded-md ">
                    <img
                      src="https://github-production-user-asset-6210df.s3.amazonaws.com/65622766/341439473-b1029449-e768-429f-bd6b-60b8410f1c7e.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20240620%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240620T135712Z&X-Amz-Expires=300&X-Amz-Signature=ae99d2780107d8b4128ce3abe8f6404ef801d97a79252cf10eba1e3513adaa22&X-Amz-SignedHeaders=host&actor_id=65622766&key_id=0&repo_id=806913834"
                      className="max-h-[300px] w-full object-cover"
                    />
                  </div>
                </div>

                {/* Values */}
                <div
                  className={`mt-2 ${
                    aboutUs === 3
                      ? "flex items-start justify-center gap-3 pt-10 relative"
                      : "hidden"
                  }`}
                >
                  <div className=" bg-stone-200/10 px-3 py-5 rounded-3xl w-[340px] min-h-[100px] flex">
                    <div className="bg-red-400/0 h-fit  p-3">
                      <HiOutlineLightBulb className="text-[20px]" />
                    </div>
                    <div className="flex flex-col">
                      <h1 className="tracking-tight font-bold text-dark-body-color text-[20px] pt-2 ">
                        Creativity
                      </h1>
                      <div className="tracking-tight font-medium leading-5 pr-3 pb-4 text-dark-body-color/80  ">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Rerum repudiandae, quaerat explicabo atque repellat
                      </div>
                    </div>
                  </div>

                  <div className=" bg-stone-200/10 px-3 py-5 rounded-3xl w-[340px] min-h-[100px] flex">
                    <div className="bg-red-400/0 h-fit  p-3">
                      <RiTeamLine className="text-[20px]" />
                    </div>
                    <div className="flex flex-col">
                      <h1 className="tracking-tight font-bold text-dark-body-color text-[20px] pt-2 ">
                        Teamwork
                      </h1>
                      <div className="tracking-tight font-medium leading-5 pr-3 pb-4 text-dark-body-color/80  ">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Rerum repudiandae, quaerat explicabo atque repellat
                      </div>
                    </div>
                  </div>

                  <div className=" bg-stone-200/10 px-3 py-5 rounded-3xl w-[340px] min-h-[100px] flex ">
                    <div className="bg-red-400/0 h-fit  p-3">
                      <GiEarthAfricaEurope className="text-[20px]" />
                    </div>
                    <div className="flex flex-col">
                      <h1 className="tracking-tight font-bold text-dark-body-color text-[20px] pt-2 ">
                        Pan-Africanism
                      </h1>
                      <div className="tracking-tight font-medium leading-5 pr-3 pb-4 text-dark-body-color/80  ">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Rerum repudiandae, quaerat explicabo atque repellat
                      </div>
                    </div>
                  </div>
                </div>

                {/* Problem */}
                <div
                  className={`mt-2 ${
                    aboutUs === 4
                      ? "flex justify-center items-start p-10 rounded-xl bg-stone-200/0 gap-10 mt-6 max-w-[1000px]"
                      : "hidden"
                  }`}
                >
                  <p className="font-medium max-w-[1000px] text-dark-body-color/60 text-justify max-sm:pt-2 tracking-tight leading-6 max-sm:px-5 w-[50%]">
                    In Rwanda, the public transport system is a critical
                    component of daily life, with over 40% of the population
                    relying on it for their commuting needs. Despite its
                    significant user base, the current technological
                    infrastructure is insufficient to effectively manage and
                    serve this demand. This inadequacy has led to excessive time
                    consumption and severe congestion at bus stations,
                    negatively impacting the efficiency of public transportation
                    services and the daily lives of its users. There is an
                    urgent need for an innovative solution that addresses these
                    challenges by enhancing the technological framework, thereby
                    improving the overall experience for public transport
                    commuters in Rwanda.
                  </p>
                  <div className="w-[50%] h-full min-h-[260px] bg-stone-50 flex rounded-md ">
                    <img
                      src="https://github-production-user-asset-6210df.s3.amazonaws.com/65622766/341439473-b1029449-e768-429f-bd6b-60b8410f1c7e.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20240620%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240620T135712Z&X-Amz-Expires=300&X-Amz-Signature=ae99d2780107d8b4128ce3abe8f6404ef801d97a79252cf10eba1e3513adaa22&X-Amz-SignedHeaders=host&actor_id=65622766&key_id=0&repo_id=806913834"
                      className="max-h-[300px] w-full object-cover"
                    />
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>

        {/* separator */}
        {/* <div className="w-full max-w-[90%] border-b-[1px] border-stone-200 mb-2"></div> */}

        {/* Projects */}
        {/* <Reveal
            keyframes={customAnimation}
            duration={1200}
            cascade
            damping={0.05}
            triggerOnce
            className="w-full"
          >
            <div className="p-[1px] bg-gradient-to-b from-dark-body-color/40 to-transparent mt-10 w-full h-fit rounded-t-3xl max-w-[90%] mx-auto relative flex justify-center items-center flex-col">
              <div className="w-full h-full bg-white rounded-t-3xl p-10 max-sm:pb-16 flex justify-center items-start flex-col">
                <div className="pointer-events-none absolute top-[-25px] left-[40px] h-[50px] w-[50px] rounded-full border-[1px] border-dark-body-color/40 text-dark-body-color bg-white font-bold text-xl flex justify-center items-center ">
                  {Projects.CurrentProject.ProjectNumber}
                </div>
                <h1 className="text-[40px] max-w-[500px] leading-[47px] font-bold tracking-tighter text-center capitalize">
                  {Projects.CurrentProject.ProjectName}
                </h1>
                <p className="font-medium max-w-[400px] text-base text-left pt-3 tracking-tight leading-5">
                  {Projects.CurrentProject.ProjectDescription}
                </p>
                <p className="absolute sm:top-3 max-sm:bottom-3 pointer-events-none right-3 bg-dark-body-color text-text-light-color rounded-full px-4 py-2 font-medium max-w-[400px] text-sm tracking-tight leading-5">
                  {Projects.CurrentProject.TimeLeft}
                </p>
              </div>
            </div>
          </Reveal> */}

        {/* Our Solution */}
        <div className="w-full h-[100vh] scroll-m-10 flex items-center justify-center max-sm:px-5 sticky top-0">
          <Fade>
            <h1 className="text-[70px] max-w-[500px] leading-[67px] font-bold tracking-tighter text-center  ">
              Introducing...
            </h1>
          </Fade>
        </div>

        <div
          id="Projects"
          className=" w-full h-fit scroll-m-20 pt-10 flex flex-col items-center justify-start relative bg-white/95 backdrop-blur-xl z-10"
        >
          <div className="h-full absolute top-0 left-[-300px] w-[600px] rounded-[50%] bg-gradient-to-b from-stone-100 to-white blur-md "></div>
          <div className="h-full absolute top-0 right-[-300px] w-[600px] rounded-[50%] bg-gradient-to-b from-stone-100 to-white blur-md "></div>

          <div className=" flex flex-col items-center justify-start  max-sm:px-2">
            <Reveal
              keyframes={customAnimation}
              duration={1000}
              cascade
              damping={0.05}
              // triggerOnce
            >
              <h1 className="text-[50px] max-w-[500px] leading-[57px] text-[#399E5A] font-bold tracking-tighter text-center">
                {Projects.SectionTitle}
              </h1>
              <p className="font-medium max-w-[500px] text-dark-body-color/60 text-base text-center pt-3 tracking-tight leading-5">
                {Projects.SectionStatus}{" "}
                <span className=" text-[#399E5A] font-bold">
                  Get there fast!
                </span>
              </p>
              <button className="max-md:hidden font-medium mt-4 cursor-pointer bg-[#399E5A] text-light-body-color transition active:scale-95 text-sm py-2 px-5 rounded-full ">
                Live Demo
              </button>
              <img
                src={sample}
                className="Project-Image mt-10 h-fit w-full max-w-[78%] mx-auto  object-cover rounded-t-3xl bg-stone-300/20 ring-1 ring-stone-100 px-1 pt-1"
              />
            </Reveal>
          </div>

          {/* Project countdown */}
        </div>

        {/* separator */}
        <div className="w-full max-w-[100%] border-b-[1px] border-stone-200 z-10 "></div>

        {/* Team */}
        {/* <div
          id="Aboutus"
          className="w-full h-fit py-16 scroll-m-14 flex flex-col items-center justify-start  max-sm:px-5 bg-white z-10"
        >
          <div className=" flex flex-col items-center justify-start">
            <Reveal
              keyframes={customAnimation}
              duration={1000}
              cascade
              damping={0.1}
              triggerOnce
            >
              
              <h1 className="text-[40px] max-w-[500px] leading-[47px] font-bold tracking-tighter text-center">
                
              {Challenges.SectionTitle}
              </h1>
              <p className="font-medium max-w-[500px] text-base text-center pt-3 tracking-tight leading-5">
                {Challenges.SectionDescription}
              </p>
            </Reveal>
          </div>
          <div className="w-full h-fit flex flex-wrap items-start justify-center gap-6 mt-8 px-14 ">
            
          </div>
        </div> */}
      </div>

      {/* separator */}
      <div className="w-full max-w-[90%] mx-auto border-b-[1px] border-stone-200 mb-2"></div>

      <div className="min-h-[300px]"></div>
      {/* footer */}
      <div className="flex text-xs text-text-dark-color capitalize font-medium items-center justify-between py-6 px-12 ">
        <div>SORWAZINI. &copy; 2024</div>
        <a href="https://www.alueducation.com">African Leadership university</a>
      </div>
    </div>
  );
}

export default Home;
