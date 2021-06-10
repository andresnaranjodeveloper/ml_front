import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

//* Components
import Home from "./components/home/Home";
import Search from "./components/search/Search";
import Detail from "./components/detail/Detail";

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/items" component={Search} />
          <Route exact path="/items/:id" component={Detail} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default Router;
