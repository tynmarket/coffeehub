import * as React from "react";
import { Pickup } from "./Pickup"
import { Sidebar } from "./Sidebar"

export const Container: React.StatelessComponent<{}> = () => {
  return (
    <div className="container">
      <Sidebar />
      <main className="content">
        <Pickup />
      </main>
    </div>
  );
};
