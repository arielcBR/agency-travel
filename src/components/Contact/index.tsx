import { ContactContainer } from "./styles";
import { FormContact } from "../FormContact/index.tsx";
import imageSection from "../../assets/images/diagonal.jpg";

export function Contact() {
  return (
    <ContactContainer className="container">
      <div>
        <img src={imageSection} alt="" />
      </div>
      <div>
        <h3>
          A viagem dos seus sonhos a um clique de distância!
        </h3>
        <FormContact />
      </div>
    </ContactContainer>
  );
}
