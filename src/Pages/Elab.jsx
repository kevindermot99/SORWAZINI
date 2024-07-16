import React, { useEffect, useState } from "react";
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
            <p className="font-medium max-w-[500px] opacity-65 text-center pt-2 max-sm:pt-2 tracking-normal leading-5 max-sm:px-5 ">
              {Challenges.SectionDescription}
            </p>
          </Reveal>
        </div>

        {/* Challenges Grid */}
        <div className="w-full h-full flex flex-col justify-start items-center gap-16 py-10">
          <div className="w-full h-fit max-w-[1100px] py-6">
            <div className="flex items-start justify-between gap-10">
              <div className="w-[50%]">
                <h1 className="text-center font-bold text-[30px] tracking-tighter">
                  Challenge 1
                </h1>
                {/* Horizontal line beside challenge title */}
                <div className="relative flex items-center justify-center mx-6 my-2">
                  <span className="flex-grow border-t border-gray-400"></span>
                  <p className="font-medium text-meduim text-center border-gray-400 px-2">
                    Elevator Pitch
                  </p>
                  <span className="flex-grow border-t border-gray-400"></span>
                </div>
                <p className="font-medium max-w-[1000px] text-dark-body-color/80 text-justify max-sm:pt-2 tracking-tight leading-6 max-sm:px-5">
                  Here’s our elevator pitch introducing our names, country, interests, and a fun fact. We shared our passions, why we care about these issues, our goals for solving them, and the unique contributions each of us brings to the team.
                </p>
              </div>

              <div className="w-[50%] h-full min-h-[260px] bg-stone-50 flex aspect-video ">
                <iframe
                  src="https://www.youtube.com/embed/x1rH6-zX2CI"
                  title="E-Lab Elevator Pitch - challenge_01"
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
                <h1 className="text-center font-bold text-[30px] tracking-tighter">
                  Challenge 2
                </h1>
                {/* Horizontal line beside challenge title */}
                <div className="relative flex items-center justify-center mx-6 my-2">
                  <span className="flex-grow border-t border-gray-400"></span>
                  <p className="font-medium text-meduim text-center border-gray-400 px-2">
                    Discover Africa
                  </p>
                  <span className="flex-grow border-t border-gray-400"></span>
                </div>

                <p className="font-medium max-w-[1000px] text-dark-body-color/80 text-justify max-sm:pt-2 tracking-tight leading-6 max-sm:px-5">
                  For this challenge, Sorwazini uncovered and shared the story of the Land of a Thousand Hills, Rwanda, through our gossip television channel. We explored fascinating facts about Rwanda, addressed common misconceptions, highlighted its uniqueness, and discussed the challenges facing this great country.
                </p>
              </div>

              <div className="w-[50%] h-full min-h-[260px] bg-stone-50 flex aspect-video ">
                <iframe
                  src="https://www.youtube.com/embed/IllFryNP11E?si=sH_UIXbIW-Fk27Xq"
                  title="Discover Africa - challenge_02"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                  className="w-full aspect-video rounded-md "
                ></iframe>
              </div>
            </div>
          </div>
          <div className="w-full h-fit max-w-[1100px] py-4">
            <div className="flex items-start justify-between gap-10">
              <div className="w-[50%]">
                <h1 className="text-center font-bold text-[30px] tracking-tighter">
                  Challenge 3
                </h1>
                {/* Horizontal line beside challenge title */}
                <div className="relative flex items-center justify-center mx-6 my-2">
                  <span className="flex-grow border-t border-gray-400"></span>
                  <p className="font-medium text-meduim text-center border-gray-400 px-2">
                    Help Lab
                  </p>
                  <span className="flex-grow border-t border-gray-400"></span>
                </div>

                <p className="font-medium max-w-[1000px] text-dark-body-color/80 text-justify max-sm:pt-2 tracking-tight leading-6 max-sm:px-5">
                  Creating impact in the community is an essential part of E-lab. For Challenge 3, Sorwazini engaged in Help-Lab. In this challenge, we made a significant impact on the students at St. Rita Primary School by educating them in digital literacy and conducting extracurricular activities.
                </p>
              </div>

              <div className="w-[50%] h-full min-h-[260px] bg-stone-50 flex aspect-video ">
                <iframe
                  src="https://www.youtube.com/embed/mNN-hmmO8eA?si=q5pQSrAwHJTdG5fJ"
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
                <h1 className="text-center font-bold text-[30px] tracking-tighter">
                  Challenge 4
                </h1>
                <div className="relative flex items-center justify-center mx-6 my-2">
                  <span className="flex-grow border-t border-gray-400"></span>
                  <p className="font-medium text-meduim text-center border-gray-400 px-2">
                    Hunt for Tressure
                  </p>
                  <span className="flex-grow border-t border-gray-400"></span>
                </div>
                <p className="font-medium max-w-[1000px] text-dark-body-color/80 text-justify max-sm:pt-2 tracking-tight leading-6 max-sm:px-5">
                  Our quest for valuable resources led us to I.D.A. Technology, a company specializing in Information Development for Africa. We conducted a virtual interview with CTO Mr. Telesphore Tuganimana, exploring their solutions and alignment with our goals. Here, we highlight key moments from the interview and reflect on how our findings deepen our understanding of the challenges we aim to address.
                </p>
              </div>

              <div className="w-[50%] h-full min-h-[260px] bg-stone-50 flex aspect-video ">
                <iframe
                  src="https://www.youtube.com/embed/BvloPw-WFYM?si=aWFVyPDY6boD0Ku2"
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
                <h1 className="text-center font-bold text-[30px] tracking-tighter">
                  Challenge 5
                </h1>
                {/* Horizontal line beside challenge title */}
                <div className="relative flex items-center justify-center mx-6 my-2">
                  <span className="flex-grow border-t border-gray-400"></span>
                  <p className="font-medium text-meduim text-center border-gray-400 px-2">
                    Mission Voyage
                  </p>
                  <span className="flex-grow border-t border-gray-400"></span>
                  </div>
                  <p className="font-medium max-w-[1000px] text-dark-body-color/80 text-justify max-sm:pt-2 tracking-tight leading-6 max-sm:px-5">
                    In this challenge, we assumed a $10,000 grant was available, and we developed a compelling proposal and application to secure the funding for our project. The video briefly introduces us and describes the situation we're tackling, our mission and problem statement, a research analysis, our project idea, its impact, and why we deserve the grant.
                  </p>
                </div>

                <div className="w-[50%] h-full min-h-[260px] bg-stone-50 flex aspect-video ">
                  <iframe
                    src="https://www.youtube.com/embed/z07mBAV7Nrg?si=VVK8Ib6RuZwFNDK2"
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
            {/* <div className="w-full h-fit max-w-[1100px] py-6">
            <div className="flex flex-row-reverse items-start justify-between gap-10">
              <div className="w-[50%]">
                <h1 className="text-center font-bold text-[30px] tracking-tighter">
                  Challenge 1
                </h1>
                <p className="font-medium text-base text-center text-dark-body-color/60 pt-1 pb-2 tracking-tight ">
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
          </div> */}
          </div>
        </div>

        {/* footer */}
        <Footer />
      </div>
      );
}

      export default Elab;
