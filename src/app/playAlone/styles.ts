import styled from "styled-components/native";
import theme from "@/src/global/styles/theme";
import { RFValue } from "react-native-responsive-fontsize";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

export const Container = styled.View`
  flex: 1;
  padding-top: ${getStatusBarHeight() + RFValue(30)}px;
  background-color: ${theme.colors.background};
`;

export const Title = styled.Text`
  text-align: center;
  font-family: ${theme.fonts.bold};
  font-size: ${RFValue(32)}px;
  color: ${theme.colors.white};
`;

export const Timer = styled.View`
  margin-bottom: ${RFValue(25)}px;
  margin-right: ${RFValue(12)}px;
`;

export const TextTimer = styled.Text`
  font-family: ${theme.fonts.bold};
  font-size: ${RFValue(20)}px;
  color: ${theme.colors.white};
`;

export const TipContainer = styled.View`
  margin: 0 ${RFValue(45)}px;
`;

export const TipTitle = styled.Text`
  font-family: ${theme.fonts.bold};
  font-size: ${RFValue(20)}px;
  color: ${theme.colors.white};
`;

export const TipText = styled.Text`
  font-family: ${theme.fonts.regular};
  font-size: ${RFValue(14)}px;
  color: ${theme.colors.textLight};
`;
