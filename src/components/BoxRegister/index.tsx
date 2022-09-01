import { useNavigate } from "react-router-dom";
import * as S from "./style";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import toast from "react-hot-toast";

interface RegisterData {
  email: string;
  name: string;
  password: string;
}

const registerSchema = yup.object().shape({
  name: yup.string().required("Nome obrigatório"),

  email: yup
    .string()
    .email("Formato de e-mail inválido")
    .required("E-mail obrigatório"),

  password: yup
    .string()
    .min(8, "Sua senha deve ter no mínimo 8 caracteres")
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/,
      "Sua senha deve ter no mímino 1 caracter especial, um número e uma letra maiúscula"
    )
    .required("Senha obrigatória"),
});

const BoxRegister = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterData>({ resolver: yupResolver(registerSchema) });

  const handleCreateUser = (data: RegisterData) => {
    axios
      .post("https://nextfilms-api-production.up.railway.app/users", data)
      .then(() => {
        toast.success("Usuário criado com sucesso."), navigate("/login");
      });
  };

  return (
    <S.BoxRegister>
      <S.BoxRegisterForm onSubmit={handleSubmit(handleCreateUser)}>
        <h2>Faça seu Cadastro</h2>
        <input placeholder="nome" {...register("name")} />
        <input placeholder="email" {...register("email")} />
        <input placeholder="senha" {...register("password")} />
        <S.ErrorMessage>
          {errors.name?.message ||
            errors.email?.message ||
            errors.password?.message}
        </S.ErrorMessage>
        <S.Button role={"button"} type="submit">Criar Conta</S.Button>
        <p>
          Já possui conta?{" "}
          <S.CustomizedButton onClick={() => navigate("/login")}>
            Faça o login
          </S.CustomizedButton>{" "}
        </p>
      </S.BoxRegisterForm>
    </S.BoxRegister>
  );
};

export default BoxRegister;
