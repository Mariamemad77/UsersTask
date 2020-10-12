/** @format */

import React from "react";

import { Field, ErrorMessage } from "formik";
import TextError from "../textError";

function Select(props) {
  const { name, options, ...rest } = props;
  return (
    <>
      <Field as='select' name={name} {...rest}>
        {options.map((option) => {
          return (
            <option key={option.value} value={option.value}>
              {option.value}
            </option>
          );
        })}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </>
  );
}

export default Select;
