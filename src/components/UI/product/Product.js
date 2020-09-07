import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Button, withStyles } from "@material-ui/core";

import ImageContainer from "../ImageContainer";
import { Product, ProductDetails, ProductTools } from "./StyledProduct";
import Colors from "../../constants/Colors";
import { removeProduct } from "../../../store/actions/products";

const StyledButton = withStyles({
  root: {
    borderRadius: 3,
    border: 0,
    color: "red",
    minWidth: 0,
  },
  label: {
    textTransform: "capitalize",
  },
})(Button);

export default ({ id, name, imageUrl, price, description }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const onEditClickHandler = useCallback(() => {
    history.push(`/home/product/${id}`);
  }, [id]);

  const onRemoveClickHandler = useCallback(() => {
    dispatch(removeProduct(id));
  }, [id]);
  return (
    <Product>
      <ImageContainer src={imageUrl} />
      <ProductDetails>
        <div className="title">{name}</div>
        <div className="description">{description}</div>
        <div className="price">USD {price}</div>
      </ProductDetails>
      <ProductTools>
        <StyledButton
          buttonStyle={{ borderRadius: "50%", padding: 0 }}
          style={{ borderRadius: "50%", padding: "10px" }}
          onClick={onEditClickHandler}
        >
          <EditOutlined style={{ fontSize: "18px", color: Colors.primary }} />
        </StyledButton>
        <StyledButton
          buttonStyle={{ borderRadius: "50%" }}
          style={{ borderRadius: "50%", padding: "10px" }}
          onClick={onRemoveClickHandler}
        >
          <DeleteOutlined style={{ fontSize: "18px", color: "#ed1c24" }} />
        </StyledButton>
      </ProductTools>
    </Product>
  );
};
