import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link, Redirect, useHistory } from "react-router-dom";
import api from "../../services/api";

const Login = ({ autentication, setAutentication }) => {
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

  const history = useHistory();

  const onSubmit = (data) => {
    api
      .post("/sessions", data)
      .then((res) => {
        const { token, user } = res.data;
        localStorage.setItem("@KenzieHub:token", JSON.stringify(token));
        localStorage.setItem("@KenzieHub:user", JSON.stringify(user));
        console.log(res);
        setAutentication(true);
        return history.push("/dashboard");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  if (autentication) {
    return <Redirect to="/dashboard" />;
  }


  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>Login</h1>
      <input
        name="email"
        {...register("email")}
        placeholder="Email"
        {...errors.email?.message}
      />
      <input
        name="password"
        {...register("password")}
        placeholder="Senha"
        type="password"
        {...errors.password?.message}
      />
      <button type="submit">Entrar</button>
      <span>Ainda não possui uma conta?</span>
      <button>
        {" "}
        <Link to="/signup">Cadastre-se</Link>
      </button>
    </form>
  );
};

export default Login;
