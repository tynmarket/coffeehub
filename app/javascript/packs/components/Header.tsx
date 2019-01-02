import * as React from "react";
import Icon from "images/icon.svg";

export const Header: React.StatelessComponent<{}> = () => {
  return (
    <header className="header">
      <a className="header-logo" href="/">
        <img src={Icon} />
        <span className="header-title">
          Coffee Hub
        </span>
      </a>
    </header>
  );
};
