import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";

function Home() {
  const [showContact, setShowContact] = useState(false);
  const [copyButtonText, SetCopyButtonText] = useState("Copy");
  const location = useLocation();

  const handleLinkCopy = () => {
    navigator.clipboard.writeText(location.pathname).then(() => {
      SetCopyButtonText("Copied!");
      setTimeout(() => {
        SetCopyButtonText("Copy");
      }, 1000);
    });
  };

  return (
    <div className=" bg-light-body-color h-[100vh] w-full text-text-dark-color flex flex-col relative ">
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
          <div className="py-4 flex gap-7 items-start justify-start flex-wrap">
            <Link
              to={"/"}
              className=" w-fit h-fit flex items-center justify-start flex-col gap-1 cursor-pointer"
            >
              <div className="p-2 w-fit bg-dark-body-color text-text-light-color rounded-full text-[30px]">
                <FaWhatsapp />
              </div>
              <p className="font-medium text-sm ">WhatsApp</p>
            </Link>
            <Link
              to={"/"}
              className=" w-fit h-fit flex items-center justify-start flex-col gap-1 cursor-pointer"
            >
              <div className="p-2 w-fit bg-dark-body-color text-text-light-color rounded-full text-[30px]">
                <IoLogoInstagram />
              </div>
              <p className="font-medium text-sm ">Instagram</p>
            </Link>
            <Link
              to={"/"}
              className=" w-fit h-fit flex items-center justify-start flex-col gap-1 cursor-pointer"
            >
              <div className="p-2 w-fit bg-dark-body-color text-text-light-color rounded-full text-[30px]">
                <MdOutlineEmail />
              </div>
              <p className="font-medium text-sm ">Gmail</p>
            </Link>
          </div>
          <div className="w-full h-full flex flex-col ">
            <h1 className=" pt-5 font-medium text-base">Share Link </h1>
            <input
              type="text"
              readOnly
              value={location.pathname}
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

      {/* Menu */}
      <div className=" h-fit w-full flex items-center border-light-body-color/50 backdrop-blur-md justify-between gap-4 py-5 px-[24px] sticky top-0">
        <Link
          className={`font-Kanit font-medium text-2xl flex flex-col leading-6 text-dark-body-color`}
        >
          SORWAZINI
          <span className="font-medium text-sm opacity-65">
            E-lab Think Tank
          </span>
        </Link>

        <span className="space-x-8  ">
          <Link
            className={`font-medium text-sm text-dark-body-color px-1 py-2 transition hover:border-b-[2px] border-dark-body-color`}
          >
            Members
          </Link>
          <Link
            className={`font-medium text-sm text-dark-body-color px-1 py-2 transition hover:border-b-[2px] border-dark-body-color`}
          >
            Projects
          </Link>
          <Link
            className={`font-medium text-sm text-dark-body-color px-1 py-2 transition hover:border-b-[2px] border-dark-body-color`}
          >
            Our Mission
          </Link>
          <Link
            className={`font-medium text-sm text-dark-body-color px-1 py-2 transition hover:border-b-[2px] border-dark-body-color`}
          >
            About Us
          </Link>
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
            className="font-medium cursor-pointer bg-dark-body-color text-light-body-color transition active:scale-95 text-sm py-2 px-5 rounded-full "
          >
            Contact us
          </button>
        </span>
      </div>

      {/* Content */}
      <div className="h-full  w-full flex items-center justify-start flex-col px-5">
        {/* Hero */}
        <div className="w-full h-fit py-16 flex flex-col items-center justify-center">
          <h1 className="text-center max-w-[900px] font-bold text-[70px] leading-[80px] tracking-tighter">
            Building Tomorrow's Solutions Today
          </h1>
          <p className="font-medium max-w-[500px] text-center py-5 tracking-tight leading-5 ">
            We strive to create innovative solutions today, shaping a better and
            brighter future for all.
          </p>
          <div className="w-full h-fit flex items-start justify-center gap-3 max-w-[1200px] mt-3">
            <div className="w-[70px] aspect-square bg-stone-100 rounded-full cursor-pointer hover:scale-110 transition hover:ring-2 ring-dark-body-color relative group">
              <img src="" alt="" />
              <div className="absolute top-[110%] left-[-50%] right-[-50%] mx-auto w-fit h-fit px-1 py-1 rounded-xl opacity-0 pointer-events-none group-hover:opacity-100 transition duration-500 text-sm translate-y-[-10px] group-hover:translate-y-0">
                Kevin
              </div>
            </div>
            <div className="w-[70px] aspect-square bg-stone-100 rounded-full cursor-pointer hover:scale-110 transition hover:ring-2 ring-dark-body-color relative group">
              <img src="" alt="" />
              <div className="absolute top-[110%] left-[-50%] right-[-50%] mx-auto w-fit h-fit px-1 py-1 rounded-xl opacity-0 pointer-events-none group-hover:opacity-100 transition duration-500 text-sm translate-y-[-10px] group-hover:translate-y-0">
                Kevin
              </div>
            </div>
            <div className="w-[70px] aspect-square bg-stone-100 rounded-full cursor-pointer hover:scale-110 transition hover:ring-2 ring-dark-body-color relative group">
              <img src="" alt="" />
              <div className="absolute top-[110%] left-[-50%] right-[-50%] mx-auto w-fit h-fit px-1 py-1 rounded-xl opacity-0 pointer-events-none group-hover:opacity-100 transition duration-500 text-sm translate-y-[-10px] group-hover:translate-y-0">
                Kevin
              </div>
            </div>
            <div className="w-[70px] aspect-square bg-stone-100 rounded-full cursor-pointer hover:scale-110 transition hover:ring-2 ring-dark-body-color relative group">
              <img src="" alt="" />
              <div className="absolute top-[110%] left-[-50%] right-[-50%] mx-auto w-fit h-fit px-1 py-1 rounded-xl opacity-0 pointer-events-none group-hover:opacity-100 transition duration-500 text-sm translate-y-[-10px] group-hover:translate-y-0">
                Kevin
              </div>
            </div>
            <div className="w-[70px] aspect-square bg-stone-100 rounded-full cursor-pointer hover:scale-110 transition hover:ring-2 ring-dark-body-color relative group">
              <img src="" alt="" />
              <div className="absolute top-[110%] left-[-50%] right-[-50%] mx-auto w-fit h-fit px-1 py-1 rounded-xl opacity-0 pointer-events-none group-hover:opacity-100 transition duration-500 text-sm translate-y-[-10px] group-hover:translate-y-0">
                Kevin
              </div>
            </div>
            <div className="w-[70px] aspect-square bg-stone-100 rounded-full cursor-pointer hover:scale-110 transition hover:ring-2 ring-dark-body-color relative group">
              <img src="" alt="" />
              <div className="absolute top-[110%] left-[-50%] right-[-50%] mx-auto w-fit h-fit px-1 py-1 rounded-xl opacity-0 pointer-events-none group-hover:opacity-100 transition duration-500 text-sm translate-y-[-10px] group-hover:translate-y-0">
                Kevin
              </div>
            </div>
            <div className="w-[70px] aspect-square bg-stone-100 rounded-full cursor-pointer hover:scale-110 transition hover:ring-2 ring-dark-body-color relative group">
              <img src="" alt="" />
              <div className="absolute top-[110%] left-[-50%] right-[-50%] mx-auto w-fit h-fit px-1 py-1 rounded-xl opacity-0 pointer-events-none group-hover:opacity-100 transition duration-500 text-sm translate-y-[-10px] group-hover:translate-y-0">
                Kevin
              </div>
            </div>
          </div>
        </div>

        {/*  */}
      </div>

      {/* Footer */}
      <div></div>
    </div>
  );
}

export default Home;
