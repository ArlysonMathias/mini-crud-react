import { useNavigate } from "react-router-dom";
import * as S from "./style";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { useAuth } from "../../context/auth";
import toast from "react-hot-toast";

interface LoginData {
  email: string;
  password: string;
}

const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email("Formato de e-mail inválido")
    .required("Campo e-mail, obrigatório"),

  password: yup
    .string()
    .min(8, "Sua senha deve ter no mínimo 8 caracteres")
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/,
      "Sua senha deve ter no mímino 1 caracter especial, um número e uma letra maiúscula"
    )
    .required("Campo obrigatório"),
});

const BoxLogin = () => {
    const { login } = useAuth()
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>({ resolver: yupResolver(loginSchema) });

  const handleLogin = (data: LoginData) => {
    axios
      .post('https://nextfilms-api-production.up.railway.app/auth/login', data)
      .then((res) => {
        login({ token: res.data.token, user: res.data.user });
        navigate("/")
      })
      .catch(() => {
        toast.error("Usuário ou senha inválidos");
      });
  };

  return (
    <S.BoxLogin>
      <S.BoxLoginForm onSubmit={handleSubmit(handleLogin)}>
        <h2>Faça seu Login</h2>
        <input placeholder="email" {...register("email")}/>
        <input placeholder="senha" type={'password'} {...register("password")}/>
        <S.ErrorMessage>{errors.email?.message || errors.password?.message}</S.ErrorMessage>
        <S.Button role="button" type="submit">Entrar</S.Button>
        <p>
          Não possui conta?{" "}
          <S.CustomizedButton onClick={() => navigate("/register")}>
            Faça o cadastro
          </S.CustomizedButton>{" "}
        </p>
      </S.BoxLoginForm>
    </S.BoxLogin>
  );
};

export default BoxLogin;

