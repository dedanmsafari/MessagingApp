import React from "react";
import styled, { useTheme } from "styled-components/native";

//Expected <Spacer position= 'top' variant='large'>

const positionVariant = {
  top: "margin-top",
  right: "margin-right",
  bottom: "margin-bottom",
  left: "margin-left",
};

const sizeVariant = {
  small: 1,
  medium: 2,
  large: 3,
  xlarge: 4,
  xxlarge: 5,
};

const SpacerView = styled.View`
  ${({ variant }) => variant}
`;

const getVariant = (position, size, theme) => {
  const property = positionVariant[position];
  const getSize = sizeVariant[size];
  const value = theme.space[getSize];
  return `${property}: ${value}`;
};

export const Spacer = ({ position, size, children }) => {
  const theme = useTheme();
  const variant = getVariant(position, size, theme);
  return <SpacerView variant={variant}>{children}</SpacerView>;
};

Spacer.defaultProps = {
  position: "top",
  size: "large",
};
