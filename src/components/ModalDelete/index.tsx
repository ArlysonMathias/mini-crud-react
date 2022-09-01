import axios from "axios";
import toast from "react-hot-toast";
import { useUsers } from "../../context/Users";
import { User } from "../../interfaces";
import * as S from "./style";

interface DeleteUserProps {
  user: User;
  handleModalDelete: () => void;
}

const ModalDelete = ({ user, handleModalDelete }: DeleteUserProps) => {
  const { handleGetUsers } = useUsers();

  const deleteUser = () => {
    const token = localStorage.getItem("token");

    const headers = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    axios
      .delete(
        `https://nextfilms-api-production.up.railway.app/users/${user.id}`,
        headers
      )
      .then(() => {
        toast.success("Usuário excluído com sucesso");
        handleModalDelete();
        handleGetUsers();
      })
      .catch(() => toast.error("Usuário não encontrado."));
  };

  return (
    <S.ModalOverlay>
      <S.DeleteModal>
        <h2>Excluir o usuário {user.name}?</h2>
        <div>
          <button onClick={handleModalDelete}>Cancelar</button>
          <button onClick={deleteUser}>Excluir</button>
        </div>
      </S.DeleteModal>
    </S.ModalOverlay>
  );
};

export default ModalDelete;
