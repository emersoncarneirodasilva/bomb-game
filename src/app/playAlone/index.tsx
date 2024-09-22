import { useEffect, useState } from "react";
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
import BombService from "@/src/services/bombApp";
import api from "@/src/services/api/api";

const bombImg = "@/src/assets/images/bomba.png";

export default function PlayAlone() {
  const [started, setStarted] = useState(false);
  const [pin, setPin] = useState(["", "", "", ""]);
  const [hours, setHours] = useState("00");
  const [minutes, setMinutes] = useState("03");
  const [seconds, setSeconds] = useState("00");

  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [intervalId, setIntervalId] = useState(null);

  const handleStartGame = () => {
    BombService.bombStartGame({ setStarted, hours, minutes, seconds });
  };

  const goToHome = () => {
    router.push("/");
  };

  const handleDisarmBomb = () => {
    BombService.disarmBomb({ setStarted, answer, pin, setPin, intervalId });
  };

  const handleGiveUp = () => {
    BombService.giveUpGame({ intervalId });
  };

  const fetchQuestion = async () => {
    const randomNumber = Math.floor(Math.random() * 6 + 1);

    const { data } = await api.get(`questions/${randomNumber}`);

    setQuestion(data?.pergunta);
    setAnswer(data?.resp);
  };

  useEffect(() => {
    fetchQuestion();
  }, []);

  const handleStartBomb = () => {
    const diffTime = BombService.getDiffTime({ seconds, minutes, hours });

    BombService.startCountdown({
      setSeconds,
      setMinutes,
      setHours,
      setStarted,
      diffTime,
      setIntervalId,
      intervalId,
    });
  };

  useEffect(() => {
    if (started) {
      handleStartBomb();
    }
  }, [started]);

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
          <TextTimer>
            {hours} : {minutes} : {seconds}
          </TextTimer>
        </Timer>
      </ImageBackground>

      {started && (
        <TipContainer>
          <TipTitle>Sua Dica:</TipTitle>
          <TipText>{question}</TipText>
        </TipContainer>
      )}

      <PasswordInput pin={pin} setPin={setPin} started={started} />

      {!started ? (
        <>
          <ButtonComponent buttonText="Iniciar" handlePress={handleStartGame} />
          <ButtonComponent buttonText="Página Inicial" handlePress={goToHome} />
        </>
      ) : (
        <>
          <ButtonComponent
            buttonText="Desarmar"
            handlePress={handleDisarmBomb}
          />
          <ButtonComponent buttonText="Desistir" handlePress={handleGiveUp} />
        </>
      )}
    </Container>
  );
}
