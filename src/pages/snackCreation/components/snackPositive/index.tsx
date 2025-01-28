import { useNavigate } from "react-router-dom";

import { ButtonClick, StyledButton } from "../../style";
import { StyleP, StyledImage, ContainerInt} from "./styles";

export function SnackPositive() {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/home");
  };

  return (
    <ContainerInt>
      <StyleP>
        <p>Continue Assim!</p>
        <span>Você continua dentro da Dieta. Muito bem!!!</span>
      </StyleP>
      <StyledImage
        src="../../../../../public/IllustrationCreation.png"
        alt="Feliz, dentro da Dieta"
      />

      <ButtonClick>
        <StyledButton onClick={goToHome}>Ir para página Inicial</StyledButton>
      </ButtonClick>
      </ContainerInt>
  );
}
