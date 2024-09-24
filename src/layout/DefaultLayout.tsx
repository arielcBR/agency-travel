import { Footer } from "../components/Footer";
import { Content, LayoutContainer } from "./styles";
import { Outlet } from "react-router-dom";
import { useMenu } from "../hooks/MenuContext";
import { MenuMobile } from "../components/MenuMobile";

export function DefaultLayout() {
  const { menuVisible } = useMenu();
  console.log("menuVisible: ", menuVisible)

  return (
    <LayoutContainer>
      {menuVisible && <MenuMobile />}
      {!menuVisible && (
        <>
          <Content>
            <Outlet />
          </Content>
          <Footer />
        </>
      )}
    </LayoutContainer>
  );
}
