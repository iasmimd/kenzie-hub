import "react-responsive-modal/styles.css";
import { Content } from "./styles";
import { Modal } from "react-responsive-modal";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Input from "../Input";
import Button from "../Button";
import api from "../../services/api";
import Select from "../Select";

const ModalTech = ({ onOpenModal, onCloseModal }) => {
  const { register, handleSubmit } = useForm();

  const token = JSON.parse(localStorage.getItem("@KenzieHub:token"));

  const [getTech, setGetTech] = useState(
    localStorage.getItem("@KenzieHub:tech")
      ? JSON.parse(localStorage.getItem("@KenzieHub:tech"))
      : ""
  );

  console.log(getTech)

  const onSubmit = (data) => {
    const { techs } = data;

    const id = getTech.find(({ id }) => id === techs.id);

    api
      .put(`/users/techs/${id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  const deleteTech = () => {};

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
          <Input register={register} name="title" label="Nome" />
          <label>Nível</label>
          <Select
            register={register}
            name="course_module"
            options={selects}
          ></Select>
          <div>
            <Button type="submit">Salvar alterações</Button>
            <Button graySchema type="submit" onClick={deleteTech}>
              Excluir
            </Button>
          </div>
        </form>
      </Content>
    </Modal>
  );
};

export default ModalTech;
