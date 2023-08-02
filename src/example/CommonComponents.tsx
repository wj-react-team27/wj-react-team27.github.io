import { styled } from "styled-components";
import { color } from "../styles";

export const ComponentsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const ComponentsItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ComponentsItem = styled.div`
  & > label {
    padding-right: 5px;
  }

  & > input {
    margin-right: 10px;
  }

  & > input[type="text"] {
    display: block;
  }
`;

export const TypeTable = styled.table`
  margin-top: 100px;
  & th,
  td {
    text-align: start;
    min-width: 150px;
    border-bottom: 1px solid #000;
  }
`;

export const CodeBlock = styled.code`
  font-family: "Courier New", Courier, monospace;
  margin-top: 15px;
  display: block;
  white-space: pre-wrap;
  background: ${color.basicWhite};
  border-radius: 10px;
  border: 1px solid ${color.borderLine300};
`;
