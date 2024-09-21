import { AboutUsContainer } from "./styles";
import obeliscoImage from "../../assets/images/obelisco.jpg";

export function AboutUs() {
  return (
    <AboutUsContainer id="aboutUs" className="container">
      <img
        src={obeliscoImage}
        alt="Monumento obelisco cercado de árvores com flores violetas"
      />

      <div>
        <h3>Sobre nós</h3>
        <div>
          <p>
            Nossa agência de turismo oferece experiências de viagens únicas e
            emocionantes para indivíduos e grupos. Com foco em aventura, cultura
            e turismo sustentável, buscamos criar memórias inesquecíveis para os
            nossos clientes.
          </p>
          <p>
            Nossa equipe de guias experientes e funcionários amigáveis está
            dedicada a oferecer um serviço excelente e garantir uma viagem
            segura e agradável para todos. Desde explorar destinos exóticos até
            experimentar novas atividades e passeios gastronimicos, somos
            especializados em roteiros personalizados que atendem a diversos
            interesses e orçamentos. Junte-se a nós para uma jornada memorável
            que ampliará seus horizontes e o deixará inspirado.
          </p>
        </div>
      </div>
    </AboutUsContainer>
  );
}
