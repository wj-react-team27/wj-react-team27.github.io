import {
  ComponentsContainer,
  ComponentsItem,
  ComponentsItems,
  TypeTable,
} from "./CommonComponents";
import { Label } from "../components/label";
import { Title5 } from "../components/typography";
import { IlabelProps } from "../types/labelTypes";
import { useState } from "react";
import { styled } from "styled-components";

const LabelContainer = styled.div`
  width: 100px;
`;

const LabelSample = () => {
  const [options, setOptions] = useState<IlabelProps>({
    children: "Label",
    shape: "rectangle",
    background: "blue",
    color: "blue500",
  });

  const onChangeOption = (
    name: keyof IlabelProps,
    value: IlabelProps[keyof IlabelProps]
  ) => {
    setOptions((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <ComponentsContainer>
      <ComponentsItems>
        <Title5>Shape</Title5>
        <ComponentsItem>
          <label htmlFor="rectangle">rectangle</label>
          <input
            type="radio"
            name="shape"
            id="rectangle"
            value="rectangle"
            onChange={() => onChangeOption("shape", "rectangle")}
          />
          <label htmlFor="round">round</label>
          <input
            type="radio"
            name="shape"
            id="round"
            value="round"
            onChange={() => onChangeOption("shape", "round")}
          />
        </ComponentsItem>
        <Title5>Background</Title5>
        <ComponentsItem>
          <label htmlFor="background">Background Color : </label>
          <select
            name="background"
            id="background"
            value={options.background}
            onChange={(e) => onChangeOption("background", e.target.value)}
          >
            <option value="blue">blue</option>
            <option value="gray">gray</option>
            <option value="green">green</option>
          </select>
        </ComponentsItem>
        <Title5>Color</Title5>
        <ComponentsItem>
          <label htmlFor="color">Font Color : </label>
          <select
            name="color"
            id="color"
            value={options.color}
            onChange={(e) => onChangeOption("color", e.target.value)}
          >
            <option value="blue500">blue500</option>
            <option value="blue300">blue300</option>
            <option value="gray">gray</option>
            <option value="red">red</option>
            <option value="green">green</option>
          </select>
        </ComponentsItem>
      </ComponentsItems>
      <LabelContainer>
        <Label
          shape={options.shape}
          background={options.background}
          color={options.color}
        >
          갱스터
        </Label>
      </LabelContainer>
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
            <td>shape</td>
            <td>'rectangle', 'round'</td>
            <td>❎</td>
          </tr>
          <tr>
            <td>background</td>
            <td>'blue', 'gray', 'green'</td>
            <td>❎</td>
          </tr>
          <tr>
            <td>color</td>
            <td>'blue500', 'blue300', 'gray', 'red', 'green'</td>
            <td>❎</td>
          </tr>
          <tr>
            <td>children</td>
            <td>string</td>
            <td>🅾️</td>
          </tr>
        </tbody>
      </TypeTable>
    </ComponentsContainer>
  );
};

export default LabelSample;
