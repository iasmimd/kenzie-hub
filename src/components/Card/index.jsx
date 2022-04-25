import { Container, Content } from "./styles";

const Card = ({ getTech, openTech, setId, setTitle }) => {
  return (
    <>
      {getTech.length > 0 ? (
        <>
          {getTech.map((tech) => (
            <Container
            key={tech.id}
              onClick={() => {
                openTech()
                setId(tech.id)
                setTitle(tech.title)
              }}
            >
              <Content 
              >
                <h3>{tech.title}</h3>
                <span>{tech.status}</span>
              </Content>
            </Container>
          ))}
        </>
      ) : (
        <Container>
          <h1>Ainda não possui tecnologias</h1>
        </Container>
      )}
    </>
  );
};

export default Card;
