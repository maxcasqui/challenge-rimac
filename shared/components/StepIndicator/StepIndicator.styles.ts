import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-vertical: 12px;
`;

export const BackButton = styled.Pressable`
  width: 28px;
  height: 28px;
  border-radius: 18px;
  border-width: 1.5px;
  border-color: #A9AFD9;
  align-items: center;
  justify-content: center;
`;

export const StepText = styled.Text`
  flex: 1;
  margin-left: 12px;
  font-size: 15px;
  font-weight: 600;
  color: #141938;
`;

export const ProgressContainer = styled.View`
  flex: 1;
  align-items: flex-end;
`;

export const ProgressBar = styled.View`
  width: 100%;
  height: 8px;
  background-color: #D7DBF5;
  border-radius: 4px;
  overflow: hidden;
`;

export const ProgressFill = styled.View`
  height: 100%;
  background-color: #4F4FFF;
  border-radius: 4px;
`;
