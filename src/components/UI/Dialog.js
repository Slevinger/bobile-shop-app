import React from "react";
import styled from "styled-components";

import Colors from "../constants/Colors";
const DialogBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  display: flex;
  align-items: center;
  justify-content: center;
`;
const Dialog = styled.div`
  width: 446px;
  max-width: 446px;
  height: 446px;
  box-shadow: 0px 1px 5px 0 rgba(0, 0, 0, 0.25);
  background-color: #ffffff;
  overflow: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default ({ children }) => {
  return (
    <DialogBackground>
      <Dialog>{children}</Dialog>
    </DialogBackground>
  );
};
