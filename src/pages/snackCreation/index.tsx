import { v4 as uuidv4 } from "uuid";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import TextField from "@mui/material/TextField";
import {
  ModalContainer,
  ModalHeader,
  BoxInput,
  BoxData,
  BoxButton,
  ButtonClick,
  StyledButton,
} from "./style";
import { Button } from "@mui/material";
import { DatePicker } from "../../components/DatePicker";
import { useState } from "react";
import { SnackPositive } from "../snackCreation/components/snackPositive"; // Importe o componente SnackPositive
import { SnackNegative } from "./components/snackNegative";
import { useNavigate } from "react-router-dom";
import { useRefeicoes } from "../../util/context/RefeicoesContext";
import { createRefeicao } from "../../services/apiService";

export function SnackCreation() {
  const navigate = useNavigate();
  const { setRefeicoesAtualizadas } = useRefeicoes(); // Novo estado global para atualizar as refeições
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [dia, setDia] = useState("");
  const [hora, setHora] = useState("");
  const [dentroDaDieta, setDentroDaDieta] = useState<boolean | null>(null);
  const [isPositiveSnack, setIsPositiveSnack] = useState<boolean | null>(null); // Novo estado para controlar a exibição do SnackPositive

  const marcarDentroDaDieta = () => {
    setDentroDaDieta(true); // Define dentroDaDieta como true ao clicar no botão "Sim"
  };

  const marcarForaDaDieta = () => {
    setDentroDaDieta(false); // Define dentroDaDieta como false ao clicar no botão "Não"
  };

  const goToHome = () => {
    navigate("/Home");
  };

  const cadastrarRefeição = async () => {
    const novaRefeicao = {
      id: uuidv4(), // Gera um UUID
      nome,
      descricao,
      dia,
      hora,
      dentroDaDieta: dentroDaDieta ? "true" : "false",
    };

    try {
      const data = await createRefeicao(novaRefeicao);
      setRefeicoesAtualizadas((prev) => [...prev, data]); // Atualiza o estado global com a nova refeição
      setIsPositiveSnack(true);
      limparCampos();
    } catch (error) {
      console.error("Erro ao cadastrar refeição:", error);
      setIsPositiveSnack(false);
    }
  };

  const limparCampos = () => {
    setNome("");
    setDescricao("");
    setDia("");
    setHora("");
    setDentroDaDieta(null);
  };

  return (
    <div
      style={{
        border: "1px solid red",
      }}
    >
      <ModalContainer>
        <ModalHeader>
          <ArrowBackIcon className="Arrow" onClick={goToHome} />
          <p>Nova refeição</p>
        </ModalHeader>

        <BoxInput>
          Nome
          <TextField
            className="fullWidth"
            variant="outlined"
            size="small"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            inputProps={{ maxLength: 70 }}
          />
          Descrição
          <TextField
            className="fullWidth"
            multiline
            rows={4}
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
            inputProps={{ maxLength: 200 }}
          />
          <BoxData>
            <div>
              <p>Data</p>
              <DatePicker
                value={dia}
                onChange={(e) => setDia(e.target.value)}
                placeholder="Data"
              />
            </div>
            <div>
              <p>Hora</p>
              <TextField
                className="configWidth"
                type="time"
                size="small"
                value={hora}
                onChange={(e) => setHora(e.target.value)}
              />
            </div>
          </BoxData>
          <BoxButton>
            <div>
              <p>Está dentro da dieta?</p>
              <Button
                className="buttonWidth"
                size="small"
                onClick={marcarDentroDaDieta}
              >
                Sim
              </Button>
            </div>
            <div>
              <Button
                className="buttonDoisWidth"
                size="small"
                onClick={marcarForaDaDieta}
              >
                Não
              </Button>
            </div>
          </BoxButton>
        </BoxInput>
        <ButtonClick>
          <StyledButton
            size="small"
            onClick={async () => {
              await cadastrarRefeição();
            }}
          >
            Cadastrar refeição
          </StyledButton>
        </ButtonClick>
      </ModalContainer>
      {isPositiveSnack !== null &&
        (isPositiveSnack ? <SnackPositive /> : <SnackNegative />)}
    </div>
  );
}
