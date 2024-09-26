import { WhatsappButtonContainer, DesktopButton ,MobileButton } from "./styles";

export const whatsappLink =
  "https://api.whatsapp.com/message/PSFWVW3TPLQXF1?autoload=1";

export function WhatsappButton() {
  return (
    <WhatsappButtonContainer target="_blank" href={whatsappLink}>
      <DesktopButton src="whatsapp-logo.svg" alt="whatsapp logo" />
      <MobileButton>Falar conosco</MobileButton>
    </WhatsappButtonContainer>
  );
}
