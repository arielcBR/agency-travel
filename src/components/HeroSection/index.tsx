import { HeroSectionContainer } from "./styles";
import { Header } from "../Header";

export function HeroSection() {
  return (
    <HeroSectionContainer id="home" className="container">
      <Header />
      <main>
        <h1>
          <span>Explore</span>
          <span>Buenos Aires</span>
        </h1>
        <p>
          Nosso mundo é incrivelmente belo, com uma rica diversidade de
          paisagens, culturas e vida selvagem
        </p>
      </main>
    </HeroSectionContainer>
  );
}
