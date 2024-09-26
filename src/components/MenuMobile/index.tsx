import { MenuMobileContainer, Header, Main } from "./styles";
import { X } from "@phosphor-icons/react";
import { useMenu } from "../../hooks/MenuContext";

export function MenuMobile() {
  const { statusMobileMenu } = useMenu();

  function handleCloseMenu() {
    statusMobileMenu(false);
  }

  return (
    <MenuMobileContainer>
      <>
        <Header>
          <div>
            <X onClick={handleCloseMenu} />
            <span>Menu</span>
          </div>
        </Header>
        <Main className="container">
          <nav>
            <ul onClick={handleCloseMenu}>
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
          </nav>
        </Main>
      </>
    </MenuMobileContainer>
  );
}
