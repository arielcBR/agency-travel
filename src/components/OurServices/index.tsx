import {
  OurServicesContainer,
  HeaderContent,
  InfoContent,
  Carrousel,
} from "./styles"
import { Button } from "../Button"
import { Slider } from '../Slider'

import { services } from '../../mocks/listOfServices'

export function OurServices() {
  return (
    <OurServicesContainer className="container">
      <HeaderContent>
        <div>
          <h3>Venha conhecer Buenos Aires conosco</h3>
          <Button to="#" text="Explorar" />
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
