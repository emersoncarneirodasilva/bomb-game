import ButtonComponent from "../components/buttons";
import { Container, Logo, Rules, SubTitle, Title } from "./styles";
import { router } from "expo-router";

export default function Index() {
  const playAlone = () => {
    alert("Ir para jogo solo");
  };

  const playInPairs = () => {
    alert("Ir para jogo em dupla");
  };

  const goToRules = () => {
    router.push("/rules");
  };

  return (
    <Container>
      <Logo
        source={require("../assets/images/logoDark.png")}
        style={{ resizeMode: "contain" }}
      />
      <Title>Bem-vindo ao {"\n"}Bomb Game 💣</Title>
      <SubTitle>Escolha um modo de jogo.</SubTitle>
      <ButtonComponent buttonText="Jogar Solo" handlePress={playAlone} />
      <ButtonComponent buttonText="Jogar Em Dupla" handlePress={playInPairs} />
      <Rules onPress={goToRules}>Ver as regras do jogo</Rules>
    </Container>
  );
}
