import React from 'react';
import { PressableProps } from 'react-native';
import { ButtonContainer, ButtonLabel } from './PrimaryButton.styles';

type Props = PressableProps & {
    label: string;
};

export const PrimaryButton = ({ label, disabled, ...rest }: Props) => {
    return (
        <ButtonContainer disabled={disabled} {...rest}>
            <ButtonLabel>{label}</ButtonLabel>
        </ButtonContainer>
    );
};
