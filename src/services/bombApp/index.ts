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
};

export default BombService;
