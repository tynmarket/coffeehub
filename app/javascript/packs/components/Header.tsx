import * as React from "react";

export const Header: React.StatelessComponent<{}> = () => {
  return (
    <header className="header">
      <a className="header-logo" href="/">
        <img src="/images/icon.svg" />
        <span className="header-title">
          Coffee Hub
        </span>
      </a>
    </header>
  );
};
