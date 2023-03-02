import React from "react";
import { Link } from "react-router-dom";

function Features() {
  return (
    <div className="feature">
      <h1>Features</h1>
      <div>구현가능한 기능 및 프로젝트</div>
      <h3 className="text-white italic mt-3">React</h3>
      <div className="flex text-white">
        <div className="react_container">
          <div className="font-semibold">Forms(Formik)</div>
          <div className="">
            <Link to="/features/loginform">1. Login Form</Link>
          </div>
          <div className="">
            <Link to="/features/signupform">2. Registration Form</Link>
          </div>
          <div className="">
            <Link to="/notyet">3. Enrollment Form</Link>
            {/* 작성하기! */}
          </div>
        </div>
        <div className="ml-6">
          <div className="font-semibold">useRef</div>
          <div>
            <Link to="/features/useref/inputfocus">1. Input Focus</Link>
          </div>
          <div>
            <Link to="/features/useref/timer">2. Timer</Link>
          </div>
          <div>
            <Link to="/features/useref/search">3. Search</Link>
          </div>
        </div>
        <div className="ml-6">
          <div className="font-semibold">useParams</div>

          <div>
            <Link to="/features/useparams/cafes">1. Cafes</Link>
          </div>
          <div className="">...</div>
        </div>
        <div className="ml-6">
          Components
          <div>
            <Link to="/features/boardmain">1. Board</Link>
          </div>
          <div>
            <Link to="/features/todolist">2. Todo List</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Features;
