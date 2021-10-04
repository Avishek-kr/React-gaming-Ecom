import Home from "./pages/Home";
import React from "react";
import {BrowserRouter, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  )
}

export default App;

