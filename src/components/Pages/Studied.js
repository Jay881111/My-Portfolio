import React from "react";

function Studied() {
  return (
    <div className="bg-[#061B37] mt-[50vh] w-full h-full pt-[5vh]" id="studied">
      <div className="about">
        <div className="text-center">
          <span className="tag_number">03.</span>
          <span className="md:text-[29px] sm:text-[20px] text-[17px] font-bold text-white">
            I studied or have experience in...!
          </span>
          <div className="flex w-full justify-around mx-auto mt-3 p-5">
            <div className="">
              <div className="text-white font-semibold">1. React</div>
              <li className="text-gray-400 md:text-[16px] text-[13px]">
                useState
              </li>
              <li className="text-gray-400 md:text-[16px] text-[13px]">
                useEffect
              </li>
              <li className="text-gray-400 md:text-[16px] text-[13px]">
                useParams
              </li>
              <li className="text-gray-400 md:text-[16px] text-[13px]">
                useReducer
              </li>
              <li className="text-gray-400 md:text-[16px] text-[13px]">
                useMemo
              </li>
              <li className="text-gray-400 md:text-[16px] text-[13px]">
                useNavigation
              </li>
            </div>
            <div className="">
              <div className="text-white font-semibold">2. CSS</div>
              <li className="text-gray-400 md:text-[16px] text-[13px]">
                normal CSS
              </li>
              <li className="text-gray-400 md:text-[16px] text-[13px]">
                BootStrap
              </li>
              <li className="text-gray-400 md:text-[16px] text-[13px]">
                Tailwind
              </li>
            </div>
            <div>
              <div className="text-white font-semibold">3. React Native</div>
              <li className="text-gray-400 md:text-[16px] text-[13px]">
                FlatList
              </li>
              <li className="text-gray-400 md:text-[16px] text-[13px]">
                ScrollView
              </li>
              <li className="text-gray-400 md:text-[16px] text-[13px]">
                useRoute
              </li>
              <li className="text-gray-400 md:text-[16px] text-[13px]">
                useNavigation
              </li>
            </div>
            {/* Firebase */}
            <div>
              <div className="text-white font-semibold">4. Firebase</div>
              <li className="text-gray-400 md:text-[16px] text-[13px]">Auth</li>
              <li className="text-gray-400 md:text-[16px] text-[13px]">
                FireStore
              </li>
              <li className="text-gray-400 md:text-[16px] text-[13px]">
                Storage
              </li>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Studied;
