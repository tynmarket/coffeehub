import * as React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { path } from "../path/coffees_path";
import { CoffeeList } from "./CoffeeList";
import { Pickup } from "./Pickup";
import { Sidebar } from "./Sidebar";

export const Container: React.StatelessComponent<{}> = () => {
  return (
    <Router>
      <div className="container">
        <Sidebar />
        <main className="content">
          <Pickup />
          <Route exact={true} path="/" component={CoffeeList} />
          <Route path={path.roast} component={CoffeeList} />
        </main>
      </div>
    </Router>
  );
};
