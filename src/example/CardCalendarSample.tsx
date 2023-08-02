import { ChangeEvent, useState } from "react";
import { CardCalendarData } from "../components/card";
import { Title5 } from "../components/typography";
import {
  ComponentsContainer,
  ComponentsItem,
  ComponentsItems,
  TypeTable,
} from "./CommonComponents";
import { ICardCalendarDataProps } from "../types/cardTypes";

const CardCalendarSample = () => {
  const [attr, setAttr] = useState<ICardCalendarDataProps>({
    period: "",
    name: "",
    totalSchedule: "",
    cancelSchedule: "",
    percent: "",
  });

  const handleChangeValues = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target) {
      switch (e.target.name) {
        case "period":
          setAttr((prev) => {
            return {
              ...prev,
              period: e.target.value,
            };
          });
          break;
        case "name":
          setAttr((prev) => {
            return {
              ...prev,
              name: e.target.value,
            };
          });
          break;
        case "totalSchedule":
          setAttr((prev) => {
            return {
              ...prev,
              totalSchedule: e.target.value,
            };
          });
          break;
        case "cancelSchedule":
          setAttr((prev) => {
            return {
              ...prev,
              cancelSchedule: e.target.value,
            };
          });
          break;
        case "percent":
          setAttr((prev) => {
            return {
              ...prev,
              percent: e.target.value,
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
          <Title5>Period</Title5>
          <label htmlFor="period">period</label>
          <input
            id="period"
            type="text"
            value={attr.period}
            name="period"
            onChange={handleChangeValues}
          />
        </ComponentsItem>
        <ComponentsItem>
          <Title5>Name</Title5>
          <label htmlFor="name">name</label>
          <input
            id="name"
            type="text"
            value={attr.name}
            name="name"
            onChange={handleChangeValues}
          />
        </ComponentsItem>
        <ComponentsItem>
          <Title5>TotalSchedule</Title5>
          <label htmlFor="totalSchedule">totalSchedule</label>
          <input
            id="totalSchedule"
            type="text"
            value={attr.totalSchedule}
            name="totalSchedule"
            onChange={handleChangeValues}
          />
        </ComponentsItem>
        <ComponentsItem>
          <Title5>CancelSchedule</Title5>
          <label htmlFor="cancelSchedule">cancelSchedule</label>
          <input
            id="cancelSchedule"
            type="text"
            value={attr.cancelSchedule}
            name="cancelSchedule"
            onChange={handleChangeValues}
          />
        </ComponentsItem>
        <ComponentsItem>
          <Title5>Percent</Title5>
          <label htmlFor="percent">percent</label>
          <input
            id="percent"
            type="text"
            value={attr.percent}
            name="percent"
            onChange={handleChangeValues}
          />
        </ComponentsItem>
      </ComponentsItems>
      <CardCalendarData
        period={attr.period}
        name={attr.name}
        totalSchedule={attr.totalSchedule}
        cancelSchedule={attr.cancelSchedule}
        percent={attr.percent}
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
            <td>period</td>
            <td>string</td>
            <td>❎</td>
          </tr>
          <tr>
            <td>name</td>
            <td>string</td>
            <td>❎</td>
          </tr>
          <tr>
            <td>totalSchedule</td>
            <td>string</td>
            <td>❎</td>
          </tr>
          <tr>
            <td>cancelSchedule</td>
            <td>string</td>
            <td>❎</td>
          </tr>
          <tr>
            <td>percent</td>
            <td>string, number</td>
            <td>❎</td>
          </tr>
        </tbody>
      </TypeTable>
    </ComponentsContainer>
  );
};

export default CardCalendarSample;
