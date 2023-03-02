import { ErrorMessage, Field } from "formik";
import React from "react";
import TextError from "./TextError";
import "./Formik.css";

function RadioButtons(props) {
  const { label, options, name, ...rest } = props;

  return (
    <div className="gender-control">
      <label>{label}</label>
      <Field name={name} {...rest}>
        {({ field }) => {
          return options.map((option) => {
            console.log(option.value);
            console.log(field.value);
            return (
              <React.Fragment key={option.key}>
                <Field
                  type="radio"
                  name={name}
                  id={option.value}
                  value={option.value}
                  // checked={field.value === option.value}
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
