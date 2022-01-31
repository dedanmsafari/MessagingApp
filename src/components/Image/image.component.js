import styled from "styled-components/native";

export const Image = styled.Image`
  width: 50;
  height: 50;
  backgroundColor: ${({ theme }) => theme.colors.brand.tertiary};
  borderRadius: ${({ theme }) => theme.sizes[4]};
  marginRight:10px
`;
