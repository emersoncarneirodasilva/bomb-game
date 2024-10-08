import styled from "styled-components/native";
import theme from "@/src/global/styles/theme";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  margin: ${RFValue(40)}px ${RFValue(30)}px;
`;

export const InputContainer = styled.View`
  align-items: center;
  justify-content: center;
  padding: ${RFValue(10)}px;
  border: ${RFValue(1)}px solid white;
  border-radius: ${RFValue(5)}px;
`;

export const Input = styled.TextInput<any>`
  text-align: center;
  font-size: ${RFValue(30)}px;
  color: ${theme.colors.white};
  background-color: ${({ disabled }) =>
    disabled ? "#9999998c" : "transparent"};
`;
