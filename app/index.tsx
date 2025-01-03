import React from "react";
import { useState, useContext } from "react";
import { useRouter } from "expo-router";
import {SafeAreaView, Platform,StatusBar,Pressable,} from "react-native";
import styled from "styled-components/native";
import { Button } from "../src/components/button/button";
import Logo from "../assets/image/logo.svg";
import EyeClosedIcon from "../assets/image/eyeClosedIcon.svg";
import EyeOpenIcon from "../assets/image/eyeOpenIcon.svg";
import { AuthContext } from "../src/services/AuthContext";

export default function Screen() {
  const [hidePassword, setHidePassword] = useState<boolean>(true);
  const [usernameInput, setUsernameInput] = useState<string>("");
  const [passwordInput, setPasswordInput] = useState<string>("");
  const [usernameError, setUsernameError] = useState<string | null>(null);
  const [passwordError, setPasswordError] = useState<string | null>(null);
  const { login } = useContext(AuthContext) || { login: () => {} };
  const router = useRouter();

  const togglePasswordVisibility = (): void => {
    setHidePassword((prevState) => !prevState);
  };

  const handleLogin = () => {
    let hasError = false;

    if (usernameInput !== "admin") {
      setUsernameError("Username inválido");
      hasError = true;
    } else {
      setUsernameError(null);
    }

    if (passwordInput !== "password") {
      setPasswordError("Senha inválida");
      hasError = true;
    } else {
      setPasswordError(null);
    }

    if (!hasError) {
      const isAuthenticated = login(usernameInput, passwordInput);
      if (isAuthenticated) {
        router.push("/home");
      }
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
          error={usernameError != null}
        />
        {usernameError && <ErrorMessage>{usernameError}</ErrorMessage>}

        <StyledView>
          <StyledInput
            placeholder="Password"
            secureTextEntry={hidePassword}
            value={passwordInput}
            onChangeText={setPasswordInput}
            password={true}
            error={passwordError != null}
          />
          <StyledPressable onPress={togglePasswordVisibility}>
            {hidePassword ? <EyeClosedIcon /> : <EyeOpenIcon />}
          </StyledPressable>
        </StyledView>
        {passwordError && <ErrorMessage>{passwordError}</ErrorMessage>}

        <Button onPress={handleLogin} width={"100%"} height={52}>
          <Button.Title>Login</Button.Title>
        </Button>
      </InputArea>
    </Container>
  );
}

const Container = styled(SafeAreaView)`
  flex: 1;
  width: 100%;
  margin-top: ${Platform.OS === "ios" ? "0px" : `${StatusBar.currentHeight}px`};
  padding-left: 24px;
  padding-right: 24px;
  justify-content: center;
  align-items: center;
`;

const InputArea = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-top: 81px;
  gap: 8px;
`;

const StyledInput = styled.TextInput<{ password?: boolean; error?: boolean }>`
  width: 100%;
  height: 52px;
  padding: 15px 18px;
  border: 2px solid
    ${(props) =>
      props.error ? props.theme.colors.danger : props.theme.colors.gray[300]};
  border-radius: 8px;
  font-size: 16px;
  ${(props) => props.password && ` flex: 1; `}
`;
const StyledView = styled.View`
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: flex-start;
`;

const StyledPressable = styled(Pressable)`
  justify-content: center;
  align-items: center;
  width: 52px;
  height: 52px;
  background-color: ${(props) => props.theme.colors.purple.base};
  border-radius: 8px;
  margin-left: 8px;
`;

const ErrorMessage = styled.Text`
  color: ${(props) => props.theme.colors.danger};
  font-size: 14px;
  margin-top: 4px;
  align-self: flex-start;
`;
