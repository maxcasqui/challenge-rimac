import React from 'react';
import { ImageSourcePropType } from 'react-native';
import { Check } from 'lucide-react-native';
import * as S from './SelectableCard.styles';

type Props = {
    title: string;
    description: string;
    icon: ImageSourcePropType;
    checked?: boolean;
    onPress?: () => void;
};

export const SelectableCard: React.FC<Props> = ({
    title,
    description,
    icon,
    checked = false,
    onPress,
}) => {
    return (
        <S.CardContainer checked={checked} onPress={onPress}>
            <S.RadioButton checked={checked}>
                {checked && <Check size={14} color="#fff" strokeWidth={3} />}
            </S.RadioButton>

            <S.Content>
                <S.TitleRow>
                    <S.IconImage source={icon} resizeMode="contain" />
                    <S.Title>{title}</S.Title>
                </S.TitleRow>
                <S.Description>{description}</S.Description>
            </S.Content>
        </S.CardContainer>
    );
};
