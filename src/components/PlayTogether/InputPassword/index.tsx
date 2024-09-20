import { useRef } from "react";
import { Keyboard, TextInput } from "react-native";
import { Container, Input, InputContainer } from "./styles";

export default function InputPassword() {
  const input1 = useRef<TextInput>(null);
  const input2 = useRef<TextInput>(null);
  const input3 = useRef<TextInput>(null);
  const input4 = useRef<TextInput>(null);

  const handleChange = (
    text: string,
    nextInput: React.RefObject<TextInput>
  ) => {
    if (text.length === 1) {
      nextInput.current?.focus(); // Alterna o foco para o próximo campo
    }
  };

  return (
    <Container>
      <InputContainer>
        <Input
          keyboardType="number-pad"
          maxLength={1}
          ref={input1}
          onChangeText={(text: string) => handleChange(text, input2)}
        />
      </InputContainer>
      <InputContainer>
        <Input
          keyboardType="number-pad"
          maxLength={1}
          ref={input2}
          onChangeText={(text: string) => handleChange(text, input3)}
        />
      </InputContainer>
      <InputContainer>
        <Input
          keyboardType="number-pad"
          maxLength={1}
          ref={input3}
          onChangeText={(text: string) => handleChange(text, input4)}
        />
      </InputContainer>
      <InputContainer>
        <Input
          keyboardType="number-pad"
          maxLength={1}
          ref={input4}
          onChangeText={() => {
            Keyboard.dismiss();
          }}
        />
      </InputContainer>
    </Container>
  );
}
