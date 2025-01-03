import {
  TouchableOpacity,
  TouchableOpacityProps,
  TextProps,
  ActivityIndicator,
} from "react-native";

import React, { Children } from "react";
import styled from "styled-components/native";

type ButtonProps = TouchableOpacityProps & {
  isLoading?: boolean;
  padding?: number;
  width?: string | number;
  height?: string | number;
};

function Button({ children, style, isLoading = false, padding, ...rest }: ButtonProps) {
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

export const StyledTouchableOpacity = styled(TouchableOpacity)<{
  width?: string | number;
  height?: string | number;
  padding?: number;
}>`
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: ${(props) => props.theme.colors.purple.base};
  border-radius: 8px;
  padding: ${(props) => (props.padding ? `${props.padding}px` : "0px")};
`;

export const TitleText = styled.Text`
  color: ${(props) => props.theme.colors.gray[100]};
`; 
