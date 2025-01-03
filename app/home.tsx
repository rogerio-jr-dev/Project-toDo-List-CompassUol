import React from "react";
import { SafeAreaView, View } from "react-native";
import styled from "styled-components/native";
import Header from "../src/components/header/header";
import Task from "../src/components/task/task";
import Empty from "../src/components/task/empty";
import Loading from "../src/components/task/loading";
import ErrorModal from "../src/components/errorApi/errorApi"
export default function HomeScreen() {
  return (
    <Container>
      <Header />
      <Content>
        <Task />
        {/* <Empty/> // para retirar e por uma condicacao caso nao exista tarefas:  */}
        <ErrorModal visible={true} onRetry={() => {}} onClose={() => {}} />
      </Content>
    </Container>
  );
}

const Container = styled(SafeAreaView)`
  flex: 1;
`;

const Content = styled(View)`
  flex: 1;
`;
