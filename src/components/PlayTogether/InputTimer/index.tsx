import { useRef } from "react";
import { ImageBackground, Keyboard, TextInput } from "react-native";
import { Input, InputContainer, TextTimer, Timer } from "./styles";
import theme from "@/src/global/styles/theme";

interface InputTimerProps {
  hours: string;
  minutes: string;
  seconds: string;
  setHours: React.Dispatch<React.SetStateAction<string>>;
  setMinutes: React.Dispatch<React.SetStateAction<string>>;
  setSeconds: React.Dispatch<React.SetStateAction<string>>;
}

const bombImg = "@/src/assets/images/bomba.png";

export default function InputTimer({
  hours,
  minutes,
  seconds,
  setHours,
  setMinutes,
  setSeconds,
}: InputTimerProps) {
  const input1 = useRef<TextInput>(null);
  const input2 = useRef<TextInput>(null);
  const input3 = useRef<TextInput>(null);

  const handleChange = (
    text: string,
    nextInput: React.RefObject<TextInput>,
    setter: React.Dispatch<React.SetStateAction<string>>
  ) => {
    setter(text); // Atualiza o estado com o valor digitado
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
            value={hours} // Valor das horas vindo das props
            ref={input1}
            onChangeText={(text: string) =>
              handleChange(text, input2, setHours)
            }
          />
        </InputContainer>
        <TextTimer>:</TextTimer>

        <InputContainer>
          <Input
            keyboardType="number-pad"
            maxLength={2}
            placeholder="00"
            placeholderTextColor={theme.colors.white}
            value={minutes} // Valor dos minutos vindo das props
            ref={input2}
            onChangeText={(text: string) =>
              handleChange(text, input3, setMinutes)
            }
          />
        </InputContainer>
        <TextTimer>:</TextTimer>

        <InputContainer>
          <Input
            keyboardType="number-pad"
            maxLength={2}
            placeholder="00"
            placeholderTextColor={theme.colors.white}
            value={seconds} // Valor dos segundos vindo das props
            ref={input3}
            onChangeText={(text: string) => {
              setSeconds(text); // Atualiza os segundos
              if (text.length === 2) Keyboard.dismiss();
            }}
          />
        </InputContainer>
      </Timer>
    </ImageBackground>
  );
}
