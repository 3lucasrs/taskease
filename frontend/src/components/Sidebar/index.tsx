import {
  Nav,
  NavItem,
  SidebarContainer,
  LogoDetails,
  Icon,
  SidebarWrapper,
  SidebarButtonTheme,
  SocialIcons,
  SidebarFooter,
} from "./styles";

import {
  MdEditNote,
  MdFormatListBulleted,
  MdFormatListBulletedAdd,
  MdOutlineAnalytics,
  MdPendingActions,
} from "react-icons/md";
import { ButtonTheme } from "../ToggleButtonTheme";

// @ts-ignore
import logoImage from "../../assets/logo_blue.png";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

export const Sidebar = () => {
  return (
    <SidebarContainer>
      <SidebarWrapper>
        <LogoDetails>
          <img src={logoImage} width={200} alt="" />
        </LogoDetails>
        <Nav>
          <NavItem to="/add" title="Adicionar tarefa">
            <Icon>
              <MdFormatListBulletedAdd size={24} />
            </Icon>
            Adicionar tarefa
          </NavItem>
          <NavItem to="/" title="Todas tarefas">
            <Icon>
              <MdFormatListBulleted size={24} />
            </Icon>
            Todas tarefas
          </NavItem>

          <NavItem to="/pending" title="Tarefas pendentes">
            <Icon>
              <MdPendingActions size={24} />
            </Icon>
            Tarefas pendentes
          </NavItem>

          <NavItem to="/edit" title="Editar tarefas">
            <Icon>
              <MdEditNote size={24} />
            </Icon>
            Editar tarefa
          </NavItem>

          <NavItem to="/analystics" title="Análise de gráficos">
            <Icon>
              <MdOutlineAnalytics size={24} />
            </Icon>
            Análise
          </NavItem>
        </Nav>
      </SidebarWrapper>

      <SidebarButtonTheme>
        <SidebarFooter>
          <ButtonTheme />
          <SocialIcons>
            <a href="https://www.linkedin.com/in/3lucasrs">
              <FaLinkedin size={24} />
            </a>
            <a href="https://instagram.com/3lucasrs">
              <FaInstagram size={24} />
            </a>
            <a href="https://github.com/3lucasrs">
              <FaGithub size={24} />
            </a>
          </SocialIcons>
        </SidebarFooter>
      </SidebarButtonTheme>
    </SidebarContainer>
  );
};
