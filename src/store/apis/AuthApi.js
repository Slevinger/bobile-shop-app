import { AUTH_URL, API_KEY } from "./config";
const authApi = (email, password, action) => ({
  url: AUTH_URL + `${action}?key=${API_KEY}`,
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ email, password }),
});
export const loginApi = (email, password) =>
  authApi(email, password, "signInWithPassword");

export const signUpApi = (email, password) =>
  authApi(email, password, "signUp");
