import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../services/api";

const Signup = () => {
  const schema = yup.object().shape({});

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => {
    api
      .post("/users", data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <h1>Crie sua conta</h1>
      <span>Rápido e grátis, vamos nessa!</span>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Nome</label>
        <input name="name" {...register("name")} />
        <label>Email</label>
        <input name="email" {...register("email")} />
        <label>Senha</label>
        <input name="password" {...register("password")} />
        <label>Confirmar senha</label>
        <input name="confirmPassword" {...register("confirmPassword")} />
        <label>Selecionar módulo</label>
        <input name="course_module" {...register("course_module")} />
        <label>Biografia</label>
        <input name="bio" {...register("bio")} />
        <label name="contact">Contato</label>
        <input name="contact" {...register("contact")} />
        <button type="submit">Cadastrar</button>
      </form>
    </>
  );
};

export default Signup;
