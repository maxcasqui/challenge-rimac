import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { ArrowLeft, Phone } from 'lucide-react-native';
import * as S from './TopBar.styles';
import { ImageSourcePropType } from 'react-native';

interface TopBarProps {
    showBack?: boolean;
    logo?: ImageSourcePropType;
    phoneNumber?: string;
}

export const TopBar = ({
    showBack = false,
    logo,
    phoneNumber = '(01) 411 6001',
}: TopBarProps) => {
    const navigation = useNavigation();

    return (
        <S.Container>
            {/* Left side */}
            <S.LeftSection>
                {showBack && (
                    <S.IconButton onPress={() => navigation.goBack()}>
                        <ArrowLeft size={22} />
                    </S.IconButton>
                )}
                {logo && <S.Logo source={logo} resizeMode="contain" />}
            </S.LeftSection>

            {/* Right side */}
            <S.RightSection>
                <Phone size={20} fill={"#000"} />
                <S.PhoneText>{phoneNumber}</S.PhoneText>
            </S.RightSection>
        </S.Container>
    );
};
