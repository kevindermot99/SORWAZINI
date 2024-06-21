import React, { useState } from "react";
import "boxicons/css/boxicons.min.css";
import { Link, useLocation } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";
import { Contacts, HeroText, Members, SORWAZINI } from "../Content/Content";
import Reveal from "react-awesome-reveal";
import { keyframes } from "@emotion/react";
import Menu from "../Components/Menu";
import Footer from "../Components/Footer";

function Elab() {
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

      {/* Menu */}
      <Menu />

      {/* Body */}
      <div
        id="Challenges"
        className="h-full scroll-mt-24 max-sm:mt-[50px] w-full flex items-center relative justify-start flex-col"
      ></div>

      {/* footer */}
      <Footer />
    </div>
  );
}

export default Elab;
