import {
  OurServicesContainer,
  HeaderContent,
  InfoContent,
  Carrousel,
} from "./styles";
import { Slider } from "../Slider";
import { CheckFat } from "@phosphor-icons/react";

import { services } from "../../mocks/listOfServices";

export function OurServices() {
  return (
    <OurServicesContainer className="container">
      <h3>Venha conhecer Buenos Aires conosco</h3>
      <HeaderContent>
        <div>
          <div>
            <h4>Serviços oferecidos:</h4>
            <ul>
              <li>
                <CheckFat size={20} weight="fill" />
                <span>City tours</span>
              </li>
              <li>
                <CheckFat size={20} weight="fill" />
                <span>Translados</span>
              </li>
              <li>
                <CheckFat size={20} weight="fill" />
                <span>Câmbio com excelente cotação</span>
              </li>
              <li>
                <CheckFat size={20} weight="fill" />
                <span>
                  Kit de sobrevivência (cartão de transporte público, chip com internet
                  e câmbio)
                </span>
              </li>
            </ul>
          </div>
        </div>
        <InfoContent>
          <p>
            Maravilhe-se com a vibrante energia de Buenos Aires, uma cidade
            repleta de vida noturna, música envolvente, gastronomia deliciosa,
            arquitetura impressionante e arte cativante.
          </p>
          <p>
            Seja você fã de tango, explorar bairros charmosos e pintorescos,
            saborear uma das gastronomias mais ricas do mundo ou admirar obras
            de arte, Buenos Aires tem algo para todos. Junte-se a nós e
            experimente o charme único da fascinante capital argentina.
          </p>
        </InfoContent>
      </HeaderContent>

      <Carrousel>
        <Slider slides={services} />
      </Carrousel>
    </OurServicesContainer>
  );
}
