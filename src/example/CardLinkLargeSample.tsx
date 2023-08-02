import { ChangeEvent, useState } from "react";
import { CardLinkLarge } from "../components/card";
import { CardLinkLargeProps } from "../types/cardTypes";
import {
  ComponentsContainer,
  ComponentsItem,
  ComponentsItems,
  TypeTable,
} from "./CommonComponents";
import { Title5 } from "../components/typography";

const CardLinkLargeSample = () => {
  const [attr, setAttr] = useState<CardLinkLargeProps>({});

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
        case "title":
          setAttr((prev) => {
            return {
              ...prev,
              title: e.target.value,
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
          <Title5>Title</Title5>
          <label htmlFor="imageUrl">title</label>
          <input
            id="title"
            type="text"
            value={attr.title}
            name="title"
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
      </ComponentsItems>
      <CardLinkLarge
        imageUrl={attr.imageUrl}
        title={attr.title}
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
            <td>title</td>
            <td>string</td>
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

export default CardLinkLargeSample;
