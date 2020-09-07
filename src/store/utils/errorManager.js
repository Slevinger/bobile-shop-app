const errorTypes = {
  MISSING_EMAIL: { type: "email", message: "Email cannot be empty" },
  MISSING_PASSWORD: { type: "password", message: "Password cannot be empy" },
  INVALID_PASSWORD: { type: "password", message: "Password is not correct" },
  EMAIL_EXISTS: { type: "email", message: "Email Already Registerd" },
  EMAIL_NOT_FOUND: { type: "email", message: "Email Does not exist" },
  INVALID_EMAIL: { type: "email", message: "Not a valid email" },
};

export const getStoreError = ({ type, message }) => {
  const error = errorTypes[type || message];
  if (!error) {
    return { type: "default", message };
  }
  return error;
};
