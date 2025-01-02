import React from 'react'
import { View, Text } from 'react-native'
import TaskIcon from "../../../assets/image/ClipboardTextRegular.svg"
import styled from 'styled-components/native';

 const Empty = () => {
  return (
    <RNView>
      <TaskIcon />
      <Title>Você ainda não tem tarefas cadastradas</Title>
      <SubTitle>Crie tarefas e organize seus itens a fazer</SubTitle>
    </RNView>
  );
}
const RNView = styled.View`
  align-items: center; 
  margin-top:40px;
  padding-left: 24px; 
  padding-right: 24px; 
`;

const Title = styled.Text`
  margin-top: 16px;
  color: ${(props) => props.theme.colors.gray[600]};
  font-weight: 700;
  text-align: center;
`;

const SubTitle = styled.Text`
  margin-top: 4px;
  color: ${(props) => props.theme.colors.gray[400]};
  font-weight: 400;
  text-align: center;
`;

export default Empty; 