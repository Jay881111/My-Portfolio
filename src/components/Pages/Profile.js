import React, { useState } from "react";
import "./Profile.css";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useMemo } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../Navbar.css";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Built from "./Built";
import Studied from "./Studied";
import ContactMe from "./ContactMe";
import AboutMe from "./AboutMe";
import Title from "./Title";

function Profile(props) {
  const [nav, setNav] = useState(false);
  const navigate = useNavigate();

  const handleNav = () => {
    setNav(!nav);
  };

  const [email, setEmail] = useState();
  const auth = getAuth();

  const memoMail = useMemo(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        const email = user.email;
        console.log(email);
        setEmail(email);
      }
    });
  }, []);

  const LogOut = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <div className="bg-[#061B37] w-full h-[100%]">
      <Navbar className="bg-[#061B37]" variant="dark" fixed="top">
        <Container>
          <Navbar.Brand href="/">
            <span className="text-[25px] font-bold text-white">J</span>
          </Navbar.Brand>
          <Nav className="">
            <div className="hidden md:flex items-center text-[9px]">
              <Nav.Link href="#aboutme">
                <b id="nav_tag" className="font-link">
                  01
                </b>
                .About
              </Nav.Link>
              <Nav.Link href="#built">
                <b id="nav_tag" className="font-link">
                  02
                </b>
                .Built
              </Nav.Link>
              <Nav.Link href="#studied">
                <b id="nav_tag" className="font-link">
                  03
                </b>
                .Studied
              </Nav.Link>
              <Nav.Link href="#contactme">
                <b id="nav_tag" className="font-link">
                  04
                </b>
                .Contact
              </Nav.Link>
              <div className="flex">
                {email ? (
                  <div className="ml-[15px] text-white">{email}</div>
                ) : (
                  <div className="flex">
                    <Link
                      className="text-[#C1C6CC] no-underline hover:text-[#ffffac]"
                      to="/SignUp"
                    >
                      Sign Up
                    </Link>
                    <Link
                      className="text-[#C1C6CC] ml-2 no-underline hover:text-[#ffffac]"
                      to="/Login"
                    >
                      Log In
                    </Link>
                  </div>
                )}
                {email ? (
                  <button
                    className="text-white w-[80px] border-0"
                    onClick={LogOut}
                  >
                    Sign Out
                  </button>
                ) : (
                  ""
                )}
              </div>
            </div>
          </Nav>
          {/* 줄어들때! */}
          <div onClick={handleNav} className="block md:hidden">
            {nav ? (
              <AiOutlineClose color="white" size={20} />
            ) : (
              <AiOutlineMenu color="white" size={20} />
            )}
          </div>
          <div
            className={
              nav
                ? "text-white uppercase fixed w-[120px] bg-[#061B37] mt-[50px] h-[179px] right-3 top-0 border-l border-b border-b-gray-700 border-l-gray-700 border-t border-t-gray-700 p-3 ease-in-out duration-500"
                : "fixed left-[-100%]"
            }
          >
            <Nav.Link
              className="mt-[10px] border-b border-gray-600"
              href="#aboutme"
            >
              About
            </Nav.Link>
            <Nav.Link
              className="mt-[10px] border-b border-gray-600"
              href="#built"
            >
              Built
            </Nav.Link>
            <Nav.Link
              className="mt-[10px] border-b border-gray-600"
              href="#studied"
            >
              Studied
            </Nav.Link>
            <Nav.Link
              className="mt-[10px] border-b border-gray-600"
              href="#contactme"
            >
              Contact
            </Nav.Link>
          </div>
        </Container>
      </Navbar>
      <Title />
      {/* About Me */}
      <AboutMe />
      {/* Built! Me */}
      <Built />
      {/* studied */}
      <Studied id="studied" />
      {/* Career */}
      {/* <Career id="career" /> */}
      {/* contact me */}
      <ContactMe />
    </div>
  );
}

export default Profile;
