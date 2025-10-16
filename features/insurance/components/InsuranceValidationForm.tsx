import React, { useState } from 'react';
import { View, Text, Platform, ToastAndroid, Alert } from 'react-native';
import styled from 'styled-components/native';
import { useForm, Controller } from 'react-hook-form';
import { InsuranceValidationFormData, insuranceValidationSchema } from '../schemas/ValidationSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { CompoundInput } from './CompoundInput';
import { TextInput } from 'react-native-paper';
import { Check } from 'lucide-react-native';
import { Divider, Loader } from '../../../shared';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { InsuranceStackParamList } from '../navigation/InsuranceNavigator';
import { useNavigation } from '@react-navigation/native';
import { useFetchUserData } from '../hooks/useFetchUserData';
import { useInsurance } from '../context/InsuranceContext';
import { differenceInYears, parse } from 'date-fns';

type NavProp = NativeStackNavigationProp<InsuranceStackParamList, 'InsuranceValidation'>;

export const InsuranceValidationForm = () => {
    const navigation = useNavigation<NavProp>();
    const [privacyChecked, setPrivacyChecked] = useState(false);
    const [marketingChecked, setMarketingChecked] = useState(false);

    const { setUserData } = useInsurance();
    const { fetchUserData, loading } = useFetchUserData();

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<InsuranceValidationFormData>({
        resolver: zodResolver(insuranceValidationSchema),
        defaultValues: {
            documentType: 'DNI',
            documentNumber: '',
            phoneNumber: '',
        },
    });

    const showToast = (msg: string) => {
        if (Platform.OS === 'android') {
            ToastAndroid.show(msg, ToastAndroid.SHORT);
            return;
        }

        Alert.alert(msg);
    };

    const onSubmit = async (data: InsuranceValidationFormData) => {
        if (!privacyChecked || !marketingChecked) {
            showToast('Debes aceptar las políticas antes de continuar.');
            return;
        }

        const apiData = await fetchUserData();

        if (!apiData) {
            showToast('Error al consultar datos');
            return;
        }

        const birthDate = parse(apiData.birthDay, 'dd-MM-yyyy', new Date());
        const age = differenceInYears(new Date(), birthDate);

        setUserData({
            ...data,
            ...apiData,
            age,
        });

        console.log('✅ Datos guardados:', { ...data, ...apiData, age });
        navigation.navigate('InsuranceSelection');
    };

    return (
        <>
            <Loader visible={loading} message="Consultando datos..." />
            {/* Input compuesto */}
            <View style={{ marginBottom: 16 }}>
                <Controller
                    control={control}
                    name="documentType"
                    render={({ field: { value, onChange } }) => (
                        <Controller
                            control={control}
                            name="documentNumber"
                            render={({ field: { value: numValue, onChange: onNumChange } }) => (
                                <>
                                    <CompoundInput
                                        documentType={value}
                                        setDocumentType={onChange}
                                        documentNumber={numValue}
                                        setDocumentNumber={onNumChange}
                                    />
                                    {errors.documentNumber && (
                                        <ErrorText>{errors.documentNumber.message}</ErrorText>
                                    )}
                                </>
                            )}
                        />
                    )}
                />
            </View>

            {/* Input de celular */}
            <Controller
                control={control}
                name="phoneNumber"
                render={({ field: { value, onChange } }) => (
                    <>
                        <PhoneContainer>
                            <PhoneInput
                                label="Número de celular"
                                mode="flat"
                                value={value}
                                onChangeText={onChange}
                                keyboardType="numeric"
                                activeUnderlineColor="transparent"
                                underlineColor="transparent"
                                cursorColor="#5E6488"
                                selectionColor="#5E6488"
                            />
                        </PhoneContainer>
                        {errors.phoneNumber && (
                            <ErrorText>{errors.phoneNumber.message}</ErrorText>
                        )}
                    </>
                )}
            />

            <Divider color="transparent" paddingTop={2} paddingBottom={2} />

            {/* Checkboxes */}
            <CheckboxContainer>
                <CheckboxRow onPress={() => setPrivacyChecked(!privacyChecked)}>
                    <CheckboxBox checked={privacyChecked}>
                        {privacyChecked && <Check size={14} color="#fff" strokeWidth={3} />}
                    </CheckboxBox>
                    <CheckboxLabel>Acepto la Política de Privacidad</CheckboxLabel>
                </CheckboxRow>

                <Divider color="transparent" paddingTop={1} paddingBottom={1} />

                <CheckboxRow onPress={() => setMarketingChecked(!marketingChecked)}>
                    <CheckboxBox checked={marketingChecked}>
                        {marketingChecked && <Check size={14} color="#fff" strokeWidth={3} />}
                    </CheckboxBox>
                    <CheckboxLabel>Acepto la Política de Comunicaciones Comerciales</CheckboxLabel>
                </CheckboxRow>

                <TermsText>Aplican Términos y Condiciones.</TermsText>
            </CheckboxContainer>

            {/* Botón de Cotizar */}
            <QuoteButton onPress={handleSubmit(onSubmit)}>
                <QuoteButtonText>Cotizar aquí</QuoteButtonText>
            </QuoteButton>
        </>
    );
};

/* Styled Components */

const ErrorText = styled.Text`
  color: red;
  margin-top: 4px;
`;

const PhoneContainer = styled.View`
  border-width: 1px;
  border-color: #5e6488;
  border-radius: 8px;
  margin-top: 4px;
  overflow: hidden;
`;

const PhoneInput = styled(TextInput)`
  background-color: transparent;
  height: 58px;
`;

const CheckboxContainer = styled.View`
  margin-top: 20px;
`;

const CheckboxRow = styled.Pressable`
  flex-direction: row;
  align-items: center;
  margin-bottom: 12px;
`;

const CheckboxBox = styled.View<{ checked: boolean }>`
  width: 22px;
  height: 22px;
  border-width: 1.5px;
  border-color: #5e6488;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
  margin-right: 8px;
  background-color: ${({ checked }) => (checked ? '#03050F' : 'transparent')};
`;

const CheckboxLabel = styled.Text`
  flex: 1;
  font-size: 15px;
  color: #03050f;
  flex-wrap: wrap;
`;

const TermsText = styled.Text`
  font-size: 14px;
  color: #03050F;
  text-decoration-line: underline;
  margin-top: 8px;
`;

const QuoteButton = styled.Pressable`
  background-color: #03050f;
  border-radius: 50px;
  align-items: center;
  justify-content: center;
  height: 56px;
  margin-top: 24px;
`;

const QuoteButtonText = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: 600;
`;
