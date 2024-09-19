import styled from "styled-components/native";
import theme from "@/src/global/styles/theme";
import { RFValue } from "react-native-responsive-fontsize";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

export const Container = styled.View`
  flex: 1;
  padding-top: ${getStatusBarHeight() + RFValue(30)}px;
  background-color: ${theme.colors.background};
`;

export const Logo = styled.Image`
  width: ${RFValue(270)}px;
  height: ${RFValue(50)}px;
  margin: 0 auto;
`;

export const Title = styled.Text<{ fontsLoaded: boolean }>`
  text-align: center;
  ${({ fontsLoaded }) =>
    fontsLoaded
      ? `font-family: ${theme.fonts.bold};`
      : `font-family: sans-serif;`}
  font-size: ${RFValue(32)}px;
  margin-top: ${RFValue(70)}px;
  margin-bottom: ${RFValue(110)}px;
  color: ${theme.colors.white};
`;

export const SubTitle = styled.Text<{ fontsLoaded: boolean }>`
  text-align: center;
  ${({ fontsLoaded }) =>
    fontsLoaded
      ? `font-family: ${theme.fonts.regular};`
      : `font-family: sans-serif;`}
  font-size: ${RFValue(16)}px;
  color: ${theme.colors.white};
`;

export const Rules = styled.Text<{ fontsLoaded: boolean }>`
  text-align: center;
  ${({ fontsLoaded }) =>
    fontsLoaded
      ? `font-family: ${theme.fonts.bold};`
      : `font-family: sans-serif;`}
  font-size: ${RFValue(16)}px;
  margin-top: ${RFValue(80)}px;
  color: ${theme.colors.white};
`;
