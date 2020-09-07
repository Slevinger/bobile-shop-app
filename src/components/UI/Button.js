import React from "react";
import styled, { css } from "styled-components";
import Colors from "../constants/Colors";

const Button = styled.div`
  ${({ colored }) => {
    return colored
      ? css`
          background-color: ${Colors.primary};
          color: white;
        `
      : css`
          background-color: white;
          color: ${Colors.primary};
        `;
  }}
  object-fit: contain;
  border-radius: 2px;
  padding: 10px;
  padding-bottom: 3px;
  justify-content: space-evenly;
  box-shadow: 0px 1px 5px 0 rgba(0, 0, 0, 0.25);
  border: solid 1px ${Colors.primary};
  line-height: 24px;
  font-family: open-sans;
  font-weight: bolder;
  font-size: 18px;
  align-self: center;
  text-align: center;
  flex-direction: row;
  display: flex;
  &:hover {
    cursor: pointer;
    transform: translateY(-2px);
    background-color: rgba(0, 0, 0, 0.05);
    box-shadow: 0px 1px 5px 0 rgba(0, 0, 0, 0.25);
  }
`;
const ButtonContainer = styled.div`
  flex-direction: column;
  padding-bottom: 7px;
`;
export default ({ style, colored, icon, children, ...props }) => {
  return (
    <ButtonContainer>
      <Button colored={colored} style={style} {...props}>
        <div>{children}</div>
        {icon}
      </Button>
    </ButtonContainer>
  );
};
