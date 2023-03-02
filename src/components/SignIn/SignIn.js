import React from "react";
import { ErrorMessage, Field, Form, Formik, useFormik } from "formik";
import * as Yup from "yup";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { addDoc, doc, setDoc } from "firebase/firestore";
import { db } from "../../Firebase";
import "../SignUp/FormikComponents/Formik.css";
import FormikControl from "../SignUp/FormikControl";
import { Link, useNavigate } from "react-router-dom";

function SignIn() {
  const navigate = useNavigate();

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string()
      .required("No password provided")
      .min(8, "Password is too short - should be 8 chars minimum.")
      .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
  });

  const onSubmit = (values) => {
    // console.log(values);

    const auth = getAuth();
    signInWithEmailAndPassword(auth, values.email, values.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        console.log("logged in!");
        navigate("/");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => {
        console.log(formik);
        return (
          <Form>
            <h1>Log In</h1>
            <p>
              Don't have an account yet?
              <Link to="/SignUp" className="text-black ml-1">
                Sign Up
              </Link>
            </p>
            <FormikControl
              control="input"
              label="Email"
              name="email"
              type="email"
              placeholder="Please enter e-mail"
            />

            <FormikControl
              control="input"
              name="password"
              type="password"
              autoComplete="off"
              label="Password"
              placeholder="please enter password"
            />
            <button type="submit">
              <div>Submit</div>
            </button>
          </Form>
        );
      }}
    </Formik>
  );
}

export default SignIn;
