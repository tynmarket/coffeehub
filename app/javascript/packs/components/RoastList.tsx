import * as React from "react";
import { Link } from "react-router-dom";
import { path } from "../path/coffees_path";

interface Props {
  open: boolean;
}

export const RoastList: React.StatelessComponent<Props> = (props) => {
  return (
    <div className={`roast-select ${props.open ? "show" : null}`}>
      <div className="roast-select-title">
        ロースト度合い
      </div>
      <ul className="roast-list">
        <li className="roast-list-item">
          <Link to={path.cinnamonRoast} className="coffee-color-cinnamon">
            シナモンロースト
          </Link>
        </li>
        <li className="roast-list-item">
          <Link to={path.mediumRoast} className="coffee-color-medium">
            ミディアムロースト
          </Link>
        </li>
        <li className="roast-list-item">
          <Link to={path.highRoast} className="coffee-color-high">
            ハイロースト
          </Link>
        </li>
        <li className="roast-list-item">
          <Link to={path.cityRoast} className="coffee-color-city">
            シティロースト
          </Link>
        </li>
        <li className="roast-list-item">
          <Link to={path.fullcityRoast} className="coffee-color-fullcity">
            フルシティロースト
          </Link>
        </li>
        <li className="roast-list-item">
          <Link to={path.frenchRoast} className="coffee-color-french">
            フレンチロースト
          </Link>
        </li>
      </ul>
    </div>
  );
};
