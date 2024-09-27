import { WhatsappButtonContainer, DesktopButton ,MobileButton } from "./styles";

export const whatsappLink =
  "https://wa.me/5491127981109?text=Gostaria%20de%20mais%20informações!";

export function WhatsappButton() {
  return (
    <WhatsappButtonContainer target="_blank" href={whatsappLink}>
      <DesktopButton src="whatsapp-logo.svg" alt="whatsapp logo" />
      <MobileButton>Falar conosco</MobileButton>
    </WhatsappButtonContainer>
  );
}
