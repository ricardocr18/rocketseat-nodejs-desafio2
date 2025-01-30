import dayjs from "dayjs";
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
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useRefeicoes } from "../../util/context/RefeicoesContext";
import {
  createRefeicao,
  updateRefeicao,
  Refeicao,
} from "../../services/apiService";

export function SnackEdit() {
  const navigate = useNavigate();
  const location = useLocation();
  const refeicaoParaEditar = location.state as Refeicao | null;
  const { setRefeicoesAtualizadas } = useRefeicoes();

  // Estados do formulário
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [dia, setDia] = useState("");
  const [hora, setHora] = useState("");
  const [dentroDaDieta, setDentroDaDieta] = useState<boolean | null>(null);
  const [botaoClicado, setBotaoClicado] = useState<string | null>(null);
  const [errors, setErrors] = useState({
    nome: false,
    descricao: false,
    dia: false,
  });

  useEffect(() => {
    if (refeicaoParaEditar) {
      setNome(refeicaoParaEditar.nome);
      setDescricao(refeicaoParaEditar.descricao);
      setDia(refeicaoParaEditar.dia);
      setHora(refeicaoParaEditar.hora);
      setDentroDaDieta(refeicaoParaEditar.dentroDaDieta === "true");
      setBotaoClicado(
        refeicaoParaEditar.dentroDaDieta === "true" ? "dentro" : "fora"
      );
    }
  }, [refeicaoParaEditar]);

  const validarCampos = () => {
    const newErrors = {
      nome: nome.trim() === "",
      descricao: descricao.trim() === "",
      dia: dia.trim() === "",
    };
    setErrors(newErrors);
    return !Object.values(newErrors).some((error) => error);
  };

  const salvarRefeicao = async () => {
    if (!validarCampos()) return;

    const refeicaoAtualizada: Omit<Refeicao, "id"> = {
      // Remove 'id' da tipagem
      nome,
      descricao,
      dia,
      hora,
      dentroDaDieta: dentroDaDieta ? "true" : "false",
    };

    try {
      let data: Refeicao;
      if (refeicaoParaEditar?.id) {
        data = await updateRefeicao(refeicaoParaEditar.id, refeicaoAtualizada);
      } else {
        data = await createRefeicao(refeicaoAtualizada as Refeicao); // Conversão forçada
      }

      setRefeicoesAtualizadas((prev) =>
        refeicaoParaEditar?.id
          ? prev.map((r) =>
              "id" in r && r.id === refeicaoParaEditar.id ? data : r
            )
          : [...prev, data]
      );

      navigate(-2);
    } catch (error) {
      console.error("Erro ao salvar refeição:", error);
    }
  };

  return (
    <ModalContainer>
      <ModalHeader>
        <ArrowBackIcon className="Arrow" onClick={() => navigate(-1)} />
        <p>Editar refeição</p>
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
              onChange={(e) =>
                setDia(dayjs(e.target.value).format("DD/MM/YYYY"))
              }
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
              onClick={() => {
                setDentroDaDieta(true);
                setBotaoClicado("dentro");
              }}
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
              onClick={() => {
                setDentroDaDieta(false);
                setBotaoClicado("fora");
              }}
            >
              Não
            </Button>
          </div>
        </BoxButton>
      </BoxInput>

      <ButtonClick>
        <StyledButton size="small" onClick={salvarRefeicao}>
          Salvar alterações
        </StyledButton>
      </ButtonClick>
    </ModalContainer>
  );
}
