import { Outlet } from "react-router-dom";
import { LayoutContainer } from "./styles";
import { Sidebar } from "../components/Sidebar";

const DefaultLayout = () => {
  return (
    <LayoutContainer>
      <Sidebar />
      <Outlet />
    </LayoutContainer>
  );
};

export default DefaultLayout;
