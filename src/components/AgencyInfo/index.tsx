import { AgencyInfoContainer, BenefitsWrapper, ImageContainer } from "./styles"
import { BenefitItem } from "./components/BenefitItem"
import { v4 as uuidv4 } from "uuid"

import casaRosadaImage from '../../assets/images/casa-rosada.jpg'
import floralisImage from "../../assets/images/floralis.jpg"

export function AgencyInfo() {
  return (
    <AgencyInfoContainer className="container">
      <h4>O que você vai encontrar com a gente</h4>
      <div>
        <BenefitsWrapper>
          <BenefitItem
            benefit={{
              advantage: "Consultoria de viagem especializada",
              description:
                "Uma agência de viagens de renome deve contar com uma equipe experiente e conhecedora, capaz de oferecer conselhos especializados sobre destinos, atividades, hospedagem e transporte.",
            }}
            key={uuidv4()}
          />
          <BenefitItem
            benefit={{
              advantage: "Preços competitivos",
              description:
                "Uma agência de viagens de renome negociará com fornecedores de viagens em seu nome para obter os melhores preços possíveis.",
            }}
            key={uuidv4()}
          />
          <BenefitItem
            benefit={{
              advantage: "Roteiros personalizados",
              description:
                "Uma boa agência de viagens trabalhará com você para criar um roteiro personalizado que atenda às suas preferências, orçamento e cronograma.",
            }}
            key={uuidv4()}
          />
        </BenefitsWrapper>

        <ImageContainer>
          <img src={casaRosadaImage} alt="jardim japonês em buenos aires" />
          <img src={floralisImage} alt="antigo palacio de aguas em buenos aires" />
        </ImageContainer>
      </div>
    </AgencyInfoContainer>
  );
}
