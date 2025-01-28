import styled from "styled-components";
import { Button } from "@mui/material";

export const ModalContainer = styled.div`
  margin-top: 75px;
  height: 650px;
  width: 350px;
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
  display: flex;
  align-items: center; /* Altera o alinhamento vertical para o início */
  justify-content: center; /* Adiciona espaço entre os itens */
  flex-direction: column;
  background-color: #e5f0db; 
  width: 100%;
  height: 102px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;

  .Arrow {
    z-index: 1;
  margin-top: -38px;
  cursor: pointer;
  width: 30px;
  height: auto;
  margin-left: -310px;
  }

  p {
    
    font-size: 25px;
    margin-top: 7px;
    margin-bottom: -13px;
  }
`;

export const BoxInput = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 30px;
  padding-left: 25px; /* Adiciona espaçamento à esquerda */
  & > .MuiTextField-root {
    height: 30%;
  }

  .fullWidth {
    margin-top: 3px;
    width: 90%; /* Define a largura como 100% apenas para os campos com essa classe */
    margin-bottom: 15px; /* Adiciona um espaçamento entre os elementos */
  }
`;

export const BoxData = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -10px;

  .configWidth {
    margin-top: 5px;
    width: 120%;
  }

  p {
    margin-left: 3px;
    margin-bottom: 3px;
  }

  div:not(:last-child) {
    margin-right: 25px;
  }
`;

export const BoxButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;

  div:nth-child(2) {
    /* Seleciona o segundo div dentro de BoxButton */
    margin-top: 28px; /* Aplica uma margem inferior específica */
    margin-left: 10px;
  }

  .buttonWidth {
    width: 90%; /* Ajusta o width dos botões para preencher 100% do container */
    height: 35px;
    background-color: #eff0f0;
    color: black; 

    &:hover {
      background-color: #CBE4B4; /* Altera a cor de fundo ao passar o mouse */
    }
  }

  .buttonDoisWidth {
    margin-top: 10px;
    width: 200%; /* Ajusta o width dos botões para preencher 100% do container */
    height: 36px;
    background-color: #eff0f0;
    color: black; 

    &:hover {
      background-color: #F3BABD; /* Altera a cor de fundo ao passar o mouse */
    }
  }

  p {
    margin-left: 5px;
    margin-bottom: 5px;
  }
`;

export const ButtonClick = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 45px; /* Adiciona a distância de 15px do elemento acima */
  margin-left: -12px;
`;

export const StyledButton = styled(Button)`
  && {
    color: white; /* Altera a cor da fonte */
    background-color: black; /* Altera a cor de fundo do botão */
    width: 81%; /* Ajusta a largura do botão conforme necessário */
    &:hover {
      background-color: #BF3B44; /* Altera a cor de fundo ao passar o mouse */
    }
  }
`;
