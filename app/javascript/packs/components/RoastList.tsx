import * as React from "react";

export const RoastList: React.StatelessComponent<{}> = () => {
  return (
    <div className="roast-select">
      <div className="roast-select-title">
        ロースト度合い
      </div>
      <ul className="roast-list">
        <li className="roast-list-item">
          <a className="coffee-color-cinnamon" href="/">
            シナモンロースト
          </a>
        </li>
        <li className="roast-list-item">
          <a className="coffee-color-medium" href="/">
            ミディアムロースト
          </a>
        </li>
        <li className="roast-list-item">
          <a className="coffee-color-high" href="/">
            ハイロースト
          </a>
        </li>
        <li className="roast-list-item">
          <a className="coffee-color-city" href="/">
            シティロースト
          </a>
        </li>
        <li className="roast-list-item">
          <a className="coffee-color-fullcity" href="/">
            フルシティロースト
          </a>
        </li>
        <li className="roast-list-item">
          <a className="rcoffee-color-french" href="/">
            フレンチロースト
          </a>
        </li>
      </ul>
    </div>
  );
};
