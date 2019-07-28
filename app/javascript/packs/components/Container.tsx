import * as React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import { CoffeeList } from './CoffeeList';
import { Pickup } from './Pickup';
import { Sidebar } from './Sidebar';
import { path } from '../path/coffees_path';

export const Container: React.StatelessComponent<{}> = (): JSX.Element => {
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
