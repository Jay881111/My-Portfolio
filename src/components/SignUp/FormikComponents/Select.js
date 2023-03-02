import { ErrorMessage, Field } from "formik";
import React from "react";
import TextError from "./TextError";
import "./Formik.css";

function Select(props) {
  const { name, label, options, ...rest } = props;
  console.log(props);
  return (
    <div className="control">
      <label htmlFor={name}>{label}</label>
      <Field as="select" name={name} options={options}>
        {options.map((option) => {
          return (
            <option key={option.value} value={option.value}>
              {option.value}
            </option>
          );
        })}
        {/* <ErrorMessage name={name} component={TextError} /> */}
      </Field>
    </div>
  );
}

export default Select;
