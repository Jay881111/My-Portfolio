import React from "react";
import { ErrorMessage, Field, Form, Formik, useFormik } from "formik";
import * as Yup from "yup";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { addDoc, doc, setDoc } from "firebase/firestore";
import { db } from "../../Firebase";
import "./FormikComponents/Formik.css";
import FormikControl from "./FormikControl";
import { Link, useNavigate } from "react-router-dom";

function SignUp() {
  const navigate = useNavigate();

  const initialValues = {
    email: "",
    password: "",
    confirmPassword: "",
    name: "",
    genderOptions: "",
    locationSelects: "",
  };
  const radioGroup = [
    { key: "F", value: "female" },
    { key: "M", value: "male" },
  ];
  const selectGroup = [
    { key: "", value: "Please Select" },
    { key: "01", value: "Seoul" },
    { key: "02", value: "Busan" },
    { key: "03", value: "Jeju" },
  ];

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email address").required("Required"),
    name: Yup.string()
      .required("No Name provided")
      .min(1, "Please enter correct name"),
    password: Yup.string()
      .required("No password provided")
      .min(8, "Password is too short - should be 8 chars minimum.")
      .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), ""], "Password must match")
      .required("Required"),
    genderOptions: Yup.string().required("Required"),
    locationSelects: Yup.string().required("Required"),
  });

  const onSubmit = (values) => {
    console.log(values);

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, values.email, values.password)
      .then(async (userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log("성공했습니다");
        console.log("user", user);
        await setDoc(doc(db, "userdata", `${user.email}`), {
          name: values.name,
          email: values.email,
          gender: values.genderOptions,
          location: values.locationSelects,
        });
        alert("회원가입이 완료되었습니다");
        navigate("/");

        // ...
      })

      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
    // console.log(values.id);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => {
        return (
          <Form className="">
            <h1>Sign Up</h1>
            <p>
              Already have an account? then,
              <Link to="/Login" className="text-black ml-1">
                Login
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
            <FormikControl
              control="input"
              name="confirmPassword"
              type="password"
              autoComplete="off"
              label="Confirm Password"
              placeholder="please enter password"
            />
            <FormikControl
              control="input"
              label="Name"
              name="name"
              type="text"
              placeholder="Please enter name"
            />
            <div>
              <FormikControl
                name="genderOptions"
                options={radioGroup}
                label="Gender"
                control="radio"
              />
              <br />
              <FormikControl
                name="locationSelects"
                label="Location"
                control="select"
                options={selectGroup}
              />
            </div>
            <button type="submit">
              <div>Submit</div>
            </button>
          </Form>
        );
      }}
    </Formik>
  );
}

export default SignUp;

// formik은 initialValue, validateSchema, onSubmit으로 구성

// return 부분은 form태그를 사용해서 내보낸다
// ** form 태그의 특징적인 부분

// onChange={formik.handleChange}
// > 안에서 text변화가 일어날 수 있게

// onBlur={formik.handleBlur}
// onBlur event handler. Useful for when you need to track whether
// an input has been touched or not. This should be passed to
// <input onBlur={handleBlur} ... />
// 여기서 touched 반응을 기록하기 때문에, 하단의 삼항연산자 {formik.touched.email 부분에서
// 반응을 하고, 터치가 되었는데 입력이 없으면 <div>이하의 값을 처리하게 됨

// CSS
// label은 inline-block지정해줘야 한다
