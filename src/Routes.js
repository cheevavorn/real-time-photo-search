import React from "react";
import { Route } from "react-router-dom";

// component
import Home from "./features/home/Home";
import Search from "./features/search/Search";
import Photo from "./features/photo/Photo";

const Routes = () => {
  return (
    <div>
      <Route exact path="/" component={Home} />
      <Route exact path="/search" component={Search} />
      <Route exact path="/photo/:id" component={Photo} />
    </div>
  );
};

export default Routes;
