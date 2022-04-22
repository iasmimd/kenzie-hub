import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { useState } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "../Input";
import Button from "../Button";
import api from "../../services/api";

const ModalTech = ({ onOpenModal, onCloseModal }) => {
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
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
        <Input
          register={register}
          name="status"
          label="Selecionar status"
          error={errors.status?.message}
        />
        <Button type="submit" onClick={() => onCloseModal(false)}>Cadastrar tecnologia</Button>
      </form>
    </Modal>
  );
};

export default ModalTech;
