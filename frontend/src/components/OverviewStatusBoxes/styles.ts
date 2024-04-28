import styled from "styled-components";
import { darkTheme } from "../../styles/themes/darkTheme";

export const OverviewBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;
  flex-wrap: wrap;
  margin-bottom: 25px;
`;

interface IconProps {
  status: "notstarted" | "inprogress" | "finished" | "canceled";
}

const getStatusColor = (status: string) => {
  switch (status) {
    case "notstarted":
      return `${darkTheme.yellow}`;

    case "inprogress":
      return `${darkTheme.blue}`;

    case "finished":
      return `${darkTheme.green}`;

    case "canceled":
      return `${darkTheme.salmon}`;
    default:
      return "white";
  }
};

export const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: calc(100% / 4 - 15px);
  background: ${(props) => props.theme.gray2};
  padding: 15px;
  gap: 20px;
  border-radius: 12px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
`;

export const BoxTopic = styled.div`
  font-size: 20px;
  font-weight: 500;
`;

export const BoxNumber = styled.div`
  font-size: 35px;
  font-weight: 500;
`;

export const BoxIcon = styled.div<IconProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  height: 50px;
  width: 50px;
  background-color: ${(props) => getStatusColor(props.status)};
  color: ${(props) => props.theme.color1};
  border-radius: 12px;
  align-self: flex-start;
`;
