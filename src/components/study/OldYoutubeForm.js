import React from "react";
import { useFormik } from "formik";
import "./UseFormik.css";
import * as Yup from "yup";

const initialValues = { name: "", email: "", channel: "" };
const onSubmit = (values) => {
  console.log("form data", values);
};
const validate = (values) => {
  // yup사용안할때 validate
  let errors = {};
  if (!values.name) {
    errors.name = "Required";
  }
  if (!values.email) {
    errors.email = "Required";
  } else if (
    !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(values.email)
  ) {
    errors.email = "Invalid Email format";
  }
  if (!values.channel) {
    errors.channel = "Required";
  }
  return errors;
};

const validationSchema = Yup.object({
  name: Yup.string().required("Required!"),
  email: Yup.string().email("Invalid email format").required("required"),
  channel: Yup.string().required("Required!"),
});

function OldYoutubeForm() {
  const formik = useFormik({
    initialValues,
    onSubmit,
    // validate,
    validationSchema,
  });
  console.log(formik.touched);
  return (
    <div className="main">
      <form onSubmit={formik.handleSubmit}>
        <div className="control">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            // onBlur={formik.handleBlur}
            // handleBlur은 방문한 기록이 있는 곳에만 에러메시지 뜨게 해준다
            // touched라는 object에 저장된다.  -> values.touched
            // onBlur={formik.handleBlur}
            // onChange={formik.handleChange}
            // value={formik.values.name}
            // 위 3개(onBlur onChange value)가 전부 비슷한 객체를 공유하기 때문에
            // 이걸 formik.getFieldProps로 통합할 수 있다
            {...formik.getFieldProps("name")}
          />
          {formik.touched.name && formik.errors.name ? (
            <div className="error">{formik.errors.name}</div>
          ) : null}
        </div>
        <div className="control">
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            id="email"
            name="email"
            {...formik.getFieldProps("email")}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="error">{formik.errors.email}</div>
          ) : null}
        </div>
        <div className="control">
          <label htmlFor="channel">Channel</label>
          <input
            type="text"
            id="channel"
            name="channel"
            {...formik.getFieldProps("channel")}
          />
          {formik.touched.channel && formik.errors.channel ? (
            <div className="error">{formik.errors.channel}</div>
          ) : null}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default OldYoutubeForm;
