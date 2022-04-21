import { useState, useEffect } from "react";
import { Route, Switch } from "react-router";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import Signup from "../pages/Signup";

const Routes = () => {
  const [autentication, setAutentication] = useState(false);

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("@Doit:token"));
    if (token) {
      return setAutentication(true);
    }
  }, [autentication]);

  return (
    <Switch>
      <Route exact path="/">
        <Login autentication={autentication} setAutentication={setAutentication}/>
      </Route>
      <Route path="/signup">
        <Signup autentication={autentication}/>
      </Route>
      <Route path="/dashboard">
        <Dashboard autentication={autentication}/>
      </Route>
    </Switch>
  );
};

export default Routes;
