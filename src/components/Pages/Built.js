import React, { useState } from 'react';
import './Profile.css';
import TodoMain from '../TodoList2/TodoMain';
import Board from '../board/BoardMain';
import '../Navbar.css';
import SignUp from '../SignUp/SignUp';
import SignIn from '../SignIn/SignIn';
import PortFolioDetail from './PortFolioDetail';
import { Link } from 'react-router-dom';
import NaverMail from './NaverMail';

function Built() {
    const [myWindow, setMyWindow] = useState();
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };

    const handleWindow = (props) => {
        console.log(props);

        switch (props) {
            case 'board':
                setMyWindow(
                    <div className="border-2 p-4">
                        <Board />
                        <div className="ml-[300px] "></div>
                        <Link
                            className="w-[100px] p-[2px] border-[2px] no-underline text-white border-white ml-[150px]"
                            // onClick={() => window.open("/SignUp", "_blank")}
                            to="/features/boardmain"
                            target="_blank"
                        >
                            새창에서 보기
                        </Link>
                    </div>
                );
                break;
            case 'signup':
                setMyWindow(
                    <div className="border-2 h-full">
                        <div className="-mt-[10vh]" />
                        <SignUp />
                        <Link
                            className="w-[100px] p-[2px] border-[2px] no-underline text-white border-white ml-[150px]"
                            // onClick={() => window.open("/SignUp", "_blank")}
                            to="/SignUp"
                            target="_blank"
                        >
                            새창에서 보기
                        </Link>
                    </div>
                );
                break;
            case 'login':
                setMyWindow(
                    <div className="border-2">
                        <div className="-mt-[10vh]" />
                        <SignIn />
                        <Link className="w-[100px] p-[2px] border-[2px] no-underline text-white border-white ml-[150px]" target="_blank" to="Login">
                            새창에서 보기
                        </Link>
                    </div>
                );
                break;
            case 'portfolio':
                setMyWindow(
                    <div className="">
                        <PortFolioDetail />
                    </div>
                );
                break;
            case 'navermail':
                setMyWindow(
                    <div className="w-[420px] p-[2px] border-[2px] no-underline text-white border-white">
                        <NaverMail />
                    </div>
                );
                break;
            default:
                // setMyWindow(<div className="w-0" />);
                break;
        }
    };
    return (
        <div className="mt-[50vh] md:mt-[30vh] bg-[#061B37] max-w-[1280px] mx-auto grid md:grid-cols-2 h-full" id="built">
            <div className="md:w-[80%] mt-[10vh] ml-[20%] mr-[0%]">
                <span className="tag_number">02.</span>
                <span className="md:text-[29px] sm:text-[20px] text-[17px] font-bold text-white">Something I have created</span>
                <div className="list_languages">
                    <div>
                        <input
                            type="button"
                            id="go"
                            key="1"
                            value="1. 게시판(click)"
                            className="border-0 font-semibold w-[100px] text-left text-yellow-400"
                            onClick={() =>
                                // window.open("/features/boardmain", "_blank")
                                handleWindow('board')
                            }
                        />
                        <div className="ml-[8px]">
                            <div> Used Skill: React, Firebase</div>
                        </div>
                    </div>
                    <input key="2" type="button" id="go" value="2. 회원가입(click)" className="mt-1 border-0 w-[140px] text-left text-yellow-400 font-semibold" onClick={() => handleWindow('signup')} />
                    <div className="ml-[8px]">
                        <div> Used Skill: React(Formik, Yup), Firebase</div>
                    </div>
                    <input key="3" type="button" id="go" value="3. 로그인(click)" className="mt-1 border-0 w-[140px] text-left text-yellow-400 font-semibold" onClick={() => handleWindow('login')} />
                    <div className="ml-[8px]">
                        <div> Used Skill: React(Formik, Yup), Firebase</div>
                    </div>
                    <input key="4" type="button" id="go" value="4. 본 포트폴리오 페이지" className="mt-1 border-0 w-[160px] text-left text-yellow-400 font-semibold" onClick={() => handleWindow('portfolio')} />
                    <div className="ml-[8px]">
                        <div> Used Skill: React, Firebase, Tailwind, Responsive Web</div>
                    </div>
                    <input key="5" type="button" id="go" value="5. Naver Mail Clone Coding" className="mt-1 border-0 w-[190px] text-left text-yellow-400 font-semibold" onClick={() => handleWindow('navermail')} />
                    <div className="ml-[8px]">
                        <div> Used Skill: React, Tailwind</div>
                    </div>
                    <input key="6" type="button" id="go" value="6. 소셜 SNS" className="mt-1 border-0 w-[100px] text-left text-yellow-400 font-semibold" onClick={() => handleWindow('')} />
                    <div className="ml-[8px]">
                        <div> Used Skill: React Native(Formik, Yup), Firebase</div>
                    </div>
                    <div>
                        <input
                            key="7"
                            type="button"
                            id="go"
                            value="7. Github(move to github)"
                            className="mt-1 border-0 w-[180px] text-left text-yellow-400 font-semibold"
                            onClick={
                                () => window.open('https://github.com/Jay881111', '_blank')
                                // () => handleWindow("todolist")
                            }
                        />
                        <div className="ml-[8px]">
                            <div> https://github.com/Jay881111 </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mx-auto md:pr-[17%] sm:pr-[13%]">
                <div className="mt-[7vh] p-4 h-min w-[100%] text-white">{myWindow}</div>
            </div>
        </div>
    );
}

export default Built;
