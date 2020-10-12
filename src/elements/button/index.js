/** @format */

import React from "react";

function Button(props) {
  const { text, type, ...rest } = props;

  return (
    <button type={type} {...rest}>
      {text}
    </button>
  );
}

export default Button;
