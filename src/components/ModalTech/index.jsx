import "react-responsive-modal/styles.css";
import { Content } from "./styles";
import { Modal } from "react-responsive-modal";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Input from "../Input";
import Button from "../Button";
import api from "../../services/api";
import Select from "../Select";
import toast, { Toaster } from "react-hot-toast";

const ModalTech = ({
  onOpenModal,
  onCloseModal,
  id,
  catchTech,
  title,
  setOpenTech,
}) => {
  const { register, handleSubmit } = useForm();

  const token = JSON.parse(localStorage.getItem("@KenzieHub:token"));

  const user = JSON.parse(localStorage.getItem("@KenzieHub:user"));

  const onSubmit = (data) => {
    api
      .put(`/users/techs/${id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        catchTech();
        setOpenTech(false);
        toast.success("Status atualizado");
      })
      .catch(() => toast.error("Ops, algo deu errado ):"));
  };

  const deleteTech = () => {
    api
      .delete(`/users/techs/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => toast.success("Tecnologia removida") && catchTech())
      .catch(() => toast.error("Ops, algo deu errado ):"));
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
          <h4>Tecnologia detalhes:</h4>
        </header>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            register={register}
            name="title"
            label="Nome"
            value={title}
            disabled={true}
          />
          <label>Nível</label>
          <Select register={register} name="status" options={selects}></Select>
          <div>
            <Button type="submit">Salvar alterações</Button>
            <Button
              graySchema
              type="button"
              onClick={() => {
                setOpenTech(false);
                deleteTech();
              }}
            >
              Excluir
            </Button>
          </div>
        </form>
      </Content>
    </Modal>
  );
};

export default ModalTech;
