import { Formik, Form } from "formik";
import React from "react";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import "./Formik.css";
import FormikControl from "./FormikControl";

function SignUpForm() {
  const locationSelects = [
    { key: "Select Location", value: "" },
    { key: "Seoul", value: "seoul" },
    { key: "Busan", value: "busan" },
    { key: "Jeju", value: "jeju" },
  ];
  const genderOptions = [
    { key: "Male", value: "male" },
    { key: "Female", value: "female" },
  ];
  const initialValues = {
    email: "",
    password: "",
    confirmPassword: "",
    genderOptions: "",
    locationSelects: "",
  };
  const validationSchema = Yup.object({
    email: Yup.string().required("Required"),
    password: Yup.string().required("Required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), ""], "Password must match")
      .required("Required"),
    genderOptions: Yup.string().required("Required"),
    locationSelects: Yup.string().required("Required"),
  });
  const onSubmit = (values) => console.log(values);
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {(formik) => {
        return (
          <Form>
            <div className="w-[400px] mx-auto mt-[100px]">
              <div className="font-bold text-[40px] mb-10 ">Sign Up</div>
              <p>
                Already have an account? then,
                <Link to="/features/loginform" className="text-black ml-1">
                  Login
                </Link>
              </p>

              <FormikControl
                name="email"
                label="Email"
                type="email"
                control="input"
              />
              <FormikControl
                name="password"
                type="password"
                control="input"
                label="Password"
              />
              <FormikControl
                name="confirmPassword"
                type="password"
                control="input"
                label="Confirm Password"
              />
              <FormikControl
                name="genderOptions"
                options={genderOptions}
                label="Gender"
                control="radio"
              />
              <FormikControl
                control="select"
                label="Address"
                name="locationSelects"
                options={locationSelects}
              />
              <button disabled={!formik.isValid} type="submit">
                Sign Up
              </button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
}

export default SignUpForm;

// confirmPassword: Yup.string().oneOf(password).required("Required"),
//     genderOptions: Yup.string().required("Required"),
