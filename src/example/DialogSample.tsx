import { useState } from "react";
import {
  Dialog,
  DialogButton,
  DialogButtonBox,
  DialogContenets,
  DialogDescription,
  DialogTitle,
} from "../components/dialog";
import {
  CodeBlock,
  ComponentsContainer,
  ComponentsDescription,
  TypeTable,
} from "./CommonComponents";
import { Button } from "../components/button";
import { Body4, Title5 } from "../components/typography";

const DialogSample = () => {
  const [isHide, setIsHide] = useState(false);
  return (
    <>
      <ComponentsContainer>
        <Button mode="enabled" onClick={() => setIsHide(true)}>
          다이얼로그
        </Button>
        <Dialog isHide={isHide} onHanndleHide={() => setIsHide(false)}>
          <DialogContenets>
            <DialogTitle>다이얼로그</DialogTitle>
            <DialogDescription>설명</DialogDescription>
            <DialogButtonBox>
              <DialogButton
                mode="enabled"
                size="medium"
                onClick={() => setIsHide(false)}>
                확인
              </DialogButton>
              <DialogButton
                mode="normal"
                size="medium"
                onClick={() => setIsHide(false)}>
                취소
              </DialogButton>
            </DialogButtonBox>
          </DialogContenets>
        </Dialog>
      </ComponentsContainer>
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
            <td>isHide</td>
            <td>boolean</td>
            <td>🅾️</td>
          </tr>
          <tr>
            <td>onHanndleHide</td>
            <td>() ={">"} void</td>
            <td>🅾️</td>
          </tr>
          <tr>
            <td>children</td>
            <td>JSX.Element[] | JSX.Element</td>
            <td>🅾️</td>
          </tr>
        </tbody>
      </TypeTable>
      <ComponentsDescription>
        <Title5>부가설명</Title5>
        <Body4>아래와 같은 구조로 이루어짐.</Body4>
        <Body4>
          <CodeBlock>
            {`
        const [isHide, setIsHide] = useState(false);

        return(
          <Dialog isHide={isHide} onHanndleHide={() => setIsHide(false)}>
            <DialogContenets>
              <DialogTitle>다이얼로그</DialogTitle>
              <DialogDescription>설명</DialogDescription>
              <DialogButtonBox>
              <DialogButton
                mode="enabled"
                size="medium"
                onClick={() => setIsHide(false)}>
                확인
              </DialogButton>
              <DialogButton
                mode="normal"
                size="medium"
                onClick={() => setIsHide(false)}>
                취소
              </DialogButton>
            </DialogButtonBox>
          </DialogContenets>
        </Dialog>
        )
          `}
          </CodeBlock>
        </Body4>
      </ComponentsDescription>
    </>
  );
};

export default DialogSample;
