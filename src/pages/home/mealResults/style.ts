import styled from "styled-components";

export const ModalContainer = styled.div`
  margin-top: 100px;
  height: 650px;
  border: 1px solid black;
  border-radius: 10px;
  position: fixed;
  top: 36%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  z-index: 9999;
  font-weight: bold;
  font-family: "Roboto", sans-serif;

  .pagehome {
    font-size: 16px;
    margin-left: 15px;
    margin-bottom: 4px;
  }

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    /* height: 100%; */
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: flex-start; /* Altera o alinhamento vertical para o início */
  justify-content: space-between; /* Adiciona espaço entre os itens */
  flex-direction: column;
  background-color: #e5f0db;
  margin-bottom: 20px;

  width: 100%;
  height: 102px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;

  h1 {
    font-size: 30px;
    margin-top: -7px;
    margin-bottom: -13px;
  }
`;

export const BackImage = styled.img`
  z-index: 1;
  margin-top: 8px;
  cursor: pointer;
  width: 30px;
  height: auto;
  margin-left: 8px;
`;

export const Content = styled.div`
  margin: auto;
  flex: 1;
  text-align: center; // Adiciona o alinhamento central para o texto
`;

export const BestDishes = styled.div`
  margin-left: 20px;
  margin-right: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 327px;
  height: 89px;
  background-color: #dddedf;
  border-radius: 5px;
  margin-top: 20px; /* Adicionei um espaçamento superior para separar do conteúdo acima */

  h1,
  p {
    margin: 0; /* Remover margens padrão da tag h1 e p */
  }

  h1 {
    font-size: 24px; /* Tamanho de fonte ajustado para ficar centralizado */
    margin-bottom: 5px; /* Adiciona um pequeno espaçamento entre h1 e p */
  }

  p {
    font-size: 14px; /* Ajusta o tamanho da fonte do parágrafo */
  }
`;

export const RecordedMeals = styled.div`
  margin-left: 20px;
  margin-right: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 327px;
  height: 89px;
  background-color: #dddedf;
  border-radius: 5px;
  margin-top: 20px; /* Adicioni um espaçamento superior para separar do conteúdo acima */

  h1,
  p {
    margin: 0; /* Remover margens padrão da tag h1 e p */
  }

  h1 {
    font-size: 24px; /* Tamanho de fonte ajustado para ficar centralizado */
    margin-bottom: 5px; /* Adiciona um pequeno espaçamento entre h1 e p */
  }

  p {
    font-size: 14px; /* Ajusta o tamanho da fonte do parágrafo */
  }
`;

export const BoxResult = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

export const BoxInside = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 157px;
  height: 107px;
  background-color: #e5f0db;
  margin-right: 10px;
  border-radius: 5px;

  h1,
  p {
    margin: 0; /* Remover margens padrão da tag h1 e p */
  }
`;

export const BoxOutside = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 157px;
  height: 107px;
  background-color: #f4e6e7;
  border-radius: 5px;

  h1,
  p {
    margin: 0; /* Remover margens padrão da tag h1 e p */
  }
`;
