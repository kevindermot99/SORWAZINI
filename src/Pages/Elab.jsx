import React, { useState } from "react";
import "boxicons/css/boxicons.min.css";
import { Link, useLocation } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";
import { Contacts, Challenges, Members, SORWAZINI } from "../Content/Content";
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
    <div className=" bg-light-body-color min-h-[100vh] pt-16 w-full text-text-dark-color flex flex-col relative overflow-x-clip  ">

      {/* Menu */}
      <Menu />

      {/* Body */}
      <div
        id="Challenges"
        className="h-full scroll-mt-24 max-sm:mt-[50px] w-full flex items-center relative justify-start flex-col"
      >
        {/* Hero section */}
        <div className="min-h-[300px] w-full h-full flex flex-col items-center justify-center">

          <Reveal
            keyframes={customAnimation}
            duration={1000}
            cascade
            damping={0.05}
            triggerOnce
          >
            <h1 className="text-center max-w-[900px]  font-bold text-[60px] max-sm:text-[50px] leading-[70px] max-sm:leading-[55px] tracking-tighter">
              {Challenges.SectionTitle}
            </h1>
            <p className="font-medium max-w-[500px] text-sm opacity-65 text-center pt-2 max-sm:pt-2 tracking-normal leading-5 max-sm:px-5 ">
              {Challenges.SectionDescription}
            </p>
          </Reveal>
        </div>

        {/* Challenges Grid */}
        <div className="w-full h-full flex flex-col justify-start items-center gap-16 py-10">
          <div className="w-full h-fit max-w-[1100px] py-6">
            <div className="flex items-start justify-between gap-10">
              <div className="w-[50%]">
                <h1 className="text-left font-bold text-[30px] tracking-tighter">
                  Challenge 1
                </h1>
                <p className="font-medium text-sm text-left text-dark-body-color/60 pt-1 pb-2 tracking-tight ">
                  May 30 2024
                </p>
                <p className="font-medium max-w-[1000px] text-dark-body-color/80 text-justify max-sm:pt-2 tracking-tight leading-6 max-sm:px-5">
                  In Rwanda, the public transport system is a critical component
                  of daily life, with over 40% of the population relying on it
                  for their commuting needs. Despite its significant user base,
                  the current technological infrastructure is insufficient to
                  effectively manage and serve this demand. This inadequacy has
                  led to excessive
                </p>
              </div>

              <div className="w-[50%] h-full min-h-[260px] bg-stone-50 flex aspect-video ">
                <iframe
                  src="https://www.youtube.com/embed/x1rH6-zX2CI"
                  title="E-Lab Elevator Pitch #challenge_01"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                  className="w-full aspect-video rounded-md "
                ></iframe>
              </div>
            </div>
          </div>
          <div className="w-full h-fit max-w-[1100px] py-6">
            <div className="flex flex-row-reverse items-start justify-between gap-10">
              <div className="w-[50%]">
                <h1 className="text-left font-bold text-[30px] tracking-tighter">
                  Challenge 1
                </h1>
                <p className="font-medium text-sm text-left text-dark-body-color/60 pt-1 pb-2 tracking-tight ">
                  May 30 2024
                </p>
                <p className="font-medium max-w-[1000px] text-dark-body-color/80 text-justify max-sm:pt-2 tracking-tight leading-6 max-sm:px-5">
                  In Rwanda, the public transport system is a critical component
                  of daily life, with over 40% of the population relying on it
                  for their commuting needs. Despite its significant user base,
                  the current technological infrastructure is insufficient to
                  effectively manage and serve this demand. This inadequacy has
                  led to excessive
                </p>
              </div>

              <div className="w-[50%] h-full min-h-[260px] bg-stone-50 flex aspect-video ">
                <iframe
                  src="https://www.youtube.com/embed/x1rH6-zX2CI"
                  title="E-Lab Elevator Pitch #challenge_01"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                  className="w-full aspect-video rounded-md "
                ></iframe>
              </div>
            </div>
          </div>
          <div className="w-full h-fit max-w-[1100px] py-6">
            <div className="flex items-start justify-between gap-10">
              <div className="w-[50%]">
                <h1 className="text-left font-bold text-[30px] tracking-tighter">
                  Challenge 1
                </h1>
                <p className="font-medium text-sm text-left text-dark-body-color/60 pt-1 pb-2 tracking-tight ">
                  May 30 2024
                </p>
                <p className="font-medium max-w-[1000px] text-dark-body-color/80 text-justify max-sm:pt-2 tracking-tight leading-6 max-sm:px-5">
                  In Rwanda, the public transport system is a critical component
                  of daily life, with over 40% of the population relying on it
                  for their commuting needs. Despite its significant user base,
                  the current technological infrastructure is insufficient to
                  effectively manage and serve this demand. This inadequacy has
                  led to excessive
                </p>
              </div>

              <div className="w-[50%] h-full min-h-[260px] bg-stone-50 flex aspect-video ">
                <iframe
                  src="https://www.youtube.com/embed/x1rH6-zX2CI"
                  title="E-Lab Elevator Pitch #challenge_01"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                  className="w-full aspect-video rounded-md "
                ></iframe>
              </div>
            </div>
          </div>
          <div className="w-full h-fit max-w-[1100px] py-6">
            <div className="flex flex-row-reverse items-start justify-between gap-10">
              <div className="w-[50%]">
                <h1 className="text-left font-bold text-[30px] tracking-tighter">
                  Challenge 1
                </h1>
                <p className="font-medium text-sm text-left text-dark-body-color/60 pt-1 pb-2 tracking-tight ">
                  May 30 2024
                </p>
                <p className="font-medium max-w-[1000px] text-dark-body-color/80 text-justify max-sm:pt-2 tracking-tight leading-6 max-sm:px-5">
                  In Rwanda, the public transport system is a critical component
                  of daily life, with over 40% of the population relying on it
                  for their commuting needs. Despite its significant user base,
                  the current technological infrastructure is insufficient to
                  effectively manage and serve this demand. This inadequacy has
                  led to excessive
                </p>
              </div>

              <div className="w-[50%] h-full min-h-[260px] bg-stone-50 flex aspect-video ">
                <iframe
                  src="https://www.youtube.com/embed/x1rH6-zX2CI"
                  title="E-Lab Elevator Pitch #challenge_01"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                  className="w-full aspect-video rounded-md "
                ></iframe>
              </div>
            </div>
          </div>
          <div className="w-full h-fit max-w-[1100px] py-6">
            <div className="flex items-start justify-between gap-10">
              <div className="w-[50%]">
                <h1 className="text-left font-bold text-[30px] tracking-tighter">
                  Challenge 1
                </h1>
                <p className="font-medium text-sm text-left text-dark-body-color/60 pt-1 pb-2 tracking-tight ">
                  May 30 2024
                </p>
                <p className="font-medium max-w-[1000px] text-dark-body-color/80 text-justify max-sm:pt-2 tracking-tight leading-6 max-sm:px-5">
                  In Rwanda, the public transport system is a critical component
                  of daily life, with over 40% of the population relying on it
                  for their commuting needs. Despite its significant user base,
                  the current technological infrastructure is insufficient to
                  effectively manage and serve this demand. This inadequacy has
                  led to excessive
                </p>
              </div>

              <div className="w-[50%] h-full min-h-[260px] bg-stone-50 flex aspect-video ">
                <iframe
                  src="https://www.youtube.com/embed/x1rH6-zX2CI"
                  title="E-Lab Elevator Pitch #challenge_01"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                  className="w-full aspect-video rounded-md "
                ></iframe>
              </div>
            </div>
          </div>
          <div className="w-full h-fit max-w-[1100px] py-6">
            <div className="flex flex-row-reverse items-start justify-between gap-10">
              <div className="w-[50%]">
                <h1 className="text-left font-bold text-[30px] tracking-tighter">
                  Challenge 1
                </h1>
                <p className="font-medium text-sm text-left text-dark-body-color/60 pt-1 pb-2 tracking-tight ">
                  May 30 2024
                </p>
                <p className="font-medium max-w-[1000px] text-dark-body-color/80 text-justify max-sm:pt-2 tracking-tight leading-6 max-sm:px-5">
                  In Rwanda, the public transport system is a critical component
                  of daily life, with over 40% of the population relying on it
                  for their commuting needs. Despite its significant user base,
                  the current technological infrastructure is insufficient to
                  effectively manage and serve this demand. This inadequacy has
                  led to excessive
                </p>
              </div>

              <div className="w-[50%] h-full min-h-[260px] bg-stone-50 flex aspect-video ">
                <iframe
                  src="https://www.youtube.com/embed/x1rH6-zX2CI"
                  title="E-Lab Elevator Pitch #challenge_01"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                  className="w-full aspect-video rounded-md "
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* footer */}
      <Footer />
    </div>
  );
}

export default Elab;
