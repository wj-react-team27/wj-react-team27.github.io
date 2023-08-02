import { styled } from "styled-components";
import {
  ItemMember1,
  ItemMember3,
  ItemMessage,
  ItemRecord,
  ItemStaff1,
  ItemTherapyCenter,
} from "../components/item";
import { TypeTable } from "./CommonComponents";
import { Body4, Title5 } from "../components/typography";

const ItemDescription = styled.div`
  padding: 20px 0;
`;

export const ItemMember1Desc = () => {
  return (
    <>
      <ItemMember1></ItemMember1>
      <ItemMember1 fill="outline"></ItemMember1>
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
            <td>fill</td>
            <td>"contained" | "outline"</td>
            <td>❎</td>
          </tr>
          <tr>
            <td>name</td>
            <td>string</td>
            <td>❎</td>
          </tr>
          <tr>
            <td>trainer</td>
            <td>string</td>
            <td>❎</td>
          </tr>
          <tr>
            <td>gender</td>
            <td>string</td>
            <td>❎</td>
          </tr>
          <tr>
            <td>date</td>
            <td>string</td>
            <td>❎</td>
          </tr>
        </tbody>
      </TypeTable>
      <ItemDescription>
        <Title5>부가설명</Title5>
        <Body4>fill을 설정하여 Item의 테두리 유무를 설정해준다.</Body4>
      </ItemDescription>
    </>
  );
};

export const ItemMember3Desc = () => {
  return (
    <>
      <ItemMember3></ItemMember3>
      <ItemMember3 fill="outline"></ItemMember3>
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
            <td>fill</td>
            <td>"contained" | "outline"</td>
            <td>❎</td>
          </tr>
          <tr>
            <td>name</td>
            <td>string</td>
            <td>❎</td>
          </tr>
          <tr>
            <td>phone</td>
            <td>string</td>
            <td>❎</td>
          </tr>
          <tr>
            <td>trainer</td>
            <td>string</td>
            <td>❎</td>
          </tr>
          <tr>
            <td>date</td>
            <td>string</td>
            <td>❎</td>
          </tr>
        </tbody>
      </TypeTable>
      <ItemDescription>
        <Title5>부가설명</Title5>
        <Body4>fill을 설정하여 Item의 테두리 유무를 설정해준다.</Body4>
      </ItemDescription>
    </>
  );
};

export const ItemStaff1Desc = () => {
  return (
    <>
      <ItemStaff1></ItemStaff1>
      <ItemStaff1 fill="outline"></ItemStaff1>
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
            <td>fill</td>
            <td>"contained" | "outline"</td>
            <td>❎</td>
          </tr>
          <tr>
            <td>name</td>
            <td>string</td>
            <td>❎</td>
          </tr>
          <tr>
            <td>phone</td>
            <td>string</td>
            <td>❎</td>
          </tr>
          <tr>
            <td>memo</td>
            <td>string</td>
            <td>❎</td>
          </tr>
        </tbody>
      </TypeTable>
      <ItemDescription>
        <Title5>부가설명</Title5>
        <Body4>fill을 설정하여 Item의 테두리 유무를 설정해준다.</Body4>
      </ItemDescription>
    </>
  );
};

export const ItemRecordDesc = () => {
  return (
    <>
      <ItemRecord></ItemRecord>
      <ItemRecord fill="outline"></ItemRecord>
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
            <td>fill</td>
            <td>"contained" | "outline"</td>
            <td>❎</td>
          </tr>
          <tr>
            <td>date</td>
            <td>string</td>
            <td>❎</td>
          </tr>
          <tr>
            <td>memo</td>
            <td>string</td>
            <td>❎</td>
          </tr>
          <tr>
            <td>trainer</td>
            <td>string</td>
            <td>❎</td>
          </tr>
        </tbody>
      </TypeTable>
      <ItemDescription>
        <Title5>부가설명</Title5>
        <Body4>fill을 설정하여 Item의 테두리 유무를 설정해준다.</Body4>
      </ItemDescription>
    </>
  );
};

export const ItemTherapyDesc = () => {
  return (
    <>
      <ItemTherapyCenter></ItemTherapyCenter>
      <ItemTherapyCenter fill="outline"></ItemTherapyCenter>
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
            <td>fill</td>
            <td>"contained" | "outline"</td>
            <td>❎</td>
          </tr>
          <tr>
            <td>date</td>
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
      <ItemDescription>
        <Title5>부가설명</Title5>
        <Body4>fill을 설정하여 Item의 테두리 유무를 설정해준다.</Body4>
      </ItemDescription>
    </>
  );
};

export const ItemMessageDesc = () => {
  return (
    <>
      <ItemMessage></ItemMessage>
      <ItemMessage fill="outline"></ItemMessage>
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
            <td>fill</td>
            <td>"contained" | "outline"</td>
            <td>❎</td>
          </tr>
          <tr>
            <td>memo</td>
            <td>string</td>
            <td>❎</td>
          </tr>
          <tr>
            <td>date</td>
            <td>string</td>
            <td>❎</td>
          </tr>
        </tbody>
      </TypeTable>
      <ItemDescription>
        <Title5>부가설명</Title5>
        <Body4>fill을 설정하여 Item의 테두리 유무를 설정해준다.</Body4>
      </ItemDescription>
    </>
  );
};
