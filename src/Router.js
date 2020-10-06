import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Transaction001 from './transactions/Original'

const Router = () => {
  const companyName = "Medica"

  return (
    <BrowserRouter>
    <Switch>
    <Route path="/" exact>
      <Transaction001 companyName={companyName} />
    </Route>
    </Switch>
    </BrowserRouter>
  )
}

export default Router;
