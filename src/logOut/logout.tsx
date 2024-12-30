import React from "react";
import { Pressable } from "react-native";
import styled from "styled-components/native";
import LogOutIcon from "../../assets/image/logOut.svg";
import { router } from "expo-router";

export default function LogOut() {

    
  const handleClick = () => {
      return (
        router.push("/index")
      );
    }
    

  return (
    <Pressable onPress={handleClick}>
      <StyledLogOutIcon />
    </Pressable>
  );
}

const StyledLogOutIcon = styled(LogOutIcon).attrs({
  width: 26,
  height: 26,
})`
  position: absolute;
  top: 5px;
  right:20px;
`;
