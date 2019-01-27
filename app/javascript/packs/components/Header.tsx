import Icon from "images/icon.svg";
import * as React from "react";

export const Header: React.StatelessComponent<{}> = () => {
  return (
    <header className="header">
      <a className="header-logo" href="/">
        <img src={Icon} />
        <span className="header-title">Coffee Hub</span>
      </a>
    </header>
  );
};
