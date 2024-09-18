import { Footer } from "../components/Footer";
import { Content, LayoutContainer } from "./styles";
import { Outlet } from "react-router-dom";

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <Content>
        <Outlet />
      </Content>
      <Footer />
    </LayoutContainer>
  );
}
