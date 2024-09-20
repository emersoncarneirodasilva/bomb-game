import styled from "styled-components/native";
import theme from "@/src/global/styles/theme";
import { RFValue } from "react-native-responsive-fontsize";

export const Timer = styled.View`
  flex-direction: row;
  margin-bottom: ${RFValue(25)}px;
  margin-right: ${RFValue(13)}px;
`;

export const TextTimer = styled.Text`
  font-family: ${theme.fonts.bold};
  font-size: ${RFValue(20)}px;
  margin: 0px ${RFValue(5)}px;
  color: ${theme.colors.white};
`;

export const InputContainer = styled.View`
  align-items: center;
  justify-content: center;
`;

export const Input = styled.TextInput<any>`
  text-align: center;
  font-size: ${RFValue(20)}px;
  width: 100%;
  color: ${theme.colors.white};
`;
