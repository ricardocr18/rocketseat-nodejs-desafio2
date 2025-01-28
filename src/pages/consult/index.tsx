import {
  BackImage,
  BoxStyle,
  BoxStyleModal,
  ButtonContainer,
  Content,
  Header,
  ModalContainer,
} from "./style";
import { useNavigate, useLocation } from "react-router-dom";
import { Modal } from "@mui/material";
import { useState } from "react";

export function Consult() {
  const navigate = useNavigate();
  const location = useLocation();
  const refeicao = location.state; // Acessa os dados passados
  const [isModalOpen, setIsModalOpen] = useState(false); // Estado para controlar a visibilidade do Modal

  console.log("refeição:", refeicao);

  const goToHome = () => {
    //navigate("/");
    navigate(-1);
  };

  const deletarRefeicao = async () => {
    try {
      const response = await fetch("http://localhost:3000/refeicao", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({_id: refeicao._id}),
      });
      if (response.ok) {
        const data = await response.json();
        console.log("Refeição deletada com sucesso:", data);
        navigate("/home");
      } else {
        console.error("Erro ao deletar refeição:", response.status);
      }
    } catch (error) {
      console.error("Erro ao deletar refeição:", error);
    }
  };

  return (
    <>
      <ModalContainer>
        <Header>
          <BackImage
            src="../../../../../public/Back.png"
            alt="Seta que volta para Home"
            onClick={goToHome}
          />
          <Content>
            <h1>Refeição</h1>
          </Content>
        </Header>
        <BoxStyle>
          {refeicao.nome ? (
            <div>
              <strong>{refeicao.nome}</strong>
              <div className="descricaoContainer">{refeicao.descricao}</div>
              <strong>Dia e hora: </strong>
              <div style={{ marginBottom: "10px" }}>{refeicao.dia}</div>
              <strong>Dentro da Dieta: </strong>
              <div>
                {refeicao.dentroDaDieta === "true"
                  ? "Estou dentro da dieta"
                  : "Estou fora da dieta"}
              </div>
            </div>
          ) : (
            <span>O Cadastro dessa refeição foi incompleto!</span>
          )}
        </BoxStyle>
        <ButtonContainer>
          <div
            className="button"
            onClick={() => {
              console.log("Clicou no botão");
            }}
          >
            Editar refeição
          </div>
          <div
            className="button"
            onClick={() => {
              setIsModalOpen(true); // Abre o Modal
              /* deletarRefeicao(); */
              console.log("Clicou no Editar Refeição");
            }}
          >
            Excluir refeição
          </div>
        </ButtonContainer>
        <Modal
          open={isModalOpen}
          onClose={() => setIsModalOpen(false)} // Fecha o Modal
        >
          <BoxStyleModal>
            <div style={{ marginTop: "10px" }}>
              <strong id="modal-modal-description">
                Deseja realmente excluir o registro da refeição?
              </strong>
            </div>
            <div className="bottonContainer">
              <button
                className="buttonCancelar"
                onClick={() => setIsModalOpen(false)}
              >
                Cancelar
              </button>
              <button
                className="buttonModalExcliir"
                onClick={() => {
                  deletarRefeicao()
                  setIsModalOpen(false);
                }}
              >
                Sim, excluir
              </button>
            </div>
          </BoxStyleModal>
        </Modal>
      </ModalContainer>
    </>
  );
}
