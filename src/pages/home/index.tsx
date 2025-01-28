import { useNavigate } from "react-router-dom";
import {
  ModalContainer,
  MealsContainer,
  ButtonClick,
  Header,
  StyledButton,
  Meals,
  ModalHeader,
  OpenImage,
  
  StyledBox,
} from "./style";
import { useRefeicoes } from "../../util/context/RefeicoesContext";
import { useEffect, useState } from "react";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { fetchRefeicoes } from "../../services/apiService";

interface Refeicao {
  nome: string;
  descricao: string;
  dia: string;
  hora: string;
  dentroDaDieta: string;
}

export function Home() {
  const navigate = useNavigate();
  const {
    setRefeicoesDentroDaDieta,
    setCountSim,
    setCountNao,
    setConsecutiveSimCount,
    setTotalRefeicoesRegistradas,
  } = useRefeicoes();

  const [refeicoes, setRefeicoes] = useState<Refeicao[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const goToSnackCreation = () => {
    navigate("/snackCreation");
  };

  const goToMealResults = () => {
    navigate("/mealResults");
  };

  const gotoConsult = (refeicao: Refeicao) => {
    navigate("/consult", { state: refeicao });
  };

  const obterRefeicoesDoServidor = async () => {
    try {
      setLoading(true);
      const data = await fetchRefeicoes();
      setRefeicoes(data);
      setError(null);
    } catch (err) {
      console.error("Erro ao obter refeições:", err);
      setError("Erro ao carregar as refeições.");
    } finally {
      setLoading(false);
    }
  };

  const refeicoesDentroDaDieta = () => {
    const totalRefeicoes = refeicoes.length;
    const totalDentroDaDieta = refeicoes.reduce(
      (count, item) => (item.dentroDaDieta === "true" ? count + 1 : count),
      0
    );
    const porcentagemDentroDaDieta =
      (totalDentroDaDieta / totalRefeicoes) * 100;
    return porcentagemDentroDaDieta.toFixed(2);
  };

  const agruparRefeicoesPorData = (
    refeicoes: Refeicao[]
  ): Record<string, Refeicao[]> => {
    return refeicoes.reduce(
      (agrupado: Record<string, Refeicao[]>, refeicao: Refeicao) => {
        const { dia } = refeicao;

        if (!agrupado[dia]) {
          agrupado[dia] = [];
        }
        agrupado[dia].push(refeicao);
        return agrupado;
      },
      {}
    );
  };

  const refeicoesAgrupadas = agruparRefeicoesPorData(refeicoes);

  useEffect(() => {
    obterRefeicoesDoServidor();
  }, []);

  useEffect(() => {
    if (refeicoes.length > 0) {
      const countSim = refeicoes.filter(
        (item) => item.dentroDaDieta === "true"
      ).length;

      const countNao = refeicoes.filter(
        (item) => item.dentroDaDieta === "false"
      ).length;

      const result = refeicoesDentroDaDieta();
      const consecutiveSimCount = refeicoes.reduce(
        (acc, curr) => {
          if (curr.dentroDaDieta === "true") {
            acc.current++;
            acc.max = Math.max(acc.max, acc.current);
          } else {
            acc.current = 0;
          }
          return acc;
        },
        { current: 0, max: 0 }
      ).max;

      setRefeicoesDentroDaDieta(result);
      setCountSim(countSim);
      setCountNao(countNao);
      setConsecutiveSimCount(consecutiveSimCount);
      setTotalRefeicoesRegistradas(refeicoes.length);
    }
  }, [refeicoes]);

  return (
    <div
      style={{
        border: "1px solid red",
      }}
    >
      <ModalContainer>
        <ModalHeader>
          <div className="Logo">
            <img
              src="../../../../../public/Logo.png"
              alt="imagem da logomarca"
            />
          </div>
        </ModalHeader>
        <Header>
          <OpenImage
            src="../../../../../public/Open.png"
            alt="Seta que abre o resultados das refeições"
            onClick={goToMealResults}
          />
          <h1>{refeicoesDentroDaDieta()}%</h1>
          <p>das refeições dentro da dieta</p>
        </Header>

        <p className="pagehome">Refeições</p>

        <ButtonClick>
          <StyledButton
            onClick={() => {
              goToSnackCreation();
            }}
          >
            + Nova refeição
          </StyledButton>
        </ButtonClick>
        <MealsContainer>
          {loading ? (
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              minHeight="50vh"
            >
              <CircularProgress />
            </Box>
          ) : error ? (
            <p>{error}</p>
          ) : refeicoes.length === 0 ? (
            <p>Não possui dados cadastrados</p>
          ) : (
            <Meals>
              {Object.entries(refeicoesAgrupadas).map(
                ([data, refeicoesDoDia]) => (
                  <div key={data}>
                    <p className="data">{data}</p>
                    {refeicoesDoDia.map((refeicao) => (
                      <StyledBox
                        key={refeicao.nome}
                        onClick={() => gotoConsult(refeicao)}
                      >
                        <span>
                          {refeicao.hora} | {refeicao.nome}
                        </span>
                        {refeicao.dentroDaDieta === "true" ? (
                          <div>
                            <FiberManualRecordIcon style={{ color: "green" }} />
                          </div>
                        ) : (
                          <FiberManualRecordIcon style={{ color: "red" }} />
                        )}
                      </StyledBox>
                    ))}
                  </div>
                )
              )}
            </Meals>
          )}
        </MealsContainer>
      </ModalContainer>
    </div>
  );
}
