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
          <p>+54 911 36684512</p>
        </div>
      </IconWrapper>
      <IconWrapper>
        <div>
          <EnvelopeOpen />
        </div>
        <div>
          <p>Email</p>
          <p>seuguia@contato.com</p>
        </div>
      </IconWrapper>
      <IconWrapper>
        <div>
          <MapPin />
        </div>
        <div>
          <p>Escritório</p>
          <p>Av. de Mayo 1370, C1085 CABA</p>
        </div>
      </IconWrapper>
    </FooterContactContainer>
  );
}
