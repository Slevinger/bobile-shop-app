import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

import { fetchProducts } from "../../store/actions/products";
import ToolBar from "../UI/product/ToolBar";
import Product from "../UI/product/Product";
import Loading from "../UI/Loading";

const ProductsList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
`;

export default () => {
  const dispatch = useDispatch();

  const products = useSelector(
    ({ productsStore: { products, searchTerm } }) => {
      return Object.keys(products)
        .map((id) => ({ id, ...products[id] }))
        .filter((product) =>
          product.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .sort((a, b) => (a.id > b.id ? 1 : -1));
    }
  );

  useEffect(() => {
    if (!products || products.length === 0) {
      dispatch(fetchProducts());
    }
  }, [products]);

  return (
    <div>
      <ToolBar />
      <Loading />
      <ProductsList>
        {products.map((product) => {
          return <Product key={product.id} {...product} />;
        })}
      </ProductsList>
    </div>
  );
};
