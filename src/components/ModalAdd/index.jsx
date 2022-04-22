import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { useState } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "../Input";
import Button from "../Button";
import api from "../../services/api";
import Select from "../Select";
import toast, { Toaster } from "react-hot-toast";
import { Content } from "../ModalTech/styles";

const ModalAdd = ({ onOpenModal, onCloseModal }) => {
  const [tech, setTech] = useState([]);

  const schema = yup.object().shape({
    title: yup.string().required("Campo obrigatório"),
    status: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const token = JSON.parse(localStorage.getItem("@KenzieHub:token"));

  const onSubmit = (data) => {
    api
      .post("/users/techs", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setTech([...tech, res.data]);
        localStorage.setItem(
          "@KenzieHub:tech",
          JSON.stringify([...tech, res.data])
        )
          toast.success("Adicionado com sucesso")
      })
      .catch((err) => {
        toast.error("Algo deu errado ):")
        console.log(err);
      });
  };  

  const selects = ["Iniciante", "Intermediário", "Avançado"];

  return (
    <Modal
      open={onOpenModal}
      onClose={() => onCloseModal(false)}
      center
      classNames={{
        overlay: "customOverlay",
        modal: "customModal",
      }}
    >
      <Content>
      <header>
        <h4>Cadastrar tecnologia</h4>
      </header>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          register={register}
          name="title"
          label="Nome"
          error={errors.title?.message}
        />
          <label>Nível</label>
        <Select
          register={register}
          name="status"
          options={selects}
        ></Select>
        <Button type="submit">Cadastrar tecnologia</Button>
      </form>
      </Content>
    </Modal>
  );
};

export default ModalAdd;
