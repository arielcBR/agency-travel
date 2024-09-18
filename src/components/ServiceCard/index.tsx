import { ServiceCardContainer, ImageHeader, ServiceBody } from "./styles";
import { formatter } from "../../utils/Formatter";

export interface ServiceCardData {
  name: string;
  price: number;
  image: string;
}

interface ServiceCardProps {
  service: ServiceCardData;
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <ServiceCardContainer>
      <ImageHeader imageSrc={`/servicesImages/${service.image}`} />
      <ServiceBody>
        <h4>{service.name}</h4>
        <span>
          <p>
            <strong>{formatter.currency(service.price)}</strong>/pessoa
          </p>
        </span>
      </ServiceBody>
    </ServiceCardContainer>
  );
}
