import { FooterContactContainer, IconWrapper } from "./styles";
import { EnvelopeOpen, MapPin, Phone } from "@phosphor-icons/react";

export function FooterContact() {
  return (
    <FooterContactContainer>
      <span>Comunicação</span>
      <IconWrapper>
        <div>
          <Phone />
        </div>
        <div>
          <p>Telefone</p>
          <a href="tel:+5491136684512">+54 911 36684512</a>
        </div>
      </IconWrapper>
      <IconWrapper>
        <div>
          <EnvelopeOpen />
        </div>
        <div>
          <p>Email</p>
          <a href="mailto:seuguia@contato.com">seuguia@contato.com</a>
        </div>
      </IconWrapper>
      <IconWrapper>
        <div>
          <MapPin />
        </div>
        <div>
          <p>Escritório</p>
          <a target="_blank" href="https://maps.app.goo.gl/9UK263uqp4qk4iEf7">
            Av. de Mayo 1370, CABA
          </a>
        </div>
      </IconWrapper>
    </FooterContactContainer>
  );
}
