import { useState } from "react";
import { Tabs } from "../components/tabs";
import {
  CodeBlock,
  ComponentsContainer,
  ComponentsDescription,
  TypeTable,
} from "./CommonComponents";
import { Body4, Title5 } from "../components/typography";

const TabsSample = () => {
  const [currentTabs, setCurrentTabs] = useState<string>("item");

  return (
    <>
      <ComponentsContainer>
        <Tabs
          tabLists={[
            {
              path: "item",
              name: "Item",
              callback: () => setCurrentTabs("item"),
            },
            {
              path: "item1",
              name: "Item1",
              callback: () => setCurrentTabs("item1"),
            },
            {
              path: "item2",
              name: "Item2",
              callback: () => setCurrentTabs("item2"),
            },
          ]}
          currentTab={currentTabs}
        />
        <div></div>
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
              <td>tabLists</td>
              <td>{`{ path : string, name: string, callback: () => void }[]`}</td>
              <td>🅾️</td>
            </tr>
            <tr>
              <td>currentTab</td>
              <td>string</td>
              <td>🅾️</td>
            </tr>
          </tbody>
        </TypeTable>
      </ComponentsContainer>
      <ComponentsDescription>
        <Title5>부가설명</Title5>
        <Body4>
          Tab은 최대 10개만 생성가능함. 배열의 인덱스를 기준으로 0 ~ 9 번이
          화면에 노출됨.
        </Body4>
        <Body4>
          <CodeBlock>
            {`
        const [currentTabs, setCurrentTabs] = useState<string>("item");

        return(
          <Tabs
            tabLists={[
              {
                path: "item",
                name: "Item",
                callback: () => setCurrentTabs("item"),
              },
              {
                path: "item1",
                name: "Item1",
                callback: () => setCurrentTabs("item1"),
              },
              {
                path: "item2",
                name: "Item2",
                callback: () => setCurrentTabs("item2"),
              },
            ]}
            currentTab={currentTabs}
          />
        )
          `}
          </CodeBlock>
        </Body4>
      </ComponentsDescription>
    </>
  );
};

export default TabsSample;
