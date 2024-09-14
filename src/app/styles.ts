import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

export const Container = styled.View`
  flex: 1;
  padding-top: ${getStatusBarHeight() + RFValue(50)}px;
  background-color: #131313;
`;

export const Logo = styled.Image`
  width: ${RFValue(270)}px;
  height: ${RFValue(50)}px;
  margin: 0 auto;
`;

export const Title = styled.Text`
  text-align: center;
  font-family: sans-serif;
  font-size: ${RFValue(32)}px;
  margin-top: ${RFValue(70)}px;
  margin-bottom: ${RFValue(110)}px;
  color: white;
`;

export const SubTitle = styled.Text`
  text-align: center;
  font-family: sans-serif;
  font-size: ${RFValue(16)}px;
  color: white;
`;

export const Rules = styled.Text`
  text-align: center;
  font-family: sans-serif;
  font-size: ${RFValue(16)}px;
  margin-top: ${RFValue(80)}px;
  color: white;
`;
