import { OptionUnstyled } from "@mui/base";
import { Container } from "./styles";

const Select = ({ register, options, name, ...rest }) => {
  return (
    <Container {...register(name)} {...rest}>
      {options.map((value) => (
        <option key={value} value={value}>
          {value}
        </option>
      ))}
    </Container>
  );
};

export default Select;
