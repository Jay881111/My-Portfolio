import { ErrorMessage, Field } from "formik";
import React from "react";
import TextError from "./TextError";

function TextArea(props) {
  const { name, label, ...rest } = props;
  // console.log("textarea", props);
  return (
    <div className="control">
      <label htmlFor={name}>{label}</label>
      <Field as="textarea" name={name} id={name} />
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
}

export default TextArea;
