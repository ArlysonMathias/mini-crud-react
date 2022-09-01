import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.8);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
`;

export const BoxEditContent = styled.div`
  position: absolute;
  width: 345px;
  height: 420px;
  padding: 20px 20px 35px 20px;
  margin: 20px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: #000000cc;
`;

export const BoxEditForm = styled.form`
  margin-top: 100px;
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 15px;
  padding: 14px;
  box-sizing: border-box;
  input {
    border: 1px solid #fcfcfc;
    border-radius: 8px;
    height: 36px;
    background: #5d737e;
    color: #fcfcfc;
    padding: 5px;
    font-size: 1.2rem;
  }
  input::placeholder {
    color: #fcfcfc;
    padding-left: 10px;
  }
`;


export const ErrorMessage = styled.p`
  color: red;
  align-self: center;
  font-size: small;
  height: 2rem;
  padding: 0 2rem;
  text-align: center;
`;