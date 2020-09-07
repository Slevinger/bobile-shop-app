import React from "react";
import styled from "styled-components";
import Colors from "../constants/Colors";

const RoundButton = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 36px;
  object-fit: contain;
  box-shadow: 0px 5px 10px 0 rgba(0, 0, 0, 0.15);
  background-color: ${Colors.primary};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 42px;
  position: absolute;
  right: 30px;
  &:hover {
    cursor: pointer;
    transform: translateY(-2px);
    transform: translateX(-1px);
    box-shadow: 0px 10px 15px 0 rgba(0, 0, 0, 0.3);
  }
`;

export default (props) => {
  return <RoundButton {...props}>+</RoundButton>;
};
