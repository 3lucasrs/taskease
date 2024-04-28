import { TbSquareRoundedLetterT } from "react-icons/tb";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const SidebarContainer = styled.div`
  width: 250px;
  height: 100%;
  background-color: ${(props) => props.theme.gray2};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
`;

export const SidebarWrapper = styled.div`
  width: 100%;
`;

export const LogoDetails = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  span {
    color: ${(props) => props.theme.text_gray2};
    margin-left: -4px;
    font-size: 28px;
    font-weight: 500;
  }
`;

export const LetterL = styled(TbSquareRoundedLetterT)`
  color: ${(props) => props.theme.primary};
`;

export const Nav = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Icon = styled.div`
  display: flex;
  color: ${(props) => props.theme.text_gray2};
`;

export const NavItem = styled(NavLink)`
  width: 100%;
  padding: 12px 20px;
  height: 50px;
  font-size: 15px;
  display: flex;
  align-items: center;

  text-align: start;

  gap: 10px;
  font-weight: 500;
  text-decoration: none;
  color: ${(props) => props.theme.text_gray2};
  transition: all 0.4s ease;

  &:hover {
    background-color: ${(props) => props.theme.gray3};
    color: ${(props) => props.theme.text_gray1};
  }

  &.active {
    background-color: ${(props) => props.theme.gray3};
    color: ${(props) => props.theme.text_gray1};
    ${Icon} {
      color: ${(props) => props.theme.primary};
    }
  }
`;

export const SidebarButtonTheme = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
`;

export const SidebarFooter = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SocialIcons = styled.div`
  margin-top: 10px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;

  a {
    text-decoration: none;
    color: ${(props) => props.theme.gray4};

    &:hover {
      color: ${(props) => props.theme.primary};
      cursor: pointer;
    }
  }
`;
