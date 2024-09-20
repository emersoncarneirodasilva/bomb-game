import { router } from "expo-router";
import { BombMessage, Container, ScrollContainer, Title } from "./styles";
import InputTimer from "@/src/components/PlayTogether/InputTimer";
import TipInput from "@/src/components/PlayTogether/TipInput";
import InputPassword from "@/src/components/PlayTogether/InputPassword";
import ButtonComponent from "@/src/components/Buttons";

export default function PlayTogether() {
  const handleStartGame = () => {
    alert("Iniciando o game!");
  };

  const goToHome = () => {
    router.push("/");
  };

  return (
    <ScrollContainer>
      <Container>
        <Title>Bomb Game Dupla</Title>
        <InputTimer />
        <BombMessage>Menssagem de erro será aqui!</BombMessage>
        <TipInput />
        <InputPassword />
        <ButtonComponent buttonText="Iniciar" handlePress={handleStartGame} />
        <ButtonComponent buttonText="Página Inicial" handlePress={goToHome} />
      </Container>
    </ScrollContainer>
  );
}
