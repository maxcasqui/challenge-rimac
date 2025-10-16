import React from 'react';
import { ActivityIndicator, Modal } from 'react-native';
import { Backdrop, IndicatorContainer, LoaderText } from './Loader.styles';

type LoaderProps = {
    visible: boolean;
    message?: string;
};

export const Loader = ({ visible, message }: LoaderProps) => {
    return (
        <Modal transparent animationType="fade" visible={visible}>
            <Backdrop>
                <IndicatorContainer>
                    <ActivityIndicator size="large" color="#F7052D" />
                    {message && <LoaderText>{message}</LoaderText>}
                </IndicatorContainer>
            </Backdrop>
        </Modal>
    );
};
