import { ChangeEvent, useState } from "react";
import { CardLinkMedium } from "../components/card";
import { CardLinkMediumProps } from "../types/cardTypes";
import {
  ComponentsContainer,
  ComponentsItem,
  ComponentsItems,
  TypeTable,
} from "./CommonComponents";
import { Title5 } from "../components/typography";

const CardLinkMediumSample = () => {
  const [attr, setAttr] = useState<CardLinkMediumProps>({});

  const handleChangeValues = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target) {
      switch (e.target.name) {
        case "imageUrl":
          setAttr((prev) => {
            return {
              ...prev,
              imageUrl: e.target.value,
            };
          });
          break;
        case "isDelete":
          setAttr((prev) => {
            return {
              ...prev,
              isDelete: e.target.value === "true",
            };
          });
          break;
        case "description":
          setAttr((prev) => {
            return {
              ...prev,
              description: e.target.value,
            };
          });
          break;
        default:
          setAttr((prev) => prev);
      }
    }
  };

  return (
    <ComponentsContainer>
      <ComponentsItems>
        <ComponentsItem>
          <Title5>ImageUrl</Title5>
          <label htmlFor="imageUrl">imageUrl</label>
          <input
            id="imageUrl"
            type="text"
            value={attr.imageUrl}
            name="imageUrl"
            onChange={handleChangeValues}
          />
        </ComponentsItem>
        <ComponentsItem>
          <Title5>Description</Title5>
          <label htmlFor="imageUrl">description</label>
          <input
            id="description"
            type="text"
            value={attr.description}
            name="description"
            onChange={handleChangeValues}
          />
        </ComponentsItem>
        <ComponentsItem>
          <Title5>IsDelete</Title5>
          <label htmlFor="isDeleteFalse">false</label>
          <input
            id="isDeleteFalse"
            type="radio"
            value={"false"}
            name="isDelete"
            onChange={handleChangeValues}
            defaultChecked
          />
          <label htmlFor="isDeleteTrue">true</label>
          <input
            id="isDeleteTrue"
            type="radio"
            value={"true"}
            name="isDelete"
            onChange={handleChangeValues}
          />
        </ComponentsItem>
      </ComponentsItems>
      <CardLinkMedium
        imageUrl={attr.imageUrl}
        isDelete={attr.isDelete}
        description={attr.description}
      />
      <TypeTable>
        <thead>
          <tr>
            <th>키</th>
            <th>타입</th>
            <th>필수 여부</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>imageUrl</td>
            <td>string</td>
            <td>❎</td>
          </tr>
          <tr>
            <td>isDelete</td>
            <td>boolean</td>
            <td>❎</td>
          </tr>
          <tr>
            <td>description</td>
            <td>string</td>
            <td>❎</td>
          </tr>
        </tbody>
      </TypeTable>
    </ComponentsContainer>
  );
};

export default CardLinkMediumSample;
