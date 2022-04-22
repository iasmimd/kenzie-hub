import { Container, Content } from "./styles";

const Card = ({ getTech, openTech }) => {


  return (
    <>
      {getTech.length > 0 ? (
        <Container>
          {getTech.map(({ title, status, id }) => (
            <Content key={id}>
              <h3>{title}</h3>
              <span>{status}</span>
            </Content>
          ))}
        </Container>
      ) : (
        <Container>
        <h1>Adicione uma tecnologia!</h1>
        </Container>
      )}
    </>
  );
};

export default Card;
