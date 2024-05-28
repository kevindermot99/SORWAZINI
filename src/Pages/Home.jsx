import React from "react";

function Home() {
  return (
    <div className=" bg-text-light-color  dark:bg-dark-body-color h-[100vh] w-full text-text-dark-color dark:text-text-light-color flex flex-col   ">
      {/* Menu */}
      <div className=" h-fit w-full flex items-center justify-end gap-4 p-2"></div>

      {/* Content */}
      <div className="h-full  w-full flex items-center justify-center flex-col gap-7"></div>

      {/* Footer */}
      <div></div>
    </div>
  );
}

export default Home;
