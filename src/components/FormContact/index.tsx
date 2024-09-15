import {
  FormContactContainer,
  InputWrapper,
  ContactInfoSection,
  TripDetailsSection,
} from "./styles";
import { Input } from "../Input"
import { Label } from "../Label"
import { Button } from "../Button"

export function FormContact() {
  return (
    <FormContactContainer>
      <InputWrapper>
        <Label text="Nome" htmlFor="name" />
        <Input type="text" name="name" placeholder="Nome" />
      </InputWrapper>
      <InputWrapper>
        <Label text="email" htmlFor="email" />
        <Input type="email" name="email" placeholder="email@example.com" />
      </InputWrapper>
      <ContactInfoSection>
        <InputWrapper>
          <Label text="DDD" htmlFor="ddd" />
          <Input type="number" name="ddd" placeholder="51" />
        </InputWrapper>
        <InputWrapper>
          <Label text="Telefone" htmlFor="phone" />
          <Input type="tel" name="phone" placeholder="983123456" />
        </InputWrapper>
      </ContactInfoSection>
      <TripDetailsSection>
        <InputWrapper>
          <Label text="Data viagem" htmlFor="tripDate" />
          <Input type="date" name="tripDate" />
        </InputWrapper>
        <InputWrapper>
          <Label text="N° pessoas" htmlFor="numberOfPeople" />
          <Input type="number" name="numberOfPeople" min="1" max="99" />
        </InputWrapper>
      </TripDetailsSection>
      <Button type="submit" text="Enviar" />
    </FormContactContainer>
  );
}
