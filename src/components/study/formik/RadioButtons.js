import { ErrorMessage, Field } from "formik";
import React from "react";
import TextError from "./TextError";
import "./Formik.css";

function RadioButtons(props) {
  const { label, options, name, ...rest } = props;
  //   console.log(name);
  // console.log(options);
  return (
    <div className="gender-control">
      <label>{label}</label>
      {/* <br /> */}
      <Field name={name} {...rest}>
        {({ field }) => {
          return options.map((option) => {
            return (
              <React.Fragment key={option.key}>
                <Field
                  type="radio"
                  name={name}
                  id={option.value}
                  value={option.value}
                  checked={field.value === option.value}
                />
                <label htmlFor={option.value}>{option.key}</label>
              </React.Fragment>
            );
          });
        }}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
}

export default RadioButtons;
