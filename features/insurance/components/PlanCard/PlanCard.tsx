import React from 'react';
import { Check } from 'lucide-react-native';
import {
    CardContainer,
    HeaderSection,
    LeftSection,
    TitleText,
    LabelText,
    PriceText,
    IconImage,
    Divider,
    DetailsSection,
    DetailRow,
    DetailText,
    ActionButton,
    ActionButtonText
} from './PlanCard.styles';

type PlanCardProps = {
    name: string;
    price: number;
    description: string[];
    icon: any;
    onSelect?: () => void;
};

export const PlanCard: React.FC<PlanCardProps> = ({
    name,
    price,
    description,
    icon,
    onSelect,
}) => {
    return (
        <CardContainer>
            {/* Header */}
            <HeaderSection>
                <LeftSection>
                    <TitleText>{name}</TitleText>
                    <LabelText>COSTO DEL PLAN</LabelText>
                    <PriceText>S/{price} al mes</PriceText>
                </LeftSection>
                <IconImage source={icon} resizeMode="contain" />
            </HeaderSection>

            <Divider />

            {/* Details */}
            <DetailsSection>
                {description.slice(0, 3).map((item, idx) => (
                    <DetailRow key={idx}>
                        <Check size={18} color="#389E0D" />
                        <DetailText>{item}</DetailText>
                    </DetailRow>
                ))}
            </DetailsSection>

            {/* Action button */}
            <ActionButton onPress={onSelect}>
                <ActionButtonText>Seleccionar Plan</ActionButtonText>
            </ActionButton>
        </CardContainer>
    );
};
