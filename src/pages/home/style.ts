import styled from "styled-components";
import { Button, Box } from "@mui/material";

export const ModalContainer = styled.div`
  margin-top: 75px;
  border: 1px solid black;
  border-radius: 10px;
  position: fixed;
  top: 40%;
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
`;

export const ModalHeader = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top-left-radius: 35px;
  border-top-right-radius: 25px;

  .Logo {
    margin-top: 2px;
    margin-left: 20px;
    cursor: pointer;
    transition: transform 0.3s;
    color: black;
  }

  p {
    margin-right: 135px;
  }
`;

export const StyledButton = styled(Button)`
  && {
    color: white; /* Altera a cor da fonte */
    background-color: black; /* Altera a cor de fundo do botão */
    width: 327px; /* Ajusta a largura do botão conforme necessário */
    &:hover {
      background-color: #b9bbbc; /* Altera a cor de fundo ao passar o mouse */
    }
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #e5f0db;
  margin-left: 15px;
  margin-right: 15px;
  border-radius: 5px;

  width: 327px;
  height: 102px;

  h1 {
    font-size: 30px;
    margin-top: -4px;
    margin-bottom: -5px;
  }
`;

export const HeaderNegativo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #f4e6e7;
  margin-bottom: 30px;
  width: 327px;
  height: 102px;
  margin-left: 15px;
  margin-right: 15px;
  border-radius: 5px;

  h1 {
    font-size: 30px;
    margin-top: -4px;
    margin-bottom: -5px;
  }
`;

export const OpenImage = styled.img`
  margin-left: auto;
  margin-right: 8px;
  margin-top: 8px;
  cursor: pointer;
  width: 30px;
  height: auto;
`;

export const ButtonClick = styled.div`
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Meals = styled.div`
  margin-left: 15px;
  margin-bottom: 10px;
  // Aqui fazemos a ""BARRA LATERAL ESQUERDA" o estilo da div que contém as refeições
  /* max-height: 500px;
  overflow-y: auto; */

  /* Estilo para as datas */
  .data {
    color: #ff5733; /* Cor desejada para as datas */
    font-family: "Arial", sans-serif; /* Fonte desejada para as datas */
    font-size: 16px; /* Tamanho desejado para as datas */
    font-weight: bold; /* Peso da fonte para as datas */
    margin-bottom: 3px; /* Espaçamento abaixo das datas */
    margin-top: 10px;
  }

  /* Estilo para as refeições */
  .refeicao {
    font-size: 14px; /* Tamanho desejado para as refeições */
    margin-bottom: -13px; /* Espaçamento abaixo das refeições */
  }
`;

export const MealsContainer = styled.div`
  height: 380px; // Ajuste este valor conforme necessário
  min-height: 100px; // Ajuste este valor conforme necessário
  max-height: 500vh; // Ajuste este valor conforme necessário
  overflow-y: auto; // Adicione uma barra de rolagem se o conteúdo exceder a altura máxima
`;

export const StyledBox = styled(Box)`
  cursor: pointer; /* Altera o cursor ao passar o mouse */
  margin-top: 5px;
  height: 35px;
  width: 313px;
  align-items: center;
  padding: 2px;
  border: 1px solid grey;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  padding: 0 5px;
`;
