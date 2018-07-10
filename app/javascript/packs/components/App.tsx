import * as React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Container } from "./Container";
import { Footer } from "./Footer";
import { Header } from "./Header";

export const App: React.StatelessComponent<{}> = () => {
  return (
      <div>
        <Header />
        <Container />
        <Footer />
      </div>
  );
};
