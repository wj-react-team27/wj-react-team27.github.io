import { createGlobalStyle, styled } from "styled-components";
import { Headline } from "./components/typography";
import { color } from "./styles";
import { useState } from "react";
import BannerSample from "./example/BannerSample";
import CardCustom from "./example/CardCustom";
import ButtonSample from "./example/ButtonSample";

const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
`;

const MainContainer = styled.div`
  background: ${color.background};
`;

const MainContents = styled.div`
  max-width: 1200px;
  padding-top: 100px;
  margin: auto;

  & > p {
    margin-bottom: 50px;
  }
`;

const ComponentsContainer = styled.div`
  display: flex;
  padding: 30px;
  gap: 24px;
`;

const ComponentsCardBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  & > div {
    cursor: pointer;
  }
`;

const ComponentsBox = styled.div`
  width: 100%;
`;

function App() {
  const [isSeleced, setIsSelected] = useState("banners");

  const selectComponents = (isSeleced: string): JSX.Element => {
    switch (isSeleced) {
      case "banners":
        return <BannerSample></BannerSample>;
      case "button":
        return <ButtonSample></ButtonSample>;
      case "card":
        return <div>card</div>;
      default:
        return <div>Error</div>;
    }
  };

  return (
    <>
      <GlobalStyle />
      <MainContainer>
        <MainContents>
          <Headline>3-20-gangstarr 컴포넌트</Headline>
          <ComponentsContainer>
            <ComponentsCardBox>
              <CardCustom
                imageUrl={
                  "https://cdn-icons-png.flaticon.com/128/6057/6057969.png"
                }
                description={"Banners"}
                onClick={() => setIsSelected("banners")}
              />
              <CardCustom
                imageUrl={"https://cdn-icons-png.flaticon.com/128/1/1402.png"}
                description={"Button"}
                onClick={() => setIsSelected("button")}
              />
              <CardCustom
                imageUrl={
                  "https://cdn-icons-png.flaticon.com/128/3132/3132909.png"
                }
                description={"Card"}
                onClick={() => setIsSelected("card")}
              />
            </ComponentsCardBox>
            <ComponentsBox>{selectComponents(isSeleced)}</ComponentsBox>
          </ComponentsContainer>
        </MainContents>
      </MainContainer>
    </>
  );
}

export default App;
