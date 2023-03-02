import { Form, Formik } from "formik";
import React from "react";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import FormikControl from "./FormikControl";
// import "./Formik.css";

function LoginForm() {
  const genderOptions = [
    { key: "Male", value: "m" },
    { key: "Female", value: "f" },
  ];
  const initialValues = { email: "", password: "" };
  const validationSchema = Yup.object({
    email: Yup.string().email().required("Required"),
    password: Yup.string().required("Required"),
  });
  const onSubmit = (values) => console.log(values);
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {(formik) => {
        // console.log(formik);
        return (
          <Form>
            <div className="w-[400px] mx-auto mt-[100px]">
              <div className="font-bold text-[40px] mb-10 ">Login</div>
              <p>
                Don't have an account yet?
                <Link to="/features/signupform" className="text-black ml-1">
                  Sign Up
                </Link>
              </p>
              <FormikControl
                name="email"
                control="input"
                type="email"
                label="Email"
              />
              <FormikControl
                name="password"
                control="input"
                type="password"
                label="Password"
              />
              <button
                className="mt-[30px]"
                disabled={!formik.isValid}
                type="submit"
              >
                Login
              </button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
}

export default LoginForm;
