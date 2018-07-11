import * as React from "react";

export const Header: React.StatelessComponent<{}> = () => {
  return (
    <header className="header">
      <a className="header-logo" href="/">
        <img src="/icon.svg" />
        <span className="header-title">
          COFEE HUB
        </span>
      </a>
    </header>
  );
};
