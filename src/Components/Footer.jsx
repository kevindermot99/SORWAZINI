import React from "react";
import { Contacts } from "../Content/Content";
import SorwaziniLogo from "../assets/SORWAZINI-Logo-1.png";
import { FaYoutube } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { FaGithub } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-stone-100 z-10">
      <div className="max-w-screen-xl px-4 pt-16 pb-6 mx-auto sm:px-6 lg:px-8 lg:pt-14">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="text-dark-body-color">
            <div className="flex justify-center text-teal-300 sm:justify-start">
              <img src={SorwaziniLogo} className="w-[230px]" />
            </div>

            <p className="max-w-md mx-auto mt-5 leading-snug text-sm text-center sm:max-w-xs sm:mx-0 sm:text-left">
              We are Pan-African Techpreneurs united by a shared mission to transform Rwanda's public transport system.
            </p>
            <div className="mt-5 w-full flex items-start justify-start gap-3">
              <a
                href={"https://www.instagram.com/sorwazini7/"}
                target="_blank"
                className="text-xl opacity-50 hover:opacity-90"
                title="Instagram"
              >
                <RiInstagramFill />
              </a>
              <a
                href={"https://www.youtube.com/@SORWAZINI_ALU"}
                target="_blank"
                className="text-xl opacity-50 hover:opacity-90"
                title="YouTube"
              >
                <FaYoutube />
              </a>
              <a
                href={`mailto:${Contacts.Gmail}`}
                target="_blank"
                className="text-xl opacity-50 hover:opacity-90"
                title="Gmail"
              >
                <BiLogoGmail />
              </a>
              <a
                href={"https://github.com/kevindermot99/SORWAZINI"}
                target="_blank"
                className="text-xl opacity-50 hover:opacity-90"
                title="Github"
              >
                <FaGithub />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 md:grid-cols-3">
            {/* <div className="text-center sm:text-left">
              <p className="text-lg font-medium ">About Us</p>

              <nav className="mt-3">
                <ul className="space-y-4 text-sm">
                  <li>
                    <a
                      className=""
                      href="/"
                    >
                      Who we are
                    </a>
                  </li>
                  <li>
                    <a
                      className=""
                      href="/"
                    >
                      Our values
                    </a>
                  </li>
                  <li>
                    <a
                      className=""
                      href="/"
                    >
                      Our Mission
                    </a>
                  </li>
                  <li>
                    <a
                      className=""
                      href="/"
                    >
                      Problem statement
                    </a>
                  </li>
                </ul>
              </nav>
            </div> */}

            <div className="text-center sm:text-left">
              <p className="text-lg font-medium ">Quick Links</p>

              <nav className="mt-3">
                <ul className="space-y-4 text-sm">
                  <li>
                    <Link className="" to="/">
                      home
                    </Link>
                  </li>
                  <li>
                    <Link className="" to="/elab">
                      E-lab Challenges
                    </Link>
                  </li>
                  <li>
                    <Link className="" to="/gallery">
                      Gallery
                    </Link>
                  </li>
                  <li>
                    <Link className="" to="/product">
                      Our product
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="text-center sm:text-left">
              <p className="text-lg font-medium ">Projects</p>

              <nav className="mt-3">
                <ul className="space-y-4 text-sm">
                  <li>
                    <Link className="" to="/product">
                      Gerayo
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="text-center sm:text-left">
              <p className="text-lg font-medium">Contact Us</p>

              <ul className="mt-3 space-y-4 text-sm">
                <li>
                  <a
                    className="flex items-center justify-center sm:justify-start gap-1.5 group"
                    href={`mailto:${Contacts.Gmail}`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>

                    <span className="">{Contacts.Gmail}</span>
                  </a>
                </li>

                <li>
                  <span className="flex items-center justify-center sm:justify-start gap-1.5 group">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5  shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>

                    <span className="">{Contacts.WhatsAppNumber}</span>
                  </span>
                </li>

                <li className="flex items-start justify-center gap-1.5 sm:justify-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>

                  <address className="-mt-0.5 not-italic ">
                    Kigali, Rwanda
                  </address>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-6 mt-12 border-t border-stone-300">
          <div className="text-center sm:flex sm:justify-between sm:text-left">
            <p className="text-xs ">
              <span className="block sm:inline">All rights reserved.</span>
            </p>

            <p className="mt-4 text-xs sm:order-first sm:mt-0">
              &copy; 2024 SORWAZINI.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
