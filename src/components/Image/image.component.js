import styled from "styled-components/native";

export const Image = styled.Image`
  width: 50px;
  height: 50px;
  backgroundColor: ${({ theme }) => theme.colors.brand.tertiary};
  borderRadius: ${({ theme }) => theme.sizes[4]};
  marginRight:10px
`;
