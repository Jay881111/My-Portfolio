import React from "react";
import { Formik, ErrorMessage, Field, Form, FieldArray } from "formik";
import "./UseFormik.css";
import * as Yup from "yup";

const initialValues = {
  name: "",
  email: "",
  channel: "",
  address: "",
  social: {
    facebook: "",
    twitter: "",
  },
  phNumbers: [""],
};

const onSubmit = (values) => {
  console.log("form data", values);
};

const validationSchema = Yup.object({
  name: Yup.string().required("Required!"),
  email: Yup.string().email("Invalid email format").required("required"),
  channel: Yup.string().required("Required!"),
});

function PracticeBoard() {
  return (
    <Formik
      onSubmit={onSubmit}
      initialValues={initialValues}
      validationSchema={validationSchema}
    >
      <Form>
        <div className="control">
          <label htmlFor="name">Name</label>
          <Field
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
          />
          <ErrorMessage name="name" />
        </div>
        <div className="control">
          <label htmlFor="email">E-mail</label>
          <Field type="email" id="email" name="email" />
          <ErrorMessage name="email" />
        </div>
        <div className="control">
          <label htmlFor="channel">Channel</label>
          <Field type="text" id="channel" name="channel" />
          <ErrorMessage name="channel" />
        </div>
        <div className="control">
          <label htmlFor="address">Address</label>
          <Field type="text" name="address" id="address" />
        </div>
        <div className="control">
          <label htmlFor="facebook">Facebook</label>
          {/* htmlFor은 Field의 id랑 연결 */}
          <Field type="text" name="social.facebook" id="facebook" />
        </div>
        <div className="control">
          <label htmlFor="twitter">Twitter</label>
          <Field type="text" name="social.twitter" id="twitter" />
        </div>
        <div className="control">
          <label>Phone Number</label>
          {/* <FieldArray name="phNumbers">
            {(FieldArrayProps) => {
              console.log(FieldArrayProps);
              const { remove, push, form } = FieldArrayProps;
              const { values } = form;
              const { phNumbers } = values;
              return (
                <div>
                  {phNumbers.map((phNumber, index) => (
                    <div key={index}>
                      <div className="flex">
                        <Field type="text" name={`phNumbers[${index}]`} />
                        <button type="button" onClick={() => remove(index)}>
                          -
                        </button>
                        <button type="button" onClick={() => push("")}>
                          {" "}
                          +{" "}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              );
            }}
          </FieldArray> */}
          <FieldArray name="phNumbers">
            {(FieldArrayProps) => {
              console.log(FieldArrayProps);
              const { form, push, remove } = FieldArrayProps;
              const { values } = form;
              const { phNumbers } = values;
              return (
                <div>
                  {phNumbers.map((phNumber, index) => (
                    <div key={index}>
                      <div className="flex">
                        <Field type="text" name={`phNumber[${index}]`} />
                        {index > 0 ? (
                          <button type="button" onClick={() => remove(index)}>
                            -
                          </button>
                        ) : null}
                        <button type="button" onClick={() => push("")}>
                          +
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              );
            }}
          </FieldArray>
        </div>
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
}

export default PracticeBoard;
