import styled from "styled-components";

export const Product = styled.div`
  padding-left: 25px;

  box-shadow: 0px 1px 5px 0 rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  background-color: #ffffff;
  flex-direction: row;
  @media (min-width: 480px) {
    width: 872px;
    min-width: 872px;
    max-width: 872px;
    height: 136px;
    margin: 10px;
  }
  @media (max-width: 480px) {
    padding: 5px;
    width: 100%;
    margin-bottom: 10px;
  }
  &:hover {
    cursor: pointer;
  }
`;

export const ProductDetails = styled.div`
  flex: 1;
  flex-direction: column;
  display: flex;
  justify-content: flex-start;
  height: 80%;
  padding-left: 28px;
  position: relative;
  .title {
    font-family: open-sans;
    font-size: 18px;
    font-weight: 600;
    font-style: normal;
    line-height: 1;
    letter-spacing: normal;
    text-align: left;
    color: #363636;
    margin-bottom: 15px;
  }
  .description {
    font-family: open-sans;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.29;
    letter-spacing: normal;
    text-align: left;
    margin-bottom: 23px;
    color: #363636;
  }
  .price {
    text-shadow: 2px 0 0 #ffffff;
    font-family: OpenSans;
    font-size: 18px;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: 2.5;
    letter-spacing: normal;
    text-align: left;
    color: #363636;
  }
`;

export const ProductTools = styled.div`
  align-self: flex-start;
`;
