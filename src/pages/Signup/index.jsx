import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Redirect, useHistory } from "react-router-dom";
import api from "../../services/api";
import toast from "react-hot-toast";
import { FiUser, FiMail, FiLock, FiAtSign, FiSmile } from "react-icons/fi";
import { Container, Content, Top } from "./styles";
import Logo from "../../assets/logo.svg";
import Input from "../../components/Input";
import Button from "../../components/Button";
import ButtonLogout from "../../components/ButtonLogout";
import Select from "../../components/Select";

const Signup = ({ autentication }) => {
  const schema = yup.object().shape({
    name: yup.string().required("Campo obrigatório"),
    email: yup.string().required("Campo obrigatório"),
    password: yup
      .string()
      .required("Campo obrigatório")
      .min(6, "Mínimo 6 dígitos"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "Senhas diferentes")
      .required("Campo obrigatório"),
    course_module: yup.string().required("Campo obrigatório"),
    bio: yup.string().required("Campo obrigatório"),
    contact: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const history = useHistory();

  const onSubmit = (data) => {
    api
      .post("/users", data)
      .then(() => {
        toast.success("Conta criada com sucesso!");
        return history.push("/");
      })
      .catch(() => {
        toast.error("Ops! Algo deu errado");
      });
  };

  const selects = [
    "Primeiro módulo",
    "Segundo módulo",
    "Terceiro módulo",
    "Quarto módulo",
  ];

  if (autentication) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Container>
      <Top>
        <img src={Logo} alt="logo" />
        <ButtonLogout onClick={() => history.push("/")}>Voltar</ButtonLogout>
      </Top>
      <Content>
        <h1>Crie sua conta</h1>
        <span>Rápido e grátis, vamos nessa!</span>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            register={register}
            name="name"
            icon={FiUser}
            label="Nome"
            placeholder="Seu nome"
            error={errors.name?.message}
          />
          <Input
            register={register}
            name="email"
            icon={FiMail}
            label="Email"
            placeholder="Seu melhor email"
            error={errors.email?.message}
          />
          <Input
            name="password"
            register={register}
            icon={FiLock}
            label="Senha"
            placeholder="Senha"
            type="password"
            error={errors.password?.message}
          />
          <Input
            register={register}
            name="confirmPassword"
            icon={FiLock}
            label="Confirmar senha"
            placeholder="Confirmar senha"
            type="password"
            error={errors.confirmPassword?.message}
          />
          <label>Selecionar módulo</label>
          <Select
            register={register}
            name="course_module"
            options={selects}
          ></Select>
          <Input
            name="bio"
            register={register}
            icon={FiSmile}
            label="Biografia"
            placeholder="Biografia"
            type="text"
            error={errors.password?.message}
          />
          <Input
            name="contact"
            register={register}
            icon={FiAtSign}
            label="Contato"
            placeholder="Contato"
            type="text"
            error={errors.password?.message}
          />
          <Button type="submit">Cadastrar</Button>
        </form>
      </Content>
    </Container>
  );
};

export default Signup;
