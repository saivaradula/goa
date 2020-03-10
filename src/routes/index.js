import React from "react";
import { BrowserRouter, Switch } from 'react-router-dom';
import Route from "./routes";

import Login from "../components/public/login"; 
import HomePage from "../components/private/dashboard"; 

export default function Routes() {
  return (
    <BrowserRouter>
        <Switch>
          <Route path="/login" component={Login} /> 
          <Route component={Login} />
          
          <Route path="/" exact component={HomePage} />
          <Route path="/home" component={HomePage} /> 
                   
        </Switch>
    </BrowserRouter>
  );
}
