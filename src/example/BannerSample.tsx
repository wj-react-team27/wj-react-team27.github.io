import { ChangeEvent, useState } from "react";
import { Banners } from "../components/banners";
import { styled } from "styled-components";
import { Title5 } from "../components/typography";
import { ComponentsItem, ComponentsItems, TypeTable } from "./CommonComponents";

const BannerContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const BannerSample = () => {
  const [attr, setAttr] = useState<{
    mode?: "primary" | "normal";
    title?: string;
    description?: string;
    imageUrl?: string;
  }>({});

  const handleChangeValues = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target) {
      switch (e.target.name) {
        case "mode":
          setAttr((prev) => {
            return {
              ...prev,
              mode: e.target.value === "primary" ? "primary" : "normal",
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
        case "imageUrl":
          setAttr((prev) => {
            return {
              ...prev,
              imageUrl: e.target.value,
            };
          });
          break;
      }
    }
  };
  return (
    <>
      <BannerContainer>
        <ComponentsItems>
          <ComponentsItem>
            <Title5>Mode</Title5>
            <label htmlFor="modeNormal">Normal</label>
            <input
              id="modeNormal"
              type="radio"
              value={"normal"}
              name="mode"
              onChange={handleChangeValues}
              defaultChecked
            />
            <label htmlFor="modePrimary">Primary</label>
            <input
              id="modePrimary"
              type="radio"
              value={"primary"}
              name="mode"
              onChange={handleChangeValues}
            />
          </ComponentsItem>
          <ComponentsItem>
            <Title5>Title</Title5>
            <label>Title</label>
            <input
              id="imageUrl"
              type="text"
              name="title"
              onChange={handleChangeValues}
            />
          </ComponentsItem>
          <ComponentsItem>
            <Title5>Description</Title5>
            <label>Description</label>
            <input
              id="imageUrl"
              type="text"
              name="description"
              onChange={handleChangeValues}
            />
          </ComponentsItem>
          <ComponentsItem>
            <Title5>Image</Title5>
            <label htmlFor="imageUrl">ImageUrl</label>
            <input
              id="imageUrl"
              type="text"
              name="imageUrl"
              onChange={handleChangeValues}
            />
          </ComponentsItem>
        </ComponentsItems>
        <Banners
          mode={attr.mode}
          title={attr.title}
          description={attr.description}
          imageUrl={attr.imageUrl}
        />
      </BannerContainer>
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
            <td>mode</td>
            <td>"primary" | "normal"</td>
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
          <tr>
            <td>imageUrl</td>
            <td>string</td>
            <td>❎</td>
          </tr>
        </tbody>
      </TypeTable>
    </>
  );
};

export default BannerSample;
