import { createContext, useContext, useState, ReactNode } from "react";

// Definição da interface para os dados de uma refeição
interface Refeicao {
  nome: string;
  descricao: string;
  dia: string;
  hora: string;
  dentroDaDieta: string;
}
interface RefeicoesContextData {
  countSim: number
  setCountSim: React.Dispatch<React.SetStateAction<number>>;
  countNao: number;
  setCountNao: React.Dispatch<React.SetStateAction<number>>;
  setConsecutiveSimCount: (value: number) => void;
  consecutiveSimCount: number;
  refeicoesDentroDaDieta: string;
  setRefeicoesDentroDaDieta: React.Dispatch<React.SetStateAction<string>>;
  totalRefeicoesRegistradas: number;  
  setTotalRefeicoesRegistradas: React.Dispatch<React.SetStateAction<number>>;
  refeicoesAtualizadas: Refeicao[]; // Estado para armazenar as refeições
  setRefeicoesAtualizadas: React.Dispatch<React.SetStateAction<Refeicao[]>>; // Função para atualizar refeições
}

const RefeicoesContextDefaultValues = createContext<RefeicoesContextData>(
  {} as RefeicoesContextData
);

export function RefeicoesContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [countSim, setCountSim] = useState(0);
  const [countNao, setCountNao] = useState(0);
  const [consecutiveSimCount, setConsecutiveSimCount] = useState(0);
  const [refeicoesDentroDaDieta, setRefeicoesDentroDaDieta] = useState('');
  const [totalRefeicoesRegistradas, setTotalRefeicoesRegistradas] = useState(0);
  const [refeicoesAtualizadas, setRefeicoesAtualizadas] = useState<Refeicao[]>(
    []
  );

  return (
    <RefeicoesContextDefaultValues.Provider
      value={{
        countSim,
        setCountSim,
        countNao,
        setCountNao,        
        consecutiveSimCount,
        setConsecutiveSimCount,
        refeicoesDentroDaDieta,
        setRefeicoesDentroDaDieta,
        totalRefeicoesRegistradas,        
        setTotalRefeicoesRegistradas,
        refeicoesAtualizadas, // Passa o estado de refeições ao contexto
        setRefeicoesAtualizadas, // Passa a função de atualização ao contexto
      }}
    >
      {children}
    </RefeicoesContextDefaultValues.Provider>
  );
}

export function useRefeicoes() {
  return useContext(RefeicoesContextDefaultValues);
}
