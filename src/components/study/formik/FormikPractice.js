import { Formik, Form } from "formik";
import React from "react";
import * as Yup from "yup";
import FormikControl from "./FormikControl";

function FormikPractice() {
  const checkboxOptions = [
    { key: "Option1", value: "c_option1" },
    { key: "Option2", value: "c_option2" },
    { key: "Option3", value: "c_option3" },
  ];

  const optionList = [
    { key: "select an option", value: "" },
    { key: "Option1", value: "option1" },
    { key: "Option2", value: "option2" },
    { key: "Option3", value: "option3" },
  ];

  const radioOption = [
    { key: "Option1", value: "option1" },
    { key: "Option2", value: "option2" },
    { key: "Option3", value: "option3" },
  ];

  const initialValues = {
    email: "",
    comments: "",
    select: "",
    radioOption: "",
    checkboxOptions: [],
    birthDate: null,
  };
  const onSubmit = (value) => console.log("form data", value);
  const validationSchema = Yup.object({
    email: Yup.string().required("Required"),
    comments: Yup.string().required("Required"),
    select: Yup.string().required("Required"),
    radioOption: Yup.string().required("Required"),
    checkboxOptions: Yup.array().min(1, "Required"),
    birthDate: Yup.array().required("Required").nullable(),
  });
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {(formik) => (
        <Form>
          <FormikControl
            control="input"
            type="email"
            label="Email"
            name="email"
          />
          <FormikControl
            control="textarea"
            type="textarea"
            label="Comments"
            name="comments"
          />
          <FormikControl
            control="select"
            type="select"
            label="Select"
            name="select"
            options={optionList}
          />
          <FormikControl
            control="radio"
            label="Radio Button"
            name="radioOption"
            options={radioOption}
          />
          <FormikControl
            control="checkbox"
            label="Checkbox Topics"
            name="checkboxOptions"
            options={checkboxOptions}
          />
          <FormikControl control="date" label="Pick a date" name="birthDate" />
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
}

export default FormikPractice;
