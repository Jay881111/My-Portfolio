import React from "react";
import "./Profile.css";

function ContactMe() {
  return (
    <div
      className="bg-[#061B37] w-full mt-[50vh] h-full pb-[50vh]"
      id="contactme"
    >
      <div className="text-gray-500 text-center mt-[30vh]">
        <span className="tag_number">04.</span>
        <span className="md:text-[29px] sm:text-[20px] text-[17px] font-bold text-white">
          Contact Me
        </span>
        <div className="text-gray-400 md:text-[16px] text-[13px]">
          <div>
            <b>E-mail</b>: kpdrm88@gmail.com
          </div>
          <div>
            <b>Mobile</b>: + 82-10-6368-9553
          </div>
          <div>
            <b>GitHub</b>: https://github.com/Jay881111
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
