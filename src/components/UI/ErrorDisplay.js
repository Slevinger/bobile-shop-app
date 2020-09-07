import React from "react";
import { useSelector } from "react-redux";

const errorStyle = {
  color: "red",
};
export default ({ errorType = "default", style = {}, ...props }) => {
  const error = useSelector(({ errors }) => {
    return errors[errorType];
  });
  if (!error) {
    return null;
  }

  return (
    <div style={{ ...errorStyle, ...style }} {...props}>
      {error}
    </div>
  );
};
