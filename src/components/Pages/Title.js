import React from "react";
import Typed from "react-typed";

function Title() {
  return (
    <div>
      <div className="w-full bg-[#061B37]" />
      <div className="mail_container fixed md:text-[12px] sm:text-[11px]">
        <div className="hidden sm:block">kpdrm88@gmail.com</div>
      </div>
      <div className="ml-[25%] pt-[38vh] pb-[48vh]">
        <div className="header_top">Hi, my name is</div>
        <div className="header_name md:text-7xl sm:text-5xl text-4xl">
          Sonu Junghyun
        </div>
        <Typed
          strings={["I am a software engineer."]}
          typeSpeed={40}
          backSpeed={20}
          loop
        />
      </div>
    </div>
  );
}

export default Title;
