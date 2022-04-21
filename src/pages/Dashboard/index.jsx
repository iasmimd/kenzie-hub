import { Redirect } from "react-router-dom";

const Dashboard = ({ autentication }) => {
  if (!autentication) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <h1>cuuuuuu</h1>
    </>
  );
};

export default Dashboard;
