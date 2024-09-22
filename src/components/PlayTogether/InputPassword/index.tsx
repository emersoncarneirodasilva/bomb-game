import { useRef } from "react";
import { Keyboard, TextInput } from "react-native";
import { Container, Input, InputContainer } from "./styles";

interface InputPasswordProps {
  pin: string[];
  setPin: React.Dispatch<React.SetStateAction<string[]>>;
}

export default function InputPassword({ pin, setPin }: InputPasswordProps) {
  const input1 = useRef<TextInput>(null);
  const input2 = useRef<TextInput>(null);
  const input3 = useRef<TextInput>(null);
  const input4 = useRef<TextInput>(null);

  const handleChange = (
    text: string,
    index: number,
    nextInput: React.RefObject<TextInput>
  ) => {
    const updatedPin = [...pin];
    updatedPin[index] = text; // Atualiza o valor correspondente no array
    setPin(updatedPin);

    if (text.length === 1 && nextInput.current) {
      nextInput.current.focus();
    }
  };

  return (
    <Container>
      <InputContainer>
        <Input
          keyboardType={"number-pad"}
          maxLength={1}
          ref={input1}
          value={pin[0]} // Mostra o valor do primeiro campo
          onChangeText={(text: string) => handleChange(text, 0, input2)}
        />
      </InputContainer>
      <InputContainer>
        <Input
          keyboardType={"number-pad"}
          maxLength={1}
          ref={input2}
          value={pin[1]} // Mostra o valor do segundo campo
          onChangeText={(text: string) => handleChange(text, 1, input3)}
        />
      </InputContainer>
      <InputContainer>
        <Input
          keyboardType={"number-pad"}
          maxLength={1}
          ref={input3}
          value={pin[2]} // Mostra o valor do terceiro campo
          onChangeText={(text: string) => handleChange(text, 2, input4)}
        />
      </InputContainer>
      <InputContainer>
        <Input
          keyboardType={"number-pad"}
          maxLength={1}
          ref={input4}
          value={pin[3]} // Mostra o valor do quarto campo
          onChangeText={(text: string) => {
            handleChange(text, 3, input4);
            if (text.length === 1) {
              Keyboard.dismiss(); // Fecha o teclado ao preencher o último campo
            }
          }}
        />
      </InputContainer>
    </Container>
  );
}
