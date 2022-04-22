import { Container, InputContainer } from "./styles";

const Input = ({ label, icon: Icon, register, name, error = "", ...rest }) => {
  return (
    <Container>
      <label>
        {label} {!!error && <span> - {error} </span>}
      </label>
      <InputContainer isErrored={!!error}>
        {Icon && <Icon size={20} />}
        <input {...register(name)} {...rest} />
      </InputContainer>
    </Container>
  );
};

export default Input;
