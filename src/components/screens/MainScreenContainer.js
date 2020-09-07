import React from "react";
import styled from "styled-components";
import { Switch, Route } from "react-router-dom";

import ErrorDisplay from "../UI/ErrorDisplay";
import Colors from "../constants/Colors";
import ProductsOverViewScreen from "./ProductsOverview";
import ProductEditScreen from "./ProductEditScreen";
import UserHeader from "../UI/auth/UserHeader";
import Logo from "../UI/Logo";

const MainContainer = styled.div`
  background-color: ${Colors.gray1};
  height: 100%;
`;

const SiteHeader = styled.div`
  height: 65px;
  background-color: white;
  display: flex;
  align-items: center;
  padding-left: 71px;
  flex-direction: row;
`;

const Padder = styled.div`
  padding: 68px;
  display: flex;
  @media (max-width: 480px) {
    padding: 0px;
  }
`;
export default () => {
  return (
    <MainContainer>
      <SiteHeader>
        <div style={{ flex: 1 }}>
          <Logo />
          <ErrorDisplay />
        </div>
        <UserHeader />
      </SiteHeader>
      <Padder>
        <Switch>
          <Route exact path="/home">
            <ProductsOverViewScreen />
          </Route>
          <Route path="/home/product/:pid?">
            <ProductEditScreen />
          </Route>
        </Switch>
      </Padder>
    </MainContainer>
  );
};
