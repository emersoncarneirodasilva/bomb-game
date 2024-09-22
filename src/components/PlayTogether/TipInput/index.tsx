import { Container, Input, InputContainer, TipText, TipTitle } from "./styles";

interface TipInputProps {
  started: boolean;
  question: string;
  setQuestion: React.Dispatch<React.SetStateAction<string>>;
}

export default function TipInput({
  started,
  question,
  setQuestion,
}: TipInputProps) {
  const handleQuestion = (text: string) => {
    setQuestion(text);
  };

  return (
    <Container>
      <TipTitle>Dica de senha:</TipTitle>
      {!started ? (
        <InputContainer>
          <Input
            placeholder="Dica para a sua dupla"
            editable={!started}
            value={question}
            onChangeText={(text: string) => handleQuestion(text)}
          />
        </InputContainer>
      ) : (
        <TipText>{question}</TipText>
      )}
    </Container>
  );
}
