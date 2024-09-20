import styled from "styled-components/native";
import theme from "@/src/global/styles/theme";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  margin: 0 ${RFValue(45)}px;
`;

export const TipTitle = styled.Text`
  text-decoration-line: underline;
  font-size: ${RFValue(24)}px;
  font-family: ${theme.fonts.bold};
  color: ${theme.colors.white};
`;

export const InputContainer = styled.View`
  align-items: center;
  justify-content: center;
  width: ${RFValue(260)}px;
  height: ${RFValue(30)}px;
  margin-top: ${RFValue(7)}px;
  border: ${RFValue(1)}px solid white;
  border-radius: ${RFValue(5)}px;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: "white",
})`
  font-family: ${theme.fonts.regular};
  font-size: ${RFValue(12)}px;
  width: 90%;
  color: ${theme.colors.white};
`;
