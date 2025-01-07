import React from 'react'
import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { useAuth } from "../../services/AuthContext";
import { router } from "expo-router";
import Logo from "../../../assets/image/logo.svg";
import LogOutIcon from "../../../assets/image/logOut.svg";

import Search from './search';

  const Header = () => {

     const { logout } = useAuth();
     const handleClick = () => {
       logout();
       router.replace("/");
     };
     
  return (
    <RNView>
        <StyledButton onPress={handleClick}>
          <StyledLogOutIcon />
        </StyledButton>
        <Logo />
    </RNView>
  );
}

const RNView = styled.View`
  width:100%;
  height: 173px;
  background-color: ${(props) => props.theme.colors.gray[300]};
  justify-content:center;
  align-items:center; 
`;


const StyledButton = styled(TouchableOpacity)`
  position: absolute;
  top: 20px;
  right: 20px;
  padding: 10px;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;


const StyledLogOutIcon = styled(LogOutIcon).attrs({
  width: 26,
  height: 26,
})``;

export const SearchArea = styled.View`
  flex-direction: row;
  justify-content: center;
  gap: 8px;
  width: 70%;
  position: absolute;
  top: 140px;
  left:55px;
  zIndex: 1;
`;
export const Icon = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  padding:14px;
  border-radius:8px;
  background-color: ${(props) => props.theme.colors.purple.base};
`; 

export default Header;