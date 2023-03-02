import React from "react";

function PortFolioDetail() {
  return (
    <div className="w-[full] h-[60vh] text-white border-2 border-white">
      <div className="font-semibold text-[20px] pl-6 pt-4">
        About This Portfolio
      </div>
      <div className="text-[13px] p-4">
        <div>1. 로그인되면 상단 navbar에 로그인 ID표기</div>
        <div>- firebase와 연동하여 회원가입기능 작동</div>
        <img
          src="./assets/screenshot.png"
          className="border-2 border-gray-500"
          alt=""
        />
        <div className="mt-[10px]">2. 반응형 웹(Responsive Web)</div>
        <div>- 모바일 크기로 조정시 반응하여 크기조절</div>
        <div className="mt-[10px]">3. Tailwind</div>
        <div>- CSS를 Tailwind로 적용</div>
        <div className="mt-[10px]">4. React</div>
        <div>- React베이스로 구축</div>
      </div>
    </div>
  );
}

export default PortFolioDetail;
