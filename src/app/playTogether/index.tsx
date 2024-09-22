import { useState } from "react";
import { router } from "expo-router";
import { BombMessage, Container, ScrollContainer, Title } from "./styles";
import InputTimer from "@/src/components/PlayTogether/InputTimer";
import TipInput from "@/src/components/PlayTogether/TipInput";
import InputPassword from "@/src/components/PlayTogether/InputPassword";
import ButtonComponent from "@/src/components/Buttons";
import BombService from "@/src/services/bombApp";

export default function PlayTogether() {
  const [pin, setPin] = useState(["", "", "", ""]);
  const [started, setStarted] = useState(false);
  const [hours, setHours] = useState("");
  const [minutes, setMinutes] = useState("");
  const [seconds, setSeconds] = useState("");
  const [message, setMessage] = useState("");

  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [intervalId, setIntervalId] = useState(null);

  const handleStartBomb = () => {
    const diffTime = BombService.getDiffTime({ hours, minutes, seconds });

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

  const handleStartGame = () => {
    BombService.bombActivationTogether({
      question,
      pin,
      hours,
      minutes,
      seconds,
      setMessage,
      setStarted,
      setPin,
      handleStartBomb,
      setAnswer,
    });
  };

  const goToHome = () => {
    router.push("/");
  };

  const handleDisarmBomb = () => {
    BombService.bombDisarmTogether({
      pin,
      answer,
      setStarted,
      intervalId,
      setPin,
      setAnswer,
    });
  };

  const handleGiveUp = () => {
    BombService.giveUpGame({ intervalId });
  };

  return (
    <ScrollContainer>
      <Container>
        <Title>Bomb Game Dupla</Title>
        <InputTimer
          hours={hours}
          minutes={minutes}
          seconds={seconds}
          setHours={setHours}
          setMinutes={setMinutes}
          setSeconds={setSeconds}
        />

        {message && <BombMessage>{message}</BombMessage>}

        <TipInput
          started={started}
          question={question}
          setQuestion={setQuestion}
        />

        <InputPassword pin={pin} setPin={setPin} />

        {!started ? (
          <>
            <ButtonComponent
              buttonText="Iniciar"
              handlePress={handleStartGame}
            />
            <ButtonComponent
              buttonText="Página Inicial"
              handlePress={goToHome}
            />
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
    </ScrollContainer>
  );
}
