import { HeroSectionContainer } from "./styles";
import { Header } from "../Header";

export function HeroSection() {
  return (
    <HeroSectionContainer className="container">
      <Header />
      <main>
        <h1>Explore Buenos Aires</h1>
        <p>
          Nosso mundo é incrivelmente belo, com uma rica diversidade de
          paisagens, culturas e vida selvagem. Siga-nos para aproveitar esses
          momentos.
        </p>
      </main>
    </HeroSectionContainer>
  );
}
