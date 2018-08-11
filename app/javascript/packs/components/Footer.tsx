import * as React from "react";

export const Footer: React.StatelessComponent<{}> = () => {
  return (
    <footer className="footer">
      <p className="copyright">
        ©
        <a className="twitter-name" href="https://twitter.com/tynmarket" target="_blank">
          tynmarket
        </a>
      </p>
      <div className="github">
        <a href="https://github.com/tynmarket/coffeehub" target="_blank">
          <img src="/images/github.svg" />
         </a>
      </div>
      <div className="copyright-flaticon">
        Icons made by
        <a href="http://www.freepik.com" title="Freepik" target="_blank">
        &nbsp;Freepik&nbsp;
        </a>
        is licensed by
        <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">
          CC 3.0 BY
        </a>
      </div>
    </footer>
  );
};
