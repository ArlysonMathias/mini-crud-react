import { useState } from "react";
import { User } from "../../interfaces";
import ModalDelete from "../ModalDelete";
import ModalEdit from "../ModalEdit";
import * as S from "./style";

interface UserProps {
  user: User;
}

const Card = ({ user }: UserProps) => {
  const [openModalDelete, setOpenModalDelete] = useState<boolean>(false);
  const [openModalEdit, setOpenModalEdit] = useState<boolean>(false);

  // abrir o modal de delete
  const handleModalDelete = () => {
    setOpenModalDelete(!openModalDelete);
  };

  // abrir o modal de edição
  const handleModalEdit = () => {
    setOpenModalEdit(!openModalEdit);
  };


  return (
    <S.Content>
      <h2>{user.name}</h2>
      <h2>{user.email}</h2>
      <div>
        <button onClick={handleModalEdit}>Editar</button>
        {openModalEdit ? (
          <ModalEdit user={user} handleModalEdit={handleModalEdit} />
        ) : null}
        <button onClick={handleModalDelete}>Excluir</button>
        {openModalDelete ? (
          <ModalDelete user={user} handleModalDelete={handleModalDelete} />
        ) : null}
      </div>
    </S.Content>
  );
};

export default Card;
