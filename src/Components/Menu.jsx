import React from 'react'
import SorwaziniLogo from "../assets/SORWAZINI-Logo-1.png";
import { useLocation } from "react-router-dom";
import { HashLink as Link } from 'react-router-hash-link';



function Menu() {
  return (
    <div className=" h-fit w-full flex items-center  justify-between gap-4 py-4 px-[24px] top-0 z-20">
        <Link
        to={`/`}
          className={`font-Kanit font-medium text-2xl flex flex-col leading-6 text-dark-body-color justify-center items-start `}
        >
          <img src={SorwaziniLogo} className="w-[180px]" />
          <p className="text-sm pt-1 tracking-wide font-bold text-dark-body-color">
            E-lab Think Tank
          </p>
        </Link>

        <span className="space-x-6 max-md:hidden  ">
          <Link
            to="/#Home"
            className={`font-medium text-sm text-dark-body-color px-1 py-2 transition hover:border-b-[2px] border-dark-body-color`}
          >
            Home
          </Link>
          <Link
            to="/#who"
            className={`font-medium text-sm text-dark-body-color px-1 py-2 transition hover:border-b-[2px] border-dark-body-color`}
          >
            Who we are
          </Link>
          <Link
            to={`/elab`}
            className={`font-medium text-sm text-dark-body-color px-1 py-2 transition hover:border-b-[2px] border-dark-body-color`}
          >
            E-Lab Challenges
          </Link>
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
  )
}

export default Menu