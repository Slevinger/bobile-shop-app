import React, { useState } from "react";
import styled from "styled-components";

import Logo from "../Logo";
import Input from "../Input";
import Button from "../Button";
import Dialog from "../Dialog";
import ErrorDisplay from "../ErrorDisplay";
import Loading from "../Loading";

const StyledPageHeader = styled.div`
  align-self: center;
  font-family: open-sans;
  font-size: 36px;
  line-height: 45px;
  margin-top: 57px;
`;

const LoginPage = styled.div`
  width: 80%;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-evenly;
`;

export default ({ label, onSubmit, link }) => {
  const credentials = JSON.parse(
    localStorage.getItem("authCredentials") || "{}"
  );
  const [email, setEmail] = useState(credentials.email);
  const [password, setPassword] = useState("");

  return (
    <Dialog logo={<Logo />}>
      <LoginPage>
        <StyledPageHeader>{label}:</StyledPageHeader>
        <Input
          label="Email"
          errorType="email"
          onChange={(e) => {
            setEmail(e.currentTarget.value);
          }}
          value={email}
        />
        <Input
          label="Password"
          value={password}
          errorType="password"
          type="password"
          onChange={(e) => setPassword(e.currentTarget.value)}
        />
        <Button
          style={{ width: "100%" }}
          onClick={() => {
            onSubmit(email, password);
          }}
        >
          {label}
        </Button>
        {link}
        <ErrorDisplay errorKey="login/signup" />
        <Loading />
      </LoginPage>
    </Dialog>
  );
};
