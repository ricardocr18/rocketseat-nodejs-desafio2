//import { v4 as uuidv4 } from "uuid";
import dayjs from "dayjs"; // Biblioteca para manipulação de datas
import "dayjs/locale/pt-br";
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
  const [botaoClicado, setBotaoClicado] = useState<string | null>(null);

  /* const formatarDataParaBrasileiro = (data: string) => {
    return dayjs(data).format("DD/MM/YYYY"); // Converte para o formato desejado
  }; */

  // Estados de erro
  const [errors, setErrors] = useState({
    nome: false,
    descricao: false,
    dia: false,
  });

  const marcarDentroDaDieta = () => {
    setDentroDaDieta(true); // Define dentroDaDieta como true ao clicar no botão "Sim"
    setBotaoClicado("dentro");
  };

  const marcarForaDaDieta = () => {
    setDentroDaDieta(false); // Define dentroDaDieta como false ao clicar no botão "Não"
    setBotaoClicado("fora");
  };

  const goToHome = () => {
    navigate("/Home");
  };  

  const validarCampos = () => {
    const newErrors = {
      nome: nome.trim() === "",
      descricao: descricao.trim() === "",
      dia: dia.trim() === "",
    };
    setErrors(newErrors);
    return !Object.values(newErrors).some((error) => error); // Retorna true se todos os campos estão válidos
  };

  const cadastrarRefeição = async () => {
    if (!validarCampos()) {
      return;
    }
  
    const dataFormatadaParaEnvio = dayjs(dia).format("DD/MM/YYYY");
  
    const novaRefeicao = {
      nome,
      descricao,
      dia: dataFormatadaParaEnvio, // Envia a data no formato correto
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
            error={errors.nome}
            helperText={errors.nome ? "O campo Nome é obrigatório." : ""}
          />
          Descrição
          <TextField
            className="fullWidth"
            multiline
            rows={4}
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
            inputProps={{ maxLength: 200 }}
            error={errors.descricao}
            helperText={
              errors.descricao ? "O campo Descrição é obrigatório." : ""
            }
          />
          <BoxData>
            <div>
              <p>Data</p>
              <DatePicker
                value={dia}
                onChange={(e) => {
                  const dataISO = e.target.value; // O formato esperado é "YYYY-MM-DD"
                  setDia(dataISO); // Armazena no estado no formato correto
                }}
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
          {errors.dia && (
            <p style={{ color: "red", fontSize: "0.75rem" }}>
              O campo Data é obrigatório.
            </p>
          )}
          <BoxButton>
            <div>
              <p>Está dentro da dieta?</p>
              <Button
                className="buttonWidth"
                size="small"
                style={{
                  backgroundColor:
                    botaoClicado === "dentro" ? "#CBE4B4" : "#eff0f0",
                }}
                onClick={marcarDentroDaDieta}
              >
                Sim
              </Button>
            </div>
            <div>
              <Button
                className="buttonDoisWidth"
                size="small"
                style={{
                  backgroundColor:
                    botaoClicado === "fora" ? "#F3BABD" : "#eff0f0",
                }}
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
