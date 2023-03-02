import { ErrorMessage, Field } from "formik";
import React from "react";
import TextError from "./TextError";

function CheckBoxGroup(props) {
  const { label, options, name, ...rest } = props;
  //   console.log(name);
  // console.log(ErrorMessage);
  console.log(options);
  return (
    <div className="control">
      <label>{label}</label>
      <Field name={name} {...rest}>
        {({ field }) => {
          return options.map((option) => {
            return (
              <React.Fragment key={option.key}>
                <Field
                  type="checkbox"
                  name={name}
                  id={option.value}
                  value={option.value}
                  checked={field.value.includes(option.value)}
                />
                <label htmlFor={option.value}>{option.key}</label>
              </React.Fragment>
            );
          });
        }}
      </Field>
      <ErrorMessage name={name} />
    </div>
  );
}

export default CheckBoxGroup;
