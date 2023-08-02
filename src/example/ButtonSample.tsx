import {
  ComponentsContainer,
  ComponentsItem,
  ComponentsItems,
} from "./CommonComponents";
import { Button } from "../components/button";
import { Title5 } from "../components/typography";
import { ChangeEvent, useState } from "react";
import { IbuttonProps } from "../types/buttonTypes";

const SizeOptions = {
  full: "full",
  xlarge: "xlarge",
  large: "large",
  medium: "medium",
  small: "small",
  xsmall: "xsmall",
};

const fillOptions = {
  contained: "contained",
  outline: "outline",
};

const modeOptions = {
  normal: "normal",
  enabled: "enabled",
  disabled: "disabled",
};

const ButtonSample = () => {
  const [attr, setAttr] = useState<IbuttonProps>({
    children: "Button",
    size: "large",
    fill: "outline",
    mode: "normal",
  });
  const handleChangeSelected = (e: ChangeEvent<HTMLSelectElement>) => {
    setAttr((prev) => {
      return {
        ...prev,
        size: SizeOptions[e.target.value],
      };
    });
  };
  const handleChangeValues = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target) {
      switch (e.target.name) {
        case "fill":
          setAttr((prev) => {
            return {
              ...prev,
              fill: fillOptions[e.target.value],
            };
          });
          break;
        case "mode":
          setAttr((prev) => {
            return {
              ...prev,
              mode: modeOptions[e.target.value],
            };
          });
          break;
        case "children":
          setAttr((prev) => {
            return {
              ...prev,
              children: e.target.value,
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
          <Title5>Size</Title5>
          <label htmlFor="size">Size</label>
          <select
            id="size"
            defaultValue="large"
            onChange={handleChangeSelected}>
            <option value="full">full</option>
            <option value="xlarge">xlarge</option>
            <option value="large">large</option>
            <option value="medium">medium</option>
            <option value="small">small</option>
            <option value="xsmall">xsmall</option>
          </select>
        </ComponentsItem>
        <ComponentsItem>
          <Title5>Fill</Title5>
          <label htmlFor="fillContained">contained</label>
          <input
            id="fillContained"
            type="radio"
            value={"contained"}
            name="fill"
            onChange={handleChangeValues}
          />
          <label htmlFor="fillOutline">outline</label>
          <input
            id="fillOutline"
            type="radio"
            value={"outline"}
            name="fill"
            onChange={handleChangeValues}
            defaultChecked
          />
        </ComponentsItem>
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
          <label htmlFor="modeEnabled">Enabled</label>
          <input
            id="modeEnabled"
            type="radio"
            value={"enabled"}
            name="mode"
            onChange={handleChangeValues}
          />
          <label htmlFor="modeDisabled">Disabled</label>
          <input
            id="modeDisabled"
            type="radio"
            value={"disabled"}
            name="mode"
            onChange={handleChangeValues}
          />
        </ComponentsItem>
        <ComponentsItem>
          <Title5>Children</Title5>
          <label htmlFor="children">children</label>
          <input
            id="children"
            type="text"
            value={attr.children}
            name="children"
            onChange={handleChangeValues}
          />
        </ComponentsItem>
      </ComponentsItems>
      <Button size={attr.size} fill={attr.fill} mode={attr.mode}>
        {attr.children}
      </Button>
    </ComponentsContainer>
  );
};

export default ButtonSample;
