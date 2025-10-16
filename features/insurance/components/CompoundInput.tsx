import React, { useState } from 'react';
import { TextInput } from 'react-native-paper';
import { Dropdown } from 'react-native-element-dropdown';
import styled from 'styled-components/native';

type Props = {
    documentType: string;
    setDocumentType: (value: string) => void;
    documentNumber: string;
    setDocumentNumber: (value: string) => void;
};

const data = [
    { label: 'DNI', value: 'DNI' },
    { label: 'Carné de extranjería', value: 'CE' },
];

export const CompoundInput = ({
    documentType,
    setDocumentType,
    documentNumber,
    setDocumentNumber,
}: Props) => {
    const [isFocus, setIsFocus] = useState(false);

    return (
        <Container isFocus={isFocus}>
            <LeftDropdown>
                <Dropdown
                    data={data}
                    labelField="label"
                    valueField="value"
                    value={documentType}
                    onFocus={() => setIsFocus(true)}
                    onBlur={() => setIsFocus(false)}
                    onChange={(item) => {
                        setDocumentType(item.value);
                        setIsFocus(false);
                    }}
                    style={{ flex: 1 }}
                    selectedTextStyle={{ fontSize: 14 }}
                    placeholderStyle={{ color: '#aaa' }}
                    itemTextStyle={{ fontSize: 14 }}
                />
            </LeftDropdown>

            <RightInput
                label="Nro de documento"
                mode="flat"
                value={documentNumber}
                onChangeText={setDocumentNumber}
                keyboardType="numeric"
                activeUnderlineColor="transparent"
                underlineColor="transparent"
                cursorColor="#5E6488"
                selectionColor="#5E6488"
            />
        </Container>
    );
};


export const Container = styled.View<{ isFocus: boolean }>`
  flex-direction: row;
  align-items: center;
  border-width: 1px;
  border-color: #5E6488;
  border-radius: 8px;
  overflow: hidden;
`;

export const LeftDropdown = styled.View`
  width: 35%;
  background-color: transparent;
  border-right-width: 1px;
  border-right-color: #5E6488;
  padding-left: 14px;
  padding-right: 4px;
  height: 65px;
`;

export const RightInput = styled(TextInput)`
  flex: 1;
  background-color: transparent;
  height: 56px;
  margin-top: 4px
`;