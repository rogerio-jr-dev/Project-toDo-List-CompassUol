import { useEffect, useState } from "react";
import { useRouter } from "expo-router";
import {
  SafeAreaView,
  TextInput,
  Pressable,
  StatusBar,
  Platform,
  Text,
} from "react-native";
import styled from "styled-components/native";
import { Button } from "../src/components/button/button";
import Logo from "../assets/image/logo.svg";
import EyeClosedIcon from "../assets/image/eyeClosedIcon.svg";
import EyeOpenIcon from "../assets/image/eyeOpenIcon.svg";

export default function Screen() {
  const [hidePassword, setHidePassword] = useState<boolean>(true);
  const [usernameInput, setUsernameInput] = useState<string>("");
  const [passwordInput, setPasswordInput] = useState<string>("");
  const router = useRouter();

  const togglePasswordVisibility = (): void => {
    setHidePassword((prevState) => !prevState);
  };


  const handleLogin = () => {
      const username: string = "admin";
      const password: string = "password"; 

    if (usernameInput === username && passwordInput === password) {
      router.push("/home");
    } else{
      console.log("error");
    }
  };
  

  return (
    <Container>
      <Logo />
      <InputArea>
        <StyledInput
          placeholder="Username"
          value={usernameInput}
          onChangeText={setUsernameInput}
        />
        <StyledView>
          <StyledInput
            placeholder="Password"
            secureTextEntry={hidePassword}
            value={passwordInput}
            onChangeText={setPasswordInput}
            password={true}
          />
          <StyledPressable onPress={togglePasswordVisibility}>
            {hidePassword ? <EyeClosedIcon /> : <EyeOpenIcon />}
          </StyledPressable>
        </StyledView>
        <Button>
          <Button.Title>Login</Button.Title>
        </Button>
        {/* <StyledPressable onPress={handleLogin}>
          <ButtonText>Login</ButtonText>
        </StyledPressable> */}
      </InputArea>
    </Container>
  );
}

export const Container = styled(SafeAreaView)`
  flex: 1;
  width: 100%;
  margin-top: ${Platform.OS === "ios" ? "0px" : `${StatusBar.currentHeight}px`};
  padding-left: 24px;
  padding-right: 24px;
  justify-content: center;
  align-items: center;
`;

export const InputArea = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-top: 81px;
  gap: 8px;
`;

export const StyledInput = styled.TextInput<{ password?: boolean }>`
  width: 100%;
  height: 52px;
  padding: 15px 18px;
  border: 2px solid ${(props) => props.theme.colors.gray[300]};
  border-radius: 8px;
  font-size: 16px;
  ${(props) => props.password && ` flex: 1; `}
`;

export const StyledView = styled.View`
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: flex-start;
`;

export const StyledPressable = styled(Pressable)`
  justify-content: center;
  align-items: center;
  width: 52px;
  height: 52px;
  background-color: ${(props) => props.theme.colors.purple.base};
  border-radius: 8px;
  margin-left: 8px;
`;
export const ButtonText = styled.Text`
  color: ${(props) => props.theme.colors.white};
  font-size: 16px;
  font-weight: bold;
`;