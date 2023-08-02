import { ChangeEvent, useState } from "react";
import { CardOption } from "../components/card";
import { Title5 } from "../components/typography";
import { ICardOptionProps } from "../types/cardTypes";
import {
  ComponentsContainer,
  ComponentsItem,
  ComponentsItems,
  TypeTable,
} from "./CommonComponents";

const CardOptionSample = () => {
  const [attr, setAttr] = useState<ICardOptionProps>({});

  const handleChangeValues = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target) {
      switch (e.target.name) {
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
        case "isActive":
          setAttr((prev) => {
            return {
              ...prev,
              isActive: e.target.value === "true",
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
          <Title5>Title</Title5>
          <label htmlFor="title">title</label>
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
        <ComponentsItem>
          <Title5>IsActive</Title5>
          <label htmlFor="isActiveFalse">false</label>
          <input
            id="isActiveFalse"
            type="radio"
            value={"false"}
            name="isActive"
            onChange={handleChangeValues}
            defaultChecked
          />
          <label htmlFor="isActiveTrue">true</label>
          <input
            id="isActiveTrue"
            type="radio"
            value={"true"}
            name="isActive"
            onChange={handleChangeValues}
          />
        </ComponentsItem>
      </ComponentsItems>
      <CardOption
        title={attr.title}
        description={attr.description}
        isActive={attr.isActive}
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
            <td>title</td>
            <td>string</td>
            <td>❎</td>
          </tr>
          <tr>
            <td>description</td>
            <td>string</td>
            <td>❎</td>
          </tr>
          <tr>
            <td>isActive</td>
            <td>boolean</td>
            <td>❎</td>
          </tr>
        </tbody>
      </TypeTable>
    </ComponentsContainer>
  );
};

export default CardOptionSample;
