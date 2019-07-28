import * as React from 'react';
import GitHub from 'images/github.svg';

export const Footer: React.StatelessComponent<{}> = (): JSX.Element => {
  return (
    <footer className="footer">
      <p className="copyright">
        ©
        <a
          className="twitter-name"
          href="https://twitter.com/tynmarket"
          target="_blank"
          rel="noopener noreferrer"
        >
          tynmarket
        </a>
      </p>
      <div className="github">
        <a
          href="https://github.com/tynmarket/coffeehub"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={GitHub} />
        </a>
      </div>
      <div className="copyright-flaticon">
        Icons made by
        <a
          href="http://www.freepik.com"
          title="Freepik"
          target="_blank"
          rel="noopener noreferrer"
        >
          &nbsp;Freepik&nbsp;
        </a>
        is licensed by
        <a
          href="http://creativecommons.org/licenses/by/3.0/"
          title="Creative Commons BY 3.0"
          target="_blank"
          rel="noopener noreferrer"
        >
          CC 3.0 BY
        </a>
      </div>
    </footer>
  );
};
