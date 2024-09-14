import { Button, ButtonContent } from "./styles";

interface ButtonComponentProps {
  buttonText: string;
  handlePress: () => void;
}

export default function ButtonComponent({
  buttonText,
  handlePress,
}: ButtonComponentProps) {
  return (
    <Button onPress={handlePress} activeOpacity={0.95}>
      <ButtonContent>{buttonText}</ButtonContent>
    </Button>
  );
}
