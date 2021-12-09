import styled from "styled-components";

//Expected <Text variant ='hint'> Good Day Sir!</Text>

const defaultTextStyle = (theme) => `
  font-family:${theme.fonts.body};
  font-weight:${theme.fontWeights.regular};
  color:${theme.colors.text.primary};
  flex-wrap:wrap;
  margin-top:0px;
  margin-bottom:0px;
`;

const body = (theme) => `
font-size: ${theme.fontSizes.body};
`;

const hint = (theme) => `
font-size: ${theme.fontSizes.body};
`;

const error = (theme) => `
color: ${theme.colors.text.error};
font-size: ${theme.fontSizes.heading};
font-weight: ${theme.fontWeights.bold};
`;

const caption = (theme) => `
font-size: ${theme.fontSizes.caption};
font-weight: ${theme.fontWeights.bold};
`;
const title = (theme) => `
font-size: ${theme.fontSizes.h4};
font-family: ${theme.fonts.bodyBold};
`;

const label = (theme) => `
font-family: ${theme.fonts.heading};
font-size: ${theme.fontSizes.body};
font-weight: ${theme.fontWeights.regular};
`;
const fancy = (theme) => `
font-family: ${theme.fonts.fancy};
font-size: ${theme.fontSizes.h2};
font-weight: ${theme.fontWeights.regular};
color:${theme.colors.brand.primary}
`;

const variants = {
  body,
  label,
  caption,
  error,
  hint,
  fancy,
  title,
};

export const Text = styled.Text`
  ${({ theme }) => defaultTextStyle(theme)}
  ${({ variant, theme }) => variants[variant](theme)}
`;

Text.defaultProps = {
  variant: "body",
};
