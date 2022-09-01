import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  align-items: center;
  width: 200px;
  height: 300px;
  border: 1px solid black;
  margin: 20px;
  flex-direction: column;

  h2 {
    font-weight: 700;
    font-size: 1.2rem;
  }

  button{
    height: 30px;
    width: 50px;
    background-color: aquamarine;
    margin: 10px;
    border: none;
    cursor: pointer;

    &:hover{
      transition: 0.2s ease-in-out;
      background-color: blue;
      color: #fff;
    }
    }
`;
