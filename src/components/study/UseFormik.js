import React, { useState } from "react";
// import { useFormik } from "formik";
// useFormik => Formik
import {
  Formik,
  Form,
  Field,
  ErrorMessage,
  FieldArray,
  FastField,
} from "formik";
// Form을 가져오면서 html에 있던 form을 Form으로 변경
// Field를 가져오면서 html에 있던 input을 Field로 변경
import "./UseFormik.css";
import * as Yup from "yup";
import TextError from "./TextError";

const initialValues = {
  name: "",
  email: "",
  channel: "",
  comments: "",
  address: "",
  social: {
    facebook: "",
    twitter: "",
  },
  phoneNumber: ["", ""],
  //   nested object 객체로 표현해서 초기값 설정
  phNumbers: [""],
};

const savedValues = {
  name: "Jay",
  email: "Jay@jay.com",
  channel: "jay channel",
  comments: "Hi",
  address: "Well",
  social: {
    facebook: "",
    twitter: "",
  },
  phoneNumber: ["", ""],
  //   nested object 객체로 표현해서 초기값 설정
  phNumbers: [""],
};

const onSubmit = (values, onSubmitProps) => {
  console.log("form data", values);
  console.log("onSubmit", onSubmitProps);
  // submit버튼에서 클릭시 반응하는 활동 onsubmitting의 props항목들을 본다
  onSubmitProps.setSubmitting(false);
  //isSubmitting을 다시 가능하게한다
  onSubmitProps.resetForm();
  // submit이후에 form을 reset한다. (initialValues로 돌아간다)
};
// const validate = (values) => {
//   // yup사용안할때 validate
//   let errors = {};
//   if (!values.name) {
//     errors.name = "Required";
//   }
//   if (!values.email) {
//     errors.email = "Required";
//   } else if (
//     !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(values.email)
//   ) {
//     errors.email = "Invalid Email format";
//   }
//   if (!values.channel) {
//     errors.channel = "Required";
//   }
//   return errors;
// };

// const validateComments = (values) => {
//   let errors = {};
//   if (!values) {
//     errors = "Required";
//   }
//   return errors;
// };

const validationSchema = Yup.object({
  name: Yup.string().required("Required!"),
  email: Yup.string().email("Invalid email format").required("Required"),
  channel: Yup.string().required("Required!"),
  address: Yup.string().required("Required"),
  comments: Yup.string().required("Required"),
});

