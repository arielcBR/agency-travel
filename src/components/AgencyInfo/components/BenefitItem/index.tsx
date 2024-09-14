import { Star } from "@phosphor-icons/react";
import { BenefitItemContainer, BenefitTitle, BenefitDescription } from "./styles";

export interface BenefitData {
  advantage: string;
    description: string;
}

interface BenefitItemProps {
  benefit: BenefitData;
}

export function BenefitItem({ benefit }: BenefitItemProps) {
  return (
      <BenefitItemContainer>
          <div>
              <Star weight="fill" />
          </div>
      <BenefitTitle>{benefit.advantage}</BenefitTitle>
      <BenefitDescription>{benefit.description}</BenefitDescription>
    </BenefitItemContainer>
  );
}
