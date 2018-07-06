import * as React from 'react';
import { Header } from "./Header";
import { Container } from "./Container";
import { Footer } from "./Footer";

export const App: React.StatelessComponent<{}> = () => {
  return (
    <div>
      <Header />
      <Container />
      <Footer />
    </div>
  )
};
