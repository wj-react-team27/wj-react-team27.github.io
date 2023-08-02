import { styled } from "styled-components";
import { ComponentsItems } from "./CommonComponents";
import { Title5 } from "../components/typography";
import { useState } from "react";
import {
  ItemMember1Desc,
  ItemMember3Desc,
  ItemMessageDesc,
  ItemRecordDesc,
  ItemStaff1Desc,
  ItemTherapyDesc,
} from "./ItemDesc";

const ItemContainer = styled.div``;

const ItemList = styled.div``;

const ItemItem = styled.div`
  padding: 10px 0 20px;
  > label {
    padding-left: 10px;
    &:nth-child(2) {
      padding-left: 0;
    }
  }
`;

const ItemSample = () => {
  const [status, setStatus] = useState(0);

  const radioHandler = (status: number) => {
    setStatus(status);
  };
  return (
    <>
      <ItemContainer>
        <ComponentsItems>
          <ItemItem>
            <Title5>Mode</Title5>
            <label htmlFor="modeMember1">Member1</label>
            <input
              id="modeMember1"
              type="radio"
              value={"normal"}
              name="mode"
              onClick={() => radioHandler(0)}
              defaultChecked
            />
            <label htmlFor="modeMember3">Member3</label>
            <input
              id="modeMember3"
              type="radio"
              value={"member3"}
              name="mode"
              onClick={() => radioHandler(1)}
            />
            <label htmlFor="modeStaff1">Staff1</label>
            <input
              id="modeStaff1"
              type="radio"
              value={"staff1"}
              name="mode"
              onClick={() => radioHandler(2)}
            />
            <label htmlFor="modeRecord">Record</label>
            <input
              id="modeRecord"
              type="radio"
              value={"record"}
              name="mode"
              onClick={() => radioHandler(3)}
            />
            <label htmlFor="modeTherapy">Therapy Center</label>
            <input
              id="modeTherapy"
              type="radio"
              value={"therapy"}
              name="mode"
              onClick={() => radioHandler(4)}
            />
            <label htmlFor="modeMessage">Message</label>
            <input
              id="modeMessage"
              type="radio"
              value={"message"}
              name="mode"
              onClick={() => radioHandler(5)}
            />
          </ItemItem>
        </ComponentsItems>
        <ItemList>
          {status === 0 && <ItemMember1Desc></ItemMember1Desc>}
          {status === 1 && <ItemMember3Desc></ItemMember3Desc>}
          {status === 2 && <ItemStaff1Desc></ItemStaff1Desc>}
          {status === 3 && <ItemRecordDesc></ItemRecordDesc>}
          {status === 4 && <ItemTherapyDesc></ItemTherapyDesc>}
          {status === 5 && <ItemMessageDesc></ItemMessageDesc>}
        </ItemList>
      </ItemContainer>
    </>
  );
};

export default ItemSample;
