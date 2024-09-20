import { WhatsappButtonContainer } from "./styles";

const whatsappLink =
  "https://api.whatsapp.com/message/PSFWVW3TPLQXF1?autoload=1";

export function WhatsappButton() {
  return (
    <WhatsappButtonContainer target="_blank" href={whatsappLink}>
      <img src="whatsapp-logo.svg" alt="whatsapp logo" />
    </WhatsappButtonContainer>
  );
}
