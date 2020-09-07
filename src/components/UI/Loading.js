import React from "react";
import { Roller } from "react-spinners-css";
import { usePromiseTracker } from "react-promise-tracker";
import styled from "styled-components";
import Colors from "../constants/Colors";

const RingContainer = styled.div`
  align-self: center;
  justify-self: center;
  text-align: center;
`;
export default (props) => {
  const { promiseInProgress } = usePromiseTracker();

  return (
    promiseInProgress && (
      <RingContainer>
        <Roller {...props} color={Colors.primary} />
      </RingContainer>
    )
  );
};
