import * as React from 'react';
import { Container } from './Container';
import { Footer } from './Footer';
import { Header } from './Header';

export const App: React.StatelessComponent<{}> = (): JSX.Element => {
  return (
    <div>
      <Header />
      <Container />
      <Footer />
    </div>
  );
};
