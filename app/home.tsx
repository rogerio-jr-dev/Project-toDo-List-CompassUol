import { SafeAreaView, Text } from "react-native";
import styled from "styled-components/native";
import StyledLogOutIcon from "../src/logOut/logout";



export default function HomeScreen() {
  return (
    <Container>
      <StyledLogOutIcon />
      <Title>Bem-vindo à página Home!</Title>
    </Container>
  );
}

const Container = styled(SafeAreaView)`
  flex: 1;
  padding: 16px;
`;

const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #333;
`;
