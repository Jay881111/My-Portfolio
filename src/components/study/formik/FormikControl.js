import React from "react";
import CheckBoxGroup from "./CheckBoxGroup";
import DatePicker from "./DatePicker";
import Input from "./Input";
import RadioButtons from "./RadioButtons";
import Select from "./Select";
import TextArea from "./TextArea";

function FormikControl(props) {
  const { control, ...rest } = props;
  //control만 여기서 사용하고 나머지는 밑에 switch문에서 넘긴다
  // console.log("formikcontrol props", props);

  switch (control) {
    case "input":
      return <Input {...rest} />;
    //   넘길때 그냥 {}객체만 사용가능 iterable일때
    // for example, {...props}가능
    case "textarea":
      return <TextArea {...rest} />;
    case "select":
      return <Select {...rest} />;
    case "radio":
      return <RadioButtons {...rest} />;
    case "checkbox":
      return <CheckBoxGroup {...rest} />;
    case "date":
      return <DatePicker {...rest} />;

    default:
      return null;
  }
}

export default FormikControl;
