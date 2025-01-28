import styled from "styled-components";
import { Box } from "@mui/material";

export const ModalContainer = styled.div`
  margin-top: 100px;
  height: 650px;
  width: 340px;
  border: 1px solid black;
  border-radius: 10px;
  position: fixed;
  top: 36%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  z-index: 1;
  display: flex;
  flex-direction: column; /* Adicionado para organizar o conteúdo verticalmente */
  justify-content: space-between; /* Mantém o cabeçalho no topo e o ButtonContainer no fundo */

  font-family: "Roboto", sans-serif;

  .descricaoContainer {
    word-wrap: break-word;
    margin-bottom: 10px;
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

export const Header = styled.div`
  display: flex;
  align-items: flex-start; /* Altera o alinhamento vertical para o início */
  justify-content: space-between; /* Adiciona espaço entre os itens */
  flex-direction: column;
  background-color: #e5f0db;
  margin-bottom: -240px;

  width: 100%;
  height: 102px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;

  h1 {
    font-size: 30px;
    margin-top: -1px;
  }
`;

export const Content = styled.div`
  margin: auto;
  flex: 1;
  text-align: center; // Adiciona o alinhamento central para o texto
`;

export const BoxStyle = styled.div`
  margin-left: 10px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px; /* Adjusted to 20px from the bottom */
  flex-direction: column;
  align-self: center; /* Centers the buttons horizontally */

  .button {
    cursor: pointer; /* Altera o cursor ao passar o mouse */
    color: white; /* Altera a cor da fonte */
    background-color: black; /* Altera a cor de fundo do botão */
    width: 300px; /* Ajusta a largura do botão conforme necessário */
    height: 40px;
    margin-bottom: 10px;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
      background-color: green; /* Altera a cor de fundo ao passar o mouse */
    }
  }
`;

export const BoxStyleModal = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 250px;
  height: 100px;
  background-color: white; /* Ajuste conforme necessário */
  border: 2px solid #000;
  box-shadow: 24px; /* Ajuste conforme necessário, pode precisar de mais detalhes */
  padding: 4px; /* Se 'p' se referir ao padding, ajuste conforme necessário */

  .bottonContainer {
    margin-top: 15px;
    display: "flex";
    justify-content: "center";     
  }

  .buttonCancelar {
    cursor: pointer; /* Altera o cursor ao passar o mouse */
    color: white; /* Altera a cor da fonte */
    background-color: black; /* Altera a cor de fundo do botão */
    width: 100px; /* Ajusta a largura do botão conforme necessário */
    height: 30px;
    border-radius: 5px;
    margin-right: 10px;

    &:hover {
      background-color: #f7f7f7; /* Altera a cor de fundo ao passar o mouse */
      color: black;
    }
  }

  .buttonModalExcliir {
    cursor: pointer; /* Altera o cursor ao passar o mouse */
    color: white; /* Altera a cor da fonte */
    background-color: black; /* Altera a cor de fundo do botão */
    width: 100px; /* Ajusta a largura do botão conforme necessário */
    height: 30px;
    border-radius: 5px;

    &:hover {
      background-color: green; /* Altera a cor de fundo ao passar o mouse */
    }
  }
`;
