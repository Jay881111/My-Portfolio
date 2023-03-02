import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useContext, useEffect, useMemo, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

function NavBar() {
  // navbar profile 메인페이지에 옮겨서 작업중!!
  const [email, setEmail] = useState();
  const auth = getAuth();
  // const navigate = useNavigate();

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

  // onAuthStateChanged(auth, (user) => {
  //   if (user) {
  //     const uid = user.uid;
  //     const email = user.email;
  //     console.log(email);
  //     setEmail(email);
  //   }
  // });

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
    <>
      <Navbar className="bg-[#061B37]" variant="dark">
        <Container>
          <Navbar.Brand href="/">J</Navbar.Brand>
          <Nav className=" flex items-center text-[9px]">
            <Nav.Link to="/">
              <b id="nav_tag" className="font-link">
                01
              </b>
              .About
            </Nav.Link>
            <Nav.Link href="/studied">
              <b id="nav_tag" className="font-link">
                02
              </b>
              .Studied
            </Nav.Link>
            <Nav.Link to="/profile">
              <b id="nav_tag" className="font-link">
                03
              </b>
              .Studied
            </Nav.Link>
            <Nav.Link to="/features/boardmain">
              <b id="nav_tag" className="font-link">
                04
              </b>
              .Board
            </Nav.Link>
            <div className="flex">
              {email ? (
                <div className="ml-[15px] text-white">{email}</div>
              ) : (
                <div className="flex">
                  <Nav.Link href="/SignUp">Sign Up</Nav.Link>
                  <Nav.Link href="/Login">Log In</Nav.Link>
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
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
