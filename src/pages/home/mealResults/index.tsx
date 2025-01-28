import { useNavigate } from "react-router-dom";
import {
  ModalContainer,
  Header,
  BackImage,
  Content,
  BestDishes,
  RecordedMeals,
  BoxResult,
  BoxInside,
  BoxOutside,
} from "./style";
import { useRefeicoes } from "../../../util/context/RefeicoesContext";

export function MealResults() {
  const navigate = useNavigate();
  const {
    refeicoesDentroDaDieta,
    countSim,
    countNao,
    totalRefeicoesRegistradas,
    consecutiveSimCount,
  } = useRefeicoes();

  const goToHome = () => {
    //navigate("/");
    navigate(-1);
  };


  return (
    <div
    style={{
      border: "1px solid red",
    }}
    >
      <ModalContainer >
        <Header>
          <BackImage
            src="../../../../../public/Back.png"
            alt="Seta que volta para Home"
            onClick={goToHome}
          />
          <Content>
            <h1>{refeicoesDentroDaDieta}%</h1>
            <p>das refeições dentro da dieta</p>
          </Content>
        </Header>
        <span>Estatísticas gerais</span>
        <BestDishes>
          <h1>{consecutiveSimCount}</h1>
          <p>melhor sequência de pratos dentro da dieta</p>
        </BestDishes>
        <RecordedMeals>
          <h1>{totalRefeicoesRegistradas}</h1>
          <p>refeições registradas</p>
        </RecordedMeals>
        <BoxResult>
          <BoxInside>
            <h1>{countSim}</h1>
            <p>Dentro da dieta</p>
          </BoxInside>
          <BoxOutside>
            <h1>{countNao}</h1>
            <p>Fora da dieta</p>
          </BoxOutside>
        </BoxResult>
      </ModalContainer>
    </div>
  );
}
