export const Exception = (props) => {
  const error = new Error(props.payload.message);
  return { ...error, ...props };
};

Exception.prototype = Object.create(Error.prototype);
