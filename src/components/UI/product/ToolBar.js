import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

import PlusButton from "../PlusButton";

import { setSearchTerm } from "../../../store/actions/products";

const ToolBar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  margin-bottom: 60px;

  font-family: open-sans;
  font-size: 30px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 0.6;
  letter-spacing: normal;
  text-align: left;
  color: #363636;
  input {
    margin-left: 28px;
    width: 346px;
    height: 34px;
    border: solid 1px #d9d9d9;
    background-color: #ffffff;
  }
  .main {
    flex: 1;
  }
`;
export default () => {
  const searchTerm = useSelector(
    ({ productsStore: { searchTerm } }) => searchTerm
  );
  const dispatch = useDispatch();
  const history = useHistory();

  const setSearchTermHandler = useCallback(
    (e) => {
      dispatch(setSearchTerm(e.currentTarget.value));
    },
    [dispatch]
  );

  const onAddProductHandler = useCallback(() => {
    history.push("/home/product/");
  }, []);

  return (
    <ToolBar>
      <div className="main">
        {"Products"}
        <input
          placeholder="Search for a product:"
          onInput={setSearchTermHandler}
          value={searchTerm}
        />
      </div>
      <PlusButton onClick={onAddProductHandler} />
    </ToolBar>
  );
};
