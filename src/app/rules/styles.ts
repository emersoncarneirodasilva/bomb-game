import styled from "styled-components/native";
import theme from "@/src/global/styles/theme";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { RFValue } from "react-native-responsive-fontsize";
import { MaterialIcons } from "@expo/vector-icons";

export const Container = styled.View`
  flex: 1;
  padding: ${getStatusBarHeight() + RFValue(10)}px 20px;
  background-color: ${theme.colors.background};
`;

export const Icon = styled(MaterialIcons)`
  font-size: ${RFValue(30)}px;
  margin-bottom: ${RFValue(20)}px;
  color: ${theme.colors.white};
`;

export const ScrollTextRules = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})``;

export const Title = styled.Text`
  font-family: ${theme.fonts.bold};
  font-size: ${RFValue(32)}px;
  margin-left: ${RFValue(10)}px;
  color: ${theme.colors.white};
`;

export const Paragraph = styled.Text`
  font-family: ${theme.fonts.regular};
  font-size: ${RFValue(16)}px;
  margin-top: ${RFValue(15)}px;
  margin-left: ${RFValue(10)}px;
  color: ${theme.colors.textLight};
`;

export const NumberParagraph = styled.Text`
  font-weight: bold;
  color: ${theme.colors.white};
`;
