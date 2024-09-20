import { useRef } from "react";
import { ImageBackground, Keyboard, TextInput } from "react-native";
import { Input, InputContainer, TextTimer, Timer } from "./styles";
import theme from "@/src/global/styles/theme";

const bombImg = "@/src/assets/images/bomba.png";

export default function InputTimer() {
  const input1 = useRef<TextInput>(null);
  const input2 = useRef<TextInput>(null);
  const input3 = useRef<TextInput>(null);

  const handleChange = (
    text: string,
    nextInput: React.RefObject<TextInput>
  ) => {
    if (text.length === 2) {
      nextInput.current?.focus(); // Alterna o foco para o próximo campo
    }
  };

  return (
    <ImageBackground
      source={require(bombImg)}
      resizeMode="cover"
      style={{
        alignItems: "center",
        justifyContent: "center",
        marginTop: 50,
        minHeight: 130,
      }}
    >
      <Timer>
        <InputContainer>
          <Input
            keyboardType="number-pad"
            maxLength={2}
            placeholder="00"
            placeholderTextColor={theme.colors.white}
            ref={input1}
            onChangeText={(text: string) => handleChange(text, input2)}
            //  hoursInput{value}
          />
        </InputContainer>
        <TextTimer>:</TextTimer>

        <InputContainer>
          <Input
            keyboardType="number-pad"
            maxLength={2}
            placeholder="00"
            placeholderTextColor={theme.colors.white}
            ref={input2}
            onChangeText={(text: string) => handleChange(text, input3)}
            //  minutesInput{value}
          />
        </InputContainer>
        <TextTimer>:</TextTimer>

        <InputContainer>
          <Input
            keyboardType="number-pad"
            maxLength={2}
            placeholder="00"
            placeholderTextColor={theme.colors.white}
            ref={input3}
            onChangeText={(text: string) => {
              text.length === 2 && Keyboard.dismiss();
            }}
            //  secondsInput{value}
          />
        </InputContainer>
      </Timer>
    </ImageBackground>
  );
}
