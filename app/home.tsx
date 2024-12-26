import { SafeAreaView, Text } from "react-native";
import styled from "styled-components/native";

export default function HomeScreen() {
  return (
    <Container>
      <Title>Bem-vindo à página Home!</Title>
    </Container>
  );
}

const Container = styled(SafeAreaView)`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 16px;
`;

const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #333;
`;
