import { useEffect } from "react";
import { router } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { Container, Logo, Rules, SubTitle, Title } from "./styles";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import ButtonComponent from "../components/Buttons";

export default function Index() {
  const [fontsLoaded, error] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  });

  useEffect(() => {
    if (fontsLoaded || error) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, error]);

  const playAlone = () => {
    router.push("/playAlone");
  };

  const playTogether = () => {
    router.push("/playTogether");
  };

  const goToRules = () => {
    router.push("/rules");
  };

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <Container>
      <Logo
        source={require("../assets/images/logoDark.png")}
        style={{ resizeMode: "contain" }}
      />
      <Title fontsLoaded={fontsLoaded}>Bem-vindo ao {"\n"}Bomb Game 💣</Title>
      <SubTitle fontsLoaded={fontsLoaded}>Escolha um modo de jogo.</SubTitle>
      <ButtonComponent buttonText="Jogar Solo" handlePress={playAlone} />
      <ButtonComponent buttonText="Jogar Em Dupla" handlePress={playTogether} />
      <Rules fontsLoaded={fontsLoaded} onPress={goToRules}>
        Ver as regras do jogo
      </Rules>
    </Container>
  );
}
