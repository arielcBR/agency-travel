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
  FooterPolicies,
  FooterBottom,
  SocialNetworks,
} from "./styles";
import { FooterContact } from "./Components/FooterContact";
import { Link } from "react-router-dom";
import { whatsappLink } from "../WhatsappButton";

export function Footer() {
  return (
    <FooterContainer>
      <FooterBody className="container">
        <FooterDescription>
          <LogoWrapper>
            <Logo />
            <span>Seu guia</span>
          </LogoWrapper>
          <p className="isVisible">
            Seu Guia é uma agência de turismo líder na região em Buenos Aires.
            Com anos de experiência, nós nos especializamos em organizar
            passeios e excursões personalizados para indivíduos, famílias e
            grupos.
          </p>
          <SocialNetworks>
            <span>Follow Us</span>
            <Link to="#" target="_blank">
              <XLogo weight="fill" />
            </Link>
            <Link to="#" target="_blank">
              <FacebookLogo weight="fill" />
            </Link>
            <Link
              to="https://www.instagram.com/seu_guia_completo/"
              target="_blank"
            >
              <InstagramLogo />
            </Link>
            <Link to={whatsappLink} target="_blank">
              <WhatsappLogo />
            </Link>
          </SocialNetworks>
        </FooterDescription>
        <FooterPolicies className="isVisible">
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
              arielc.
            </a>
          </p>
        </div>
      </FooterBottom>
    </FooterContainer>
  );
}
