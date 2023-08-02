import { useState } from "react";
import CardCalendarSample from "./CardCalendarSample";
import CardLinkLargeSample from "./CardLinkLargeSample";
import CardLinkMediumSample from "./CardLinkMediumSample";
import CardOptionSample from "./CardOptionSample";
import { Title5 } from "../components/typography";
import { ComponentsItem, ComponentsItems } from "./CommonComponents";
import { styled } from "styled-components";

const CustomItems = styled(ComponentsItems)`
  margin-bottom: 80px;
`;

const CardSample = () => {
  const [isSelected, setIsSelected] = useState("calendar");

  const selectComponents = (isSeleced: string): JSX.Element => {
    switch (isSeleced) {
      case "calendar":
        return <CardCalendarSample />;
      case "linkLarge":
        return <CardLinkLargeSample />;
      case "linkMedium":
        return <CardLinkMediumSample />;
      case "option":
        return <CardOptionSample />;
      default:
        return <div>Error</div>;
    }
  };

  return (
    <>
      <CustomItems>
        <ComponentsItem>
          <Title5>Name</Title5>
          <label htmlFor="calendar">calendar</label>
          <input
            id="calendar"
            type="radio"
            value={"calendar"}
            name="mode"
            onChange={(e) => setIsSelected(e.target.value)}
            defaultChecked
          />
          <label htmlFor="linkLarge">linkLarge</label>
          <input
            id="linkLarge"
            type="radio"
            value={"linkLarge"}
            name="mode"
            onChange={(e) => setIsSelected(e.target.value)}
          />
          <label htmlFor="linkMedium">linkMedium</label>
          <input
            id="linkMedium"
            type="radio"
            value={"linkMedium"}
            name="mode"
            onChange={(e) => setIsSelected(e.target.value)}
          />
          <label htmlFor="option">option</label>
          <input
            id="option"
            type="radio"
            value={"option"}
            name="mode"
            onChange={(e) => setIsSelected(e.target.value)}
          />
        </ComponentsItem>
      </CustomItems>
      {selectComponents(isSelected)}
    </>
  );
};

export default CardSample;
