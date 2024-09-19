import { ImageBackground } from "react-native";
import { router } from "expo-router";
import {
  Container,
  TextTimer,
  Timer,
  TipContainer,
  TipText,
  TipTitle,
  Title,
} from "./styles";
import PasswordInput from "@/src/components/PasswordInput";
import ButtonComponent from "@/src/components/Buttons";

const bombImg = "@/src/assets/images/bomba.png";

export default function PlayAlone() {
  const handleStartGame = () => {
    alert("Começar o Jogo!");
  };

  const goToHome = () => {
    router.push("/");
  };

  return (
    <Container>
      <Title>Bomb Game Solo</Title>
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
          <TextTimer>00 : 05 : 00</TextTimer>
        </Timer>
      </ImageBackground>

      <TipContainer>
        <TipTitle>Sua dica:</TipTitle>
        <TipText>Dica virá aqui!</TipText>
      </TipContainer>

      <PasswordInput />

      <ButtonComponent buttonText="Iniciar" handlePress={handleStartGame} />
      <ButtonComponent buttonText="Página Inicial" handlePress={goToHome} />
    </Container>
  );
}
