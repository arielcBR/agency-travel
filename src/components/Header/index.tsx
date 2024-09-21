import { HeaderContainer, Nav } from "./styles";
import { Logo } from "../Logo";

export function Header() {
  return (
    <HeaderContainer>
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
    </HeaderContainer>
  );
}
