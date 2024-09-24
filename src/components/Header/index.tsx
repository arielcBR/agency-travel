import { HeaderContainer, HeaderMobile, HeaderDesktop, Nav } from "./styles";
import { Logo } from "../Logo";
import { List } from "@phosphor-icons/react";
import { useMenu } from "../../hooks/MenuContext";

export function Header() {
  const { statusMobileMenu } = useMenu();

  function handleOpenMenu() {
    statusMobileMenu(true);
  }

  return (
    <HeaderContainer>
      <HeaderMobile>
        <div>
          <List onClick={handleOpenMenu} />
        </div>
        <Logo />
      </HeaderMobile>

      <HeaderDesktop>
        <Logo />
        <Nav>
          <ul>
            <li>
              <a href="#aboutUs">Sobre</a>
            </li>
            <li>
              <a href="#tours">Nossos tours</a>
            </li>
            <li>
              <a href="#staff">Guias</a>
            </li>
            <li>
              <a href="#ourServices">Outros serviços</a>
            </li>
          </ul>
        </Nav>
      </HeaderDesktop>
    </HeaderContainer>
  );
}
