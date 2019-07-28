import * as React from 'react';
import { Link } from 'react-router-dom';
import { path } from '../path/coffees_path';

export const Sidebar: React.StatelessComponent<{}> = (): JSX.Element => {
  return (
    <aside className="sidebar">
      <section className="sidebar-content">
        <h3 className="section-roast-title">ロースト度合いから選ぶ</h3>
        <ul>
          <li className="sidebar-item">
            <Link to={path.cinnamonRoast} className="roast-cinnamon">
              シナモンロースト
            </Link>
          </li>
          <li className="sidebar-item">
            <Link to={path.mediumRoast} className="roast-medium">
              ミディアムロースト
            </Link>
          </li>
          <li className="sidebar-item">
            <Link to={path.highRoast} className="roast-high">
              ハイロースト
            </Link>
          </li>
          <li className="sidebar-item">
            <Link to={path.cityRoast} className="roast-city">
              シティロースト
            </Link>
          </li>
          <li className="sidebar-item">
            <Link to={path.fullcityRoast} className="roast-fullcity">
              フルシティロースト
            </Link>
          </li>
          <li className="sidebar-item">
            <Link to={path.frenchRoast} className="roast-french">
              フレンチロースト
            </Link>
          </li>
        </ul>
      </section>
    </aside>
  );
};
