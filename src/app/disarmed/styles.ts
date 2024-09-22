import styled from "styled-components/native";
import theme from "@/src/global/styles/theme";
import { RFValue } from "react-native-responsive-fontsize";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

export const Container = styled.View`
  flex: 1;
  padding-top: ${getStatusBarHeight() + RFValue(30)}px;
  background-color: ${theme.colors.black};
`;

export const Logo = styled.Image`
  width: ${RFValue(270)}px;
  height: ${RFValue(50)}px;
  margin: 0 auto;
`;

export const Title = styled.Text`
  text-align: center;
  font-size: ${RFValue(32)}px;
  font-family: ${theme.fonts.bold};
  margin: ${RFValue(70)}px ${RFValue(5)}px 0;
  color: ${theme.colors.white};
`;

export const SucessImg = styled.Image`
  width: ${RFValue(270)}px;
  height: ${RFValue(150)}px;
  margin: ${RFValue(50)}px auto ${RFValue(30)}px;
`;
