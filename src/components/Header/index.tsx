import { HeaderContainer, Nav } from "./styles";
import { Logo } from "../Logo";

export function Header() {
  return (
    <HeaderContainer>
      <Logo />
      <Nav>
        <ul>
          <li>
            <a href="#">Sobre</a>
          </li>
          <li>
            <a href="#">Nossos tours</a>
          </li>
          <li>
            <a href="#">Guias</a>
          </li>
          <li>
            <a href="#">Outros serviços</a>
          </li>
        </ul>
      </Nav>
    </HeaderContainer>
  );
}
