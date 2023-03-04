import React from "react";
import Search from "./components/study/UseRef/Search";
import { Routes, Route } from "react-router-dom";
import SignUp from "./components/SignUp/SignUp";
import TodoMain from "./components/todoList/TodoMain";
import Board from "./components/board/Board";
import StudyMain from "./components/study/StudyMain";
import UseMemo from "./components/study/UseMemo";
import UseParams from "./components/study/UseParams";
import ParamsDetail from "./components/study/ParamsDetail";
import UseRef from "./components/study/UseRef";
import NotFound from "./components/NotFound";
import UseFormik from "./components/study/UseFormik";
import PracticeBoard from "./components/study/PracticeBoard";
import FormikPractice from "./components/study/formik/FormikPractice";
import Features from "./components/Pages/Features";
import LoginForm from "./components/study/formik/LoginForm";
import SignUpForm from "./components/study/formik/SignUpForm";
import InputFocus from "./components/study/UseRef/InputFocus";
import Timer from "./components/study/UseRef/Timer";
import BoardMain from "./components/board/BoardMain";
import BoardContent from "./components/board/BoardContent";
import SignIn from "./components/SignIn/SignIn";

import Profile from "./components/Pages/Profile";
import LayOut from "./components/LayOut";

function App() {
  return (
    <>
      <LayOut>
        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="/features" element={<Features />} />
          <Route path="/features/loginform" element={<LoginForm />} />
          <Route path="/features/signupform" element={<SignUpForm />} />
          <Route path="/features/useref/inputfocus" element={<InputFocus />} />
          <Route path="/features/useref/timer" element={<Timer />} />
          <Route path="/features/useref/search" element={<Search />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Login" element={<SignIn />} />
          <Route path="/features/todolist" element={<TodoMain />} />
          <Route path="/features/boardmain/createboard" element={<Board />} />
          <Route path="/features/boardmain" element={<BoardMain />} />
          <Route path="/features/boardmain/:id" element={<BoardContent />} />
          <Route path="/studied" element={<StudyMain />} />
          <Route path="/studied/usememo" element={<UseMemo />} />
          <Route path="/features/useparams/cafes" element={<UseParams />} />
          <Route
            path="/features/useparams/cafes/:id"
            element={<ParamsDetail />}
          />
          <Route path="/studied/useref" element={<UseRef />} />
          <Route path="/studied/useformik" element={<UseFormik />} />
          <Route path="/studied/practiceboard" element={<PracticeBoard />} />
          <Route path="/studied/formikpractice" element={<FormikPractice />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </LayOut>
    </>
  );
}

export default App;
