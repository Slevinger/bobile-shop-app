import React, { useCallback, useEffect } from "react";
import styled from "styled-components";
import ImageContainer from "../ImageContainer";
import { createFileSelector, toBase64 } from "../../utils";

const EditorContainer = styled.div`
  font-family: open-sans;
  padding-top: 34px;
  padding-bottom: 34px;
  padding-left: 37px;
  padding-right: 37px;
  background-color: white;
  box-shadow: 0px 1px 5px 0 rgba(0, 0, 0, 0.25);
  textarea {
    resize: none;
  }

  .header {
    font-size: 18px;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: 1;
    letter-spacing: normal;
    text-align: left;
    color: #363636;
    margin-bottom: 32px;
  }
  .param-row {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 20px;
    .title {
      width: 200px;
      align-self: flex-start;
    }
    .value {
      flex: 1;
      padding-top: 6px;
      padding-bottom: 6px;
      padding-left: 7px;
      padding-right: 7px;
      font-size: 18px;
      border: solid 1px #d9d9d9;
      font-family: OpenSans;
      font-size: 14px;
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.71;
      letter-spacing: normal;
      text-align: left;
      color: #959595;
      margin-right: 10px;
    }
  }
`;

const Title = ({ title }) => (
  <div style={{ alignSelf: "flex-start" }}>
    <div className="title">{title} :</div>
  </div>
);

export default ({ updateProduct, ...product }) => {
  const { name, price, description, imageUrl, id } = product;

  const onNameChangedHandler = useCallback(
    (e) => {
      updateProduct({ ...product, name: e.currentTarget.value });
    },
    [product]
  );

  const onDescriptionChangedHandler = useCallback(
    (e) => {
      updateProduct({ ...product, description: e.currentTarget.value });
    },
    [product]
  );

  const onPriceChangedHandler = useCallback(
    (e) => {
      if (!isNaN(e.currentTarget.value)) {
        updateProduct({ ...product, price: e.currentTarget.value });
      }
    },
    [product]
  );

  const fileSelector = createFileSelector(async (image) => {
    const base64 = await toBase64(image);

    updateProduct({ ...product, imageUrl: base64 });
  });

  const onImageChangedHandler = useCallback(
    (e) => {
      fileSelector.click();

      // updateProduct({ ...product, name: e.currentTarget.value });
    },
    [product, fileSelector]
  );

  return (
    <EditorContainer>
      <div className="header">General</div>
      <div className="param-row">
        <Title title={"Product Title"} />
        <input
          className="value"
          style={{ maxWidth: "317px" }}
          type="text"
          onChange={onNameChangedHandler}
          value={name}
        />
      </div>
      <div className="param-row">
        <Title title={"Description"} />
        <textarea
          className="value"
          type="text"
          rows="4"
          value={description}
          onChange={onDescriptionChangedHandler}
        />
      </div>

      <div className="param-row">
        <Title title={"Product Image"} />
        <ImageContainer src={imageUrl} />
        <a style={{ marginLeft: "13px" }} onClick={onImageChangedHandler}>
          Upload
        </a>
      </div>

      <div className="param-row">
        <Title title={"Price"} />
        <input
          className="value"
          style={{ maxWidth: "72px" }}
          type="text"
          value={price}
          onChange={onPriceChangedHandler}
        />
        <text>USD</text>
      </div>
    </EditorContainer>
  );
};
