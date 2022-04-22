import { Container } from "./styles";

const Button = ({ children, graySchema = false, ...rest }) => {
  return (
    <Container graySchema={graySchema} type="button" {...rest}>
      {children}
    </Container>
  );
};

export default Button;
