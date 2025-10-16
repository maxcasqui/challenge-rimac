import React from 'react';
import { DividerLine, FooterContainer, FooterLogo, FooterText } from './Footer.styles';
import { IMAGES } from '../../../assets';

export const Footer = () => {
    return (
        <FooterContainer>
            <FooterLogo source={IMAGES.logoWhite} resizeMode="contain" />
            <DividerLine />
            <FooterText>© 2023 RIMAC Seguros y Reaseguros</FooterText>
        </FooterContainer>
    );
};
