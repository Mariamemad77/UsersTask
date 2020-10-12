/** @format */

import React from "react";

import { Field, ErrorMessage } from "formik";
import TextError from "../textError";

function Textarea(props) {
  const { name, ...rest } = props;
  return (
    <>
      <Field as='textarea' name={name} {...rest} />
      <ErrorMessage name={name} component={TextError} />
    </>
  );
}

export default Textarea;
