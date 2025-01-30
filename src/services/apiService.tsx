
const API_URL = import.meta.env.VITE_API_URL as string;

export interface Refeicao {
  id?: string; // Opcional, pois no caso de criação, pode ser gerado automaticamente.
  nome: string;
  descricao: string;
  dia: string;
  hora: string;
  dentroDaDieta: string; // Use o mesmo nome do campo no DynamoDB.
}

// Fetch all refeições
export const fetchRefeicoes = async (): Promise<Refeicao[]> => {
  const response = await fetch(`${API_URL}`, { method: "GET" });
  if (!response.ok) throw new Error("Erro ao buscar as refeições");
  return response.json();
};

// Fetch a single refeição by ID
export const fetchRefeicaoById = async (id: string): Promise<Refeicao> => {
  const response = await fetch(`${API_URL}/${id}`, { method: "GET" });
  if (!response.ok) throw new Error("Erro ao buscar a refeição");
  return response.json();
};

// Create a new refeição
export const createRefeicao = async (refeicao: Refeicao): Promise<Refeicao> => {
  const response = await fetch(`${API_URL}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(refeicao),
  });
  if (!response.ok) throw new Error("Erro ao criar a refeição");
  return response.json();
};

// Update a refeição by ID
export const updateRefeicao = async (
  id: string,
  updatedRefeicao: Partial<Refeicao> // Permitir atualização parcial
): Promise<Refeicao> => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updatedRefeicao),
  });
  if (!response.ok) throw new Error("Erro ao atualizar a refeição");
  return response.json();
};

// Delete a refeição by ID
export const deleteRefeicao = async (
  id: string
): Promise<{ message: string }> => {
  const response = await fetch(`${API_URL}/${id}`, { method: "DELETE" });
  if (!response.ok) throw new Error("Erro ao deletar a refeição");
  return response.json();
};
