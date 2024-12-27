import {
  TouchableOpacity,
  TouchableOpacityProps,
  TextProps,
  ActivityIndicator,
} from "react-native";

import React, { Children } from "react";
import styled from "styled-components/native";

type ButtonProps = TouchableOpacityProps & { isLoading?: boolean };

function Button({ children, style, isLoading = false, ...rest }: ButtonProps) {
  return (
    <StyledTouchableOpacity
      activeOpacity={0.4}
      disabled={isLoading}
      {...rest}
    >
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        children
      )}
    </StyledTouchableOpacity>
  );
}

Button.Title = Title;

export { Button };

function Title({ children }: TextProps) {
  return <TitleText>{children}</TitleText>;
}



export const StyledTouchableOpacity = styled(TouchableOpacity)`
  justify-content:center;
  align-items:center;
  flex-direction: row;
  width:100%;
  height: 52px;
  background-color: ${(props) => props.theme.colors.purple.base};
  border-radius: 8px;
`;

export const TitleText = styled.Text`
  color: ${(props) => props.theme.colors.gray[100]};
`; 
