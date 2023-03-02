import React from "react";
import { Link } from "react-router-dom";

function StudyMain() {
  return (
    <div>
      <p>What I have studied</p>
      <p>勉強した内容</p>
      <div>
        <p>React</p>
        <Link className="font-semibold text-yellow-500" to="usememo">
          useMemo
        </Link>
        <br />
        <Link className="font-semibold text-yellow-500" to="useparams">
          useParams
        </Link>
        <br />
        <Link className="font-semibold text-yellow-500" to="useref">
          useRef
        </Link>
        <br />
        <Link className="font-semibold text-yellow-500" to="useformik">
          useFormik
        </Link>
        <br />
        <Link className="font-semibold text-yellow-500" to="formikpractice">
          Formik Practice
        </Link>
        <br />
        <Link className="font-semibold text-yellow-500" to="practiceboard">
          PracticeBoard
        </Link>
      </div>
    </div>
  );
}

export default StudyMain;
