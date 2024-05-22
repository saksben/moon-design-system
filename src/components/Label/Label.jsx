import React from "react";
import PropTypes from "prop-types"

export const Label = ({ children, ...props }) => {
  return (
    <>
      <label {...props}>{children}</label>
    </>
  );
};
