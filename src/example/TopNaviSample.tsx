import { useState } from "react";
import TopNavigationBar from "../components/navigation/TopNavigationBar";
import { Body1, Title5 } from "../components/typography";
import { styled } from "styled-components";
import { TypeTable } from "./CommonComponents";

const NaviContainer = styled.div`
  margin-bottom: 50px;
`;

const BtnWrap = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
`;

const TopNaviSample = () => {
  const tapMenuLists = [
    { tapName: "직원 관리", path: "Home" },
    { tapName: "수강권 관리", path: "Reserve" },
    { tapName: "미디어 관리", path: "Member" },
    { tapName: "운영 데이터", path: "Data" },
    { tapName: "알림메시지", path: "MyPage" },
    { tapName: "센터 정보", path: "CenterInfo" },
  ];

  const userData = {
    name: "박관리자01",
  };

  const [exampleList, setExampleList] = useState(tapMenuLists);

  return (
    <>
      <NaviContainer>
        <Title5>Default/Home/Reserve/Member</Title5>
        <TopNavigationBar userData={userData}></TopNavigationBar>
      </NaviContainer>
      <NaviContainer>
        <BtnWrap>
          <button
            onClick={() => {
              setExampleList(tapMenuLists);
            }}>
            <Title5>Center</Title5>
          </button>
          <button
            onClick={() => {
              setExampleList([
                { tapName: "내 정보", path: "MyInfo" },
                { tapName: "공지사항", path: "notification" },
                { tapName: "앱 설정", path: "Setting" },
                { tapName: "운영 데이터", path: "Data" },
              ]);
            }}>
            <Title5>Mypage</Title5>
          </button>
        </BtnWrap>
        <TopNavigationBar tapMenuLists={exampleList} userData={userData}></TopNavigationBar>
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
            <td>tapMenuLists</td>
            <td>tapName</td>
            <td>string</td>
            <td>❎</td>
          </tr>
          <tr>
            <td></td>
            <td>path</td>
            <td>string</td>
            <td>❎</td>
          </tr>
          <tr>
            <td>userData</td>
            <td>userName</td>
            <td>string</td>
            <td>❎</td>
          </tr>
        </tbody>
      </TypeTable>
      <div style={{ display: "flex", flexDirection: "column", marginTop: "50px" }}>
        <Title5> 부가 설명</Title5>
        <Body1>Props "tapMenuLists" 형태는 객체의 배열 형태로 전달, 유저의 필요에 따라 props 정보를 넘겨서 동적으로 렌더링 가능</Body1>
        <Body1>Props "userData" 형태는 객체로 전달, 유저의 필요에 따라 props 정보를 넘겨서 동적으로 렌더링 가능</Body1>
        <Body1>tapMenuLists 키설명: tapName은 네비게이션바의 탭의 이름으로 사용, path는 탭을 누를시 이동할 페이지의 pathname을 말함</Body1>
        <Body1>userData 키설명: 로그인 한 유저의 정보를 담당</Body1>
      </div>
    </>
  );
};

export default TopNaviSample;
