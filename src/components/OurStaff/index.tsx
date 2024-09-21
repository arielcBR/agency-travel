import {
  OurStaffContainer,
  Staff,
  CardHeader,
  StafCardfWithDescription,
  CardImage,
  CardDescription,
  StaffCardSimple,
} from "./styles";
import mariaClaraGuide from "../../assets/images/maria-clara.jpg";
import diegoGomesGuide from "../../assets/images/diego-gomes.jpg";
import eduardoPassosGuide from "../../assets/images/eduardo-passos.jpg";

export function OurStaff() {
  return (
    <OurStaffContainer id="staff" className="container">
      <CardHeader>
        <h4>Nossa equipe especializada</h4>
        <p>
          Com anos de experiência, nosso guia é hábil em fornecer comentários
          perspicazes e tornar sua viagem interessante e envolvente. Da história
          e cultura dos destinos que você visita aos costumes e tradições
          locais, nosso guia lhe proporcionará uma riqueza de informações para
          enriquecer suas viagens.
        </p>
      </CardHeader>
      <Staff>
        <StafCardfWithDescription>
          <CardImage image={mariaClaraGuide} />
          <CardDescription>
            <h4>Maria Clara</h4>
            <p>
              <span>Idiomas:</span> Espanhol, inglês e português
            </p>
            <p>
              <span>Experiência:</span> 5 anos
            </p>
            <p>
              Buenas! Me chamo Maria Clara e serei sua guia. Se você estiver
              procurando informações ou precisar de ajuda, estarei aqui para
              ajudá-los.
            </p>
          </CardDescription>
        </StafCardfWithDescription>
        <StaffCardSimple image={diegoGomesGuide}>
          <span>Diego Gomes</span>
        </StaffCardSimple>
        <StaffCardSimple image={eduardoPassosGuide}>
          <span>Eduardo Passos</span>
        </StaffCardSimple>
      </Staff>
    </OurStaffContainer>
  );
}
