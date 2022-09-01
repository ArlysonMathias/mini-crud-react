import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.8);
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 100vw;
  min-height: 100vh;
`;

export const DeleteModal = styled.div`
    display: flex;
    flex-direction: column;
    width: 90vw;
    height: 30vh;
    border-radius: 8px;
    background-color:  #fff;
    padding: 2rem;
    text-align: center;
    gap: 3rem;
    color: #000;

    div {
      display: flex;
      justify-content: space-between;
      width: 100%;
      font-size: 1.2rem;
    }
`;