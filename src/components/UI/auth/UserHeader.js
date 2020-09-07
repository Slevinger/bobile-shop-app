import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Avatar } from "@material-ui/core";
import { doLogout } from "../../../store/actions/auth";
import styled from "styled-components";
import Colors from "../../constants/Colors";

const HeaderUserContainer = styled.div`
  flex-direction: row;
  display: flex;
  .details {
    padding-left: 10px;
    padding-right: 10px;
    margin-right: 10px;
    .email {
      color: ${Colors.gray2};
      margin-bottom: 4px;
    }
    .button {
      color: ${Colors.primary};
      &:hover {
        cursor: pointer;
      }
    }
  }
`;
export default () => {
  const dispatch = useDispatch();
  const user = useSelector((stores) => {
    return stores.auth;
  });
  const logout = useCallback(() => {
    dispatch(doLogout());
  }, [user]);
  return (
    <HeaderUserContainer>
      <Avatar />
      <div className="details">
        <div className="email">{user.email}</div>
        <div className="button" onClick={logout}>
          LOGOUT
        </div>
      </div>
    </HeaderUserContainer>
  );
};
