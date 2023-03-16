import React from 'react';

function AboutMe() {
    return (
        <div className="bg-[rgb(6,27,55)] pt-[20vh] w-full h-[full]">
            <div className="max-w-[1280px] mx-auto grid md:grid-cols-2" id="aboutme">
                <div className="md:w-[80%] ml-[20%] mr-[20%]">
                    <span className="tag_number">01.</span>
                    <span className="md:text-[29px] sm:text-[20px] text-[17px] font-bold text-white"> About Me</span>
                    <div className="border-b-[1px] border-gray-400 bg-white w-100%" />

                    <div className="pt-[10px] text-gray-300 font-[200] text-[14px]">
                        <div className="md:text-[18px] text-[15px] font-semibold text-white"> 자기소개</div>
                        <div className="indent-3">안녕하세요, 선우정현입니다. 사회에서 다양한 경험을 하고, 개발직군으로 들어오게 되었습니다.</div>
                        <p className="mt-[3px] indent-3"> Javascript를 중심으로 성장중이고, React, React Native를 활용한 프론트엔드에 집중하고 있습니다. 새로운 언어를 배우는 것에 있어서도 기꺼이 배울 의향이 있습니다.</p>
                        <div className="md:text-[18px] text-[15px] font-semibold text-white"> TMI</div>
                        <div>- MBTI: 개발자 중 가장 많다는 INTP유형으로, 새로운 것을 익히고, 탐구하고자 하는 욕구가 굉장히 강합니다!</div>
                        <div>- Capable Language: 한국어(네이티브), 영어(上), 일본어(上)</div>
                        <br />
                        <br />
                        <div className="md:text-[18px] text-[15px] font-semibold text-white">보유스킬 및 자격증</div>
                    </div>
                    <div className="list_languages">
                        <div>JavaScript(ES6)</div>
                        <div>Node.js</div>
                        <div>React</div>
                        <div>React Native</div>
                        <div>Tailwind</div>
                        <div>Firebase</div>
                        <div>자격증: 정보처리기사</div>
                    </div>
                </div>
                {/* 사진 */}
                <div className="mx-auto mt-[3vh] md:pr-[20%] md:mt-[0]">
                    <img src="./assets/Jay1.jpg" className="w-[100%] h-[496px]" />
                </div>
            </div>
        </div>
    );
}

export default AboutMe;
