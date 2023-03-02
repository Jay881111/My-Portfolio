import { ErrorMessage, Field } from "formik";
import React from "react";
import TextError from "./TextError";
import "./Formik.css";

function Input(props) {
  const { label, name, ...rest } = props;
  //   console.log("input prop", props);
  //   console.log("label", label);
  return (
    <div className="control">
      <label htmlFor="name">{label}</label>
      <Field id={name} name={name} {...rest} />
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
}

export default Input;
