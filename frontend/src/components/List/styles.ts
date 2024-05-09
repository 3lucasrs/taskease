import styled from "styled-components";

export const ListContainer = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  background: ${(props) => props.theme.gray2};
  padding: 15px;
  border-radius: 12px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);

  h1 {
    font-size: 18px;
    font-weight: 500;
  }
`;

export const TableWrapper = styled.div`
  overflow: auto;
  padding-right: 5px;

  &::-webkit-scrollbar {
    width: 15px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.gray5};
    border-radius: 5px;
    &:hover {
      cursor: pointer;
    }
  }
`;

export const Table = styled.table`
  margin-top: 10px;
  width: 100%;
  border-collapse: collapse;
`;

export const TableHeader = styled.th`
  background-color: ${(props) => props.theme.gray5};
  font-weight: 400;
  padding: 14px 8px;
  text-align: left;

  &:first-child {
    border-top-left-radius: 8px;
  }

  &:last-child {
    border-top-right-radius: 8px;
  }
`;

interface TableRowProps {
  overdue?: string;
}

export const TableRow = styled.tr<TableRowProps>`
  height: 50px;
  color: ${(props) =>
    props.overdue === "true" ? props.theme.salmon : "inherit"};

  &:nth-child(even) {
    color: ${(props) =>
      props.overdue === "true" ? props.theme.salmon : "inherit"};
    background-color: ${(props) => props.theme.gray3};
  }
`;

export const TaskCell = styled.td`
  width: 35%;
  padding: 5px;
`;

export const DateCell = styled.td`
  width: 15%;
  padding: 5px;
`;

export const StatusCell = styled.td`
  width: 10%;
  padding: 5px;
`;

export const PriorityCell = styled.td`
  width: 10%;
  padding: 5px;
`;

export const Priority = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
  justify-content: flex-start;
`;
