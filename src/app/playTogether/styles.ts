import styled from "styled-components/native";
import theme from "@/src/global/styles/theme";
import { RFValue } from "react-native-responsive-fontsize";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

export const ScrollContainer = styled.ScrollView`
  flex: 1;
  background-color: ${theme.colors.background};
`;

export const Container = styled.View`
  flex: 1;
  padding-top: ${getStatusBarHeight() + RFValue(10)}px;
`;

export const Title = styled.Text`
  text-align: center;
  font-family: ${theme.fonts.bold};
  font-size: ${RFValue(32)}px;
  color: ${theme.colors.white};
`;

export const BombMessage = styled.Text`
  text-align: center;
  font-size: ${RFValue(20)}px;
  padding-bottom: ${RFValue(20)}px;
  color: ${theme.colors.explodeBackground};
`;
