import { useState } from "react";
import BottomNavigationBar from "../components/navigation/BottomNavigationBar";
import { Title5, Body1 } from "../components/typography";
import { styled } from "styled-components";
import { TypeTable } from "./CommonComponents";

const NaviContainer = styled.div`
  margin-bottom: 50px;
`;

const BotNaviSample = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <NaviContainer>
        <Title5>Default</Title5>
        <BottomNavigationBar />
      </NaviContainer>
      <NaviContainer>
        <Title5>Home/Reserve/Member/Center/Mypage</Title5>
        <BottomNavigationBar
          tabNameLists={{
            home: "home",
            reservation: "reservation",
            patient: "patient",
            center: "center",
            mypage: "mypage",
          }}
          onClickHome={() => {
            history.pushState("", "", "/home");
            setCount((prev) => ++prev);
          }}
          onClickReservation={() => {
            history.pushState("", "", "/reservation");
            setCount((prev) => ++prev);
          }}
          onClickPatient={() => {
            history.pushState("", "", "/patient");
            setCount((prev) => ++prev);
          }}
          onClickCenter={() => {
            history.pushState("", "", "/center");
            setCount((prev) => ++prev);
          }}
          onClickMypage={() => {
            history.pushState("", "", "/mypage");
            setCount((prev) => ++prev);
          }}
        />
      </NaviContainer>
      <TypeTable>
        <thead>
          <tr>
            <th>Props</th>
            <th>키</th>
            <th>타입</th>
            <th>필수 여부</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>tabNameLists</td>
            <td>home</td>
            <td>string</td>
            <td>🅾️</td>
          </tr>
          <tr>
            <td></td>
            <td>reservation</td>
            <td>string</td>
            <td>🅾️</td>
          </tr>
          <tr>
            <td></td>
            <td>patient</td>
            <td>string</td>
            <td>🅾️</td>
          </tr>
          <tr>
            <td></td>
            <td>center</td>
            <td>string</td>
            <td>🅾️</td>
          </tr>
          <tr>
            <td></td>
            <td>mypage</td>
            <td>string</td>
            <td>🅾️</td>
          </tr>
          <tr>
            <td>onClickHome()</td>
            <td></td>
            <td>()={">"}void</td>
            <td>🅾️</td>
          </tr>
          <tr>
            <td>onClickReservation()</td>
            <td></td>
            <td>()={">"}void</td>
            <td>🅾️</td>
          </tr>
          <tr>
            <td>onClickPatient()</td>
            <td></td>
            <td>()={">"}void</td>
            <td>🅾️</td>
          </tr>
          <tr>
            <td>onClickCenter()</td>
            <td></td>
            <td>()={">"}void</td>
            <td>🅾️</td>
          </tr>
          <tr>
            <td>onClickMypage()</td>
            <td></td>
            <td>()={">"}void</td>
            <td>🅾️</td>
          </tr>
        </tbody>
      </TypeTable>
      <div style={{ display: "flex", flexDirection: "column", marginTop: "50px" }}>
        <Title5> 부가 설명</Title5>
        <Body1>Props "tabNameLists" 형태는 객체로 전달, 키와 키값을 동일한 문자로 전달해야 한다.</Body1>
        <Body1>onClick 이벤트의 경우 useNavigate() 혹은 그 외의 함수를 사용해 페이지 이동하는 함수를 props로 전달한다.</Body1>
        <Body1>BotNavi 컴포넌트는 onClick이벤트로 페이지를 이동하고 props로 전달받은 tabNameLists의 키값과</Body1>
        <Body1>현재의 pathname을 비교해서 어떤 아이콘이 파란색을 띄게 되는지 동적으로 렌더링한다.</Body1>
      </div>
    </>
  );
};

export default BotNaviSample;
