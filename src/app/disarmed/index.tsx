import ButtonComponent from "@/src/components/Buttons";
import { Container, Logo, SucessImg, Title } from "./styles";
import { router } from "expo-router";

const logoImg = "@/src/assets/images/logoDark.png";
const sucessImg = "@/src/assets/images/bomba_cortada_matrix.png";

export default function Disarmed() {
  const goToHome = () => {
    router.push("/");
  };

  return (
    <Container>
      <Logo source={require(logoImg)} style={{ resizeMode: "contain" }} />
      <Title>Parabens!!!{"\n"}Bomba desarmada com sucesso👏</Title>
      <SucessImg
        source={require(sucessImg)}
        style={{ resizeMode: "contain" }}
      />
      <ButtonComponent buttonText="Página Inicial" handlePress={goToHome} />
    </Container>
  );
}
