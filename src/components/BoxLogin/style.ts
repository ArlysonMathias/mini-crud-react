import styled from "styled-components";

export const BoxLogin = styled.div`
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

  h2 {
    color: #fff;
  }

  p {
    color: #fcfcfc;
    text-align: center;
    font-size: 1.2rem;
  }
`;

export const BoxLoginForm = styled.form`
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

export const CustomizedButton = styled.button`
  background-color: transparent;
  cursor: pointer;
  border: none;
  font-size: 1rem;
  color: #fff;

  &:hover {
    transition: 0.2s ease-in-out;
    transform: scale(1.1);
    color: red;
  }
`;

export const Button = styled.button`
  border: 1px solid #fcfcfc;
  border-radius: 8px;
  height: 36px;
  width: 80%;
  background: #5d737e;
  color: #fcfcfc;
  padding: 5px;
  font-size: 1.2rem; ;
  cursor: pointer;

  &:hover{
    background-color: #000;
    transition: 0.2s ease-in-out;
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