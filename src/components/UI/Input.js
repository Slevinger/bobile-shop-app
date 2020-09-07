import React from "react";
import styled from "styled-components";

import ErrorDisplay from "./ErrorDisplay";

const InputContainer = styled.div`
  align-self: center;
  position: relative;
  width: 100%;
`;

const Input = styled.input`
  height: 34px;
  line-height: 18px;
  font-size: 18px;
  border: solid 1px #d9d9d9;
  width: 100%;
`;

const Label = styled.text`
  font-family: open-sans;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.71;
  letter-spacing: normal;
  text-align: left;
  color: #959595;
  position: absolute;
  top: -26px;
`;

export default ({ label, errorType, type, ...props }) => {
  return (
    <InputContainer>
      <div style={{ flexDirection: "column", display: "flex" }}>
        <Label>{label}</Label>
        <Input type={type || "text"} {...props} />
        <ErrorDisplay errorType={errorType} />
      </div>
    </InputContainer>
  );
};
