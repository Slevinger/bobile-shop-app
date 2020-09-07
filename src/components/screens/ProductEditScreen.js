import React, { useEffect, useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { NavLink, useParams, useHistory } from "react-router-dom";
import { CloseOutlined, SaveFilled } from "@ant-design/icons";

import {
  addProduct,
  updateProduct,
  fetchProduct,
} from "../../store/actions/products";
import Colors from "../constants/Colors";
import EditProduct from "../UI/product/EditProduct";
import Button from "../UI/Button";

const BreadCrumbsContainer = styled.div`
  flex: 1;
  font-family: open-sans;
  font-size: 30px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 0.6;
  letter-spacing: normal;
  text-align: left;
  color: #363636;
  margin-bottom: 54px;
  .link {
    color: ${Colors.primary};
    text-decoration: none;
  }
  .next {
    color: #d7d7d7;
  }
`;

const BreadCrumbs = (currentProduct) => {
  return (
    <BreadCrumbsContainer>
      <NavLink className="link" strict to="/home">
        Products
      </NavLink>
      <text className="next">{"  >  "}</text>
      <text>{currentProduct.name}</text>
    </BreadCrumbsContainer>
  );
};
export default () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const params = useParams();
  const { pid } = params;
  const [currentProduct, setCurrentProduct] = useState({});
  const products = useSelector(({ productsStore: { products } }) => products);
  useEffect(() => {
    if (pid) {
      if (!products[pid]) {
        dispatch(fetchProduct(pid));
      } else {
        setCurrentProduct(products[pid] || {});
      }
    }
  }, [pid, products]);
  // const { Editor, values } = useProductEditor(currentProduct);

  const addProductHandler = useCallback(
    (e) => {
      dispatch(addProduct(currentProduct));
    },
    [currentProduct]
  );

  const editProductHandler = useCallback(
    (e) => {
      dispatch(updateProduct(currentProduct));
    },
    [currentProduct]
  );

  const submitHandler = useCallback(
    async (e) => {
      if (pid) {
        editProductHandler(e);
      } else {
        addProductHandler(e);
      }
      history.push("/home");
    },
    [currentProduct]
  );
  return (
    <div>
      <div style={{ display: "flex" }}>
        <BreadCrumbs {...currentProduct} />
        <Button
          onClick={() => {
            history.push("/home");
          }}
          style={{ width: "100px" }}
          icon={<CloseOutlined />}
        >
          Cancel
        </Button>
        <Button
          style={{ width: "100px", marginLeft: "10px" }}
          icon={<SaveFilled />}
          colored
          onClick={submitHandler}
        >
          Save
        </Button>
      </div>
      <EditProduct {...currentProduct} updateProduct={setCurrentProduct} />
    </div>
  );
};
