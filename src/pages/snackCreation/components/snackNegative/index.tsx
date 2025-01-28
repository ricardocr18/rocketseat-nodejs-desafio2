import { useNavigate } from "react-router-dom";
import { ButtonClick, StyledButton } from "../../style";
import { Container, StyleP, StyledImage } from "./styles";

export function SnackNegative() {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/home");
  };

  return (
    <Container>
      <StyleP>
        <p>Que pena!</p>
        <span>
          Você saiu da dieta dessa vez, mas continue se esforçando e não
          desista!
        </span>
      </StyleP>
      <StyledImage
        src="../../../../../public/IllustrationNegative.png"
        alt="Que, dentro fora da Dieta"
      />

      <ButtonClick>
        <StyledButton onClick={goToHome}>Ir para página Inicial</StyledButton>
      </ButtonClick>
    </Container>
  );
}
