import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Button = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  width: ${RFValue(280)}px;
  height: ${RFValue(60)}px;
  margin: ${RFValue(20)}px auto 0 auto;
  border: 1px solid black;
  border-radius: ${RFValue(10)}px;
  background-color: white;
`;

export const ButtonContent = styled.Text`
  font-family: sans-serif;
  font-size: ${RFValue(20)}px;
  color: black;
`;
