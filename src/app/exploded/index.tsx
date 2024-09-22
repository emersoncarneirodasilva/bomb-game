import ButtonComponent from "@/src/components/Buttons";
import { Container, FailedImg, Logo, Title } from "./styles";
import { router } from "expo-router";
import { Vibration } from "react-native";

const logoImg = "@/src/assets/images/logoLightRed.png";
const failedImg = "@/src/assets/images/bomba_explodiu.png";

export default function Exploded() {
  const goToHome = () => {
    router.push("/");
  };

  setTimeout(function () {
    Vibration.vibrate(3 * 1000);
  }, 500);

  return (
    <Container>
      <Logo source={require(logoImg)} style={{ resizeMode: "contain" }} />
      <Title>Você falhou, a{"\n"}bomba explodiu💥</Title>
      <FailedImg
        source={require(failedImg)}
        style={{ resizeMode: "contain" }}
      />
      <ButtonComponent buttonText="Página Inicial" handlePress={goToHome} />
    </Container>
  );
}
