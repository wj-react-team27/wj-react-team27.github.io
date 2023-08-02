import { styled } from "styled-components";

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
  }
`;
