import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link, Redirect, useHistory } from "react-router-dom";
import api from "../../services/api";

const Login = () => {
  const schema = yup.object().shape({
    email: yup.string().required("Campo obrigatório"),
    password: yup
      .string()
      .min(6, "Mínimo 6 dígitos")
      .required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => {
    api
      .post("/sessions", data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Login</h1>
      <input
        name="email"
        {...register("email")}
        placeholder="Email"
        {...errors.email?.message}
      ></input>
      <input
        name="password"
        {...register("password")}
        placeholder="Senha"
        type="password"
        {...errors.password?.message}
      ></input>
      <button type="submit">Entrar</button>
      <span>Ainda não possui uma conta?</span>
      <button>Cadastre-se</button>
    </form>
  );
};

export default Login;
