import moment from "moment";
import { router } from "expo-router";
import { Vibration } from "react-native";

interface BombServiceProps {
  seconds: string;
  minutes: string;
  hours: string;
}

interface CountdownProps {
  setSeconds: (value: string) => void;
  setMinutes: (value: string) => void;
  setHours: (value: string) => void;
  setStarted: (value: boolean) => void;
  diffTime: number;
  setIntervalId: (id: NodeJS.Timeout) => void;
  intervalId: NodeJS.Timeout | null;
}

interface BombStartGameProps extends BombServiceProps {
  setStarted: (value: boolean) => void;
}

interface DisarmBombProps {
  setStarted: (value: boolean) => void;
  answer: string;
  pin: string[];
  setPin: (newPin: string[]) => void;
  intervalId: NodeJS.Timeout | null;
}

interface giveUpGameProps {
  intervalId: NodeJS.Timeout | null;
}

interface BombActivationParams {
  question: string;
  pin: string[];
  hours: string;
  minutes: string;
  seconds: string;
  setMessage: (message: string) => void;
  setStarted: (started: boolean) => void;
  setPin: (pin: string[]) => void;
  handleStartBomb: () => void;
  setAnswer: (answer: string) => void;
}

interface bombDisarmTogetherProps {
  pin: string[];
  answer: string;
  setStarted: (started: boolean) => void;
  intervalId: NodeJS.Timeout | null;
  setPin: (newPin: string[]) => void;
  setAnswer: (answer: string) => void;
}

const formatTime = (duration: moment.Duration) => {
  const hoursDigits = duration.hours().toString().padStart(2, "0");
  const minutesDigits = duration.minutes().toString().padStart(2, "0");
  const secondsDigits = duration.seconds().toString().padStart(2, "0");

  return { hoursDigits, minutesDigits, secondsDigits };
};

const BombService = {
  getDiffTime: ({ seconds, minutes, hours }: BombServiceProps): number => {
    const explodeTime = moment(); // Clonando o momento atual para evitar mutação

    const secondsValue = parseInt(seconds) || 0;
    const minutesValue = parseInt(minutes) || 0;
    const hoursValue = parseInt(hours) || 0;

    // Adiciona os valores ao explodeTime
    explodeTime
      .add(secondsValue, "seconds")
      .add(minutesValue, "minutes")
      .add(hoursValue, "hours");

    const currentTime = moment();

    return explodeTime.unix() - currentTime.unix(); // Diferença de tempo em segundos
  },

  startCountdown: ({
    setSeconds,
    setMinutes,
    setHours,
    setStarted,
    diffTime,
    setIntervalId,
    intervalId,
  }: CountdownProps) => {
    let duration = moment.duration(diffTime * 1000);
    const interval = 1000;

    if (diffTime <= 0) return;

    // Função utilitária para limpar intervalos
    const clearExistingInterval = () => {
      if (intervalId) clearInterval(intervalId);
    };

    // Limpa o intervalo anterior antes de iniciar um novo
    clearExistingInterval();

    const id = setInterval(() => {
      duration = moment.duration(duration.asMilliseconds() - interval);

      const { hoursDigits, minutesDigits, secondsDigits } =
        formatTime(duration);

      // Verifica se o tempo acabou diretamente
      if (duration.asSeconds() <= 0) {
        clearInterval(id);
        setStarted(false);
        router.push("/exploded");
      }

      setHours(hoursDigits);
      setMinutes(minutesDigits);
      setSeconds(secondsDigits);
    }, interval);

    setIntervalId(id);
  },

  bombStartGame: ({
    setStarted,
    hours,
    minutes,
    seconds,
  }: BombStartGameProps) => {
    const hasTimeSet = [hours, minutes, seconds].some(
      (time) => time.length > 0
    );
    if (hasTimeSet) {
      setStarted(true);
    }
  },

  disarmBomb: ({
    setStarted,
    answer,
    pin,
    setPin,
    intervalId,
  }: DisarmBombProps) => {
    const clearExistingInterval = () => {
      if (intervalId) clearInterval(intervalId);
    };

    if (pin.join("") === answer) {
      clearExistingInterval();
      setStarted(false);
      router.push("/disarmed");
    } else {
      setPin(["", "", "", ""]);
      Vibration.vibrate(1000);
    }
  },

  giveUpGame: ({ intervalId }: giveUpGameProps) => {
    if (intervalId) clearInterval(intervalId);
    router.push("/exploded");
  },

  bombActivationTogether: ({
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
  }: BombActivationParams) => {
    // Verifica se há uma dica fornecida
    if (!question.trim()) {
      setMessage("Você precisa dar uma dica!");
      return;
    }

    // Verifica se o PIN está completo (tamanho 4)
    const pinString = pin.join("");
    if (pinString.length !== 4) {
      setMessage("Senha inválida, complete ela");
      return;
    }

    // Verifica se o tempo foi definido corretamente
    const timeIsSet = hours.trim() || minutes.trim() || seconds.trim();
    if (!timeIsSet) {
      setMessage("Timer inválido, coloque um tempo");
      return;
    }

    // Se todos os dados estiverem corretos, inicia a bomba
    setStarted(true);
    setMessage(""); // Limpa a mensagem
    handleStartBomb();
    setAnswer(pinString);
    setPin(["", "", "", ""]); // Reseta o PIN
  },

  bombDisarmTogether: ({
    pin,
    answer,
    setStarted,
    intervalId,
    setPin,
    setAnswer,
  }: bombDisarmTogetherProps) => {
    const isCorrectPin = pin.join("") === answer;

    if (isCorrectPin) {
      if (intervalId) clearInterval(intervalId);
      setStarted(false);
      router.push("/disarmed");
    } else {
      Vibration.vibrate(1000);
    }

    // Resetar o PIN e a resposta após a verificação
    setPin(["", "", "", ""]);
    setAnswer("");
  },
};

export default BombService;
