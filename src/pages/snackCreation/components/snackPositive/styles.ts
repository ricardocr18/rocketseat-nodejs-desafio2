import styled from "styled-components";

export const ContainerInt = styled.div`
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

  p {
  margin-left: 25px;
}
`;

export const StyleP = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin-top: 50px;
  margin-bottom: 30px;

  p{
    font-size: 30px;
    color: green;
    margin-left: -10px;
  }

  span{
    font-size: 15px;
    margin-top: -15px;
    margin-bottom: 10px;
  
  }
`;

export const StyledImage = styled.img`
  display: block;
  margin: 0 auto; /* Centraliza horizontalmente */
  margin-bottom: 80px;
`;
