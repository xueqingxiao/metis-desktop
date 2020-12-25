import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Landing from "./pages/Landing";
import Session from "./pages/Session";

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/:sessionId?" component={Landing} exact/>
      <Route path="/session/:uid" component={Session} exact/>
    </Switch>
  </BrowserRouter>
);

export default App;
