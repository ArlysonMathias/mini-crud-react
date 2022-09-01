import { User } from "../../interfaces";
import * as S from "./style";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import toast from "react-hot-toast";
import { useUsers } from "../../context/Users";

interface EditUserProps {
  user: User;
  handleModalEdit: () => void;
}

interface EditUserData {
  name?: string;
  email?: string;
  password?: string;
}

const updateUserSchema = yup.object().shape({
  name: yup.string().required("Nome do usuário obrigatório"),

  email: yup
    .string()
    .email("Email inválido")
    .required("Descrição obrigatória."),

  password: yup
    .string()
    .min(8, "Sua senha deve ter no mínimo 8 caracteres")
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/,
      "Sua senha deve ter no mímino 1 caracter especial, um número e uma letra maiúscula"
    )
    .required("Senha obrigatória"),
});

const ModalEdit = ({ user, handleModalEdit }: EditUserProps) => {
  const token = localStorage.getItem("token");
  const { handleGetUsers } = useUsers();

  const headers = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EditUserData>({ resolver: yupResolver(updateUserSchema) });

  const handleUpdateUser = (data: EditUserData) => {
    axios
      .patch(
        `https://nextfilms-api-production.up.railway.app/users/${user.id}`,
        data,
        headers
      )
      .then(() => {
        toast.success("Usuário atualizado com sucesso");
        handleGetUsers();
        handleModalEdit();
      })
      .catch(() => toast.error("Erro ao editar usuário."));
  };

  return (
    <S.ModalOverlay>
      <S.BoxEditContent>
        <S.BoxEditForm onSubmit={handleSubmit(handleUpdateUser)}>
          <input defaultValue={user.name} type="text" {...register("name")} />
          <input defaultValue={user.email} type="text" {...register("email")} />
          <input
            defaultValue={user.password}
            type="password"
            {...register("password")}
          />
          <S.ErrorMessage>
            {errors.name?.message ||
              errors.email?.message ||
              errors.password?.message}
          </S.ErrorMessage>
          <div>
            <button onClick={handleModalEdit}>Cancelar</button>
            <button role={"button"} type="submit">Editar</button>
          </div>
        </S.BoxEditForm>
      </S.BoxEditContent>
    </S.ModalOverlay>
  );
};

export default ModalEdit;
