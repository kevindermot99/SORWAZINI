import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className=" bg-light-body-color dark:bg-dark-body-color h-[100vh] w-full text-text-dark-color dark:text-text-light-color flex flex-col relative ">
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
          <Link className={`font-medium text-sm text-dark-body-color `}>
            Members
          </Link>
          <Link className={`font-medium text-sm text-dark-body-color `}>
            Projects
          </Link>
          <Link className={`font-medium text-sm text-dark-body-color `}>
            Our Mission
          </Link>
          <Link className={`font-medium text-sm text-dark-body-color `}>
            About Us
          </Link>
        </span>
        <button className="font-medium cursor-pointer bg-dark-body-color text-light-body-color transition text-sm py-2 px-5 rounded-full ">
          Contact us
        </button>
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
              <div className="absolute top-[110%] left-[-50%] right-[-50%] mx-auto w-fit h-fit px-1 py-1 rounded-xl opacity-0 pointer-events-none group-hover:opacity-100 transition duration-500 text-sm translate-y-[-10px] group-hover:translate-y-0">Kevin</div>
            </div>
            <div className="w-[70px] aspect-square bg-stone-100 rounded-full cursor-pointer hover:scale-110 transition hover:ring-2 ring-dark-body-color relative group">
              <img src="" alt="" />
              <div className="absolute top-[110%] left-[-50%] right-[-50%] mx-auto w-fit h-fit px-1 py-1 rounded-xl opacity-0 pointer-events-none group-hover:opacity-100 transition duration-500 text-sm translate-y-[-10px] group-hover:translate-y-0">Kevin</div>
            </div>
            <div className="w-[70px] aspect-square bg-stone-100 rounded-full cursor-pointer hover:scale-110 transition hover:ring-2 ring-dark-body-color relative group">
              <img src="" alt="" />
              <div className="absolute top-[110%] left-[-50%] right-[-50%] mx-auto w-fit h-fit px-1 py-1 rounded-xl opacity-0 pointer-events-none group-hover:opacity-100 transition duration-500 text-sm translate-y-[-10px] group-hover:translate-y-0">Kevin</div>
            </div>
            <div className="w-[70px] aspect-square bg-stone-100 rounded-full cursor-pointer hover:scale-110 transition hover:ring-2 ring-dark-body-color relative group">
              <img src="" alt="" />
              <div className="absolute top-[110%] left-[-50%] right-[-50%] mx-auto w-fit h-fit px-1 py-1 rounded-xl opacity-0 pointer-events-none group-hover:opacity-100 transition duration-500 text-sm translate-y-[-10px] group-hover:translate-y-0">Kevin</div>
            </div>
            <div className="w-[70px] aspect-square bg-stone-100 rounded-full cursor-pointer hover:scale-110 transition hover:ring-2 ring-dark-body-color relative group">
              <img src="" alt="" />
              <div className="absolute top-[110%] left-[-50%] right-[-50%] mx-auto w-fit h-fit px-1 py-1 rounded-xl opacity-0 pointer-events-none group-hover:opacity-100 transition duration-500 text-sm translate-y-[-10px] group-hover:translate-y-0">Kevin</div>
            </div>
            <div className="w-[70px] aspect-square bg-stone-100 rounded-full cursor-pointer hover:scale-110 transition hover:ring-2 ring-dark-body-color relative group">
              <img src="" alt="" />
              <div className="absolute top-[110%] left-[-50%] right-[-50%] mx-auto w-fit h-fit px-1 py-1 rounded-xl opacity-0 pointer-events-none group-hover:opacity-100 transition duration-500 text-sm translate-y-[-10px] group-hover:translate-y-0">Kevin</div>
            </div>
            <div className="w-[70px] aspect-square bg-stone-100 rounded-full cursor-pointer hover:scale-110 transition hover:ring-2 ring-dark-body-color relative group">
              <img src="" alt="" />
              <div className="absolute top-[110%] left-[-50%] right-[-50%] mx-auto w-fit h-fit px-1 py-1 rounded-xl opacity-0 pointer-events-none group-hover:opacity-100 transition duration-500 text-sm translate-y-[-10px] group-hover:translate-y-0">Kevin</div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div></div>
    </div>
  );
}

export default Home;
