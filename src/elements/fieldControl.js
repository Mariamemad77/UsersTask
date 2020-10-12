/** @format */

import React from "react";

import Input from "./input";
import Textarea from "./textarea";
import Select from "./select";
import Button from "./button";

function FieldControl(props) {
  const { control, ...rest } = props;
  switch (control) {
    case "input":
      return <Input {...rest} />;
    case "textarea":
      return <Textarea {...rest} />;
    case "select":
      return <Select {...rest} />;
    case "button":
      return <Button {...rest} />;
    default:
      return null;
  }
}

export default FieldControl;
