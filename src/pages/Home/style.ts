import styled from "styled-components";


export const Home = styled.section`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  color: #000000;

  div{
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 720px;
    flex-wrap: wrap;
  }
`;

export const Header = styled.header`
    height: 10vh;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    background-color: aquamarine;


    button {
    display: flex;
    background-color: transparent;
    text-decoration: none;
    border: none;
    color: #000;
    font-weight: 600;
    font-size: 1.4rem;
    margin: 30px 10px;
    transition: 0.3s ease-in-out;
    cursor: pointer;
    :hover {
      color: #df2935;
    }
  }
`;