import React, { useState } from "react";
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
  Mission,
  Values,
  AboutUs,
} from "../Content/Content";
import Reveal from "react-awesome-reveal";
import { keyframes } from "@emotion/react";
import { Fade } from "react-awesome-reveal";
import SorwaziniLogo from '../assets/SORWAZINI-Logo-1.png'

function Home() {
  const [showContact, setShowContact] = useState(false);
  const [copyButtonText, SetCopyButtonText] = useState("Copy");
  const location = useLocation();

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
      <div className=" h-fit w-full flex items-center bg-light-body-color/70 backdrop-blur-md justify-between gap-4 py-5 px-[24px] fixed top-0 z-20">
        <Link
          className={`font-Kanit font-medium text-2xl flex flex-col leading-6 text-dark-body-color justify-center items-start `}
        >
          <img src={SorwaziniLogo} className="w-[180px]" />
          <p className="text-sm pt-1 tracking-wide font-bold text-dark-body-color">E-lab Think Tank</p>
        </Link>

        <span className="space-x-8 max-md:hidden  ">
          <a
            href="#Home"
            className={`font-medium text-sm text-dark-body-color px-1 py-2 transition hover:border-b-[2px] border-dark-body-color`}
          >
            Home
          </a>
          <a
            href="#Projects"
            className={`font-medium text-sm text-dark-body-color px-1 py-2 transition hover:border-b-[2px] border-dark-body-color`}
          >
            Projects
          </a>
          <a
            href="#Mission"
            className={`font-medium text-sm text-dark-body-color px-1 py-2 transition hover:border-b-[2px] border-dark-body-color`}
          >
            Our Mission
          </a>
          <a
            href="#Aboutus"
            className={`font-medium text-sm text-dark-body-color px-1 py-2 transition hover:border-b-[2px] border-dark-body-color`}
          >
            About Us
          </a>
          <a
            href="#Aboutus"
            className={`font-medium text-sm text-dark-body-color px-1 py-2 transition hover:border-b-[2px] border-dark-body-color`}
          >
            Gallery
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
        className="h-full mt-[100px] scroll-m-20 max-sm:mt-[50px] w-full flex items-center relative justify-start flex-col"
      >
        {/* bubbles */}
        {/* <div className="absolute top-0 left-0 w-full h-full max-h-[500px]  ">
            <div className="absolute top-[200px] right-20 h-10 w-3 bg-black/80 rotate-6  "></div>
        </div> */}
        {/* Hero */}
        <div className="w-full h-fit py-16 flex flex-col items-center justify-center">
          <Reveal
            keyframes={customAnimation}
            duration={1000}
            cascade
            damping={0.05}
            triggerOnce
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
                    triggerOnce
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
                            className="w-[70px] aspect-square bg-stone-200 rounded-full cursor-pointer hover:scale-110 transition hover:ring-2 ring-dark-body-color relative group"
                          >
                            <img src="" alt="" />
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
                            className="w-[70px] aspect-square bg-stone-200 rounded-full cursor-pointer hover:scale-110 transition hover:ring-2 ring-dark-body-color relative group"
                          >
                            <img src="" alt="" />
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
                            className="w-[70px] aspect-square bg-stone-200 rounded-full cursor-pointer hover:scale-110 transition hover:ring-2 ring-dark-body-color relative group"
                          >
                            <img src="" alt="" />
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
                            className="w-[70px] aspect-square bg-stone-200 rounded-full cursor-pointer hover:scale-110 transition hover:ring-2 ring-dark-body-color relative group"
                          >
                            <img src="" alt="" />
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
            <div className="flex items-center gap-8 text-dark-body-color pt-3 text-sm font-medium px-4 max-sm:gap-0 max-sm:px-8 ">
              <Reveal
                keyframes={customAnimation}
                duration={1000}
                cascade
                damping={0.05}
                triggerOnce
              >
                <h1>
                  <strong>SO: </strong>🇿🇦 South Africa
                </h1>
                <h1>
                  <strong>RWA: </strong>🇷🇼 Rwanda
                </h1>
                <h1>
                  <strong>ZI: </strong>🇿🇼 Zimbambwe
                </h1>
                <h1>
                  <strong>NI: </strong>🇳🇬 Nigeria
                </h1>
              </Reveal>
            </div>
          </div>
        </div>

        {/* separator */}
        <div className="w-full max-w-[90%] border-b-[1px] border-stone-200 mb-2 "></div>

        {/* Our Mission */}
        <div
          id="Mission"
          className="w-full h-fit min-h-[700px] pt-16 scroll-m-10 flex flex-col items-start justify-start relative  max-sm:px-5"
        >
          <div class=" h-full w-full flex justify-start items-center flex-col ">
            <div className=" flex flex-col items-center justify-start ">
              <Reveal
                keyframes={customAnimation}
                duration={1000}
                cascade
                damping={0.05}
                triggerOnce
              >
                <h3 className="uppercase font-bold text-xs pb-2 ">
                  {Mission.SectionName}
                </h3>
                <h1 className=" text-[40px] max-w-[500px] leading-[47px] font-bold tracking-tighter text-center">
                  {Mission.SectionTitle}
                </h1>
                
              </Reveal>
              div
            </div>
          </div>

          <div className="w-full h-full items-center justify-center py-16 grid grid-cols-2">
              
          </div>
        </div>

        {/* separator */}
        <div className="w-full max-w-[90%] border-b-[1px] border-stone-200 mb-2"></div>

        {/* Projects */}
        <div
          id="Projects"
          className="w-full h-fit py-16 scroll-m-14  flex flex-col items-center justify-start"
        >
          <div className=" flex flex-col items-center justify-start  max-sm:px-2">
            <Reveal
              keyframes={customAnimation}
              duration={1000}
              cascade
              damping={0.05}
              triggerOnce
            >
              <h3 className="uppercase font-bold text-xs pb-3 ">
                {Projects.SectionName}
              </h3>
              <h1 className="text-[40px] max-w-[500px] leading-[47px] font-bold tracking-tighter text-center">
                {Projects.SectionTitle}
              </h1>
              <p className="font-medium max-w-[400px] text-base text-center pt-3 tracking-tight leading-5">
                {Projects.SectionStatus}
              </p>
            </Reveal>
          </div>

          {/* Project countdown */}

          <Reveal
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
          </Reveal>
        </div>
        

        {/* separator */}
        <div className="w-full max-w-[90%] border-b-[1px] border-stone-200 mb-2"></div>

        {/* About us */}
        <div
          id="Aboutus"
          className="w-full h-fit py-16 scroll-m-14 flex flex-col items-center justify-start  max-sm:px-5"
        >
          <div className=" flex flex-col items-center justify-start">
            <Reveal
              keyframes={customAnimation}
              duration={1000}
              cascade
              damping={0.1}
              triggerOnce
            >
              <h3 className="uppercase font-bold text-xs pb-3 ">
                {AboutUs.SectionName}
              </h3>
              <h1 className="text-[40px] max-w-[500px] leading-[47px] font-bold tracking-tighter text-center">
                {AboutUs.SectionTitle}
              </h1>
              <p className="font-medium max-w-[400px] text-base text-center pt-3 tracking-tight leading-5">
                {AboutUs.SectionDescription}
              </p>
            </Reveal>
          </div>
          <div className="w-full h-fit flex flex-wrap items-start justify-center gap-6 mt-8 px-14 ">
            <Reveal
              keyframes={customAnimation}
              duration={1000}
              cascade
              damping={0.05}
              triggerOnce
            >
              {Members.map((member, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-start px-10"
                >
                  <img
                    src={``}
                    className="h-32 aspect-square rounded-full bg-stone-200"
                  />
                  <h1 className="font-bold max-w-[400px] text-lg text-center pt-3 tracking-tight leading-5">
                    {member.name}
                  </h1>
                  <p className="font-normal max-w-[230px] text-base text-center pt-1 tracking-tight leading-5">
                    {member.Role}
                  </p>
                </div>
              ))}
            </Reveal>
          </div>
        </div>
      </div>

      {/* separator */}
      <div className="w-full max-w-[90%] mx-auto border-b-[1px] border-stone-200 mb-2"></div>

      {/* footer */}
      <div className="flex text-xs text-text-dark-color capitalize font-medium items-center justify-between py-6 px-12 ">
        <div>SORWAZINI. &copy; 2024</div>
        <a href="https://www.alueducation.com">African Leadership university</a>
      </div>
    </div>
  );
}

export default Home;
