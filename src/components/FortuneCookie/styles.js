import styled from "styled-components/native";
import { Image, Text, View } from "react-native";

export const Container = styled(View)`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const StyledImage = styled(Image)`
  width: 250px;
  height: 230px;
`;

export const Fortune = styled(Text)`
  font-size: 20px;
  color: #dd7b22;
  margin: 30px;
  font-style: italic;
  text-align: center;
`;