function UseFormik() {
  const [formValues, setFormValues] = useState(null);

  //   const formik = useFormik({
  // // 리팩토링하면서 useFormik가져오던 것을 Formik으로
  // // 대체하고 이 formik도 삭제한다
  //     initialValues,
  //     onSubmit,
  //     // validate,
  //     validationSchema,
  //   });
  //   console.log(formik.touched);
  return (
    <Formik
      //   className="main"
      initialValues={formValues || initialValues}
      //   if formValues is present, use formValues otherwise use setFormValues
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      enableReinitialize
      //   validateOnMount
      //   validateOnChange={false}
      //   validateOnBlur={false}
      //  vadlidateOnChange는 변화가 있을때마다 render
      // validateOnBlur는 클릭시 render
      // List of Phone Number에서  console.log("error", form.errors)로 확인가능
      // validateOnMount는 시작하면서 submit button이 isvalid하게 만들어준다
      // < 상태를 isvalid로 바꿔서
      //   enableReinitialize는 처음 initialized된 이후에 한 번 더 initalized할수있게하는항목
    >
      {(formik) => {
        // 원래는 <Form>을 바로 썻는데 {formik=>{return()}}형식으로 사용하면서
        // formik의 내용들을 전부 사용할 수 있게 된다
        // 구체적으로 확인하려면 console.log(formik)으로 확인해볼 수 있다
        console.log(formik);
        return (
          <Form>
            {/* div tag를 Formik tag로 전환하면서 const formik=useFormik({}) */}
            {/* 에 있던 내용들을 여기서 props으로 전달 */}
            {/* <form onSubmit={formik.handleSubmit}> */}

            {/* 위에 있던 form onSubmit을 Form으로 대체 */}
            {/* Form으로 대체되면서 onSubmit은 자동으로 포함 */}

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
                // {...formik.getFieldProps("name")}
                // input을 Field항목으로 바꾸면서 위의 formik.getFieldProps도 필요없어진다
              />
              {/* {formik.touched.name && formik.errors.name ? (
            <div className="error">{formik.errors.name}</div>
          ) : null} */}
              {/* 위의 에러를 보이는 것을 아래와 같이 refactoring 하단의 항목들도 전부삭제 */}
              {/* <ErrorMessage name="name" /> */}
              {/* 위와 같이 리팩토링 하면 css적용이 안되기 때문에 다음과 같은 방법으로 대응 */}
              {/* 2가지 방법이 있다. 하나는 name에서, 나머지 하나는 email에서 */}
              <ErrorMessage name="name" component={TextError} />
              {/* 1. component를 만들어서 하위 컴포넌트를 만들어 거기서 children으로 받아서 */}
              {/* css를 적용하는 방법 */}
            </div>
            <div className="control">
              <label htmlFor="email">E-mail</label>
              <Field type="email" id="email" name="email" />
              <ErrorMessage name="email">
                {(errorMsg) => {
                  console.log("err", errorMsg);
                  return <div className="error">{errorMsg}</div>;
                }}
              </ErrorMessage>
              {/* 2. Self Closing tag를 열어서 그 사이에 prop을 만들고 return하게 하는방법 */}
            </div>
            <div className="control">
              <label htmlFor="channel">Channel</label>
              <Field type="text" id="channel" name="channel" />
              <ErrorMessage name="channel" />
            </div>
            <div className="control">
              <label htmlFor="comments">Comments</label>
              <Field
                // FastField인 항목이 있으면 그것때문에 props를 주지 않는다
                as="textarea"
                name="comments"
                id="comments"
                // validate={validateComments}
              />
              <ErrorMessage name="comments" component={TextError} />
            </div>
            <div className="control">
              <label htmlFor="address">Address</label>
              <Field name="address">
                {/* FastField address입력할때만 rerender된다 */}
                {(props) => {
                  console.log("rendered");
                  const { field, form, meta } = props;
                  return (
                    <div>
                      <input type="text" id="address" {...field} />
                      {meta.touched && meta.error ? (
                        <div>{meta.error}</div>
                      ) : null}
                    </div>
                    // formik - 18
                  );
                }}
              </Field>
            </div>
            <div className="control">
              <label htmlFor="facebook">Facebook Profile</label>
              <Field type="text" name="social.facebook" id="facebook" />
            </div>
            <div className="control">
              <label htmlFor="twitter">Twitter Profile</label>
              <Field type="text" name="social.twitter" id="twitter" />
            </div>
            <div className="control">
              <label htmlFor="primaryPh">Primary Phone</label>
              <Field type="text" id="primaryPh" name="phoneNumber[0]" />
            </div>
            <div className="control">
              <label htmlFor="secondaryPh">Secondary Phone</label>
              <Field type="text" id="secondaryPh" name="phoneNumber[1]" />
            </div>
            <div className="control">
              <label>List of Phone Number</label>
              <FieldArray name="phNumbers">
                {(FieldArrayProps) => {
                  //   console.log(FieldArrayProps);
                  const { remove, push, form } = FieldArrayProps;
                  const { values } = form;
                  const { phNumbers } = values;
                  //   console.log("error", form.errors);
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
              </FieldArray>
            </div>
            {/* <button
              type="button"
              onClick={() => {
                formik.validateField("comments");
              }}
            >
              validate Comment
            </button>
            <button
              type="button"
              onClick={() => {
                formik.validateForm();
              }}
            >
              validate All
            </button>
            <button
              type="button"
              onClick={() => {
                formik.setFieldTouched("comments");
              }}
            >
              touch Comments
            </button>
            <button
              type="button"
              onClick={() => {
                formik.setTouched({
                  name: true,
                  email: true,
                  channel: true,
                  comments: true,
                });
              }}
            >
              touch all
            </button> */}
            {/* <button type="submit" disabled={!(formik.dirty && formik.isValid)}> */}
            {/* formik이 바뀐게 있거나 form is not valid state이면 disable한다 */}
            {/* 하지만 이건 initialvalue = 입력값일때 submit이 작동안한다는 단점이 있다 */}
            {/* <button type="submit" disabled={!formik.isValid}> */}
            {/* <button type="submit" disabled={formik.isSubmitting}> */}
            {/* formik.isSubmitting이 true값이 되면 submit 버튼을 disable한다 */}
            {/* form의 2중 submit방지 */}
            <button type="button" onClick={() => setFormValues(savedValues)}>
              Load Saved Data
            </button>
            <button type="reset">Reset</button>
            {/* form reset 방법1: button type="reset"으로 만들기 */}
            <button
              type="submit"
              disabled={!formik.isValid || formik.isSubmitting}
            >
              Submit
            </button>
          </Form>
        );
      }}
    </Formik>
  );
}

export default UseFormik;

// formik의 요소들
// dirty: 만약 input요소들 중 하나라도 initial value로 부터 바뀌면 true로 바뀐다
