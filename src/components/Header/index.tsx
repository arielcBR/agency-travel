import { HeaderContainer, Nav, SideNav } from "./styles";
import { ShoppingCart, User } from "@phosphor-icons/react";
import { Logo } from "../Logo";

export function Header() {
  return (
    <HeaderContainer>
      <Logo />
      <Nav>
        <ul>
          <li className="active">
            <a href="#">Sobre</a>
          </li>
          <li>
            <a href="#">Nossos tours</a>
          </li>
          <li>
            <a href="#">Translado</a>
          </li>
          <li>
            <a href="#">Câmbio</a>
          </li>
          <li>
            <a href="#">Guias</a>
          </li>
          <li>
            <a href="#">Contato</a>
          </li>
        </ul>
      </Nav>
      {/* <SideNav>
        <ShoppingCart />
        <User weight="fill" />
      </SideNav> */}
    </HeaderContainer>
  );
}
