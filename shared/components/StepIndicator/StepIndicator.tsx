import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { ChevronLeft } from 'lucide-react-native';
import {
    Container,
    BackButton,
    StepText,
    ProgressContainer,
    ProgressBar,
    ProgressFill
} from './StepIndicator.styles';

type StepIndicatorProps = {
    currentStep: number;
    totalSteps: number;
};

export const StepIndicator = ({ currentStep, totalSteps }: StepIndicatorProps) => {
    const navigation = useNavigation();

    const progress = (currentStep / totalSteps) * 100;

    return (
        <Container>
            <BackButton onPress={() => navigation.goBack()}>
                <ChevronLeft size={18} color="#A9AFD9" />
            </BackButton>

            <StepText>{`Paso ${currentStep} de ${totalSteps}`}</StepText>

            <ProgressContainer>
                <ProgressBar>
                    <ProgressFill style={{ width: `${progress}%` }} />
                </ProgressBar>
            </ProgressContainer>
        </Container>
    );
};
