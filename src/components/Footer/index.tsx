import {
  FacebookLogo,
  InstagramLogo,
  WhatsappLogo,
  XLogo,
} from "@phosphor-icons/react";
import { Logo } from "../Logo";
import {
  FooterContainer,
  FooterBody,
  FooterDescription,
  LogoWrapper,
  FooterMap,
  FooterPolicies,
  FooterBottom,
  SocialNetworks,
} from "./styles";
import { FooterContact } from "./Components/FooterContact";

export function Footer() {
  return (
    <FooterContainer>
      <FooterBody className="container">
        <FooterDescription>
          <LogoWrapper>
            <Logo />
            <span>Seu guia</span>
          </LogoWrapper>
          <p>
            Seu Guia é uma agência de turismo líder na região em Buenos Aires.
            Com anos de experiência, nós nos especializamos em organizar
            passeios e excursões personalizados para indivíduos, famílias e
            grupos.
          </p>
          <SocialNetworks>
            <span>Follow Us</span>
            <XLogo weight="fill" />
            <InstagramLogo />
            <FacebookLogo />
            <WhatsappLogo />
          </SocialNetworks>
        </FooterDescription>
        <FooterMap>
          <span>Company</span>
          <ul>
            <li>
              <a href="#">Sobre nós</a>
            </li>
            <li>
              <a href="#">Serviços</a>
            </li>
            <li>
              <a href="#">Porque viajar conosco</a>
            </li>
            <li>
              <a href="#">Staff</a>
            </li>
          </ul>
        </FooterMap>
        <FooterPolicies>
          <span>Suporte</span>
          <ul>
            <li>
              <a href="#">Ajuda e suporte</a>
            </li>
            <li>
              <a href="#">Termos e condições</a>
            </li>
            <li>
              <a href="#">Serviços 24/7</a>
            </li>
          </ul>
        </FooterPolicies>
        <FooterContact />
      </FooterBody>
      <FooterBottom className="container">
        <p>Seu Guia ©Copyright 2024. All rights reserved. </p>
        <div>
          <p>
            Desenvolvido por{" "}
            <a target="_blank" href="https://www.linkedin.com/in/campos-ariel/">
              arielcBr
            </a>
          </p>
        </div>
      </FooterBottom>
    </FooterContainer>
  );
}
