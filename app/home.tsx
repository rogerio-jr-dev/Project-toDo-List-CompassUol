import { SafeAreaView, View } from "react-native";
import styled from "styled-components/native";
import Header from "../src/components/header/header";
import Task from "../src/components/task/task";
import Loading from "../src/components/task/loading";



export default function HomeScreen() {
 
  return (
    <Container>
      <Header />
      <Content>
        <Task />
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