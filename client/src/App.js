import Home from "./pages/Home";
import React from "react";
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Result from "./pages/Result";
import Product from "./pages/Product";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/result" component={Result} />
        <Route path="/:productId" component={Product} />

      </Switch>
    </BrowserRouter>
  )
}

export default App;

