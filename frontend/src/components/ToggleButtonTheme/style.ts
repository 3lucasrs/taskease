import { FaMoon, FaSun } from "react-icons/fa";
import styled from "styled-components";

export const Button = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  outline: none;
  border: none;

  padding: 6px;
  border-radius: 8px;
  background-color: ${(props) => props.theme.gray5};
  color: ${(props) => props.theme.text_gray2};
  gap: 6px;
  font-size: 14px;
  font-weight: 500;

  &:hover {
    cursor: pointer;
    opacity: 0.9;
  }
`;

export const Sun = styled(FaSun)`
  color: ${(props) => props.theme.yellow};
`;

export const Moon = styled(FaMoon)`
  color: ${(props) => props.theme.gray4};
`;
